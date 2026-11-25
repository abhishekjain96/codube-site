import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/data/seoData";
import { FREE_TOOLS } from "@/data/toolsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codube.com";
  const now = new Date();

  // Core static marketing and main portal routes
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/scantaker`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/medlearnings`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 20 Free AI & Developer Tools URLs
  const toolRoutes: MetadataRoute.Sitemap = FREE_TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 1,792 Programmatic High-Intent SEO URLs
  const allSlugs = getAllSeoSlugs();
  const programmaticSeoRoutes: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug.includes("jaipur") || slug.includes("dubai") || slug.includes("bangalore") || slug.includes("new-york")
      ? 0.85
      : 0.8,
  }));

  return [...coreRoutes, ...toolRoutes, ...programmaticSeoRoutes];
}
