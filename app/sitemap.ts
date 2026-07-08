import type { MetadataRoute } from "next";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

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

  const navRoutes: MetadataRoute.Sitemap = NAV_ITEMS.map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/testimonials" ? "weekly" : "monthly",
    priority: priority[item.href] ?? 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = ["/privacy", "/terms"].map((href) => ({
    url: `${SITE.url}${href}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...navRoutes, ...blogRoutes, ...legalRoutes];
}
