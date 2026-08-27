"use client";

import { useState, type FormEvent } from "react";

type Kind = "newsletter" | "partner";

const COPY: Record<
  Kind,
  { submitLabel: string; pendingNote: string; successNote: string; errorNote: string }
> = {
  newsletter: {
    submitLabel: "Keep Me Posted",
    pendingNote:
      "Signup connection is being prepared. Please use the partner contact link for now.",
    successNote: "You're on the list — watch your inbox for the next pour.",
    errorNote: "Something went wrong. Please try again in a moment.",
  },
  partner: {
    submitLabel: "Start a Conversation",
    pendingNote:
      "Inquiry connection is being prepared. Please email us directly for now.",
    successNote: "Thanks — we'll be in touch shortly.",
    errorNote: "Something went wrong. Please try again in a moment.",
  },
};

function endpointFor(kind: Kind) {
  if (kind === "newsletter") return process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";
  return process.env.NEXT_PUBLIC_PARTNER_ENDPOINT || "";
}

export function InquiryForm({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const copy = COPY[kind];
  const endpoint = endpointFor(kind);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!endpoint) {
      setStatus("pending");
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      {kind === "partner" && (
        <div className="form-field">
          <label htmlFor={`${kind}-name`}>Name</label>
          <input id={`${kind}-name`} name="name" type="text" required autoComplete="name" />
        </div>
      )}

      <div className="form-field">
        <label htmlFor={`${kind}-email`}>Email</label>
        <input
          id={`${kind}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      {kind === "partner" && (
        <div className="form-field">
          <label htmlFor={`${kind}-message`}>Message</label>
          <textarea id={`${kind}-message`} name="message" rows={3} />
        </div>
      )}

      <div className="form-field" style={{ flex: "0 0 auto", justifyContent: "flex-end" }}>
        <button
          type="submit"
          className="cta-button cta-button--primary"
          style={{ color: "#111111" }}
        >
          {copy.submitLabel}
        </button>
      </div>

      {status !== "idle" && (
        <p className="form-note" role={status === "error" ? "alert" : "status"}>
          {status === "pending" && copy.pendingNote}
          {status === "success" && copy.successNote}
          {status === "error" && copy.errorNote}
        </p>
      )}
    </form>
  );
}
