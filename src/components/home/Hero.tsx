import { BrandMark } from "@/components/brand/BrandMark";
import { DecorativeCollage } from "@/components/brand/DecorativeCollage";
import { MonoTag } from "@/components/brand/MonoTag";
import { CTAButton } from "@/components/shared/CTAButton";
import { siteConfig } from "@/content/site";
import { nextEvent } from "@/content/events";

export function Hero() {
  return (
    <div className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="hero__eyebrow">
            <BrandMark />
          </div>

          <h1 className="hero__tagline">{siteConfig.tagline}</h1>
          <p className="hero__copy">{siteConfig.description}</p>

          <div className="hero__ctas">
            <CTAButton href={siteConfig.primaryCta.href} variant="primary">
              Get Tickets
            </CTAButton>
            <CTAButton href="#experience" variant="secondary">
              Explore the Vibe
            </CTAButton>
          </div>

          <p className="hero__event-preview">
            {nextEvent.confirmed ? (
              <>
                Next up: {nextEvent.title} — {nextEvent.city}
              </>
            ) : (
              <MonoTag>NEXT DATE COMING SOON</MonoTag>
            )}
          </p>
        </div>

        <DecorativeCollage />
      </div>
    </div>
  );
}
