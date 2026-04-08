import type { Metadata } from "next";

/** Shared strings for layout + route-level metadata (use as pattern for new pages). */
export const SITE_NAME = "Align 360";
export const SITE_TITLE = "Align 360 | Fitness & Wellness Studio in Pune";
export const SITE_DESCRIPTION =
  "Where strength meets stillness. Transform your body, master your mind, and thrive at Align 360 — Pune's holistic fitness & wellness studio in Viman Nagar.";
export const SITE_KEYWORDS = [
  "fitness studio Pune",
  "wellness studio Pune",
  "gym Viman Nagar",
  "yoga classes Pune",
  "personal training Pune",
  "strength training Pune",
  "holistic wellness",
  "fitness center Viman Nagar",
  "mind body fitness",
  "Align 360",
  "align360",
  "fitness classes Pune",
  "wellness programs Pune",
];

/** Homepage: export from `app/page.tsx`; new routes should export their own `metadata` or `generateMetadata`. */
export const homePageMetadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

/** Optional social / GBP URLs for ExerciseGym JSON-LD (`sameAs`). Comma-separated in env. */
export function getSchemaSameAs(): string[] {
  const raw = process.env.NEXT_PUBLIC_SCHEMA_SAME_AS;
  if (!raw?.trim()) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
