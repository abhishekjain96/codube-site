"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WalkthroughModal from "./WalkthroughModal";
import {
  ArrowUpRight,
  Play,
  TrendingUp,
  Users,
  ShieldCheck,
  Layers,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";

interface FeaturedProjectsProps {
  content?: any;
}

export default function FeaturedProjects({ content }: FeaturedProjectsProps) {
  const [selectedWalkthrough, setSelectedWalkthrough] = useState<any | null>(null);

  const defaultProjects = [
    {
      id: "scantaker",
      number: "01",
      badge: "FEATURED PROJECT 01",
      title: "ScanTaker",
      status: "Live Product",
      tagline: "Complete diagnostic booking platform for MRI & CT scans.",
      description:
        "A real-world healthcare platform that simplifies MRI and CT scan booking, diagnostic center fleet management and appointment operations in Jaipur.",
      image: "/images/scantaker-mockup.png",
      liveUrl: "https://scantaker.com",
      tags: [
        "Patient Booking Portal",
        "Hospital Admin Panel",
        "Diagnostic Centre Portal",
        "Real-Time Slot Confirmation",
        "WhatsApp Report Dispatch",
      ],
      resultHeader: "Platform Impact",
      results: [
        { label: "Faster Booking Flow (70%)", icon: "trending-up" },
        { label: "15+ Diagnostic Centers Connected", icon: "users" },
        { label: "Sub-Second Edge Booking", icon: "shield-check" },
      ],
    },
    {
      id: "medlearnings",
      number: "02",
      badge: "FEATURED PROJECT 02",
      title: "MedLearnings",
      status: "Live Product",
      tagline: "Medical education platform for healthcare professionals.",
      description:
        "Learn, train and upskill with expert-led clinical courses, live diagnostic webinars and hands-on workshops in medical imaging and patient care.",
      image: "/images/medlearnings-mockup.png",
      liveUrl: "https://medlearnings.com",
      tags: [
        "Interactive Video Courses",
        "Live Medical Webinars",
        "Automated Certificate Generation",
        "Doctor LMS Portal",
      ],
      resultHeader: "Platform Impact",
      results: [
        { label: "5,000+ Enrolled Physicians", icon: "layers" },
        { label: "Live Webinars & Workshops", icon: "users" },
        { label: "Certified CME Accreditations", icon: "award" },
      ],
    },
  ];

  const rawProjects = content?.projects && content.projects.length > 0 ? content.projects : defaultProjects;

  const projects = rawProjects.map((p: any, idx: number) => {
    const id = p.id || `project-${idx + 1}`;
    const title = p.title || p.name || `Project ${idx + 1}`;
    const badge = p.badge || `FEATURED PROJECT 0${idx + 1}`;
    const status = p.status || "Live Product";
    const tagline = p.tagline || "";
    const description = p.description || "";
    const image = p.image || "/images/scantaker-mockup.png";
    const liveUrl = p.liveUrl || "#";
    const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === "string" ? p.tags.split(",").map((s: string) => s.trim()) : []);
    
    let resultsList: { label: string; icon: string }[] = [];
    if (Array.isArray(p.results)) {
      resultsList = p.results.map((r: any) => {
        if (typeof r === "string") return { label: r, icon: "check" };
        return { label: r.title || r.label || String(r), icon: r.icon || "check" };
      });
    } else {
      resultsList = [
        { label: "High Performance Architecture", icon: "trending-up" },
        { label: "100% On-Time Delivery", icon: "check" },
        { label: "Production Tested", icon: "shield-check" },
      ];
    }

    return {
      id,
      title,
      badge,
      status,
      tagline,
      description,
      image,
      liveUrl,
      tags,
      resultHeader: p.resultHeader || "Platform Impact",
      results: resultsList,
    };
  });

  const getResultIcon = (iconName: string) => {
    switch (iconName) {
      case "trending-up":
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case "users":
        return <Users className="w-4 h-4 text-emerald-600" />;
      case "shield-check":
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case "layers":
        return <Layers className="w-4 h-4 text-emerald-600" />;
      case "award":
        return <Award className="w-4 h-4 text-emerald-600" />;
      default:
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white" id="work">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
                FEATURED WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Real Products.{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Real Business Impact.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md text-left md:text-right">
            A look at the digital platforms and clinical systems we&apos;ve engineered and are actively scaling in live production.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projects.map((proj: any) => (
            <div
              key={proj.id}
              className="relative rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden shadow-[0_4px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
                {/* Left: Project Details */}
                <div className="lg:col-span-6 space-y-5 text-left">
                  {/* Top Badge & Status */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-emerald-700">
                      {proj.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      {proj.status}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/work/${proj.id}`} className="block group/title">
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight group-hover/title:text-emerald-600 transition-colors">
                      {proj.title}
                    </h3>
                  </Link>

                  {/* Tagline */}
                  {proj.tagline && (
                    <p className="text-base font-semibold text-slate-800">
                      {proj.tagline}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Feature Tags */}
                  {proj.tags && proj.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {proj.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedWalkthrough(proj)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm transition-all group cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current text-white" />
                      <span>Watch 60s Live Walkthrough</span>
                    </button>

                    {proj.liveUrl && proj.liveUrl !== "#" && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all group"
                      >
                        <span>Visit Live Product</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Mockup Image */}
                <div className="lg:col-span-6 relative flex items-center justify-center">
                  <div
                    onClick={() => setSelectedWalkthrough(proj)}
                    className="relative z-10 w-full block group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-2 hover:border-emerald-500 shadow-sm transition-all duration-300"
                  >
                    <Image
                      src={proj.image}
                      alt={`${proj.title} Mockup`}
                      width={640}
                      height={440}
                      unoptimized
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Floating Video Demo Overlay Pill */}
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/35 transition-colors flex items-center justify-center">
                      <div className="px-4 py-2.5 rounded-full bg-white/95 border border-slate-200 backdrop-blur-xl flex items-center gap-2 text-xs font-bold text-slate-900 shadow-lg transform group-hover:scale-105 transition-transform">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </span>
                        <span>Watch 60s Live Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Result Bar */}
              {proj.results && proj.results.length > 0 && (
                <div className="pt-5 border-t border-slate-100 flex flex-col md:flex-row items-center gap-4 justify-between bg-slate-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-5 sm:px-8 rounded-b-3xl">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider shrink-0">
                    {proj.resultHeader}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto flex-1 md:justify-end">
                    {proj.results.map((res: any, rIdx: number) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs"
                      >
                        {getResultIcon(res.icon)}
                        <span className="text-xs font-semibold text-slate-800">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 60s Live Walkthrough Video Modal */}
      {selectedWalkthrough && (
        <WalkthroughModal
          project={selectedWalkthrough}
          onClose={() => setSelectedWalkthrough(null)}
        />
      )}
    </section>
  );
}
