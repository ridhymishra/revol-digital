
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import PageLoader from "./components/PageLoader";

const Home = lazy(() => import("./pages/Home"));
const ServicesPreview = lazy(() => import("./pages/ServicesPreview"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const WhyChooseMe = lazy(() => import("./pages/WhyChooseMe"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQSection = lazy(() => import("./pages/FAQSection"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));
const Services = lazy(() => import("./pages/Services"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));

function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return children;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
              <ServicesPreview />
              <Portfolio />
              <WhyChooseMe />
              <About />
              <Pricing />
              <FAQSection />
              <Contact />
              <Footer />
            </PageTransition>
          }
        />

        {/* SERVICES FULL PAGE */}
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        {/* INDIVIDUAL SERVICE PAGES */}
        <Route
          path="/services/:slug"
          element={
            <PageTransition>
              <ServiceDetailPage />
            </PageTransition>
          }
        />
        {/* PORTFOLIO PAGE */}
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          }
        />
        {/* Contact PAGE */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
     <ScrollToTop />
     <SmoothScroll />
     <ScrollProgress />

      <div className="w-full overflow-x-hidden">

        <Navbar />

        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>

      </div>
    </Router>
  );
}