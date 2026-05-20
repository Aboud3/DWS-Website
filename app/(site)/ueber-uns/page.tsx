import { CTASection } from "@/components/CTASection";
import { GenerationsSection } from "@/components/GenerationsSection";
import { HistoryRevealSection } from "@/components/HistoryRevealSection";
import { ImageGallery, type GalleryItem } from "@/components/ImageGallery";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("about");

const principles = [
  {
    title: "Feste Ansprechpartner",
    text: "Projekte werden mit klaren Zuständigkeiten und direkter Abstimmung begleitet.",
  },
  {
    title: "Koordinierte Abläufe",
    text: "Druck, Lettershop und Lagerlogistik werden als verbundene Prozessschritte geplant.",
  },
  {
    title: "Sorgfältige Umsetzung",
    text: "Materialien, Termine und Übergaben werden nachvollziehbar koordiniert.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    caption: "DWS Branding",
    alt: "DWS Branding auf schwarzem Untergrund",
    src: "/images/gallery/dws-branding-black.jpg",
  },
  {
    caption: "Logo im Druck",
    alt: "DWS Logo als gedrucktes Material",
    src: "/images/gallery/dws-logo-print.jpg",
  },
  {
    caption: "Kalender",
    alt: "DWS Kalender als gedrucktes Geschäftsmaterial",
    src: "/images/gallery/dws-kalender.jpg",
  },
];

const serviceAreas = [
  {
    title: "Druck",
    description:
      "Geschäftsdrucksachen, Mailingbestandteile und projektbezogene Druckproduktion.",
  },
  {
    title: "Lettershop",
    description:
      "Konfektionierung, Verarbeitung und Versandvorbereitung für planbare Aussendungen.",
  },
  {
    title: "Lagerlogistik",
    description:
      "Einlagerung, Bestandsbereitstellung und Versandsteuerung für projektbezogene Materialflüsse.",
  },
];

const generationPortraits = [
  {
    title: "Karl Sander",
    label: "Gründer / Rhein-Ruhr Druck Sander KG",
    image: {
      src: "/images/history/karl-sander-portrait.webp",
      alt: "Historisches Porträt von Karl Sander",
    },
  },
  {
    title: "Zweite Generation",
    label: "Weiterentwicklung des Unternehmens",
    image: {
      src: "/images/history/second-generation-portrait.webp",
      alt: "Historisches Porträt der zweiten Generation",
      preserveColor: true,
    },
  },
  {
    title: "Heute",
    label: "DWS Druckwerbe-Service + Logistik",
    placeholderLabel: "DWS Heute",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Druck, Lettershop und Lagerlogistik seit 1952."
        description="DWS Direktwerbe-Service unterstützt Unternehmen und Organisationen bei operativen Print-, Mailing- und Logistikprozessen."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Seit 1952"
          title="Erfahrung in der praktischen Umsetzung"
          description="Die Unternehmensgeschichte reicht bis zur Gründung der Rhein-Ruhr Druck Sander KG im Jahr 1952 zurück."
        />
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            1952 gründete der Kaufmann Karl Sander die Rhein-Ruhr Druck Sander
            KG. Aus dem handwerklichen Ursprung entwickelte sich über mehrere
            Generationen ein Dienstleister für Druck, Lettershop und
            Lagerlogistik.
          </p>
          <p>
            Heute unterstützt DWS Geschäftskunden bei operativen Print-,
            Mailing- und Logistikprozessen mit nachvollziehbarer Koordination
            und festen Zuständigkeiten.
          </p>
        </div>
      </section>

      <HistoryRevealSection imageAlt="Historischer Meisterbrief von Karl Sander aus dem Jahr 1934">
        <SectionHeading
          eyebrow="Historie"
          title="Aus Tradition entsteht Entwicklung."
          description="Der Meisterbrief von Karl Sander aus dem Jahr 1934 steht für die handwerkliche Herkunft."
        />
        <div className="mt-8 space-y-5 text-lg leading-9 text-zinc-600">
          <p>
            1952 gründete der Kaufmann Karl Sander die Rhein-Ruhr Druck Sander
            KG. 1965 entstand wegen wachsender Anforderungen ein neues
            Firmengebäude in Dortmund-Brackel.
          </p>
          <p>
            1972 wurde mit dem Einstieg von Dr. Peter Lauer der Lettershop
            aufgebaut. In der dritten Generation ergänzte Stefan Lauer die
            Lagerlogistik.
          </p>
          <p>
            Heute verbindet DWS Druckwerbe-Service + Logistik GmbH Druck,
            Lettershop und Lagerlogistik am selben Standort.
          </p>
        </div>
      </HistoryRevealSection>

      <GenerationsSection
        eyebrow="GENERATIONEN"
        title="Über Generationen aufgebaut"
        description="Historische Porträts zeigen die Menschen hinter der Entwicklung des Unternehmens über Generationen hinweg."
        portraits={generationPortraits}
      />

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.65fr_1.35fr]">
          <SectionHeading
            eyebrow="Entwicklung"
            title="Unternehmensentwicklung"
            description="Die Arbeit von DWS ist auf praktische Umsetzung, Standort Dortmund und abgestimmte Abläufe ausgerichtet."
          />
          <ol className="grid min-w-0 gap-4 md:grid-cols-2">
            <li className="min-w-0 border border-zinc-200 bg-white p-7">
              <span className="text-sm font-semibold text-zinc-600">1934</span>
              <h2 className="mt-6 break-words text-lg font-semibold leading-7 text-ink">
                Meisterbrief
              </h2>
            </li>
            <li className="min-w-0 border border-zinc-200 bg-white p-7">
              <span className="text-sm font-semibold text-zinc-600">1952</span>
              <h2 className="mt-6 break-words text-lg font-semibold leading-7 text-ink">
                Gründung Rhein-Ruhr Druck Sander KG
              </h2>
            </li>
            <li className="min-w-0 border border-zinc-200 bg-white p-7">
              <span className="text-sm font-semibold text-zinc-600">1972</span>
              <h2 className="mt-6 break-words text-lg font-semibold leading-7 text-ink">
                Aufbau Lettershop
              </h2>
            </li>
            <li className="min-w-0 border border-zinc-200 bg-white p-7">
              <span className="text-sm font-semibold text-zinc-600">Heute</span>
              <h2 className="mt-6 break-words text-lg font-semibold leading-7 text-ink">
                DWS Druckwerbe-Service + Logistik
              </h2>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Leistungsverbund"
          title="Drei Bereiche, ein Ablauf"
          description="Druck, Lettershop und Lagerlogistik werden bei DWS als zusammenhängende operative Bereiche betrachtet."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {serviceAreas.map((item, index) => (
            <article
              key={item.title}
              className="border border-zinc-200 bg-white p-6"
            >
              <span className="text-sm font-semibold text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 text-xl font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <SectionHeading
            eyebrow="Einblicke"
            title="Marke und Geschäftsausstattung"
            description="Zurückhaltende Ansichten aus Markenauftritt und gedruckten Geschäftsmaterialien."
          />
          <div className="mt-8">
            <ImageGallery items={galleryItems} compact unoptimized />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <SectionHeading
            eyebrow="Arbeitsweise"
            title="Wofür DWS steht"
            description="Im Mittelpunkt stehen klare Kommunikation und zuverlässige Koordination über die beteiligten Arbeitsschritte hinweg."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="border border-zinc-200 bg-white p-6"
              >
                <h2 className="text-xl font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
