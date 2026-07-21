import PortfolioHero from "../components/portfolio/PortfolioHero";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import PortfolioStats from "../components/portfolio/PortfolioStats";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async"; 

const PortfolioPage = () => {
  return (
    <>
    <Helmet>
      <title>Portfolio | Revol Digital</title>

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
    </Helmet>
      <PortfolioHero />

      <FeaturedProjects />

      <PortfolioStats />
      
      <Footer/>

    </>
  );
};

export default PortfolioPage;
