
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

const Home = lazy(() => import("./pages/Home"));
const ServicesPreview = lazy(() => import("./pages/ServicesPreview"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const WhyChooseMe = lazy(() => import("./pages/WhyChooseMe"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQSection = lazy(() => import("./pages/FAQSection"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));

import Services from "./pages/Services";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
     <ScrollToTop />
     <SmoothScroll />
   
      <div className="w-full overflow-x-hidden">
        
        <Navbar />
  
        <Suspense
          fallback={
             <div className="min-h-screen flex items-center justify-center bg-black">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
             </div>
          }
          >
         <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <ServicesPreview/>
                <Portfolio />
                <WhyChooseMe />
                <About />
                <Pricing />
                <FAQSection />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* SERVICES FULL PAGE */}
          <Route path="/services" element={<Services />} />
          {/* PORTFOLIO PAGE */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* Contact PAGE */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </Suspense>
   
      </div>
    </Router>
  );
}