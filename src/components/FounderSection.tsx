"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Code2,
  Zap,
  Award,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Linkedin,
  Instagram,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface FounderSectionProps {
  content?: any;
}

export default function FounderSection({ content: initialContent }: FounderSectionProps) {
  const [content, setContent] = useState<any>(initialContent);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          setContent(data.content);
        }
      })
      .catch(() => {});
  }, [initialContent]);

  const founder = content?.founder || {};
  const name = founder.name || "Abhishek Jain";
  const role = founder.role || "Founder & Lead Software Architect";
  const badge =
    founder.badge || "1st Rank Holder — High-Competition Coding Hackathons";
  const headline =
    founder.headline || "Engineering High-Impact Products With Competitive Precision";
  const bio =
    founder.bio ||
    "I am Abhishek Jain, founder of Codube and a software developer. 1st rank holder in highly competitive coding hackathons. I build modern, high-performance digital products that don't just look visually breathtaking, but create real business impact, scale smoothly, and convert visitors into loyal customers.";
  const quote =
    founder.quote ||
    "In competitive hackathons, you learn that speed and precision can never be compromised. At Codube, we bring that exact championship-level rigor to every client product we engineer.";

  const photo =
    founder.photo ||
    founder.image ||
    "/uploads/1794310118913_founder_photo_aj.png" ||
    "/images/abhishek-photo.png";

  const linkedinUrl =
    founder?.socials?.linkedin ||
    content?.general?.linkedin ||
    "https://www.linkedin.com/in/abhishek-jain96/";

  const instagramUrl =
    founder?.socials?.instagram ||
    content?.general?.instagram ||
    "https://www.instagram.com/codube.ai/";

  const whatsappMessage = encodeURIComponent(
    `Hello Abhishek! I saw your profile on Codube and would like to discuss building a project with you.`
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50" id="founder">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              FOUNDER SPOTLIGHT &amp; ARCHITECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Meet The Architect Behind{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              CODUBE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Led by a national coding hackathon champion — building production software with championship-level speed, zero bloat, and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: LARGE CINEMATIC FOUNDER PORTRAIT */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 shadow-xl">
                <div className="relative rounded-[30px] overflow-hidden bg-white border border-slate-200 p-3 sm:p-4 space-y-4">
                  {/* Top HUD Strip */}
                  <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono border-b border-slate-100">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
                      <span>FOUNDER SPOTLIGHT</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>VERIFIED ARCHITECT</span>
                    </div>
                  </div>

                  {/* PROMINENT FOUNDER IMAGE */}
                  <div className="relative w-full h-[440px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                    {/* Top Floating Trophy Badge */}
                    <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-md">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>1st Rank Hackathon Winner</span>
                    </div>

                    <Image
                      src={photo}
                      alt={name}
                      fill
                      unoptimized
                      priority
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Bottom Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                    {/* Identity Plaque */}
                    <div className="absolute bottom-0 inset-x-0 p-5 z-20 space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                          {name}
                        </h3>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wide">
                        {role}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[11px] text-white backdrop-blur-md mt-1 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active • Accepting High-Impact Projects</span>
                      </div>
                    </div>
                  </div>

                  {/* ACTION & SOCIAL HUB */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <a
                      href={`https://wa.me/919672660338?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Chat with Abhishek</span>
                    </a>

                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shrink-0"
                      title="LinkedIn: Abhishek Jain"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all shrink-0"
                      title="Instagram: @codube.ai"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FOUNDER STORY & CREDENTIALS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-mono font-bold text-slate-800 tracking-wide">
                {badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Engineering High-Impact Products With{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Championship Precision.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {bio}
            </p>

            {/* 4 Credibility Metric Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">1st Rank Winner</h4>
                  <p className="text-xs text-slate-500 mt-0.5">High-Competition Coding Hackathons</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Full-Stack Architect</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Next.js 14, Distributed Cloud &amp; AI</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">10+ Live Systems</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Proven in real-world healthcare &amp; SaaS</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Commitment</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Direct Founder Accountability &amp; Zero Bloat</p>
                </div>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 border-l-4 border-l-emerald-500 shadow-2xs mt-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-700 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>CHAMPIONSHIP RIGOR // PHILOSOPHY</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-slate-950 text-white hover:bg-emerald-600 shadow-sm transition-all group"
              >
                <span>Discuss Your Project With Abhishek</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={`https://wa.me/919672660338?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp (+91 96726 60338)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
