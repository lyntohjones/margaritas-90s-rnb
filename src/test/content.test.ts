import { describe, expect, it } from "vitest";
import { nextEvent } from "@/content/events";
import { drinks } from "@/content/drinks";
import { editions } from "@/content/editions";
import { partnerPaths } from "@/content/partners";
import { buildGoogleCalendarUrl } from "@/lib/calendar";

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
});
