import React, { useState } from "react";
import { motion } from "framer-motion";
/* ================= ANIMATION ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzXG91N7xyjoh7x-YxSgB4xyQCCDDilT8C27u_aJR7xBaK1eFQuvvZf5Xmya8l8Wseg/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  } catch (error) {
    console.log(error);  
    alert("Something went wrong. Please try again.");
  
  } finally {
    setLoading(false);
  }
};
  return (
    <>
    <section id="contact" className="relative pt-16 md:pt-24 pb-16 md:pb-24 bg-black text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Contact
          </span>

         <h2 className="text-4xl md:text-5xl font-bold leading-tight">
             Build a Website That <span className="text-blue-500">Attracts Customers</span> and Grows Your Business
         </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Looking for a responsive business website, portfolio, landing page or custom web application? 
            Share your requirements and get a solution focused on performance, user experience and business growth.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center"
        >

          {/* LEFT – FORM CARD */}
          <motion.div variants={item}>
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-2">
                Tell me about your requirement
              </h2>
              <p className="text-blue-100 mb-6">
                 Share your goals, ideas or challenges and I'll help you identify the best path forward.
              </p>
              
              {submitted ? (
               <div className="rounded-3xl bg-green-500/10 border border-green-500/20 p-8 text-center">
               <div className="text-5xl mb-4">✅</div>

               <h3 className="text-3xl font-bold text-white">
                 Thank You!
               </h3>

               <p className="mt-4 text-zinc-300">
                  Your enquiry has been received.
                 <br />
                  I'll get back to you within 24 hours.
               </p>
               </div>
              ) : (

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                     onChange={(e) =>
                       setFormData({
                        ...formData,
                       name: e.target.value,
                    })
                    }
                    placeholder="Full Name"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                    email: e.target.value,
                    })
                    }
                    placeholder="Email Address"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                    phone: e.target.value,
                     })
                    }
                    placeholder="Contact Number"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    required
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                    service: e.target.value,
                     })
                    }
                    placeholder="Website, Landing Page, Portfolio,other"
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                    onChange={(e) =>
                     setFormData({
                       ...formData,
                  message: e.target.value,
                   })
                  }
                  placeholder="Briefly explain what you’re trying to build or improve"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-premium w-full mt-2 rounded-lg bg-white text-blue-700 font-semibold py-3 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] transition disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
              )}

              {/* CONTACT INFO */}
              <div className="mt-6 flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left text-sm text-blue-100 gap-3">
                <a
                   href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@revoldigital.com&su=Website%20Enquiry"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white transition"
                >
                    📧 contact@revoldigital.com
                </a>
                <span>🌍 Available Worldwide · Remote</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – CONTENT + IMAGE */}
          <motion.div variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold leading-snug">
              Work with a developer who understands{" "}
              <span className="text-blue-500">business and technology</span>
            </h2>

            <p className="text-gray-400">
              I collaborate with founders, teams and solo creators who value
              clear planning, reliable execution and long-term maintainability —
              not rushed solutions or unnecessary complexity.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Clear project roadmap before development starts</li>
              <li>✔ Fast, SEO-friendly and scalable websites</li>
              <li>✔ User-focused design that improves engagement</li>
              <li>✔ Ongoing support after launch</li>
            </ul>

            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/images/contact.webp"
                alt="Professional website development consultation for businesses and startups"
                className="w-full h-72 object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
    </>
  );
}