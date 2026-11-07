import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import TiltCard3D from "@/components/TiltCard3D";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "ScanTaker Case Study — Diagnostic Booking Platform | Codube",
  description:
    "How Codube engineered ScanTaker, a complete MRI & CT scan diagnostic booking platform for healthcare patients and imaging centers in Jaipur.",
};

export default function ScanTakerDetailPage() {
  const content = getSiteContent();

  const features = [
    {
      title: "Patient Booking Portal",
      desc: "Fast, transparent booking flow allowing patients to compare MRI & CT scan prices across trusted diagnostic centers and confirm appointments in under 60 seconds.",
    },
    {
      title: "Multi-Center Admin Suite",
      desc: "Dedicated dashboard for diagnostic centers to manage slot capacities, doctor availability, appointment queues, and walk-ins.",
    },
    {
      title: "Real-time Slot Locking",
      desc: "High-concurrency database transactions preventing double-booking of high-value scanner equipment.",
    },
    {
      title: "Automated WhatsApp Alerts",
      desc: "Instant pre-scan preparation guidelines (fasting, contrast dye instructions) and direct digital report delivery via WhatsApp.",
    },
    {
      title: "Secure Radiologist Portal",
      desc: "HIPAA-aligned encrypted cloud storage for DICOM files, MRI films, and diagnostic reports accessible securely by referring physicians.",
    },
    {
      title: "Billing & Commission Engine",
      desc: "Automated reconciliation between diagnostic centers, referral doctors, and payment gateways with instant GST receipts.",
    },
  ];

  const techStack = [
    "Next.js 14 (App Router)",
    "React 18 & TypeScript",
    "Tailwind CSS & Framer Motion",
    "Node.js Backend Microservices",
    "PostgreSQL Relational DB",
    "AWS S3 & CloudFront CDN",
    "WhatsApp Cloud API",
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-[#bbfb26] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-wider text-[#bbfb26]">
                FEATURED CASE STUDY 01
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#bbfb26]/10 border border-[#bbfb26]/30 text-[11px] font-semibold text-[#bbfb26]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bbfb26] animate-ping" />
                Live in Production
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ScanTaker
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-zinc-200">
              A complete diagnostic booking platform for MRI &amp; CT scans in Jaipur.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              A real-world healthcare platform that simplifies MRI and CT scan booking, center management, and appointment operations across diagnostic networks.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://scantaker.com"
                target="_blank"
                rel="noreferrer"
                className="neon-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black group"
              >
                <span>Visit Live Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact?project=ScanTaker"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Build Similar Platform</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Image in 3D Card */}
          <div className="lg:col-span-5">
            <TiltCard3D intensity={15}>
              <div className="relative rounded-3xl p-3 bg-black/60 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                <Image
                  src="/images/scantaker-mockup.png"
                  alt="ScanTaker Hero Mockup"
                  width={640}
                  height={440}
                  priority
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </TiltCard3D>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="rounded-2xl glass-panel-glow border-[#bbfb26]/30 p-6 sm:p-8 mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center sm:text-left">
            <div className="sm:px-6 first:pl-0 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#bbfb26] mb-1">
                70% Faster
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Booking Flow
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                From 25 minutes on phone to under 60 seconds online
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#bbfb26] mb-1">
                12+ Centers
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Onboarded in Jaipur
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Managing live MRI &amp; CT scanner slot queues
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#bbfb26] mb-1">
                4.9 / 5.0
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Patient Satisfaction
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Verified reviews with automated WhatsApp reminders
              </div>
            </div>
          </div>
        </div>

        {/* The Challenge & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel rounded-3xl p-8 border-white/10 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
              THE CHALLENGE
            </span>
            <h3 className="text-2xl font-black text-white">
              Manual Booking Bottlenecks &amp; Equipment Downtime
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Diagnostic centers in Jaipur faced severe revenue leakage due to uncoordinated telephone inquiries, opaque pricing, and high patient no-show rates. Patients had no unified way to compare certified 1.5T/3T MRI machines, scan fees, and urgent slot openings.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-400">
              <li>• Up to 40% patient inquiry drop-off over telephone queues</li>
              <li>• Double-booking of ₹2.5 Cr+ diagnostic imaging scanners</li>
              <li>• Patients traveling without proper preparation (fasting/serum creatinine)</li>
            </ul>
          </div>

          <div className="glass-panel-glow rounded-3xl p-8 border-[#bbfb26]/40 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#bbfb26]">
              THE CODUBE SOLUTION
            </span>
            <h3 className="text-2xl font-black text-white">
              High-Throughput Multi-Tenant Healthcare Architecture
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Codube engineered an end-to-end digital ecosystem connecting patients directly with diagnostic centers. The platform features sub-second center discovery, dynamic pricing grids, real-time slot synchronization, and automated WhatsApp alert dispatch.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-300">
              <li>✓ Instant center price comparison and live calendar slot locking</li>
              <li>✓ Automated SMS &amp; WhatsApp pre-scan instructions</li>
              <li>✓ Encrypted radiologist report upload and doctor sharing</li>
            </ul>
          </div>
        </div>

        {/* Features Breakdown */}
        <div className="space-y-8 mb-16">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#bbfb26]">
              CORE ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              System Features &amp; Modules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="glass-panel rounded-2xl p-6 border-white/10 hover:border-[#bbfb26]/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#bbfb26]/10 border border-[#bbfb26]/30 flex items-center justify-center text-[#bbfb26]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="glass-panel rounded-3xl p-8 border-white/10 space-y-6 mb-16">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider text-[#bbfb26]">
            Technologies &amp; Infrastructure
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Quote */}
        <div className="p-8 rounded-3xl bg-black/40 border border-[#bbfb26]/30 border-l-8 border-l-[#bbfb26] space-y-4 mb-16">
          <p className="text-base sm:text-lg text-zinc-200 italic leading-relaxed">
            &ldquo;Codube completely transformed our diagnostic booking system. Turnaround time dropped by 70%, and our Jaipur MRI &amp; CT scan centers are running at peak appointment efficiency. Abhishek Jain and his team are true craftsmen.&rdquo;
          </p>
          <div className="text-xs font-bold text-[#bbfb26]">
            — Dr. Vikram Singhania, Director, ScanTaker Network
          </div>
        </div>

        <CtaBanner content={content} />
      </div>
    </div>
  );
}
