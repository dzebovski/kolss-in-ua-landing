import Link from "next/link";
import { offerItems } from "@/app/_content/home";

export function OfferSection() {
  return (
    <section
      id="oferta"
      aria-labelledby="offer-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <p className="section-kicker">Пропозиція</p>
        <h2 id="offer-title" className="section-title">
          Які меблі можна замовити в KOLSS?
        </h2>
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.6] text-muted">
          KOLSS виготовляє меблі під конкретне приміщення, сценарій життя і бюджет.
          Можна замовити одну кухню, окрему гардеробну або комплексне меблювання
          квартири в єдиному стилі.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {offerItems.map((item) => (
            <article key={item.title} className="kolss-card flex flex-col p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.5] text-muted">
                {item.text}
              </p>
              <Link href={item.href} className="kolss-text-link mt-6">
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
