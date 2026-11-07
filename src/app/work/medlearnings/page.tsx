import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Video,
  FileCheck,
  Stethoscope,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import TiltCard3D from "@/components/TiltCard3D";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const metadata: Metadata = {
  title: "MedLearnings Case Study — Medical Education LMS Platform | Codube",
  description:
    "How Codube engineered MedLearnings, an advanced medical imaging LMS platform providing online clinical training, hands-on workshops, and certified webinars for healthcare professionals.",
};

export default function MedLearningsDetailPage() {
  const content = getSiteContent();

  const features = [
    {
      title: "Clinical Video LMS",
      desc: "Ultra-low-latency video streaming supporting high-bitrate diagnostic ultrasound and MRI imaging footage with variable speed playback and chapter bookmarks.",
    },
    {
      title: "Interactive Live Webinars",
      desc: "Integrated WebRTC & live chat enabling senior radiologists to host live interventional masterclasses with instant Q&A and screen-sharing.",
    },
    {
      title: "Automated CPD Certificates",
      desc: "Dynamic PDF certificate generation with unique cryptographically signed QR codes verifiable instantly by medical councils and hospitals.",
    },
    {
      title: "Diagnostic Quizzes & Assessments",
      desc: "Interactive case study quizzes where doctors diagnose sample scans before receiving feedback from course instructors.",
    },
    {
      title: "Multi-Tier Subscription & Enrollment",
      desc: "Automated payment gateways with EMI options, institutional discounts, and group licensing for diagnostic hospital networks.",
    },
    {
      title: "Mobile First Learning Experience",
      desc: "Optimized mobile web app allowing doctors to complete CME hours on-the-go between hospital patient shifts.",
    },
  ];

  const techStack = [
    "Next.js 14",
    "React 18 & TypeScript",
    "Tailwind CSS & Framer Motion",
    "Cloudflare Stream Video CDN",
    "Node.js Backend",
    "MongoDB High-Volume DB",
    "AWS SES & Certificate Engine",
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
                FEATURED CASE STUDY 02
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#bbfb26]/10 border border-[#bbfb26]/30 text-[11px] font-semibold text-[#bbfb26]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bbfb26] animate-ping" />
                Live in Production
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              MedLearnings
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-zinc-200">
              A specialized medical education platform for healthcare professionals.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Learn, train, and upskill with expert-led clinical courses, live webinars, and hands-on workshops in medical imaging, sonography, and patient care.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://medlearnings.com"
                target="_blank"
                rel="noreferrer"
                className="neon-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black group"
              >
                <span>Visit Live Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact?project=MedLearnings"
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
                  src="/images/medlearnings-mockup.png"
                  alt="MedLearnings Hero Mockup"
                  width={640}
                  height={530}
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
                5,000+ Doctors
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Enrolled Healthcare Professionals
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Active clinical learners across India and abroad
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#bbfb26] mb-1">
                98% Completion
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Webinar Attendance Rate
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                High-engagement live streaming &amp; chat architecture
              </div>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#bbfb26] mb-1">
                100% Automated
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Verifiable CPD Certificates
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Instant QR-code verification on completion
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
              Medical Video Latency &amp; Disorganized Course Delivery
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Medical training demands crystal-clear video quality to evaluate intricate ultrasound motion loops and MRI tissue differentiation. Off-the-shelf LMS platforms buffered constantly, lacked live surgical streaming, and required laborious manual generation of medical credit certificates.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-400">
              <li>• Generic LMS platforms couldn&apos;t support high-frame-rate medical video loops</li>
              <li>• Manual issuance of thousands of certificates caused weeks of administrative backlog</li>
              <li>• Low mobile engagement from busy practicing doctors</li>
            </ul>
          </div>

          <div className="glass-panel-glow rounded-3xl p-8 border-[#bbfb26]/40 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#bbfb26]">
              THE CODUBE SOLUTION
            </span>
            <h3 className="text-2xl font-black text-white">
              Bespoke Healthcare Video Streaming &amp; Assessment Engine
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Codube engineered a customized medical streaming platform integrated with Cloudflare Stream and global edge CDN nodes. Doctors can stream 4K ultrasound loops smoothly even on 4G mobile connections, complete interactive case quizzes, and receive verified CPD certificates automatically.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-zinc-300">
              <li>✓ Adaptive bitrate video streaming without quality loss</li>
              <li>✓ Instant automated certificate generation with tamper-proof QR codes</li>
              <li>✓ Real-time attendance logging and CME credit verification</li>
            </ul>
          </div>
        </div>

        {/* Features Breakdown */}
        <div className="space-y-8 mb-16">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#bbfb26]">
              PLATFORM CAPABILITIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Engineered For Modern Medical Education
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
            &ldquo;Abhishek Jain and the Codube team engineered an LMS that handles 5,000+ healthcare professionals streaming high-definition medical webinars without a single glitch. Fast, secure, and world-class.&rdquo;
          </p>
          <div className="text-xs font-bold text-[#bbfb26]">
            — Dr. Ananya Deshmukh, Dean of Clinical Education, MedLearnings
          </div>
        </div>

        <CtaBanner content={content} />
      </div>
    </div>
  );
}
