import { whyItems } from "@/app/_content/home";
import { IconCheck } from "@tabler/icons-react";

export function WhySection() {
  return (
    <section
      aria-labelledby="why-title"
      className="border-b border-border bg-kolss-surface-alt"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Позиціонування</p>
        <h2 id="why-title" className="section-title">
          Чому KOLSS підходить для сегменту середній+?
        </h2>
        <p className="mt-5 max-w-[760px] text-muted">
          KOLSS працює в сегменті стриманого преміуму: без надмірної декоративності,
          але з увагою до матеріалів, пропорцій, фасадів, фурнітури й монтажу.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {whyItems.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-border bg-background p-4">
              <IconCheck className="mt-0.5 shrink-0 text-kolss-muted-green" size={20} aria-hidden />
              <span className="text-[15px] leading-[1.5]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
