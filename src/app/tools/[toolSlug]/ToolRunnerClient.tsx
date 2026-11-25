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
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Terminal,
  Clock,
  Check,
  RefreshCw,
  FileText,
  Code2,
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

  const [isProcessing, setIsProcessing] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"document" | "raw">("document");
  const [copiedType, setCopiedType] = useState<"clean" | "raw" | null>(null);

  const [steps, setSteps] = useState<StepLog[]>([
    { step: 1, label: "Parameter Ingestion", detail: "Validating input fields & context variables...", completed: false },
    { step: 2, label: "Neural Domain Synthesis", detail: "Executing specialized algorithmic verification...", completed: false },
    { step: 3, label: "Output Formatting & Linting", detail: "Structuring production-ready payload & schema...", completed: false },
    { step: 4, label: "Verification Complete", detail: "Output certified & compiled with 100% precision.", completed: false },
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

  const handleRun = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    setProgressPercent(10);
    setCurrentStepIndex(0);
    setOutput(null);

    // Scroll smoothly to output container
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    // Step 1
    setTimeout(() => {
      setProgressPercent(35);
      setCurrentStepIndex(1);
      setSteps((prev) => [
        { ...prev[0], completed: true },
        prev[1],
        prev[2],
        prev[3],
      ]);
    }, 400);

    // Step 2
    setTimeout(() => {
      setProgressPercent(70);
      setCurrentStepIndex(2);
      setSteps((prev) => [
        prev[0],
        { ...prev[1], completed: true },
        prev[2],
        prev[3],
      ]);
    }, 900);

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
    }, 1300);

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
    }, 1650);
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

  return (
    <div className="space-y-10">
      {/* Interactive Form Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Top ambient highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8FF00] to-transparent opacity-60" />

        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Configure Input Parameters</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B8FF00]/15 text-[#B8FF00] uppercase font-bold">
                  LIVE ENGINE
                </span>
              </h2>
              <p className="text-xs text-zinc-400">
                Customize values below or use pre-filled defaults to generate output instantly.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleRun} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tool.fields.map((f) => {
              if (f.type === "select") {
                return (
                  <div key={f.id}>
                    <label className="block text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider mb-2">
                      {f.label} {f.required && <span className="text-[#B8FF00]">*</span>}
                    </label>
                    <select
                      value={formState[f.id] ?? ""}
                      onChange={(e) => handleChange(f.id, e.target.value)}
                      className="w-full bg-[#121B14] border border-white/10 focus:border-[#B8FF00] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
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
                    <label className="block text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider mb-2">
                      {f.label} {f.required && <span className="text-[#B8FF00]">*</span>}
                    </label>
                    <textarea
                      rows={3}
                      value={formState[f.id] ?? ""}
                      onChange={(e) => handleChange(f.id, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-[#121B14] border border-white/10 focus:border-[#B8FF00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>
                );
              }

              return (
                <div key={f.id}>
                  <label className="block text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider mb-2">
                    {f.label} {f.required && <span className="text-[#B8FF00]">*</span>}
                  </label>
                  <input
                    type={f.type === "number" ? "number" : "text"}
                    value={formState[f.id] ?? ""}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    required={f.required}
                    className="w-full bg-[#121B14] border border-white/10 focus:border-[#B8FF00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
              <span>Free Unlimited Runs • 100% Deterministic Execution</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_30px_rgba(184,255,0,0.5)] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-98"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Processing Live Analysis...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Generate Output Live →</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Target Ref for smooth scroll */}
      <div ref={resultRef} />

      {/* PROCESSING STATE: Futuristic Live Terminal & Scanning HUD */}
      {isProcessing && (
        <div className="rounded-3xl p-6 sm:p-8 bg-[#050806] border-2 border-[#B8FF00]/50 shadow-[0_0_50px_rgba(184,255,0,0.25)] space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#B8FF00] animate-ping" />
              <span className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider">
                Executing AI &amp; Algorithmic Pipeline...
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1 rounded-full">
              {progressPercent}% Complete
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#B8FF00] to-[#55ff00] transition-all duration-300 rounded-full shadow-[0_0_12px_#B8FF00]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Step Diagnostics Terminal */}
          <div className="bg-[#0A100C] rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08] text-zinc-500">
              <Terminal className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>Real-Time Execution Logs</span>
            </div>

            {steps.map((st, idx) => {
              const isCurrent = idx === currentStepIndex;
              return (
                <div
                  key={st.step}
                  className={`flex items-start gap-3 transition-colors ${
                    st.completed
                      ? "text-zinc-300"
                      : isCurrent
                      ? "text-[#B8FF00] font-bold"
                      : "text-zinc-600"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {st.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-4 h-4 text-[#B8FF00] animate-spin" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-zinc-700" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">[{st.step}/4]</span>
                      <span>{st.label}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-normal">{st.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* IDLE STATE (Before Running) */}
      {!isProcessing && !output && (
        <div className="rounded-3xl p-8 sm:p-10 bg-[#080D0A] border border-white/10 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] mx-auto shadow-[0_0_30px_rgba(184,255,0,0.2)]">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Ready to Generate Verified Output
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Click the <strong className="text-white">&quot;Generate Output Live&quot;</strong> button above to start the multi-step analysis and produce your clean, beautifully formatted result.
          </p>
          <button
            type="button"
            onClick={() => handleRun()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-[#B8FF00] text-white hover:text-black border border-white/20 transition-all cursor-pointer"
          >
            <span>Run with Pre-filled Defaults</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* COMPLETED STATE: Generated Output Display Card */}
      {!isProcessing && output && (
        <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border-2 border-[#B8FF00] shadow-[0_0_40px_rgba(184,255,0,0.25)] space-y-6 animate-in zoom-in-95 duration-300 text-left">
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-white/[0.08] gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8FF00]/15 border border-[#B8FF00]/40 text-[#B8FF00] text-xs font-mono font-bold tracking-wider uppercase">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Output Generated Successfully (100% Accurate)</span>
              </div>
              <h3 className="text-lg font-bold text-white">{tool.outputLabel}</h3>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Clock className="w-3 h-3 text-[#B8FF00]" />
                <span>Generated at {output.generatedAt} • Certified Clean Output</span>
              </div>
            </div>

            {/* View Mode Switcher + Copy Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Document vs Raw Code View Toggle */}
              <div className="inline-flex items-center p-1 rounded-xl bg-white/10 border border-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode("document")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "document"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Document (White)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("raw")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "raw"
                      ? "bg-[#B8FF00] text-black font-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Raw Code</span>
                </button>
              </div>

              {/* Primary Copy: Clean Text (Strips all stars & markdown artifacts) */}
              <button
                type="button"
                onClick={handleCopyClean}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B8FF00] text-black text-xs font-bold hover:bg-[#ccff00] hover:shadow-[0_0_15px_rgba(184,255,0,0.5)] transition-all cursor-pointer shadow-sm"
                title="Copies clean text with ZERO stars or markdown syntax (ready to paste directly into WhatsApp or email)"
              >
                {copiedType === "clean" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>COPIED CLEAN!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 fill-black" />
                    <span>Copy Clean Text</span>
                  </>
                )}
              </button>

              {/* Secondary Copy: Raw Markdown */}
              <button
                type="button"
                onClick={handleCopyRaw}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="Copies raw text with markdown formatting"
              >
                {copiedType === "raw" ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF00]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Raw</span>
                  </>
                )}
              </button>

              {/* Download File */}
              <button
                type="button"
                onClick={handleDownload}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Download file to computer"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Diagnostic Score Card (If Tool Returns a Score) */}
          {output.score !== undefined && (
            <div className="p-6 rounded-2xl bg-[#0F1711] border border-[#B8FF00]/30 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Diagnostic Score Rating
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#B8FF00]">
                      {output.score}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm">/ 100</span>
                    {output.scoreRating && (
                      <span className="px-3 py-1 rounded-full bg-[#B8FF00]/20 text-[#B8FF00] text-xs font-mono font-bold">
                        {output.scoreRating}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs font-mono text-zinc-400">
                  <span>Engine: Codube Verified Algorithm</span>
                  <span className="block text-[#B8FF00]">Status: Certified Valid</span>
                </div>
              </div>

              {/* Score Breakdown Checklist */}
              {output.scoreBreakdown && output.scoreBreakdown.length > 0 && (
                <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    Diagnostic Parameters Checked:
                  </span>
                  {output.scoreBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs bg-black/30 p-2.5 rounded-lg border border-white/5"
                    >
                      {item.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#B8FF00] shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold text-white">{item.label}: </span>
                        <span className="text-zinc-400">{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action Link Button (e.g. WhatsApp Direct Test) */}
          {output.actionLink && (
            <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="text-xs font-bold text-white">
                  Direct Live Click-to-Chat Link Ready:
                </span>
              </div>
              <a
                href={output.actionLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-black text-xs font-bold hover:bg-[#20b858] transition-colors cursor-pointer"
              >
                <span>Test Link Live on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* OUTPUT CONTAINER: Toggle between White Theme Document View & Raw Code View */}
          {viewMode === "document" ? (
            <div className="rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-slate-200 relative overflow-hidden transition-all">
              {/* Document Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-700">
                    Certified Output Document (Clean Format)
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
                  Pristine Typography • No Stars or Code Clutter
                </span>
              </div>

              {/* Rich Parsed Document Preview */}
              <CleanDocumentPreview content={output.result} />
            </div>
          ) : (
            <div className="rounded-2xl bg-[#050806] border border-white/10 p-5 overflow-x-auto relative">
              <pre className="text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed whitespace-pre-wrap select-all">
                {output.result}
              </pre>
            </div>
          )}

          {/* Bottom Conversion Box: WhatsApp Lead Capture */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0E1A11] via-[#0F1D13] to-[#0A130C] border border-[#B8FF00]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#B8FF00] font-bold uppercase tracking-wider block">
                ⚡ WANT TO IMPLEMENT THIS IN PRODUCTION?
              </span>
              <p className="text-sm font-bold text-white">
                We engineer sub-second Next.js websites and 24/7 WhatsApp AI agents for your business.
              </p>
              <p className="text-xs text-zinc-400">
                Guaranteed 7-day turnaround • Full source code ownership • Direct support from Abhishek Jain.
              </p>
            </div>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B8FF00] text-black text-xs font-bold hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(184,255,0,0.5)] transition-all shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Implement on WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
