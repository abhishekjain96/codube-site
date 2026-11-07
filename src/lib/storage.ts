import fs from "fs";
import path from "path";

const contentFilePath = path.join(process.cwd(), "src", "data", "siteContent.json");
const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");

export function getSiteContent() {
  try {
    if (!fs.existsSync(contentFilePath)) {
      return null;
    }
    const data = fs.readFileSync(contentFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading site content:", error);
    return null;
  }
}

export function saveSiteContent(newContent: any) {
  try {
    fs.writeFileSync(contentFilePath, JSON.stringify(newContent, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error saving site content:", error);
    return false;
  }
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
  try {
    if (!fs.existsSync(leadsFilePath)) {
      return [];
    }
    const data = fs.readFileSync(leadsFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading leads:", error);
    return [];
  }
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
  fs.writeFileSync(leadsFilePath, JSON.stringify(currentLeads, null, 2), "utf8");
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead["status"]) {
  const currentLeads = getLeads();
  const updated = currentLeads.map((l) => (l.id === id ? { ...l, status } : l));
  fs.writeFileSync(leadsFilePath, JSON.stringify(updated, null, 2), "utf8");
  return true;
}
