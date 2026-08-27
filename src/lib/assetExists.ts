import fs from "node:fs";
import path from "node:path";

/**
 * Checks whether a file referenced by its `public/`-relative URL (e.g.
 * `/brand/hero-drink.webp`) actually exists on disk. Server-only (uses
 * `node:fs`) — call this from Server Components or other server-side code
 * only, never from a "use client" component.
 *
 * This is what makes every brand-image integration point gracefully fall
 * back to its existing CSS/SVG placeholder: nothing needs a code change
 * when a file is added or removed under `public/`.
 */
export function assetExists(publicRelativeSrc: string): boolean {
  try {
    const filePath = path.join(process.cwd(), "public", publicRelativeSrc.replace(/^\/+/, ""));
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}
