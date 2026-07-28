import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutDashboard,
  PenTool,
  Globe,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <PenTool size={38} />,
    title: "UI Experience",
    text: "Interfaces crafted to feel smoother, cleaner and visually memorable for brands.",
  },
  {
    icon: <LayoutDashboard size={38} />,
    title: "Dashboard Design",
    text: "Structured systems focused on clarity, usability and premium visual hierarchy.",
  },
  {
    icon: <Globe size={38} />,
    title: "Business Websites",
    text: "High-converting layouts designed to improve perception and online engagement.",
  },
];

const phoneVideos = [
  "/videos/allinone.mp4",
  "/videos/snigdhaweb.mp4",
  "/videos/snigdhawebsite.mp4",
  "/videos/snigdha.mp4",
  "/videos/allinoneservicewebsite.mp4",
];

const PortfolioHero = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
           Portfolio | Revol Digital - Web Design & Development Projects
        </title>

        <meta
          name="description"
          content="Explore web design, landing page, business website and UI/UX projects built by Revol Digital using modern design and development practices."
        />

        <meta property="og:title" content="Premium Portfolio Showcase" />

        <meta
          property="og:description"
          content="Creative interfaces and premium digital experiences designed for modern brands."
        />
         
        <meta
          property="og:url"
          content="https://revoldigital.com/portfolio"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden bg-[#050816] min-h-screen pt-32 md:pt-20 lg:pt-24 pb-10 md:pb-24">

        {/* PREMIUM PORTFOLIO BACKGROUND */}
         <div className="absolute inset-0 overflow-hidden">

         {/* Base Background */}
        <div className="absolute inset-0 bg-[#050816]" />

         {/* Top Left Glow */}
        <div
          className="
             absolute
             -top-40
             -left-32
             w-[700px]
             h-[700px]
             rounded-full
             bg-blue-600/15
             blur-[140px]
          "
        />

        {/* Center Glow */}
      <div
        className="
          absolute
          top-[20%]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
       "
     />

       {/* Bottom Right Glow */}
     <div
        className="
          absolute
          -bottom-40
          -right-32
          w-[700px]
          h-[700px]
          rounded-full
          bg-indigo-500/10
          blur-[140px]
       "
     />

       {/* Bottom Wave */}
     <div
        className="
          absolute
          -bottom-32
          left-[-10%]
          w-[120%]
          h-[260px]
          bg-blue-500/10
          rounded-[50%]
          blur-[60px]
      "
    />

     {/* Curved SVG Lines */}
    <svg
       className="absolute inset-0 w-full h-full opacity-20"
       viewBox="0 0 1600 900"
       preserveAspectRatio="none"
    >
    <path
       d="M0 180 C300 80 600 280 900 180 C1200 80 1400 220 1600 120"
       stroke="rgba(59,130,246,0.12)"
       strokeWidth="3"
       fill="none"
    />
    <path
       d="M0 320 C250 220 550 420 850 320 C1150 220 1350 380 1600 280"
       stroke="rgba(59,130,246,0.10)"
       strokeWidth="3"
       fill="none"
    />

    <path
       d="M0 500 C300 380 650 620 950 500 C1250 380 1450 580 1600 460"
       stroke="rgba(59,130,246,0.08)"
       strokeWidth="3"
       fill="none"
    />

    <path
       d="M0 700 C250 580 550 820 850 700 C1150 580 1350 780 1600 650"
       stroke="rgba(59,130,246,0.10)"
       strokeWidth="3"
       fill="none"
    />
    </svg>

      {/* Premium Spotlight */}
    <div
        className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-blue-500/[0.03]
            blur-[200px]
          "
    />

   </div>

        {/* TOP BAR */}
        <div className="absolute top-24 left-0 w-full overflow-hidden z-20 border-y border-white/10 bg-[#0E1733]/90 backdrop-blur-xl">

          <div className="animate-marquee flex w-max py-5">

            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-12 px-10 text-white/80 font-semibold text-[18px]"
              >

                <span>User Research</span>
                <span className="text-[#4F7DF3]">✦</span>

                <span>Creative UI</span>
                <span className="text-[#4F7DF3]">✦</span>

                <span>Landing Pages</span>
                <span className="text-[#4F7DF3]">✦</span>

                <span>Web Design</span>
                <span className="text-[#4F7DF3]">✦</span>

                <span>Dashboard</span>
                <span className="text-[#4F7DF3]">✦</span>

              </div>
            ))}

          </div>

        </div>

        <div className="relative z-30 max-w-[1450px] mx-auto px-4 sm:px-6">

          {/* HERO TEXT */}
          <div className="pt-20 lg:pt-16 text-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1
                className="
                  mt-8
                  text-white
                  text-[42px]
                  sm:text-[72px]
                  lg:text-[80px]
                  leading-[1]
                  tracking-normal
                  sm:tracking-[-1px]
                  font-semibold
                  max-w-[1050px]
                  mx-auto
                "
              >

                Experiences crafted
                <br />
                to make businesses
                <br />
                feel more premium.

              </h1>

              <p
                className="
                  mt-10
                  max-w-[760px]
                  mx-auto
                  text-white/75
                  text-[16px]
                  sm:text-[18px]
                  leading-[2]
                  px-2
                "
              >

                A curated selection of interfaces crafted with stronger visual
                storytelling, sharper interaction flow and premium brand
                presentation.

              </p>

            </motion.div>

            {/* BUTTON */}
            <div className="mt-12 flex justify-center">

              <motion.a
                href="#project"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#4F7DF3]
                  to-[#6A8DFF]
                  px-3
                  py-3
                  pr-10
                  text-white
                  font-semibold
                  text-lg
                  shadow-[0_10px_40px_rgba(79,125,243,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#4F7DF3]
                    transition-all
                    duration-300
                    group-hover:rotate-45
                  "
                >

                  <ArrowRight size={24} />

                </div>

                <span>View All Projects</span>

              </motion.a>

            </div>

          </div>

          {/* MOBILE / TABLET SHOWCASE */}
           <div className="mt-20 md:mt-20 lg:mt-10 mb-20 flex justify-center overflow-hidden">

           <div
               className="
                          relative
                          h-[520px]
                          md:h-[560px]
                          lg:h-[650px]
                          w-full
                          flex
                          items-end
                          justify-center
                          gap-2 md:gap-3 lg:gap-6
                "
           >

        {phoneVideos.map((video, index) => {
           const hiddenClass =
             index === 0 || index === 4
              ? "hidden lg:block"
              : index === 1 || index === 3
              ? "hidden md:block"
              : "";

         return (
          <div
  key={index}
  className={`
    relative
    flex-shrink-0
    ${
      index === 2
        ? `
          w-[260px]
          h-[520px]
          sm:w-[280px]
          sm:h-[580px]
          md:w-[250px]
          md:h-[560px]
          lg:w-[300px]
          lg:h-[600px]
        `
        : `
          w-[190px]
          h-[420px]
          sm:w-[220px]
          sm:h-[500px]
          md:w-[250px]
          md:h-[560px]
          lg:w-[250px]
          lg:h-[560px]
        `
    }
    ${hiddenClass}
  `}
>
    {/* Blue Glow */}
    <div
      className={`
        absolute
        inset-0
        -z-10
        rounded-full
        blur-[90px]
        ${
          index === 2
            ? "w-[220px] h-[450px] sm:w-[250px] sm:h-[520px] md:w-[300px] md:h-[600px]"
            : "w-[180px] h-[380px] sm:w-[210px] sm:h-[480px] md:w-[250px] md:h-[560px]"
        }
      `}
    />

    {/* Phone Frame */}
    <div
      className="
        relative
        w-full
        h-full
        rounded-[42px]
        bg-[#181818]
        border
        border-white/10
        overflow-hidden
        shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Dynamic Island */}
      <div
        className="
          absolute
          top-3
          left-1/2
          -translate-x-1/2
          w-[70px]
          h-[16px]
          bg-black
          rounded-full
          z-30
        "
      />
       {/* Silver Shine Effect */}
      <div
          className="
               absolute
               top-0
               left-0
               h-full
               w-[30%]
               bg-gradient-to-r
               from-white/10
               to-transparent
               pointer-events-none
               z-30
            "
      />
      <div
          className="
               absolute
               top-[24px]
               left-[8px]
               right-[8px]
               bottom-[8px]
               overflow-hidden
               rounded-[28px]
               bg-black
          "
      >
  
      {/* Website Video */}
      <video
           src={video}
           autoPlay
           muted
           loop
           playsInline
           preload="metadata"
           className="
                  w-full
                  h-full
                  object-fill
            "
      />
    </div>
    </div>
  </div>
  );
})}
     </div>

    </div>

          {/* SERVICES */}
          <div className="mt-28">

            <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-center justify-center
                            lg:justify-between gap-6"
            >

              <div>

                <p className="text-[#7BA3FF] text-[18px] mb-3">
                  — Selected Expertise
                </p>

                <h2 className="text-white text-[42px] md:text-[62px] font-semibold tracking-[-3px]">
                  Creative Services
                </h2>

              </div>

              <Link to = "/services"
                className="
                  group
                  flex
                  items-center
                  rounded-full
                  bg-gradient-to-r
                  from-[#4F7DF3]
                  to-[#6A8DFF]
                  px-5
                  py-3
                  pr-7
                  text-white
                  shadow-[0_10px_30px_rgba(79,125,243,0.3)]
                "
              >

                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4F7DF3]">

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

                <span className="font-semibold">
                  View Services
                </span>

              </Link>

            </div>

            {/* CIRCLE CARDS */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-20 place-items-center">

              {services.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.35 }}
                  className="
                    relative
                    overflow-hidden
                    h-[330px]
                    w-[330px]
                    sm:h-[430px]
                    sm:w-[430px]
                    rounded-full
                    border
                    border-white/10
                    bg-gradient-to-b
                    from-[#101935]
                    to-[#0A1125]
                    backdrop-blur-xl
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    p-10
                  "
                >

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,125,243,0.14),transparent_55%)]" />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-[#4F7DF3]/15
                      text-[#7BA3FF]
                      mb-8
                      border
                      border-white/10
                    "
                  >

                    {item.icon}

                  </div>

                  <h3
                    className="
                      relative
                      z-10
                      text-[30px]
                      sm:text-[36px]
                      leading-tight
                      font-semibold
                      tracking-[-1px]
                      text-white
                    "
                  >

                    {item.title}

                  </h3>

                  <p
                    className="
                      relative
                      z-10
                      mt-5
                      text-white/70
                      leading-[1.9]
                      text-[16px]
                      max-w-[260px]
                    "
                  >

                    {item.text}

                  </p>

                  <Link to= "/Contact#contactform"
                    className="
                      relative
                      z-10
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      text-[#7BA3FF]
                      font-medium
                      text-[17px]
                    "
                  >

                    Explore More

                    <ArrowRight size={18} />

                  </Link>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        {/* STYLES */}
        <style>
          {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 55s linear infinite;
          }

          .phone-scroll {
            overflow: hidden;
            position: relative;
          }

          .website-image {
            width: 100%;
            height: auto;
            animation: scrollImage 14s ease-in-out infinite alternate;
          }

          @keyframes scrollImage {
            0% {
              transform: translateY(0%);
            }

            100% {
              transform: translateY(-55%);
            }
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 35s linear infinite;
            }
          }
          `}
        </style>

      </section>
    </>
  );
};

export default PortfolioHero;