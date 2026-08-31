import { lazy, Suspense } from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import { Helmet } from "react-helmet-async";

const Footer = lazy(() => import("./Footer"));

const PortfolioPage = () => {
  return (
    <>
    <Helmet>
      <title>Portfolio | Revol Digital - Web Design & Development Projects</title>

      <meta
        name="description"
        content="Explore website development projects by Revol Digital including business websites, landing pages, portfolio websites and modern web applications built with React."
      />

      <meta name="robots" content="index, follow" />

      <link
         rel="canonical"
         href="https://revoldigital.com/portfolio"
      />

      <meta
         property="og:title"
         content="Portfolio | Revol Digital"
      />

      <meta
         property="og:description"
         content="Explore website development projects, landing pages and web applications built by Revol Digital."
      />

      <meta
         property="og:type"
         content="website"
      />

     <meta
        property="og:url"
        content="https://revoldigital.com/portfolio"
    />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://revoldigital.com/portfolio" },
        ],
      })}
    </script>
    </Helmet>
      <PortfolioHero />

      <FeaturedProjects />

      <PortfolioStats />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </>
  );
};

export default PortfolioPage;
