import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceListBlock } from "@/components/ServiceListBlock";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("print");

const typicalServices = [
  "Buchdruck",
  "Digitaldruck",
  "Offsetdruck",
  "Mailings und Beilagen",
  "Formulare und Geschäftsdrucksachen",
];

const suitableFor = [
  "Unternehmen",
  "Agenturen",
  "Druckereien",
  "Verlage",
  "Behörden",
];

const steps = [
  "Projektanforderungen klären",
  "Druckverfahren und Material abstimmen",
  "Produktion für die Weiterverarbeitung vorbereiten",
];

const benefits = [
  "Passende Verfahren für unterschiedliche Auflagen",
  "Abstimmung mit Weiterverarbeitung und Versand",
  "Klare Umsetzung geschäftlicher Drucksachen",
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Druckmaschine",
    alt: "Druckmaschine im Produktionsumfeld bei DWS",
    src: "/images/gallery/druckmaschine-urbanekuenste.jpg",
  },
  {
    caption: "Druckbogen",
    alt: "Gedruckter Bogen als Bestandteil eines Druckprojekts",
    src: "/images/gallery/skoda-druckbogen.jpg",
  },
  {
    caption: "Druckproduktion",
    alt: "Druckproduktion für geschäftliche Anwendungen",
    src: "/images/gallery/druckproduktion-skoda.jpg",
  },
];

export default function DruckPage() {
  return (
    <>
      <PageHero
        eyebrow="Druck"
        title="Printproduktion für planbare B2B-Prozesse."
        description="DWS produziert geschäftliche Drucksachen, Mailingbestandteile und projektbezogene Printmaterialien im Zusammenspiel mit Lettershop und Logistik."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Einordnung"
            title="Druck als Teil eines abgestimmten Ablaufs."
            description="Das passende Druckverfahren richtet sich nach Auflage, Material, Personalisierung und Weiterverarbeitung."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS produziert Drucksachen für geschäftliche Anwendungen und stimmt
              die Produktion bei Bedarf direkt mit Lettershop, Lagerung und Versand
              ab.
            </p>
            <p>
              Dadurch werden Material, Termine und weitere Verarbeitungsschritte
              früh im Projekt berücksichtigt.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src="/images/gallery/druckmaschine-urbanekuenste.jpg"
            alt="Druckmaschine im Produktionsumfeld bei DWS"
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
            eyebrow="Workflow"
            title="Druckdaten, Termine und Versandziel im Blick."
            description="Bei integrierten Projekten wird die Druckproduktion früh mit Verarbeitung und Versand abgestimmt. Das reduziert Reibung zwischen Produktionsschritten und erleichtert eine verlässliche Terminplanung."
          />
        </div>
      </section>
      <ServicePageSections
        steps={steps}
        benefits={benefits}
        galleryItems={galleryItems}
        relatedLinks={[
          {
            label: "Lettershop",
            href: getRoute("de", "lettershop"),
            description: "Konfektionierung, Verarbeitung und Versandvorbereitung.",
          },
          {
            label: "Lagerlogistik",
            href: getRoute("de", "warehouseLogistics"),
            description: "Einlagerung, Abrufkoordination und Versandsteuerung.",
          },
        ]}
      />
      <CTASection title="Sie planen ein Druck- oder Mailingprojekt?" />
    </>
  );
}
