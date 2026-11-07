"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export default function TiltCard3D({
  children,
  className = "",
  intensity = 15,
  glowColor = "rgba(187, 251, 38, 0.2)",
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Spotlight position
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 select-none"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-3xl transition-shadow duration-300 ${className} ${
          isHovered
            ? "shadow-[0_25px_50px_-12px_rgba(187,251,38,0.25)] border-[#bbfb26]/50"
            : ""
        }`}
      >
        {/* Specular glare shine following the mouse */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 75%)`,
            }}
          />
        )}

        {/* Content with 3D Depth */}
        <div style={{ transform: "translateZ(30px)" }}>{children}</div>
      </motion.div>
    </div>
  );
}
