"use client";

import React from "react";
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
  CheckCircle2,
} from "lucide-react";

interface FounderSectionProps {
  content?: any;
}

export default function FounderSection({ content }: FounderSectionProps) {
  const founder = content?.founder || {
    name: "Abhishek Jain",
    role: "Founder & Lead Software Architect",
    badge: "1st Rank Holder — High-Competition Coding Hackathons",
    headline: "Engineering High-Impact Products With Competitive Precision",
    bio: "I am Abhishek Jain, founder of Codube and a software developer. 1st rank holder in highly competitive coding hackathons. I build modern, high-performance digital products that don't just look visually breathtaking, but create real business impact, scale smoothly, and convert visitors into loyal customers.",
    photo: "/images/founder-avatar.png",
    quote:
      "In competitive hackathons, you learn that speed and precision can never be compromised. At Codube, we bring that exact championship-level rigor to every client product we engineer.",
    achievements: [
      {
        icon: Trophy,
        title: "1st Rank Winner",
        desc: "High-Competition Coding Hackathons",
      },
      {
        icon: Code2,
        title: "Full-Stack Architect",
        desc: "Next.js, Cloud & Distributed Systems",
      },
      {
        icon: Zap,
        title: "10+ Live Systems",
        desc: "Production-tested & Scalable",
      },
      {
        icon: Award,
        title: "100% Commitment",
        desc: "Clean Code & Zero Tech Debt",
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Abhishek! I saw your work on Codube and would like to discuss a software project with you.`
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#070b08]" id="founder">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(187,251,38,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Photo in Clean Modern Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative rounded-3xl p-6 sm:p-8 glass-panel-glow border-[#bbfb26]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-center space-y-6 group hover:border-[#bbfb26] transition-all duration-300">
              {/* Orbital aura ring behind avatar */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(187,251,38,0.25)_0%,transparent_70%)] blur-2xl" />

              {/* Profile Photo Container */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#bbfb26]/50 shadow-[0_0_30px_rgba(187,251,38,0.35)] bg-black/60 group-hover:border-[#bbfb26] transition-colors">
                <Image
                  src={founder.photo || "/images/founder-avatar.png"}
                  alt={founder.name}
                  width={320}
                  height={320}
                  unoptimized
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Corner Hackathon Trophy Badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#bbfb26]/60 text-[10px] font-bold text-[#bbfb26] flex items-center gap-1 shadow-lg">
                  <Trophy className="w-3 h-3 text-[#bbfb26]" />
                  <span>#1 Rank</span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#bbfb26]">
                  {founder.role}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-zinc-300 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active • Taking New Projects</span>
                </div>
              </div>

              {/* Social Connect Buttons */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919672660338?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="neon-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-black"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Abhishek</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#bbfb26] hover:border-[#bbfb26]/50 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story, Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#bbfb26]/30 backdrop-blur-md shadow-[0_0_15px_rgba(187,251,38,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#bbfb26]" />
              <span className="text-xs font-bold text-zinc-200 tracking-wide">
                {founder.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Engineering High-Impact Products With{" "}
              <span className="text-[#bbfb26] italic drop-shadow-[0_0_20px_rgba(187,251,38,0.4)]">
                Competitive Precision.
              </span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {founder.bio}
            </p>

            {/* 4 Credibility Metric Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl glass-panel border-white/10 hover:border-[#bbfb26]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 flex items-center justify-center text-[#bbfb26] shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">1st Rank Winner</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">High-Competition Coding Hackathons</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/10 hover:border-[#bbfb26]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 flex items-center justify-center text-[#bbfb26] shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack Architect</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Next.js, Distributed Cloud &amp; AI</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/10 hover:border-[#bbfb26]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 flex items-center justify-center text-[#bbfb26] shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">10+ Live Systems</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Proven in real-world healthcare &amp; SaaS</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/10 hover:border-[#bbfb26]/40 transition-colors flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 flex items-center justify-center text-[#bbfb26] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Commitment</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Clean code, SLA support &amp; 99% on-time</p>
                </div>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] border-l-4 border-l-[#bbfb26] mt-4">
              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                &ldquo;{founder.quote}&rdquo;
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="neon-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-black group"
              >
                <span>Discuss Your Project With Abhishek</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
