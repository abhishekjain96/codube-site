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
  isLightOnDark?: boolean;
}

export default function CodubeLogo({
  className = "",
  size = "md",
  withLink = true,
  customLogo,
  siteName = "Codube",
  showText = true,
  isLightOnDark = false,
}: CodubeLogoProps) {
  const sizeMap = {
    sm: { iconW: 24, iconH: 24, text: "text-lg", imgH: 26, maxH: "h-7" },
    md: { iconW: 32, iconH: 32, text: "text-2xl", imgH: 34, maxH: "h-9" },
    lg: { iconW: 42, iconH: 42, text: "text-3xl", imgH: 44, maxH: "h-11" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* If custom logo image is uploaded from admin */}
      {customLogo ? (
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src={customLogo}
            alt={siteName || "Brand Logo"}
            width={240}
            height={currentSize.imgH}
            unoptimized
            priority
            className={`${currentSize.maxH} w-auto max-w-[190px] object-contain drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]`}
          />
        </div>
      ) : (
        /* Official 3D Folded Emerald 'C' Ribbon Icon */
        <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
          <svg
            width={currentSize.iconW}
            height={currentSize.iconH}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
          >
            <defs>
              <linearGradient id="cTopFold" x1="8" y1="34" x2="54" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="cSpineFold" x1="16" y1="14" x2="16" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="45%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="cBottomFold" x1="16" y1="48" x2="56" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="45%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>

            {/* Left Vertical Spine */}
            <path
              d="M18 14 L18 50 C18 55 21 59 25 61 L11 52 C7.5 50 5 46 5 41.5 L5 24.5 C5 20 7.5 16 11 14 Z"
              fill="url(#cSpineFold)"
            />

            {/* Top Angled Arm */}
            <path
              d="M5 26 C5 19.5 8.5 14.5 14 11.2 L26.5 4 C30 2 34 2 37.5 4 L55 14.5 C56.8 15.6 56.8 18.2 55 19.3 L41.5 27.3 C39.5 28.5 37 28.5 35 27.3 L22.5 19.8 C19.5 18 15 18.5 11.5 21 C8.5 23.2 6.5 26 5 29 Z"
              fill="url(#cTopFold)"
            />

            {/* Bottom Angled Arm */}
            <path
              d="M18 48 L35 37.8 C37 36.6 39.5 36.6 41.5 37.8 L55 45.8 C56.8 46.9 56.8 49.5 55 50.6 L37.5 61 C34 63 30 63 26.5 61 L22 58.3 C18.8 56.2 18 52.5 18 48 Z"
              fill="url(#cBottomFold)"
            />
          </svg>
        </div>
      )}

      {/* Brand Wordmark: Codube with Emerald Dot */}
      {showText && (
        <span
          className={`font-extrabold tracking-tight transition-colors ${currentSize.text} flex items-center leading-none ${
            isLightOnDark ? "text-white" : "text-slate-900 group-hover:text-emerald-600"
          }`}
        >
          <span>Codube</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block ml-0.5" />
        </span>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block" aria-label="Codube Home">
        {content}
      </Link>
    );
  }

  return content;
}
