import { useEffect, useRef, useState } from "react";

/**
 * Only attaches a video `src` once it's near the viewport, and pauses
 * playback whenever it scrolls off-screen. Avoids ~30MB of simultaneous
 * autoplaying video on page load.
 */
export default function LazyVideo({ src, className }) {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={inView ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
