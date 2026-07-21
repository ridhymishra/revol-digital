import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
      autoRaf: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}