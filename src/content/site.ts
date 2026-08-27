export const siteConfig = {
  brand: "Margaritas & 90s R&B",
  tagline: "Cocktails. Slow Jams. Good Vibes.",
  description:
    "An elevated social night built around timeless R&B, signature drinks, good company, and the kind of nights you want to replay.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Editions", href: "#editions" },
    { label: "Gallery", href: "#gallery" },
    { label: "Partners", href: "/partners" },
    { label: "Next Event", href: "#next-event" },
  ],
  primaryCta: { label: "Next Event", href: "#next-event" },
  secondaryCta: { label: "Partner With Us", href: "/partners" },
  culturalPartner: {
    name: "Retrospect90s00s",
    label: "Featured Cultural Partner",
    description:
      "Retrospect90s00s brings 90s and early-2000s culture, nostalgia, and community to Margaritas & 90s R&B as a featured cultural and media partner — not the owner of the brand.",
  },
} as const;
