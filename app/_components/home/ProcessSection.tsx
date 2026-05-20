import Link from "next/link";
import { processSteps } from "@/app/_content/home";

export function ProcessSection() {
  return (
    <section
      id="proces"
      aria-labelledby="process-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Процес</p>
        <h2 id="process-title" className="section-title">
          Як KOLSS працює з клієнтом?
        </h2>
        <p className="mt-5 max-w-[720px] text-muted">
          Процес побудований так, щоб ви розуміли етапи, матеріали, вартість і строки
          до старту виробництва.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.step} className="kolss-panel p-5">
              <p className="text-xs font-bold uppercase text-kolss-muted-green">
                {step.step}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.5] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link href="#kontakt" className="kolss-button kolss-button-primary mt-10">
          Замовити прорахунок
        </Link>
      </div>
    </section>
  );
}
