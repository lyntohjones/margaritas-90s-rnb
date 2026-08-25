# Margaritas & 90s R&B Website Design

Date: 2026-08-25
Repository: `lyntohjones/margaritas-90s-rnb`
Status: Approved direction captured from the project conversation

## 1. Purpose

Build a polished, responsive public website for the independent recurring event brand “Margaritas & 90s R&B.” The site should feel relaxed, upscale, nostalgic, modern, and editorial. It should borrow the restraint and simple event-first structure of Shuffle Play Rewind while using the established Margaritas & 90s R&B visual system.

The public website must sell the feeling of the event first. It must also support venue, promoter, creator, and influencer outreach without turning the homepage into a corporate pitch deck.

## 2. Brand Positioning

“Margaritas & 90s R&B” is an independent recurring social experience built around timeless 90s and early-2000s R&B, signature drinks, good company, date-night energy, and upscale lounge environments.

Primary audience:
- Women 25 to 50
- Couples and date-night guests
- Friend groups
- Mature R&B and nostalgia audiences
- Young professionals and culture-focused guests

Featured cultural/media partner:
- Retrospect90s00s

Retrospect90s00s should appear as a featured cultural partner, not as the owner of the brand.

## 3. Core Experience

Primary event cadence:
- Seasonal recurring series
- Approximately every 6 to 8 weeks at launch
- Expand toward monthly only after demand becomes predictable

Preferred venue type:
- Upscale café
- Cocktail lounge
- Lounge bar
- Photo-friendly interior
- Strong beverage program
- Approximately 75 to 200 guests preferred for early editions

Core editions:
- Original Edition
- Karaoke Edition
- Date Night Edition
- Girls Night Edition
- Seasonal Patio Edition

## 4. Visual System

Primary palette:
- Warm Cream: `#F2E5CE`
- Margarita Red: `#EF3F23`
- Charcoal: `#202020`
- Dusty Peach: `#EAB29C`
- Vintage Paper: `#D7C5A4`
- Muted Olive: `#AAA681`

Usage target:
- About 70% cream
- About 15% charcoal
- About 10% Margarita Red
- About 5% dusty peach and supporting neutrals

Visual language:
- Warm paper textures
- Red-orange handwritten “Margaritas” wordmark treatment
- Black mono/typewriter labels for dates, editions, section labels, and microcopy
- Clean modern sans-serif for body copy
- Grayscale margarita cutouts
- Minimal cassette, CD, waveform, halftone, barcode, and torn-paper accents
- Thin hand-drawn connector lines
- Strong whitespace and editorial composition

Design restraint:
- Do not overload every section with nostalgic graphics
- Use one or two nostalgic elements per screen or major section
- Avoid neon overload, nightclub clichés, loud gradients, and generic SaaS styling
- Avoid dense pitch-deck styling on the public homepage

## 5. Motion Language

Motion should be subtle and relaxed.

Allowed:
- Gentle fade and rise on section entry
- Slow connector-line draw animation
- Small scroll-linked cassette rotation of only a few degrees
- Slow horizontal filmstrip movement
- Minor halftone drift
- Soft hover lifts on cards

Avoid:
- Bouncing buttons
- Aggressive parallax
- Flashing text
- Autoplay audio
- Rapid animation

Respect `prefers-reduced-motion` throughout.

## 6. Information Architecture

Primary navigation:
- Experience
- Editions
- Gallery
- Partners
- Next Event

Persistent primary CTA:
- Next Event

Secondary CTA:
- Partner With Us

Homepage sections:

### 6.1 Hero
- Brand logo/wordmark
- “& 90s R&B” secondary title
- Tagline: “Cocktails. Slow Jams. Good Vibes.”
- Short positioning copy
- Next event summary when event data exists
- Primary CTA: Get Tickets / Next Event
- Secondary CTA: Explore the Vibe
- One hero margarita collage with restrained nostalgic accents

### 6.2 The Vibe
Headline direction:
- “Not a club night. A night out.”

Three simple pillars:
- Slow Jams
- Signature Drinks
- Good Company

Use lifestyle imagery when real event photography is available.

### 6.3 Next Edition
Display only essential event information:
- Edition name
- Date
- Venue
- City
- Doors/time
- Music focus
- CTA buttons for tickets, reservations, and calendar

This section must be data-driven so future event updates require changing one content object rather than rewriting the page.

### 6.4 Choose Your Night
Four curated edition cards:
- Original
- Karaoke
- Date Night
- Seasonal

Girls Night remains available in the content system and can replace Seasonal when needed.

### 6.5 The Sound
- Minimal scrolling artist-name treatment
- No autoplay music
- Optional future playlist link
- Example artist set may include TLC, Aaliyah, SWV, Jodeci, Mary J. Blige, Usher, Brandy, Monica, 112, Maxwell, Jagged Edge, and Destiny’s Child

### 6.6 Signature Drinks
- 01 Classic Margarita
- 02 Strawberry Margarita
- 03 Spicy Mango
- 04 Seasonal Pour

Include a zero-proof option in event copy and venue-facing content.

### 6.7 Previous Nights
Working section title:
- “Last Pour”

Purpose:
- Real event recap proof
- Photography
- Short clips
- Crowd moments
- Venue moments
- Karaoke moments

