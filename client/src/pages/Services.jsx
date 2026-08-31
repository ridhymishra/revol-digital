import { lazy, Suspense } from "react";
import HeroSection from "../components/services/HeroSection";
import ProblemSection from "../components/services/ProblemSection";
import ServiceSection from "../components/services/ServiceSection";
import ProcessSection from "../components/services/ProcessSection";
import CTASection from "../components/services/CTASection";
import "../styles/services.css";
import { Helmet } from "react-helmet-async";

const Footer = lazy(() => import("./Footer"));

const Services = () => {
  return (
    <>
  <Helmet>
  <title>Services | Revol Digital</title>

  <meta
    name="description"
    content="Professional website development services including React websites, business websites, landing pages, UI/UX design, SEO optimization, website redesign and maintenance."
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://revoldigital.com/services"
  />

  <meta
    property="og:title"
    content="Services | Revol Digital"
  />

  <meta
    property="og:description"
    content="Professional website development services including React websites, business websites, landing pages and SEO optimization."
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://revoldigital.com/services"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://revoldigital.com/services" },
      ],
    })}
  </script>

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Website Development",
      provider: { "@type": "Organization", name: "Revol Digital", url: "https://revoldigital.com" },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          "Custom Website Development",
          "UI/UX Design",
          "SEO Optimization",
          "Backend Development",
          "E-Commerce Solutions",
          "Website Maintenance",
        ].map((name, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: { "@type": "Service", name },
        })),
      },
    })}
  </script>
  </Helmet>

    <main className="services-page">
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <ProcessSection />
      <CTASection />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
    </>
  );
};

export default Services;
