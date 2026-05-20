import { absoluteUrl, siteConfig } from "@/lib/site";
import { contact } from "@/lib/contact";

export type FaqItem = {
  question: string;
  answer: string;
};

export function serializeJsonLd(jsonLd: unknown): string {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

const businessId = () => `${absoluteUrl()}#business`;
const websiteId = () => `${absoluteUrl()}#website`;

function furnitureStoreNode() {
  return {
    "@type": "FurnitureStore",
    "@id": businessId(),
    name: contact.company,
    url: absoluteUrl(),
    telephone: contact.phone.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.streetAddress,
      addressLocality: contact.city,
      postalCode: contact.postalCode,
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.latitude,
      longitude: contact.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${contact.latitude},${contact.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Київ" },
      { "@type": "AdministrativeArea", name: "Київська область" },
    ],
    sameAs: [contact.instagram, contact.facebook],
    priceRange: "Кухні від 20 000 грн/пог. м",
  };
}

export function buildHomeJsonLd(faqItems: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl()}#webpage`,
        url: absoluteUrl(),
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId() },
        about: { "@id": businessId() },
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: absoluteUrl(),
        name: siteConfig.name,
        inLanguage: siteConfig.language,
      },
      furnitureStoreNode(),
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl()}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Головна",
            item: absoluteUrl(),
          },
        ],
      },
      faqPageNode(`${absoluteUrl()}#faq`, faqItems),
    ],
  };
}

export function buildKitchensJsonLd(faqItems: readonly FaqItem[]) {
  const url = absoluteUrl("/kitchens");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Кухні на замовлення в Києві від 20 000 грн/м | KOLSS",
        description:
          "Кухні на замовлення KOLSS у Києві та області: корпуси з ЛДСП 18 мм, шпоновані або дерев'яні фасади, фурнітура Blum, виробництво від 4 тижнів, гарантія 2 роки.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId() },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Кухні на замовлення в Києві",
        serviceType: "Виготовлення кухонь на індивідуальне замовлення",
        provider: { "@id": businessId() },
        areaServed: [
          { "@type": "City", name: "Київ" },
          { "@type": "AdministrativeArea", name: "Київська область" },
        ],
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "UAH",
          price: "20000",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "20000",
            priceCurrency: "UAH",
            unitText: "погонний метр",
          },
          description:
            "Орієнтовна стартова ціна кухні KOLSS - від 20 000 грн за погонний метр.",
        },
      },
      breadcrumbNode(url, "Кухні"),
      faqPageNode(`${url}#faq`, faqItems),
    ],
  };
}

export function buildFurnitureJsonLd(faqItems: readonly FaqItem[]) {
  const url = absoluteUrl("/furniture");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Меблі на замовлення для всього дому в Києві | KOLSS",
        description:
          "KOLSS виготовляє меблі на замовлення для гардеробних, дитячих, ванних, віталень, передпокоїв і всього дому.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId() },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Меблі на замовлення в Києві",
        serviceType: "Виготовлення корпусних меблів на індивідуальне замовлення",
        provider: { "@id": businessId() },
        areaServed: [
          { "@type": "City", name: "Київ" },
          { "@type": "AdministrativeArea", name: "Київська область" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Меблі KOLSS на замовлення",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Гардеробні на замовлення" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Шафи на замовлення" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Меблі для дитячих кімнат" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Меблі для ванних кімнат" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Комплексне меблювання дому" } },
          ],
        },
      },
      breadcrumbNode(url, "Меблі"),
      faqPageNode(`${url}#faq`, faqItems),
    ],
  };
}

export function buildContactsJsonLd(faqItems: readonly FaqItem[]) {
  const url = absoluteUrl("/contacts");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        url,
        name: "Салон KOLSS у Києві | Контакти меблів на замовлення",
        description:
          "Салон KOLSS у Києві: вул. Тетяни Яблонської, 20. Телефон +380 67 209 2927.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId() },
        about: { "@id": businessId() },
      },
      furnitureStoreNode(),
      breadcrumbNode(url, "Контакти"),
      faqPageNode(`${url}#faq`, faqItems),
    ],
  };
}

function breadcrumbNode(pageUrl: string, pageName: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Головна",
        item: absoluteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

function faqPageNode(id: string, faqItems: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
