import { describe, expect, it } from "vitest";
import { nextEvent } from "@/content/events";
import { drinks } from "@/content/drinks";
import { editions } from "@/content/editions";
import { partnerPaths } from "@/content/partners";
import { siteConfig } from "@/content/site";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { buildEventJsonLd, formatEventDate } from "@/lib/event";

describe("content model", () => {
  it("keeps the next event unconfirmed until real event data is supplied", () => {
    expect(nextEvent.confirmed).toBe(false);
    expect(nextEvent.dateISO).toBeUndefined();
    expect(nextEvent.venue).toBeUndefined();
    expect(nextEvent.ticketUrl).toBeUndefined();
  });

  it("contains a zero-proof drink option", () => {
    expect(drinks.some((drink) => drink.zeroProof)).toBe(true);
  });

  it("keeps the core editions available", () => {
    expect(editions.map((edition) => edition.name)).toContain("Original Edition");
  });

  it("keeps the three partner paths", () => {
    expect(partnerPaths.map((path) => path.title)).toEqual([
      "Venues",
      "Promoters",
      "Creators + Influencers",
    ]);
  });

  it("routes homepage section links back to the homepage", () => {
    const homepageLinks = siteConfig.nav.filter((item) => item.href.includes("#"));
    expect(homepageLinks.every((item) => item.href.startsWith("/#"))).toBe(true);
    expect(siteConfig.primaryCta.href).toBe("/#next-event");
  });

  it("does not build a calendar link for an unconfirmed event", () => {
    expect(buildGoogleCalendarUrl(nextEvent)).toBeNull();
  });

  it("builds an encoded calendar link once an event is confirmed", () => {
    const confirmedEvent = {
      brand: "Margaritas & 90s R&B",
      confirmed: true,
      title: "Original Edition",
      dateISO: "2026-10-17T20:00:00-04:00",
      endDateISO: "2026-10-18T01:00:00-04:00",
      city: "Toronto",
      venue: "Venue to be announced",
      doors: "8 PM",
      music: "90s + early 2000s R&B",
    };

    const url = buildGoogleCalendarUrl(confirmedEvent);
    expect(url).toContain("calendar.google.com");
    expect(url).toContain("Margaritas%20%26%2090s%20R%26B");
  });

  it("preserves the event's calendar date across server timezones", () => {
    expect(formatEventDate("2026-10-17T20:00:00-04:00")).toBe("Saturday, October 17, 2026");
  });

  it("emits structured event data only for confirmed events", () => {
    expect(buildEventJsonLd(nextEvent)).toBeNull();

    const confirmedEvent = {
      brand: "Margaritas & 90s R&B",
      confirmed: true,
      title: "Original Edition",
      dateISO: "2026-10-17T20:00:00-04:00",
      endDateISO: "2026-10-18T01:00:00-04:00",
      city: "Toronto",
      venue: "Sample Venue",
      ticketUrl: "https://tickets.example.com/event",
    };

    const jsonLd = buildEventJsonLd(confirmedEvent);
    expect(jsonLd).toMatchObject({
      "@type": "Event",
      startDate: "2026-10-17T20:00:00-04:00",
      location: { name: "Sample Venue" },
    });
  });
});
