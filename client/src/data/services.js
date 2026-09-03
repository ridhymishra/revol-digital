// Every field here is drawn directly from copy that already exists
// elsewhere on the site (ServiceSection, ServicesPreview, Pricing,
// ProcessSection, WhyChooseMe, FAQSection, About) — expanded into
// dedicated pages, not new claims.

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    text: "We discuss goals, challenges and expectations to build a clear direction before any design work begins.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "The site structure, content flow and user journey are mapped to create a smooth experience.",
  },
  {
    number: "03",
    title: "Design",
    text: "Creating UI/UX experiences focused on clarity and engagement.",
  },
  {
    number: "04",
    title: "Build",
    text: "Every screen is carefully developed with clean code, smooth interactions and attention to detail.",
  },
  {
    number: "05",
    title: "Launch",
    text: "After final testing and review, the website goes live fully prepared for real visitors.",
  },
];

export const BENEFITS = [
  { title: "1 Year Free Domain & Hosting", desc: "Get a complete website setup with free domain and hosting for the first year.", icon: "🖥️" },
  { title: "Dynamic & Modern Websites", desc: "Interactive, fast and visually engaging websites built with modern frameworks.", icon: "⚡" },
  { title: "Affordable Pricing", desc: "Pocket-friendly plans starting from ₹7,999 only (18% GST applicable).", icon: "💰" },
  { title: "On-Time Project Delivery", desc: "Well-planned execution with clear milestones and timely delivery.", icon: "⏱️" },
  { title: "High-Quality Development", desc: "Clean code, scalable architecture and SEO-optimized structure.", icon: "✅" },
  { title: "24×7 Support", desc: "Post-launch support, maintenance and quick issue resolution.", icon: "🎧" },
];

const FAQ_COST = {
  q: "How do you decide the final project cost?",
  a: "Pricing is based on scope, features, integrations and delivery timeline. After understanding your requirements, I share a clear and transparent breakdown so you know exactly where your investment goes.",
};
const FAQ_BACKEND = {
  q: "Do you also handle backend development?",
  a: "Yes. I build full-stack solutions using React on the frontend with Node.js or Python on the backend, including APIs, databases, authentication and third-party integrations.",
};
const FAQ_SEO = {
  q: "Will my website be SEO-friendly?",
  a: "Absolutely. Every project follows SEO-ready architecture, clean semantic HTML, optimized loading speed and best practices to improve visibility and rankings.",
};
const FAQ_TIMELINE = {
  q: "How long does a project usually take?",
  a: "Timelines depend on project complexity. A landing page may take 1–2 weeks, while business websites or custom web applications usually take 3–6 weeks.",
};
const FAQ_SUPPORT = {
  q: "Do you provide post-launch support?",
  a: "Yes. I offer post-launch support for fixes, monitoring, updates and scaling so your product remains stable, secure and future-ready.",
};

