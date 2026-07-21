import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
     {
        title: "Business Website",
        subtitle: "Business Growth Platform",
        tech: "React • Tailwind • SEO",
        image: "/images/businesswebsite.webp",
        desc: "Professional website built to establish trust, showcase services clearly and convert visitors into valuable business inquiries.",
     },
     {
        title: "Startup Landing Page",
        subtitle: "Product Launch Experience",
        tech: "UI/UX • CRO • Speed",
        image: "/images/allinonelandingpage.webp",
        desc: "Conversion-focused landing page crafted to communicate value quickly and guide users toward meaningful actions.",
     },
     {
        title: "Personal Portfolio",
        subtitle: "Personal Brand Showcase",
        tech: "Branding • Design System",
        image: "/images/portfoliowebsite.webp",
        desc: "A modern digital presence designed to present work, tell a story and leave a memorable first impression.",
      },
      ];

export default function Portfolio() { 
      const [activeSlide, setActiveSlide] = useState(0);

     useEffect(() => {
       let timer;

       const startSlider = () => {
        clearInterval(timer);

       timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % projects.length);
       }, 4000);
      };

      const stopSlider = () => {
        clearInterval(timer);
      };

      const handleVisibility = () => {
       if (document.hidden) {
         stopSlider();
       } else {
       startSlider();
      }
     };

     startSlider();

    document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        stopSlider();
        document.removeEventListener("visibilitychange", handleVisibility);
    };
   }, []);

   return (
    <main id="portfolio" className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.2),transparent_50%)]" />

      {/* HEADER */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 sm:pt-28 pb-12 sm:pb-20">

       {/* Section Label */}
        <div className="mb-6 flex items-center gap-4">
           <div className="h-px w-16 bg-blue-500" />
           <span className="text-blue-400 text-sm tracking-[0.3em] uppercase">
              FEATURED PROJECTS
           </span>
        </div>

        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-4xl sm:text-5xl lg:text-6xl font-bold"
        >
          Crafted <span className="text-blue-500">Experiences</span>
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed"
        >
          Explore a range of projects including landing pages, web platforms,
          portfolios and user-focused interfaces designed with modern aesthetics
          and thoughtful functionality.
        </motion.p>

      </section>
      
      {/* PROJECTS */}
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ProjectRow {...projects[activeSlide]} />
      </div>

     <div className="flex justify-center gap-3 mt-10 pb-10">
      {projects.map((_, index) => (
      <button
        key={index}
        aria-label={`View project ${index + 1}`}
        aria-current={activeSlide === index}
        onClick={() => setActiveSlide(index)}
        className={`h-2 rounded-full transition-all duration-300 ${
           activeSlide === index
             ? "w-8 bg-blue-500"
             : "w-2 bg-white/20"
        }`}
     />
     ))}
    </div>
    </section>
    </main>
  );
}

/* ================= PROJECT ROW ================= */
function ProjectRow({ title, image, desc, tech, subtitle }) {
  return (
    <div className="w-full flex items-center justify-center">
      
      {/* Main Image Card */}
      <div
        className="
        relative
        w-full
        max-w-[1200px]
        rounded-[40px]
        overflow-hidden
        border border-white/10
        bg-[#081327]
        shadow-[0_20px_70px_rgba(0,0,0,0.35)]
        "
      >
        {/* Browser Top Bar */}
       <div className="relative h-16 flex items-center justify-between px-6 bg-[#0f1c36] border-b border-white/10">
  
          {/* Left Dots */}
         <div className="flex items-center gap-2">
           <span aria-hidden="true" className="w-3 h-3 rounded-full bg-red-400" />
           <span aria-hidden="true" className="w-3 h-3 rounded-full bg-yellow-400" />
           <span aria-hidden="true" className="w-3 h-3 rounded-full bg-green-400" />
         </div>

        {/* Center Title */}
         <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none max-w-[140px] sm:max-w-none">
           <h3 className="text-xs sm:text-lg font-semibold text-white truncate">
              {title}
           </h3>

           <p className="hidden sm:block text-xs text-blue-300">
             {subtitle}
           </p>
         </div>

        <div className="ml-auto px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs">
           ● Live
        </div>

      </div>


  {/* Website Screenshot */}
      <img
          src={image}
          alt={`${title} website development project by Revol Digital`}
          loading="lazy"
          decoding="async"
          className="
           w-full
           h-auto
           sm:h-[380px]
           lg:h-[500px]
           object-cover
           object-top
          "
      />
       
       <div className="p-4 sm:p-6 bg-[#081327] border-t border-white/10">
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            {desc}
          </p>

         <div className="mt-5 flex flex-wrap gap-3">
           {tech.split("•").map((item, index) => (
            <span
               key={index}
               className="
                 px-3 sm:px-4
                 py-1.5 sm:py-2
                 rounded-full
                 bg-white/5
                 border border-white/10
                 text-xs sm:text-sm
                 text-slate-300
               "
            >
             {item.trim()}
          </span>
          ))}
        </div>
       </div>
</div>
</div>
  );
}