import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";
import { editions } from "@/content/editions";

export function EditionsSection() {
  return (
    <SectionShell
      id="editions"
      eyebrow="Choose Your Night"
      title="Four ways to show up"
      lede="Every edition keeps the same core: slow jams, signature drinks, good company."
    >
      <div className="editions-grid">
        {editions.map((edition) => (
          <Reveal as="article" className="edition-card" key={edition.slug}>
            <span className="mono-tag">{edition.slug.replace("-", " ").toUpperCase()}</span>
            <h3 className="edition-card__name">{edition.name}</h3>
            <p className="edition-card__desc">{edition.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
