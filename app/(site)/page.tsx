import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ImageGallery, type GalleryItem } from "@/components/ImageGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("home");

const processSteps = [
  {
    title: "Beratung",
    description:
      "Anforderungen, Mengen, Zeitplan und Versandziel werden gemeinsam abgestimmt.",
  },
  {
    title: "Druck",
    description:
      "Printprodukte werden passend zum Projekt vorbereitet und produziert.",
  },
  {
    title: "Konfektionierung",
    description:
      "Materialien werden manuell oder maschinell verarbeitet und versandfertig gemacht.",
  },
  {
    title: "Lagerung",
    description:
      "Bestände können eingelagert und projektbezogen bereitgestellt werden.",
  },
  {
    title: "Versand",
    description:
      "Sendungen werden vorbereitet und über passende Versandwege gesteuert.",
  },
];

const credibilityCards = [
  {
    title: "Unternehmenstradition seit 1952",
    text: "Langjährige Erfahrung in der Umsetzung wiederkehrender Print-, Mailing- und Logistikprozesse.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Druck, Verarbeitung, Lagerung und Versand werden abgestimmt koordiniert.",
  },
  {
    title: "Klare Ansprechpartner",
    text: "Kurze Wege und verbindliche Kommunikation für planbare Abläufe.",
  },
  {
    title: "Standort Dortmund",
    text: "Produktion, Verarbeitung und logistische Koordination aus Dortmund.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Druckproduktion",
    alt: "Einblick in die Druckproduktion bei DWS",
    src: "/images/gallery/druckmaschine-urbanekuenste.jpg",
  },
  {
    caption: "Versandvorbereitung",
    alt: "Einblick in die Versandvorbereitung bei DWS",
    src: "/images/gallery/mailing-kuvert.jpg",
  },
  {
    caption: "Lagerkoordination",
    alt: "Einblick in die Lagerkoordination bei DWS",
    src: "/images/gallery/lager-smartphone.jpg",
  },
  {
    caption: "Mailingbestandteile",
    alt: "Mailingbestandteile in der Verarbeitung bei DWS",
    src: "/images/gallery/urbanekuenste-mailing.jpg",
  },
  {
    caption: "Konfektionierung",
    alt: "Einblick in die Konfektionierung bei DWS",
    src: "/images/gallery/weihnachtskarte-lasercut.jpg",
  },
  {
    caption: "Bestandsbereitstellung",
    alt: "Einblick in die Bestandsbereitstellung bei DWS",
    src: "/images/gallery/dws-kalender.jpg",
  },
  {
    caption: "Druckbogen",
    alt: "Druckbogen im Produktionsprozess bei DWS",
    src: "/images/gallery/skoda-druckbogen.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
              DWS Direktwerbe-Service Dortmund
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-ink md:text-7xl">
              Druck, Lettershop und Lagerlogistik aus einer Hand.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl md:leading-9">
              DWS Direktwerbe-Service unterstützt Unternehmen, Agenturen,
              Behörden, Druckereien und Verlage bei der zuverlässigen Umsetzung
              von Print-, Mailing- und Logistikprozessen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={getRoute("de", "services")}>
                Leistungen ansehen
              </ButtonLink>
              <ButtonLink href={getRoute("de", "contact")} variant="secondary">
                Kontakt aufnehmen
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[540px]" aria-hidden="true">
            <div className="absolute inset-0 border border-zinc-200 bg-zinc-50" />
            <div className="absolute inset-6 border border-zinc-200 bg-white" />
            <div className="absolute inset-x-6 top-6 grid grid-cols-5 border-b border-zinc-200">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="border-r border-zinc-200 px-3 py-4 last:border-r-0"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="h-24 border border-zinc-200 bg-zinc-100" />
              <div className="h-24 border border-zinc-200 bg-white" />
              <div className="h-24 border border-zinc-200 bg-zinc-200" />
            </div>
            <div className="absolute left-10 top-1/2 h-px w-[72%] bg-zinc-300" />
            <div className="absolute left-1/2 top-20 h-[68%] w-px bg-zinc-200" />
            <div className="absolute right-10 top-24 h-28 w-28 border border-zinc-300 bg-white" />
            <div className="absolute bottom-24 left-10 h-20 w-36 border border-zinc-300 bg-white" />
            <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-64 md:w-64">
              <Image
                src="/images/DWS_Bildmarke_23.png"
                alt="DWS Direktwerbe-Service Bildmarke"
                width={1240}
                height={1240}
                className="h-full w-full object-contain opacity-90"
                sizes="(min-width: 768px) 256px, 208px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Drei Bereiche, ein abgestimmter Ablauf."
          description="DWS verbindet Druckproduktion, Lettershop und Lagerlogistik so, dass Kampagnen und wiederkehrende Prozesse klar geplant und zuverlässig umgesetzt werden können."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={index}
              featured
            />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <SectionHeading
            eyebrow="Glaubwürdigkeit"
            title="Warum DWS?"
            description="Für Unternehmen zählt nicht nur die einzelne Leistung, sondern ein verlässlicher Ablauf."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credibilityCards.map((card) => (
              <article
                key={card.title}
                className="border border-zinc-200 bg-white p-4"
              >
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-zinc-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Erfahrung"
            title="Seit 1952 in Druck und Verarbeitung verwurzelt"
          />
          <div className="text-lg leading-8 text-zinc-600">
            <p>
              DWS arbeitet für Geschäftskunden, die planbare Abläufe und
              verbindliche Kommunikation benötigen. Die Stärke liegt in der
              Verbindung von Produktion, Verarbeitung und Versandsteuerung.
            </p>
            <p className="mt-6">
              So entstehen weniger Übergaben, klare Verantwortlichkeiten und ein
              belastbarer Prozess vom Druckprodukt bis zur Zustellung.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Prozess"
          title="Von der Produktion bis zur Zustellung"
          description="Die einzelnen Schritte werden projektbezogen abgestimmt und auf Termin, Materialfluss und Versandziel ausgerichtet."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-zinc-200 bg-white p-6 md:after:absolute md:after:left-full md:after:top-10 md:after:h-px md:after:w-4 md:after:bg-zinc-300 md:last:after:hidden"
            >
              <span className="text-sm font-semibold text-zinc-600">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <SectionHeading
            eyebrow="Einblicke"
            title="Einblicke in Druck, Verarbeitung und Versand"
            description="Beispiele aus Produktion, Konfektionierung und logistischen Abläufen bei DWS."
          />
          <div className="mt-10">
            <ImageGallery items={galleryItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Kunden"
            title="Für wen wir arbeiten"
            description="DWS unterstützt Geschäftskunden, die wiederkehrende Print-, Mailing- und Logistikprozesse zuverlässig umsetzen möchten."
          />
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Unternehmen",
              "Agenturen",
              "Behörden",
              "Druckereien",
              "Verlage",
            ].map((item) => (
              <li
                key={item}
                className="border border-zinc-200 bg-white px-5 py-4 text-base font-semibold text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