Before real event assets exist, show tasteful branded placeholders, not fabricated performance claims.

### 6.8 Partner With Us
Three simple pathways:
- Venues
- Promoters
- Creators + Influencers

Primary partner CTA:
- Download Partnership Deck

Secondary partner CTA:
- Start a Conversation

### 6.9 Retrospect90s00s Partnership
Label:
- “Featured Cultural Partner”

Short copy explaining the cultural and promotional relationship without implying ownership.

### 6.10 Email Capture
Headline direction:
- “Don’t miss the next pour.”

Promise:
- Receive the next event date and ticket link

Keep the form minimal.

## 7. Partner Pages / Sections

The project should support dedicated partner-focused routes or anchored sections without forcing all business content onto the homepage.

Recommended routes:
- `/partners`
- `/venues`

### Partners page
Audience:
- Influencers
- Creators
- Promoters

Include:
- Why the concept works
- Audience profile
- Content opportunities
- Collaboration paths
- Deliverables
- Partnership deck CTA

### Venues page
Include:
- Ideal venue fit
- Event format
- Benefits to venue
- Recurring traffic opportunity
- Signature drink integration
- Seasonal editions
- Contact CTA

Do not include invented performance metrics.

## 8. Technical Architecture

Recommended stack:
- Next.js, current stable App Router
- TypeScript
- React Server Components by default
- Minimal Client Components only where interaction or animation requires them
- CSS Modules or a small global token system, avoid dependency-heavy styling
- Framer Motion only if needed for subtle motion, otherwise use CSS transitions and Intersection Observer
- Static-first content architecture

Content organization:
- `src/content/site.ts` for brand copy and navigation
- `src/content/events.ts` for next-event data
- `src/content/editions.ts` for recurring edition cards
- `src/content/drinks.ts` for signature drinks
- `src/content/partners.ts` for partner messaging

Component boundaries:
- Header
- Hero
- VibeSection
- NextEventSection
- EditionsSection
- SoundSection
- DrinksSection
- GallerySection
- PartnershipSection
- CulturalPartnerSection
- NewsletterSection
- Footer

Reusable primitives:
- SectionLabel
- MonoTag
- CTAButton
- CollageFrame
- EventMeta
- EditionCard
- DrinkCard

## 9. Assets

Initial implementation should support local brand assets under `public/brand/` and event imagery under `public/events/`.

Preferred assets:
- Primary script logo or wordmark image/SVG
- Margarita cutout
- Cassette graphic
- Halftone texture
- Barcode graphic
- Flyer thumbnails
- Partner logo assets

Until final assets are supplied, use lightweight CSS/SVG placeholder treatments that preserve layout and are easy to replace.

Do not commit proprietary font files.

## 10. Forms and Data Handling

Initial version:
- Newsletter form UI
- Partner inquiry form UI
- Clear integration points for future form provider or API

Do not fake successful backend persistence if no provider is configured.

Forms should show a clear “integration required” development state until a real endpoint is connected.

## 11. SEO and Sharing

Include:
- Page title and description
- Open Graph metadata
- Twitter/X card metadata
- Event structured data when a real date and venue are supplied
- Canonical URL configurable by environment
- Favicon / app icon placeholders
- Social share image placeholder

## 12. Accessibility

Requirements:
- Semantic headings
- Keyboard-accessible navigation
- Visible focus states
- Sufficient contrast
- Alt text for meaningful images
- Decorative graphics hidden from assistive technology
- Reduced-motion support
- Form labels and error messaging

## 13. Performance

Targets:
- Static-first rendering
- Next/Image for raster assets
- Avoid large animation libraries unless justified
- Avoid loading unnecessary fonts or video above the fold
- Lazy-load gallery media below the fold
- Keep hero usable before decorative assets finish loading

## 14. Testing

Required checks:
- TypeScript typecheck
- Production build
- Responsive layout at mobile, tablet, desktop widths
- Navigation and anchor behavior
- Buttons and links
- Reduced-motion mode
- Basic accessibility checks
- No invented data displayed as real metrics

## 15. Deployment

Project should be deployment-ready for Vercel.

Environment variables should support:
- Site URL
- Ticket link
- Partner inquiry destination
- Newsletter integration endpoint when added later

No production secrets committed to GitHub.

## 16. Pitch Deck Integration

The site will expose a “Download Partnership Deck” CTA.

The deck itself should use the same brand system and cover:
1. Brand / title
2. Concept
3. Audience
4. Experience
5. Editions
6. Venue value
7. Creator / influencer opportunities
8. Retrospect90s00s partnership
9. Partnership models
10. Contact / next steps

Only verified metrics should appear in the deck. Early versions should use qualitative value statements instead of fabricated event performance statistics.

## 17. Success Criteria

The first release is successful when:
- The site clearly feels like the approved flyer family
- It looks calm, premium, nostalgic, and modern
- Mobile and desktop layouts both feel intentional
- A guest understands the event within one screen
- A venue or promoter finds partnership information within two clicks
- The next event can be updated through one content file
- The site contains no fabricated performance claims
- The structure is ready for future photography, ticketing, email capture, and pitch deck assets without redesigning the whole project
