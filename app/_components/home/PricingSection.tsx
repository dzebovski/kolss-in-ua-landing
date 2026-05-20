import Link from "next/link";
import { pricingNote } from "@/app/_content/home";

export function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-title"
      className="border-b border-border bg-kolss-surface"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Вартість</p>
        <h2 id="pricing-title" className="section-title">
          Скільки коштують меблі KOLSS?
        </h2>
        <p className="mt-6 max-w-[760px] text-[15px] leading-[1.65] text-muted">
          {pricingNote}
        </p>
        <div className="kolss-panel mt-8 max-w-2xl p-6">
          <p className="text-3xl font-semibold text-foreground">від 20 000 грн/пог. м</p>
          <p className="mt-2 text-sm text-muted">Орієнтир для кухонь. Не фінальна ціна.</p>
        </div>
        <Link href="#kontakt" className="kolss-button kolss-button-primary mt-8">
          Отримати прорахунок
        </Link>
      </div>
    </section>
  );
}
