import HeroSection from "../components/services/HeroSection";
import ProblemSection from "../components/services/ProblemSection";
import ServiceSection from "../components/services/ServiceSection";
import ProcessSection from "../components/services/ProcessSection";
import CTASection from "../components/services/CTASection";
import Footer from "./Footer";
import "../styles/services.css";
import { Helmet } from "react-helmet-async"; 

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
  </Helmet>

    <main className="services-page">
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
    </>
  );
};

export default Services;
