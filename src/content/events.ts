/**
 * Single source of truth for the next event.
 *
 * IMPORTANT: `confirmed` must stay `false` — and every optional field must
 * stay empty — until a real date, venue, and ticket link exist. Do not
 * invent a date, venue, address, or ticket/reservation URL here. When a
 * real event is booked, fill in the fields below and flip `confirmed` to
 * `true`; the site will then render the full Next Event card and emit
 * event structured data automatically.
 */
export type EventDetails = {
  brand: string;
  confirmed: boolean;
  title?: string;
  dateISO?: string;
  endDateISO?: string;
  city?: string;
  venue?: string;
  doors?: string;
  music?: string;
  ticketUrl?: string;
  reservationUrl?: string;
};

export const nextEvent: EventDetails = {
  brand: "Margaritas & 90s R&B",
  confirmed: false,
};
