# Remaining Browser QA

Automated checks (`npm run lint`, `npm run typecheck`, `npm test -- --run`,
`npm run build`) all pass as of this writing. This document covers the
manual/visual browser QA that still needs a real browser environment —
responsive layout, keyboard navigation, focus states, and reduced motion —
which was spot-checked via automated DOM/console/network inspection during
development but has not had a full human visual pass at every breakpoint.

Run `npm run dev` and use the steps below against `http://localhost:3000`
(or the Playwright/DevTools automation in the last section, which can run
this checklist without a human driving the browser).

## Homepage — `/`

Check at each width: **375px, 430px, 768px, 1024px, 1440px**.

At every width, verify:

- [ ] No horizontal scrollbar / no horizontal overflow on `<body>`.
- [ ] Mobile navigation: below 720px, the "Menu" toggle button appears, the
      nav list is hidden until toggled, and clicking/tapping it shows the
      five nav links stacked vertically without overlapping the header CTAs.
- [ ] Hero: tagline and copy remain readable (no text overflow/clipping),
      the CTA buttons wrap onto a second line cleanly on narrow widths
      instead of overflowing, and the hero collage placeholder resizes
      without distortion.
- [ ] Typography: heading sizes scale down smoothly (they use `clamp()`),
      no heading wraps to an awkward single orphan word if avoidable.
- [ ] Cards: edition cards (4), drink cards (5), gallery cards (5), and
      partner-path cards (3) each reflow to fewer columns (1 or 2) below
      1024px without cards touching or clipping their text.
- [ ] CTA spacing: `.hero__ctas`, `.event-actions`, and `.partnership-ctas`
      keep at least 8–12px of gap between buttons at every width, with no
      buttons touching the viewport edge.
- [ ] Image cropping: with placeholders in place today, confirm the
      `.hero__collage` and `.gallery-card` boxes keep their aspect ratio
      (4:5) rather than stretching. Re-check this specifically once real
      images from `docs/ASSET_REQUIREMENTS.md` are added, using the
      "object-position guidance" in that doc.
- [ ] Footer: the three footer regions (brand mark, links, copyright) wrap
      onto separate lines below ~600px without overlapping.
- [ ] Newsletter section: the dark `.newsletter` panel keeps readable
      contrast for its input placeholder and note text at every width.

## `/partners`

Check at **375px** and **1440px**.

- [ ] The three partner-path cards (Venues, Promoters, Creators +
      Influencers) stack to one column at 375px and reflow to a 3-column
      grid at 1440px without clipping the bullet list under each card.
- [ ] The audience-profile and content-opportunity bullet lists remain
      readable at both widths (no overflow).
- [ ] The inquiry form's Name/Email/Message fields stack correctly at
      375px and the submit button never sits partially off-screen.

## `/venues`

Check at **375px** and **1440px**.

- [ ] All four bullet-list sections (venue fit, format, benefits, next
      steps) remain readable with no overflow at both widths.
- [ ] The final "Bring Margaritas & 90s R&B to Your Venue" CTA stays fully
      visible and tappable at 375px.

## Cross-cutting checks (all three routes)

- [ ] **Keyboard navigation:** Tab from the top of the page through the
      skip link, logo, nav links, header CTAs, and into each section's
      interactive elements (cards are not focusable — only real links,
      buttons, and form fields should receive focus). Confirm the tab
      order matches visual/reading order.
- [ ] **Focus states:** Every focused link, button, and form field shows
      the visible focus ring defined by `:focus-visible` in `globals.css`
      (a two-layer outline in cream + charcoal) — nothing relies on the
      browser's invisible default outline being removed without a
      replacement.
- [ ] **Form labels:** Every input/textarea has a visible, associated
      `<label>` (newsletter email; partner name, email, message) — confirm
      via the accessibility tree, not just visual proximity.
- [ ] **Alt text:** Any `<img>` added per `docs/ASSET_REQUIREMENTS.md` has
      the exact alt text specified there; purely decorative SVGs
      (`DecorativeCollage`) stay `aria-hidden="true"`.
- [ ] **Contrast:** Spot-check body text (`--charcoal` on `--cream`/
      `--surface`) and the newsletter panel (`--cream` on `--charcoal`)
      with a contrast checker — both should clear WCAG AA for normal text.
