import { useState, useEffect, useRef } from "react";

const problems = [
    { title: "Users Leave Too Early", desc: "Visitors exit before taking action." },
    { title: "Traffic Doesn’t Convert", desc: "No clear path to convert users." },
    { title: "Mobile Experience Issues", desc: "Poor mobile UX loses users." },
    { title: "Slow Performance", desc: "Slow loading times reduce trust, lower engagement, and increase bounce rates."},
    { title: "Weak User Engagement", desc: "Users don’t interact or stay." },
  ];

export default function ProblemSection() {
 
  const [active, setActive] = useState(2); // default center
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // 🔥 Detect if section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoRotate();
        } else {
          stopAutoRotate();
          setActive(2); // reset to center when not visible
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoRotate();
    };
  }, []);

  // 🔥 Start auto rotation
  const startAutoRotate = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % problems.length);
    }, 2000);
  };

  // 🔥 Stop auto rotation
  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section
       ref={sectionRef}
       className="bg-[#020617] text-white py-20 md:pt-28 md:pb-16 px-6 md:px-16"
    >
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
        <span className="text-indigo-400 uppercase tracking-widest font-semibold">
          Hidden Problems
        </span>

        <h2 className="text-3xl md:text-6xl font-bold mt-4">
          What’s Quietly Killing Your Website Performance
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          These issues may not be obvious — but they directly affect your growth.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-10">
        {problems.map((item, index) => {
          const isActive = index === active;

          return (
            <div
                key={item.title}
                onMouseEnter={() => {
                 stopAutoRotate();
                 setActive(index);
                }}
              onMouseLeave={() => startAutoRotate()}
              className={`w-[260px] md:w-[240px] h-[160px] md:h-[200px] flex-shrink-0
                          transition-all duration-500 cursor-pointer text-center
              ${
                 isActive
                    ? "md:scale-110 scale-105 opacity-100 z-10"
                    : "scale-100 opacity-70"
              }
             `}
            >
              <div
                 className={`relative h-full w-full flex flex-col justify-center p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-lg transition-all duration-500
                ${
                  isActive
                    ? "bg-white/10 shadow-[0_0_60px_rgba(99,102,241,0.35)]"
                    : "bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                }`}
              >
                {/* Glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10"></div>
                )}

                <h3 className="text-lg md:text-xl font-semibold mb-2 relative z-10">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base relative z-10">
                  {item.desc}
                </p>

                <div
                  className={`h-[2px] mt-4 mx-auto transition-all duration-300 relative z-10
                  ${isActive ? "w-12 bg-indigo-500" : "w-0"}`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}