import type { Metadata } from "next";
import { ContactForm } from "@/app/_components/contact/contact-form";
import { PageHero } from "@/app/_components/shared/PageHero";
import { ShortAnswer } from "@/app/_components/shared/ShortAnswer";
import { FaqSection } from "@/app/_components/shared/FaqSection";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { StickyMobileCta } from "@/app/_components/sticky-mobile-cta";
import {
  bathFeatures,
  customBenefits,
  faqItems,
  formCopy,
  furnitureMeta,
  kidsFeatures,
  processSteps,
  proofItems,
  shortAnswer,
  wholeHomeBenefits,
  zones,
} from "@/app/_content/furniture";
import { pageHeroImages } from "@/app/_content/images";
import { buildFurnitureJsonLd, serializeJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: furnitureMeta.title,
  description: furnitureMeta.description,
  alternates: { canonical: "/furniture" },
};

export default function FurniturePage() {
  const jsonLd = buildFurnitureJsonLd(faqItems);

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
            eyebrow="Меблі на замовлення | Київ і область"
            h1={furnitureMeta.h1}
            lead={furnitureMeta.lead}
            image={pageHeroImages.furniture}
            primaryCta={furnitureMeta.primaryCta}
            secondaryCta={furnitureMeta.secondaryCta}
          />
          <section className="border-b border-border bg-kolss-surface">
            <div className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-3 px-5 py-6 sm:px-8 lg:px-10">
              {proofItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
          <ShortAnswer text={shortAnswer} />
          <section className="border-b border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="section-kicker">Зони дому</p>
              <h2 className="section-title">Які меблі для дому виготовляє KOLSS?</h2>
              <div className="mt-10 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4">Зона</th>
                      <th className="py-3 pr-4">Що замовляють</th>
                      <th className="py-3">Задача</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((z) => (
                      <tr key={z.zone} className="border-b border-border/60">
                        <td className="py-4 pr-4 font-medium">{z.zone}</td>
                        <td className="py-4 pr-4 text-muted">{z.items}</td>
                        <td className="py-4 text-muted">{z.task}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="border-b border-border bg-kolss-surface-alt">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <h2 className="section-title">Чому індивідуальні меблі краще за типові?</h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {customBenefits.map((b) => (
                  <li key={b} className="kolss-panel p-4 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="border-b border-border bg-background">
            <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
              <div>
                <p className="section-kicker">Дитячі</p>
                <h2 className="section-title">Меблі для дитячих кімнат</h2>
                <ul className="mt-4 grid gap-2">
                  {kidsFeatures.map((f) => (
                    <li key={f} className="text-sm text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-kicker">Ванні</p>
                <h2 className="section-title">Меблі для ванних і utility-зон</h2>
                <ul className="mt-4 grid gap-2">
                  {bathFeatures.map((f) => (
                    <li key={f} className="text-sm text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="border-b border-border bg-kolss-surface">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <h2 className="section-title">Чи можна замовити меблі для всієї квартири?</h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {wholeHomeBenefits.map((b) => (
                  <li key={b} className="text-sm text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="border-b border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <h2 className="section-title">Як проходить замовлення меблів?</h2>
              <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                {processSteps.map((step, i) => (
                  <li key={step} className="kolss-panel p-4 text-sm">
                    <span className="font-bold text-kolss-muted-green">
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {step}
                  </li>
                ))}
              </ol>
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
