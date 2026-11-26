"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SEO_SERVICES, SEO_LOCATIONS, buildSeoSlug } from "@/data/seoData";
import { FREE_TOOLS } from "@/data/toolsData";
import {
  MapPin,
  Sparkles,
  Search,
  Globe,
  Cpu,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  Layers,
} from "lucide-react";

export default function DirectoryClient() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "jaipur" | "india" | "global" | "tools" | "services">("all");
  const [expandedLocations, setExpandedLocations] = useState<Record<string, boolean>>({});

  const toggleLocation = (locId: string) => {
    setExpandedLocations((prev) => ({
      ...prev,
      [locId]: !prev[locId],
    }));
  };

  const jaipurLocs = useMemo(() => SEO_LOCATIONS.filter((l) => l.region === "jaipur"), []);
  const indiaLocs = useMemo(() => SEO_LOCATIONS.filter((l) => l.region === "india"), []);
  const globalLocs = useMemo(() => SEO_LOCATIONS.filter((l) => l.region === "global"), []);

  // Filtered Locations based on search and tab
  const filteredLocations = useMemo(() => {
    let locs = SEO_LOCATIONS;
    if (activeTab === "jaipur") locs = jaipurLocs;
    else if (activeTab === "india") locs = indiaLocs;
    else if (activeTab === "global") locs = globalLocs;
    else if (activeTab === "tools" || activeTab === "services") return [];

    if (!search.trim()) return locs;

    const q = search.toLowerCase();
    return locs.filter(
      (l) =>
        l.city.toLowerCase().includes(q) ||
        l.localHubName.toLowerCase().includes(q) ||
        l.country.toLowerCase().includes(q)
    );
  }, [activeTab, jaipurLocs, indiaLocs, globalLocs, search]);

  // Filtered Tools
  const filteredTools = useMemo(() => {
    if (activeTab !== "all" && activeTab !== "tools") return [];
    if (!search.trim()) return FREE_TOOLS;

    const q = search.toLowerCase();
    return FREE_TOOLS.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [activeTab, search]);

  // Filtered Services
  const filteredServices = useMemo(() => {
    if (activeTab !== "all" && activeTab !== "services") return [];
    if (!search.trim()) return SEO_SERVICES;

    const q = search.toLowerCase();
    return SEO_SERVICES.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [activeTab, search]);

  const tabs = [
    { id: "all", label: "All Index (1,840+ Pages)" },
    { id: "jaipur", label: "📍 Jaipur & Rajasthan (16)" },
    { id: "india", label: "🇮🇳 Indian Metros (24)" },
    { id: "global", label: "🌍 Global Hubs (24)" },
    { id: "tools", label: "🛠️ 40 Free AI Tools" },
    { id: "services", label: "⚡ 28 Core Services" },
  ];

  return (
    <div className="space-y-10 text-left">
      {/* Search & Filter Controls */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-auto lg:min-w-[340px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by city (e.g. Vaishali Nagar, Dubai) or service..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Master 2-Level Hub &amp; Spoke Directory</span>
          </span>
          <span>Indexed URLs: 1,840+ Active Nodes</span>
        </div>
      </div>

      {/* SECTION 1: 40 FREE AI & DEVELOPER TOOLS */}
      {(activeTab === "all" || activeTab === "tools") && filteredTools.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                40 Free AI &amp; Developer Tools Index
              </h2>
            </div>
            <Link href="/tools" className="text-xs font-mono text-emerald-600 hover:underline flex items-center gap-1 font-bold">
              <span>View Tools Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredTools.map((t) => (
              <Link
                key={t.id}
                href={`/tools/${t.id}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">
                      {t.category}
                    </span>
                    {t.badge && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {t.tagline}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-emerald-600 font-bold">
                  <span>Launch Tool</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: CORE SPECIALIZED SERVICES */}
      {(activeTab === "all" || activeTab === "services") && filteredServices.length > 0 && (
        <section className="space-y-4 pt-6">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-950">
              28 Core Specialized Engineering Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((s) => (
              <div
                key={s.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">
                    {s.category} SERVICE
                  </span>
                  <span className="text-xs font-mono text-slate-500">{s.deliveryDays}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{s.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{s.description}</p>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="text-slate-400">Popular Hubs:</span>
                  <Link
                    href={`/services/${buildSeoSlug(s.id, "jaipur")}`}
                    className="text-slate-600 hover:text-emerald-600 hover:underline"
                  >
                    Jaipur
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href={`/services/${buildSeoSlug(s.id, "delhi-ncr")}`}
                    className="text-slate-600 hover:text-emerald-600 hover:underline"
                  >
                    Delhi NCR
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href={`/services/${buildSeoSlug(s.id, "bangalore")}`}
                    className="text-slate-600 hover:text-emerald-600 hover:underline"
                  >
                    Bangalore
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link
                    href={`/services/${buildSeoSlug(s.id, "dubai")}`}
                    className="text-slate-600 hover:text-emerald-600 hover:underline"
                  >
                    Dubai
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: PROGRAMMATIC LOCATIONS DIRECTORY */}
      {filteredLocations.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                Programmatic Locations &amp; Corridors Directory
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Showing {filteredLocations.length} Regions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => {
              const isExpanded = expandedLocations[loc.id];
              const displayedServices = isExpanded ? SEO_SERVICES : SEO_SERVICES.slice(0, 6);

              return (
                <div
                  key={loc.id}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">
                          {loc.region === "jaipur" ? "📍" : loc.region === "india" ? "🇮🇳" : "🌍"}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 tracking-wide">
                          {loc.city}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase font-semibold">
                        {loc.country}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {loc.businessContext}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-2">
                        Available Services in {loc.city}:
                      </span>
                      {displayedServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${buildSeoSlug(s.id, loc.id)}`}
                          className="block text-xs text-slate-700 hover:text-emerald-600 hover:underline transition-colors py-0.5 truncate"
                        >
                          → {s.name} in {loc.city}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleLocation(loc.id)}
                    className="w-full mt-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700 hover:underline cursor-pointer font-bold"
                  >
                    <span>{isExpanded ? "Collapse Services" : `View All 28 Services in ${loc.city}`}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Empty Search Fallback */}
      {filteredLocations.length === 0 && filteredTools.length === 0 && filteredServices.length === 0 && (
        <div className="py-20 text-center space-y-3">
          <p className="text-base text-slate-500">
            No locations or services found matching &quot;{search}&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveTab("all");
            }}
            className="text-xs font-mono text-emerald-600 hover:underline"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
