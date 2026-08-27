# Brand Image Asset Requirements

This document specifies every brand image the public site currently expects,
so photography/generation work can happen independently of the codebase.

**Current state:** none of these files exist yet. Every component that will
eventually use one of these images currently renders a CSS/SVG placeholder
instead (see `public/brand/README.md`), so the site stays fully functional
and passes `npm run build` with zero image assets. Drop a finished file at
the exact path below and wire it into the named component to replace its
placeholder — no other code changes are required.

## Approved style system

Use this direction for every image on this list unless a specific entry
overrides it.

**Palette**

| Name | Hex |
|---|---|
| Warm Cream | `#F2E5CE` |
| Margarita Red | `#EF3F23` |
| Charcoal | `#202020` |
| Dusty Peach | `#EAB29C` |
| Vintage Paper | `#D7C5A4` |
| Muted Olive | `#AAA681` |

**Direction:** premium editorial, relaxed upscale nostalgia, vintage printed
paper texture, grayscale central subject, cut-paper collage construction,
subtle halftone, restrained red accents (Margarita Red used sparingly, as a
single accent shape or line — never as a wash or background fill), large
negative space, minimal 90s R&B references (a hint, not a theme park).

**Avoid everywhere:** neon nightclub styling, fake crowds, fake venue
photos, fake testimonials, fake social proof, AI-generated text inside the
image, generic club flyer look, overloaded cassette/music-note graphics,
readable logos of real third-party brands, any real person's likeness used
without consent.

## How to read each entry

Every entry below lists: exact filename, exact path, width, height, aspect
ratio, format, max file size, transparency, alt text, the component that
will consume it, desktop crop, mobile crop, object-position guidance, art
direction, negative constraints, and a full copy-ready AI image prompt.

---

### 1. Hero drink image

- **Filename:** `hero-drink.webp`
- **Path:** `public/brand/hero-drink.webp`
- **Width × Height:** 1600 × 2000 px (deliver at this size; source/master at 3200 × 4000 px)
- **Aspect ratio:** 4:5 (portrait)
- **Format:** WEBP
- **Max file size:** 350 KB
- **Transparency:** No (opaque background — vintage paper texture fills the frame)
- **Alt text:** "A grayscale cut-paper illustration of a classic margarita glass on a vintage paper background."
- **Component using it:** `src/components/brand/DecorativeCollage.tsx`, rendered inside `src/components/home/Hero.tsx` (`.hero__collage`) — replaces the current inline SVG glass glyph.
- **Desktop crop:** Full 4:5 frame, glass centered horizontally, base of the glass sitting in the lower third so the rim/garnish has headroom above.
- **Mobile crop:** Same 4:5 frame (the layout keeps this ratio at all breakpoints; deliver one crop, not a second variant).
- **Object-position guidance:** `object-position: center 30%` — keep the glass rim and any garnish inside the top 60% of the frame so nothing critical is cropped when the container's height is constrained.
- **Art direction:** One grayscale margarita glass, cut-paper collage style, subtle drop shadow (paper-thickness, not a glow), one thin hand-drawn connector line, a small torn-paper edge on one corner only. Restrained Margarita Red accent as a single garnish detail (e.g., a red-rimmed salt line or a thin red line accent) — nothing else in the frame is red.
- **Negative constraints:** No liquid photorealism competing with the grayscale/collage treatment, no neon rim lighting, no bar/club background, no readable text or logos, no crowd or hands, no multiple glasses (exactly one).
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration of a single classic margarita glass, fully grayscale (no color in the glass or liquid), set against a warm vintage paper texture background (hex D7C5A4). Cut-paper layered construction with a soft paper-thickness drop shadow, one thin hand-drawn black connector line near the glass, a small torn-paper edge accent in one corner only. One restrained Margarita Red (hex EF3F23) accent detail only — a thin red rimmed-salt line or single red accent shape, nothing else colored. Large negative space around the subject, centered composition, subtle halftone texture in the background paper. Relaxed, upscale, nostalgic 90s-adjacent editorial mood — not a nightclub flyer. Portrait 4:5 frame. No text, no logos, no crowd, no neon, no glossy photorealistic liquid rendering.

---

### 2. Original Edition card image

