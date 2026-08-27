import type { ReactNode } from "react";
import { MonoTag } from "@/components/brand/MonoTag";
import { Reveal } from "@/components/shared/Reveal";

export function SectionShell({
  id,
  eyebrow,
  title,
  lede,
  tight = false,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  tight?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={tight ? "section-shell section-shell--tight" : "section-shell"}
    >
      <div className="wrap">
        <Reveal as="div" className="section-shell__head">
          {eyebrow && (
            <div className="section-shell__eyebrow">
              <MonoTag>{eyebrow}</MonoTag>
            </div>
          )}
          <h2 className="section-shell__title">{title}</h2>
          {lede && <p className="section-shell__lede">{lede}</p>}
        </Reveal>

        {children}
      </div>
    </section>
  );
}
