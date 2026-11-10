"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Image as ImageIcon,
  FileText,
  Inbox,
  Save,
  Upload,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Eye,
  Trash2,
  Mail,
  Phone,
  RefreshCw,
  Lock,
  Sparkles,
  Trophy,
  FolderPlus,
  Plus,
  Edit2,
  X,
  Play,
  Layers,
  Send,
  HelpCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"projects" | "email" | "images" | "content" | "leads">("projects");

  // Content state
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");

  // Leads state
  const [leads, setLeads] = useState<any[]>([]);

  // Uploading status for individual images
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  // SMTP Settings State
  const [smtpForm, setSmtpForm] = useState({
    host: "smtp.gmail.com",
    port: "587",
    user: "",
    pass: "",
    recipientEmail: "hello@codube.com",
  });
  const [testEmailLoading, setTestEmailLoading] = useState(false);
  const [testEmailResult, setTestEmailResult] = useState<{ success?: boolean; message?: string } | null>(null);

  // Project Modal State
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProjectIndex, setEditingProjectIndex] = useState<number | null>(null);
  const [projectForm, setProjectForm] = useState({
    id: "",
    name: "",
    badge: "FEATURED PROJECT",
    status: "Live Product",
    tagline: "",
    description: "",
    image: "/images/scantaker-mockup.png",
    liveUrl: "https://",
    tags: "",
    result1: "",
    result2: "",
    result3: "",
  });

  // Check auth session
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("codube_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      fetchContent();
      fetchLeads();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "codube2026") {
      setIsAuthenticated(true);
      sessionStorage.setItem("codube_admin_auth", "true");
      setAuthError("");
      fetchContent();
      fetchLeads();
    } else {
      setAuthError("Invalid Admin PIN. Access denied.");
    }
  };

  const fetchContent = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/content");
      const data = await res.json();
      if (data.content) {
        setContent(data.content);
        if (data.content.smtp) {
          setSmtpForm({
            host: data.content.smtp.host || "smtp.gmail.com",
            port: String(data.content.smtp.port || "587"),
            user: data.content.smtp.user || "",
            pass: data.content.smtp.pass || "",
            recipientEmail: data.content.smtp.recipientEmail || data.content.general?.notificationEmail || "hello@codube.com",
          });
        }
      }
    } catch (err) {
      console.error("Fetch content error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Fetch leads error:", err);
    }
  };

  const handleSaveContent = async () => {
    try {
      setSaveSuccess(false);
      setSaveError("");
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      if (res.ok) {
        setSaveSuccess(true);
        confetti({
          particleCount: 50,
          spread: 60,
          colors: ["#bbfb26", "#22c55e", "#ffffff"],
        });
        setTimeout(() => setSaveSuccess(false), 4000);
      } else {
        setSaveError(data.error || "Failed to save");
      }
    } catch (err: any) {
      setSaveError(err.message || "Failed to save");
    }
  };

  const handleSaveSmtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContent = {
      ...content,
      smtp: {
        host: smtpForm.host,
        port: Number(smtpForm.port) || 587,
        user: smtpForm.user,
        pass: smtpForm.pass,
        recipientEmail: smtpForm.recipientEmail,
      },
      general: {
        ...content?.general,
        notificationEmail: smtpForm.recipientEmail,
      },
    };
    setContent(updatedContent);

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedContent }),
      });
      if (res.ok) {
        setSaveSuccess(true);
        confetti({
          particleCount: 40,
          spread: 50,
          colors: ["#bbfb26", "#22c55e", "#ffffff"],
        });
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Save SMTP error:", err);
    }
  };

  const handleSendTestEmail = async () => {
    setTestEmailLoading(true);
    setTestEmailResult(null);

    try {
      const res = await fetch("/api/admin/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(smtpForm),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setTestEmailResult({ success: true, message: data.message });
        confetti({
          particleCount: 50,
          spread: 60,
          colors: ["#bbfb26", "#22c55e", "#ffffff"],
        });
      } else {
        setTestEmailResult({ success: false, message: data.error || "Failed to send test email." });
      }
    } catch (err: any) {
      setTestEmailResult({ success: false, message: err.message || "Network error while connecting." });
    } finally {
      setTestEmailLoading(false);
    }
  };

  const compressImage = async (file: File): Promise<File> => {
    if (!file.type.startsWith("image/") || file.size < 600 * 1024) return file;
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const maxDim = 1600;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }));
              } else {
                resolve(file);
              }
            },
            "image/jpeg",
            0.88
          );
        };
        img.onerror = () => resolve(file);
        img.src = e.target?.result as string;
      };
      reader.onerror = () => resolve(file);
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    let file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingKey(key);
      setSaveError("");

      // Auto-compress large photos client-side for ultra-fast upload & serverless resilience
      if (file.type.startsWith("image/") && file.size > 600 * 1024) {
        file = await compressImage(file);
      }

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Failed to upload image file");
      }

      const updatedContent = JSON.parse(JSON.stringify(content || {}));
      if (key === "logo") {
        updatedContent.general = { ...updatedContent.general, customLogo: data.url };
      } else if (key === "founder") {
        updatedContent.founder = {
          ...updatedContent.founder,
          photo: data.url,
          image: data.url,
        };
      } else if (key === "hero") {
        updatedContent.hero = { ...updatedContent.hero, heroImage: data.url };
      } else if (key === "process") {
        updatedContent.process = { ...updatedContent.process, heroImage: data.url };
      } else if (key.startsWith("project_")) {
        const index = parseInt(key.replace("project_", ""), 10);
        if (updatedContent.projects && updatedContent.projects[index]) {
          updatedContent.projects[index] = {
            ...updatedContent.projects[index],
            image: data.url,
          };
        }
      }

      setContent(updatedContent);

      const saveRes = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedContent }),
      });

      const saveData = await saveRes.json();
      if (!saveRes.ok) {
        throw new Error(saveData.error || "Failed to save updated content");
      }

      setSaveSuccess(true);
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ["#bbfb26", "#22c55e", "#ffffff"],
      });
      setTimeout(() => setSaveSuccess(false), 3500);
    } catch (err: any) {
      console.error("Upload & Save error:", err);
      setSaveError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploadingKey(null);
      e.target.value = "";
    }
  };

  // Project Modal Handlers
  const handleOpenAddProject = () => {
    setEditingProjectIndex(null);
    const count = (content?.projects?.length || 0) + 1;
    setProjectForm({
      id: `project-${count}`,
      name: "",
      badge: `FEATURED PROJECT 0${count}`,
      status: "Live Product",
      tagline: "",
      description: "",
      image: "/images/scantaker-mockup.png",
      liveUrl: "https://",
      tags: "Web App, SaaS, Cloud, API",
      result1: "Faster Booking Flow",
      result2: "High-Performance Next.js",
      result3: "Scalable Architecture",
    });
    setShowProjectModal(true);
  };

  const handleOpenEditProject = (index: number) => {
    setEditingProjectIndex(index);
    const p = content.projects[index];
    const tagsStr = Array.isArray(p.tags) ? p.tags.join(", ") : (p.tags || "");
    const r1 = p.results?.[0]?.title || p.results?.[0]?.label || p.results?.[0] || "";
    const r2 = p.results?.[1]?.title || p.results?.[1]?.label || p.results?.[1] || "";
    const r3 = p.results?.[2]?.title || p.results?.[2]?.label || p.results?.[2] || "";

    setProjectForm({
      id: p.id || `project-${index + 1}`,
      name: p.name || p.title || "",
      badge: p.badge || `FEATURED PROJECT 0${index + 1}`,
      status: p.status || "Live Product",
      tagline: p.tagline || "",
      description: p.description || "",
      image: p.image || "/images/scantaker-mockup.png",
      liveUrl: p.liveUrl || "https://",
      tags: tagsStr,
      result1: r1,
      result2: r2,
      result3: r3,
    });
    setShowProjectModal(true);
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingKey("project_modal_upload");
      setSaveError("");

      if (file.type.startsWith("image/") && file.size > 600 * 1024) {
        file = await compressImage(file);
      }

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Failed to upload project image");
      }

      setProjectForm((prev) => ({ ...prev, image: data.url }));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err: any) {
      console.error("Project image upload error:", err);
      setSaveError(err.message || "Failed to upload project image.");
    } finally {
      setUploadingKey(null);
      e.target.value = "";
    }
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.name.trim()) {
      alert("Please enter a Project Name");
      return;
    }

    const finalSlug = projectForm.id.trim() || projectForm.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const tagsArray = projectForm.tags.split(",").map((t) => t.trim()).filter(Boolean);
    const resultsArray = [
      { title: projectForm.result1 || "High Performance Architecture", icon: "trending-up" },
      { title: projectForm.result2 || "Production Tested", icon: "shield-check" },
      { title: projectForm.result3 || "Scalable Cloud Stack", icon: "users" },
    ].filter((r) => r.title.length > 0);

    const updatedProjects = Array.isArray(content?.projects) ? [...content.projects] : [];
    const projectPayload = {
      id: finalSlug,
      name: projectForm.name,
      title: projectForm.name,
      badge: projectForm.badge,
      status: projectForm.status,
      tagline: projectForm.tagline,
      description: projectForm.description,
      image: projectForm.image,
      liveUrl: projectForm.liveUrl,
      caseStudyUrl: `/work/${finalSlug}`,
      tags: tagsArray,
      results: resultsArray,
      resultHeader: "Platform Impact",
    };

    if (editingProjectIndex !== null && editingProjectIndex >= 0) {
      updatedProjects[editingProjectIndex] = projectPayload;
    } else {
      updatedProjects.push(projectPayload);
    }

    const updatedContent = { ...content, projects: updatedProjects };
    setContent(updatedContent);
    setShowProjectModal(false);

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedContent }),
      });
      if (res.ok) {
        setSaveSuccess(true);
        confetti({
          particleCount: 50,
          spread: 60,
          colors: ["#bbfb26", "#22c55e", "#ffffff"],
        });
        setTimeout(() => setSaveSuccess(false), 4000);
      }
    } catch (err) {
      console.error("Save project error:", err);
    }
  };

  const handleDeleteProject = async (index: number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    const updatedProjects = content.projects.filter((_: any, idx: number) => idx !== index);
    const updatedContent = { ...content, projects: updatedProjects };
    setContent(updatedContent);

    try {
      await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: updatedContent }),
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Delete project error:", err);
    }
  };

  const handleUpdateLeadStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      fetchLeads();
    } catch (err) {
      console.error("Update lead error:", err);
    }
  };

  const exportLeadsToCsv = () => {
    if (!leads.length) return;
    const headers = ["ID", "Name", "Email", "Phone", "Service", "Budget", "Message", "Date", "Status"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.phone || ""}"`,
      `"${l.service || ""}"`,
      `"${l.budget || ""}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      l.createdAt,
      l.status,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `codube_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 1. PIN Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#030604] relative">
        <div className="ambient-glow-top" />

        <div className="relative z-10 w-full max-w-md rounded-3xl glass-panel-glow border-[#B8FF00]/30 p-8 sm:p-10 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00] mx-auto shadow-[0_0_20px_rgba(184,255,0,0.25)]">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">CODUBE Admin Studio</h2>
            <p className="text-xs text-zinc-400 mt-1">
              Enter your secure master PIN to manage projects, visual assets, SMTP email delivery, and client leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {authError}
              </div>
            )}

            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter Master PIN"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-center text-lg tracking-widest text-white focus:outline-none focus:border-[#B8FF00] focus:ring-1 focus:ring-[#B8FF00]"
              autoFocus
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
            >
              Unlock Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. Full Admin Dashboard
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#030604] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white flex items-center gap-2">
                CODUBE Admin Studio
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#B8FF00]/20 text-[#B8FF00] border border-[#B8FF00]/30">
                  LIVE
                </span>
              </h1>
              <p className="text-xs text-zinc-400">
                Manage projects, upload mockups, configure live email delivery, and view client inquiries.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live Site</span>
            </Link>

            <button
              type="button"
              onClick={handleSaveContent}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
            >
              <Save className="w-4 h-4 stroke-[2.5]" />
              <span>Save All Changes</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        {saveSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <CheckCircle className="w-4 h-4 text-[#B8FF00] shrink-0" />
            <span>Site settings updated successfully! Changes are live immediately.</span>
          </div>
        )}

        {saveError && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{saveError}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "projects"
                ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FolderPlus className="w-4 h-4" />
            <span>Projects Portfolio ({content?.projects?.length || 0})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("email")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "email"
                ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Email &amp; SMTP Alerts</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("images")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "images"
                ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Images &amp; Brand Media</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("content")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "content"
                ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Headlines &amp; Text</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("leads")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              activeTab === "leads"
                ? "bg-[#B8FF00] text-black shadow-[0_0_15px_rgba(184,255,0,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Client Leads ({leads.length})</span>
          </button>
        </div>

        {/* TAB 0: PROJECTS MANAGEMENT */}
        {activeTab === "projects" && content && (
          <div className="space-y-8">
            <div className="p-6 rounded-3xl bg-[#080D0A] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Projects &amp; Case Studies</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#B8FF00]/10 text-[#B8FF00] border border-[#B8FF00]/30 font-mono">
                    {content.projects?.length || 0} ACTIVE
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Add new client projects, upload laptop/mobile mockups, set live links, and manage case study metrics.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenAddProject}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all shrink-0"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Project List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.projects?.map((proj: any, idx: number) => (
                <div
                  key={proj.id || idx}
                  className="rounded-3xl bg-[#080D0A] border border-white/10 hover:border-[#B8FF00]/30 transition-all overflow-hidden flex flex-col justify-between p-6 space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#B8FF00]">
                        {proj.badge || `PROJECT 0${idx + 1}`}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-zinc-300">
                        {proj.status || "Live Product"}
                      </span>
                    </div>

                    <div className="h-44 rounded-2xl bg-black/60 border border-white/10 overflow-hidden relative group">
                      <Image
                        src={proj.image || "/images/scantaker-mockup.png"}
                        alt={proj.name || proj.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div>
                      <h4 className="text-xl font-black text-white">{proj.name || proj.title}</h4>
                      <p className="text-xs font-medium text-zinc-300 mt-1 line-clamp-1">
                        {proj.tagline}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    {proj.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(Array.isArray(proj.tags) ? proj.tags : String(proj.tags).split(",")).slice(0, 4).map((t: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-zinc-400 border border-white/[0.06]"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/work/${proj.id}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white"
                        title="View Case Study"
                      >
                        <Play className="w-3 h-3 text-[#B8FF00] fill-current" />
                        <span>Case Study</span>
                      </Link>

                      {proj.liveUrl && proj.liveUrl !== "#" && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-[#B8FF00]"
                          title="Visit Live Site"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Link</span>
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenEditProject(idx)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-[#B8FF00]/10 text-zinc-300 hover:text-[#B8FF00] transition-colors"
                        title="Edit Project"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteProject(idx)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 text-zinc-400 hover:text-red-400 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ADD / EDIT PROJECT MODAL */}
            {showProjectModal && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
                <div className="relative w-full max-w-2xl bg-[#080D0A] border border-[#B8FF00]/30 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FolderPlus className="w-5 h-5 text-[#B8FF00]" />
                      <span>{editingProjectIndex !== null ? "Edit Project" : "Add New Project"}</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowProjectModal(false)}
                      className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveProject} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Project Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={projectForm.name}
                          onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                          placeholder="e.g. ScanTaker, FinFlow AI"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Slug / URL ID *
                        </label>
                        <input
                          type="text"
                          required
                          value={projectForm.id}
                          onChange={(e) => setProjectForm({ ...projectForm, id: e.target.value })}
                          placeholder="e.g. scantaker, finflow-ai"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Badge Label
                        </label>
                        <input
                          type="text"
                          value={projectForm.badge}
                          onChange={(e) => setProjectForm({ ...projectForm, badge: e.target.value })}
                          placeholder="e.g. FEATURED PROJECT 03, AI AUTOMATION"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Status
                        </label>
                        <select
                          value={projectForm.status}
                          onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D0A] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        >
                          <option value="Live Product">Live Product</option>
                          <option value="In Production">In Production</option>
                          <option value="Beta">Beta Release</option>
                          <option value="Case Study">Case Study Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Tagline (One-line Hook)
                      </label>
                      <input
                        type="text"
                        value={projectForm.tagline}
                        onChange={(e) => setProjectForm({ ...projectForm, tagline: e.target.value })}
                        placeholder="e.g. A complete diagnostic booking platform for MRI & CT scans."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Detailed Description
                      </label>
                      <textarea
                        rows={3}
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        placeholder="Detailed explanation of the platform, user workflow, and engineering architecture..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                      />
                    </div>

                    {/* Image Mockup Upload & Preview */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                      <label className="block text-xs font-semibold text-zinc-300">
                        Project Mockup Image (File Upload or URL)
                      </label>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-28 h-20 rounded-xl bg-black/60 border border-white/10 overflow-hidden relative shrink-0">
                          <Image
                            src={projectForm.image}
                            alt="Mockup Preview"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 w-full space-y-2">
                          <div className="flex items-center gap-2">
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#B8FF00] text-black cursor-pointer hover:bg-[#ccff00]">
                              <Upload className="w-3.5 h-3.5" />
                              <span>{uploadingKey === "project_modal_upload" ? "Uploading..." : "Upload Image File"}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleProjectImageUpload}
                                className="hidden"
                              />
                            </label>
                            <span className="text-[11px] text-zinc-400">or enter image path below:</span>
                          </div>

                          <input
                            type="text"
                            value={projectForm.image}
                            onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                            placeholder="/uploads/... or https://..."
                            className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-zinc-300 font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Live Site URL
                        </label>
                        <input
                          type="text"
                          value={projectForm.liveUrl}
                          onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                          placeholder="https://clientapp.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={projectForm.tags}
                          onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                          placeholder="Patient Portal, Real-time Booking, AWS, Next.js"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                        />
                      </div>
                    </div>

                    {/* Key Results / Metrics */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-zinc-300">
                        3 Key Metrics / Results
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={projectForm.result1}
                          onChange={(e) => setProjectForm({ ...projectForm, result1: e.target.value })}
                          placeholder="e.g. 70% Faster Booking"
                          className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={projectForm.result2}
                          onChange={(e) => setProjectForm({ ...projectForm, result2: e.target.value })}
                          placeholder="e.g. 12+ Centers in Jaipur"
                          className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={projectForm.result3}
                          onChange={(e) => setProjectForm({ ...projectForm, result3: e.target.value })}
                          placeholder="e.g. 99% Patient Satisfaction"
                          className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setShowProjectModal(false)}
                        className="px-4 py-2 rounded-full text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
                      >
                        <Save className="w-4 h-4 stroke-[2.5]" />
                        <span>{editingProjectIndex !== null ? "Update Project" : "Save & Publish Project"}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: EMAIL & SMTP ALERTS (DIRECT USER REQUESTED FEATURE) */}
        {activeTab === "email" && (
          <div className="space-y-8">
            <div className="p-6 rounded-3xl bg-[#080D0A] border border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/30 flex items-center justify-center text-[#B8FF00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Live Email Notifications (SMTP)</h3>
                  <p className="text-xs text-zinc-400">
                    Configure your email credentials so whenever a client submits a project proposal on CODUBE, you receive their message directly in your inbox.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Configuration Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSaveSmtp} className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-[#B8FF00]/30 space-y-5">
                  <h4 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
                    <span>SMTP Server Configuration</span>
                    <span className="text-[10px] font-mono text-[#B8FF00] px-2 py-0.5 rounded bg-[#B8FF00]/10 border border-[#B8FF00]/20">
                      GMAIL / ZOHO / CUSTOM
                    </span>
                  </h4>

                  {/* Recipient Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Inquiry Recipient Email (Where leads should be sent) *
                    </label>
                    <input
                      type="email"
                      required
                      value={smtpForm.recipientEmail}
                      onChange={(e) => setSmtpForm({ ...smtpForm, recipientEmail: e.target.value })}
                      placeholder="hello@codube.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                    />
                    <span className="text-[10px] text-zinc-500 mt-1 block">Default: hello@codube.com</span>
                  </div>

                  {/* Host & Port */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        SMTP Server Host
                      </label>
                      <input
                        type="text"
                        value={smtpForm.host}
                        onChange={(e) => setSmtpForm({ ...smtpForm, host: e.target.value })}
                        placeholder="smtp.gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Port
                      </label>
                      <input
                        type="number"
                        value={smtpForm.port}
                        onChange={(e) => setSmtpForm({ ...smtpForm, port: e.target.value })}
                        placeholder="587"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                      />
                    </div>
                  </div>

                  {/* Username (Email) */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      SMTP Username / Sender Email (e.g. Gmail address) *
                    </label>
                    <input
                      type="email"
                      value={smtpForm.user}
                      onChange={(e) => setSmtpForm({ ...smtpForm, user: e.target.value })}
                      placeholder="yourcompany@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                    />
                  </div>

                  {/* App Password */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      SMTP App Password (or regular password) *
                    </label>
                    <input
                      type="password"
                      value={smtpForm.pass}
                      onChange={(e) => setSmtpForm({ ...smtpForm, pass: e.target.value })}
                      placeholder="••••••••••••••••"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white focus:outline-none focus:border-[#B8FF00]"
                    />
                    <span className="text-[10px] text-zinc-500 mt-1 block">For Gmail: Use a 16-character Google App Password (not your normal password).</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black hover:bg-[#ccff00] hover:shadow-[0_0_20px_rgba(184,255,0,0.4)] transition-all"
                    >
                      <Save className="w-4 h-4 stroke-[2.5]" />
                      <span>Save Email Settings</span>
                    </button>

                    <button
                      type="button"
                      disabled={testEmailLoading || !smtpForm.user || !smtpForm.pass}
                      onClick={handleSendTestEmail}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 disabled:opacity-40 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{testEmailLoading ? "Testing Connection..." : "Send Test Email"}</span>
                    </button>
                  </div>

                  {testEmailResult && (
                    <div
                      className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                        testEmailResult.success
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                          : "bg-red-500/15 border border-red-500/30 text-red-400"
                      }`}
                    >
                      {testEmailResult.success ? (
                        <CheckCircle className="w-4 h-4 text-[#B8FF00] shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0" />
                      )}
                      <span>{testEmailResult.message}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Column: Gmail App Password Guide */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-3xl p-6 bg-[#080D0A] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B8FF00]">
                    <HelpCircle className="w-4 h-4" />
                    <span>HOW TO GET A GMAIL APP PASSWORD (60 SECONDS)</span>
                  </div>
                  <ol className="text-xs text-zinc-300 space-y-2 list-decimal list-inside leading-relaxed">
                    <li>Go to your Google Account (<a href="https://myaccount.google.com" target="_blank" className="text-[#B8FF00] underline">myaccount.google.com</a>).</li>
                    <li>Click <strong>Security</strong> on the left navigation bar.</li>
                    <li>Under &quot;How you sign in to Google&quot;, turn on <strong>2-Step Verification</strong>.</li>
                    <li>Search for <strong>App Passwords</strong> in the top search bar.</li>
                    <li>Create an App Password named <strong>&quot;Codube Website&quot;</strong>.</li>
                    <li>Copy the 16-character generated password (e.g. <code className="text-[#B8FF00]">abcd efgh ijkl mnop</code>) and paste it into the field on the left!</li>
                  </ol>
                  <p className="text-[11px] text-zinc-500 pt-2 border-t border-white/5">
                    Once saved, every client inquiry from the Contact form will be delivered to your inbox immediately!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: IMAGES & BRAND MEDIA */}
        {activeTab === "images" && content && (
          <div className="space-y-8">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Brand Visuals &amp; Media</h3>
                <p className="text-xs text-zinc-400">
                  Upload company logo, founder profile photo, and core showcase graphics.
                </p>
              </div>
            </div>

            {/* Brand Logo Upload */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-[#B8FF00]/40 shadow-[0_10px_35px_rgba(184,255,0,0.12)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[11px] font-bold text-[#B8FF00] mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>BRAND IDENTITY</span>
                  </div>
                  <h3 className="text-lg font-black text-white">Brand Logo (Header, Footer &amp; Website)</h3>
                  <p className="text-xs text-zinc-400">
                    Upload your real company logo (PNG, SVG, WebP, or JPG with transparent background recommended).
                  </p>
                </div>

                {content?.general?.customLogo && (
                  <button
                    type="button"
                    onClick={() =>
                      setContent({
                        ...content,
                        general: { ...content.general, customLogo: "" },
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/10 text-xs font-semibold text-zinc-400 hover:text-red-400 border border-white/10 hover:border-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Reset to 3D Cube Logo</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 h-36 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                  <div className="absolute top-2 left-3 text-[10px] font-mono text-zinc-500">
                    Live Navbar Preview:
                  </div>
                  {content?.general?.customLogo ? (
                    <div className="flex items-center gap-3">
                      <Image
                        src={content.general.customLogo}
                        alt="Brand Logo Preview"
                        width={140}
                        height={50}
                        unoptimized
                        className="max-h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(184,255,0,0.5)]"
                      />
                      <span className="text-lg font-black text-white">
                        {content.general?.siteName || "Codube."}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#B8FF00]/20 border border-[#B8FF00]/40 flex items-center justify-center text-[#B8FF00] font-mono font-bold">
                        3D
                      </div>
                      <span className="text-lg font-black text-white">
                        Codube<span className="text-[#B8FF00]">.</span>
                      </span>
                    </div>
                  )}
                  <span className="text-[10px] text-zinc-500 mt-2">
                    {content?.general?.customLogo ? "Custom Real Logo Active" : "Default 3D Isometric Cube Active"}
                  </span>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black cursor-pointer hover:bg-[#ccff00] hover:shadow-[0_0_15px_rgba(184,255,0,0.4)] transition-all">
                      <Upload className="w-4 h-4 stroke-[2.5]" />
                      <span>{uploadingKey === "logo" ? "Uploading & Auto-Saving..." : "Upload Logo File"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "logo")}
                        className="hidden"
                      />
                    </label>

                    <span className="text-xs text-zinc-400">or enter image path / URL:</span>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={content?.general?.customLogo || ""}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          general: { ...content.general, customLogo: e.target.value },
                        })
                      }
                      placeholder="/uploads/your_logo.png or https://example.com/logo.png"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#B8FF00]"
                    />
                    <button
                      type="button"
                      onClick={handleSaveContent}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#B8FF00] hover:text-black text-xs font-bold text-white transition-all shrink-0"
                    >
                      Apply &amp; Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Profile Photo Upload */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-[#B8FF00]/30 shadow-[0_10px_35px_rgba(184,255,0,0.1)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/30 text-[11px] font-bold text-[#B8FF00] mb-1.5">
                    <Trophy className="w-3 h-3" />
                    <span>FOUNDER SPOTLIGHT</span>
                  </div>
                  <h3 className="text-lg font-black text-white">Founder Profile Photo (Abhishek Jain)</h3>
                  <p className="text-xs text-zinc-400">
                    Displayed prominently in the Founder Section celebrating your 1st rank coding hackathon wins.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 h-56 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center p-2 relative overflow-hidden">
                  {(content?.founder?.photo || content?.founder?.image) ? (
                    <Image
                      src={content.founder.photo || content.founder.image}
                      alt="Abhishek Jain"
                      fill
                      unoptimized
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center text-xs text-zinc-500">
                      No Photo Uploaded
                    </div>
                  )}
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#B8FF00] text-black cursor-pointer hover:bg-[#ccff00] hover:shadow-[0_0_15px_rgba(184,255,0,0.4)] transition-all">
                      <Upload className="w-4 h-4 stroke-[2.5]" />
                      <span>{uploadingKey === "founder" ? "Uploading & Auto-Saving..." : "Upload Profile Photo"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "founder")}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={content?.founder?.photo || content?.founder?.image || ""}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          founder: {
                            ...content.founder,
                            photo: e.target.value,
                            image: e.target.value,
                          },
                        })
                      }
                      placeholder="/uploads/your_photo.jpg"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#B8FF00]"
                    />
                    <button
                      type="button"
                      onClick={handleSaveContent}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#B8FF00] hover:text-black text-xs font-bold text-white transition-all shrink-0"
                    >
                      Apply &amp; Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HEADLINES & TEXT */}
        {activeTab === "content" && content && (
          <div className="space-y-8">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4">
                Hero Section Headlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Badge
                  </label>
                  <input
                    type="text"
                    value={content.hero?.badge || ""}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, badge: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Headline Highlight Word
                  </label>
                  <input
                    type="text"
                    value={content.hero?.titleHighlight || ""}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, titleHighlight: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.hero?.subtitle || ""}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      hero: { ...content.hero, subtitle: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                />
              </div>
            </div>

            {/* Founder Text */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#080D0A] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4">
                Founder Bio &amp; Achievements (Abhishek Jain)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Founder Name
                  </label>
                  <input
                    type="text"
                    value={content.founder?.name || ""}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        founder: { ...content.founder, name: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Badge
                  </label>
                  <input
                    type="text"
                    value={content.founder?.badge || ""}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        founder: { ...content.founder, badge: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={content.founder?.bio || ""}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      founder: { ...content.founder, bio: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CLIENT INQUIRIES & LEADS */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Client Proposal Requests</h3>
                <p className="text-xs text-zinc-400">
                  Every inquiry submitted from the Contact page is recorded here and dispatched to hello@codube.com.
                </p>
              </div>

              <button
                type="button"
                onClick={exportLeadsToCsv}
                disabled={!leads.length}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#B8FF00] text-black disabled:opacity-50"
              >
                Export to CSV ({leads.length})
              </button>
            </div>

            {leads.length === 0 ? (
              <div className="rounded-2xl p-12 text-center text-zinc-500 text-xs bg-[#080D0A] border border-white/10">
                No inquiries received yet. They will appear here once visitors fill out the Contact form.
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((ld) => (
                  <div
                    key={ld.id}
                    className="rounded-2xl p-6 bg-[#080D0A] border border-white/10 space-y-4 hover:border-[#B8FF00]/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-bold text-white">{ld.name}</span>
                        <span className="text-xs text-zinc-400">{ld.email}</span>
                        {ld.phone && (
                          <span className="text-xs font-mono text-[#B8FF00]">{ld.phone}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-zinc-500">
                          {new Date(ld.createdAt).toLocaleString()}
                        </span>
                        <select
                          value={ld.status}
                          onChange={(e) => handleUpdateLeadStatus(ld.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                            ld.status === "new"
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : ld.status === "contacted"
                              ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                              : "bg-zinc-500/10 border-zinc-500/30 text-zinc-400"
                          }`}
                        >
                          <option value="new" className="bg-[#0c120e] text-white">New</option>
                          <option value="contacted" className="bg-[#0c120e] text-white">Contacted</option>
                          <option value="closed" className="bg-[#0c120e] text-white">Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      <div>
                        <strong>Service:</strong> {ld.service}
                      </div>
                      <div>
                        <strong>Budget:</strong> {ld.budget}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed">
                      {ld.message}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={`mailto:${ld.email}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8FF00] hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Reply via Email</span>
                      </a>

                      {ld.phone && (
                        <a
                          href={`https://wa.me/${ld.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Message on WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
