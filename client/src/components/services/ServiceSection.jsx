import {
  Code2,
  Palette,
  Rocket,
  Database,
  ShoppingBag,
  ShieldCheck,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Custom Website Development",
    desc: "From the first scroll to the final click, every page is crafted to feel polished, trustworthy, and easy to navigate.",
    image:
      "/images/maintenanceservicecard.webp",
    icon: <Code2 size={20} />,
    tags: ["Next.js", "React", "Tailwind"],
    className: "md:col-span-2",
  },

  {
    number: "02",
    title: "UI/UX Design",
    desc: "Thoughtful layouts, intuitive journeys, and clean visuals that help visitors find what they need without thinking twice.",
    image:"/images/uiservicecard.webp",
    icon: <Palette size={20} />,
    tags: ["Figma", "UX", "Responsive"],
  },

  {
    number: "03",
    title: "SEO Optimization",
    desc: "Improve search rankings, page speed and Core Web Vitals to attract more organic traffic.",
    image:
      "/images/seocardservice.webp",
    icon: <Rocket size={20} />,
    tags: ["Google Search", "Visibility", "Core Web Vitals"],
  },

  {
    number: "04",
    title: "Backend Development",
    desc: "Reliable systems working quietly behind the scenes, keeping everything secure, connected, and running smoothly.",
    image:
      "/images/backservicecard.webp",
    icon: <Database size={20} />,
    tags: ["REST API", "Integrations", "Database"],
    className: "md:col-span-2",
  },

  {
    number: "05",
    title: "E-Commerce Solutions",
    desc: "Online stores designed to make browsing simple, checkout effortless, and purchasing feel natural.",
    image:
      "/images/ecomservicecard.webp",
    icon: <ShoppingBag size={20} />,
    tags: ["Online Store", "Payments", "Shopping Experience"],
    className: "md:col-span-2",
  },

  {
    number: "06",
    title: "Website Maintenance",
    desc: "Ongoing updates, hosting support and security monitoring for stability.",
    image:
      "/images/websiteservicecard.webp",
    icon: <ShieldCheck size={20} />,
    tags: ["Hosting", "Security", "Support"], 
  },

];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 ...">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-24">

        {/* TOP CONTENT */}
        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-sm text-indigo-300">

            <Globe size={15} />
            Premium Digital Services

          </div>

          <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">

           First impressions happen fast.
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}Make yours count.{" "}
            </span>

          </h2>

          <p className="mt-7 text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">

            No clutter. No confusion. Just thoughtful design, smooth interactions, and
            experiences that feel effortless from the first click.

          </p>

          {/* BADGES */}
          <div className="grid grid-cols-2 gap-3 mt-8 md:flex md:flex-wrap md:gap-4 md:mt-10">

            {[
              "Fast Performance",
              "Responsive Design",
              "SEO Friendly",
              "Modern UI/UX",
            ].map((item, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300 backdrop-blur-xl"
              >
                ✦ {item}
              </div>
            ))}

          </div>

        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1120] hover:-translate-y-1 transition-all duration-500 min-h-[320px] ${
                service.className || ""
              }`}
            >

              {/* IMAGE */}
              <img
                 src={service.image}
                 alt={`${service.title} service by Revol Digital`}
                 loading="lazy"
                 decoding="async"
                 className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617]/20" />

              {/* EXTRA GLASS */}
              <div className="absolute inset-0 bg-black/25" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-8">

                {/* TOP */}
                <div className="flex items-start justify-between">

                  {/* ICON */}
                  <div className="mb-5">

                    <div className="w-16 h-16 rounded-2xl border border-indigo-500/20 bg-black/30 backdrop-blur-xl flex items-center justify-center text-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.18)]">
                       {service.icon}
                    </div>

                  </div>

                  {/* NUMBER */}
                  <div className="absolute top-5 right-5 z-20">

                  <div className="w-[74px] h-[74px] rounded-full border border-indigo-400/40 bg-black/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.25)]">

                   <span className="text-white text-2xl font-bold tracking-tight">

                    {service.number}

                   </span>

                 </div>

                </div>

                </div>

                {/* BOTTOM */}
                <div className="w-full max-w-[95%]">

                  <h3 className="text-2xl md:text-[34px] font-black leading-[1.05] tracking-tight">

                    {service.title}

                  </h3>

                  <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">

                    {service.desc}

                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-6">

                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-xs text-gray-200 backdrop-blur-xl hover:border-indigo-400/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* BUTTON */}
                  <Link to="/Contact#contactform" className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-all duration-300 font-medium group/button">

                    Explore Service

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />

                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}