"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CodubeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
  customLogo?: string | null;
  siteName?: string;
  showText?: boolean;
}

export default function CodubeLogo({
  className = "",
  size = "md",
  withLink = true,
  customLogo,
  siteName = "Codube",
  showText,
}: CodubeLogoProps) {
  const sizeMap = {
    sm: { icon: 26, text: "text-lg", imgH: 26, maxH: "h-7" },
    md: { icon: 34, text: "text-2xl", imgH: 34, maxH: "h-9" },
    lg: { icon: 44, text: "text-3xl", imgH: 44, maxH: "h-11" },
  };

  const currentSize = sizeMap[size];

  // If custom logo has "logo" in name or is wide, we typically don't need redundant text
  const isWideLogo =
    customLogo && (customLogo.includes("logo") || customLogo.includes("Screenshot"));
  const shouldShowText = showText !== undefined ? showText : !isWideLogo;

  const content = (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* If custom logo is uploaded, render the real logo image with unoptimized flag */}
      {customLogo ? (
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src={customLogo}
            alt={siteName || "Brand Logo"}
            width={240}
            height={currentSize.imgH}
            unoptimized
            priority
            className={`${currentSize.maxH} w-auto max-w-[190px] object-contain drop-shadow-[0_0_12px_rgba(187,251,38,0.45)]`}
          />
        </div>
      ) : (
        /* 3D Isometric Neon Cube / Hexagon Logo */
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <svg
            width={currentSize.icon}
            height={currentSize.icon}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_12px_rgba(187,251,38,0.5)]"
          >
            <defs>
              <linearGradient id="cubeTop" x1="50" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ccff00" />
                <stop offset="100%" stopColor="#bbfb26" />
              </linearGradient>
              <linearGradient id="cubeLeft" x1="15" y1="30" x2="50" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9eff00" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <linearGradient id="cubeRight" x1="85" y1="30" x2="50" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>

            {/* Isometric Cube Shape with C notch */}
            {/* Top Face */}
            <polygon points="50,8 88,28 50,48 12,28" fill="url(#cubeTop)" />
            {/* Left Face */}
            <polygon points="12,28 50,48 50,90 12,70" fill="url(#cubeLeft)" />
            {/* Right Face */}
            <polygon points="50,48 88,28 88,70 50,90" fill="url(#cubeRight)" />

            {/* Inner dark stylized C cut-out / depth */}
            <polygon points="50,40 70,30 50,20 30,30" fill="#060907" />
            <polygon points="30,30 50,40 50,68 30,58" fill="#080c09" />
            <polygon points="50,40 64,33 64,48 50,56" fill="#0f1712" />
          </svg>

          {/* Ambient subtle glow ring */}
          <div className="absolute inset-0 bg-[#bbfb26] opacity-20 blur-md rounded-full -z-10 group-hover:opacity-40 transition-opacity" />
        </div>
      )}

      {/* Typography: Codube. (Only shown if custom logo is square icon or user enabled) */}
      {shouldShowText && (
        <span className={`font-extrabold tracking-tight text-white dark:text-white ${currentSize.text} flex items-center`}>
          {siteName.replace(".", "")}
          <span className="text-[#bbfb26] ml-[1px] animate-pulse">.</span>
        </span>
      )}
    </div>
  );

  if (withLink) {
    return <Link href="/">{content}</Link>;
  }

  return content;
}
