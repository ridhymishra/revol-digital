import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef, useState, useEffect } from "react";
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const lineReveal = (reduceMotion) => ({
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: reduceMotion ? 1 : 0 },
  show: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: {
      duration: reduceMotion ? 0.4 : 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // Only fetch the ~300kB three.js chunk on desktop with motion enabled —
  // ThreeBackground itself renders null on mobile, but that check happens
  // *after* the chunk has already downloaded, so gate it here instead.
  const [canShowThree, setCanShowThree] = useState(false);
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setCanShowThree(isDesktop && !reduceMotion);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 60]);

  return (
    <main className="bg-black text-white overflow-hidden">

      <Helmet>
        <title>React Website Development Company | Revol Digital</title>
        <meta
          name="description"
          content="Revol Digital builds fast, SEO-optimized React websites for businesses and startups: custom development, responsive design, real performance focus."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://revoldigital.com/" />
        <meta property="og:title" content="React Website Development Company | Revol Digital" />
        <meta property="og:description" content="Fast, responsive and SEO-optimized websites using React & Node.js." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revoldigital.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "React Website Development Company | Revol Digital",
            url: "https://revoldigital.com/",
            isPartOf: { "@type": "WebSite", name: "Revol Digital", url: "https://revoldigital.com" },
          })}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} id="home" aria-label="Hero section" className="relative min-h-[105vh] lg:min-h-[105vh] flex lg:items-center overflow-hidden pt-28 pb-16 lg:py-0">

        {/* CINEMATIC GRAIN */}
        <div className="grain-overlay z-[3]" aria-hidden="true" />

       {/* 3D BACKGROUND (desktop only — skips the three.js download on mobile) */}
         {canShowThree && (
           <Suspense fallback={null}>
               <ThreeBackground />
           </Suspense>
         )}

       {/* RIGHT SIDE GLOW */}
      <motion.div
         style={{ y: glowY }}
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
        <motion.div style={{ y: contentY }} className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.25fr] gap-12 lg:gap-10 items-center">

          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-blue-600/30 blur-[50px] lg:blur-[120px] rounded-full pointer-events-none" />
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-[650px]"
          >

          <motion.h1
             variants={container}
             className="
                    text-[clamp(2rem,6vw,58px)]
                    font-bold
                    leading-[1.08]
                   "
           >

              <span className="reveal-line">
                <motion.span variants={lineReveal(shouldReduceMotion)} className="block lg:whitespace-nowrap">
                   Custom React Websites
                </motion.span>
              </span>

              <span className="reveal-line">
                <motion.span variants={lineReveal(shouldReduceMotion)} className="block lg:whitespace-nowrap">
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
                </motion.span>
              </span>

              <span className="reveal-line">
                <motion.span variants={lineReveal(shouldReduceMotion)} className="block lg:whitespace-nowrap">
                   Into <span className="text-blue-500">Customers</span>
                </motion.span>
              </span>

            </motion.h1>

            <motion.p
              variants={item(shouldReduceMotion)}
              className="mt-6 text-gray-400 max-w-[620px] text-base sm:text-lg leading-relaxed"
            >
             I design and develop fast, responsive and scalable React websites that deliver seamless user experiences across all devices. Every project 
             is built with clean code, modern design standards and a strong focus on long-term performance and maintainability.
            </motion.p>

            <motion.div
              variants={item(shouldReduceMotion)}
              className="mt-6 flex flex-wrap gap-2.5 text-sm text-white/70"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">📈 SEO-Optimized Structure</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">🎯 Conversion-Focused Design</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">⚡ Fast Loading Experience</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">🔐 Reliable & Secure Code</span>
            </motion.div>

            <motion.div
              variants={item(shouldReduceMotion)}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <MotionLink
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                to="/contact"
                className="btn-premium group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-xl bg-blue-600
                     shadow-lg shadow-blue-600/30 hover:shadow-[0_15px_50px_rgba(37,99,235,0.45)] text-center"
              >
                <span className="relative z-10">Get Your Free Website Strategy</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </MotionLink>

              <MotionLink
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                to="/portfolio"
                className="btn-premium w-full sm:w-auto flex items-center justify-center px-7 py-3 rounded-xl border border-white/20
                bg-white/5 hover:bg-white/10 hover:border-blue-400/40 transition text-center"
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

        </motion.div>
      </section>
    </main>
  );
}
