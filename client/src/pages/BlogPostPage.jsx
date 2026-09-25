import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug, POSTS } from "../data/blog";
import { SERVICES } from "../data/services";

const Footer = lazy(() => import("./Footer"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedServiceData = SERVICES.filter((s) => post.relatedServices?.includes(s.slug));
  const otherPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://revoldigital.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://revoldigital.com/blog/${post.slug}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://revoldigital.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://revoldigital.com/blog/${post.slug}` },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: "Ridhy Mishra" },
            publisher: { "@type": "Organization", name: "Revol Digital", url: "https://revoldigital.com" },
          })}
        </script>
      </Helmet>

      <main className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black pointer-events-none" />

        <article className="relative max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav aria-label="Breadcrumb" className="mb-6 flex gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
            </nav>

            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">{post.excerpt}</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 space-y-10"
          >
            {post.body.map((section, i) => (
              <motion.div key={i} variants={item}>
                <h2 className="text-xl md:text-2xl font-bold mb-4">{section.h2}</h2>
                {section.p.map((para, j) => (
                  <p key={j} className="text-gray-300 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* RELATED SERVICES */}
          {relatedServiceData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-8"
            >
              <h3 className="text-lg font-semibold mb-4">Related services</h3>
              <div className="flex flex-wrap gap-3">
                {relatedServiceData.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-300 text-sm font-medium"
                  >
                    {s.shortTitle} →
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center rounded-3xl border border-white/10 bg-white/5 p-10"
          >
            <p className="text-gray-300 mb-5">Have a project in mind?</p>
            <Link
              to="/contact#contactform"
              className="btn-premium inline-block px-7 py-3 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-[0_15px_50px_rgba(37,99,235,0.45)] font-medium transition-all"
            >
              {post.ctaText}
            </Link>
          </motion.div>

          {/* MORE POSTS */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-5">More from the blog</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-white/10 bg-white/5 p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500"
                  >
                    <h4 className="font-semibold group-hover:text-blue-400 transition-colors">{p.title}</h4>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
