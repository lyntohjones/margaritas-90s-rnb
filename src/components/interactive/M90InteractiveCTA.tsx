import Link from "next/link";
import styles from "./M90InteractiveCTA.module.css";

export function M90InteractiveCTA({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={`cta-button cta-button--primary ${styles.cta}`}
      style={{ color: "#111111" }}
      data-m90-interactive-cta
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.duplicate} aria-hidden="true">{label}</span>
    </Link>
  );
}
