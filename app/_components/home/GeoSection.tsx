import { geoLocations } from "@/app/_content/home";

export function GeoSection() {
  return (
    <section
      aria-labelledby="geo-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Географія</p>
        <h2 id="geo-title" className="section-title">
          Як KOLSS працює в Києві та області?
        </h2>
        <p className="mt-5 max-w-[720px] text-muted">
          Консультацію можна почати онлайн за планом або фото. Після уточнення задачі
          організуємо замір на об&apos;єкті.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {geoLocations.map((loc) => (
            <li
              key={loc}
              className="rounded-full border border-border bg-kolss-surface-alt px-4 py-2 text-sm font-semibold"
            >
              {loc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
