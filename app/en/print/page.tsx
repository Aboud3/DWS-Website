import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import type { GalleryItem } from "@/components/ImageGallery";
import { PageHero } from "@/components/PageHero";
import {
  PrintMethodAccordion,
  type PrintMethod,
} from "@/components/PrintMethodAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("print", "en");

const benefits = [
  "Suitable processes for different quantities",
  "Coordination with processing and shipping",
  "Finishing such as hot foil or scented varnish to enhance your printed materials",
];

const printMethods: PrintMethod[] = [
  {
    title: "Offset printing – a high-quality standard",
    summary:
      "One of our core competencies – from the business card to the image brochure, every product is guided professionally through our workflow to on-time completion.",
    chips: ["Business cards", "Image brochures", "Postcards", "Self-mailers"],
    paragraphs: [
      "Offset printing is one of our core competencies. Here you benefit from many years of experience, our extensive machine park and the know-how of our staff. Whether it's your business card or image brochure, every product is guided just as professionally through our workflow to on-time completion.",
      "Postcards, envelopes or self-mailers – we advise you and produce to your specifications and in line with all postal requirements, so your mailing reaches the recipient on time. You benefit from having the lettershop professionals involved in planning your project from the very start.",
    ],
  },
  {
    title: "Letterpress – still relevant today",
    summary:
      "The classic: on Original Heidelberg Platens (OHT) and Cylinders (OHZ), printed materials are die-cut, creased, perforated and finished.",
    chips: ["OHT", "OHZ", "Hot foil stamping"],
    paragraphs: [
      "Although letterpress has changed little since Gutenberg's day, the classic remains popular. On our Original Heidelberg Platens (OHT) and the Original Heidelberg Cylinder (OHZ), jobs are still die-cut, creased, perforated or even finished on our Original Heidelberg Platen with hot foil stamping. Whether silver, gold or rainbow-coloured, this is where your printed materials get the final touch.",
    ],
  },
  {
    title: "Digital is better? Sometimes, yes…",
    summary:
      "Short production times, low costs and personalisation on a new level – ideal for very small runs, test prints and individualised mailings.",
    chips: ["Print-on-demand", "Very small runs", "Personalisation"],
    paragraphs: [
      "Some advantages are obvious. Short production times, low costs, the print-on-demand principle … and of course the option of producing very small runs and test prints are especially popular with our customers.",
      "Presentations and customer samples are produced quickly and cost-effectively. The quality of colour reproduction and the choice of papers are excellent and varied.",
      "That's one side of digital printing.",
      "On the other side – through advanced, upstream applications – a world of individualisation opens up for our customers.",
      "Personalisation on a new level, if you like.",
      "Mail merges, invoice and reminder runs, and individualised code generation are part of our daily business.",
      "But what about a personalised layout change? The input file decides which layout, which images and which texts are output. And importantly … all in a single print run!",
    ],
  },
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Print run",
    alt: "Print run at DWS",
    src: "/images/gallery/einblicke-druck/red-print-belt-run.jpeg",
  },
  {
    caption: "Collation",
    alt: "Collation at DWS",
    src: "/images/gallery/einblicke-druck/sheet-collation-roller.jpeg",
  },
  {
    caption: "Print output",
    alt: "Print output at DWS",
    src: "/images/gallery/einblicke-druck/newspaper-stack-output.jpeg",
  },
  {
    caption: "Printing machine",
    alt: "Printing machine at DWS",
    src: "/images/gallery/einblicke-druck/druckmaschine-urbanekuenste.jpg",
  },
  {
    caption: "Poster",
    alt: "Poster at DWS",
    src: "/images/gallery/einblicke-druck/urbanekuenste-poster.jpeg",
  },
  {
    caption: "Brochure",
    alt: "Brochure at DWS",
    src: "/images/gallery/einblicke-druck/skoda-octavia-brochure.jpeg",
  },
];

