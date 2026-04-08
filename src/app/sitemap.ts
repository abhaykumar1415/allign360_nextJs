import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Sitemap for discoverable URLs. When adding new app routes:
 * 1. Export metadata or generateMetadata from each page.tsx (title, description, canonical).
 * 2. Append entries below; use getCanonicalUrl from @/lib/site-url for path URLs.
 *    Google ignores URL fragments in sitemaps; hash entries here are optional hints.
 */
const LAST_UPDATED = new Date("2026-04-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: base,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/#about`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/#programs`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#wellness`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/#plans`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/#testimonials`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/#contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
