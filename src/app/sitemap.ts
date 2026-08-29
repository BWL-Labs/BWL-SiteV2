import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    // the home page, then the eight services, then the legal pages
    priority: r.path === "/" ? 1 : r.service ? 0.8 : 0.3,
  }));
}
