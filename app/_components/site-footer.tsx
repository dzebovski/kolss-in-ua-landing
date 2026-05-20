import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import kolssLogo from "@/assets/images/logo/kolss-white-logo.svg";
import { contact } from "@/lib/contact";
import { headerNavigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="dark-section bg-kolss-charcoal text-kolss-warm-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.7fr]">
          <div>
            <Link href="/" aria-label="KOLSS, головна">
              <Image src={kolssLogo} alt="" width={157} height={24} className="h-auto w-[157px]" />
            </Link>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-kolss-warm-white/72">
              Кухні та корпусні меблі на замовлення для Києва та області. Власне
              виробництво, спокійний преміум і прозорий процес від прорахунку до
              монтажу.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="kolss-icon-tile text-kolss-warm-white"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={20} />
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="kolss-icon-tile text-kolss-warm-white"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase text-kolss-warm-white/58">
                Навігація
              </p>
              <ul className="mt-4 grid gap-2">
                {headerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-kolss-warm-white/78 transition hover:text-kolss-warm-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-kolss-warm-white/58">
                Контакти
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-kolss-warm-white/78">
                <li className="flex gap-3">
                  <IconMapPin size={18} className="shrink-0 text-kolss-lime" />
                  <span>
                    {contact.streetAddress}, {contact.city}, {contact.postalCode}
                  </span>
                </li>
                <li>
                  <a href={contact.phoneHref} className="flex gap-3 hover:text-kolss-warm-white">
                    <IconPhone size={18} className="shrink-0 text-kolss-lime" />
                    {contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-kolss-warm-white/12 pt-6 text-xs text-kolss-warm-white/52">
          © {new Date().getFullYear()} KOLSS. Кухні та меблі на замовлення в Києві й
          області.
        </p>
      </div>
    </footer>
  );
}
