import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionShell } from "@/components/layout/SectionShell";
import { CTAButton } from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Bring Margaritas & 90s R&B to Your Venue",
  description:
    "Venue partnership information for Margaritas & 90s R&B — an upscale, recurring social night.",
};

export default function VenuesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SectionShell
          id="venue-fit"
          eyebrow="Ideal Venue Fit"
          title="Built for upscale, photo-friendly rooms"
        >
          <ul className="partner-path-card__points">
            <li>Upscale café</li>
            <li>Cocktail lounge</li>
            <li>Lounge bar</li>
            <li>Photo-friendly interior</li>
            <li>Strong beverage program</li>
            <li>75 to 200 guests preferred for early editions (a planning preference, not a guarantee)</li>
          </ul>
        </SectionShell>

        <SectionShell
          id="format"
          tight
          eyebrow="Event Format"
          title="A recurring night, not a one-off"
          lede="Margaritas & 90s R&B runs as a seasonal recurring series, roughly every 6 to 8 weeks at launch, expanding toward monthly only once demand becomes predictable."
        >
          <ul className="partner-path-card__points">
            <li>Signature drink integration, including a zero-proof pour</li>
            <li>Seasonal editions (patio, holiday, and more)</li>
            <li>Date-night and social positioning</li>
            <li>Flexible formats: Original, Karaoke, Date Night, Seasonal</li>
          </ul>
        </SectionShell>

        <SectionShell
          id="benefits"
          tight
          eyebrow="Why Host"
          title="What the venue gets"
        >
          <ul className="partner-path-card__points">
            <li>Recurring traffic on a predictable cadence</li>
            <li>A built-in, highly shareable visual identity</li>
            <li>Co-branded promotion with Margaritas & 90s R&B and Retrospect90s00s</li>
            <li>A format designed around your beverage program</li>
          </ul>
        </SectionShell>

        <SectionShell
          id="venue-contact"
          eyebrow="Next Steps"
          title="Bring Margaritas & 90s R&B to your venue"
        >
          <CTAButton href="/partners#contact" variant="primary">
            Bring Margaritas &amp; 90s R&amp;B to Your Venue
          </CTAButton>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
