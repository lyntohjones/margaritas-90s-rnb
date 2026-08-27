"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { CTAButton } from "@/components/shared/CTAButton";
import { siteConfig } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <Link href="/" aria-label={siteConfig.brand}>
          <BrandMark compact />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className="nav"
          aria-label="Primary"
          data-open={open ? "true" : "false"}
        >
          {siteConfig.nav.map((item) =>
            item.href.startsWith("#") ? (
              <a key={item.href} className="nav__link" href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} className="nav__link" href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="site-header__ctas">
          <CTAButton href={siteConfig.secondaryCta.href} variant="secondary">
            {siteConfig.secondaryCta.label}
          </CTAButton>
          <CTAButton href={siteConfig.primaryCta.href} variant="primary">
            {siteConfig.primaryCta.label}
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
