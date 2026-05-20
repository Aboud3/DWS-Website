import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceListBlock } from "@/components/ServiceListBlock";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("lettershop");

const typicalServices = [
  "Konfektionierung",
  "Manuelle Verarbeitung",
  "Maschinelle Verarbeitung",
  "Versandvorbereitung",
  "Serienmailings",
];

const suitableFor = [
  "Direktmailing-Kampagnen",
  "Wiederkehrende Aussendungen",
  "Beilagen- und Informationsversand",
  "Projektbezogene Versandaktionen",
];

const steps = [
  "Material übernehmen und prüfen",
  "Manuell oder maschinell konfektionieren",
  "Versandfertig vorbereiten",
];

const benefits = [
  "Flexible Verarbeitung je nach Projektumfang",
  "Verbindung von Konfektionierung und Versand",
  "Planbare Abläufe für wiederkehrende Aussendungen",
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Kuvertierung",
    alt: "Kuvert als Bestandteil der Versandvorbereitung",
    src: "/images/gallery/mailing-kuvert.jpg",
  },
  {
    caption: "Mailing",
    alt: "Mailingbestandteile für eine Aussendung",
    src: "/images/gallery/urbanekuenste-mailing.jpg",
  },
  {
    caption: "Lasercut-Karte",
    alt: "Verarbeitete Karte als Bestandteil eines Mailingprojekts",
    src: "/images/gallery/weihnachtskarte-lasercut.jpg",
  },
];

export default function LettershopPage() {
  return (
    <>
      <PageHero
        eyebrow="Lettershop"
        title="Verarbeitung und Versandvorbereitung mit System."
        description="DWS übernimmt die praktische Umsetzung von Mailingprozessen: konfektionieren, verarbeiten, sortieren, bereitstellen und für den Versand vorbereiten."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Einordnung"
            title="Lettershop für planbare Aussendungen."
            description="Je nach Material, Umfang und Komplexität wird der Prozess passend eingerichtet und mit Produktion oder Lagerlogistik verbunden."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS übernimmt die Verarbeitung von Mailingbestandteilen und bereitet
              Sendungen entsprechend Material, Menge und Versandziel vor.
            </p>
            <p>
              Manuelle und maschinelle Schritte werden passend zum Projekt
              kombiniert, wenn Formate, Beilagen oder Abläufe dies erfordern.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src="/images/gallery/mailing-kuvert.jpg"
            alt="Kuvert als Bestandteil der Versandvorbereitung bei DWS"
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
            eyebrow="Koordination"
            title="Vom Druckbogen bis zur sendefertigen Einheit."
            description="DWS achtet auf Materialfluss, eindeutige Zuordnung und saubere Übergaben in den Versand. Dadurch bleiben auch mehrstufige Projekte nachvollziehbar."
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
            label: "Lagerlogistik",
            href: getRoute("de", "warehouseLogistics"),
            description: "Einlagerung, Abrufkoordination und Versandsteuerung.",
          },
        ]}
      />
      <CTASection title="Sie benötigen Unterstützung im Lettershop?" />
    </>
  );
}
