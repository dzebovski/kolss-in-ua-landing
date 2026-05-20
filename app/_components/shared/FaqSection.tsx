type FaqItem = { question: string; answer: string };

export function FaqSection({
  items,
  id = "faq",
}: {
  items: readonly FaqItem[];
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.35fr_0.65fr] lg:px-10 lg:py-20">
        <div>
          <p className="section-kicker">FAQ</p>
          <h2 id={`${id}-title`} className="section-title">
            Часті питання
          </h2>
        </div>
        <dl className="grid gap-4">
          {items.map((item) => (
            <div key={item.question} className="kolss-card p-5">
              <dt className="text-lg font-semibold leading-tight">{item.question}</dt>
              <dd className="mt-4 text-[15px] leading-[1.5] text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
