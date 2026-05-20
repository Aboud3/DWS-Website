import { getRoute, type Locale } from "@/lib/i18n";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
  points: string[];
};

export const navigationByLocale: Record<Locale, NavItem[]> = {
  de: [
    { label: "Leistungen", href: getRoute("de", "services") },
    { label: "Druck", href: getRoute("de", "print") },
    { label: "Lettershop", href: getRoute("de", "lettershop") },
    { label: "Lagerlogistik", href: getRoute("de", "warehouseLogistics") },
    { label: "Über uns", href: getRoute("de", "about") },
    { label: "Kontakt", href: getRoute("de", "contact") },
  ],
  en: [
    { label: "Services", href: getRoute("en", "services") },
    { label: "Print", href: getRoute("en", "print") },
    { label: "Lettershop", href: getRoute("en", "lettershop") },
    {
      label: "Logistics",
      href: getRoute("en", "warehouseLogistics"),
    },
    { label: "About us", href: getRoute("en", "about") },
    { label: "Contact", href: getRoute("en", "contact") },
  ],
};

export const navigation: NavItem[] = navigationByLocale.de;

export const services: Service[] = [
  {
    title: "Druck",
    href: getRoute("de", "print"),
    eyebrow: "Printproduktion",
    description:
      "Buchdruck, Digitaldruck und Offsetdruck für Mailings, Beilagen, Formulare und geschäftliche Drucksachen.",
    points: ["Buchdruck", "Digitaldruck", "Offsetdruck"],
  },
  {
    title: "Lettershop",
    href: getRoute("de", "lettershop"),
    eyebrow: "Verarbeitung",
    description:
      "Konfektionierung, manuelle und maschinelle Verarbeitung sowie Versandvorbereitung für Kampagnen und Serienmailings.",
    points: ["Konfektionierung", "Maschinelle Verarbeitung", "Versandlösungen"],
  },
  {
    title: "Lagerlogistik",
    href: getRoute("de", "warehouseLogistics"),
    eyebrow: "Fulfillment",
    description:
      "Einlagerung, Just-in-time-Koordination und Versandsteuerung über DHL und DPAG aus Dortmund.",
    points: ["Einlagerung", "Just-in-time-Koordination", "DHL/DPAG-Versand"],
  },
];

export const companyContact = {
  company: "DWS Druckwerbe-Service und Logistik GmbH",
  street: "Harpener Str. 8a",
  postalCode: "44309",
  city: "Dortmund",
  country: "Germany",
  email: "post@direktwerbe-service.de",
  phone: "0231 - 9250550",
  support: "0231 - 92505529",
};
