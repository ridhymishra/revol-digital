import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { POSTS } from "../data/blog";

const Footer = lazy(() => import("./Footer"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BlogPage() {
  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Helmet>
        <title>Blog | Web Development & SEO Insights | Revol Digital</title>
        <meta
          name="description"
          content="Practical, no-filler guides on website costs, React vs WordPress, choosing a developer, and SEO — written from real project experience."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://revoldigital.com/blog" />
        <meta property="og:title" content="Blog | Revol Digital" />
        <meta
          property="og:description"
          content="Practical guides on website costs, React vs WordPress, choosing a developer, and SEO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revoldigital.com/blog" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://revoldigital.com/blog" },
            ],
          })}
        </script>
      </Helmet>

      <main className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black pointer-events-none" />

        <section className="relative max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Practical Notes on Web Development & SEO
            </h1>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              No filler, no fluff — real breakdowns of cost, technology choices, and process,
              written from actually building these things.
            </p>
          </motion.div>
        </section>

        <section className="relative max-w-5xl mx-auto px-6 pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {sorted.map((post) => (
              <motion.div key={post.slug} variants={item}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-blue-400 text-sm font-medium">
                    Read article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
