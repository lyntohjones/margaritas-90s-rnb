# Margaritas & 90s R&B

Responsive public website and partnership landing pages for the independent
recurring event brand "Margaritas & 90s R&B" — Next.js App Router + TypeScript,
static-first content, deployment-ready for Vercel.

- Design spec: `docs/superpowers/specs/2026-08-25-margaritas-90s-rnb-website-design.md`
- Implementation plan: `docs/superpowers/plans/2026-08-25-margaritas-90s-rnb-website.md`
- Asset generation spec: `docs/ASSET_REQUIREMENTS.md`
- Remaining browser QA: `docs/QA_REMAINING.md`

## Local setup

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm test -- --run
npm run build
```

## Updating content

All editable content lives under `src/content/*` — change data there, not
inside components or pages.

- **Next event:** `src/content/events.ts`. This is the single source of
  truth for the next event. Leave `confirmed: false` (and every other field
  empty) until a real date, venue, and ticket link exist — the site shows a
  "NEXT DATE COMING SOON" state automatically. Once a real event is booked,
  fill in `title`, `dateISO`, `endDateISO`, `city`, `venue`, `doors`,
  `music`, `ticketUrl`, `reservationUrl`, and set `confirmed: true`. The
  homepage's Next Event card, the "Add to Calendar" link, and the event
  structured data (JSON-LD) all key off this one object.
- **Editions:** `src/content/editions.ts`.
- **Signature drinks:** `src/content/drinks.ts`.
- **Partner paths:** `src/content/partners.ts`.
- **Brand copy and navigation:** `src/content/site.ts`.

## Forms

`src/components/shared/InquiryForm.tsx` powers both the newsletter and
partner-inquiry forms. Until `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` /
`NEXT_PUBLIC_PARTNER_ENDPOINT` are set (see `.env.example`), submitting a
form does **not** pretend to succeed — it shows an honest "connection is
being prepared" message instead. Wire up a real endpoint and the form will
POST to it and show a real success/error state based on the response.

## Brand assets

`public/brand/` and `public/events/` are intentionally empty. The site
renders CSS/SVG placeholders everywhere a real asset would go and stays
fully functional without any files there. See `docs/ASSET_REQUIREMENTS.md`
for exact filenames, dimensions, crops, alt text, and ready-to-use AI image
prompts for every brand image, and `public/events/README.md` for the real
event-media naming convention (added only after a live event happens).

## No fabricated claims

Do not add invented dates, venues, ticket links, attendance numbers,
ratings, or "sold out" / revenue-lift style claims anywhere in this project.
`docs/QA_REMAINING.md` includes a grep check for this.

## Deploying to Vercel

1. Push this repository (or connect it) to Vercel.
2. Set the environment variables from `.env.example` in the Vercel project
   settings (`NEXT_PUBLIC_SITE_URL` at minimum).
3. Vercel will run `npm run build` automatically on every push.
