import type { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/seo-pages";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const slug of getAllSeoSlugs()) {
    pages.push({
      url: `${SITE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: slug === "hermetik-sofben-servisi" ? 0.9 : 0.8,
    });
  }

  return pages;
}
