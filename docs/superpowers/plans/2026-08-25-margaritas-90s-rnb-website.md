# Margaritas & 90s R&B Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive, deployment-ready public website for the independent recurring event brand “Margaritas & 90s R&B,” with a relaxed editorial nightlife feel, event-first UX, partner and venue pitch routes, and a data-driven next-event system.

**Architecture:** Use Next.js App Router with TypeScript and static-first content. Keep brand content in focused `src/content/*` modules, page sections in reusable React components, and visual styling in a small global design-token system plus component-scoped CSS modules where needed. Use CSS transitions and a lightweight IntersectionObserver reveal component instead of a large animation dependency.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules/global CSS variables, Vitest, React Testing Library, jsdom, Vercel-ready deployment.

**Spec:** `docs/superpowers/specs/2026-08-25-margaritas-90s-rnb-website-design.md`

## Global Constraints

- Primary palette: Warm Cream `#F2E5CE`, Margarita Red `#EF3F23`, Charcoal `#202020`, Dusty Peach `#EAB29C`, Vintage Paper `#D7C5A4`, Muted Olive `#AAA681`.
- Keep the visual tone calm, premium, nostalgic, modern, and editorial.
- Do not overload each section with nostalgic graphics. Use one or two nostalgic elements per major section.
- No neon overload, generic nightclub styling, aggressive gradients, generic SaaS styling, bouncing buttons, autoplay audio, or aggressive parallax.
- Use the “Margaritas” script treatment as the expressive brand mark, mono/typewriter styling for labels, and a clean sans-serif for body copy.
- Respect `prefers-reduced-motion`.
- Retrospect90s00s is a featured cultural/media partner, not the owner of the event brand.
- Do not display fabricated performance metrics, ratings, revenue lifts, attendance claims, or conversion statistics.
- The next event must be updateable through one content file.
- Initial forms must never pretend data was saved if no backend integration exists.
- Do not commit proprietary font files or secrets.
- Deployment target: Vercel.

---

## File Structure

Create the following focused structure:

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    partners/
      page.tsx
    venues/
      page.tsx
  components/
    brand/
      BrandMark.tsx
      DecorativeCollage.tsx
      MonoTag.tsx
    layout/
      Header.tsx
      Footer.tsx
      SectionShell.tsx
    home/
      Hero.tsx
      VibeSection.tsx
      NextEventSection.tsx
      EditionsSection.tsx
      SoundSection.tsx
      DrinksSection.tsx
      GallerySection.tsx
      PartnershipSection.tsx
      CulturalPartnerSection.tsx
      NewsletterSection.tsx
    partners/
      PartnerPathCard.tsx
    shared/
      CTAButton.tsx
      Reveal.tsx
      InquiryForm.tsx
  content/
    site.ts
    events.ts
    editions.ts
    drinks.ts
    partners.ts
  lib/
    calendar.ts
    metadata.ts
  test/
    setup.ts
    content.test.ts
    home.test.tsx
    routes.test.tsx
    forms.test.tsx
public/
  brand/
    README.md
  events/
    README.md
