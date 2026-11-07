"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Database,
  Terminal,
  Activity,
  Bot,
  MessageCircle,
  Zap,
  ArrowUpRight,
} from "lucide-react";

interface ServiceVisualProps {
  serviceId: string;
}

export default function ServiceVisuals({ serviceId }: ServiceVisualProps) {
  switch (serviceId) {
    case "web-dev":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#030604] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-1 rounded-full bg-white/[0.04] text-[10px] font-mono text-zinc-400 border border-white/[0.06] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
              <span>https://app.codube.client/portal</span>
            </div>
            <div className="text-[10px] font-mono text-[#B8FF00] font-bold">100/100 SPEED</div>
          </div>

          {/* Browser Interior: Modern High-Converting Web Interface */}
          <div className="my-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#B8FF00] tracking-widest uppercase">Next.js 14 App Router</span>
                <h4 className="text-lg sm:text-xl font-black text-white">Ultra-Fast Responsive Web App</h4>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[#B8FF00] font-mono text-xs font-bold">
                0.2s LCP
              </div>
            </div>

            {/* Simulated UI Cards Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-zinc-400">Conversion Rate</div>
                <div className="text-base font-bold text-white mt-1">+248%</div>
                <div className="text-[9px] text-[#B8FF00] font-mono">Mobile Optimized</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-zinc-400">Lighthouse Score</div>
                <div className="text-base font-bold text-emerald-400 mt-1">100 / 100</div>
                <div className="text-[9px] text-zinc-500 font-mono">Performance &amp; SEO</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] text-zinc-400">Server Latency</div>
                <div className="text-base font-bold text-[#B8FF00] mt-1">14ms</div>
                <div className="text-[9px] text-zinc-500 font-mono">Edge CDN</div>
              </div>
            </div>

            {/* Simulated Interactive Graph */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
                <span>REAL-TIME TRAFFIC THROUGHPUT</span>
                <span className="text-[#B8FF00]">ACTIVE NOW: 14,820</span>
              </div>
              <div className="h-10 flex items-end gap-1 pt-1">
                {[30, 45, 60, 40, 75, 90, 65, 85, 100, 80, 95, 70, 85, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t transition-all ${
                      h > 80 ? "bg-[#B8FF00]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Tech Stack Badges */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>TypeScript • Tailwind • Framer Motion</span>
            <span className="text-[#B8FF00] flex items-center gap-1 font-bold">
              <span>Production Ready</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      );

    case "custom-software":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#030604] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          {/* Top Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-white">CODUBE ENTERPRISE ERP // CRM</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
              ROLE: SUPER_ADMIN
            </span>
          </div>

          {/* ERP Dashboard Interior */}
          <div className="my-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Automated Pipeline</span>
                <div className="text-lg font-black text-white">₹1.42 Cr / mo</div>
                <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>32% Operational Savings</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Database Queries</span>
                <div className="text-lg font-black text-[#B8FF00]">1.2M / sec</div>
                <div className="text-[10px] text-zinc-400 font-mono">0.00% Deadlocks</div>
              </div>
            </div>

            {/* Workflow Pipeline Steps */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="text-[10px] font-mono text-zinc-400 uppercase">Multi-Stage Business Workflow</div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                <div className="py-1.5 px-1 rounded bg-[#B8FF00]/15 text-[#B8FF00] font-bold border border-[#B8FF00]/30">Lead Capture</div>
                <div className="py-1.5 px-1 rounded bg-white/[0.05] text-zinc-300 border border-white/10">Verification</div>
                <div className="py-1.5 px-1 rounded bg-white/[0.05] text-zinc-300 border border-white/10">Billing Sync</div>
                <div className="py-1.5 px-1 rounded bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30">Auto Invoice</div>
              </div>
            </div>
          </div>

          {/* Bottom Security Bar */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span className="flex items-center gap-1 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8FF00]" />
              <span>Role-Based Access Control (RBAC) • AES-256</span>
            </span>
            <span className="text-[#B8FF00] font-bold">Active System</span>
          </div>
        </div>
      );

    case "ai-development":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#030604] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          {/* Top AI Agent Terminal */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-white">CODUBE NEURAL AGENT // RAG ENGINE</span>
            </div>
            <span className="text-[10px] font-mono text-[#B8FF00] animate-pulse">● LIVE STREAMING</span>
          </div>

          {/* Agent Chat / Reasoning Flow */}
          <div className="my-3 space-y-2.5 font-mono text-xs">
            {/* User Query */}
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-[11px]">
              <span className="text-zinc-500 mr-2">&gt; USER:</span>
              <span>&quot;Summarize 400 patient diagnostic scans &amp; highlight critical anomalies.&quot;</span>
            </div>

            {/* Agent Internal Thought / Tool Execution */}
            <div className="p-3 rounded-xl bg-[#080D0A] border border-[#B8FF00]/30 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between text-[#B8FF00] text-[10px]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>AGENT PIPELINE (Gemini 1.5 Pro + Pinecone Vector)</span>
                </span>
                <span>Latency: 410ms</span>
              </div>
              <div className="text-zinc-300 leading-relaxed text-[11px]">
                ✔ 400 DICOM scans vectorized &amp; cross-referenced.<br />
                ✔ 14 acute cases flagged with 99.4% precision index.<br />
                ✔ WhatsApp notification triggered to Chief Radiologist.
              </div>
            </div>
          </div>

          {/* Bottom Vector Nodes */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>RAG • Vector Embeddings • Autonomous Workflows</span>
            <span className="text-[#B8FF00] font-bold">100% Deterministic</span>
          </div>
        </div>
      );

    case "business-automation":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#030604] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-white">WHATSAPP CLOUD API AUTOMATION</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
              META VERIFIED
            </span>
          </div>

          {/* Simulated WhatsApp Flow */}
          <div className="my-3 space-y-2 text-xs">
            {/* Incoming Client Message */}
            <div className="p-3 rounded-2xl rounded-tl-none bg-[#111b15] border border-white/[0.08] text-white max-w-[85%] space-y-1">
              <div className="text-[10px] text-emerald-400 font-mono">Patient / Client</div>
              <p className="text-[12px]">Hi! I need an MRI Brain scan appointment for tomorrow at 11 AM.</p>
            </div>

            {/* Instant Automated Bot Response */}
            <div className="ml-auto p-3 rounded-2xl rounded-tr-none bg-[#1f2c22] border border-[#B8FF00]/30 text-white max-w-[85%] space-y-1.5 shadow-lg">
              <div className="text-[10px] text-[#B8FF00] font-mono flex items-center justify-between">
                <span>Codube Automated Booking Engine</span>
                <span className="text-[9px] text-zinc-400">0.4s instant</span>
              </div>
              <p className="text-[12px]">Confirmed! Slot reserved at Jaipur Diagnostic Hub. Token #8491 generated. Pre-fasting guidelines attached.</p>
              <div className="pt-1 flex gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Payment Link Sent</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-zinc-300 text-[10px]">Calendar Synced</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>Google Sheets • HubSpot • Notion • Webhooks</span>
            <span className="text-[#B8FF00] font-bold">0 Manual Effort</span>
          </div>
        </div>
      );

    case "saas-development":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#030604] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-white">MULTI-TENANT SAAS CLOUD PLATFORM</span>
            </div>
            <span className="text-[10px] font-mono text-[#B8FF00] font-bold">99.99% UPTIME</span>
          </div>

          {/* SaaS Telemetry */}
          <div className="my-3 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-zinc-400 font-mono">Monthly ARR</div>
                <div className="text-base font-black text-white mt-0.5">₹48.6 Lakh</div>
                <div className="text-[9px] text-[#B8FF00] font-mono">+18.4% QoQ</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-zinc-400 font-mono">Active Tenants</div>
                <div className="text-base font-black text-white mt-0.5">1,240+</div>
                <div className="text-[9px] text-zinc-400 font-mono">Isolated DBs</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-[10px] text-zinc-400 font-mono">Stripe Billing</div>
                <div className="text-base font-black text-emerald-400 mt-0.5">Automated</div>
                <div className="text-[9px] text-zinc-400 font-mono">Recurring Sub</div>
              </div>
            </div>

            {/* Global Regions Map */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>GLOBAL EDGE DISTRIBUTION</span>
                <span className="text-[#B8FF00]">38 EDGES LIVE</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300">
                <span>Mumbai (bom1): 8ms</span>
                <span>Singapore (sin1): 32ms</span>
                <span>Frankfurt (fra1): 74ms</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <span>PostgreSQL • Redis • Docker • Stripe Billing</span>
            <span className="text-[#B8FF00] font-bold">Scalable to Millions</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
