export const contact = {
  company: "KOLSS",
  streetAddress: "вул. Тетяни Яблонської, 20",
  postalCode: "03058",
  city: "Київ",
  phone: "+380 67 209 2927",
  phoneHref: "tel:+380672092927",
  instagram: "https://www.instagram.com/kolss.in.ua/",
  facebook: "https://www.facebook.com/kolss.ua/",
  latitude: 50.43724412306299,
  longitude: 30.442910698020345,
} as const;

export const salonRouteHref =
  "https://www.google.com/maps/dir/?api=1&destination=50.43724412306299%2C30.442910698020345";

export const salonMapSrc =
  "https://www.google.com/maps?q=50.43724412306299%2C30.442910698020345&output=embed";

export const mapsSearchHref =
  "https://www.google.com/maps/search/?api=1&query=50.43724412306299,30.442910698020345";

export const openingHours = [
  ["Понеділок–П'ятниця", "10:00–19:00"],
  ["Субота", "10:00–17:00"],
  ["Неділя", "вихідний"],
] as const;

export const compactOpeningHours = [
  ["Пн–Пт", "10:00–19:00"],
  ["Субота", "10:00–17:00"],
  ["Неділя", "вихідний"],
] as const;
