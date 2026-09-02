import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FiMail,
  FiMapPin,
  FiSend
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


export default function ContactPage() {
  const isMobile = window.innerWidth < 768;
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    websiteType: "",
    budget: "",
    message: "",
});

  useEffect(() => {
    if (window.location.hash === "#contactform") {
      setTimeout(() => {
        const element = document.getElementById("contactform");

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      },300);
    }
  }, []);

  const handleSubmit = async (e) => {
     e.preventDefault();
        
    try {
    await fetch(
        "https://script.google.com/macros/s/AKfycbzXG91N7xyjoh7x-YxSgB4xyQCCDDilT8C27u_aJR7xBaK1eFQuvvZf5Xmya8l8Wseg/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      }
    );

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      websiteType: "",
      budget: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <>
      <Helmet>
        <title>Contact | Revol Digital</title>

        <meta
          name="description"
          content="Contact Revol Digital for React websites, business websites, landing pages and web development services."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://revoldigital.com/contact" />

        <meta property="og:title" content="Contact | Revol Digital" />
        <meta
          property="og:description"
          content="Contact Revol Digital for React websites, business websites, landing pages and web development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revoldigital.com/contact" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://revoldigital.com/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://revoldigital.com/contact" },
            ],
          })}
        </script>
      </Helmet>

    <section className="relative overflow-hidden bg-[#030712] py-32">
       {/*Background image*/}
      <img
         src="/images/contactbackground.webp"
         alt=""
         aria-hidden="true"
         className="absolute inset-0 h-full w-full object-cover"
         loading="lazy"
         decoding="async"
      />
      <div className="absolute inset-0 bg-[#030712]/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/30 to-[#030712]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

      {/* Left Content */}
      <div>
        <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm">
          LET'S CONNECT
        </span>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95]">
          Build Something
          <br />
          Better.
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-relaxed text-zinc-400">
          Need a website that looks professional, performs fast and
          represents your brand properly? Tell me what you're planning.
        </p>

      </div>

      {/* Right Side Developer Window */}
      <div className="relative">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Neon Border */}
      <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 blur-md" />

      <div className="relative rounded-[32px] border border-blue-500/20 bg-[#081021]/95 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 h-[2px] w-full bg-cyan-400/40 animate-pulse" />
      </div>

          {/* Window Header */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

      {/* Code Area */}
       <div className="p-8 font-mono text-[15px] leading-8">

        <p className="text-blue-400">
           const client =
          <span className="text-green-400">
           "
        {!isMobile && ( 
         <TypeAnimation
           sequence={[
            "Restaurant", 2000,
            "Startup", 2000,
            "Law Firm", 2000,
            "Coach", 2000,
            "Personal Brand", 2000,
          ]}
           wrapper="span"
           speed={70}
           repeat={Infinity}
         />
         )}
          "
         </span>
        </p>

  <br />
  <p className="text-blue-400">
        const goal =
    <span className="text-yellow-400">
        "
      {!isMobile && ( 
      <TypeAnimation
        sequence={[
          "Generate Leads", 2000,
          "Increase Sales", 2000,
          "Build Trust", 2000,
          "Get More Clients", 2000,
          "Launch Faster", 2000,
         ]}
        wrapper="span"
        speed={70}
        repeat={Infinity}
      />
      )}
      "
     </span>
   </p>
  <br />

    <p className="text-zinc-400">
       function createExperience() {"{"}
    </p>

    <p className="pl-8 text-zinc-400">
        return {"{"}
    </p>

     <p className="pl-14 text-green-400">
        strategy: true,
     </p>

     <p className="pl-14 text-green-400">
        design: true,
     </p>

     <p className="pl-14 text-green-400">
        development: true,
     </p>

     <p className="pl-14 text-green-400">
        support: true
     </p>

     <p className="pl-8 text-zinc-400">
       {"}"}
     </p>

     <p className="text-zinc-400">
        {"}"}
     </p>

     <div className="mt-8 text-zinc-500">
         // building websites that work
     </div>

        </div>

      </div>

    </div>

   </div>
  </div>
 </section>

      {/* FLOATING CONTACT CARD */}
    <section className="relative z-20 -mt-24 bg-gradient-to-b from-[#030712] via-[#071327] to-[#0a2442] py-10">

      {/* Floating Orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[60px] lg:blur-[100px] animate-float" />

      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[70px] lg:blur-[120px] animate-float-delay" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />

      </div>
      <div id="contactform" className="max-w-6xl mx-auto px-6">

        <div className=" relative grid lg:grid-cols-[350px_1fr] overflow-hidden rounded-[32px] border border-white/10
                         bg-gradient-to-br from-[#07101f] via-[#0b1730] to-[#081021] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                         hover:shadow-[0_20px_60px_rgba(37,99,235,0.20)] transition duration-300
                       "
        >
        
           {/* Premium Background Effects */} 
        <div className="absolute inset-0 overflow-hidden">

            {/* Blue Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px]" />

            {/* Cyan Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />

            {/* Center Light */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-full bg-gradient-to-b from-blue-400/10 via-transparent to-cyan-400/10 blur-3xl" />

            {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
           backgroundSize: "50px 50px",
          }}
       />

          {/* Diagonal Beam */}
        <div className="absolute -left-40 top-0 h-full w-[300px] rotate-[25deg] bg-white/[0.03] blur-3xl" />
        </div>
      
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

          {/* LEFT SIDE */}
        <div className="relative z-10 border-r border-white/10 p-10">
           <h2 className="text-4xl font-bold text-white">
              Get In Touch
           </h2>

          <p className="mt-4 text-zinc-400">
              Have an idea? Let's discuss it.
          </p>

          <div className="mt-8 space-y-8 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 lg:block lg:space-y-10">
          <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                <FiMail className="text-blue-400 text-xl" />
          </div>

          <div>
            <p className="text-blue-400 text-sm uppercase tracking-wider">
                EMAIL
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@revoldigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
                  contact@revoldigital.com
            </a>
          </div>
          </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <FaWhatsapp className="text-blue-400 text-xl" />
              </div>

              <div>
                <p className="text-blue-400 text-sm uppercase tracking-wider">
                      PHONE
                </p>
                <a
                  href="https://wa.me/917611142192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-green-400 transition"
                >
                  <span>+91 7611142192</span>
                </a>
              </div>
              </div>

              <div className="flex items-start gap-4">
               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <FiMapPin className="text-blue-400 text-xl" />
               </div>

               <div>
                 <p className="text-blue-400 text-sm uppercase tracking-wider">
                   LOCATION
                 </p>
                 <p className="text-white text-lg md:text-xl mt-2">
                   India
                 </p>
                 </div> 
               </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative z-10 p-6 md:p-8 lg:p-10">

          {submitted ? (

          <div className="flex h-full min-h-[500px] items-center justify-center">

          <div className="w-full max-w-[700px] rounded-[32px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-12 text-center backdrop-blur-xl">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/20">
             <span className="text-4xl">✓</span>
          </div>

          <h3 className="text-5xl font-bold text-white">
              Thank You!
          </h3>

          <p className="mt-5 text-lg text-zinc-300 max-w-md mx-auto">
             Your inquiry has been received successfully.
             I'll review your requirements and get back to you within 24 hours.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300">
             🚀 Response time: Usually within a few hours
          </div>

      </div>

    </div>

) : (

<>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
          Send a Message
      </h2>          
            <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <input
                 required
                 type="text"
                 placeholder="Your Name"
                 value={formData.name}
                 onChange={(e) =>
                 setFormData({
                    ...formData,
                 name: e.target.value,
                })
                }
                 className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <input
                 type="email"
                 placeholder="Email Address (Optional)"
                 value={formData.email}
                 onChange={(e) =>
                  setFormData({
                     ...formData,
                 email: e.target.value,
                })
               }
                  className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <input
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                  phone: e.target.value,
                 })
                 }
                 className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <input
                 required
                 type="text"
                 placeholder="Your Location"
                 value={formData.location}
                 onChange={(e) =>
                    setFormData({
                       ...formData,
                 location: e.target.value,
                  })
                }
                 className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              
              <select
                   required
                   value={formData.websiteType}
                   onChange={(e) =>
                     setFormData({
                          ...formData,
                   websiteType: e.target.value,
                   })
                 }
                  className="md:col-span-2 mb-1 h-14 rounded-xl border border-white/10 bg-[#111827] px-5 text-white outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              >
                <option>Select Website Type</option>
                <option>Portfolio Website</option>
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>Website Redesign</option>
              </select>

              <select
                 required
                 value={formData.budget}
                  onChange={(e) =>
                   setFormData({
                      ...formData,
                  budget: e.target.value,
                })
                } 
               className="mb-4 md:col-span-2 h-14 rounded-xl border border-white/10 bg-[#111827] px-5 text-white">
                  <option>Select Budget Range</option>
                  <option>₹10k - ₹25k</option>
                  <option>₹25k - ₹50k</option>
                  <option>₹50k - ₹1L</option>
                  <option>₹1L+</option>
            </select>      
            </div>

            <textarea
                rows={8}
                placeholder="Tell me about your website, business or goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                message: e.target.value,
              })
              }
              className=" mt-2
                     w-full rounded-3xl bg-[#121c32]
                     border border-white/10
                     px-6 py-5
                     text-white
                     placeholder:text-zinc-500
                     resize-none
                     outline-none
                     focus:ring-2
                     focus:ring-blue-500/20
                     transition-all
                   "
            />

            <button type="submit"
                className="
                        group relative mt-8 flex justify-center lg:justify-start
                        overflow-hidden rounded-2xl px-8 py-4
                        bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 
                        text-white font-semibold flex items-center gap-3
                        transition-all duration-500 hover:-translate-y-1
                        hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
                       "
            >
             
               {/* Shine Effect */}
            <span className="absolute inset-0 overflow-hidden">
            <span
                className="
                          absolute -left-full
                          top-0 h-full w-1/2
                          bg-gradient-to-r
                          from-transparent via-white/20
                          to-transparent skew-x-12
                          group-hover:left-[150%]
                          transition-all duration-1000
                      "
            />
            </span>
          
            <FiSend className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            
            <span className="relative z-10">
               Send Message
            </span>
            </button>
          </form>
       </>
     )}        

    </div>
  
  </div>
  
  </div>
 
 </section>

</>

);

}