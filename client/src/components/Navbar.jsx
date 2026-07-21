import { useState, useCallback } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
  setOpen(false);
  }, []);

  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 w-full bg-[#081428]/75 backdrop-blur-xl
                  border border-white/10 rounded-2xl shadow-[0_8px_25px_rgba(37,99,235,0.15)] z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-1.5 flex items-center justify-between">
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
      width="48"
      height="48"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="h-10 lg:h-12 w-auto translate-y-[2px]"
    />

    <div className="flex items-center leading-none">
      <span className="text-white font-semibold text-sm md:text-lg">
        REVOL
      </span>

      <span className="text-blue-500 font-semibold text-sm md:text-lg ml-1">
         DIGITAL
      </span>
   </div>
  </Link>

    {/* DESKTOP MENU */}
  <ul className="hidden md:flex items-center gap-8 lg:gap-14 text-sm font-medium text-gray-200">
   <li>
  <Link to="/" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 
                          after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
    Home
  </Link>
  </li>
  
  <li>
  <Link to="/services" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 
                          after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
    Services
  </Link>
  </li>

  <li>
  <Link to="/portfolio" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 
                          after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
    Portfolio
  </Link>
  </li>
  
  <li>
  <Link to="/contact" className="relative hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 
                          after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
    Contact
  </Link>
  </li>
</ul>

  {/* CTA BUTTON */}
  <div className="hidden md:block">
  <Link to="/contact"
        className="
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
     Let's Discuss Your Project
  <span>→</span>
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
      {open && (
      <div
        className="
          md:hidden
          bg-black/95
          backdrop-blur-xl
          border-t border-white/10
         "
      >

      <div className="px-6 py-4">
        <Link
           to="/"
           onClick={handleClick}
           className="block py-4 text-white border-b border-white/10"
        >
          Home
        </Link>

       <Link
          to="/services"
          onClick={handleClick}
          className="block py-4 text-white border-b border-white/10"
       >
          Services
       </Link>

      <Link
        to="/portfolio"
        onClick={handleClick}
        className="block py-4 text-white border-b border-white/10"
      >
        Portfolio
      </Link>

      <Link
        to="/Contact"
        onClick={handleClick}
        className="block py-4 text-white"
      >
        Contact
      </Link>

      <div className="mt-6">
        <Link
          to="/Contact#contactform"
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
  </div>
)}
    </nav>
  );
}