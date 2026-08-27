import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";
import { drinks } from "@/content/drinks";
import { brandAssets, drinkAssetKeys } from "@/content/assets";
import { assetExists } from "@/lib/assetExists";

export function DrinksSection() {
  return (
    <SectionShell
      id="drinks"
      eyebrow="Signature Drinks"
      title="Built for the room"
      lede="Including a zero-proof pour built with the same care."
    >
      <div className="drinks-grid">
        {drinks.map((drink) => {
          const assetKey = drinkAssetKeys[drink.number];
          const asset = assetKey ? brandAssets[assetKey] : undefined;
          const hasImage = asset ? assetExists(asset.src) : false;

          return (
            <Reveal as="article" className="drink-card" key={drink.number}>
              {hasImage && asset ? (
                <div className="drink-card__image">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: asset.objectPosition }}
                  />
                </div>
              ) : (
                <div className="drink-card__image-placeholder" aria-hidden="true" />
              )}

              <span className="drink-card__number">{drink.number}</span>
              <h3 className="drink-card__name">{drink.name}</h3>
              <p className="drink-card__desc">{drink.description}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
