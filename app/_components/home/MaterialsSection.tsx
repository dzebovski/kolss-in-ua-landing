import Link from "next/link";
import { materials } from "@/app/_content/home";

export function MaterialsSection() {
  return (
    <section
      id="materialy"
      aria-labelledby="materials-title"
      className="border-b border-border bg-kolss-surface-alt"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Матеріали</p>
        <h2 id="materials-title" className="section-title">
          Матеріали, які формують характер меблів
        </h2>
        <p className="mt-5 max-w-[720px] text-muted">
          ЛДСП 18 мм для корпусів, шпон і дерево для фасадів, Blum для щоденного
          комфорту. У салоні можна порівняти фактури наживо.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m) => (
            <div key={m.name} className="material-swatch">
              <div className={`material-swatch-chip ${m.chip}`} />
              <p className="p-4 text-sm font-semibold">{m.name}</p>
            </div>
          ))}
        </div>
        <Link href="/contacts" className="kolss-text-link mt-8">
          Записатися в салон
        </Link>
      </div>
    </section>
  );
}
