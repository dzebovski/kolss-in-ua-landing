import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";
import { contact, navLinks } from "@/lib/kolss-content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo className="site-footer__logo" />
          <p>
            Кухні та корпусні меблі на індивідуальне замовлення в Києві й
            області. Власне виробництво, монтаж і 2 роки гарантії.
          </p>
        </div>

        <nav aria-label="Навігація у футері">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <address>
          <a href={contact.phoneHref}>
            <IconPhoneCall aria-hidden size={18} stroke={1.8} />
            {contact.phone}
          </a>
          <span>
            <IconMapPin aria-hidden size={18} stroke={1.8} />
            {contact.address}
          </span>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <IconBrandInstagram aria-hidden size={18} stroke={1.8} />
            Instagram
          </a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            <IconBrandFacebook aria-hidden size={18} stroke={1.8} />
            Facebook
          </a>
        </address>
      </div>
    </footer>
  );
}
