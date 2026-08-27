/**
 * Central manifest for generated brand imagery. This is the single source
 * of truth for every brand image path, dimensions, and crop guidance — do
 * not hardcode `/brand/*.webp` paths anywhere else.
 *
 * None of these files are required to exist. Every component that reads
 * from this manifest checks `assetExists()` (see `src/lib/assetExists.ts`)
 * before rendering an `<Image>` and falls back to its existing CSS/SVG
 * placeholder when a file is missing, so the site stays fully functional
 * with any subset of this list present. See `docs/ASSET_REQUIREMENTS.md`
 * for the full generation spec (art direction, AI prompts) behind each
 * entry.
 */
export type BrandAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export type BrandAssetKey =
  | "heroDrink"
  | "editionOriginal"
  | "editionKaraoke"
  | "editionDateNight"
  | "editionSeasonal"
  | "drinkClassic"
  | "drinkStrawberry"
  | "drinkSpicyMango"
  | "drinkSeasonal"
  | "socialShare";

export const brandAssets: Record<BrandAssetKey, BrandAsset> = {
  heroDrink: {
    src: "/brand/hero-drink.webp",
    alt: "A grayscale cut-paper illustration of a classic margarita glass on a vintage paper background.",
    width: 1600,
    height: 2000,
    objectPosition: "center 30%",
  },
  editionOriginal: {
    src: "/brand/edition-original.webp",
    alt: "A grayscale cut-paper illustration of a margarita glass and a vinyl record representing the Original Edition.",
    width: 800,
    height: 1000,
    objectPosition: "center top",
  },
  editionKaraoke: {
    src: "/brand/edition-karaoke.webp",
    alt: "A grayscale cut-paper illustration of a vintage microphone representing the Karaoke Edition.",
    width: 800,
    height: 1000,
    objectPosition: "center top",
  },
  editionDateNight: {
    src: "/brand/edition-date-night.webp",
    alt: "A grayscale cut-paper illustration of a margarita glass and a rose representing the Date Night Edition.",
    width: 800,
    height: 1000,
    objectPosition: "center 40%",
  },
  editionSeasonal: {
    src: "/brand/edition-seasonal.webp",
    alt: "A grayscale cut-paper illustration of a margarita glass with a botanical accent representing the Seasonal Edition.",
    width: 800,
    height: 1000,
    objectPosition: "center top",
  },
  drinkClassic: {
    src: "/brand/drink-classic.webp",
    alt: "A grayscale cut-paper illustration of the Classic Margarita.",
    width: 800,
    height: 1000,
    objectPosition: "center",
  },
  drinkStrawberry: {
    src: "/brand/drink-strawberry.webp",
    alt: "A grayscale cut-paper illustration of the Strawberry Margarita with a strawberry garnish.",
    width: 800,
    height: 1000,
    objectPosition: "center",
  },
  drinkSpicyMango: {
    src: "/brand/drink-spicy-mango.webp",
    alt: "A grayscale cut-paper illustration of the Spicy Mango margarita with a mango and chili accent.",
    width: 800,
    height: 1000,
    objectPosition: "center",
  },
  drinkSeasonal: {
    src: "/brand/drink-seasonal.webp",
    alt: "A grayscale cut-paper illustration of the rotating Seasonal Pour with a botanical garnish.",
    width: 800,
    height: 1000,
    objectPosition: "center",
  },
  socialShare: {
    src: "/brand/social-share.webp",
    alt: "Margaritas & 90s R&B — Cocktails. Slow Jams. Good Vibes.",
    width: 1200,
    height: 630,
  },
};

/** Maps each edition slug to its manifest key, for lookups from content data. */
export const editionAssetKeys: Record<string, BrandAssetKey> = {
  original: "editionOriginal",
  karaoke: "editionKaraoke",
  "date-night": "editionDateNight",
  seasonal: "editionSeasonal",
};

/** Maps each drink number to its manifest key, for lookups from content data. */
export const drinkAssetKeys: Record<string, BrandAssetKey> = {
  "01": "drinkClassic",
  "02": "drinkStrawberry",
  "03": "drinkSpicyMango",
  "04": "drinkSeasonal",
};
