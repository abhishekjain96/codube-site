"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CodubeLogo from "./CodubeLogo";

interface CtaBannerProps {
  content?: any;
}

export default function CtaBanner({ content }: CtaBannerProps) {
  const ctaData = content?.cta || {
    title: "Have an Idea or Project in Mind?",
    subtitle: "Let's discuss and turn it into a powerful digital product together.",
    buttonText: "Let's Talk",
    buttonUrl: "/contact",
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl glass-panel-glow border-[#bbfb26]/40 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_20px_60px_rgba(187,251,38,0.18)]">
          {/* Ambient inner neon light sweep */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(187,251,38,0.25)_0%,transparent_70%)] blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[radial-gradient(circle,rgba(34,197,94,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left: 3D Cube Icon & Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="shrink-0 p-3 rounded-2xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 shadow-[0_0_20px_rgba(187,251,38,0.3)]">
                <CodubeLogo
                  size="lg"
                  withLink={false}
                  className="!gap-0"
                  customLogo={content?.general?.customLogo}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {ctaData.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-normal max-w-xl">
                  {ctaData.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Neon Button */}
            <div className="shrink-0">
              <Link
                href={ctaData.buttonUrl || "/contact"}
                className="neon-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-black group"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
