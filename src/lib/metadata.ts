import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const socialDescription = `${siteConfig.tagline} ${siteConfig.description}`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brand} — ${siteConfig.tagline}`,
  description: socialDescription,
  openGraph: {
    title: siteConfig.brand,
    description: socialDescription,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brand,
    description: socialDescription,
  },
};
