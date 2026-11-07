"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on pointer devices with hover capability (desktop/tablets with mouse)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${mousePosition.x - 200}px, ${mousePosition.y - 200}px, 0)`,
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(187,251,38,0.07)_0%,rgba(34,197,94,0.03)_40%,transparent_70%)] blur-2xl" />
    </div>
  );
}
