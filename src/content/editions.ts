export type Edition = {
  slug: string;
  name: string;
  description: string;
};

export const editions: Edition[] = [
  {
    slug: "original",
    name: "Original Edition",
    description: "The core night — slow jams, signature drinks, and good company.",
  },
  {
    slug: "karaoke",
    name: "Karaoke Edition",
    description: "Sing your favorite 90s and early-2000s R&B with the crowd.",
  },
  {
    slug: "date-night",
    name: "Date Night Edition",
    description: "A relaxed, upscale night out built for two.",
  },
  {
    slug: "seasonal",
    name: "Seasonal Edition",
    description: "A rotating seasonal take on the night, from patio pours to holiday takeovers.",
  },
];

/** Held in the content system for future use; not shown as a homepage card by default. */
export const girlsNightEdition: Edition = {
  slug: "girls-night",
  name: "Girls Night Edition",
  description: "A night out built for the friend group.",
};
