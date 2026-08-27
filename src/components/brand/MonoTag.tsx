import type { ReactNode } from "react";

export function MonoTag({ children }: { children: ReactNode }) {
  return <span className="mono-tag">{children}</span>;
}
