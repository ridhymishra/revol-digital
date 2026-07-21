import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


/* ================= ANIMATION VARIANTS ================= */
const ThreeBackground = lazy(() =>
  import("../components/ThreeBackground")
);

const DesktopMockup = lazy(() => import("../components/DesktopMockup"));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, 
      delayChildren: 0.3,
    },
  },
};

const MotionLink = motion(Link);

const item = (reduceMotion) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0.4 : 0.9,
      ease: "easeOut",
    },
  },
});
 
export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section id="home" aria-label="Hero section" className="relative min-h-[105vh] lg:min-h-[105vh] flex lg:items-center overflow-hidden pt-28 pb-16 lg:py-0">
        
       {/* 3D BACKGROUND */}
         <Suspense fallback={null}>
             <ThreeBackground />
         </Suspense>

       {/* RIGHT SIDE GLOW */}
      <div
         className="
            absolute
            right-[-80px]
            top-1/2
            -translate-y-1/2
            w-[280px]
            sm:w-[420px]
            lg:w-[650px]
            h-[180px]
            sm:h-[300px]
            lg:h-[450px]
            bg-blue-500/40
            blur-[25px]
            sm:blur-[50px] lg:blur-[140px]
            rounded-full
            z-[1]
            pointer-events-none
         "
      />

      {/* DARK OVERLAY */}
       <div className="absolute inset-0 bg-black/65 z-[2]" />

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.25fr] gap-12 lg:gap-10 items-center">
          
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-blue-600/30 blur-[50px] lg:blur-[120px] rounded-full pointer-events-none" />
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-[650px]"
          >

          <h1
             className="
                    text-[clamp(2rem,6vw,58px)]
                    font-bold
                    leading-[1.08]
                   "
           >
  
              <span className="block lg:whitespace-nowrap">
                 Custom React Websites
              </span>
                 
              <span className="block lg:whitespace-nowrap">
                 That Turn{" "}
              <span className="text-blue-500">
              <TypeAnimation
                 sequence={[
                     "Visitors",
                      2000,
                     "Traffic",
                      2000,
                     "Users",
                      2000,
                    
                 ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
             </span>
            
              <span className="block lg:whitespace-nowrap">
                 Into <span className="text-blue-500">Customers</span>
              </span>

            </h1>

            <motion.p
              variants={item(shouldReduceMotion)}
              className="mt-6 text-gray-400 max-w-[620px] text-base sm:text-lg leading-relaxed"
            >
             I design and develop fast, responsive and scalable React websites that deliver seamless user experiences across all devices. Every project 
             is built with clean code, modern design standards and a strong focus on long-term performance and maintainability.
            </motion.p>

            <motion.div
              variants={item(shouldReduceMotion)}
              className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm text-white/70"
            >
              <span>📈 SEO-Optimized Structure</span>
              <span>🎯 Conversion-Focused Design</span>
              <span>⚡ Fast Loading Experience</span>
              <span>🔐 Reliable & Secure Code</span>
            </motion.div>

            <motion.div
              variants={item(shouldReduceMotion)}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <MotionLink 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-xl bg-blue-600
                     shadow-lg shadow-blue-600/30 text-center"
              >
                Get Your Free Website Strategy
              </MotionLink>

              <MotionLink
                whileHover={{ scale: 1.05 }}
                to="/portfolio"
                className="w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-xl border border-white/20 
                bg-white/5 hover:bg-white/10 transition text-center"
              >
                View Work →
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <div className="absolute inset-0 scale-90 bg-blue-500/30 blur-[40px] lg:blur-[80px] rounded-full pointer-events-none"/>
            <div className="absolute right-[-100px] bottom-[-50px] w-[280px] sm:w-[420px] lg:w-[650px] h-[180px] sm:h-[300px] lg:h-[450px] 
            bg-blue-500/30 blur-[25px] sm:blur-[50px] lg:blur-[140px] rounded-full pointer-events-none"/>
            <div className="absolute inset-0 bg-blue-600/35 blur-[40px] lg:blur-[70px] pointer-events-none" />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="relative rounded-3xl border border-blue-400/20
              bg-white/5 backdrop-blur-xl p-4
              shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
            >
             
             <Suspense fallback={<div className="h-[350px]" />}>
                <DesktopMockup />
             </Suspense>
           
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
