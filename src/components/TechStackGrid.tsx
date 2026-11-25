"use client";

import React from "react";
import Image from "next/image";
import { Users, Handshake, Rocket, Sparkles } from "lucide-react";

interface TechStackGridProps {
  content?: any;
}

const techItems = [
  {
    name: "React 18",
    category: "Frontend",
    color: "#0891b2",
    svg: (
      <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#0891b2" />
        <g stroke="#0891b2" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js 14",
    category: "Full-Stack",
    color: "#0f172a",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#0f172a" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    color: "#2563eb",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2563eb">
        <rect width="24" height="24" rx="4" fill="#2563eb" />
        <path d="M7 11h4V9H4v2h2v7h2v-7zm6 3.5c0-.8.6-1.5 1.5-1.5h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13V10h4c.8 0 1.5.7 1.5 1.5v.5c0 .8-.7 1.5-1.5 1.5h-2.5c-.3 0-.5.2-.5.5s.2.5.5.5H19v2h-4.5c-.8 0-1.5-.7-1.5-1.5v-.5z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "#16a34a",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="#16a34a">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5zm0 3.2l9.7 5.6v11.4L16 28.3l-9.7-5.6V11.3L16 5.7z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    color: "#2563eb",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 15c.5-1 1-1.5 2-1.5s1.5.5 2 1.5" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "NoSQL DB",
    color: "#059669",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#059669">
        <path d="M12 2C12 2 5.5 7.5 5.5 13.5C5.5 17.5 8.5 21 12 22C15.5 21 18.5 17.5 18.5 13.5C18.5 7.5 12 2 12 2ZM12 20C9.8 19.2 7.5 16.5 7.5 13.5C7.5 9.5 11 5 12 3.8C13 5 16.5 9.5 16.5 13.5C16.5 16.5 14.2 19.2 12 20Z" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    category: "Cloud Infra",
    color: "#ea580c",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: "Gemini AI",
    category: "LLM Pipelines",
    color: "#7c3aed",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  },
];

export default function TechStackGrid({ content }: TechStackGridProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tech Stack Heading */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-wide uppercase">
                OUR TECHNOLOGY STACK
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              Modern Tools for Real-World Scalability
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md text-left md:text-right">
            We use industry-proven technologies that ensure sub-second performance, bulletproof security, and effortless scaling.
          </p>
        </div>

        {/* Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-14">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl p-4 text-center bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-2.5 shadow-2xs hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-transform">
                {tech.svg}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {tech.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Stats Container */}
        <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Highlight Pill */}
            <div className="md:col-span-4 flex items-center justify-center md:justify-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                  HIGH VELOCITY
                </div>
                <div className="text-base font-black text-slate-950">
                  Rapid Turnkey Deployment
                </div>
                <div className="text-xs text-slate-500">
                  Live staging links every 48 hours
                </div>
              </div>
            </div>

            {/* Right: Key Stats Counters */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="sm:px-6 first:pl-0 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    10+
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  Live Production Systems
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Handling active appointments
                </div>
              </div>

              <div className="sm:px-6 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    7 Days
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  Guaranteed Turnaround
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  On turnkey business packages
                </div>
              </div>

              <div className="sm:px-6 pt-4 sm:pt-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    100%
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  Source Code Ownership
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Full GitHub repository transfer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
