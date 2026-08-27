import { InquiryForm } from "@/components/shared/InquiryForm";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell section-shell--tight">
      <div className="wrap">
        <div className="newsletter">
          <h2 className="section-shell__title">Don&apos;t miss the next pour.</h2>
          <p className="section-shell__lede">
            Get the next event date and ticket link the moment it&apos;s confirmed.
          </p>
          <InquiryForm kind="newsletter" />
        </div>
      </div>
    </section>
  );
}
