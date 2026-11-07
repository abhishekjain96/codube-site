"use client";

import React from "react";

export default function CyberGridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 3D Perspective Floor Grid */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1600px] h-[550px] opacity-25"
        style={{
          background:
            "linear-gradient(to top, rgba(187, 251, 38, 0.2) 0%, transparent 80%), repeating-linear-gradient(0deg, rgba(187, 251, 38, 0.15) 0px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(187, 251, 38, 0.15) 0px, transparent 1px, transparent 50px)",
          transform: "perspective(600px) rotateX(65deg)",
          transformOrigin: "bottom center",
          maskImage: "radial-gradient(ellipse at 50% 90%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 90%, black 40%, transparent 85%)",
        }}
      />

      {/* Floating Ambient Cyber Orbs */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#bbfb26] shadow-[0_0_15px_#bbfb26] animate-pulse" />
      <div className="absolute top-1/3 right-16 w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_20px_#22c55e] animate-ping" style={{ animationDuration: "3s" }} />
      <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#bbfb26] shadow-[0_0_12px_#bbfb26] animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_15px_#ccff00] animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}
