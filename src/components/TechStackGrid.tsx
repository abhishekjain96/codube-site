"use client";

import React from "react";
import Image from "next/image";
import { Users, Handshake, Rocket, Clock } from "lucide-react";

interface TechStackGridProps {
  content?: any;
}

const techItems = [
  {
    name: "React",
    category: "Frontend",
    color: "#06b6d4",
    svg: (
      <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#06b6d4" />
        <g stroke="#06b6d4" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "#22c55e",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="#22c55e">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm0 3.2l9.7 5.6v11.4L16 28.3l-9.7-5.6V11.3L16 5.7z" />
      </svg>
    ),
  },
  {
    name: "Java",
    category: "Backend",
    color: "#f87171",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    name: "Spring Boot",
    category: "Enterprise",
    color: "#84cc16",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    color: "#10b981",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#10b981">
        <path d="M12 2C12 2 5.5 7.5 5.5 13.5C5.5 17.5 8.5 21 12 22C15.5 21 18.5 17.5 18.5 13.5C18.5 7.5 12 2 12 2ZM12 20C9.8 19.2 7.5 16.5 7.5 13.5C7.5 9.5 11 5 12 3.8C13 5 16.5 9.5 16.5 13.5C16.5 16.5 14.2 19.2 12 20Z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "SQL DB",
    color: "#60a5fa",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 15c.5-1 1-1.5 2-1.5s1.5.5 2 1.5" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    name: "AWS",
    category: "Cloud Infra",
    color: "#fb923c",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: "AI / LLM",
    category: "Gemini & GPT",
    color: "#c084fc",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

export default function TechStackGrid({ content }: TechStackGridProps) {
  const stats = content?.stats || [
    { value: "10+", label: "Projects Delivered", icon: Users },
    { value: "8+", label: "Businesses Trust Us", icon: Handshake },
    { value: "99%", label: "On-Time Delivery", icon: Rocket },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tech Stack Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#bbfb26]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#bbfb26] animate-pulse" />
              <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
                Our Tech Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Modern Tools for Real-World Impact
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            We use industry-proven technologies that ensure high performance, security, and effortless scaling.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-16">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="glass-panel group rounded-xl p-4 text-center border-white/[0.08] hover:border-[#bbfb26]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2.5"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {tech.svg}
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#bbfb26] transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-zinc-500 font-medium">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Glowing Stats Container (Pixel-perfect to Image 1) */}
        <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 glass-panel-glow border-[#bbfb26]/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Internal neon ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(187,251,38,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: 3D Lightning Bolt on Circular Orbital Grid */}
            <div className="md:col-span-4 flex items-center justify-center md:justify-start gap-4">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Concentric orbital rings */}
                <div className="absolute inset-0 rounded-full border border-[#bbfb26]/20 animate-spin" style={{ animationDuration: "25s" }} />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#bbfb26]/30" />
                <div className="absolute inset-5 rounded-full bg-[#bbfb26]/10 blur-md" />

                <Image
                  src="/images/lightning-bolt.png"
                  alt="Codube Lightning 3D"
                  width={110}
                  height={110}
                  className="relative z-10 drop-shadow-[0_0_20px_rgba(187,251,38,0.7)] object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <div className="text-xs font-mono uppercase tracking-wider text-[#bbfb26]">High Velocity</div>
                <div className="text-sm font-bold text-white">Rapid Deployment</div>
              </div>
            </div>

            {/* Right: Key Stats Counters */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="sm:px-6 first:pl-0 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2 text-[#bbfb26]">
                  <Users className="w-5 h-5" />
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    10+
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Projects Delivered
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Production ready &amp; scalable
                </div>
              </div>

              {/* Stat 2 */}
              <div className="sm:px-6 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2 text-[#bbfb26]">
                  <Handshake className="w-5 h-5" />
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    8+
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Businesses Trust Us
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Long-term partner contracts
                </div>
              </div>

              {/* Stat 3 */}
              <div className="sm:px-6 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-2 text-[#bbfb26]">
                  <Rocket className="w-5 h-5" />
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    99%
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300">
                  On-Time Delivery
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Milestone-driven sprints
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
