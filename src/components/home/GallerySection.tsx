import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";

const MOMENTS = ["Arrival", "The Pour", "The Sound", "Karaoke Moment", "Date Night"];

export function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Last Pour"
      title="A look at the night"
      lede="Real event photography lands here after the first edition. Until then, these are placeholders, not past-event proof."
    >
      <div className="gallery-grid">
        {MOMENTS.map((moment) => (
          <Reveal as="div" className="gallery-card" key={moment}>
            <span className="gallery-card__label">{moment}</span>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
