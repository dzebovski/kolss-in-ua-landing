export function ShortAnswer({ text }: { text: string }) {
  return (
    <section
      aria-label="Коротка відповідь"
      className="border-b border-border bg-kolss-surface-alt"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10">
        <p className="max-w-[920px] text-[17px] leading-[1.65] text-foreground sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
