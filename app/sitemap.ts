import type { MetadataRoute } from "next";
import { allPages, siteUrl } from "@/lib/kolss-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date("2026-05-20"),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