- **Filename:** `edition-original.webp`
- **Path:** `public/brand/edition-original.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait)
- **Format:** WEBP
- **Max file size:** 150 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration representing the Original Edition — a margarita glass and a subtle vinyl record accent."
- **Component using it:** `src/components/home/EditionsSection.tsx` — the "Original Edition" card (`.edition-card`).
- **Desktop crop:** Full 4:5 frame, subject centered, roughly one card-width (≈280px rendered) — keep detail simple since it renders small.
- **Mobile crop:** Same 4:5 frame; on mobile the card is full-width and taller, so the subject can sit slightly higher in frame with more visible paper texture below.
- **Object-position guidance:** `object-position: center top`.
- **Art direction:** One grayscale margarita glass paired with one small vinyl-record silhouette (not a full turntable scene) as the single nostalgic accent. Cut-paper collage, subtle halftone, one thin connector line. No red accent required on this one (let the card's red mono-tag label carry the color).
- **Negative constraints:** No cassette-and-CD-and-vinyl pile (one nostalgic object only), no crowd, no neon, no readable text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration for "Original Edition": one grayscale margarita glass paired with a single small vinyl-record silhouette as the only nostalgic accent, on a warm vintage paper background (hex D7C5A4), subtle halftone texture, one thin hand-drawn connector line linking the two shapes. Fully grayscale subject, no color except the paper's natural warm tone. Large negative space, restrained, upscale, editorial — not a party flyer. Portrait 4:5 frame. No text, no logos, no crowd, no neon, no multiple overlapping nostalgic objects.

---

### 3. Karaoke Edition card image

- **Filename:** `edition-karaoke.webp`
- **Path:** `public/brand/edition-karaoke.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait)
- **Format:** WEBP
- **Max file size:** 150 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of a single vintage microphone representing the Karaoke Edition."
- **Component using it:** `src/components/home/EditionsSection.tsx` — the "Karaoke Edition" card.
- **Desktop crop:** Full 4:5 frame, microphone centered, mic head in upper half.
- **Mobile crop:** Same 4:5 frame, same composition (renders full-width on mobile, so no separate crop needed).
- **Object-position guidance:** `object-position: center top`.
- **Art direction:** One grayscale vintage microphone silhouette, cut-paper collage, subtle halftone, one thin connector line trailing from the base like a cable. No red accent required.
- **Negative constraints:** No stage lighting, no crowd silhouettes, no karaoke screen/text-on-screen, no neon signage, no readable lyrics or text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration for "Karaoke Edition": one grayscale vintage microphone silhouette, centered, on a warm vintage paper background (hex D7C5A4), subtle halftone texture, one thin hand-drawn connector line trailing from the microphone base like a cable. Fully grayscale subject. Large negative space, restrained and upscale, not a stage or party-flyer scene. Portrait 4:5 frame. No text, no crowd, no stage lighting, no neon, no karaoke screen.

---

### 4. Date Night Edition card image

- **Filename:** `edition-date-night.webp`
- **Path:** `public/brand/edition-date-night.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait)
- **Format:** WEBP
- **Max file size:** 150 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of a margarita glass and a rose representing the Date Night Edition."
- **Component using it:** `src/components/home/EditionsSection.tsx` — the "Date Night Edition" card.
- **Desktop crop:** Full 4:5 frame, glass centered, rose placed lower-left.
- **Mobile crop:** Same 4:5 frame, same composition.
- **Object-position guidance:** `object-position: center 40%`.
- **Art direction:** One grayscale margarita glass paired with one grayscale rose as the single romantic accent, cut-paper collage, subtle halftone, one thin connector line. Restrained Margarita Red accent as a single small paint-stroke or ribbon detail only.
- **Negative constraints:** No couple/faces/hands, no candlelight cliché, no hearts, no readable text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration for "Date Night Edition": one grayscale margarita glass paired with one grayscale rose, centered, on a warm vintage paper background (hex D7C5A4), subtle halftone texture, one thin hand-drawn connector line, one small Margarita Red (hex EF3F23) accent stroke. Fully grayscale subject except that one red accent. Large negative space, restrained and upscale, quietly romantic without clichés. Portrait 4:5 frame. No people, no hands, no faces, no hearts, no candlelight glow, no text.

---

### 5. Seasonal Edition card image

- **Filename:** `edition-seasonal.webp`
- **Path:** `public/brand/edition-seasonal.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait)
- **Format:** WEBP
- **Max file size:** 150 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of a margarita glass with a single seasonal leaf accent representing the Seasonal Edition."
- **Component using it:** `src/components/home/EditionsSection.tsx` — the "Seasonal Edition" card.
- **Desktop crop:** Full 4:5 frame, glass centered, leaf accent upper-right.
- **Mobile crop:** Same 4:5 frame, same composition.
- **Object-position guidance:** `object-position: center top`.
- **Art direction:** One grayscale margarita glass with one small seasonal accent (a single leaf or citrus slice silhouette — pick one, not both), cut-paper collage, subtle halftone. No red accent required.
- **Negative constraints:** No literal season icons (snowflakes, pumpkins, fireworks), no patio furniture, no crowd.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration for "Seasonal Edition": one grayscale margarita glass with a single small seasonal accent (one leaf silhouette OR one citrus-slice silhouette, not both), centered, on a warm vintage paper background (hex D7C5A4), subtle halftone texture, one thin hand-drawn connector line. Fully grayscale subject. Large negative space, restrained and upscale. Portrait 4:5 frame. No literal holiday icons, no patio furniture, no crowd, no text.

