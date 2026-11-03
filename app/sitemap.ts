import type { MetadataRoute } from "next";
import { AUDIENCES, SERVICES, SITE } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...AUDIENCES.map((a) => ({
      url: `${SITE.url}/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
