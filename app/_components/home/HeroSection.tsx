import Image from "next/image";
import Link from "next/link";
import { hero } from "@/app/_content/home";
import { homeImages } from "@/app/_content/images";

export function HeroSection() {
  return (
    <section
      id="start"
      aria-labelledby="hero-title"
      className="home-hero dark-section relative isolate overflow-hidden border-b border-kolss-charcoal bg-kolss-charcoal text-kolss-warm-white"
    >
      <Image
        src={homeImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="hero-readability-layer" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[var(--hero-min-height)] w-full max-w-[1440px] items-center px-5 py-[clamp(6.5rem,13svh,8rem)] sm:px-8 lg:px-20">
        <div className="max-w-[660px]">
          <p className="mb-5 text-[13px] font-semibold uppercase text-kolss-warm-white/82 sm:text-base">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="hero-title text-[34px] font-semibold leading-[1.02] sm:text-[56px] lg:text-[66px]"
          >
            {hero.h1}
          </h1>
          <p className="mt-6 max-w-[610px] text-[14px] leading-[1.6] text-kolss-warm-white/78 sm:text-base">
            {hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#kontakt" className="hero-cta hero-cta-primary">
              {hero.primaryCta}
            </Link>
            <Link href="#kontakt" className="hero-cta hero-cta-secondary">
              {hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-7 text-[12px] font-semibold uppercase text-kolss-warm-white/62 sm:text-[13px]">
            {hero.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
