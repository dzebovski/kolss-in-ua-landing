export const siteConfig = {
  name: "KOLSS",
  title: "Кухні та меблі на замовлення в Києві й області | KOLSS",
  description:
    "KOLSS виготовляє кухні, гардеробні, меблі для дитячих, ванних і всього дому на індивідуальне замовлення. Власне виробництво, ЛДСП 18 мм, шпоновані та дерев'яні фасади, гарантія 2 роки.",
  locale: "uk_UA",
  language: "uk-UA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://furniture.kolss.in.ua",
} as const;

export const mainNavigation = [
  { label: "Пропозиція", href: "#oferta" },
  { label: "Матеріали", href: "#materialy" },
  { label: "Реалізації", href: "#realizacje" },
  { label: "Процес", href: "#proces" },
  { label: "Салон", href: "#salon" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#kontakt" },
] as const;

export const headerNavigation = [
  { label: "Головна", href: "/" },
  { label: "Кухні", href: "/kitchens" },
  { label: "Меблі", href: "/furniture" },
  { label: "Контакти", href: "/contacts" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
