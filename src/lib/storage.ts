import fs from "fs";
import path from "path";
import os from "os";
import defaultContent from "@/data/siteContent.json";

declare global {
  var __CODUBE_SITE_CONTENT__: any;
  var __CODUBE_LEADS__: any[];
}

const localContentPath = path.join(process.cwd(), "src", "data", "siteContent.json");
const altContentPath = path.join(process.cwd(), "data", "siteContent.json");
const tmpContentPath = path.join(os.tmpdir(), "codube_siteContent.json");

const localLeadsPath = path.join(process.cwd(), "src", "data", "leads.json");
const tmpLeadsPath = path.join(os.tmpdir(), "codube_leads.json");

export function getSiteContent() {
  // 1. In-memory hot cache
  if (globalThis.__CODUBE_SITE_CONTENT__) {
    return globalThis.__CODUBE_SITE_CONTENT__;
  }

  // 2. Writable tmpdir cache (used in serverless/Vercel)
  try {
    if (fs.existsSync(tmpContentPath)) {
      const data = fs.readFileSync(tmpContentPath, "utf8");
      const parsed = JSON.parse(data);
      globalThis.__CODUBE_SITE_CONTENT__ = parsed;
      return parsed;
    }
  } catch (err) {
    // ignore
  }

  // 3. Local source path
  try {
    if (fs.existsSync(localContentPath)) {
      const data = fs.readFileSync(localContentPath, "utf8");
      const parsed = JSON.parse(data);
      globalThis.__CODUBE_SITE_CONTENT__ = parsed;
      return parsed;
    }
  } catch (err) {
    // ignore
  }

  // 4. Standalone output path
  try {
    if (fs.existsSync(altContentPath)) {
      const data = fs.readFileSync(altContentPath, "utf8");
      const parsed = JSON.parse(data);
      globalThis.__CODUBE_SITE_CONTENT__ = parsed;
      return parsed;
    }
  } catch (err) {
    // ignore
  }

  // 5. Fallback to bundled json
  globalThis.__CODUBE_SITE_CONTENT__ = defaultContent;
  return defaultContent;
}

export function saveSiteContent(newContent: any) {
  if (!newContent || typeof newContent !== "object") {
    return false;
  }

  // 1. Always update in-memory global state
  globalThis.__CODUBE_SITE_CONTENT__ = newContent;

  // 2. Try writing to local project source file (works in local dev & VPS)
  try {
    const dir = path.dirname(localContentPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localContentPath, JSON.stringify(newContent, null, 2), "utf8");
  } catch (err) {
    // Expected on Vercel / serverless read-only filesystem
    console.warn("Notice: Local filesystem is read-only. Persisting to tmp/memory:", err);
  }

  // 3. Try writing to os.tmpdir() (always writable in Vercel & AWS Lambda)
  try {
    fs.writeFileSync(tmpContentPath, JSON.stringify(newContent, null, 2), "utf8");
  } catch (err) {
    console.warn("Notice: Tmpdir write failed:", err);
  }

  // 4. Return true because memory cache is active and/or tmp written!
  return true;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  createdAt: string;
  status: "new" | "contacted" | "closed";
}

export function getLeads(): Lead[] {
  if (globalThis.__CODUBE_LEADS__ && Array.isArray(globalThis.__CODUBE_LEADS__)) {
    return globalThis.__CODUBE_LEADS__;
  }

  // Check tmpdir first
  try {
    if (fs.existsSync(tmpLeadsPath)) {
      const data = fs.readFileSync(tmpLeadsPath, "utf8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        globalThis.__CODUBE_LEADS__ = parsed;
        return parsed;
      }
    }
  } catch (e) {}

  // Check local file
  try {
    if (fs.existsSync(localLeadsPath)) {
      const data = fs.readFileSync(localLeadsPath, "utf8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        globalThis.__CODUBE_LEADS__ = parsed;
        return parsed;
      }
    }
  } catch (e) {}

  return [];
}

export function saveLeads(leads: Lead[]): boolean {
  globalThis.__CODUBE_LEADS__ = leads;

  try {
    const dir = path.dirname(localLeadsPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(localLeadsPath, JSON.stringify(leads, null, 2), "utf8");
  } catch (e) {}

  try {
    fs.writeFileSync(tmpLeadsPath, JSON.stringify(leads, null, 2), "utf8");
  } catch (e) {}

  return true;
}

export function addLead(lead: Omit<Lead, "id" | "createdAt" | "status">): Lead {
  const currentLeads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  currentLeads.unshift(newLead);
  saveLeads(currentLeads);
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead["status"]) {
  const currentLeads = getLeads();
  const updated = currentLeads.map((l) => (l.id === id ? { ...l, status } : l));
  saveLeads(updated);
  return true;
}
