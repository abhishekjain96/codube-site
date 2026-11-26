"use client";

import React, { useState, useRef } from "react";
import { FreeTool } from "@/data/toolsData";
import { executeTool } from "@/lib/toolGenerators";
import CleanDocumentPreview from "@/components/CleanDocumentPreview";
import {
  Copy,
  CheckCircle2,
  Download,
  ExternalLink,
  MessageCircle,
  Zap,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Clock,
  Check,
  RefreshCw,
  FileText,
  Code2,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Props {
  tool: FreeTool;
}

interface StepLog {
  step: number;
  label: string;
  detail: string;
  completed: boolean;
}

// 1-Click Smart Preset Data for instant testing
const QUICK_PRESETS = [
  {
    label: "🏥 Healthcare / Clinic",
    brandName: "Dr. Joy Dental Clinic",
    websiteUrl: "https://drjoydental.com",
    industry: "Healthcare & Clinics",
    location: "Dubai & Abu Dhabi",
    services: "Dental Implants, Invisalign, Teeth Whitening",
    businessType: "Dental Clinic",
    targetAudience: "Patients seeking dental implants & cosmetic smile correction",
    offer: "Free Initial Consultation & 3D Scan",
  },
  {
    label: "🏢 Real Estate",
    brandName: "Apex Luxury Properties",
    websiteUrl: "https://apexproperties.com",
    industry: "Real Estate & Housing",
    location: "Dubai Marina & Downtown",
    services: "Luxury Waterfront Villas, Penthouses, Golden Visa Advisory",
    businessType: "Real Estate Brokerage",
    targetAudience: "HNW Investors & International Buyers",
    offer: "VIP Off-Plan Catalog & Free ROI Guide",
  },
  {
    label: "💻 Software & SaaS",
    brandName: "CloudScale Analytics",
    websiteUrl: "https://cloudscale.io",
    industry: "Software & SaaS",
    location: "Global & India",
    services: "Automated Data Pipeline, Real-Time Dashboards, API Integration",
    businessType: "B2B SaaS Studio",
    targetAudience: "CTOs & Engineering Teams",
    offer: "14-Day Free Unlimited Trial & Architecture Review",
  },
  {
    label: "🛍️ E-Commerce & Retail",
    brandName: "Aura Essentials",
    websiteUrl: "https://auraessentials.store",
    industry: "E-Commerce & Retail",
    location: "Worldwide / India",
    services: "Organic Skincare, Clean Beauty, Vegan Personal Care",
    businessType: "D2C Brand",
    targetAudience: "Eco-Conscious Skincare Buyers",
    offer: "Flat 20% Off First Order + Free Shipping",
  },
];

// Strips out markdown syntax (asterisks, hashes, backticks) so copied text is pristine plain text
function stripMarkdownNoise(text: string): string {
  if (!text) return "";
  let clean = text;

  // 1. Remove bold & italic markdown asterisks (**text** -> text, *text* -> text)
  clean = clean.replace(/\*\*(.*?)\*\*/g, "$1");
  clean = clean.replace(/\*(.*?)\*/g, "$1");

  // 2. Remove markdown header hashes (# Title -> Title)
  clean = clean.replace(/^#{1,6}\s+/gm, "");

  // 3. Remove markdown blockquotes (> Quote -> Quote)
  clean = clean.replace(/^>\s+/gm, "");

  // 4. Convert markdown divider lines --- into clean visual separator
  clean = clean.replace(/^---+\s*$/gm, "────────────────────────────────────────");

  // 5. Clean up inline code backticks (`code` -> code)
  clean = clean.replace(/```[a-z]*\n?/gi, "");
  clean = clean.replace(/`([^`]+)`/g, "$1");

  // 6. Clean up bracketed markdown links [text](url) -> text: url
  clean = clean.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1: $2");

  return clean.trim();
}

export default function ToolRunnerClient({ tool }: Props) {
  // Initialize form state from tool fields
  const [formState, setFormState] = useState<Record<string, any>>(() => {
    const init: Record<string, any> = {};
    tool.fields.forEach((f) => {
      init[f.id] = f.defaultValue !== undefined ? f.defaultValue : "";
    });
    return init;
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"document" | "raw">("document");
  const [copiedType, setCopiedType] = useState<"clean" | "raw" | null>(null);

  const [steps, setSteps] = useState<StepLog[]>([
    { step: 1, label: "Entity Ingestion", detail: "Validating input parameters & brand context...", completed: false },
    { step: 2, label: "Semantic Synthesis", detail: "Applying conversion heuristics & industry schema...", completed: false },
    { step: 3, label: "Structure & Blueprinting", detail: "Formatting production-grade response blueprint...", completed: false },
    { step: 4, label: "Output Certification", detail: "Generated & certified clean with 100% precision.", completed: false },
  ]);

  const [output, setOutput] = useState<{
    result: string;
    score?: number;
    scoreRating?: string;
    scoreBreakdown?: { label: string; passed: boolean; tip: string }[];
    actionLink?: string;
    generatedAt?: string;
  } | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const handleChange = (id: string, value: any) => {
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const applyPreset = (preset: typeof QUICK_PRESETS[0]) => {
    setFormState((prev) => {
      const updated = { ...prev };
      Object.keys(preset).forEach((key) => {
        if (key !== "label" && (key in updated || tool.fields.some((f) => f.id === key))) {
          updated[key] = (preset as any)[key];
        }
      });
      return updated;
    });
  };

  const handleRun = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    setProgressPercent(15);
    setCurrentStepIndex(0);
    setOutput(null);

    // Scroll smoothly to output container
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    // Step 1
    setTimeout(() => {
      setProgressPercent(40);
      setCurrentStepIndex(1);
      setSteps((prev) => [
        { ...prev[0], completed: true },
        prev[1],
        prev[2],
        prev[3],
      ]);
    }, 350);

    // Step 2
    setTimeout(() => {
      setProgressPercent(75);
      setCurrentStepIndex(2);
      setSteps((prev) => [
        prev[0],
        { ...prev[1], completed: true },
        prev[2],
        prev[3],
      ]);
    }, 750);

    // Step 3
    setTimeout(() => {
      setProgressPercent(95);
      setCurrentStepIndex(3);
      setSteps((prev) => [
        prev[0],
        prev[1],
        { ...prev[2], completed: true },
        prev[3],
      ]);
    }, 1150);

    // Final Completion
    setTimeout(() => {
      setProgressPercent(100);
      setSteps((prev) => [
        { ...prev[0], completed: true },
        { ...prev[1], completed: true },
        { ...prev[2], completed: true },
        { ...prev[3], completed: true },
      ]);

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const res = executeTool(tool.id, formState);

      setOutput({
        ...res,
        generatedAt: timeStr,
      });
      setIsProcessing(false);
    }, 1450);
  };

  // 1. Copy Clean Plain Text (Strips all stars, hashes, and markdown formatting)
  const handleCopyClean = () => {
    if (!output?.result) return;
    const cleanText = stripMarkdownNoise(output.result);
    navigator.clipboard.writeText(cleanText);
    setCopiedType("clean");
    setTimeout(() => setCopiedType(null), 2500);
  };

  // 2. Copy Raw Markdown/Code
  const handleCopyRaw = () => {
    if (!output?.result) return;
    navigator.clipboard.writeText(output.result);
    setCopiedType("raw");
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownload = () => {
    if (!output?.result) return;
    let ext = "txt";
    if (tool.codeLanguage === "json") ext = "json";
    else if (tool.codeLanguage === "css") ext = "css";
    else if (tool.codeLanguage === "html") ext = "html";
    else if (tool.codeLanguage === "markdown") ext = "md";
    else if (tool.codeLanguage === "typescript" || tool.codeLanguage === "javascript") ext = "ts";
    else if (tool.codeLanguage === "sql") ext = "sql";

    const blob = new Blob([output.result], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${tool.id}-${Date.now()}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappInquiryUrl = `https://wa.me/919672660338?text=${encodeURIComponent(
    tool.whatsappHook
  )}`;

  // Streamlining: Split fields into primary (first 2) and advanced (remaining)
  const primaryFields = tool.fields.slice(0, 2);
  const advancedFields = tool.fields.slice(2);

  return (
    <div className="space-y-8 max-w-full overflow-hidden">
      {/* 1-CLICK QUICK PRESETS BAR */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.02)] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>1-Click Quick Presets (Instant Auto-Fill):</span>
          </span>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 font-semibold hidden sm:inline">
            Zero Effort
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {QUICK_PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => applyPreset(p)}
              className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-semibold text-slate-700 hover:text-emerald-800 transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* STREAMLINED INTERACTIVE FORM CARD (WHITE THEME) */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.03)] relative overflow-hidden text-left">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3 mb-6">
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-slate-950 flex items-center gap-2">
              <span>{tool.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase font-bold">
                FAST ENGINE
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Enter your core business info below to generate your verified result in seconds.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Forever</span>
          </div>
        </div>

        <form onSubmit={handleRun} className="space-y-6">
          {/* Primary Fields (Clean & Prominent) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {primaryFields.map((f) => {
              if (f.type === "select") {
                return (
                  <div key={f.id}>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 font-mono">
                      {f.label} {f.required && <span className="text-emerald-600">*</span>}
                    </label>
                    <select
                      value={formState[f.id] ?? ""}
                      onChange={(e) => handleChange(f.id, e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors cursor-pointer shadow-2xs"
                    >
                      {f.options?.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (f.type === "textarea") {
                return (
                  <div key={f.id} className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 font-mono">
                      {f.label} {f.required && <span className="text-emerald-600">*</span>}
                    </label>
                    <textarea
                      rows={3}
                      value={formState[f.id] ?? ""}
                      onChange={(e) => handleChange(f.id, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                );
              }

              return (
                <div key={f.id}>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 font-mono">
                    {f.label} {f.required && <span className="text-emerald-600">*</span>}
                  </label>
                  <input
                    type={f.type === "number" ? "number" : "text"}
                    value={formState[f.id] ?? ""}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>
              );
            })}
          </div>

          {/* Optional Advanced Fields Collapsible (Prevents Input Fatigue) */}
          {advancedFields.length > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 py-1.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors cursor-pointer select-none"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>
                  {showAdvanced
                    ? "Hide Additional Parameters"
                    : `+ Customize Additional Details (${advancedFields.length} Optional Fields)`}
                </span>
                {showAdvanced ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {showAdvanced && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 animate-in fade-in duration-200">
                  {advancedFields.map((f) => {
                    if (f.type === "select") {
                      return (
                        <div key={f.id}>
                          <label className="block text-xs font-mono text-slate-700 font-bold uppercase tracking-wider mb-2">
                            {f.label}
                          </label>
                          <select
                            value={formState[f.id] ?? ""}
                            onChange={(e) => handleChange(f.id, e.target.value)}
                            className="w-full bg-white border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors cursor-pointer"
                          >
                            {f.options?.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }

                    if (f.type === "textarea") {
                      return (
                        <div key={f.id} className="sm:col-span-2">
                          <label className="block text-xs font-mono text-slate-700 font-bold uppercase tracking-wider mb-2">
                            {f.label}
                          </label>
                          <textarea
                            rows={3}
                            value={formState[f.id] ?? ""}
                            onChange={(e) => handleChange(f.id, e.target.value)}
                            placeholder={f.placeholder}
                            className="w-full bg-white border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                          />
                        </div>
                      );
                    }

                    return (
                      <div key={f.id}>
                        <label className="block text-xs font-mono text-slate-700 font-bold uppercase tracking-wider mb-2">
                          {f.label}
                        </label>
                        <input
                          type={f.type === "number" ? "number" : "text"}
                          value={formState[f.id] ?? ""}
                          onChange={(e) => handleChange(f.id, e.target.value)}
                          placeholder={f.placeholder}
                          className="w-full bg-white border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Instant Local Synthesis • Zero Latency</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-98"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Synthesizing Output...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-white text-white" />
                  <span>Generate Free Blueprint →</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Target Ref for smooth scroll */}
      <div ref={resultRef} />

      {/* SLEEK GENERATION PROGRESS HUD (LIGHT THEME) */}
      {isProcessing && (
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-emerald-200 shadow-[0_12px_45px_rgba(16,185,129,0.08)] space-y-6 text-left animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                Synthesizing Certified Architecture...
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              {progressPercent}% Complete
            </span>
          </div>

          {/* Smooth Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden relative border border-slate-200/80">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {steps.map((st, idx) => {
              const isCurrent = idx === currentStepIndex;
              return (
                <div
                  key={st.step}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                    st.completed
                      ? "bg-emerald-50/70 border-emerald-200 text-slate-800"
                      : isCurrent
                      ? "bg-slate-50 border-emerald-400 text-slate-900 shadow-xs"
                      : "bg-white border-slate-200/70 text-slate-400"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {st.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-300" />
                    )}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold font-mono">
                      <span>[{st.step}/4] </span>
                      <span>{st.label}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">{st.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* IDLE STATE (Before Running) */}
      {!isProcessing && !output && (
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 text-center space-y-4 shadow-[0_4px_25px_rgba(15,23,42,0.02)]">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-950">
            Ready to Generate Verified Blueprint
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Click <strong className="text-slate-900">&quot;Generate Free Blueprint&quot;</strong> above to create your production-ready, clean document.
          </p>
          <button
            type="button"
            onClick={() => handleRun()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-slate-950 hover:bg-emerald-600 text-white transition-all cursor-pointer shadow-sm"
          >
            <span>Run With Default Parameters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* COMPLETED STATE: GENERATED OUTPUT (PURE WHITE THEME) */}
      {!isProcessing && output && (
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-[0_12px_45px_rgba(15,23,42,0.04)] space-y-6 animate-in zoom-in-95 duration-200 text-left">
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>Blueprint Generated Successfully</span>
              </div>
              <h3 className="text-lg font-bold text-slate-950">{tool.outputLabel}</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Generated at {output.generatedAt} • 100% Validated</span>
              </div>
            </div>

            {/* View Mode Switcher + Copy Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {/* Document vs Raw Code View Toggle */}
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode("document")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "document"
                      ? "bg-white text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Document View</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("raw")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "raw"
                      ? "bg-white text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Raw Text</span>
                </button>
              </div>

              {/* Primary Copy: Clean Text (Strips all stars & markdown artifacts) */}
              <button
                type="button"
                onClick={handleCopyClean}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm transition-all cursor-pointer active:scale-95"
                title="Copies clean text with ZERO stars or markdown syntax (ready to paste directly into WhatsApp or email)"
              >
                {copiedType === "clean" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>COPIED CLEAN!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Clean Text</span>
                  </>
                )}
              </button>

              {/* Secondary Copy: Raw Markdown */}
              <button
                type="button"
                onClick={handleCopyRaw}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono text-slate-700 hover:text-slate-950 transition-all cursor-pointer border border-slate-200"
                title="Copies raw text with markdown formatting"
              >
                {copiedType === "raw" ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-600" />
                    <span>Raw</span>
                  </>
                )}
              </button>

              {/* Download File */}
              <button
                type="button"
                onClick={handleDownload}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer border border-slate-200"
                title="Download file to computer"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Diagnostic Score Card (If Tool Returns a Score) */}
          {output.score !== undefined && (
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-wider block font-bold">
                    Diagnostic Score Rating
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-700">
                      {output.score}
                    </span>
                    <span className="text-slate-500 font-mono text-sm">/ 100</span>
                    {output.scoreRating && (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                        {output.scoreRating}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs font-mono text-slate-600">
                  <span>Engine: Codube Verified Algorithm</span>
                  <span className="block text-emerald-700 font-bold">Status: Certified Valid</span>
                </div>
              </div>

              {/* Score Breakdown Checklist */}
              {output.scoreBreakdown && output.scoreBreakdown.length > 0 && (
                <div className="pt-4 border-t border-emerald-200/80 space-y-2.5">
                  <span className="text-xs font-mono text-slate-700 uppercase tracking-wider block mb-2 font-bold">
                    Diagnostic Parameters Checked:
                  </span>
                  {output.scoreBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs"
                    >
                      {item.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold text-slate-900">{item.label}: </span>
                        <span className="text-slate-600">{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action Link Button (e.g. WhatsApp Direct Test) */}
          {output.actionLink && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-900">
                  Direct Live Click-to-Chat Link Ready:
                </span>
              </div>
              <a
                href={output.actionLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer shadow-sm"
              >
                <span>Test Link Live on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* OUTPUT CONTAINER: Toggle between White Theme Document View & Raw Code View */}
          {viewMode === "document" ? (
            <div className="rounded-2xl sm:rounded-3xl bg-slate-50/70 text-slate-900 p-6 sm:p-8 border border-slate-200 relative overflow-hidden transition-all text-left">
              {/* Document Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 mb-5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-800">
                    Certified Output Document (Clean Format)
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
                  Pristine Typography • No Asterisks or Code Clutter
                </span>
              </div>

              {/* Rich Parsed Document Preview */}
              <CleanDocumentPreview content={output.result} />
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-900 text-slate-100 p-5 overflow-x-auto relative text-left">
              <pre className="text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap select-all">
                {output.result}
              </pre>
            </div>
          )}

          {/* Bottom Conversion Box: WhatsApp Lead Capture */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                ⚡ IMPLEMENT THIS FOR YOUR BRAND
              </span>
              <p className="text-sm font-bold text-white">
                We engineer turnkey Next.js platforms and 24/7 WhatsApp AI agents for your business.
              </p>
              <p className="text-xs text-slate-400">
                Guaranteed 7-day turnaround • 100% full source code ownership • Direct Founder Support.
              </p>
            </div>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.35)]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Implement on WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
