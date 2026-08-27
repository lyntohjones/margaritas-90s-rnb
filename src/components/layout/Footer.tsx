import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <BrandMark compact />

        <div className="site-footer__links">
          <Link href="/partners">Partners</Link>
          <Link href="/venues">Venues</Link>
          <a href="#next-event">Next Event</a>
        </div>

        <p className="site-footer__meta">
          © {new Date().getFullYear()} {siteConfig.brand}
        </p>
      </div>
    </footer>
  );
}
