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
  ExternalLink,
  CheckCircle,
  Code2,
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
      tagline: "A complete diagnostic booking platform for MRI & CT scans.",
      description:
        "A real-world healthcare platform that simplifies MRI and CT scan booking, center management and appointment operations in Jaipur.",
      image: "/images/scantaker-mockup.png",
      liveUrl: "https://scantaker.com",
      tags: [
        "Patient Portal",
        "Admin Panel",
        "Centre Portal",
        "Real-time Booking",
        "Reports & Notifications",
      ],
      resultHeader: "The Result",
      results: [
        { label: "Faster Booking Flow (70%)", icon: "trending-up" },
        { label: "Better Centre Management", icon: "users" },
        { label: "Improved Patient Experience", icon: "shield-check" },
      ],
    },
    {
      id: "medlearnings",
      number: "02",
      badge: "FEATURED PROJECT 02",
      title: "MedLearnings",
      status: "Live Product",
      tagline: "A medical education platform for healthcare professionals.",
      description:
        "Learn, train and upskill with expert-led courses, webinars and hands-on workshops in medical imaging and patient care.",
      image: "/images/medlearnings-mockup.png",
      liveUrl: "https://medlearnings.com",
      tags: [
        "Online Courses",
        "Webinars & Workshops",
        "Certificates & Enrollment",
        "Learning Management (LMS)",
      ],
      resultHeader: "Platform Impact",
      results: [
        { label: "5,000+ Enrolled Doctors", icon: "layers" },
        { label: "Live Webinars & Workshops", icon: "users" },
        { label: "Certified Learning Programs", icon: "award" },
      ],
    },
  ];

  // Dynamic projects from siteContent or default fallback
  const rawProjects = content?.projects && content.projects.length > 0 ? content.projects : defaultProjects;

  const projects = rawProjects.map((p: any, idx: number) => {
    // Normalise fields between admin format and frontend format
    const id = p.id || `project-${idx + 1}`;
    const title = p.title || p.name || `Project ${idx + 1}`;
    const badge = p.badge || `FEATURED PROJECT 0${idx + 1}`;
    const status = p.status || "Live Product";
    const tagline = p.tagline || "";
    const description = p.description || "";
    const image = p.image || "/images/scantaker-mockup.png";
    const liveUrl = p.liveUrl || "#";
    const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === "string" ? p.tags.split(",").map((s: string) => s.trim()) : []);
    
    // Results
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
        return <TrendingUp className="w-5 h-5 text-[#B8FF00]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#B8FF00]" />;
      case "shield-check":
        return <ShieldCheck className="w-5 h-5 text-[#B8FF00]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#B8FF00]" />;
      case "award":
        return <Award className="w-5 h-5 text-[#B8FF00]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#B8FF00]" />;
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#030604]" id="work">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,0,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(112,255,0,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B8FF00]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-[#B8FF00] tracking-widest uppercase">
                FEATURED WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Real Products.{" "}
              <span className="text-[#B8FF00] drop-shadow-[0_0_25px_rgba(184,255,0,0.4)]">
                Real Impact.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            A look at the digital products we&apos;ve engineered and are scaling in live production.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-16">
          {projects.map((proj: any) => (
            <div
              key={proj.id}
              className="relative rounded-3xl bg-[#080D0A]/90 border border-white/[0.08] hover:border-[#B8FF00]/40 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-6 sm:p-8 lg:p-12"
            >
              {/* Corner Ambient Arc */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(184,255,0,0.1)_0%,transparent_70%)] blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
                {/* Left: Project Details */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  {/* Top Badge & Status */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#B8FF00]">
                      {proj.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[11px] font-semibold text-[#B8FF00]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-ping" />
                      {proj.status}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/work/${proj.id}`} className="block group/title">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover/title:text-[#B8FF00] transition-colors">
                      {proj.title}
                    </h3>
                  </Link>

                  {/* Tagline */}
                  {proj.tagline && (
                    <p className="text-base sm:text-lg font-semibold text-zinc-200">
                      {proj.tagline}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Feature Tags Pills */}
                  {proj.tags && proj.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:border-[#B8FF00]/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedWalkthrough(proj)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all group cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>Watch 60s Live Walkthrough</span>
                    </button>

                    {proj.liveUrl && proj.liveUrl !== "#" && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#B8FF00]/50 transition-all backdrop-blur-md group"
                      >
                        <span>Visit Live Product</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}

                    <Link
                      href={`/work/${proj.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right: Mockup Image with Play Walkthrough Overlay */}
                <div className="lg:col-span-6 relative flex items-center justify-center">
                  <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(184,255,0,0.18)_0%,transparent_70%)] blur-2xl" />

                  <div
                    onClick={() => setSelectedWalkthrough(proj)}
                    className="relative z-10 w-full block group cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2 hover:border-[#B8FF00] transition-all duration-300"
                  >
                    <Image
                      src={proj.image}
                      alt={`${proj.title} Mockup`}
                      width={640}
                      height={440}
                      unoptimized
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Subtle Floating Video Demo Overlay Pill */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="px-4 py-2.5 rounded-full bg-black/85 border border-[#B8FF00]/60 backdrop-blur-xl flex items-center gap-2 text-xs font-bold text-[#B8FF00] shadow-[0_0_25px_rgba(184,255,0,0.35)] transform group-hover:scale-105 transition-transform">
                        <span className="w-6 h-6 rounded-full bg-[#B8FF00] text-black flex items-center justify-center">
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
                <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center gap-6 justify-between bg-black/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-12 lg:-mb-12 p-6 sm:px-10 rounded-b-3xl">
                  <div className="text-sm sm:text-base font-extrabold text-white tracking-wide shrink-0">
                    {proj.resultHeader}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto flex-1 md:justify-end">
                    {proj.results.map((res: any, rIdx: number) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        {getResultIcon(res.icon)}
                        <span className="text-xs sm:text-sm font-semibold text-zinc-200">
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
