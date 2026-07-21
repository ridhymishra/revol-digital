import { motion } from "framer-motion";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const isMobile =
  typeof window !== "undefined" &&
  window.innerWidth < 768;

export default function ServicesPreview() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* GRID + GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(37,99,235,0.2),transparent_50%)]" />

      {/* HERO */}
      <section id="services" className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 text-center">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 mb-6">
          🚀 Web Development Services
        </span>

        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
          Services Designed Around {" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Your Business Needs
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Whether you're starting from scratch, improving an existing website, 
          or looking for long-term support, each service is focused on helping your business build a stronger online presence.
        </p>
      </section>

      {/* SERVICES */}
      <section className="relative max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <ServiceCard
            title="Full-Stack Website Development"
            tag="Core Service"
            image="/images/fullstackdevelopment.webp"
            desc="End-to-end web development covering frontend, backend, database architecture, and creating digital platforms that scale with your business."
          />

          <ServiceCard
            title="Landing Page Engineering"
            tag="Conversion"
            image="/images/landingpage.webp"
            desc="Create dedicated pages designed to showcase a specific offer, campaign, or service while encouraging visitors to take action."
          />

          <ServiceCard
            title="SEO & Performance Optimization"
            tag="Growth"
            image="/images/SEOpage.webp"
            desc="Improve website speed, technical structure, and search visibility to deliver a smoother experience and reach more potential customers."
          />

          <ServiceCard
            title="UI / UX Engineering"
            tag="Design"
            image="/images/uiux.webp"
            desc="Design clean and intuitive interfaces that help visitors navigate easily, understand your message, and engage with your content."
          />

          <ServiceCard
            title="Website Redesign"
            tag="Upgrade"
            image="/images/websiteredesign.webp"
            desc="Transform an outdated website with a modern appearance, better organization, and an improved user experience."
          />

          <ServiceCard
            title="Long-Term Support"
            tag="Support"
            image="/images/support.webp"
            desc="Keep your website secure, updated, and functioning properly with ongoing technical assistance and regular improvements."
          />
        </motion.div>
      </section>
    </main>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ title, tag, image, desc }) {
  return (
    <motion.div variants={item}>
      <div
        className={`
          group rounded-2xl overflow-hidden
          bg-white/5 border border-white/10 backdrop-blur-lg
          transition-all duration-500
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          
          lg:[perspective:1200px]
          lg:hover:-translate-y-2
          lg:hover:border-blue-500/30
          lg:hover:shadow-[0_60px_140px_rgba(37,99,235,0.35)]
        `}
      >
        {/* IMAGE */}
        <img
          src={image}
          alt={`${title} service offered by Revol Digital`}
          loading="lazy"
          decoding="async"
          className="w-full h-56 object-cover object-center"
        />

        {/* CONTENT */}
        <div className="p-6">
          <span className="text-xs uppercase tracking-wider text-blue-400">
            {tag}
          </span>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-gray-400 text-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}