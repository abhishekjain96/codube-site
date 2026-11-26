"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Volume2,
  VolumeX,
  TrendingUp,
} from "lucide-react";

interface WalkthroughModalProps {
  project: {
    id: string;
    title: string;
    tagline: string;
    image: string;
    liveUrl: string;
    results?: { label: string; icon?: string }[];
  } | null;
  onClose: () => void;
}

export default function WalkthroughModal({ project, onClose }: WalkthroughModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15);
  const [isMuted, setIsMuted] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  const isScantaker = project?.id === "scantaker";

  const walkthroughSteps = isScantaker
    ? [
        {
          timestamp: "0:05",
          title: "Step 1: Patient Search & Price Compare",
          desc: "Patients search MRI / CT scans across Jaipur diagnostic labs with real-time rate comparison.",
        },
        {
          timestamp: "0:25",
          title: "Step 2: Instant Slot Reservation",
          desc: "Select preferred time slot with zero waiting room queues and instant token generation.",
        },
        {
          timestamp: "0:45",
          title: "Step 3: WhatsApp Diagnostic Report Dispatch",
          desc: "Automated WhatsApp API delivers digital reports and directions straight to the patient's phone.",
        },
      ]
    : [
        {
          timestamp: "0:05",
          title: "Step 1: Doctor Certification Enrollment",
          desc: "Verified clinical modules in radiology, ultrasound & cardiology with CME accredited credits.",
        },
        {
          timestamp: "0:25",
          title: "Step 2: High-Definition Live Medical Webinars",
          desc: "Zero-latency video streaming supporting 5,000+ simultaneous physician attendances.",
        },
        {
          timestamp: "0:45",
          title: "Step 3: Automated Verified Certificate Issuance",
          desc: "Instant digital certificates generated upon course completion with QR verification.",
        },
      ];

  // Progress bar ticker simulation
  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveStep((s) => (s + 1) % walkthroughSteps.length);
            return 0;
          }
          if (prev === 33) setActiveStep(1);
          if (prev === 66) setActiveStep(2);
          return prev + 1;
        });
      }
    }, 450);

    return () => clearInterval(interval);
  }, [isPlaying, project, walkthroughSteps.length]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Outer Modal Chassis */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-950">{project.title}</h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                  LIVE PRODUCT DEMO
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate max-w-md">{project.tagline}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-950 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close walkthrough"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Simulation Screen */}
        <div className="relative bg-slate-950 aspect-video w-full overflow-hidden flex items-center justify-center group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="object-cover object-top opacity-90 filter contrast-105"
          />

          {/* Telemetry Tag in Top Left */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200 backdrop-blur-md text-[11px] font-mono text-slate-900 font-bold shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>RECORDED WALKTHROUGH • JAIPUR PRODUCTION DEPLOYMENT</span>
          </div>

          {/* Sound toggle button */}
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/90 border border-slate-200 text-slate-800 hover:bg-white cursor-pointer shadow-sm"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>

          {/* Active Step Caption Overlay */}
          <div className="absolute bottom-16 inset-x-4 sm:inset-x-8 z-20 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-xl text-left flex items-start justify-between gap-4 shadow-lg">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 tracking-wider uppercase">
                {walkthroughSteps[activeStep]?.timestamp} // {walkthroughSteps[activeStep]?.title}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-semibold">
                {walkthroughSteps[activeStep]?.desc}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold shrink-0">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>70% FASTER BOOKING</span>
            </div>
          </div>

          {/* Play/Pause Center Controller on hover */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>

          {/* Video Scrub Bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-emerald-400 p-1"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Scrubber Line */}
            <div className="flex-1 h-1.5 rounded-full bg-white/30 overflow-hidden relative">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-[11px] font-mono text-slate-200">
              0:{progress < 10 ? `0${progress}` : Math.min(progress, 59)} / 1:00
            </span>

            <button
              type="button"
              onClick={() => {
                setProgress(0);
                setActiveStep(0);
                setIsPlaying(true);
              }}
              className="text-slate-300 hover:text-white p-1"
              title="Replay from start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer Bar with Action CTA */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Built &amp; Maintained by Abhishek Jain (1st Rank Hackathon Winner)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-all text-center"
              >
                Open Live Web App
              </a>
            )}

            <a
              href={`https://wa.me/919672660338?text=${encodeURIComponent(
                `Hi Abhishek, I watched the walkthrough for ${project.title} and want to build a similar software system for my business.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all"
            >
              <span>Build A System Like This →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
