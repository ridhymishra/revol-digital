import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We discuss goals, challenges and expectations to build a clear direction before any design work begins.",
    image:
      "/images/discoverycard.webp",
  },
  {
    number: "02",
    title: "Strategy",
    text: "The site structure, content flow and user journey are mapped to create a smooth experience.",
    image:
      "/images/cardplanning.webp",
  },
  {
    number: "03",
    title: "Design",
    text: "Creating UI/UX experiences focused on clarity and engagement.",
    image:
      "/images/designcard.webp",
  },
  {
    number: "04",
    title: "Build",
    text: "Every screen is carefully developed with clean code, smooth interactions and attention to detail.",
    image:
      "/images/buildcard.webp",
  },
  {
    number: "05",
    title: "Launch",
    text: "After final testing and review, the website goes live fully prepared for real visitors.",
    image:
      "/images/launchcard.webp",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative bg-[#050816] overflow-hidden py-20 md:py-24 px-6 md:px-12 lg:px-20">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center max-w-3xl mx-auto"
        >
          
          <span className="text-[13px] tracking-[6px] uppercase text-blue-400">
            Process
          </span>

          <h2 className="mt-7 text-[38px] md:text-[52px] font-semibold leading-[1.08] tracking-[-2px] text-white">
            A clear path from <br />
            concept to completion.
          </h2>

          <p className="mt-6 text-gray-400 text-[16px] md:text-[17px] leading-8 max-w-2xl mx-auto">
            Every project follows a structured process focused on clean execution,
            smooth communication and modern digital experiences.
          </p>
        </motion.div>

        {/* PROCESS */}
        <div className="relative mt-16 md:mt-20">
          
          {/* LINE */}
          <motion.div
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                 className="hidden lg:block absolute top-[90px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                             duration: 0.7,
                             delay: Number(step.number) * 0.12,
                   }}
                className="group text-center transition-all duration-500 hover:-translate-y-2"
              >
                
                {/* IMAGE */}
                <div
                  className="
                    relative 
                    w-[150px] h-[150px] md:w-[180px] md:h-[180px] 
                    mx-auto 
                    rounded-full 
                    overflow-hidden 
                    border 
                    border-white/10 
                    bg-white/[0.03]
                    shadow-[0_0_0_rgba(59,130,246,0)]
                    group-hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]
                    transition-all 
                    duration-500
                  "
                >
                  
                  <img
                    src={step.image}
                    alt={`${step.title} step in website development process`}
                    loading="lazy"
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      grayscale 
                      brightness-[0.75]
                      group-hover:brightness-100
                      group-hover:grayscale-0
                      group-hover:scale-105
                      transition 
                      duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div
                         aria-hidden="true"
                         className="absolute inset-0 bg-black/35"
                  />

                  {/* NUMBER */}
                  <div className="absolute top-3 right-3 w-11 h-11 rounded-full bg-[#071120]/90 border border-white/10 flex items-center justify-center text-white text-base font-bold backdrop-blur-sm">
                    {step.number}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-7">
                  
                  <h3 className="text-[26px] font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-400 text-[16px] leading-8 max-w-[260px] mx-auto">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;