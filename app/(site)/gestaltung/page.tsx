import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("design");

const steps = [
  "Anforderungen und Vorlagen prüfen",
  "Layout und Daten aufbereiten",
  "Druckfertige Umsetzung abstimmen",
];

const benefits = [
  "Frühe Abstimmung mit Druck und Weiterverarbeitung",
  "Praxisnahe Vorbereitung für Mailing- und Versandprozesse",
  "Weniger Reibung zwischen Design, Produktion und Logistik",
];

export default function GestaltungPage() {
  return (
    <>
      <PageHero
        eyebrow="DESIGN"
        title="Design und Digitalisierung im Zusammenspiel mit Produktion."
        description="Layout, Transfer von analogen in digitale Daten und Druckvorbereitung werden so abgestimmt, dass sich Druck, Konfektionierung, Lagerung und Versand sinnvoll anschließen können."
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl space-y-12 px-6 py-14 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Guter Rat ist …" />
            <div className="space-y-6 text-lg leading-8 text-zinc-600 lg:pt-2">
              <h3 className="text-2xl font-semibold leading-8 text-ink">
                Bei uns inklusive!
              </h3>
              <p>
                Wir beraten und unterstützen Sie gerne bei der Umsetzung Ihrer
                Direktmarketing-Aktion – von der ersten Vision über Design und
                Produktion bis hin zur portooptimierten
                Postauflieferung.
              </p>
              <p>
                Nutzen Sie unsere über 70-jährige Branchenerfahrung, denn
                bereits in der Konzeption werden die Weichen für spätere Kosten
                gestellt. Postalische Vorgaben sind einzuhalten, damit es
                nachher bei den Portokosten nicht zu Überraschungen kommt.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Digitalisierung" />
            <div className="text-lg leading-8 text-zinc-600 lg:pt-2">
              <p>
                Ob Verbrauchsrechnungen, Patientenakten, allgemeine Schriftstücke … – wir
                digitalisieren Ihre analogen Produkte und wandeln diese in digitale Daten im
                gewünschten Format um.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Grafik / Layout" />
            <div className="text-lg leading-8 text-zinc-600 lg:pt-2">
              <p>
                Ob es um ein neues Corporate Design, den Relaunch eines
                bestehenden Layouts oder um die Umsetzung der Werbeprodukte eines
                Unternehmens geht, unsere Grafiker haben ein aussagekräftiges
                Portfolio vorzuweisen, welches sämtliche kreativen Leistungen aus
                den Bereichen Print und Web abdeckt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePageSections
        steps={steps}
        benefits={benefits}
        workflowLead="Sie haben ein Ziel – wir die Möglichkeiten."
        workflowBody={
          <>
            <p>
              Bereits in der Konzeptentwicklung eines neuen Projektes werden
              entsprechend der jeweiligen Zielsetzung die möglichen
              Ausgabekanäle definiert. Druck, Personalisierung und digitale
              Marketingstrategien können häufig in einem Workflow zusammengefasst
              werden. Ob unabhängig voneinander gesteuert oder als umfassende
              Kampagne gestartet, der Schlüssel liegt in der vorausgehenden
              Planung eines Vorhabens.
            </p>
            <p>
              Die Möglichkeiten, eine Druck-Produktion mit kreativen, digitalen
              Marketingstrategien zu kombinieren, sind vielseitig und
              beeindruckend.
            </p>
            <p>
              Unsere Medienabteilung unterstützt unsere Kunden schon in der
              Umsetzung und Modifizierung der Eingabe- und/oder Steuerdatei.
            </p>
            <p>
              Die erarbeiteten Workflows für die Unternehmens-Kampagnen gehen
              natürlich nicht verloren. Bestückt mit neuem Content, ist die
              Aufbereitung für aktuelle Projekte jederzeit erneut abzurufen,
              erweiterbar oder variierbar.
            </p>
          </>
        }
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
