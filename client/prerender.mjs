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
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { preview } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist");

const ROUTES = ["/", "/services", "/portfolio", "/contact"];

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

async function run() {
  // No --with-deps: that shells out to apt-get, which needs root and isn't
  // available on most CI/build hosts (that's what broke the first attempt
  // of this on Vercel). Just the browser binary — if the host is missing a
  // shared library Chromium needs to launch, the outer try/catch in main()
  // below catches that too and degrades gracefully.
  execSync("npx --yes playwright install chromium", { stdio: "inherit" });

  const { chromium } = await import("playwright");

  const server = await preview({
    preview: { port: 4174, strictPort: true },
  });
  const base = `http://localhost:4174`;

  const browser = await chromium.launch({ args: ["--no-sandbox"] });
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
    const outPath =
      route === "/" ? join(distDir, "index.html") : join(distDir, route.slice(1), "index.html");
    results.push({ route, outPath, html });

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

run().catch((err) => {
  console.warn("Prerender skipped (build continues with the plain client-rendered output):", err?.message || err);
  process.exit(0);
});
