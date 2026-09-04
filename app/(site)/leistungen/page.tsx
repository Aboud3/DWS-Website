import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("services");

const serviceOverviews = [
  {
    title: "Design",
    href: getRoute("de", "design"),
    text: "DWS gestaltet Drucksachen, Mailings und projektbezogene Printmaterialien bzw. wandelt analoge Daten in digitale Daten um.",
    tasks: ["Gestaltung", "Layout", "Digitalisierung"],
  },
  {
    title: "Druck",
    href: getRoute("de", "print"),
    text: "DWS produziert sämtliche Drucksachen, Mailingbestandteile und projektbezogene Printmaterialien.",
    tasks: ["Buchdruck", "Digitaldruck", "Offsetdruck"],
  },
  {
    title: "Lettershop",
    href: getRoute("de", "lettershop"),
    text: "DWS verarbeitet Mailingbestandteile und bereitet Sendungen für geplante Aussendungen vor.",
    tasks: [
      "Konfektionierung von Hand",
      "Datenaufbereitung",
      "Maschinelle Verarbeitung",
      "Versandvorbereitung",
      "Kuvertierungen jeglicher Art",
      "Veredelung",
    ],
  },
  {
    title: "Lagerlogistik",
    href: getRoute("de", "warehouseLogistics"),
    text: "DWS verbindet Einlagerung, Bestandsbereitstellung und Versandsteuerung für projektbezogene Materialflüsse.",
    tasks: [
      "Einlagerung",
      "Bestandsbereitstellung",
      "Just-in-time-Koordination",
      "Versandsteuerung / Speditionen",
      "DHL/DPAG-Versandprozesse",
    ],
  },
];

const workflowSteps = [
  "Beratung",
  "Design",
  "Druck",
  "Konfektionierung",
  "Lagerung",
  "Versand",
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Design, Druck, Verarbeitung und Logistik in einem Prozess."
        description="DWS bündelt die relevanten Schritte für Print- und Mailingprojekte: von Design und Produktion über die Konfektionierung bis zur lagergestützten Versandkoordination."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow="Überblick"
          title="DWS kombiniert Design, Druck, Lettershop und Lagerlogistik."
          description="Die Leistungsbereiche können einzeln eingesetzt oder zu einem abgestimmten Ablauf verbunden werden."
        />
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            DWS unterstützt Kunden, wenn kundenseitige Ideen, Druckdaten,
            Material, Verarbeitung, Lagerbestand und Versandtermine in einem
            Prozess zusammengeführt werden müssen.
          </p>
          <p>
            Ziel ist ein nachvollziehbarer Prozess mit klarer Koordination
            zwischen Design, Produktion, Konfektionierung, Lagerung und
            Versand.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="grid gap-6">
            {serviceOverviews.map((service, index) => (
              <article
                key={service.href}
                className="grid gap-8 border border-zinc-200 bg-white p-7 shadow-line lg:grid-cols-[0.7fr_1.3fr_auto] lg:items-start"
              >
                <div>
                  <span className="text-sm font-semibold text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {service.text}
                  </p>
                </div>
                <div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.tasks.map((task) => (
                      <li
                        key={task}
                        className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex min-h-12 items-center justify-center border border-ink px-5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  Zur Leistung
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="Ein abgestimmter Ablauf"
            description="Die Arbeitsschritte werden projektbezogen geplant und in der Umsetzung aufeinander abgestimmt."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <li
                key={step}
                className="relative border border-zinc-200 bg-white p-6 md:after:absolute md:after:left-full md:after:top-10 md:after:h-px md:after:w-4 md:after:bg-zinc-300 md:last:after:hidden"
              >
                <span className="text-sm font-semibold text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-ink">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </>
  );
}
