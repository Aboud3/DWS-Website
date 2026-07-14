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
        default: "DWS Druckwerbe-Service + Logistik",
        template: "%s | DWS",
      },
      description:
        "DWS Druckwerbe-Service + Logistik in Dortmund: Design, Druck, Lettershop, Fulfillment und Lagerlogistik aus einer Hand.",
    },
    pages: {
      home: {
        title: "Startseite",
        description:
          "DWS Druckwerbe-Service + Logistik in Dortmund verbindet Design, Druck, Lettershop und Lagerlogistik für Unternehmen, Organisationen, Vereine und Privatkunden.",
      },
      services: {
        title: "Leistungen",
        description:
          "Integrierte Leistungen für Design, Druck, Lettershop, Fulfillment und Lagerlogistik bei DWS Druckwerbe-Service + Logistik.",
      },
      design: {
        title: "Design",
        description:
          "Design, Layout und druckfertige Datenvorbereitung für Druck, Mailing und Logistik bei DWS Druckwerbe-Service + Logistik.",
      },
      print: {
        title: "Druck",
        description:
          "Buchdruck, Digitaldruck und Offsetdruck für Projekte bei DWS Druckwerbe-Service + Logistik in Dortmund.",
      },
      lettershop: {
        title: "Lettershop",
        description:
          "Konfektionierung, manuelle und maschinelle Verarbeitung sowie Versandlösungen bei DWS Druckwerbe-Service + Logistik.",
      },
      warehouseLogistics: {
        title: "Lagerlogistik",
        description:
          "Einlagerung, Just-in-time-Koordination und Versand über DHL/DPAG bei DWS Druckwerbe-Service + Logistik.",
      },
      about: {
        title: "Über uns",
        description:
          "DWS Druckwerbe-Service + Logistik ist ein Dienstleister aus Dortmund für Design, Druck, Lettershop, Fulfillment und Lagerlogistik.",
      },
      contact: {
        title: "Kontakt",
        description:
          "Kontakt zu DWS Druckwerbe-Service + Logistik in Dortmund für Design, Druck, Lettershop, Fulfillment und Lagerlogistik.",
      },
      imprint: {
        title: "Impressum",
        description: "Impressum der Website von DWS Druckwerbe-Service + Logistik GmbH.",
      },
      privacy: {
        title: "Datenschutz",
        description: "Datenschutzhinweise der Website von DWS Druckwerbe-Service + Logistik GmbH.",
      },
    },
  },
  en: {
    default: {
      title: {
        default: "DWS Druckwerbe-Service + Logistik",
        template: "%s | DWS",
      },
      description:
        "DWS Druckwerbe-Service + Logistik in Dortmund: design, print, lettershop, fulfillment and logistics from a single source.",
    },
    pages: {
      home: {
        title: "Home",
        description:
          "DWS supports design, print, lettershop and logistics processes from Dortmund.",
      },
      services: {
        title: "Services",
        description:
          "Integrated design, print, lettershop and logistics services from DWS Druckwerbe-Service + Logistik.",
      },
      design: {
        title: "Design",
        description:
          "Design, layout and print-ready data preparation for print, mailing and logistics workflows at DWS Druckwerbe-Service + Logistik.",
      },
      print: {
        title: "Print",
        description:
          "Print production for business materials, mailing components and structured workflows.",
      },
      lettershop: {
        title: "Lettershop",
        description:
          "Lettershop services for assembly, processing and shipping preparation.",
      },
      warehouseLogistics: {
        title: "Logistics",
        description:
          "Storage, stock preparation and shipping coordination for structured processes.",
      },
      about: {
        title: "About Us",
        description:
          "DWS Druckwerbe-Service + Logistik is a Dortmund-based service provider for design, print, lettershop, fulfillment and logistics with a company history reaching back to 1952.",
      },
      contact: {
        title: "Contact",
        description:
          "Contact DWS Druckwerbe-Service + Logistik for design, print, lettershop and logistics inquiries.",
      },
      imprint: {
        title: "Imprint",
        description:
          "English imprint placeholder for the website of DWS Druckwerbe-Service + Logistik GmbH.",
      },
      privacy: {
        title: "Privacy Policy",
        description:
          "English privacy policy placeholder for the website of DWS Druckwerbe-Service + Logistik GmbH.",
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
