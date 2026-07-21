import {
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-16 pb-8 md:pt-20 md:pb-10 px-6 md:px-12 lg:px-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-blue-600/10 blur-[180px]"></div>

        {/* SIDE GLOW */}
        <div className="absolute bottom-[-100px] right-[-100px] w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[150px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* MAIN PANEL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/[0.06]
            bg-white/[0.03]
            backdrop-blur-2xl
            px-5
            py-6
            md:py-10
            md:px-14
            lg:px-20
            lg:py-20
          "
        >

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:52px_52px]"></div>

          {/* TOP LIGHT */}
          <div className="absolute top-0 left-[20%] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12 lg:gap-16">

            {/* LEFT SIDE */}
            <div className="relative max-w-[720px]">

              {/* EXTRA GLOW */}
              <div className="absolute top-[120px] left-[120px] w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                {/* KICKER */}
                <span className="text-[13px] tracking-[5px] uppercase text-blue-400">
                   Why Good Design Matters
                </span>

                {/* HEADING */}
                <h2 className="mt-7 max-w-[700px] text-[34px] sm:text-[42px] md:text-[56px]
                               leading-[1.15] md:leading-[1.02]
                               tracking-[-1px] md:tracking-[-3px] font-semibold text-white">
                  Design that builds trust before people even start reading.
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 md:mt-8 max-w-[560px] text-gray-300 text-[15px] md:text-[18px] leading-8 md:leading-[2]">
                  A great website does more than look professional. 
                  It helps visitors understand your value, trust your business and take action with confidence.
                </p>

                {/* BENEFITS */}
                <div className="mt-6 md:mt-14 flex flex-wrap gap-3 md:gap-5">

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      py-3
                      text-sm
                      text-gray-300
                      backdrop-blur-xl
                      transition
                      duration-300
                      hover:border-blue-400/20
                      hover:bg-blue-500/[0.06]
                    "
                  >
                    Guides attention naturally
                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      py-3
                      text-sm
                      text-gray-300
                      backdrop-blur-xl
                      transition
                      duration-300
                      hover:border-blue-400/20
                      hover:bg-blue-500/[0.06]
                    "
                  >
                    Builds confidence naturally
                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-5
                      py-3
                      text-sm
                      text-gray-300
                      backdrop-blur-xl
                      transition
                      duration-300
                      hover:border-blue-400/20
                      hover:bg-blue-500/[0.06]
                    "
                  >
                    Makes decisions easier
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">

              {/* CTA CLUSTER */}
              <div className="relative w-full max-w-[320px] md:max-w-[420px] mx-auto">

                {/* BACK GLOW */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

                {/* MAIN CARD */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-white/[0.06]
                    bg-white/[0.04]
                    backdrop-blur-2xl
                    p-6
                  "
                >

                  {/* INNER GRID */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

                  <div className="relative z-10">

                    {/* STATUS BADGE */}
                    <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">

                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>

                      <span className="text-[13px] text-blue-200">
                        Let’s Build Your Online Presence
                      </span>

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 md:mt-8 flex flex-col gap-4">

                      {/* PRIMARY BUTTON */}
                      <a
                        href="/contact"
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          bg-blue-500
                          px-7
                          py-5
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:scale-[1.02]
                          hover:bg-blue-400
                          shadow-[0_10px_40px_rgba(59,130,246,0.35)]
                        "
                      >

                        {/* HOVER GLOW */}
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100"></div>

                        <div className="relative z-10 flex items-center justify-between">

                          <div>

                            <div className="text-[18px] font-medium">
                              Let's Create Something Great
                            </div>

                            <div className="mt-1 text-sm text-blue-100/80">
                              Get a website tailored for your business
                            </div>

                          </div>

                          <div className="text-2xl">
                            →
                          </div>

                        </div>

                      </a>

                      {/* SECONDARY BUTTON */}
                      <a
                        href="/portfolio"
                        className="
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.03]
                          px-7
                          py-5
                          text-white
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:scale-[1.01]
                          hover:border-blue-400/20
                          hover:bg-white/[0.05]
                        "
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <div className="text-[18px] font-medium">
                              Explore Recent Projects
                            </div>

                            <div className="mt-1 text-sm text-gray-400">
                              See how strategy, design and development come together.
                            </div>

                          </div>

                          <div className="text-2xl text-gray-400">
                            ↗
                          </div>

                        </div>

                      </a>

                    </div>

                    {/* TRUST CARD */}
                    <div
                      className="
                        mt-8
                        rounded-[24px]
                        border
                        border-white/[0.06]
                        bg-[#0B1120]/50
                        p-5
                        transition
                        duration-500
                        hover:-translate-y-2
                        transition-all duration-500
                        hover:scale-[1.02]
                      "
                    >

                      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">

                        {/* AVATARS */}
                        <div className="flex -space-x-3">

                        <div className="w-11 h-11 rounded-full border border-[#050816] bg-[#61DAFB] flex items-center justify-center">
                              <FaReact className="text-black text-lg" />
                        </div>

                        <div className="w-11 h-11 rounded-full border border-[#050816] bg-[#68A063] flex items-center justify-center">
                              <FaNodeJs className="text-white text-lg" />
                        </div>

                        <div className="w-11 h-11 rounded-full border border-[#050816] bg-[#007ACC] flex items-center justify-center">
                              <VscVscode className="text-white text-lg" />
                        </div>

                       </div>

                        {/* TEXT */}
                        <div>

                          <div className="text-white text-[15px] font-medium">
                            Designed Around Results
                          </div>

                          <div className="text-gray-400 text-sm mt-1 leading-6">
                            Every section has a purpose —
                            to inform, engage and move visitors toward action.
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      
    </section>
  );
};

export default CTASection;