import { MonoTag } from "@/components/brand/MonoTag";

/**
 * Lightweight placeholder for the hero collage. Renders an inline SVG
 * glass silhouette plus a mono tag instead of a real photo — safe to swap
 * for a licensed brand asset later (see public/brand/README.md and
 * docs/ASSET_REQUIREMENTS.md). Purely decorative, hidden from assistive
 * technology.
 *
 * Rendered inside the `.hero__collage` wrapper only when
 * `brandAssets.heroDrink` has no file on disk yet — see `Hero.tsx`, which
 * owns that wrapper and swaps this out for a real `next/image` once the
 * asset exists.
 */
export function DecorativeCollage() {
  return (
    <div aria-hidden="true">
      <svg
        className="hero__collage-glyph"
        width="1em"
        height="1em"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 22 L50 70 L80 22 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="3" />
        <line x1="36" y1="90" x2="64" y2="90" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="hero__collage-tag">
        <MonoTag>ORIGINAL EDITION</MonoTag>
      </span>
    </div>
  );
}
