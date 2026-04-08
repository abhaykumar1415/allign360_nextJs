/**
 * Canonical site origin for metadata, sitemap, robots, and JSON-LD.
 *
 * Priority: NEXT_PUBLIC_SITE_URL (production) > VERCEL_URL > NEXT_PUBLIC_VERCEL_URL > localhost.
 * Set NEXT_PUBLIC_SITE_URL on your production host (no trailing slash).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

/** Full URL for a path (leading slash optional). */
export function getCanonicalUrl(path: string = "/"): string {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * True when NEXT_PUBLIC_SITE_URL is set and not localhost.
 * Use to gate analytics; production should always set NEXT_PUBLIC_SITE_URL.
 */
export function isProduction(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SITE_URL &&
    !getSiteUrl().includes("localhost")
  );
}