export const SERVICES = [
  {
    slug: "web-development",
    shortTitle: "Web Development",
    title: "Custom Website Development",
    eyebrow: "Core Service",
    metaTitle: "Custom Website Development Services | Revol Digital",
    metaDescription: "Full-stack website development covering frontend, backend, database architecture and deployment, built with React, Node.js and clean, scalable code.",
    intro: "End-to-end web development covering frontend, backend, database architecture, and creating digital platforms that scale with your business. From the first scroll to the final click, every page is crafted to feel polished, trustworthy, and easy to navigate.",
    whoFor: [
      "Personal brands, freelancers and small businesses that need a professional website built right the first time",
      "Startups and growing companies that need a conversion-focused site with room to scale",
      "Businesses replacing an outdated or underperforming website",
    ],
    includes: [
      "Custom responsive UI, built for the way your visitors actually browse",
      "Mobile & tablet optimized layouts",
      "Fast loading structure, not a page speed afterthought",
      "Contact form integration",
      "SEO-friendly structure & metadata from day one",
      "CMS or admin panel on business-tier projects",
      "Analytics & tracking setup",
    ],
    tech: ["React", "Node.js", "Python", "Tailwind CSS", "JavaScript", "SQL"],
    faqs: [FAQ_COST, FAQ_TIMELINE, FAQ_SUPPORT],
    tags: ["React", "Node.js", "Tailwind"],
  },
  {
    slug: "react-development",
    shortTitle: "React Development",
    title: "React Website Development",
    eyebrow: "Core Specialization",
    metaTitle: "React Website Development Services | Revol Digital",
    metaDescription: "Custom React websites built for speed and scalability: clean component architecture, Node.js/Python backends where needed, and SEO-ready structure.",
    intro: "I design and develop fast, responsive and scalable React websites that deliver seamless user experiences across all devices. Every project is built with clean code, modern design standards and a strong focus on long-term performance and maintainability.",
    whoFor: [
      "Businesses that want a website built on modern, maintainable technology rather than a page-builder template",
      "Products that need a genuinely fast, interactive interface — not just a static brochure site",
      "Teams planning to keep building on the site over time and need a codebase that can grow with them",
    ],
    includes: [
      "React frontend architecture, built to stay maintainable as the site grows",
      "Node.js or Python backend where the project needs one — APIs, databases, authentication",
      "Third-party integrations",
      "Scalable, component-based structure",
      "Security best practices",
      "SEO-friendly structure & metadata",
    ],
    tech: ["React", "JavaScript", "Node.js", "Python", "SQL", "Tailwind CSS"],
    faqs: [FAQ_BACKEND, FAQ_COST, FAQ_SUPPORT],
    tags: ["React", "JavaScript", "Full-Stack"],
  },
  {
    slug: "website-design",
    shortTitle: "Website Design",
    title: "UI/UX Website Design",
    eyebrow: "Design",
    metaTitle: "Website Design & UI/UX Services | Revol Digital",
    metaDescription: "UI/UX design focused on clarity and engagement: thoughtful layouts, intuitive journeys and clean visuals that help visitors act with confidence.",
    intro: "Design clean and intuitive interfaces that help visitors navigate easily, understand your message, and engage with your content. Thoughtful layouts, intuitive journeys, and clean visuals that help visitors find what they need without thinking twice.",
    whoFor: [
      "Businesses whose current site looks dated or is hard for visitors to navigate",
      "Founders who know their site isn't converting but aren't sure why",
      "Anyone who wants a first impression that actually reflects the quality of their work",
    ],
    includes: [
      "UX research into how your specific visitors actually behave",
      "Wireframing and structure before any visual design starts",
      "Clean, modern visual design consistent with your brand",
      "Fully responsive layouts across mobile, tablet and desktop",
      "Conversion-focused UI/UX on business-tier projects",
    ],
    tech: ["Figma", "React", "Tailwind CSS"],
    faqs: [FAQ_COST, FAQ_TIMELINE],
    tags: ["Figma", "UX", "Responsive"],
  },
  {
    slug: "seo",
    shortTitle: "SEO Services",
    title: "SEO & Performance Optimization",
    eyebrow: "Growth",
    metaTitle: "SEO & Website Performance Services | Revol Digital",
    metaDescription: "Technical SEO and performance optimization: page speed, Core Web Vitals, clean semantic HTML and SEO-ready architecture built in from day one.",
    intro: "Improve website speed, technical structure, and search visibility to deliver a smoother experience and reach more potential customers. Every project follows SEO-ready architecture, clean semantic HTML, optimized loading speed and best practices to improve visibility and rankings.",
    whoFor: [
      "Businesses whose current site is slow, or was never built with SEO in mind",
      "Anyone launching a new site who wants search visibility handled from the start, not bolted on afterward",
      "Sites that need Core Web Vitals and technical structure fixed, not just more content added",
    ],
    includes: [
      "SEO-ready page structure and semantic HTML",
      "Page speed and Core Web Vitals optimization",
      "Clean metadata, structured data and canonical URLs",
      "Mobile-first responsive structure",
      "Ongoing performance monitoring on maintenance plans",
    ],
    tech: ["Core Web Vitals", "Structured Data", "React", "Google Search Console"],
    faqs: [FAQ_SEO, FAQ_COST, FAQ_TIMELINE],
    tags: ["Google Search", "Visibility", "Core Web Vitals"],
  },
  {
    slug: "ecommerce-development",
    shortTitle: "E-Commerce Development",
    title: "E-Commerce Website Development",
    eyebrow: "Online Stores",
    metaTitle: "E-Commerce Website Development | Revol Digital",
    metaDescription: "Custom e-commerce builds on React, Node.js and Python: online stores designed to make browsing simple, checkout effortless and purchasing feel natural.",
    intro: "Online stores designed to make browsing simple, checkout effortless, and purchasing feel natural — built as custom platforms on the same React frontend with a Node.js or Python backend used across every project, not a template.",
    whoFor: [
      "Businesses that want a custom-built online store rather than a generic template",
      "Product catalogs that need a browsing and checkout experience designed around how customers actually shop",
      "Anyone needing payment gateway and third-party integrations built into a scalable backend",
    ],
    includes: [
      "Custom storefront UI designed around your product catalog",
      "Node.js / Python backend with API and third-party integrations",
      "Payment gateway integration",
      "Scalable architecture that can grow with your catalog",
      "Security best practices",
    ],
    tech: ["React", "Node.js", "Python", "SQL"],
    faqs: [FAQ_BACKEND, FAQ_COST, FAQ_SUPPORT],
    tags: ["Online Store", "Payments", "Shopping Experience"],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
