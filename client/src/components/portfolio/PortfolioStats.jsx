export default function PortfolioStats() {
  return (
    <section className="relative overflow-hidden bg-[#020817] pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16">

      {/* background */}
      <div className="absolute inset-0">

        {/* glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

        {/* grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:58px_58px]" />
        </div>

      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">

        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#030816]/90 p-6 md:p-8 lg:p-12">

          {/* radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT CONTENT */}
            <div>

              <p className="mb-5 text-[12px] uppercase tracking-[0.32em] text-blue-200/55">
                CORE EXPERTISE
              </p>

              <h2 className="max-w-[560px] text-[36px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[48px] md:text-[60px] lg:text-[72px]">

                Designed With Purpose.
                Built With Precision.
      
              </h2>

              <p className="mt-7 max-w-[540px] text-[18px] leading-[1.8] text-white/50">

                Building purposeful digital experiences where design, 
                technology and user expectations come together to create meaningful results.

              </p>

              {/* stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 lg:flex lg:gap-14">

                <div>
                  <h3 className="text-[28px] md:text-[42px] font-semibold tracking-[-0.05em] text-white">
                    100%
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[12px] lg:text-[12px] uppercase tracking-[0.24em] text-white/35">
                    Custom Design
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] md:text-[42px] font-semibold tracking-[-0.05em] text-white">
                    100%
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[12px] lg:text-[12px] uppercase tracking-[0.24em] text-white/35">
                    Responsive
                  </p>
                </div>

                <div>
                  <h3 className="text-[28px] md:text-[42px] font-semibold tracking-[-0.05em] text-white">
                    Modern
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[12px] lg:text-[12px] uppercase tracking-[0.24em] text-white/35">
                    Tech Stack
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex h-[380px] md:h-[540px] items-center justify-center">

              {/* glow */}
              <div className="absolute h-[300px] w-[300px] md:h-[520px] md:w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />

              {/* orbit lines */}
              <div className="absolute h-[280px] w-[280px] md:h-[520px] md:w-[520px] rounded-full border border-white/10" />
              <div className="absolute h-[180px] w-[180px] md:h-[390px] md:w-[390px] rounded-full border border-white/10" />

              {/* center orb */}
              <div className="relative flex h-[140px] w-[140px] md:h-[340px] md:w-[340px] items-center justify-center rounded-full border border-blue-400/40 bg-[#071126] shadow-[0_0_120px_rgba(59,130,246,0.28)]">

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10" />

                <div className="relative text-center">

                  <h3 className="text-[40px] md:text-[92px] font-semibold leading-none tracking-[-0.08em] text-white">
                    UI
                  </h3>

                  <p className="mt-3 text-[10px] md:text-[12px] uppercase tracking-[0.38em] text-white/45">
                    FRONTEND SYSTEMS
                  </p>

                </div>

              </div>

              {/* React */}
              <div className="absolute left-[8%] top-[12%] md:left-[2%] md:top-[18%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React JS"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  React JS
                </span>

              </div>

              {/* Tailwind */}
              <div className="absolute right-[8%] top-[12%] md:right-[2%] md:top-[18%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  Tailwind
                </span>

              </div>

              {/* Node */}
              <div className="absolute left-[5%] top-[48%] md:left-[2%] md:top-[50%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node JS"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  Node JS
                </span>

              </div>

              {/* VS Code */}
              <div className="absolute right-[5%] top-[48%] md:right-[2%] md:top-[50%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  alt="VS Code"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  VS Code
                </span>

              </div>

              {/* JavaScript */}
              <div className="absolute bottom-[18%] left-[10%] md:left-[8%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5 rounded-sm"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  JavaScript
                </span>

              </div>

              {/* Figma */}
              <div className="absolute bottom-[18%] right-[10%] md:right-[8%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  Figma
                </span>

              </div>

              {/* HTML */}
              <div className="hidden md:flex absolute left-[20%] bottom-[6%] md:left-[28%] md:bottom-[4%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  HTML5
                </span>

              </div>

              {/* CSS */}
              <div className="hidden md:flex absolute right-[20%] bottom-[6%] md:right-[28%] md:bottom-[4%] flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl">

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  loading="lazy"
                  decoding="async"
                  className="h-4 w-4 md:h-5 md:w-5"
                />

                <span className="text-[11px] md:text-[13px] text-white/70">
                  CSS3
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}