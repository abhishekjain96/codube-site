import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/data/seoData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codube.io";
  const now = new Date();

  // Core static marketing and tools routes
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/ai-geo-generator`,
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

  // 560 Programmatic High-Intent SEO URLs
  const allSlugs = getAllSeoSlugs();
  const programmaticSeoRoutes: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug.includes("jaipur") || slug.includes("dubai") || slug.includes("bangalore") || slug.includes("new-york")
      ? 0.85
      : 0.8,
  }));

  return [...coreRoutes, ...programmaticSeoRoutes];
}