export default function EnglishPrintPage() {
  return (
    <>
      <PageHero
        eyebrow="Print"
        title="Print production for predictable B2B processes."
        description="DWS produces all print materials, mailing components and project-based printed products — also in coordination with lettershop and logistics."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Context"
            title="Print as part of a coordinated workflow."
            description="The right printing method depends on type, run length, material, personalisation and finishing."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS produces printed materials and, when required, coordinates
              production directly with lettershop, storage and shipping.
            </p>
            <p>
              This helps ensure that materials, timing and downstream processing
              steps are considered early in the project.
            </p>
            <p>And of course, all of it with the environment in mind.</p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src="/images/gallery/druckmaschine-urbanekuenste.jpg"
            alt="Print machine in a production environment at DWS"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover grayscale saturate-[0.75] contrast-[0.95]"
          />
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl space-y-14 px-6 py-14 md:px-8">
          <div>
            <SectionHeading
              eyebrow="PRINTING METHODS"
              title="Our printing methods"
            />
            <div className="mt-8">
              <PrintMethodAccordion
                methods={printMethods}
                moreLabel="Read more"
                lessLabel="Show less"
              />
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-14">
            <SectionHeading title="Printing and the environment?" />
            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                For small and medium runs, digital printing is significantly more
                environmentally friendly than offset printing. Print-on-demand
                avoids overproduction and reduces resource consumption. It also
                eliminates chemical-intensive printing plates and harmful cleaning
                cycles, while paper waste is reduced to a minimum.
              </p>
              <p>
                We are firmly committed to sustainability and offer eco-papers.
              </p>
              <p className="font-semibold text-ink">
                The main ecological advantages of our inkjet technology include:
              </p>
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  <span className="font-semibold text-ink">
                    High energy efficiency:
                  </span>{" "}
                  Cold or air drying eliminates the energy-intensive heating of
                  fuser units, noticeably reducing energy consumption.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Environmentally friendly ink:
                  </span>{" "}
                  The water-based inks used are more environmentally compatible
                  than solvent-based variants, as they primarily release water
                  vapour when drying.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Durability &amp; less waste:
                  </span>{" "}
                  The systems are built for longevity. Low-wear print heads and
                  durable components reduce the need for spare parts and the
                  resulting electronic waste.
                </li>
                <li>
                  <span className="font-semibold text-ink">Certifications:</span>{" "}
                  The devices meet the strict criteria of the &quot;Energy
                  Star&quot; and are certified with the &quot;Blauer Engel&quot;
                  (&quot;Blue Angel&quot;) eco-label.
                </li>
                <li>
                  <span className="font-semibold text-ink">Low emissions:</span>{" "}
                  The prescribed limits for ozone, dust and styrene emissions are
                  in some cases significantly undercut.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ServicePageSections
        benefits={benefits}
        galleryItems={galleryItems}
        showWorkflow={false}
        relatedLinks={[
          {
            label: "Lettershop",
            href: getRoute("en", "lettershop"),
            description: "Assembly, processing and shipping-ready preparation.",
          },
          {
            label: "Logistics",
            href: getRoute("en", "warehouseLogistics"),
            description: "Storage, call-off coordination and shipping control.",
          },
        ]}
        labels={{
          workflowEyebrow: "Workflow",
          workflowTitle: "Print workflow",
          workflowDescription:
            "Print requirements, materials and downstream steps are coordinated before production begins.",
          benefitsEyebrow: "Advantage",
          benefitsTitle: "What this supports",
          benefitsDescription:
            "Print production can be aligned with processing, storage and shipping from the start.",
          galleryEyebrow: "Insights",
          galleryTitle: "Operational views",
          galleryDescription:
            "Examples from print production and project-based printed materials.",
          relatedTitle: "Connected services",
          relatedEyebrow: "Service",
          relatedCta: "View service",
        }}
      />
      <CTASection
        title="Planning a print or mailing project?"
        description="DWS coordinates print production with processing, storage and shipping where the project requires it."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
