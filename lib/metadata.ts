import type { Metadata } from "next";
import { routes, type Locale, type RouteKey } from "@/lib/i18n";

type PageMetadata = {
  title: string;
  description: string;
};

export const localizedMetadata: Record<
  Locale,
  { default: Metadata; pages: Record<RouteKey, PageMetadata> }
> = {
  de: {
    default: {
      title: {
        default: "DWS Direktwerbe-Service",
        template: "%s | DWS",
      },
      description:
        "DWS Direktwerbe-Service in Dortmund: Druck, Lettershop, Fulfillment und Lagerlogistik aus einer Hand.",
    },
    pages: {
      home: {
        title: "Startseite",
        description:
          "DWS Direktwerbe-Service in Dortmund verbindet Druck, Lettershop und Lagerlogistik für Geschäftskunden.",
      },
      services: {
        title: "Leistungen",
        description:
          "Integrierte Leistungen für Druck, Lettershop, Fulfillment und Lagerlogistik bei DWS Direktwerbe-Service.",
      },
      print: {
        title: "Druck",
        description:
          "Buchdruck, Digitaldruck und Offsetdruck für B2B-Projekte bei DWS Direktwerbe-Service in Dortmund.",
      },
      lettershop: {
        title: "Lettershop",
        description:
          "Konfektionierung, manuelle und maschinelle Verarbeitung sowie Versandlösungen bei DWS Direktwerbe-Service.",
      },
      warehouseLogistics: {
        title: "Lagerlogistik",
        description:
          "Einlagerung, Just-in-time-Koordination und Versand über DHL/DPAG bei DWS Direktwerbe-Service.",
      },
      about: {
        title: "Über uns",
        description:
          "DWS Direktwerbe-Service ist ein B2B-Dienstleister aus Dortmund für Druck, Lettershop, Fulfillment und Lagerlogistik.",
      },
      contact: {
        title: "Kontakt",
        description:
          "Kontakt zu DWS Direktwerbe-Service in Dortmund für Druck, Lettershop, Fulfillment und Lagerlogistik.",
      },
      imprint: {
        title: "Impressum",
        description: "Impressum der DWS Direktwerbe-Service Website.",
      },
      privacy: {
        title: "Datenschutz",
        description: "Datenschutzhinweise der DWS Direktwerbe-Service Website.",
      },
    },
  },
  en: {
    default: {
      title: {
        default: "DWS Direktwerbe-Service",
        template: "%s | DWS",
      },
      description:
        "DWS Direktwerbe-Service in Dortmund: print, lettershop, fulfillment and logistics from a single source.",
    },
    pages: {
      home: {
        title: "Home",
        description:
          "DWS supports B2B print, lettershop and logistics processes from Dortmund.",
      },
      services: {
        title: "Services",
        description:
          "Integrated print, lettershop and logistics services from DWS Direktwerbe-Service.",
      },
      print: {
        title: "Print",
        description:
          "Print production for business materials, mailing components and structured B2B workflows.",
      },
      lettershop: {
        title: "Lettershop",
        description:
          "Lettershop services for assembly, processing and shipping preparation.",
      },
      warehouseLogistics: {
        title: "Logistics",
        description:
          "Storage, stock preparation and shipping coordination for B2B processes.",
      },
      about: {
        title: "About Us",
        description:
          "DWS Direktwerbe-Service is a B2B service provider from Dortmund with a company history reaching back to 1952.",
      },
      contact: {
        title: "Contact",
        description:
          "Contact DWS Direktwerbe-Service for print, lettershop and logistics inquiries.",
      },
      imprint: {
        title: "Imprint",
        description:
          "English imprint placeholder for the DWS Direktwerbe-Service website.",
      },
      privacy: {
        title: "Privacy Policy",
        description:
          "English privacy policy placeholder for the DWS Direktwerbe-Service website.",
      },
    },
  },
};

export function getDefaultMetadata(locale: Locale = "de"): Metadata {
  const metadata = localizedMetadata[locale].default;

  // TODO: Add canonical and hreflang alternates only after real English pages
  // and reviewed English metadata exist. Do not emit /en alternates before then.
  return metadata;
}

export function getPageMetadata(
  key: RouteKey,
  locale: Locale = "de",
): Metadata {
  const pageMetadata = localizedMetadata[locale].pages[key];

  return {
    ...pageMetadata,
    alternates: {
      canonical: routes[locale][key],
      languages: {
        de: routes.de[key],
        en: routes.en[key],
        "x-default": routes.de[key],
      },
    },
  };
}
