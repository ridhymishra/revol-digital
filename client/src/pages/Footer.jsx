import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    
    <footer className="relative bg-gradient-to-br from-[#020617] via-[#07111F] to-[#102A5C] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-10 pb-4 md:pb-6">

        {/* MAIN GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 md:grid-cols-3 items-start"
        >

          {/* BRAND */}
          <div>
          <div className="flex items-center mb-4">
           <img
              src="/images/icon.webp"
              alt="Revol Digital logo"
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
              className="h-10 lg:h-12 w-auto translate-y-[2px]"
           />
        </div>

            <p className="text-sm text-blue-100 mt-4 leading-relaxed max-w-sm">
              Helping startups and businesses build{" "}
              <span className="text-white font-medium">
                 reliable and conversion-focused
              </span>{" "}
                 web experiences using thoughtful UI/UX, React, Node.js and
                 Python-powered backends.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="md:text-center">
            <h4 className="text-sm font-semibold uppercase tracking-[2px] text-blue-200 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

      {/* LET'S CONNECT */}
      <div className="md:text-center">
         <h4 className="text-sm font-semibold uppercase tracking-[2px] text-blue-200 mb-6">
            LET'S CONNECT
         </h4>

       <div className="flex justify-center gap-6 mb-4">
       {/* WhatsApp */}
       <a
          href="https://wa.me/917611142192"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="text-green-400 hover:text-green-300 transition duration-300 hover:scale-105"
      >
      <FaWhatsapp
         size={42}
         className="text-green-400 hover:text-green-300 transition duration-200"
      />
      </a>
      
      {/* Email */}
      <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@revoldigital.com"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Send an email"
      >
      <FaEnvelope
         size={42}
         className="text-blue-400 transition duration-200"
      />
     </a>
    </div>
   </div>
        </motion.div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-8 pt-4 pb-2 text-sm text-blue-100">
          <div className="flex items-center justify-center">
            <span>© {year} Revol Digital. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}