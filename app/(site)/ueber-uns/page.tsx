import { CTASection } from "@/components/CTASection";
import { GenerationsSection } from "@/components/GenerationsSection";
import { HistoryRevealSection } from "@/components/HistoryRevealSection";
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
    text: "Design, Druck, Lettershop und Lagerlogistik werden als verbundene Prozessschritte geplant.",
  },
  {
    title: "Sorgfältige Umsetzung",
    text: "Materialien, Termine und Übergaben werden nachvollziehbar koordiniert.",
  },
];

const serviceAreas = [
  {
    title: "Design",
    description:
      "Design, Layout und Druckvorbereitung für Drucksachen, Mailings und projektbezogene Printmaterialien.",
  },
  {
    title: "Druck",
    description:
      "Drucksachen, Mailingbestandteile und projektbezogene Printmaterialien.",
  },
  {
    title: "Lettershop",
    description:
      "Konfektionierung, Verarbeitung und Versandvorbereitung für geplante Aussendungen.",
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
        title="Design, Druck, Lettershop und Lagerlogistik seit 1952."
        description="DWS Druckwerbe-Service + Logistik GmbH unterstützt Unternehmen und Organisationen bei operativen Design-, Print-, Mailing- und Logistikprozessen."
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
            Generationen ein Dienstleister für Design, Druck, Lettershop und
            Lagerlogistik.
          </p>
          <p>
            Heute unterstützt DWS Kunden bei operativen Design-, Print-,
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
            Heute verbindet DWS Druckwerbe-Service + Logistik GmbH Design,
            Druck, Lettershop und Lagerlogistik am selben Standort.
          </p>
        </div>
      </HistoryRevealSection>

      <GenerationsSection
        eyebrow="GENERATIONEN"
        title="Über Generationen aufgebaut"
        description="Historische Porträts zeigen die Menschen hinter der Entwicklung des Unternehmens über Generationen hinweg."
        portraits={generationPortraits}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Leistungsverbund"
          title="Vier Bereiche, ein Ablauf"
          description="Design, Druck, Lettershop und Lagerlogistik werden bei DWS als zusammenhängende operative Bereiche betrachtet."
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

      <section className="border-y border-zinc-200 bg-white">
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
