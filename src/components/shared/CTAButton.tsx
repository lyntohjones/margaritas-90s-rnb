import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function CTAButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
}) {
  const className = `cta-button cta-button--${variant}`;
  const isExternalAnchor = href.startsWith("#");
  const style = variant === "primary" ? { color: "#111111" } : undefined;

  if (isExternalAnchor) {
    return (
      <a className={className} href={href} style={style}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} style={style}>
      {children}
    </Link>
  );
}
