import { render, screen } from "@testing-library/react";
import PartnersPage from "@/app/partners/page";
import VenuesPage from "@/app/venues/page";

describe("PartnersPage", () => {
  it("explains creator, promoter, and venue paths", () => {
    render(<PartnersPage />);
    expect(screen.getByRole("heading", { name: "Creators + Influencers" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Promoters" })).toBeInTheDocument();
  });
});

describe("VenuesPage", () => {
  it("explains the ideal venue fit without fake metrics", () => {
    render(<VenuesPage />);
    expect(screen.getByText(/Upscale café/i)).toBeInTheDocument();
    expect(screen.queryByText(/2\.5X|85%|4\.8/i)).not.toBeInTheDocument();
  });
});
