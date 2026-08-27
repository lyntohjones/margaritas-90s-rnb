import type { EventDetails } from "@/content/events";

export function formatEventDate(dateISO?: string) {
  if (!dateISO) return "";

  const [year, month, day] = dateISO.slice(0, 10).split("-").map(Number);
  if (!year || !month || !day) return "";

  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day, 12)));
}

export function buildEventJsonLd(event: EventDetails) {
  if (!event.confirmed || !event.title || !event.dateISO) return null;

  const location =
    event.venue || event.city
      ? {
          "@type": "Place",
          ...(event.venue ? { name: event.venue } : {}),
          ...(event.city
            ? {
                address: {
                  "@type": "PostalAddress",
                  addressLocality: event.city,
                },
              }
            : {}),
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.brand} — ${event.title}`,
    startDate: event.dateISO,
    ...(event.endDateISO ? { endDate: event.endDateISO } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(location ? { location } : {}),
    ...(event.ticketUrl
      ? {
          url: event.ticketUrl,
          offers: {
            "@type": "Offer",
            url: event.ticketUrl,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}
