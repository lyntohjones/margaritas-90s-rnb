import { render, screen } from "@testing-library/react";
import { metadata } from "@/app/layout";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the brand name", () => {
    render(<HomePage />);
    expect(screen.getAllByText(/Margaritas/i).length).toBeGreaterThan(0);
  });

  it("shows the main navigation and brand tagline", () => {
    render(<HomePage />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/Cocktails\. Slow Jams\. Good Vibes\./i)).toBeInTheDocument();
  });

  it("renders the full approved homepage flow", () => {
    render(<HomePage />);
    expect(screen.getByText(/Not a club night\. A night out\./i)).toBeInTheDocument();
    expect(screen.getAllByText(/Original Edition/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Classic Margarita/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Cultural Partner/i)).toBeInTheDocument();
    expect(screen.getByText(/Don.t miss the next pour/i)).toBeInTheDocument();
  });

  it("shows a coming-soon state instead of an invented next event date", () => {
    render(<HomePage />);
    expect(screen.getAllByText(/NEXT DATE COMING SOON/i).length).toBeGreaterThan(0);
  });
});

describe("site metadata", () => {
  it("defines useful social metadata", () => {
    expect(metadata.title).toBeTruthy();
    expect(String(metadata.description)).toMatch(/slow jams/i);
    expect(metadata.openGraph).toBeTruthy();
  });
});
