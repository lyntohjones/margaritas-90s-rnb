import { SectionShell } from "@/components/layout/SectionShell";
import { MonoTag } from "@/components/brand/MonoTag";
import { siteConfig } from "@/content/site";

export function CulturalPartnerSection() {
  const { culturalPartner } = siteConfig;

  return (
    <SectionShell id="cultural-partner" tight title={culturalPartner.name}>
      <div className="cultural-partner">
        <MonoTag>{culturalPartner.label}</MonoTag>
        <p className="cultural-partner__body">{culturalPartner.description}</p>
      </div>
    </SectionShell>
  );
}
