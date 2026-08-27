import { SectionShell } from "@/components/layout/SectionShell";
import { PartnerPathCard } from "@/components/partners/PartnerPathCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { partnerPaths } from "@/content/partners";

export function PartnershipSection() {
  return (
    <SectionShell
      id="partners"
      eyebrow="Partner With Us"
      title="Three ways to work together"
    >
      <div className="partnership-grid">
        {partnerPaths.map((path) => (
          <PartnerPathCard path={path} key={path.slug} />
        ))}
      </div>

      <div className="partnership-ctas">
        <CTAButton href="/partners" variant="primary">
          Download Partnership Deck
        </CTAButton>
        <CTAButton href="/partners#contact" variant="secondary">
          Start a Conversation
        </CTAButton>
      </div>
    </SectionShell>
  );
}
