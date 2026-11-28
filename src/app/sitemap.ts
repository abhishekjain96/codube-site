import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/data/seoData";
import { FREE_TOOLS } from "@/data/toolsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.codube.com";
  const lastModDate = new Date("2026-11-28");

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastModDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-automation`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-software`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/saas-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/scantaker`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/work/medlearnings`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = FREE_TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.id}`,
    lastModified: lastModDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const allSlugs = getAllSeoSlugs();
  const programmaticSeoRoutes: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: lastModDate,
    changeFrequency: "weekly",
    priority:
      slug.includes("jaipur") ||
      slug.includes("dubai") ||
      slug.includes("bangalore") ||
      slug.includes("new-york")
        ? 0.85
        : 0.8,
  }));

  return [...coreRoutes, ...toolRoutes, ...programmaticSeoRoutes];
}
