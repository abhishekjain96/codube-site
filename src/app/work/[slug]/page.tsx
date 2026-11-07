import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import { getSiteContent } from "@/lib/storage";

export const dynamic = "force-dynamic";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const content = getSiteContent();
  const project = content?.projects?.find(
    (p: any) => p.id === params.slug || p.slug === params.slug
  );

  if (!project) {
    return {
      title: "Case Study — CODUBE Portfolio",
    };
  }

  return {
    title: `${project.name || project.title} Case Study — CODUBE`,
    description: project.description || project.tagline,
  };
}

export default function DynamicProjectPage({ params }: ProjectDetailProps) {
  const content = getSiteContent();
  const project = content?.projects?.find(
    (p: any) => p.id === params.slug || p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  const title = project.name || project.title || "Project Case Study";
  const badge = project.badge || "FEATURED PROJECT";
  const status = project.status || "Live Product";
  const tagline = project.tagline || "";
  const description = project.description || "";
  const image = project.image || "/images/scantaker-mockup.png";
  const liveUrl = project.liveUrl || "#";
  const tags = Array.isArray(project.tags)
    ? project.tags
    : typeof project.tags === "string"
    ? project.tags.split(",").map((s: string) => s.trim())
    : [];

  const results = Array.isArray(project.results)
    ? project.results.map((r: any) => (typeof r === "string" ? r : r.title || r.label))
    : ["High performance architecture", "Production grade delivery"];

  return (
    <div className="pt-24 min-h-screen bg-[#030604]">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-[#B8FF00] transition-colors py-2 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(184,255,0,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-wider text-[#B8FF00]">
                {badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-xs font-semibold text-[#B8FF00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00] animate-pulse" />
                {status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {title}
            </h1>

            {tagline && (
              <p className="text-xl sm:text-2xl font-semibold text-zinc-200">
                {tagline}
              </p>
            )}

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {description}
            </p>

            {/* Quick Action Link */}
            {liveUrl && liveUrl !== "#" && (
              <div className="pt-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
                >
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            )}
          </div>

          {/* Featured Device Mockup */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#080D0A] p-3 sm:p-6 shadow-2xl relative">
            <Image
              src={image}
              alt={`${title} Interface`}
              width={1400}
              height={850}
              unoptimized
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Key Deliverables & Tags */}
          {tags.length > 0 && (
            <div className="mt-12">
              <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Architecture &amp; Modules
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results Summary Bar */}
          {results.length > 0 && (
            <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-[#0B120D] border border-[#B8FF00]/20">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#B8FF00] mb-6">
                Measurable Impact &amp; Production Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {results.map((res: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0" />
                    <span className="text-sm font-semibold text-white">{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner content={content} />
    </div>
  );
}
