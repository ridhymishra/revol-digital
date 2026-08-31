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


export default function WhyChooseUs() {

  const features = [
    {
      title: "1 Year Free Domain & Hosting",
      desc: "Get a complete website setup with free domain and hosting for the first year.",
      icon: "🖥️",
    },
    {
      title: "Dynamic & Modern Websites",
      desc: "Interactive, fast and visually engaging websites built with modern frameworks.",
      icon: "⚡",
    },
    {
      title: "Affordable Pricing",
      desc: "Pocket-friendly plans starting from ₹7,999 only (18% GST applicable).",
      icon: "💰",
    },
    {
      title: "On-Time Project Delivery",
      desc: "Well-planned execution with clear milestones and timely delivery.",
      icon: "⏱️",
    },
    {
      title: "High-Quality Development",
      desc: "Clean code, scalable architecture and SEO-optimized structure.",
      icon: "✅",
    },
    {
      title: "24×7 Support",
      desc: "Post-launch support, maintenance and quick issue resolution.",
      icon: "🎧",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">

      {/* GRID + GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/15 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full
            bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Top Web Design Developers in{" "}
            <span className="text-blue-500">India</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            We build reliable, conversion-focused websites that help
            businesses grow faster in the digital world.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((itemData) => (
            <motion.div key={itemData.title} variants={item}>
              <div
                className={`
                  group relative rounded-2xl p-8
                  border border-white/10 bg-white/5 backdrop-blur-lg
                  transition-all duration-500
                  shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  
                  lg:hover:-translate-y-2
                  lg:hover:border-blue-500/40
                  lg:hover:shadow-[0_30px_80px_rgba(37,99,235,0.25)]
                `}
              >
                {/* ICON */}
                <div className="text-4xl mb-6">{itemData.icon}</div>

                {/* CONTENT */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {itemData.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {itemData.desc}
                </p>

                {/* HOVER GLOW (DESKTOP ONLY) */}
                <div
                  className="
                       pointer-events-none
                       absolute
                       inset-0
                       rounded-2xl
                       opacity-0
                       transition-opacity
                       duration-300
                       lg:group-hover:opacity-100
                       bg-gradient-to-tr
                       from-blue-500/10
                       via-transparent
                       to-transparent
                      "
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}