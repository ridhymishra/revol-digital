import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const MotionLink = motion(Link);

export default function About() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >

        {/* LEFT CONTENT */}
        <div>
          <motion.span
            variants={item}
            className="inline-block mb-4 px-4 py-1 text-sm rounded-full
            bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            About Me
          </motion.span>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Turning ideas into websites that{" "}
            <span className="text-blue-500">people enjoy using.</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed"
          >
            I’m <strong>Ridhy Mishra</strong>, a full-stack web developer 
            who enjoys turning ideas into meaningful digital experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 text-gray-400 leading-relaxed space-y-4"
          >
            <p>
              Every project begins with understanding the bigger picture. I work closely with clients to understand their goals, 
              audience and expectations before writing a single line of code.
            </p>
            <p>
              From frontend interfaces to backend functionality, I build complete web solutions that are easy to use,
              thoughtfully structured and aligned with the purpose behind the project.
            </p>
          </motion.div>

          {/* TRUST POINTS */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                ⏱️
              </div>
              <div>
                <p className="font-semibold">What I Value</p>
                <p className="text-sm text-gray-400">
                  Clear communication, respecting deadlines, thoughtful execution and long-term client relationships.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                🖥️
              </div>
              <div>
                <p className="font-semibold">Technologies I Work With</p>
                <p className="text-sm text-gray-400">
                  React, JavaScript, Tailwind CSS, Node.js, Python, SQL and web development tools.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
        <motion.div
           variants={item}
           className="mt-12 flex flex-col sm:flex-row gap-4" 
        >
         {/* Primary Button */}
        <motion.a
           href="#contact"
           whileHover={{ y: -4, scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 font-semibold text-white
                      shadow-[0_15px_50px_rgba(37,99,235,0.35)] transition-all duration-300 inline-flex items-center justify-center
                     "
         >
          <span className="relative z-10 flex items-center gap-2">
             Get In Touch
          <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
          </span>
          </span>

          <span
             className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent
                        group-hover:translate-x-[100%] transition-transform duration-700
                       "
          />
        </motion.a>

        {/* Secondary Button */}
       <MotionLink
              to="/services"
              onClick={() =>
              window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
        }
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-xl border border-white/15 bg-white/[0.03] backdrop-blur-xl text-white font-semibold
                         transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10
                         hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] inline-flex items-center justify-center gap-2
                        "
         >
              Explore Services

          <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
          />
         </svg>
         </MotionLink>
        </motion.div>
      </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={item}
          className={`
            relative w-full aspect-[4/3]
            rounded-2xl overflow-hidden
            border border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
            transition-transform duration-700
            lg:hover:scale-[1.02]
          `}
        >
          <img
            src="/images/aboutsec.webp"
            alt="Full stack web developer building modern websites using React and Node.js"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
        </motion.div>

      </motion.div>
    </section>
  );
}