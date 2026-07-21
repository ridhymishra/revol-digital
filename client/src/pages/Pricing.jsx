import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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


export default function Pricing() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Pricing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Transparent pricing for{" "}
            <span className="text-blue-500">growth-ready websites</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Every project is different. These plans provide a clear starting
            point while ensuring quality, performance and long-term scalability.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            No hidden charges · Defined scope · Direct communication
          </p>
        </motion.div>

        {/* PRICING GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8"
        >

          {/* STARTER */}
          <motion.div variants={item}>
            <div
              className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition-all
                  duration-500
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  lg:hover:-translate-y-2
                  lg:hover:border-blue-500/40
              "
            >
              <h3 className="text-xl font-semibold mb-2">Starter Website</h3>
              <p className="text-gray-400 text-sm mb-6">
                Ideal for personal brands, freelancers and small businesses.
              </p>

              <div className="text-3xl font-bold mb-6">₹8,999+</div>

              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ Custom responsive UI</li>
                <li>✔ Mobile & tablet optimized</li>
                <li>✔ Fast loading structure</li>
                <li>✔ Contact form integration</li>
                <li>✔ SEO-friendly structure & metadata</li>
                <li>✔ Delivery: 3-4 Days </li>
              </ul>

              <Link
                 to="/Contact#contactform"
                 className="mt-8 w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition py-3 font-medium text-center block">
                Launch My Website
              </Link>
            </div>
          </motion.div>

          {/* BUSINESS (MOST POPULAR) */}
          <motion.div variants={item}>
            <div className="relative rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-500/15 to-transparent p-8 shadow-[0_0_80px_rgba(37,99,235,0.35)] scale-[1.02]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs rounded-full bg-blue-600 text-white">
                Most Popular
              </span>

              <h3 className="text-xl font-semibold mb-2">Business Website</h3>
              <p className="text-gray-400 text-sm mb-6">
                Best for startups and growing companies focused on conversions.
              </p>

              <div className="text-3xl font-bold mb-6">₹18,999+</div>

              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ Conversion-focused UI/UX</li>
                <li>✔ Designed for lead generation & growth</li>
                <li>✔ SEO-ready page structure</li>
                <li>✔ Performance optimization</li>
                <li>✔ CMS or admin panel</li>
                <li>✔ Analytics & tracking setup</li>
                <li>✔ Delivery: 7–10 Days</li>
              </ul>

              <Link
                 to="/Contact#contactform"
                 className="mt-8 w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition py-3 font-medium text-center block">
                Free Project Discussion
              </Link>
            </div>
          </motion.div>

          {/* CUSTOM */}
          <motion.div variants={item}>
            <div
              className="
                 rounded-2xl
                 border
                 border-white/10
                 bg-white/5
                 p-8
                 transition-all
                 duration-500
                 shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                 lg:hover:-translate-y-2
                 lg:hover:border-blue-500/40
            "
            >
              <h3 className="text-xl font-semibold mb-2">Custom Web Application</h3>
              <p className="text-gray-400 text-sm mb-6">
                Built for custom platforms, dashboards, portals and business-specific workflows.
              </p>

              <div className="text-3xl font-bold mb-6">Custom</div>

              <ul className="space-y-3 text-sm text-gray-300">
                <li>✔ React frontend + Node.js / Python backend</li>
                <li>✔ API & third-party integrations</li>
                <li>✔ Scalable architecture</li>
                <li>✔ Security best practices</li>
                <li>✔ Ongoing support available</li>
                <li>✔ Timeline depends on project scope</li>
              </ul>

              <Link
                 to="/Contact#contactform"
                 className="mt-8 w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition py-3 font-medium text-center block">
                Discuss Your Project
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* FOOTER NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 md:mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto"
        >
          Final pricing depends on scope, features and timeline. All projects are
          discussed clearly before starting — no surprises later.
        </motion.p>

      </div>
    </section>
  );
}