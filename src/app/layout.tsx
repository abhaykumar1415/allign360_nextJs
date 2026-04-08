import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  getSchemaSameAs,
} from "@/lib/site-seo";
import { siteFaqs } from "@/data/faqs";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const siteUrl = getSiteUrl();

const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerify = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
const verificationMeta =
  googleVerify || bingVerify
    ? {
        ...(googleVerify && { google: googleVerify }),
        ...(bingVerify && { other: { "msvalidate.01": bingVerify } }),
      }
    : undefined;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Align 360", url: siteUrl }],
  creator: "Align 360",
  publisher: "Align 360",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  ...(verificationMeta && { verification: verificationMeta }),
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "health, fitness, wellness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const schemaSameAs = getSchemaSameAs();

// When you have verifiable aggregate reviews (e.g. from GBP), add to ExerciseGym:
// aggregateRating: {
//   "@type": "AggregateRating",
//   ratingValue: "4.8",
//   reviewCount: "120",
//   bestRating: "5",
//   worstRating: "1",
// },

const gymJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${siteUrl}/#gym`,
  name: "Align 360 Fitness & Wellness",
  alternateName: ["Align360", "Align 360 Viman Nagar"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.jpg`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/opengraph-image`,
  description:
    "Align 360 is a holistic fitness & wellness studio in Viman Nagar, Pune — offering yoga, strength training, and personalized wellness coaching.",
  telephone: "+91-7066951515",
  email: "hello@align360.fit",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Second Floor, Town Square Building, Shopping Center, 204, above Dorabjee's, Viman Nagar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5679,
    longitude: 73.9143,
  },
  hasMap: "https://maps.google.com/?q=Align+360+Viman+Nagar+Pune",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  ...(schemaSameAs.length > 0 ? { sameAs: schemaSameAs } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Align 360",
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${siteUrl}/#gym` },
  inLanguage: "en-IN",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} h-full`}>
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
