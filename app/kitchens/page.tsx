import type { Metadata } from "next";
import { ContactForm } from "@/app/_components/contact/contact-form";
import { KitchenCarousel } from "@/app/_components/kitchen-carousel";
import { PageHero } from "@/app/_components/shared/PageHero";
import { ShortAnswer } from "@/app/_components/shared/ShortAnswer";
import { FaqSection } from "@/app/_components/shared/FaqSection";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { StickyMobileCta } from "@/app/_components/sticky-mobile-cta";
import {
  audienceItems,
  faqItems,
  formCopy,
  inclusionItems,
  kitchenTypes,
  kitchensMeta,
  materialsTable,
  priceFactors,
  processSteps,
  proofItems,
  shortAnswer,
} from "@/app/_content/kitchens";
import { kitchenCollections, pageHeroImages } from "@/app/_content/images";
import { buildKitchensJsonLd, serializeJsonLd } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  title: kitchensMeta.title,
  description: kitchensMeta.description,
  alternates: { canonical: "/kitchens" },
};

export default function KitchensPage() {
  const jsonLd = buildKitchensJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="min-h-screen bg-background pb-20 lg:pb-0">
        <SiteHeader quoteHref="#kontakt" salonHref="/contacts" transparentOnHome={false} />
        <main>
          <PageHero
            eyebrow="Кухні на замовлення | Київ і область"
            h1={kitchensMeta.h1}
            lead={kitchensMeta.lead}
            image={pageHeroImages.kitchens}
            primaryCta={kitchensMeta.primaryCta}
            secondaryCta={kitchensMeta.secondaryCta}
          />
          <section className="border-b border-border bg-kolss-surface">
            <div className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-4 px-5 py-6 sm:px-8 lg:px-10">
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
              <p className="section-kicker">Планування</p>
              <h2 className="section-title">Яку кухню можна замовити в KOLSS?</h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {kitchenTypes.map((t) => (
                  <article key={t.title} className="kolss-card p-5">
                    <h3 className="text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-kolss-muted-green">
                      {t.when}
                    </p>
                    <p className="mt-2 text-sm text-muted">{t.note}</p>
                  </article>
                ))}
              </div>
              <KitchenCarousel collections={kitchenCollections} />
            </div>
          </section>
          <section className="border-b border-border bg-kolss-surface-alt">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="section-kicker">Комплектація</p>
              <h2 className="section-title">Що входить у кухню KOLSS?</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {inclusionItems.map((item) => (
                  <li key={item} className="kolss-panel px-4 py-3 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 font-semibold">Елемент</th>
                      <th className="py-3 pr-4 font-semibold">Варіанти</th>
                      <th className="py-3 font-semibold">Коментар</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialsTable.map((row) => (
                      <tr key={row.element} className="border-b border-border/60">
                        <td className="py-4 pr-4 font-medium">{row.element}</td>
                        <td className="py-4 pr-4 text-muted">{row.options}</td>
                        <td className="py-4 text-muted">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="border-b border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="section-kicker">Вартість</p>
              <h2 className="section-title">Від чого залежить ціна кухні?</h2>
              <p className="mt-5 text-muted">
                Орієнтир для старту — від 20 000 грн за погонний метр. Для точного
                прорахунку надішліть план, фото або дизайн-проєкт.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {priceFactors.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <span className="text-kolss-muted-green">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="border-b border-border bg-kolss-surface">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="section-kicker">Процес</p>
              <h2 className="section-title">Як проходить замовлення кухні?</h2>
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
          <section className="border-b border-border bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <p className="section-kicker">Аудиторія</p>
              <h2 className="section-title">Кому підходять кухні KOLSS?</h2>
              <ul className="mt-6 grid gap-2">
                {audienceItems.map((item) => (
                  <li key={item} className="text-[15px] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <FaqSection items={faqItems} />
          <section
            id="kontakt"
            className="dark-section border-b border-kolss-warm-white/14"
          >
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
