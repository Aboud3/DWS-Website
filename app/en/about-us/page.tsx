import { CTASection } from "@/components/CTASection";
import { GenerationsSection } from "@/components/GenerationsSection";
import { HistoryRevealSection } from "@/components/HistoryRevealSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("about", "en");

const principles = [
  {
    title: "Defined points of contact",
    text: "Projects are supported with clear responsibilities and direct coordination.",
  },
  {
    title: "Coordinated workflows",
    text: "Design, print, lettershop and logistics are planned as connected process steps.",
  },
  {
    title: "Careful execution",
    text: "Materials, timing and handovers are coordinated in a traceable way.",
  },
];

const serviceAreas = [
  {
    title: "Design",
    description:
      "Design, layout and print preparation for print products, mailings and project-based print materials.",
  },
  {
    title: "Print",
    description:
      "Print products, mailing components and project-based print materials.",
  },
  {
    title: "Lettershop",
    description:
      "Assembly, processing and shipping preparation for planned mailings.",
  },
  {
    title: "Logistics",
    description:
      "Storage, stock preparation and shipping coordination for project-based workflows.",
  },
];

const generationPortraits = [
  {
    title: "Karl Sander",
    label: "Founder / Rhein-Ruhr Druck Sander KG",
    image: {
      src: "/images/history/karl-sander-portrait.webp",
      alt: "Historical portrait of Karl Sander",
    },
  },
  {
    title: "Second generation",
    label: "Further development of the company",
  },
  {
    title: "Today",
    label: "DWS Druckwerbe-Service + Logistik",
    placeholderLabel: "DWS Today",
  },
];

export default function EnglishAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Design, print, lettershop and logistics since 1952."
        description="DWS Druckwerbe-Service + Logistik GmbH supports companies and organizations with operational design, print, mailing and logistics processes."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Since 1952"
          title="Experience in practical implementation."
          description="The company history reaches back to the founding of Rhein-Ruhr Druck Sander KG in 1952."
        />
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            In 1952, businessman Karl Sander founded Rhein-Ruhr Druck Sander
            KG. From this craft background, the company developed across
            generations into a service provider for design, print, lettershop
            and logistics.
          </p>
          <p>
            Today, DWS supports customers with operational design, print,
            mailing and logistics processes based on traceable coordination and
            defined responsibilities.
          </p>
        </div>
      </section>

      <HistoryRevealSection imageAlt="Historical master craftsman certificate of Karl Sander from 1934">
        <SectionHeading
          eyebrow="History"
          title="Development built on tradition."
          description="Karl Sander's 1934 master craftsman certificate represents the company's craft heritage."
        />
        <div className="mt-8 space-y-5 text-lg leading-9 text-zinc-600">
          <p>
            In 1952, businessman Karl Sander founded Rhein-Ruhr Druck Sander
            KG. In 1965, growing demand led to a new company building in
            Dortmund-Brackel.
          </p>
          <p>
            In 1972, Dr. Peter Lauer joined the company and established the
            lettershop area. In the third generation, Stefan Lauer added
            warehouse logistics.
          </p>
          <p>
            Today, DWS Druckwerbe-Service + Logistik GmbH combines design,
            print, lettershop and logistics at the same location.
          </p>
        </div>
      </HistoryRevealSection>

      <GenerationsSection
        eyebrow="GENERATIONS"
        title="Built across generations"
        description="Historical portraits highlight the people behind the company’s development across generations."
        portraits={generationPortraits}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Service network"
          title="Four areas, one workflow"
          description="Design, print, lettershop and logistics are treated as connected operational areas at DWS."
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
            eyebrow="Approach"
            title="What DWS stands for"
            description="The focus is on clear communication and reliable coordination across the involved work steps."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-white p-6">
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Would you like to learn more about DWS?"
        description="Contact DWS directly for questions about the company, its services or a planned project."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
