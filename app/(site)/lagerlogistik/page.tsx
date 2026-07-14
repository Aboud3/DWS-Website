import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { WarehouseCapacitySection } from "@/components/WarehouseCapacitySection";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("warehouseLogistics");

const steps = [
  "Bestände übernehmen und einlagern",
  "Projektbezogen bereitstellen",
  "Versand und Zustellung koordinieren",
];

const benefits = [
  "Materialflüsse besser planbar machen",
  "Lagerung und Versand enger verbinden",
  "Termingerechte Bereitstellung unterstützen",
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Lagerkoordination",
    alt: "Lagerkoordination mit Smartphone im Arbeitsumfeld",
    src: "/images/gallery/lager-smartphone.jpg",
  },
  {
    caption: "Terminplanung",
    alt: "Kalenderansicht zur Koordination wiederkehrender Abläufe",
    src: "/images/gallery/dws-kalender.jpg",
  },
];

const warehouseCapacityLists = [
  {
    title: "Leistungen",
    items: [
      "Einlagerung Ihrer Produkte",
      "Order-Management",
      "Konfektionierung und Qualitätsverpackung",
      "Lieferschein- und Rechnungsdruck",
      "Termingerechte Auslieferung per Paketdienst, Spedition, Kurier oder Direktfahrt",
      "Internationaler Versand einschließlich Zollabwicklung",
      "Retouren- und Responsemanagement",
    ],
  },
  {
    title: "Einlagerung kurz- & langfristig",
    items: [
      "Hochregallager",
      "Kleinteilelager",
      "Einzellager für sperrige Güter",
      "Sicherheitslager für empfindliche und hochwertige Waren",
    ],
  },
];

const warehouseMetrics = [
  { label: "Lagerfläche", value: "1.000 m²" },
  { label: "Nutzfläche gesamt", value: "2.500 m²" },
  { label: "Palettenstellplätze", value: "800" },
];

const warehouseFacts = [
  "EDV-gestützte Lagerverwaltung",
  "Fachpersonal für Lagermanagement und Kommissionierung",
  "Permanente Inventur",
  "Moderne Hub- und Staplertechnik",
];

export default function LagerlogistikPage() {
  return (
    <>
      <PageHero
        eyebrow="Lagerlogistik"
        title="Lagerung und Versandsteuerung für B2B-Prozesse."
        description="DWS verbindet Einlagerung, Abrufkoordination und Versand, damit Materialien termingerecht bereitstehen und zielgerichtet ausgeliefert werden."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Einordnung"
            title="Lagerlogistik für planbaren Materialfluss."
            description="Die logistischen Schritte werden auf Kampagnen, wiederkehrende Sendungen und projektbezogene Anforderungen ausgerichtet."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS lagert Drucksachen, Werbemittel und Versandmaterialien ein und
              stellt Bestände projektbezogen bereit.
            </p>
            <p>
              Abrufe, Zeitfenster und Versandwege werden so koordiniert, dass
              wiederkehrende Prozesse nachvollziehbar steuerbar bleiben.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src="/images/gallery/lager-smartphone.jpg"
            alt="Lagerkoordination mit Smartphone im Arbeitsumfeld bei DWS"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover grayscale saturate-[0.75] contrast-[0.95]"
          />
        </div>
      </section>

      <WarehouseCapacitySection
        eyebrow="Lagerkapazität"
        title="Wir haben Platz … auch für Ihre Produkte"
        description="Wir erarbeiten mit Ihnen ein Konzept zur bedarfsorientierten und termingerechten Lieferung Ihrer Printmedien oder sonstigen Waren. Dazu gehört nicht nur die Bereitstellung von E-Mail-Accounts, sondern auch die Gewissheit, dass die richtige Menge zur richtigen Zeit in der richtigen Qualität und beim richtigen Empfänger ankommt."
        lists={warehouseCapacityLists}
        factsLabel="Zahlen und Fakten"
        metrics={warehouseMetrics}
        facts={warehouseFacts}
      />

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <SectionHeading
            eyebrow="Dortmund"
            title="Operative Koordination an einem Standort."
            description="Mit dem Standort Dortmund lassen sich Druck, Verarbeitung und Versandlogistik eng abstimmen. Das unterstützt kurze Wege und verlässliche Abstimmung im Tagesgeschäft."
          />
        </div>
      </section>
      <ServicePageSections
        steps={steps}
        benefits={benefits}
        galleryItems={galleryItems}
        relatedLinks={[
          {
            label: "Druck",
            href: getRoute("de", "print"),
            description:
              "Printproduktion für geschäftliche Anwendungen und Mailingprojekte.",
          },
          {
            label: "Lettershop",
            href: getRoute("de", "lettershop"),
            description: "Konfektionierung, Verarbeitung und Versandvorbereitung.",
          },
        ]}
      />
      <CTASection title="Sie suchen eine lagergestützte Versandlösung?" />
    </>
  );
}
