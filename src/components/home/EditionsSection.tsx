import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Reveal } from "@/components/shared/Reveal";
import { editions } from "@/content/editions";
import { brandAssets, editionAssetKeys } from "@/content/assets";
import { assetExists } from "@/lib/assetExists";

export function EditionsSection() {
  return (
    <SectionShell
      id="editions"
      eyebrow="Choose Your Night"
      title="Four ways to show up"
      lede="Every edition keeps the same core: slow jams, signature drinks, good company."
    >
      <div className="editions-grid">
        {editions.map((edition) => {
          const assetKey = editionAssetKeys[edition.slug];
          const asset = assetKey ? brandAssets[assetKey] : undefined;
          const hasImage = asset ? assetExists(asset.src) : false;

          return (
            <Reveal as="article" className="edition-card" key={edition.slug}>
              {hasImage && asset ? (
                <div className="edition-card__image">
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: asset.objectPosition }}
                  />
                </div>
              ) : (
                <div className="edition-card__image-placeholder" aria-hidden="true" />
              )}

              <span className="mono-tag">{edition.slug.replace("-", " ").toUpperCase()}</span>
              <h3 className="edition-card__name">{edition.name}</h3>
              <p className="edition-card__desc">{edition.description}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
