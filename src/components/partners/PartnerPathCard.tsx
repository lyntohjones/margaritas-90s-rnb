import { Reveal } from "@/components/shared/Reveal";
import type { PartnerPath } from "@/content/partners";

export function PartnerPathCard({ path }: { path: PartnerPath }) {
  return (
    <Reveal as="article" className="partner-path-card">
      <h3 className="partner-path-card__title">{path.title}</h3>
      <p className="partner-path-card__audience">{path.audience}</p>
      <p className="partner-path-card__desc">{path.description}</p>
      <ul className="partner-path-card__points">
        {path.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Reveal>
  );
}
