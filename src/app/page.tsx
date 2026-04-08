import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { homePageMetadata } from "@/lib/site-seo";

/**
 * Route-level metadata for the homepage. New routes: export metadata or generateMetadata
 * from each page.tsx and register URLs in sitemap.ts.
 */
export const metadata: Metadata = homePageMetadata;

export default function Page() {
  return <HomePage />;
}
