import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
/* ================= CONTENT ================= */

const faqs = [
  {
    q: "How do you decide the final project cost?",
    a: "Pricing is based on scope, features, integrations and delivery timeline. After understanding your requirements, I share a clear and transparent breakdown so you know exactly where your investment goes.",
  },
  {
    q: "Do you also handle backend development?",
    a: "Yes. I build full-stack solutions using React on the frontend with Node.js or Python on the backend, including APIs, databases, authentication and third-party integrations.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Absolutely. Every project follows SEO-ready architecture, clean semantic HTML, optimized loading speed and best practices to improve visibility and rankings.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines depend on project complexity. A landing page may take 1–2 weeks, while business websites or custom web applications usually take 3–6 weeks.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. I offer post-launch support for fixes, monitoring, updates and scaling so your product remains stable, secure and future-ready.",
  },
];

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <>
   <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you decide the final project cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is based on scope, features, integrations and delivery timeline. After understanding your requirements, I share a clear and transparent breakdown so you know exactly where your investment goes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you also handle backend development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I build full-stack solutions using React on the frontend with Node.js or Python on the backend, including APIs, databases, authentication and third-party integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be SEO-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Every project follows SEO-ready architecture, clean semantic HTML, optimized loading speed and best practices to improve visibility and rankings."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a project usually take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines depend on project complexity. A landing page may take 1–2 weeks, while business websites or custom web applications usually take 3–6 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide post-launch support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I offer post-launch support for fixes, monitoring, updates and scaling so your product remains stable, secure and future-ready."
          }
        }
      ]
    })}
  </script>
</Helmet>


    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            FAQs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently asked <span className="text-blue-500">questions </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Clear answers to help you make confident decisions before starting your project.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                variants={item}
                className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur
                  transition-all duration-300
                  ${isOpen ? "shadow-[0_30px_80px_rgba(37,99,235,0.25)]" : ""}
                `}
              >
                {/* QUESTION */}
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.q}
                  </span>

                  <span
                    className={`ml-4 flex items-center justify-center w-8 h-8 rounded-full
                      border border-blue-500/30 text-blue-400
                      transition-transform duration-300
                      ${isOpen ? "rotate-45 bg-blue-500/10" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA / TRUST BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 md:mt-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center"
        >
        <div>
            <h3 className="text-2xl font-semibold mb-4">
               Still have questions?
            </h3>

            <p className="text-gray-400 mb-6">
               If something isn’t covered here, feel free to reach out. I’m happy
               to discuss your ideas and help you choose the right approach.
            </p>

          <div className="flex justify-center md:justify-start">
            <Link
               to="/Contact#contactform"
               className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
                Contact Me
            </Link>
         </div>
        </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src="/images/faqimage.webp"
              alt="Website development planning and UI UX strategy consultation"
              className="w-full h-72 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />
          </div>
        </motion.div>
      </div>
    </section>
  </>
  );
}