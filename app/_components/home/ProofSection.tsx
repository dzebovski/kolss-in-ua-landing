import Image from "next/image";
import { proofImages } from "@/app/_content/images";

export function ProofSection() {
  return (
    <section
      id="realizacje"
      aria-labelledby="proof-title"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <p className="section-kicker">Реалізації</p>
        <h2 id="proof-title" className="section-title">
          Матеріали й пропорції, які видно без пояснень
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {proofImages.map((img) => (
            <div key={img.alt} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
