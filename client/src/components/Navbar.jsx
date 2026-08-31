import { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const handleClick = useCallback(() => {
  setOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full backdrop-blur-xl border border-white/10 rounded-2xl z-50
                  transition-all duration-500 ease-out
                  ${
                    scrolled
                      ? "bg-[#081428]/90 shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
                      : "bg-[#081428]/60 shadow-[0_8px_25px_rgba(37,99,235,0.1)]"
                  }`}
    >
      <div className={`max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-1" : "py-1.5"}`}>
    <Link
       to="/" className="
             flex items-center
             transition-transform duration-300
             hover:scale-105
             -ml-4 
             shrink-0
         "
    >
    <img
      src="/images/icon.webp"
      alt="Revol Digital logo"
      width="49"
      height="49"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="h-10 lg:h-12 w-auto translate-y-[2px]"
    />

  </Link>

    {/* DESKTOP MENU */}
  <ul className="hidden md:flex items-center gap-8 lg:gap-14 text-sm font-medium text-gray-200">
    {NAV_LINKS.map((link) => {
      const isActive = pathname.toLowerCase() === link.to.toLowerCase();
      return (
        <li key={link.to}>
          <Link
            to={link.to}
            className={`relative transition-colors duration-300 after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300
                        hover:text-white hover:after:w-full
                        ${isActive ? "text-white after:w-full" : "after:w-0"}`}
          >
            {link.label}
          </Link>
        </li>
      );
    })}
</ul>

  {/* CTA BUTTON */}
  <div className="hidden md:block">
  <Link to="/contact"
        className="
            group relative overflow-hidden
            flex items-center
            gap-1
            px-5 py-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-blue-500
            text-white
            font-medium
            shadow-lg shadow-blue-600/20
            hover:shadow-blue-500/40
            hover:-translate-y-0.5
            transition-all duration-300
        "
  >
     <span className="relative z-10">Let's Discuss Your Project</span>
  <span className="relative z-10">→</span>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
  </Link>
  </div>

        {/* MOBILE MENU BUTTON */}
    <button aria-label="Toggle Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="
               md:hidden
               flex items-center justify-center
               w-11 h-11
               rounded-xl
               bg-gradient-to-r
               from-blue-600
               to-blue-500
               text-white
               shadow-lg shadow-blue-600/30
               hover:scale-105
               transition-all duration-300
            "
    >
    <span className="text-xl font-semibold">
          {open ? "✕" : "☰"}
    </span>
    </button>
    </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={handleClick}
                    className={`block py-4 border-b border-white/10 transition-colors ${
                      pathname.toLowerCase() === link.to.toLowerCase() ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6">
                <Link
                  to="/contact#contactform"
                  onClick={handleClick}
                  className="
                    flex items-center justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-500
                    py-3.5
                    font-medium
                    text-white
                    shadow-lg shadow-blue-600/20
                  "
                >
                  Get Free Consultation
                  <span>→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}