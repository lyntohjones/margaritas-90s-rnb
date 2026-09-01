import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { DrinksSection } from "@/components/home/DrinksSection";
import { EditionsSection } from "@/components/home/EditionsSection";
import { M90Condensation } from "@/components/interactive/M90Condensation";
import { M90GalleryHeading } from "@/components/interactive/M90GalleryHeading";
import { M90InteractiveCTA } from "@/components/interactive/M90InteractiveCTA";
import { interactionFlags } from "@/content/interactions";

describe("Margaritas interactive enhancements", () => {
  it("keeps the approved interaction flags explicit", () => {
    expect(interactionFlags).toEqual({
      galleryHeading: true,
      condensation: true,
      interactiveHeroCta: true,
      halftoneFlow: false,
    });
  });

  it("keeps the gallery canvas decorative", () => {
    const markup = renderToStaticMarkup(<M90GalleryHeading />);
    expect(markup).toContain('aria-hidden="true"');
    expect(markup).toContain("data-m90-gallery-heading");
  });

  it("keeps the condensation canvas decorative", () => {
    const markup = renderToStaticMarkup(<M90Condensation />);
    expect(markup).toContain('aria-hidden="true"');
    expect(markup).toContain("data-m90-condensation");
  });

  it("keeps the interactive CTA as a real accessible link", () => {
    render(<M90InteractiveCTA href="/#next-event" label="Get Tickets" />);
    const link = screen.getByRole("link", { name: "Get Tickets" });
    expect(link).toHaveAttribute("href", "/#next-event");
    expect(link).toHaveAttribute("data-m90-interactive-cta");
  });

  it("keeps every edition in the accessible HTML", () => {
    const markup = renderToStaticMarkup(<EditionsSection />);
    expect(markup).toContain("CHOOSE YOUR NIGHT");
    expect(markup).toContain("Original Edition");
    expect(markup).toContain("Karaoke Edition");
    expect(markup).toContain("Date Night Edition");
    expect(markup).toContain("Seasonal Edition");
  });

  it("keeps the zero-proof drink in the accessible HTML", () => {
    const markup = renderToStaticMarkup(<DrinksSection />);
    expect(markup).toContain("Zero-Proof Pour");
    expect(markup).toContain("Signature Drinks");
  });
});
