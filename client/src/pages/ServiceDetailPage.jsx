import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getServiceBySlug, PROCESS_STEPS, BENEFITS, SERVICES } from "../data/services";

const Footer = lazy(() => import("./Footer"));

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) return <Navigate to="/services" replace />;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://revoldigital.com/services/${service.slug}`} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://revoldigital.com/services/${service.slug}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://revoldigital.com/services" },
              { "@type": "ListItem", position: 3, name: service.shortTitle, item: `https://revoldigital.com/services/${service.slug}` },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            serviceType: service.title,
            provider: { "@type": "Organization", name: "Revol Digital", url: "https://revoldigital.com" },
            areaServed: "Worldwide",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <main className="relative bg-black text-white overflow-hidden">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black pointer-events-none" />

        {/* HERO */}
        <section className="relative max-w-5xl mx-auto px-6 pt-32 md:pt-40 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* BREADCRUMB */}
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gray-300">{service.shortTitle}</span>
            </nav>

            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {service.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {service.title}
            </h1>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {service.intro}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <MotionLink to="/contact#contactform" text="Get Started" primary />
              <MotionLink to="/portfolio" text="View My Work" />
            </div>
          </motion.div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="relative max-w-5xl mx-auto px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={item} className="text-2xl md:text-3xl font-bold mb-6">
              Who this is for
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.whoFor.map((w, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-gray-300 leading-relaxed"
                >
                  {w}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="relative max-w-5xl mx-auto px-6 pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={item} className="text-2xl md:text-3xl font-bold mb-6">
              What's included
            </motion.h2>
            <motion.ul variants={item} className="grid sm:grid-cols-2 gap-3">
              {service.includes.map((inc, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                  <span className="text-blue-400 mt-1">✔</span>
                  <span>{inc}</span>
                </li>
              ))}
            </motion.ul>

            {/* TECH */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="relative max-w-6xl mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
          >
            How it works
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div key={step.number} variants={item} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                  {step.number}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* BENEFITS */}
        <section className="relative max-w-6xl mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
          >
            Why work with Revol Digital
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                variants={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:hover:-translate-y-1 lg:hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQS */}
        <section className="relative max-w-4xl mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
          >
            Frequently asked questions
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {service.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <span
                      className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/30 text-blue-400 transition-transform duration-300 ${isOpen ? "rotate-45 bg-blue-500/10" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-gray-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* RELATED SERVICES */}
        <section className="relative max-w-6xl mx-auto px-6 pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            Other services
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-3 gap-5"
          >
            {related.map((r) => (
              <motion.div key={r.slug} variants={item}>
                <Link
                  to={`/services/${r.slug}`}
                  className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500"
                >
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">{r.shortTitle}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{r.intro.slice(0, 90)}…</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="relative max-w-4xl mx-auto px-6 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/15 to-transparent p-10 md:p-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Let's talk about your project</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Share your goals, ideas or challenges and I'll help you identify the best path forward.
            </p>
            <div className="mt-8 flex justify-center">
              <MotionLink to="/contact#contactform" text="Get Free Consultation" primary />
            </div>
          </motion.div>
        </section>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

const M = motion(Link);

function MotionLink({ to, text, primary }) {
  return (
    <M
      to={to}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={
        primary
          ? "btn-premium group relative overflow-hidden px-7 py-3 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 hover:shadow-[0_15px_50px_rgba(37,99,235,0.45)] text-center font-medium"
          : "btn-premium px-7 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 transition text-center font-medium"
      }
    >
      {text}
    </M>
  );
}
