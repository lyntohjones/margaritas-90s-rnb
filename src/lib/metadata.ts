import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { brandAssets } from "@/content/assets";
import { assetExists } from "@/lib/assetExists";

// Falls back to a safe local default in development; production deploys
// must set NEXT_PUBLIC_SITE_URL (see .env.example) so canonical/OG URLs
// never point at localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production" ? "https://example.com" : "http://localhost:3000");

const socialDescription = `${siteConfig.tagline} ${siteConfig.description}`;

const socialShare = brandAssets.socialShare;
// Omit the OG/Twitter image entirely (rather than reference a missing
// file) until the real asset exists on disk.
const socialImage = assetExists(socialShare.src)
  ? [{ url: socialShare.src, width: socialShare.width, height: socialShare.height, alt: socialShare.alt }]
  : undefined;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.brand} — ${siteConfig.tagline}`,
  description: socialDescription,
  openGraph: {
    title: siteConfig.brand,
    description: socialDescription,
    type: "website",
    url: siteUrl,
    ...(socialImage ? { images: socialImage } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brand,
    description: socialDescription,
    ...(socialImage ? { images: socialImage.map((image) => image.url) } : {}),
  },
};
