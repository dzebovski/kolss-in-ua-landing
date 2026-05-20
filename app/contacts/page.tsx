import type { Metadata } from "next";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconClock,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { ContactForm } from "@/app/_components/contact/contact-form";
import { PageHero } from "@/app/_components/shared/PageHero";
import { ShortAnswer } from "@/app/_components/shared/ShortAnswer";
import { FaqSection } from "@/app/_components/shared/FaqSection";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { StickyMobileCta } from "@/app/_components/sticky-mobile-cta";
import {
  aboutText,
  contactsMeta,
  faqItems,
  formCopy,
  onlineScenarios,
  prepList,
  shortAnswer,
  visitReasons,
} from "@/app/_content/contacts";
import { pageHeroImages } from "@/app/_content/images";
import {
  contact,
  mapsSearchHref,
  openingHours,
  salonMapSrc,
  salonRouteHref,
} from "@/lib/contact";
import { buildContactsJsonLd, serializeJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: contactsMeta.title,
  description: contactsMeta.description,
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  const jsonLd = buildContactsJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="min-h-screen bg-background pb-20 lg:pb-0">
        <SiteHeader quoteHref="#kontakt" transparentOnHome={false} />
        <main>
          <PageHero
            eyebrow="Салон KOLSS | Київ"
            h1={contactsMeta.h1}
            lead={contactsMeta.lead}
            image={pageHeroImages.contacts}
            primaryCta={contactsMeta.primaryCta}
            secondaryCta={contactsMeta.secondaryCta}
            secondaryHref={mapsSearchHref}
          />
          <ShortAnswer text={shortAnswer} />
          <section className="border-b border-border bg-background">
            <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.45fr_0.55fr] lg:px-10 lg:py-20">
              <div>
                <p className="section-kicker">Контакти</p>
                <h2 className="section-title">Як нас знайти</h2>
                <div className="mt-8 grid gap-4">
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-3 text-lg font-semibold"
                  >
                    <IconPhone className="text-kolss-muted-green" size={22} />
                    {contact.phone}
                  </a>
                  <p className="flex items-start gap-3 text-muted">
                    <IconMapPin className="mt-0.5 shrink-0 text-kolss-muted-green" size={22} />
                    {contact.streetAddress}, {contact.city}, {contact.postalCode}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="kolss-button kolss-button-ghost"
                    >
                      <IconBrandInstagram size={18} />
                      Instagram
                    </a>
                    <a
                      href={contact.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="kolss-button kolss-button-ghost"
                    >
                      <IconBrandFacebook size={18} />
                      Facebook
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-kolss-muted-green">
                    <IconClock size={18} />
                    Графік роботи
                  </div>
                  <dl className="mt-4 grid gap-2">
                    {openingHours.map(([day, hours]) => (
                      <div key={day} className="flex justify-between gap-4 text-sm">
                        <dt className="text-muted">{day}</dt>
                        <dd className="font-semibold">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <a
                  href={salonRouteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="kolss-button kolss-button-primary mt-8"
                >
                  Маршрут у Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Карта салону KOLSS"
                  src={salonMapSrc}
                  className="aspect-[4/3] w-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
          <section className="border-b border-border bg-kolss-surface-alt">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <h2 className="section-title">Коли варто приїхати в салон KOLSS?</h2>
              <ul className="mt-6 grid gap-2">
                {visitReasons.map((r) => (
                  <li key={r} className="text-muted">
                    {r}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-xl font-semibold">
                Що підготувати для швидкого прорахунку?
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {prepList.map((item) => (
                  <li key={item} className="kolss-panel p-3 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="border-b border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <h2 className="section-title">Чи можна почати онлайн?</h2>
              <ul className="mt-6 grid gap-2">
                {onlineScenarios.map((s) => (
                  <li key={s} className="text-muted">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[720px] text-muted">{aboutText}</p>
            </div>
          </section>
          <FaqSection items={faqItems} />
          <section id="kontakt" className="dark-section">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <ContactForm
                title={formCopy.title}
                description={formCopy.description}
                defaultLeadType={formCopy.defaultLeadType}
              />
            </div>
          </section>
        </main>
        <SiteFooter />
        <StickyMobileCta />
      </div>
    </>
  );
}
