import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type PageHeroProps = {
  id?: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: StaticImageData;
  primaryCta: string;
  secondaryCta: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function PageHero({
  id = "start",
  eyebrow,
  h1,
  lead,
  image,
  primaryCta,
  secondaryCta,
  primaryHref = "#kontakt",
  secondaryHref = "#kontakt",
}: PageHeroProps) {
  return (
    <section
      id={id}
      aria-labelledby="page-hero-title"
      className="home-hero dark-section relative isolate overflow-hidden border-b border-kolss-charcoal bg-kolss-charcoal text-kolss-warm-white"
    >
      <Image src={image} alt="" fill priority sizes="100vw" className="hero-image object-cover" />
      <div className="hero-readability-layer" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[min(620px,78svh)] w-full max-w-[1440px] items-center px-5 py-28 sm:px-8 lg:px-20">
        <div className="max-w-[700px]">
          <p className="mb-4 text-[13px] font-semibold uppercase text-kolss-warm-white/82">
            {eyebrow}
          </p>
          <h1 id="page-hero-title" className="hero-title text-[32px] sm:text-[52px]">
            {h1}
          </h1>
          <p className="mt-5 text-[15px] leading-[1.6] text-kolss-warm-white/78">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="hero-cta hero-cta-primary">
              {primaryCta}
            </Link>
            <Link href={secondaryHref} className="hero-cta hero-cta-secondary">
              {secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
