import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK =
  "https://wa.me/917611142192?text=" +
  encodeURIComponent("Hi, I'm interested in getting a website built. Can we discuss?");

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-[0_8px_30px_rgba(34,197,94,0.45)] hover:shadow-[0_8px_40px_rgba(34,197,94,0.6)] transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" aria-hidden="true" />
      <FaWhatsapp className="relative z-10 text-white text-3xl" />
    </motion.a>
  );
}
