import { fireEvent, render, screen } from "@testing-library/react";
import { InquiryForm } from "@/components/shared/InquiryForm";

describe("InquiryForm", () => {
  it("does not fake submission when no endpoint is configured", () => {
    render(<InquiryForm kind="newsletter" />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "guest@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /keep me posted/i }));
    expect(screen.getByText(/signup connection is being prepared/i)).toBeInTheDocument();
  });

  it("does not fake a partner inquiry submission when no endpoint is configured", () => {
    render(<InquiryForm kind="partner" />);
    fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: "Guest" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "guest@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /start a conversation/i }));
    expect(screen.getByText(/inquiry connection is being prepared/i)).toBeInTheDocument();
  });
});