---

### 6. Classic Margarita drink image

- **Filename:** `drink-classic.webp`
- **Path:** `public/brand/drink-classic.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait — matches the edition card images above; supersedes an earlier 1:1 draft of this spec)
- **Format:** WEBP
- **Max file size:** 130 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of the Classic Margarita."
- **Component using it:** `src/components/home/DrinksSection.tsx` — the "01 Classic Margarita" card (`.drink-card__image`).
- **Desktop crop:** Full 4:5 frame, glass centered with even margin.
- **Mobile crop:** Same 4:5 frame (drink cards stack full-width but stay portrait, matching the edition cards).
- **Object-position guidance:** `object-position: center`.
- **Art direction:** One grayscale classic margarita glass (salt rim visible as texture, not color), cut-paper collage, subtle halftone, tight composition since it renders small (~200–260px wide).
- **Negative constraints:** No garnish overload, no bar background, no ice/condensation photorealism, no text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration of a single Classic Margarita glass with a visible salt rim (rendered as paper texture, not color), fully grayscale, centered on a warm vintage paper background (hex D7C5A4), subtle halftone texture. Simple, clean composition suited to a small card. Large even negative space around the glass. No color, no garnish clutter, no bar background, no condensation photorealism, no text. Portrait 4:5 frame.

---

### 7. Strawberry Margarita drink image

- **Filename:** `drink-strawberry.webp`
- **Path:** `public/brand/drink-strawberry.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait — matches the edition card images above; supersedes an earlier 1:1 draft of this spec)
- **Format:** WEBP
- **Max file size:** 130 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of the Strawberry Margarita with a strawberry garnish."
- **Component using it:** `src/components/home/DrinksSection.tsx` — the "02 Strawberry Margarita" card (`.drink-card__image`).
- **Desktop crop:** Full 4:5 frame, centered.
- **Mobile crop:** Same 4:5 frame.
- **Object-position guidance:** `object-position: center`.
- **Art direction:** One grayscale margarita glass with a strawberry garnish; exactly one Margarita Red accent shape may be used (a single silhouette slice or a single small dot of red — pick one), cut-paper collage, subtle halftone.
- **Negative constraints:** No full-color strawberry photorealism, no pink wash across the whole image, no text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration of a single Strawberry Margarita glass with a grayscale strawberry garnish, fully grayscale except for at most one small Margarita Red (hex EF3F23) accent shape. Centered on a warm vintage paper background (hex D7C5A4), subtle halftone texture. Large even negative space, simple composition suited to a small card. No pink or red wash across the whole image, no photorealistic color rendering, no text. Portrait 4:5 frame.

---

### 8. Spicy Mango drink image