- [ ] **Reduced motion:** With the OS/browser "reduce motion" preference
      enabled, confirm `.reveal` sections render fully visible immediately
      (no fade/rise), the artist strip does not animate, and `html`
      scroll-behavior is not smooth.
- [ ] **All internal links:** header logo → `/`; nav "Partners" → `/partners`;
      nav "Next Event" → `#next-event`; footer "Partners"/"Venues" →
      `/partners` / `/venues`; "Download Partnership Deck" and
      "Start a Conversation" → `/partners` and `/partners#contact`.
      Confirm none 404 and hash links land on the correct section.
- [ ] **All CTAs:** "Get Tickets", "Explore the Vibe", "Partner With Us",
      "Next Event", "Download Partnership Deck", "Start a Conversation",
      "Bring Margaritas & 90s R&B to Your Venue", and both newsletter/
      partner form submit buttons are all present, clickable, and (for the
      forms) show the honest "connection is being prepared" note rather
      than a fake success state, since no endpoint is configured yet.

## Automated steps for another environment (Playwright)

Run these in an environment with a browser available — they cover the
checklist above without a human driving the browser. Assumes the dev
server is already running (`npm run dev`, default `http://localhost:3000`).

```js
// qa.spec.ts — adapt to your Playwright test runner of choice
import { test, expect, devices } from "@playwright/test";

const routes = ["/", "/partners", "/venues"];
const widths = [375, 430, 768, 1024, 1440];

for (const route of routes) {
  for (const width of widths) {
    test(`${route} @ ${width}px has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`http://localhost:3000${route}`);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasOverflow).toBe(false);
    });
  }
}

test("keyboard navigation reaches every header control", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const order: string[] = [];
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    const active = await page.evaluate(() => document.activeElement?.textContent?.trim());
    order.push(active ?? "");
  }
  expect(order.join(" ")).toContain("Skip to content");
});

test("reduced motion disables reveal animation", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/");
  const opacity = await page.locator(".reveal").first().evaluate(
    (el) => getComputedStyle(el).opacity
  );
  expect(opacity).toBe("1");
  await context.close();
});

test("newsletter form shows honest pending state, not fake success", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel(/email/i).first().fill("guest@example.com");
  await page.getByRole("button", { name: /keep me posted/i }).click();
  await expect(page.getByText(/connection is being prepared/i)).toBeVisible();
});

test("mobile viewport shows the nav toggle instead of the full nav", async ({ browser }) => {
  const context = await browser.newContext({ ...devices["iPhone 13"] });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("button", { name: /menu/i })).toBeVisible();
  await expect(page.getByRole("navigation")).toBeHidden();
  await context.close();
});
```

## Automated steps for another environment (Chrome DevTools MCP)

If using an MCP-driven Chrome DevTools session instead of Playwright:

1. `new_page` → navigate to `http://localhost:3000/`.
2. `resize_page` to each width in turn (375, 430, 768, 1024, 1440) and
   `take_screenshot` at each to visually confirm against the checklist
   above; `take_snapshot` to get the accessibility tree and confirm
   landmark roles (`banner`, `navigation`, `main`, `contentinfo`) and that
   the mobile nav toggle has `aria-expanded`/`aria-controls`.
3. `list_console_messages` after each navigation/resize to confirm zero
   errors or warnings.
4. `evaluate_script` with
   `document.documentElement.scrollWidth > document.documentElement.clientWidth`
   at each width to confirm no horizontal overflow (should return `false`).
5. Repeat steps 1–4 for `/partners` (375px, 1440px) and `/venues`
   (375px, 1440px).
6. `click` through the header, then `press_key` "Tab" repeatedly from the
   top of the page to confirm focus order and that `take_screenshot` shows
   a visible focus ring at each stop.
7. `fill` the newsletter email field and `click` "Keep Me Posted"; confirm
   via `take_snapshot`/`take_screenshot` that the "connection is being
   prepared" note appears instead of a fake success message.
8. `performance_start_trace` / `performance_stop_trace` (optional) on `/`
   at 375px and 1440px if a Core Web Vitals check is also wanted.

## Fabricated-claims check

Also re-run this whenever content changes:

```bash
grep -RInE "2\.5X|85%|4\.8|10K\+|revenue lift|sell out|sold out" src || true
```

Expected: no matches.
