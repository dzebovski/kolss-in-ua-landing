import Image from "next/image";
import Link from "next/link";
import { salonImage } from "@/app/_content/images";
import { contact } from "@/lib/contact";

export function SalonSection() {
  return (
    <section
      id="salon"
      aria-labelledby="salon-title"
      className="border-b border-border bg-kolss-surface"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
        <div>
          <p className="section-kicker">Салон</p>
          <h2 id="salon-title" className="section-title">
            Салон KOLSS у Києві
          </h2>
          <p className="mt-5 text-muted">
            {contact.streetAddress}, {contact.city}. Порівняйте шпон, дерево, MDF і
            фурнітуру наживо перед замовленням.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacts" className="kolss-button kolss-button-primary">
              Записатися в салон
            </Link>
            <a href={contact.phoneHref} className="kolss-button kolss-button-secondary">
              {contact.phone}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={salonImage}
            alt="Салон KOLSS у Києві"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