- **Filename:** `drink-spicy-mango.webp`
- **Path:** `public/brand/drink-spicy-mango.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait — matches the edition card images above; supersedes an earlier 1:1 draft of this spec)
- **Format:** WEBP
- **Max file size:** 130 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of the Spicy Mango margarita with a mango and chili accent."
- **Component using it:** `src/components/home/DrinksSection.tsx` — the "03 Spicy Mango" card (`.drink-card__image`).
- **Desktop crop:** Full 4:5 frame, centered.
- **Mobile crop:** Same 4:5 frame.
- **Object-position guidance:** `object-position: center`.
- **Art direction:** One grayscale margarita glass with a mango and chili garnish; a Margarita Red accent (e.g. the chili) suggesting the heat. Cut-paper collage, subtle halftone.
- **Negative constraints:** No full-color mango/chili photorealism beyond the single red accent, no orange wash, no text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration of a single Spicy Mango margarita glass with grayscale mango-cube and chili garnish, mostly grayscale with a red chili accent (hex EF3F23) suggesting the heat. Centered on a warm vintage paper background (hex D7C5A4), subtle halftone texture. Large even negative space, simple composition suited to a small card. No orange wash across the whole image, no full-color photorealism, no text. Portrait 4:5 frame.

---

### 9. Seasonal Pour drink image

- **Filename:** `drink-seasonal.webp`
- **Path:** `public/brand/drink-seasonal.webp`
- **Width × Height:** 800 × 1000 px (master at 2000 × 2500 px)
- **Aspect ratio:** 4:5 (portrait — matches the edition card images above; supersedes an earlier 1:1 draft of this spec)
- **Format:** WEBP
- **Max file size:** 130 KB
- **Transparency:** No
- **Alt text:** "A grayscale cut-paper illustration of the rotating Seasonal Pour with a botanical garnish."
- **Component using it:** `src/components/home/DrinksSection.tsx` — the "04 Seasonal Pour" card (`.drink-card__image`).
- **Desktop crop:** Full 4:5 frame, centered.
- **Mobile crop:** Same 4:5 frame.
- **Object-position guidance:** `object-position: center`.
- **Art direction:** One grayscale margarita/coupe glass with one small, swappable botanical garnish (leaf or citrus, matching whichever is not used on the Seasonal Edition card to avoid repetition). Cut-paper collage, subtle halftone. No red accent required.
- **Negative constraints:** No literal holiday icons, no multiple garnishes, no text.
- **AI image prompt:**
  > Premium editorial cut-paper collage illustration of a single margarita/coupe glass representing a rotating "Seasonal Pour," fully grayscale, with one small botanical garnish (a leaf or a citrus slice). Centered on a warm vintage paper background (hex D7C5A4), subtle halftone texture. Large even negative space, simple composition suited to a small card. No holiday icons, no color, no text. Portrait 4:5 frame.

---

### 10. Social share image

- **Filename:** `social-share.webp`
- **Path:** `public/brand/social-share.webp`
- **Width × Height:** 1200 × 630 px
- **Aspect ratio:** 1.91:1 (standard Open Graph / Twitter card)
- **Format:** WEBP
- **Max file size:** 300 KB
- **Transparency:** No
- **Alt text:** "Margaritas & 90s R&B — Cocktails. Slow Jams. Good Vibes." (used as the `og:image`/`twitter:image` alt text, not rendered visibly on the page)
- **Component using it:** `src/lib/metadata.ts` — already wired via `assetExists()`: `openGraph.images` and `twitter.images` point at `/brand/social-share.webp` automatically once this file is present at that path; until then it stays omitted rather than referencing a missing asset.
- **Desktop crop / Mobile crop:** Single fixed crop — Open Graph/Twitter preview images are not responsive, so only one 1200×630 delivery is needed.
- **Object-position guidance:** Not applicable (fixed-crop preview image, not a responsive `<img>`).
- **Art direction:** Wordmark treatment ("Margaritas & 90s R&B" in the script/mono brand system) plus one grayscale margarita glass motif, on a Warm Cream background with a restrained Margarita Red accent. Must read clearly as a small thumbnail in a chat app or social feed — keep it simple, no dense collage.
- **Negative constraints:** No dense collage that disappears at thumbnail size, no fabricated ratings/quotes/stats, no crowd photo, no third-party logos.
- **AI image prompt:**
  > Premium editorial social-preview card, 1200×630. Warm Cream (hex F2E5CE) background. Large "Margaritas" in a red-orange handwritten script wordmark (hex EF3F23) with "& 90s R&B" beneath it in a black monospace/typewriter label. One simple grayscale cut-paper margarita glass illustration to one side, generous negative space, subtle halftone texture in the background only. Must stay legible at small thumbnail size — avoid dense detail. No crowd, no ratings, no quotes, no third-party logos, no gradient background.

---

## Real event media (not yet available)

**REAL EVENT MEDIA — ADD AFTER LIVE EVENT.** Do not generate, mock up, or
stand in for these with AI imagery or stock photography. These paths exist
in the codebase's plan as future homes for actual photography/video from a
real Margaritas & 90s R&B event, and must stay empty until then.

| Filename | Path | Intended use |
|---|---|---|
| `event-gallery-01.webp` | `public/events/event-gallery-01.webp` | Real "Arrival" moment — replaces the placeholder card in `src/components/home/GallerySection.tsx` |
| `event-gallery-02.webp` | `public/events/event-gallery-02.webp` | Real "The Pour" moment — same component |
| `event-gallery-03.webp` | `public/events/event-gallery-03.webp` | Real "The Sound" / karaoke moment — same component |
| `event-gallery-04.webp` | `public/events/event-gallery-04.webp` | Real "Date Night" moment — same component |
| `event-recap-01.mp4` | `public/events/event-recap-01.mp4` | Short real event recap clip — new addition to `GallerySection.tsx` once available |

Suggested delivery specs for whoever shoots/edits the real event (for
consistency once available, not a generation prompt): gallery stills at
1600×2000 (4:5, matching `.gallery-card`'s aspect ratio), WEBP, ~400 KB max
each; recap clip at 1920×1080 (16:9), MP4/H.264, reasonable web weight
(a few MB, not capped as strictly as stills since it is real footage).
Naming convention for any additional event photos beyond this initial batch
is documented in `public/events/README.md`.
