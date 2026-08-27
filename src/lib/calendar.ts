import type { EventDetails } from "@/content/events";

function compact(dateISO: string) {
  return new Date(dateISO).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

/**
 * Builds a "Add to Calendar" Google Calendar link. Returns `null` when the
 * event is not confirmed yet, since there is no real date to add.
 */
export function buildGoogleCalendarUrl(event: EventDetails): string | null {
  if (!event.confirmed || !event.dateISO || !event.endDateISO) {
    return null;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.brand,
    dates: `${compact(event.dateISO)}/${compact(event.endDateISO)}`,
    details: `${event.title ?? ""} ${event.music ? "· " + event.music : ""}`.trim(),
    location: [event.venue, event.city].filter(Boolean).join(", "),
  });

  return `https://calendar.google.com/calendar/render?${params.toString().replace(/\+/g, "%20")}`;
}
