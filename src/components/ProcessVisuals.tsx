"use client";

import React from "react";
import {
  Lightbulb,
  Layout,
  Code2,
  CheckCircle,
  Rocket,
  TrendingUp,
  GitBranch,
  Terminal,
  Activity,
  ShieldCheck,
  Cpu,
  CheckCircle2,
} from "lucide-react";

interface ProcessVisualProps {
  stepIndex: number;
}

export default function ProcessVisuals({ stepIndex }: ProcessVisualProps) {
  switch (stepIndex) {
    case 0:
      // Step 1: Discovery & Architecture Blueprint
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] font-bold">STEP 01 // TECHNICAL DISCOVERY &amp; BLUEPRINT</span>
            <span className="text-zinc-500">PHASE: ROADMAP &amp; SCOPE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#B8FF00]">01. USER FLOWS</span>
              <div className="font-bold text-white">Full User Journey</div>
              <p className="text-[11px] text-zinc-400">Persona mapping, high-converting checkout &amp; booking funnel.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#B8FF00]">02. SYSTEM DESIGN</span>
              <div className="font-bold text-white">Database Schema</div>
              <p className="text-[11px] text-zinc-400">PostgreSQL ER diagrams, indexing &amp; API contract design.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-[#B8FF00]">03. TIMELINE</span>
              <div className="font-bold text-white">Milestone Sprints</div>
              <p className="text-[11px] text-zinc-400">Strict weekly deliverables with staging preview URLs.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#080D0A] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Deliverable: Technical Specification Document (TSD)</span>
            <span className="text-[#B8FF00] font-bold">100% Scope Clarity</span>
          </div>
        </div>
      );

    case 1:
      // Step 2: Design & Prototype (Figma / UI Design System)
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] font-bold">STEP 02 // UI/UX DESIGN &amp; INTERACTIVE PROTOTYPE</span>
            <span className="text-zinc-500">FIGMA PROTOTYPE 60FPS</span>
          </div>

          {/* UI Design System Tokens Visual */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-[#080D0A] border border-white/10 text-center space-y-1">
              <div className="w-6 h-6 rounded-md bg-[#B8FF00] mx-auto shadow-[0_0_10px_#B8FF00]" />
              <div className="font-mono text-[10px] text-zinc-400">#B8FF00</div>
              <div className="font-bold text-white text-[11px]">Electric Lime</div>
            </div>
            <div className="p-3 rounded-xl bg-[#080D0A] border border-white/10 text-center space-y-1">
              <div className="w-6 h-6 rounded-md bg-[#030604] border border-white/20 mx-auto" />
              <div className="font-mono text-[10px] text-zinc-400">#030604</div>
              <div className="font-bold text-white text-[11px]">Deep Cyber Black</div>
            </div>
            <div className="p-3 rounded-xl bg-[#080D0A] border border-white/10 text-center space-y-1">
              <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-md border border-white/30 mx-auto" />
              <div className="font-mono text-[10px] text-zinc-400">Glassmorphism</div>
              <div className="font-bold text-white text-[11px]">Blurred Panels</div>
            </div>
            <div className="p-3 rounded-xl bg-[#080D0A] border border-white/10 text-center space-y-1">
              <div className="w-6 h-6 rounded-md bg-emerald-500 mx-auto" />
              <div className="font-mono text-[10px] text-zinc-400">Framer Motion</div>
              <div className="font-bold text-white text-[11px]">Micro-Interactions</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#080D0A] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Figma Component Library • 100% Responsive Desktop, Tablet &amp; Mobile</span>
            <span className="text-[#B8FF00] font-bold">Pixel Perfect</span>
          </div>
        </div>
      );

    case 2:
      // Step 3: Development (Next.js & TypeScript IDE)
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-3 font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
            <span className="text-[#B8FF00] font-bold">STEP 03 // CLEAN TYPE-SAFE CODEBASE</span>
            <span className="text-zinc-500">src/app/api/pipeline.ts</span>
          </div>

          {/* Code IDE Mockup */}
          <div className="p-4 rounded-xl bg-black/80 border border-white/[0.08] text-[11px] leading-relaxed text-zinc-300 overflow-x-auto space-y-1">
            <div><span className="text-purple-400">export async function</span> <span className="text-[#B8FF00]">POST</span>(req: <span className="text-blue-400">NextRequest</span>) &#123;</div>
            <div className="pl-4 text-zinc-400"><span className="text-purple-400">const</span> &#123; payload &#125; = <span className="text-purple-400">await</span> req.json();</div>
            <div className="pl-4 text-zinc-400"><span className="text-purple-400">const</span> verified = <span className="text-purple-400">await</span> authGuard(req);</div>
            <div className="pl-4"><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> codubeEngine.<span className="text-[#B8FF00]">dispatchWorkflows</span>(payload);</div>
            <div className="pl-4"><span className="text-purple-400">return</span> NextResponse.<span className="text-blue-400">json</span>(&#123; <span className="text-emerald-400">status</span>: <span className="text-[#B8FF00]">200</span>, <span className="text-emerald-400">latency</span>: <span className="text-yellow-300">&quot;12ms&quot;</span> &#125;);</div>
            <div>&#125;</div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
            <span>Next.js 14 App Router • TypeScript • Tailwind CSS • Strict Linting</span>
            <span className="text-[#B8FF00] font-bold">Zero Technical Debt</span>
          </div>
        </div>
      );

    case 3:
      // Step 4: Testing & Quality Check
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] font-bold">STEP 04 // AUTOMATED QA &amp; SECURITY TEST SUITE</span>
            <span className="text-emerald-400 font-bold">PASS: 184 / 184 TESTS</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                <span>Unit &amp; Integration Tests (Jest / Vitest)</span>
              </span>
              <span>100% Passed</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                <span>End-to-End User Simulation (Playwright)</span>
              </span>
              <span>100% Passed</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8FF00]" />
                <span>Security Penetration &amp; SQLi / XSS Audit</span>
              </span>
              <span>0 Vulnerabilities</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#080D0A] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Rigorous Cross-Browser &amp; Device Testing</span>
            <span className="text-[#B8FF00] font-bold">Certified Stable</span>
          </div>
        </div>
      );

    case 4:
      // Step 5: Deployment (AWS / Vercel Edge Cloud)
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] font-bold">STEP 05 // PRODUCTION DEPLOYMENT &amp; EDGE CDN</span>
            <span className="text-emerald-400 font-bold">STATUS: DEPLOYED ⚡</span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400">EDGE SERVERS</div>
              <div className="text-lg font-black text-white">Global 38+</div>
              <div className="text-[10px] text-[#B8FF00] font-mono">&lt; 20ms Latency</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400">SSL CERTIFICATE</div>
              <div className="text-lg font-black text-emerald-400">TLS 1.3</div>
              <div className="text-[10px] text-zinc-400 font-mono">Auto Renewal</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <div className="text-[10px] font-mono text-zinc-400">CI/CD PIPELINE</div>
              <div className="text-lg font-black text-[#B8FF00]">GitHub Actions</div>
              <div className="text-[10px] text-zinc-400 font-mono">0s Downtime</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#080D0A] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>AWS Cloudflare Vercel Production Infrastructure</span>
            <span className="text-[#B8FF00] font-bold">Live Worldwide</span>
          </div>
        </div>
      );

    case 5:
      // Step 6: Support & Growth
      return (
        <div className="rounded-2xl p-6 bg-[#030604] border border-[#B8FF00]/30 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
            <span className="text-[#B8FF00] font-bold">STEP 06 // 24/7 SUPPORT &amp; CONTINUOUS SCALING</span>
            <span className="text-[#B8FF00] font-bold">99.99% SLA UPTIME</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <div className="text-[10px] font-mono text-[#B8FF00]">UPTIME MONITORING</div>
              <div className="text-lg font-black text-white">24/7 Automated Alerts</div>
              <p className="text-[11px] text-zinc-400">Immediate incident resolution, health pings every 30 seconds.</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <div className="text-[10px] font-mono text-[#B8FF00]">FEATURE ITERATION</div>
              <div className="text-lg font-black text-white">Sprint Enhancements</div>
              <p className="text-[11px] text-zinc-400">Continuous updates based on client user feedback &amp; metrics.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#080D0A] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Direct Access to Abhishek Jain &amp; Engineering Team</span>
            <span className="text-[#B8FF00] font-bold">Long-Term Partner</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
