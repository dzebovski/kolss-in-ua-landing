import {
  IconArrowRight,
  IconBuildingFactory2,
  IconCalculator,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconCurrencyHryvnia,
  IconMapPin,
  IconMessageCircle,
  IconRulerMeasure,
  IconShieldCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { contact, type PageContent } from "@/lib/kolss-content";
import { JsonLd } from "./json-ld";
import { LeadForm } from "./lead-form";

type LandingPageProps = {
  page: PageContent;
};

export function LandingPage({ page }: LandingPageProps) {
  return (
    <article className="landing-page">
      <JsonLd data={page.jsonLd} />
      <Hero page={page} />
      <ProofStrip items={page.proof} />
      <ShortAnswer text={page.shortAnswer} />
      <Sections sections={page.sections} />
      <ImageMosaic page={page} />
      <LeadForm
        title={page.formTitle}
        description={page.formDescription}
        defaultLeadType={page.leadType}
        submitLabel={page.formPrimary}
      />
      <Faq items={page.faq} />
    </article>
  );
}

function Hero({ page }: LandingPageProps) {
  return (
    <header className="hero">
      <div className="hero__copy">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Головна</Link>
          {page.path !== "/" ? <span>{page.breadcrumb}</span> : null}
        </nav>
        <p className="section-kicker">{page.eyebrow}</p>
        <h1>{page.h1}</h1>
        <p className="hero__lead">{page.lead}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#lead-form">
            <IconCalculator aria-hidden size={19} stroke={1.9} />
            {page.primaryCta}
          </a>
          <a className="btn btn--ghost" href={page.key === "contacts" ? contact.mapsUrl : "#lead-form"}>
            {page.key === "contacts" ? (
              <IconMapPin aria-hidden size={19} stroke={1.9} />
            ) : (
              <IconMessageCircle aria-hidden size={19} stroke={1.9} />
            )}
            {page.secondaryCta}
          </a>
        </div>
      </div>
      <div className="hero__media">
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
        />
        <div className="hero__caption">
          <span>KOLSS</span>
          <span>Київ та область</span>
        </div>
      </div>
    </header>
  );
}

function ProofStrip({ items }: { items: string[] }) {
  return (
    <section className="proof-strip" aria-label="Переваги KOLSS">
      {items.map((item) => (
        <span key={item}>
          <ProofIcon item={item} />
          {item}
        </span>
      ))}
    </section>
  );
}

function ProofIcon({ item }: { item: string }) {
  const iconProps = { "aria-hidden": true, size: 18, stroke: 1.85 };

  if (item.includes("20 000") || item.includes("Вартість")) {
    return <IconCurrencyHryvnia {...iconProps} />;
  }

  if (item.includes("гаранті")) {
    return <IconShieldCheck {...iconProps} />;
  }

  if (item.includes("тиж")) {
    return <IconClock {...iconProps} />;
  }

  if (item.includes("заміри") || item.includes("ЛДСП")) {
    return <IconRulerMeasure {...iconProps} />;
  }

  return <IconBuildingFactory2 {...iconProps} />;
}

function ShortAnswer({ text }: { text: string }) {
  return (
    <section className="answer-card" aria-label="Коротка відповідь">
      <p className="section-kicker">Коротко</p>
      <p>{text}</p>
    </section>
  );
}

function Sections({ sections }: { sections: PageContent["sections"] }) {
  return (
    <div className="content-stack">
      {sections.map((section, index) => (
        <section className="content-section" key={section.title}>
          <div className="content-section__heading">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
            <p>{section.intro}</p>
          </div>

          {section.rows ? (
            <div className="data-grid">
              {section.rows.map((row) => (
                <div className="data-card" key={`${section.title}-${row.label}`}>
                  <h3>
                    <IconArrowRight aria-hidden size={17} stroke={1.8} />
                    {row.label}
                  </h3>
                  <p>{row.value}</p>
                  {row.note ? <small>{row.note}</small> : null}
                </div>
              ))}
            </div>
          ) : null}

          {section.bullets ? (
            <ul className="check-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>
                  <IconCheck aria-hidden size={18} stroke={2} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.steps ? (
            <ol className="process-list">
              {section.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}

          {section.callout ? <p className="section-callout">{section.callout}</p> : null}
        </section>
      ))}
    </div>
  );
}

function ImageMosaic({ page }: LandingPageProps) {
  return (
    <section className="mosaic" aria-label="Приклади робіт KOLSS">
      <div className="mosaic__heading">
        <p className="section-kicker">Фактура</p>
        <h2>Матеріали й пропорції, які видно без пояснень</h2>
      </div>
      <div className="mosaic__grid">
        {page.gallery.map((image) => (
          <figure key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 90vw, 31vw" />
            <figcaption>{image.tone}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq({ items }: { items: PageContent["faq"] }) {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq__heading">
        <p className="section-kicker">FAQ</p>
        <h2 id="faq-title">Питання, які варто закрити до консультації</h2>
      </div>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              <span>{item.question}</span>
              <IconChevronDown aria-hidden size={19} stroke={1.9} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
