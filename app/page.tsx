import Link from "next/link";
import { ContactSection } from "@/app/_components/home/ContactSection";
import { GeoSection } from "@/app/_components/home/GeoSection";
import { HeroSection } from "@/app/_components/home/HeroSection";
import { MaterialsSection } from "@/app/_components/home/MaterialsSection";
import { OfferSection } from "@/app/_components/home/OfferSection";
import { PricingSection } from "@/app/_components/home/PricingSection";
import { ProcessSection } from "@/app/_components/home/ProcessSection";
import { ProofSection } from "@/app/_components/home/ProofSection";
import { SalonSection } from "@/app/_components/home/SalonSection";
import { TrustSection } from "@/app/_components/home/TrustSection";
import { WhySection } from "@/app/_components/home/WhySection";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { StickyMobileCta } from "@/app/_components/sticky-mobile-cta";
import { ShortAnswer } from "@/app/_components/shared/ShortAnswer";
import { FaqSection } from "@/app/_components/shared/FaqSection";
import { faqItems, shortAnswer } from "@/app/_content/home";
import { buildHomeJsonLd, serializeJsonLd } from "@/lib/seo/jsonld";

export default function HomePage() {
  const jsonLd = buildHomeJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <div className="min-h-screen bg-background pb-20 lg:pb-0">
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:text-background"
        >
          Перейти до змісту
        </Link>
        <SiteHeader quoteHref="#kontakt" salonHref="/contacts" />
        <main id="main-content">
          <HeroSection />
          <TrustSection />
          <ShortAnswer text={shortAnswer} />
          <OfferSection />
          <WhySection />
          <ProcessSection />
          <PricingSection />
          <GeoSection />
          <MaterialsSection />
          <ProofSection />
          <SalonSection />
          <FaqSection items={faqItems} />
          <ContactSection />
        </main>
        <SiteFooter />
        <StickyMobileCta />
      </div>
    </>
  );
}
