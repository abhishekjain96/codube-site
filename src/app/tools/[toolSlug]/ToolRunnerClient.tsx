"use client";

import React, { useState } from "react";
import { FreeTool } from "@/data/toolsData";
import { executeTool } from "@/lib/toolGenerators";
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
} from "lucide-react";

interface Props {
  tool: FreeTool;
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

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<{
    result: string;
    score?: number;
    scoreRating?: string;
    scoreBreakdown?: { label: string; passed: boolean; tip: string }[];
    actionLink?: string;
  } | null>(() => {
    // Run default output immediately so user sees value on first render!
    return executeTool(tool.id, formState);
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (id: string, value: any) => {
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleRun = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const res = executeTool(tool.id, formState);
      setOutput(res);
      setLoading(false);
    }, 400);
  };

  const handleCopy = () => {
    if (!output?.result) return;
    navigator.clipboard.writeText(output.result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output?.result) return;
    let ext = "txt";
    if (tool.codeLanguage === "json") ext = "json";
    else if (tool.codeLanguage === "css") ext = "css";
    else if (tool.codeLanguage === "html") ext = "html";
    else if (tool.codeLanguage === "markdown") ext = "md";
    else if (tool.codeLanguage === "typescript") ext = "ts";

    const blob = new Blob([output.result], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${tool.id}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const whatsappInquiryUrl = `https://wa.me/919672660338?text=${encodeURIComponent(
    tool.whatsappHook
  )}`;

  return (
    <div className="space-y-8">
      {/* Interactive Form Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <form onSubmit={handleRun} className="space-y-5">
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
                      required={f.required}
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
                    type={f.type}
                    required={f.required}
                    value={formState[f.id] ?? ""}
                    onChange={(e) => handleChange(f.id, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full bg-[#121B14] border border-white/10 focus:border-[#B8FF00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_30px_rgba(184,255,0,0.5)] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>{loading ? "Processing..." : `Run Free ${tool.shortName} →`}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Output Display Card */}
      {output && (
        <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#B8FF00] uppercase tracking-wider block">
                {tool.outputLabel}
              </span>
              <p className="text-xs text-zinc-400 mt-0.5">
                Ready to copy, implement, or download for your website.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {output.actionLink && (
                <a
                  href={output.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#25D366] text-black hover:bg-[#20bd5a] text-xs font-bold flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Test Link</span>
                </a>
              )}

              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF00]" />
                    <span className="text-[#B8FF00]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="px-4 py-2 rounded-lg bg-[#B8FF00] text-black hover:bg-[#ccff00] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Audit Score Card (if score exists) */}
          {output.score !== undefined && (
            <div className="p-5 rounded-2xl bg-[#030604] border border-[#B8FF00]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  Calculated Diagnostic Score
                </span>
                <div className="text-lg font-bold text-white">
                  Rating: <span className="text-amber-400">{output.scoreRating}</span>
                </div>
              </div>
              <div className="w-20 h-20 rounded-full border-4 border-[#B8FF00] flex flex-col items-center justify-center bg-[#080D0A]">
                <span className="text-2xl font-black text-[#B8FF00]">{output.score}</span>
                <span className="text-[9px] font-mono text-zinc-400">/ 100</span>
              </div>
            </div>
          )}

          {/* Score Breakdown Checklist */}
          {output.scoreBreakdown && output.scoreBreakdown.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {output.scoreBreakdown.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5">
                  {item.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">{item.label}</h5>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Code Output Window */}
          <div className="rounded-2xl bg-[#030604] border border-white/15 p-4 sm:p-5 font-mono text-xs text-zinc-200 overflow-x-auto max-h-[420px] shadow-inner leading-relaxed whitespace-pre text-left">
            {output.result}
          </div>

          {/* High-Converting Lead Magnet */}
          <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-[#0E1810] to-[#050806] border-2 border-[#25D366]/40 flex flex-col md:flex-row items-center justify-between gap-5 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#25D366] uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>TURNKEY ENGINEERING SERVICE</span>
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Want Codube to Implement This For Your Business?
              </h4>
              <p className="text-xs text-zinc-300 max-w-xl">
                Get a complete high-speed Next.js 14 website + 24/7 WhatsApp AI Receptionist delivered in 7 days with 100% full source code ownership.
              </p>
            </div>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-full text-xs font-bold bg-[#25D366] text-black hover:bg-[#20bd5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
