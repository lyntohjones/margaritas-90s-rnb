export type PartnerPath = {
  slug: string;
  title: string;
  audience: string;
  description: string;
  points: string[];
};

export const partnerPaths: PartnerPath[] = [
  {
    slug: "venues",
    title: "Venues",
    audience: "Upscale cafés, cocktail lounges, and lounge bars",
    description:
      "Bring a recurring, highly shareable night to your space with a built-in audience and signature drink integration.",
    points: [
      "Recurring event format",
      "Signature drink integration",
      "Seasonal editions",
      "Date-night and social positioning",
    ],
  },
  {
    slug: "promoters",
    title: "Promoters",
    audience: "Independent event promoters",
    description:
      "Co-produce editions of Margaritas & 90s R&B in new cities and venues under a shared, established brand system.",
    points: [
      "Established brand and visual system",
      "Flexible edition formats",
      "Co-branded promotion opportunities",
      "Culture-first storytelling",
    ],
  },
  {
    slug: "creators",
    title: "Creators + Influencers",
    audience: "Influencers, creators, and content partners",
    description:
      "Cover a night built for content — from arrival to karaoke moments — with a highly shareable visual identity.",
    points: [
      "Highly shareable visual identity",
      "Content opportunities across the night",
      "Culture-first storytelling",
      "Co-branded promotion opportunities",
    ],
  },
];
