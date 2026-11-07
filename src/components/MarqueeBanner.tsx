"use client";

import React from "react";
import { Sparkles, Zap, Flame, ShieldCheck } from "lucide-react";

interface MarqueeBannerProps {
  customItems?: { text: string; highlight?: boolean }[];
}

const defaultRow1 = [
  { text: "NEXT-GEN WEB APPLICATIONS", highlight: true, icon: Zap },
  { text: "AI AGENTS & LLM AUTOMATION", highlight: false, icon: Sparkles },
  { text: "SAAS PLATFORMS AT SCALE", highlight: true, icon: Flame },
  { text: "PIXEL-PERFECT 60FPS UI/UX", highlight: false, icon: Sparkles },
  { text: "99% ON-TIME MILESTONE DELIVERY", highlight: true, icon: ShieldCheck },
  { text: "MOBILE-FIRST RESPONSIVE", highlight: false, icon: Zap },
  { text: "HIGH-PERFORMANCE NEXT.JS 14", highlight: true, icon: Flame },
  { text: "ENTERPRISE SCALABLE BACKENDS", highlight: false, icon: ShieldCheck },
];

const programmingLanguages = [
  { name: "React 18", color: "#06b6d4", tag: "Frontend" },
  { name: "Next.js 14 (App Router)", color: "#ffffff", tag: "Full-Stack" },
  { name: "TypeScript", color: "#3b82f6", tag: "Language" },
  { name: "Node.js", color: "#22c55e", tag: "Runtime" },
  { name: "Python", color: "#eab308", tag: "AI & Data" },
  { name: "Java", color: "#ef4444", tag: "Enterprise" },
  { name: "Spring Boot", color: "#84cc16", tag: "Microservices" },
  { name: "PostgreSQL", color: "#60a5fa", tag: "SQL DB" },
  { name: "MongoDB", color: "#10b981", tag: "NoSQL DB" },
  { name: "AWS Cloud", color: "#f97316", tag: "Infra" },
  { name: "Gemini AI & LLMs", color: "#c084fc", tag: "AI Models" },
  { name: "Docker", color: "#38bdf8", tag: "DevOps" },
  { name: "Tailwind CSS", color: "#38bdf8", tag: "Styling" },
  { name: "Redis", color: "#f43f5e", tag: "Cache" },
  { name: "GraphQL & REST", color: "#ec4899", tag: "API" },
];

export default function MarqueeBanner({ customItems }: MarqueeBannerProps) {
  const row1 = customItems || defaultRow1;

  return (
    <div className="relative py-8 md:py-12 overflow-hidden bg-[#060907] border-y border-[#bbfb26]/20 select-none">
      {/* Background neon ambient line glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(187,251,38,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Row 1: Leftward sliding marquee with Highlight Text & Neon Badges */}
      <div className="flex w-max space-x-6 animate-marquee hover:[animation-play-state:paused]">
        {[...row1, ...row1, ...row1].map((item, idx) => {
          const Icon = (item as any).icon || Sparkles;
          return (
            <div
              key={`row1-${idx}`}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider transition-all whitespace-nowrap ${
                item.highlight
                  ? "bg-[#bbfb26] text-black shadow-[0_0_20px_rgba(187,251,38,0.45)] border border-[#bbfb26]"
                  : "bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-[#bbfb26]/40 hover:text-white"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  item.highlight ? "text-black fill-current" : "text-[#bbfb26]"
                }`}
              />
              <span>{item.text}</span>
              <span className={`text-xs ${item.highlight ? "text-black/60" : "text-[#bbfb26]"}`}>✦</span>
            </div>
          );
        })}
      </div>

      {/* Row 2: Rightward sliding marquee with Programming Languages & Frameworks in Loop */}
      <div className="flex w-max space-x-4 mt-4 animate-marquee-reverse hover:[animation-play-state:paused]">
        {[...programmingLanguages, ...programmingLanguages, ...programmingLanguages].map(
          (lang, idx) => (
            <div
              key={`lang-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono font-bold text-zinc-300 hover:text-white hover:border-[#bbfb26]/40 transition-colors whitespace-nowrap"
            >
              <span
                className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: lang.color, color: lang.color }}
              />
              <span>{lang.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-500 font-sans font-medium">
                {lang.tag}
              </span>
            </div>
          )
        )}
      </div>

      {/* Gradient mask for edge fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#060907] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#060907] to-transparent z-10" />
    </div>
  );
}
