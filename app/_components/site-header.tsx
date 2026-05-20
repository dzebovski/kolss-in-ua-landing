"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPhone, IconRoute } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import kolssLogo from "@/assets/images/logo/kolss-white-logo.svg";
import { contact, salonRouteHref } from "@/lib/contact";
import { headerNavigation } from "@/lib/site";

type SiteHeaderProps = {
  quoteHref?: string;
  salonHref?: string;
  transparentOnHome?: boolean;
};

export function SiteHeader({
  quoteHref = "#kontakt",
  salonHref = "/contacts",
  transparentOnHome = true,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onHome = pathname === "/";
  const useTransparent = transparentOnHome && onHome && !isScrolled && !isMenuOpen;
  const solidHeader = !useTransparent;

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return pathname === "/";
    return pathname === href.split("#")[0];
  };

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 ${
        solidHeader ? "site-header-solid" : "site-header-transparent"
      } ${isScrolled ? "site-header-compact" : ""}`}
    >
      <div className="site-header-inner mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center" aria-label="KOLSS, головна">
          <Image
            src={kolssLogo}
            alt=""
            width={157}
            height={24}
            priority
            className={`site-logo h-auto ${solidHeader ? "site-logo-dark" : ""} ${
              isScrolled ? "site-logo-compact" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Головна навігація">
          <ul className="site-header-nav-list flex items-center text-[13px] font-semibold uppercase">
            {headerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <Link href={quoteHref} className="header-cta">
            Замовити прорахунок
          </Link>
        </div>

        <button
          type="button"
          className={`hamburger-button lg:hidden ${isScrolled ? "hamburger-button-compact" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          <span className={`hamburger-line ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`hamburger-line ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`hamburger-line ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu lg:hidden ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-content">
          <nav aria-label="Мобільна навігація">
            <ul className="grid gap-1">
              {headerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-5 grid gap-3">
            <Link
              href={quoteHref}
              className="mobile-menu-cta mobile-menu-cta-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Замовити прорахунок
            </Link>
            <Link
              href={salonHref}
              className="mobile-menu-cta mobile-menu-cta-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Записатися в салон
            </Link>
          </div>
          <div className="mt-5 rounded-lg border border-border bg-kolss-surface-alt p-4 text-sm">
            <a href={contact.phoneHref} className="flex items-center gap-3 font-semibold">
              <IconPhone size={18} className="text-kolss-muted-green" />
              {contact.phone}
            </a>
            <a
              href={salonRouteHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-lg border border-kolss-muted-green px-4 font-semibold"
            >
              Маршрут у Google Maps
              <IconRoute size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
