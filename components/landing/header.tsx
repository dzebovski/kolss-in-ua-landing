import {
  IconHome,
  IconMapPin,
  IconMenu2,
  IconPhoneCall,
  IconSend,
  IconSofa,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import Link from "next/link";
import { contact, navLinks } from "@/lib/kolss-content";
import { Logo } from "./logo";

function navIcon(label: string) {
  const iconProps = { "aria-hidden": true, size: 17, stroke: 1.8 };

  if (label === "Кухні") {
    return <IconToolsKitchen2 {...iconProps} />;
  }

  if (label === "Меблі") {
    return <IconSofa {...iconProps} />;
  }

  if (label === "Контакти") {
    return <IconMapPin {...iconProps} />;
  }

  return <IconHome {...iconProps} />;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="KOLSS головна">
          <Logo className="site-header__logo" />
        </Link>

        <nav className="site-header__nav" aria-label="Основна навігація">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {navIcon(link.label)}
              {link.label}
            </Link>
          ))}
        </nav>

        <a className="site-header__cta" href="#lead-form">
          <IconSend aria-hidden size={17} stroke={1.8} />
          Заявка
        </a>

        <details className="site-header__menu">
          <summary aria-label="Відкрити меню">
            <IconMenu2 aria-hidden size={21} stroke={1.8} />
          </summary>
          <div className="site-header__menu-panel">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {navIcon(link.label)}
                {link.label}
              </Link>
            ))}
            <a href={contact.phoneHref}>
              <IconPhoneCall aria-hidden size={17} stroke={1.8} />
              {contact.phone}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
