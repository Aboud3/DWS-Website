import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceListBlock } from "@/components/ServiceListBlock";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("warehouseLogistics");

const typicalServices = [
  "Einlagerung",
  "Bestandsbereitstellung",
  "Just-in-time-Koordination",
  "Versandsteuerung",
  "DHL/DPAG-Versandprozesse",
];

const suitableFor = [
  "Wiederkehrende Kampagnen",
  "Print- und Werbemittelbestände",
  "Projektbezogene Distribution",
  "Unternehmen mit planbarem Materialfluss",
];

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

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:px-8 lg:grid-cols-2">
          <ServiceListBlock title="Typische Leistungen" items={typicalServices} />
          <ServiceListBlock title="Geeignet für" items={suitableFor} />
        </div>
      </section>

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
