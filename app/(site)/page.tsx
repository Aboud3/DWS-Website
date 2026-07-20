import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroSlideshow, type HeroSlide } from "@/components/HeroSlideshow";
import type { GalleryItem } from "@/components/ImageGallery";
import { ImageMarquee } from "@/components/ImageMarquee";
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
    title: "Design",
    description:
      "Layout, Daten und Vorlagen werden für die weitere Umsetzung vorbereitet.",
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
    title: "Tradition seit 1952",
    text: "Langjährige Erfahrung in der Umsetzung wiederkehrender Print-, Mailing- und Logistikprozesse.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Design, Druck, Verarbeitung, Lagerung und Versand werden als verbundene Schritte koordiniert.",
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
    src: "/images/gallery/einblicke/druckmaschine-urbanekuenste.png",
  },
  {
    caption: "Versandvorbereitung",
    alt: "Automatisierte Verarbeitung von Mailingunterlagen bei DWS",
    src: "/images/gallery/dws-company/lettershop-machine-processing.jpg",
  },
  {
    caption: "Lagerlogistik",
    alt: "Lagergang mit Hochregalen bei DWS",
    src: "/images/gallery/dws-company/warehouse-aisle.jpg",
  },
  {
    caption: "Mailingbestandteile",
    alt: "Mailingbestandteile in der Verarbeitung bei DWS",
    src: "/images/gallery/einblicke/urbanekuenste-mailing.png",
  },
  {
    caption: "Konfektionierung",
    alt: "Einblick in die Konfektionierung bei DWS",
    src: "/images/gallery/einblicke/weihnachtskarte-lasercut.png",
  },
  {
    caption: "Druckbogen",
    alt: "Druckbogen im Produktionsprozess bei DWS",
    src: "/images/gallery/einblicke/skoda-druckbogen.png",
  },
];

const homepageServices = services.map((service, index) =>
  index === 0 ? { ...service, title: "Design", eyebrow: "Design" } : service,
);

const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/og-press.png",
    alt: "Historische Heidelberg-Druckmaschine von DWS",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32 lg:pt-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
              DWS Druckwerbe-Service + Logistik
            </p>
            <h1 className="max-w-[20rem] text-3xl font-semibold tracking-normal text-ink sm:max-w-3xl sm:text-5xl md:text-7xl">
              Design, Druck und Logistik aus einer Hand.
            </h1>
            <p className="mt-7 max-w-[20rem] text-lg leading-8 text-zinc-600 sm:max-w-2xl md:text-xl md:leading-9">
              DWS Druckwerbe-Service + Logistik unterstützt Unternehmen, Agenturen,
              Behörden, Druckereien, Verlage, Vereine und Privatkunden bei
              Design, Print-, Mailing- und Logistikprozessen.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={getRoute("de", "services")}>
                Leistungen ansehen
              </ButtonLink>
              <ButtonLink href={getRoute("de", "contact")} variant="secondary">
                Kontakt aufnehmen
              </ButtonLink>
            </div>
          </div>
          <HeroSlideshow slides={heroSlides} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Vier Bereiche – ein abgestimmter Ablauf."
          description="DWS verbindet Design, Druckproduktion, Lettershop und Lagerlogistik so, dass Kampagnen und wiederkehrende Prozesse klar geplant und zuverlässig umgesetzt werden können."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homepageServices.map((service, index) => (
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
            description="Für Kunden zählt nicht nur die einzelne Leistung, sondern ein verlässlicher Ablauf."
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
            title="Seit 1952 in Design, Druck und Verarbeitung verwurzelt"
          />
          <div className="text-lg leading-8 text-zinc-600">
            <p>
              DWS arbeitet für Kunden, die planbare Abläufe und verbindliche
              Kommunikation benötigen. Die Stärke liegt in der Verbindung von
              Design, Produktion, Verarbeitung und Versandsteuerung.
            </p>
            <p className="mt-6">
              So entstehen weniger Übergaben, klare Verantwortlichkeiten und ein
              schneller Prozess von der Entwicklung bis zur Zustellung beim
              Endkunden.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Prozess"
          title="Von der Idee bis zur Zustellung"
          description="Die einzelnen Schritte werden projektbezogen abgestimmt und auf Termin, Materialfluss und Versandziel ausgerichtet."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-zinc-200 bg-white p-6 md:after:absolute md:after:left-full md:after:top-10 md:after:h-px md:after:w-4 md:after:bg-zinc-300 md:last:after:hidden"
            >
              <span className="text-sm font-semibold text-zinc-600">
                0{index + 1}
              </span>
              <h3 className="mt-6 min-w-0 text-[1.0625rem] font-semibold leading-7 text-ink">
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
            title="Einblicke in Design, Druck, Verarbeitung und Versand"
            description="Beispiele aus Design, Produktion, Konfektionierung und logistischen Abläufen bei DWS."
          />
          <div className="mt-10">
            <ImageMarquee items={galleryItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Kunden"
            title="Für wen wir arbeiten"
            description="DWS unterstützt Kunden, die Print-, Mailing- und Logistikprozesse zuverlässig umsetzen möchten – von Unternehmen und Organisationen bis zu Vereinen und privaten Auftraggebern."
          />
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Unternehmen",
              "Agenturen",
              "Behörden",
              "Druckereien",
              "Verlage",
              "Vereine",
              "Privatkunden",
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
