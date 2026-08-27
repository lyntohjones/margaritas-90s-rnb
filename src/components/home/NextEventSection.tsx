import { SectionShell } from "@/components/layout/SectionShell";
import { MonoTag } from "@/components/brand/MonoTag";
import { CTAButton } from "@/components/shared/CTAButton";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { nextEvent } from "@/content/events";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { buildEventJsonLd, formatEventDate } from "@/lib/event";

export function NextEventSection() {
  const calendarUrl = buildGoogleCalendarUrl(nextEvent);
  const eventJsonLd = buildEventJsonLd(nextEvent);

  return (
    <SectionShell id="next-event" eyebrow="Next Edition" title="The next pour">
      {eventJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      {!nextEvent.confirmed ? (
        <div className="next-event next-event--pending">
          <MonoTag>NEXT DATE COMING SOON</MonoTag>
          <p className="next-event__pending-title">No confirmed date yet</p>
          <p className="next-event__pending-body">
            We&apos;re locking in the venue and date for the next edition. Join the list and
            you&apos;ll get the date, venue, and ticket link the moment it&apos;s confirmed —
            first, before anyone else.
          </p>
          <div style={{ marginTop: 24, maxWidth: 420, marginInline: "auto", textAlign: "left" }}>
            <InquiryForm kind="newsletter" />
          </div>
        </div>
      ) : (
        <div className="next-event">
          <div className="event-meta">
            <div className="event-meta__row">
              <span className="event-meta__label">EDITION</span>
              <span className="event-meta__value">{nextEvent.title}</span>
            </div>
            <div className="event-meta__row">
              <span className="event-meta__label">DATE</span>
              <span className="event-meta__value">{formatEventDate(nextEvent.dateISO)}</span>
            </div>
            <div className="event-meta__row">
              <span className="event-meta__label">VENUE</span>
              <span className="event-meta__value">{nextEvent.venue}</span>
            </div>
            <div className="event-meta__row">
              <span className="event-meta__label">CITY</span>
              <span className="event-meta__value">{nextEvent.city}</span>
            </div>
            <div className="event-meta__row">
              <span className="event-meta__label">DOORS</span>
              <span className="event-meta__value">{nextEvent.doors}</span>
            </div>
            <div className="event-meta__row">
              <span className="event-meta__label">MUSIC</span>
              <span className="event-meta__value">{nextEvent.music}</span>
            </div>
          </div>

          <div className="event-actions">
            {nextEvent.ticketUrl && (
              <CTAButton href={nextEvent.ticketUrl} variant="primary">
                Get Tickets
              </CTAButton>
            )}
            {nextEvent.reservationUrl && (
              <CTAButton href={nextEvent.reservationUrl} variant="secondary">
                Reservations
              </CTAButton>
            )}
            {calendarUrl && (
              <CTAButton href={calendarUrl} variant="ghost">
                Add to Calendar
              </CTAButton>
            )}
          </div>
        </div>
      )}
    </SectionShell>
  );
}
