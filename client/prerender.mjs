// Build-time static prerendering for SEO/AEO crawlers.
//
// This app mounts with `createRoot` (plain client-side rendering, not
// `hydrateRoot`), so overwriting each route's dist/index.html with fully
// rendered markup is safe: React just re-renders over it for real
// visitors with JS, while crawlers/bots that don't execute JS (many AEO
// bots, link-preview scrapers, and Googlebot's first crawl pass) get
// real text instead of an empty <div id="root">.
//
// This whole script is best-effort: if anything here fails (e.g. a host
// environment that can't run headless Chromium), it logs a warning and
// exits 0 so `npm run build` — and the deploy — still succeeds with the
// plain client-rendered build, same as before this script existed.
import { execSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";
import { SERVICES } from "./src/data/services.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist");

// Service page routes are derived from the same data file the app itself
// renders from, so this list can't drift out of sync with what actually exists.
const ROUTES = [
  "/",
  "/services",
  "/portfolio",
  "/contact",
  ...SERVICES.map((s) => `/services/${s.slug}`),
];

function outPathFor(route) {
  return route === "/" ? join(distDir, "index.html") : join(distDir, route.slice(1), "index.html");
}

async function scrollThroughPage(page) {
  // Every homepage/portfolio/services section reveals via framer-motion's
  // whileInView (IntersectionObserver), which never fires unless the
  // element actually crosses the viewport — so we scroll the full page
  // height before capturing, letting every section reach its final
  // "show" state (all `viewport={{ once: true }}`, so it sticks).
  const height = await page.evaluate(() => document.body.scrollHeight);
  let y = 0;
  while (y < height) {
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(180);
    y += 800;
  }
  await page.waitForTimeout(400);
}

async function launchBrowser() {
  // Vercel's build host (like AWS Lambda, which it's built on) is missing
  // the shared libraries (libnss3, libnspr4, etc.) a normal downloaded
  // Chromium binary needs to launch, and there's no root to apt-get them in
  // (confirmed: that's what broke the first attempt at this, which used
  // `playwright install chromium --with-deps`). @sparticuz/chromium ships a
  // Chromium build specifically compiled to run without those libraries on
  // exactly this kind of constrained Linux host, which a normal `playwright
  // install chromium` download does not provide on its own.
  //
  // Locally (Windows/Mac dev), that Linux-only binary doesn't apply, so use
  // a normal Playwright-downloaded Chromium instead — same as before.
  const isConstrainedLinuxHost = process.env.VERCEL === "1" || process.env.CI === "true";

  if (isConstrainedLinuxHost) {
    const [{ chromium }, sparticuzChromium] = await Promise.all([
      import("playwright-core"),
      import("@sparticuz/chromium").then((m) => m.default),
    ]);
    const executablePath = await sparticuzChromium.executablePath();
    console.log("Launching @sparticuz/chromium at", executablePath);
    return chromium.launch({
      executablePath,
      args: sparticuzChromium.args,
      headless: true,
    });
  }

  execSync("npx --yes playwright install chromium", { stdio: "inherit" });
  const { chromium } = await import("playwright");
  return chromium.launch({ args: ["--no-sandbox"] });
}

async function run() {
  const server = await preview({
    preview: { port: 4174, strictPort: true },
  });
  const base = `http://localhost:4174`;

  const browser = await launchBrowser();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  // Capture every route into memory FIRST, then write to disk only once all
  // routes are done. The preview server falls back to dist/index.html for
  // any path it doesn't have a file for yet (same SPA-fallback behavior as
  // Vercel) — if we wrote files mid-loop, overwriting dist/index.html with
  // the rendered homepage would make every *subsequent* route's fallback
  // load see the homepage's already-baked-in tags instead of the pristine
  // shell, duplicating title/canonical/description across routes.
  const results = [];
  for (const route of ROUTES) {
    const page = await context.newPage();
    await page.goto(base + route, { waitUntil: "networkidle", timeout: 60000 });
    await scrollThroughPage(page);

    const html = await page.content();
    results.push({ route, outPath: outPathFor(route), html });

    await page.close();
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  for (const { route, outPath, html } of results) {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`prerendered ${route} -> ${outPath.replace(distDir, "dist")}`);
  }
}

// vercel.json rewrites /services, /portfolio, /contact and /services/:slug
// straight to their prerendered file with no SPA fallback (that's what
// makes invalid URLs correctly 404 instead of silently serving the
// homepage). That means if prerendering fails and those files never get
// created, every one of those routes 404s for real visitors too, not just
// crawlers — confirmed as a live outage once already. So on any failure,
// copy the plain (already client-renderable) index.html to every route's
// expected path: rewrites still find a file, degrading to "same as before
// this whole feature existed" instead of a hard 404.
function writePlainFallback() {
  const plainIndex = join(distDir, "index.html");
  if (!existsSync(plainIndex)) return;
  for (const route of ROUTES) {
    if (route === "/") continue;
    const outPath = outPathFor(route);
    mkdirSync(dirname(outPath), { recursive: true });
    copyFileSync(plainIndex, outPath);
  }
  console.warn("Wrote plain-shell fallback files for every route so rewrites still resolve.");
}

run().catch((err) => {
  console.warn("=== PRERENDER SKIPPED — build continues with the plain client-rendered output ===");
  console.warn(err?.stack || err);
  writePlainFallback();
  process.exit(0);
});
