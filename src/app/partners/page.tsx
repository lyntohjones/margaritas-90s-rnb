import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionShell } from "@/components/layout/SectionShell";
import { PartnerPathCard } from "@/components/partners/PartnerPathCard";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { partnerPaths } from "@/content/partners";

export const metadata: Metadata = {
  title: "Partner With Margaritas & 90s R&B",
  description:
    "Partnership opportunities for venues, promoters, creators, and influencers.",
};

const CONTENT_OPPORTUNITIES = [
  "Arrival and room-look content",
  "Signature drink pours",
  "Karaoke moments",
  "Date-night and friend-group coverage",
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SectionShell
          id="overview"
          eyebrow="Partnership Opportunities"
          title="Why the concept works"
          lede="Margaritas & 90s R&B pairs a highly shareable visual identity with a recurring, culture-first night out — built for venues, promoters, and creators alike."
        >
          <div className="partnership-grid">
            {partnerPaths.map((path) => (
              <PartnerPathCard path={path} key={path.slug} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="audience"
          tight
          eyebrow="Audience Profile"
          title="Who shows up"
        >
          <ul className="partner-path-card__points">
            <li>Women 25 to 50</li>
            <li>Couples and date-night guests</li>
            <li>Friend groups</li>
            <li>Mature R&amp;B and nostalgia audiences</li>
            <li>Young professionals and culture-focused guests</li>
          </ul>
        </SectionShell>

        <SectionShell
          id="content"
          tight
          eyebrow="Content Opportunities"
          title="Built for content, not just attendance"
        >
          <ul className="partner-path-card__points">
            {CONTENT_OPPORTUNITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Get In Touch"
          title="Start a conversation"
          lede="A partnership deck is in progress and will use the same brand system. Reach out below and we'll follow up directly with deliverables and next steps."
        >
          <InquiryForm kind="partner" />
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