vitest.config.ts
package.json
tsconfig.json
next.config.ts
README.md
.env.example
```

Responsibilities:
- `src/content/*`: editable brand, event, drink, edition, and partner data only.
- `src/components/home/*`: one component per homepage section.
- `src/components/layout/*`: shared site chrome.
- `src/components/brand/*`: logo treatment and nostalgic visual primitives.
- `src/components/shared/*`: reusable CTA, reveal, and forms.
- `src/lib/*`: pure helpers only.
- `src/app/*`: route composition and metadata, no large inline UI implementations.

---

### Task 1: Scaffold the Next.js app and testing foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/page.tsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: runnable Next.js App Router project
- Produces: `npm test`, `npm run typecheck`, `npm run build`

- [ ] **Step 1: Write the failing smoke test**

Create `src/test/home.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the brand name", () => {
    render(<HomePage />);
    expect(screen.getByText(/Margaritas/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Add test configuration and run the failing test**

Use this `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Use this `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

Run:

```bash
npm test -- --run src/test/home.test.tsx
```

Expected: FAIL because `@/app/page` does not yet exist.

- [ ] **Step 3: Add the minimal project scaffold**

Use scripts in `package.json`:

```json
{
  "name": "margaritas-90s-rnb",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.4.1",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.0",
    "vite": "^6.3.0",
    "vitest": "^3.1.0"
  }
}
```

Use this minimal `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return <main>Margaritas & 90s R&B</main>;
}
```

Use this minimal `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Margaritas & 90s R&B",
  description: "Cocktails. Slow jams. Good vibes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Run test and typecheck**

```bash
npm test -- --run src/test/home.test.tsx
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.ts vitest.config.ts src .gitignore
git commit -m "chore: scaffold Margaritas website"
```

---

### Task 2: Create the editable content model and next-event data system

**Files:**
- Create: `src/content/site.ts`
- Create: `src/content/events.ts`
- Create: `src/content/editions.ts`
- Create: `src/content/drinks.ts`
- Create: `src/content/partners.ts`
- Create: `src/lib/calendar.ts`
- Create: `src/test/content.test.ts`

**Interfaces:**
- Produces: `siteConfig`
- Produces: `nextEvent`
- Produces: `editions`
- Produces: `drinks`
- Produces: `partnerPaths`
- Produces: `buildGoogleCalendarUrl(event: EventDetails): string`

- [ ] **Step 1: Write failing content tests**

```ts
import { describe, expect, it } from "vitest";
import { nextEvent } from "@/content/events";
import { drinks } from "@/content/drinks";
import { buildGoogleCalendarUrl } from "@/lib/calendar";

describe("content model", () => {
  it("keeps the next event in one object", () => {
    expect(nextEvent.title).toBe("Original Edition");
    expect(nextEvent.city).toBe("Toronto");
  });

  it("contains a zero-proof drink option", () => {
    expect(drinks.some((drink) => drink.zeroProof)).toBe(true);
  });

  it("builds an encoded calendar link", () => {
    const url = buildGoogleCalendarUrl(nextEvent);
    expect(url).toContain("calendar.google.com");
    expect(url).toContain("Margaritas%20%26%2090s%20R%26B");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --run src/test/content.test.ts
```

Expected: FAIL because modules do not exist.

- [ ] **Step 3: Implement typed content modules**

Use an explicit event type in `src/content/events.ts`:

```ts
export type EventDetails = {
  brand: string;
  title: string;
  dateISO: string;
  endDateISO: string;
  city: string;
  venue: string;
  doors: string;
  music: string;
  ticketUrl: string;
  reservationUrl: string;
};

export const nextEvent: EventDetails = {
  brand: "Margaritas & 90s R&B",
  title: "Original Edition",
  dateISO: "2026-10-17T20:00:00-04:00",
  endDateISO: "2026-10-18T01:00:00-04:00",
  city: "Toronto",
  venue: "Venue to be announced",
  doors: "8 PM",
  music: "90s + early 2000s R&B",
  ticketUrl: "#newsletter",
  reservationUrl: "#newsletter",
};
```

The date is a visible launch placeholder and must be clearly labeled as upcoming sample content in the page until replaced with a confirmed event.

Use `src/content/drinks.ts`:

```ts
export type Drink = {
  number: string;
  name: string;
  description: string;
  zeroProof?: boolean;
};

export const drinks: Drink[] = [
  { number: "01", name: "Classic Margarita", description: "Bright citrus, balanced sweetness, clean finish." },
  { number: "02", name: "Strawberry Margarita", description: "Fresh berry, lime, and a smooth finish." },
  { number: "03", name: "Spicy Mango", description: "Tropical mango with a gentle heat." },
  { number: "04", name: "Seasonal Pour", description: "A rotating seasonal feature for each edition." },
  { number: "00", name: "Zero-Proof Pour", description: "A spirit-free option built with the same care.", zeroProof: true },
];
```

Use `src/lib/calendar.ts`:

```ts
import type { EventDetails } from "@/content/events";

function compact(dateISO: string) {
  return new Date(dateISO).toISOString().replace(/[-:]/g, "").replace(/\.000/, "");
}

export function buildGoogleCalendarUrl(event: EventDetails) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.brand,
    dates: `${compact(event.dateISO)}/${compact(event.endDateISO)}`,
    details: `${event.title} · ${event.music}`,
    location: `${event.venue}, ${event.city}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
```

Create the other content modules with the exact approved concepts and no invented metrics.

- [ ] **Step 4: Run tests**

```bash
npm test -- --run src/test/content.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content src/lib src/test/content.test.ts
git commit -m "feat: add editable brand and event content"
```

---

### Task 3: Build the visual design system and shared layout primitives

**Files:**
- Modify: `src/app/globals.css`
- Create: `src/components/brand/BrandMark.tsx`
- Create: `src/components/brand/MonoTag.tsx`
- Create: `src/components/brand/DecorativeCollage.tsx`
- Create: `src/components/layout/Header.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/SectionShell.tsx`
- Create: `src/components/shared/CTAButton.tsx`
- Modify: `src/test/home.test.tsx`

**Interfaces:**
- Produces: `<BrandMark compact?: boolean />`
- Produces: `<MonoTag>{children}</MonoTag>`
- Produces: `<SectionShell id eyebrow title children />`
- Produces: `<CTAButton href variant>`

- [ ] **Step 1: Add failing layout assertions**

Add to `src/test/home.test.tsx`:

```tsx
it("shows the main navigation and brand tagline", () => {
  render(<HomePage />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByText(/Cocktails\. Slow Jams\. Good Vibes\./i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --run src/test/home.test.tsx
```

Expected: FAIL because navigation and tagline are not present.

- [ ] **Step 3: Add design tokens and shared components**

Start `globals.css` with exact variables:

```css
:root {
  --cream: #f2e5ce;
  --red: #ef3f23;
  --charcoal: #202020;
  --peach: #eab29c;
  --paper: #d7c5a4;
  --olive: #aaa681;
  --ink-soft: #5f5a52;
  --line: rgba(32, 32, 32, 0.16);
  --max: 1200px;
  --radius: 22px;
  --shadow: 0 18px 60px rgba(32, 32, 32, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--charcoal);
  background: var(--cream);
  font-family: Arial, Helvetica, sans-serif;
  background-image:
    radial-gradient(rgba(32, 32, 32, 0.035) 0.8px, transparent 0.8px);
  background-size: 5px 5px;
}

a { color: inherit; }
```

`BrandMark.tsx` should render text, not a proprietary font file:

```tsx
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "brand-mark brand-mark--compact" : "brand-mark"} aria-label="Margaritas & 90s R&B">
      <span className="brand-mark__script">Margaritas</span>
      <span className="brand-mark__sub">& 90s R&B</span>
    </div>
  );
}
```

Implement the script look in CSS using a safe cursive fallback for now, designed to be replaced by a supplied licensed brand asset later.

- [ ] **Step 4: Compose Header and Footer around the homepage**

Use navigation links:

```ts
[
  ["Experience", "#experience"],
  ["Editions", "#editions"],
  ["Gallery", "#gallery"],
  ["Partners", "/partners"],
  ["Next Event", "#next-event"],
]
```

Use `Partner With Us` as the secondary CTA and `Next Event` as the persistent primary CTA.

- [ ] **Step 5: Run tests**

```bash
npm test -- --run src/test/home.test.tsx
npm run typecheck
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app src/components src/test/home.test.tsx
git commit -m "feat: add brand design system and layout"
```

---

### Task 4: Build the full event-first homepage

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/VibeSection.tsx`
- Create: `src/components/home/NextEventSection.tsx`
- Create: `src/components/home/EditionsSection.tsx`
- Create: `src/components/home/SoundSection.tsx`
- Create: `src/components/home/DrinksSection.tsx`
- Create: `src/components/home/GallerySection.tsx`
- Create: `src/components/home/PartnershipSection.tsx`
- Create: `src/components/home/CulturalPartnerSection.tsx`
- Create: `src/components/home/NewsletterSection.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/test/home.test.tsx`

**Interfaces:**
- Consumes: all `src/content/*` modules
- Produces: complete homepage with section IDs `experience`, `next-event`, `editions`, `sound`, `drinks`, `gallery`, `partners`, `newsletter`

- [ ] **Step 1: Add failing homepage content test**

```tsx
it("renders the full approved homepage flow", () => {
  render(<HomePage />);
  expect(screen.getByText(/Not a club night\. A night out\./i)).toBeInTheDocument();
  expect(screen.getByText(/Original Edition/i)).toBeInTheDocument();
  expect(screen.getByText(/Classic Margarita/i)).toBeInTheDocument();
  expect(screen.getByText(/Featured Cultural Partner/i)).toBeInTheDocument();
  expect(screen.getByText(/Don’t miss the next pour/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm test -- --run src/test/home.test.tsx
```

Expected: FAIL with missing section copy.

- [ ] **Step 3: Implement the Hero and Vibe sections**

Hero required copy:

```text
Cocktails. Slow Jams. Good Vibes.
An elevated social night built around timeless R&B, signature drinks, good company, and the kind of nights you want to replay.
```

Vibe heading:

```text
Not a club night. A night out.
```

Vibe pillars:

```text
Slow Jams
Signature Drinks
Good Company
```

Use `DecorativeCollage` only in Hero, keeping the rest of the section restrained.

- [ ] **Step 4: Implement Next Event from `nextEvent`**

Render event information from the single object only. Include:
- Edition
- Date
- Venue
- City
- Doors
- Music
- Get Tickets
- Reservations
- Add to Calendar

When the venue value equals `Venue to be announced`, visibly label the event as preview/sample content rather than confirmed venue information.

- [ ] **Step 5: Implement Editions, Sound, Drinks, Gallery, Partnerships, Cultural Partner, Newsletter**

Sound artist list comes from content and should move through CSS overflow/scroll treatment, with no audio playback.

Gallery before real photography must use branded graphic cards such as:
- Arrival
- The Pour
- The Sound
- Karaoke Moment
- Date Night

Do not fake crowd photography or captions claiming prior attendance.

Cultural partner copy must read as a partnership, never ownership.

- [ ] **Step 6: Run tests and typecheck**

```bash
npm test -- --run src/test/home.test.tsx
npm run typecheck
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/components/home src/app/page.tsx src/test/home.test.tsx
git commit -m "feat: build event-first homepage"
```

---

### Task 5: Build dedicated partner and venue pitch routes

**Files:**
- Create: `src/app/partners/page.tsx`
- Create: `src/app/venues/page.tsx`
- Create: `src/components/partners/PartnerPathCard.tsx`
- Create: `src/test/routes.test.tsx`

**Interfaces:**
- Produces: `/partners`
- Produces: `/venues`
- Consumes: `partnerPaths` and approved venue-fit messaging

- [ ] **Step 1: Write failing route tests**

```tsx
import { render, screen } from "@testing-library/react";
import PartnersPage from "@/app/partners/page";
import VenuesPage from "@/app/venues/page";

it("explains creator, promoter, and influencer paths", () => {
  render(<PartnersPage />);
  expect(screen.getByText(/Creators \+ Influencers/i)).toBeInTheDocument();
  expect(screen.getByText(/Promoters/i)).toBeInTheDocument();
});

it("explains the ideal venue fit without fake metrics", () => {
  render(<VenuesPage />);
  expect(screen.getByText(/Upscale café/i)).toBeInTheDocument();
  expect(screen.queryByText(/2\.5X|85%|4\.8/i)).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run tests to verify failure**

```bash
npm test -- --run src/test/routes.test.tsx
```

Expected: FAIL because routes do not exist.

- [ ] **Step 3: Implement `/partners`**

Include sections:
- Partnership Opportunities
- Creators + Influencers
- Promoters
- Content Opportunities
- Audience profile
- Partnership deck CTA
- Start a Conversation CTA

Use qualitative claims only:
- Highly shareable visual identity
- Recurring event format
- Culture-first storytelling
- Co-branded promotion opportunities

- [ ] **Step 4: Implement `/venues`**

Include:
- Ideal venue fit
- Upscale café, cocktail lounge, lounge bar
- 75 to 200 guest early-edition fit as a planning preference, not a performance claim
- Beverage and signature drink integration
- Date-night and social positioning
- Recurring cadence
- Flexible editions
- CTA: Bring Margaritas & 90s R&B to Your Venue

- [ ] **Step 5: Run route tests and typecheck**

```bash
npm test -- --run src/test/routes.test.tsx
npm run typecheck
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/app/partners src/app/venues src/components/partners src/test/routes.test.tsx
git commit -m "feat: add partner and venue pitch routes"
```

---

### Task 6: Add honest inquiry and newsletter forms

**Files:**
- Create: `src/components/shared/InquiryForm.tsx`
- Modify: `src/components/home/NewsletterSection.tsx`
- Create: `src/test/forms.test.tsx`
- Create: `.env.example`

**Interfaces:**
- Produces: `<InquiryForm kind="newsletter" | "partner" />`
- Reads optional `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`
- Reads optional `NEXT_PUBLIC_PARTNER_ENDPOINT`

- [ ] **Step 1: Write failing form test**

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { InquiryForm } from "@/components/shared/InquiryForm";

it("does not fake submission when no endpoint is configured", () => {
  render(<InquiryForm kind="newsletter" />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "guest@example.com" } });
  fireEvent.click(screen.getByRole("button", { name: /keep me posted/i }));
  expect(screen.getByText(/signup connection is being prepared/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify failure**

```bash
npm test -- --run src/test/forms.test.tsx
```

Expected: FAIL because `InquiryForm` does not exist.

- [ ] **Step 3: Implement the form with explicit integration state**

When no endpoint exists, prevent submission and show:

```text
Signup connection is being prepared. Please use the partner contact link for now.
```

Do not show “Success,” “Joined,” or “Message sent” without a real 2xx response from a configured endpoint.

- [ ] **Step 4: Add `.env.example`**

```dotenv
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_TICKET_URL=
NEXT_PUBLIC_NEWSLETTER_ENDPOINT=
NEXT_PUBLIC_PARTNER_ENDPOINT=
```

- [ ] **Step 5: Run test**

```bash
npm test -- --run src/test/forms.test.tsx
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/shared src/components/home/NewsletterSection.tsx src/test/forms.test.tsx .env.example
git commit -m "feat: add honest signup and inquiry forms"
```

---

### Task 7: Add subtle motion, reduced-motion support, metadata, and event schema

**Files:**
- Create: `src/components/shared/Reveal.tsx`
- Create: `src/lib/metadata.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `src/test/home.test.tsx`

**Interfaces:**
- Produces: `<Reveal as?: "div" | "section" className?: string>`
- Produces: `siteMetadata`
- Produces: JSON-LD only when event data is marked confirmed

- [ ] **Step 1: Add failing metadata test**

Add:

```tsx
import { metadata } from "@/app/layout";

it("defines useful social metadata", () => {
  expect(metadata.title).toBeTruthy();
  expect(metadata.description).toMatch(/slow jams/i);
  expect(metadata.openGraph).toBeTruthy();
});
```

- [ ] **Step 2: Run test to verify failure**

```bash
npm test -- --run src/test/home.test.tsx
```

Expected: FAIL because Open Graph metadata is missing.

- [ ] **Step 3: Implement `Reveal` using IntersectionObserver**

Client component behavior:
- Add `data-revealed="true"` once intersecting
- Do not continuously toggle after reveal
- If IntersectionObserver is unavailable, reveal immediately

CSS requirements:

```css
.reveal { opacity: 0; transform: translateY(14px); transition: opacity 600ms ease, transform 600ms ease; }
.reveal[data-revealed="true"] { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
  .sound-track { animation: none !important; }
}
```

- [ ] **Step 4: Add metadata**

Use `NEXT_PUBLIC_SITE_URL` with a safe fallback for canonical metadata. Add:
- title
- description
- Open Graph title, description, type `website`
- social image path `/brand/social-preview.jpg` only after a real file exists, otherwise omit image rather than reference a broken asset

Event JSON-LD must only render when an explicit `confirmed: true` flag is added to `nextEvent`. Keep the initial sample event unconfirmed.

- [ ] **Step 5: Run tests and build**

```bash
npm test -- --run src/test/home.test.tsx
npm run typecheck
npm run build
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/shared/Reveal.tsx src/lib src/app src/test/home.test.tsx
git commit -m "feat: add subtle motion and social metadata"
```

---

### Task 8: Add asset handoff docs, README, responsive QA, and production verification

**Files:**
- Create: `public/brand/README.md`
- Create: `public/events/README.md`
- Create: `README.md`
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: clear brand-asset replacement instructions
- Produces: developer setup and event-update instructions

- [ ] **Step 1: Add asset handoff documentation**

`public/brand/README.md` must list expected optional files:

```text
brand-mark.svg
margarita-cutout.webp
cassette.webp
halftone.svg
barcode.svg
retrospect90s00s.svg
social-preview.jpg
```

State that the site must remain functional if these assets are absent.

`public/events/README.md` must explain the gallery naming convention:

```text
YYYY-MM-DD-edition-01.webp
YYYY-MM-DD-edition-02.webp
```

- [ ] **Step 2: Write the project README**

README must include:
- Local setup
- `npm install`
- `npm run dev`
- `npm test -- --run`
- `npm run typecheck`
- `npm run build`
- Where to update the next event: `src/content/events.ts`
- Where to update editions and drinks
- How forms behave without endpoints
- How to deploy to Vercel
- Rule: no fabricated metrics

- [ ] **Step 3: Run responsive QA manually**

Check these viewport widths in browser dev tools:
- 375px
- 768px
- 1024px
- 1440px

Verify:
- Header does not overflow
- Hero remains readable
- Next Event card stacks cleanly
- Edition cards remain usable
- Artist strip does not force page width overflow
- Partner CTA remains visible
- Footer stays readable

Fix issues in `globals.css` using media queries at sensible breakpoints, favoring fluid layout over device-specific hacks.

- [ ] **Step 4: Run full verification**

```bash
npm test -- --run
npm run typecheck
npm run build
```

Expected:
- All tests PASS
- TypeScript exits 0
- Next.js production build exits 0

- [ ] **Step 5: Inspect for prohibited claims**

Run:

```bash
grep -RInE "2\.5X|85%|4\.8|10K\+|revenue lift|sell out|sold out" src || true
```

Expected: no fabricated metric or outcome claims.

- [ ] **Step 6: Commit**

```bash
git add README.md public src/app/globals.css
git commit -m "docs: finalize website handoff and production checks"
```

---

## Final Acceptance Checklist

- [ ] Homepage feels like the approved flyer family, not a generic template.
- [ ] The first screen explains the event quickly.
- [ ] The site uses the approved palette and restrained nostalgia system.
- [ ] `src/content/events.ts` is the single source for the next event.
- [ ] `/partners` and `/venues` exist and are easy to reach.
- [ ] Retrospect90s00s is presented as Featured Cultural Partner.
- [ ] No fabricated performance metrics appear anywhere.
- [ ] Newsletter and inquiry forms do not fake persistence.
- [ ] Reduced-motion users receive a stable, non-animated experience.
- [ ] Mobile, tablet, and desktop layouts are intentional.
- [ ] Tests, typecheck, and production build all pass.
- [ ] README explains event updates, asset replacement, and Vercel deployment.
