import type { StaticImageData } from "next/image";

import hero from "@/assets/images/home/hero.jpg";
import kitchenHero from "@/assets/images/home/kitchen-hero.jpg";
import furnitureHero from "@/assets/images/home/furniture-hero.webp";
import showroomKyiv from "@/assets/images/salon/showroom-kyiv.webp";
import kitchenLiving from "@/assets/images/proof/kitchen-living.webp";
import bathroom from "@/assets/images/proof/bathroom.jpg";
import production from "@/assets/images/proof/production.jpg";

import light from "@/assets/images/kitchens/1-light-main.png";
import capri from "@/assets/images/kitchens/2-capri-main.png";
import lade from "@/assets/images/kitchens/3-lade-main.png";
import alegranza from "@/assets/images/kitchens/4-alegranza-main.png";
import koko from "@/assets/images/kitchens/5-koko-main.png";
import madeyra from "@/assets/images/kitchens/6-madeyra-main.png";
import loft from "@/assets/images/kitchens/7-loft-main.png";
import grand from "@/assets/images/kitchens/8-grand-main.png";
import fores from "@/assets/images/kitchens/9-fores-main.png";
import nota from "@/assets/images/kitchens/10-nota-main.png";
import merenge from "@/assets/images/kitchens/11-merenge-main.png";
import rondo from "@/assets/images/kitchens/12-rondo-main.png";
import mdf from "@/assets/images/kitchens/13-mdf-main.png";

export const homeImages = {
  hero,
  kitchenLiving,
  bathroom,
  production,
} as const;

export const pageHeroImages = {
  kitchens: kitchenHero,
  furniture: furnitureHero,
  contacts: showroomKyiv,
} as const;

export const salonImage = showroomKyiv;

export type KitchenCollection = {
  title: string;
  subtitle: string;
  bestFor: string;
  image: StaticImageData;
  alt: string;
};

export const kitchenCollections: KitchenCollection[] = [
  {
    title: "Light",
    subtitle: "Світла сучасна кухня",
    bestFor: "Новобудови, мінімалізм, світлі інтер'єри",
    image: light,
    alt: "Кухня KOLSS колекція Light",
  },
  {
    title: "Capri",
    subtitle: "Спокійна середземноморська естетика",
    bestFor: "Квартири з природним світлом",
    image: capri,
    alt: "Кухня KOLSS колекція Capri",
  },
  {
    title: "Lade",
    subtitle: "Чисті лінії і практичність",
    bestFor: "Щоденне користування без візуального шуму",
    image: lade,
    alt: "Кухня KOLSS колекція Lade",
  },
  {
    title: "Alegranza",
    subtitle: "Теплі натуральні фактури",
    bestFor: "Стриманий преміум з деревом і шпоном",
    image: alegranza,
    alt: "Кухня KOLSS колекція Alegranza",
  },
  {
    title: "Koko",
    subtitle: "М'які контрасти і зручне зонування",
    bestFor: "Кухні-вітальні та відкриті простори",
    image: koko,
    alt: "Кухня KOLSS колекція Koko",
  },
  {
    title: "Madeyra",
    subtitle: "Натуральний характер фасадів",
    bestFor: "Проєкти з дерев'яними акцентами",
    image: madeyra,
    alt: "Кухня KOLSS колекція Madeyra",
  },
  {
    title: "Loft",
    subtitle: "Сучасний індустріальний настрій",
    bestFor: "Лофти та урбаністичні інтер'єри",
    image: loft,
    alt: "Кухня KOLSS колекція Loft",
  },
  {
    title: "Grand",
    subtitle: "Просторі кухні з островом",
    bestFor: "Великі кухні та будинки",
    image: grand,
    alt: "Кухня KOLSS колекція Grand",
  },
  {
    title: "Fores",
    subtitle: "Шпон і спокійна геометрія",
    bestFor: "Клієнти, які цінують натуральні фактури",
    image: fores,
    alt: "Кухня KOLSS колекція Fores",
  },
  {
    title: "Nota",
    subtitle: "Лаконічний преміальний вигляд",
    bestFor: "Дизайнерські проєкти квартир",
    image: nota,
    alt: "Кухня KOLSS колекція Nota",
  },
  {
    title: "Merenge",
    subtitle: "Світлі фасади з характером",
    bestFor: "Сімейні кухні та open space",
    image: merenge,
    alt: "Кухня KOLSS колекція Merenge",
  },
  {
    title: "Rondo",
    subtitle: "М'які форми і збалансовані пропорції",
    bestFor: "Затишні кухні в квартирах",
    image: rondo,
    alt: "Кухня KOLSS колекція Rondo",
  },
  {
    title: "MDF",
    subtitle: "Фарбовані фасади під колір",
    bestFor: "Проєкти з RAL/NCS і чистими лініями",
    image: mdf,
    alt: "Кухня KOLSS колекція MDF",
  },
];

export const proofImages = [
  { src: kitchenLiving, alt: "Кухня та вітальня KOLSS" },
  { src: bathroom, alt: "Меблі для ванної KOLSS" },
  { src: production, alt: "Виробництво KOLSS" },
] as const;
