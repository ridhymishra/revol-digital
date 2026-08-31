import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect, memo } from "react";

const Particles = memo(function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 700; // Reduced from 1200
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 15;
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.03;
      ref.current.rotation.x = clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
});

export default function ThreeBackground() {
  const [isMobile, setIsMobile] = useState(() =>
  typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

 useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // Set the correct value immediately

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

if (isMobile || prefersReducedMotion) {
  return null;
}

  return (
    <Canvas
      dpr={1}
      camera={{ position: [0, 0, 6] }}
      gl={{
         antialias: false,
         alpha: true,
         powerPreference: "high-performance",
         stencil: false,
         depth: false
      }}

      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
}