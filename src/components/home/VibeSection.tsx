import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";

const PILLARS = [
  { title: "Slow Jams", body: "Curated 90s and early-2000s R&B, no filler." },
  { title: "Signature Drinks", body: "Margaritas built with care, including a zero-proof pour." },
  { title: "Good Company", body: "A room built for conversation, not shouting over speakers." },
];

export function VibeSection() {
  return (
    <SectionShell id="experience" eyebrow="The Vibe" title="Not a club night. A night out.">
      <div className="vibe-pillars">
        {PILLARS.map((pillar) => (
          <Reveal as="div" className="vibe-pillar" key={pillar.title}>
            <h3 className="vibe-pillar__title">{pillar.title}</h3>
            <p className="vibe-pillar__body">{pillar.body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
