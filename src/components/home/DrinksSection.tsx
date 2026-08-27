import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";
import { drinks } from "@/content/drinks";

export function DrinksSection() {
  return (
    <SectionShell
      id="drinks"
      eyebrow="Signature Drinks"
      title="Built for the room"
      lede="Including a zero-proof pour built with the same care."
    >
      <div className="drinks-grid">
        {drinks.map((drink) => (
          <Reveal as="article" className="drink-card" key={drink.number}>
            <span className="drink-card__number">{drink.number}</span>
            <h3 className="drink-card__name">{drink.name}</h3>
            <p className="drink-card__desc">{drink.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
