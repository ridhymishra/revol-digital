import { Link } from "react-router-dom";

const services = [
  {
    title: "Full-Stack Development",
    desc: "Clean and production-ready websites.",
    img: "/images/fullstackservicecard.webp",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Landing Page Engineering",
    desc: "High-converting pages built with CRO strategy.",
    img: "/images/landingcardservice.webp",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "SEO Optimization",
    desc: "Core Web Vitals + blazing fast performance.",
    img: "/images/seooptimizecard.webp",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "UI / UX Design",
    desc: "Modern design and user-focused interfaces.",
    img: "/images/uiuxdesigncard.webp",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function ServiceHero() {
  return (
   <section className="relative min-h-screen bg-[#0b0f19] text-white px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
      <div
         className="absolute inset-0"
         style={{
         background:
             "radial-gradient(circle at 20% 40%, rgba(59,130,246,0.08), transparent 40%)",
        }}
      />
     <div className="absolute inset-0 overflow-hidden">
     <div className="absolute top-32 left-0 w-[700px] h-[1px] bg-blue-500/10 rotate-6" />
     <div className="absolute bottom-32 right-0 w-[700px] h-[1px] bg-blue-500/10 -rotate-6" />
     </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative z-30">
          <p className="inline-block bg-white/10 text-xs mt-8 px-4 py-2 rounded-full mb-6 text-gray-300">
            OUR SERVICES
          </p>

         <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            Services designed to 
            build, scale and grow <br />
           <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
             your digital presence
           </span>
        </h1>

        <p className="text-gray-400 mb-8 max-w-md">
           I provide end-to-end solutions from UI/UX design to full-stack development 
           and performance optimization — tailored for startups and businesses.
        </p>

        <div className="flex gap-4">
         <Link to="/portfolio" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
           View My Work →
         </Link>

         <Link to="/Contact#contactform" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10
         ">
            Start a Project
         </Link>
        </div>
        </div>

        {/* RIGHT SIDE CARDS */}
      <div className="relative flex justify-center items-center min-h-[500px] lg:h-[600px] overflow-hidden lg:mt-12 ">
       
       {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full"></div>

       {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0b0f11] to-transparent z-10"></div>

       {/* SLIDER */}
      <div className="flex gap-8 animate-slider min-w-max">
       {[...services, ...services, ...services].map((service, index) => (
        <Link
              key={index}
              to="/Contact#contactform"
              className="relative w-[250px] h-[560px] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] group flex-shrink-0 cursor-pointer block"
        >
        
        {/* IMAGE */}
        <img
          src={service.img}
          loading="lazy"
          alt={`${service.title} service by Revol Digital`}
          className="absolute inset-0 w-full h-full object-cover object-center
                     group-hover:scale-105 transition duration-700 "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>

        {/* NUMBER */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs w-10 h-10 flex items-center justify-center rounded-full font-semibold z-20">
          {String((index % services.length) + 1).padStart(2, "0")}
        </div>

        {/* CONTENT */}
       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
              {service.title}
          </h3>

          <p className="text-sm text-white/80 mb-4 leading-relaxed">
             {service.desc}
          </p>

          <span
             className={`inline-block bg-gradient-to-r ${service.color} px-4 py-2 rounded-full text-xs font-medium shadow-lg`}
          >
             Get Started →
          </span>
        </div>
        
      </Link>
    ))}
  </div>

</div>
      </div>
    </section>
  );
}