import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  LayoutGrid,
  Scissors,
} from "lucide-react";

const projects = [
  {
    category: "EDITORIAL STORYTELLING PLATFORM",
    title: "Snigdha Shevade",

    description:
      "Crafted to make long-form content feel more immersive and refined — blending storytelling, speaking sessions and reader engagement into one seamless editorial experience.",

    highlight:
      "Focused on readability, calmer content flow and stronger audience connection.",

    tags: [
      "CONTENT EXPERIENCE",
      "READER ENGAGEMENT",
      "EDITORIAL FLOW",
    ],

    button: "View Platform",

    image: "/images/snigdhawebsite.webp",

    link: "https://snigdhashevade.com/",

    icon: <BookOpen size={18} />,
    light: false,
  },

  {
    category: "EDUCATION INQUIRY EXPERIENCE",
    title: "Admission Landing",

    description:
      "Structured to simplify student inquiries with clearer course communication, better admission visibility and a more guided decision-making experience.",

    highlight:
      "Built to improve inquiry confidence and reduce user confusion.",

    tags: ["INQUIRY JOURNEY", "COURSE STRUCTURE", "DECISION CLARITY"],

    button: "View Experience",

    image:"/images/allinonewebsite.webp",

    icon: <GraduationCap size={18} />,
    light: true,
  },

  {
    category: "ANALYTICS PRESENTATION SYSTEM",
    title: "Investment Dashboard",

    description:
      "Built to transform complex analytics into a cleaner decision-making experience with stronger visual hierarchy and easier data accessibility.",

    highlight:
      "Focused on faster interpretation and cleaner analytics navigation.",

    tags: ["STRUCTURED ANALYTICS", "DECISION CLARITY", "DATA NAVIGATION"],

    button: "Open Project",

    image:
      "/images/investmentwebsite.webp",

    icon: <LayoutGrid size={18} />,
    light: true,
  },

  {
    category: "LUXURY APPOINTMENT EXPERIENCE",
    title: "Salon Booking",

    description:
      "Created to elevate appointment booking through a more elegant interface, smoother interactions and premium service presentation.",

    highlight:
      "Balances luxury aesthetics with usability and faster booking flow.",

    tags: [
      "LUXURY EXPERIENCE",
      "APPOINTMENT FLOW",
      "SERVICE PRESENTATION",
    ],

    button: "View Booking UI",

    image:
      "/images/salonwebsite.webp",

    icon: <Scissors size={18} />,
    light: false,
  },

  {
    category: "CORPORATE SERVICE PRESENCE",
    title: "Construction Platform",

    description:
      "Structured to present large-scale construction services with stronger credibility, cleaner project visibility and a more professional digital presence.",

    highlight:
      "Built to improve service trust and showcase project capability more clearly.",

    tags: [
      "PROJECT VISIBILITY",
      "CORPORATE IDENTITY",
      "BUSINESS CREDIBILITY",
    ],

    button: "See Platform",

    image:
      "/images/constructionwebsite.webp",

    icon: <BriefcaseBusiness size={18} />,
    light: true,
  },
];

const words = [
  "with stronger clarity",
  "with presentation",
  "with interaction",
  "with refined user experience",
];

function TypewriterText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {

      if (!isDeleting) {

        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1300);
        }

      } else {

        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }

    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);

  }, [text, isDeleting, index]);

   return (
  <>
    <span>{text}</span>

    <span className="ml-1 animate-pulse text-white">
      |
    </span>
  </>
);
}

export default function FeaturedPage() {
  return (
    <section id = "project" className="relative overflow-hidden bg-[#020617] pt-20 pb-20">
      
      {/* glow */}
      <div className="absolute left-0 top-0 h-full w-[420px] bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-[1320px] px-6">

      {/* hero section */}
      <div className="relative mb-24 flex justify-start">

      <div className="max-w-[900px]">

      {/* heading */}
      <h2 className="max-w-[1150px] text-left font-semibold leading-[0.98] tracking-[-0.06em] text-white">

      <span className="block text-[34px] sm:text-[42px] md:text-[70px]">
         Building digital presence
      </span>

      <div className="mt-3 flex items-center text-[30px] sm:text-[38px] md:text-[50px] text-blue-300">

         <TypewriterText />

      </div>

      </h2>
      </div>
      </div>

    {/* cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-[42px] border transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_50px_120px_rgba(0,0,0,0.18)] ${
                project.light
                  ? "border-black/[0.05] bg-[#f2efea]"
                  : "border-white/10 bg-[#03122f]"
              }`}
            >

            <div
                className={`grid gap-8 p-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-8 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* image side */}
            <div className="relative flex items-center justify-center lg:justify-end">

            <img
               src={project.image}
               alt={`${project.title} web design and development project`}
               className="
                 w-[130%]
                 max-w-none
                 sm:w-[115%]
                 md:w-full
                 lg:max-w-[750px]
                 h-auto
                 object-contain
                 transition duration-700
                 group-hover:scale-[1.02]
               "
                loading="lazy"
                decoding="async"
             />

            </div>
            
                {/* content side */}
                <div>

                  {/* icon */}
                  <div
                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-md transition duration-500 group-hover:rotate-6 group-hover:scale-105 ${
                      project.light
                        ? "border-black/[0.05] bg-[#ebe7e1] text-[#111827]"
                        : "border-white/10 bg-white/[0.04] text-blue-100"
                    }`}
                  >
                    {project.icon}
                  </div>

                  {/* category */}
                  <p
                    className={`mb-5 text-[11px] font-medium tracking-[0.34em] uppercase ${
                      project.light
                        ? "text-[#5b6472]"
                        : "text-blue-200/60"
                    }`}
                  >
                    {project.category}
                  </p>

                  {/* title */}
                  <h3
                    className={`text-[34px] md:text-[52px] font-semibold leading-[1.05] tracking-[-0.04em] ${
                      project.light ? "text-black" : "text-white"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* description */}
                  <p
                    className={`mt-4 max-w-[560px] text-[17px] md:text-[21px] font-[450] leading-[1.8] ${
                      project.light
                        ? "text-[#5c6470]"
                        : "text-[#d7deea]"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* highlight */}
                  <div
                    className={`mt-5 rounded-[18px] border px-5 py-4 md:px-7 md:py-6 text-[15px] md:text-[17px] leading-[1.8] ${
                      project.light
                        ? "border-black/[0.06] bg-[#ebe7e1] text-[#374151]"
                        : "border-white/10 bg-white/[0.04] text-white/70"
                    }`}
                  >
                    {project.highlight}
                  </div>

                  {/* tags */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tags.map((tag, idx) => (

                      <div
                        key={idx}
                        className={`rounded-full border px-3 py-2 md:px-5 md:py-3 text-[10px] md:text-[11px] font-semibold tracking-[0.24em] transition-all duration-300 hover:-translate-y-[2px] ${
                          project.light
                            ? "border-black/[0.05] bg-[#ebe7e1] text-[#2f3743] hover:bg-black hover:text-white"
                            : "border-white/10 bg-white/[0.05] text-white/85 hover:bg-white hover:text-black"
                        }`}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] ${
                      project.light
                         ? "bg-black text-white hover:bg-[#111827]"
                         : "bg-white text-black hover:bg-blue-50"
                       }`}
                    >
                        {project.button}
                    <ArrowUpRight size={16} />
                   </a>
                 )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}