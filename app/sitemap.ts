import type { MetadataRoute } from "next";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priority: Record<string, number> = {
    "/": 1,
    "/book": 0.9,
    "/services": 0.9,
    "/contact": 0.8,
    "/testimonials": 0.7,
    "/about": 0.6,
    "/gallery": 0.6,
  };

  return NAV_ITEMS.map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/testimonials" ? "weekly" : "monthly",
    priority: priority[item.href] ?? 0.6,
  }));
}
