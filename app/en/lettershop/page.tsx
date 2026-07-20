import { EnglishServicePage } from "@/app/en/_components/EnglishServicePage";
import {
  LettershopServicesAccordion,
  type LettershopService,
} from "@/components/LettershopServicesAccordion";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("lettershop", "en");

const lettershopServices: LettershopService[] = [
  {
    title: "Address management",
    summary:
      "Qualified, up-to-date address data as the basis for successful direct marketing.",
    chips: ["Address databases", "Selection", "Duplicate checking", "GDPR-compliant"],
    body: [
      {
        type: "list",
        intro:
          "We support you with everything around your addresses and offer the following services:",
        items: [
          "Concept and creation of address databases (incl. data capture)",
          "Sourcing and selection of target-group addresses from reputable address publishers",
          "Conversion and merging of databases with different structures",
          "Extraction of first names for personalised salutations, plus duplicate checking and matching to your requirements via software",
          "Custom programming for individual solutions (e.g. invoice and reminder mailings)",
          "Postage-optimised data preparation with the highest possible discount via DV franking (certified partner of Deutsche Post AG)",
          "Premium address procedure",
          "PDF generation of your mailings for your archive system",
        ],
      },
      {
        type: "paragraph",
        text: "The security of your data matters to us. Your address data is processed in accordance with the current GDPR. We confirm this in writing when you place an order, with a data-processing agreement in line with the GDPR.",
      },
    ],
  },
  {
    title: "Personalisation & addressing",
    summary:
      "Individual personalisation and direct addressing of your advertising materials.",
    chips: ["Personalisation", "Laser/inkjet", "Labels", "Data Matrix"],
    body: [
      {
        type: "paragraph",
        text: "Personalised and individualised mailings are more successful than anonymous mass mailings because a personal letter takes on a demanding role – it is intended to “replace” personal contact.",
      },
      {
        type: "paragraph",
        text: "Use our know-how: don't just personalise your mailing — enrich its content for each individual customer. Depending on the customer database, every conceivable letter variant can be produced. We're happy to offer full-colour personalisation of your advertising materials, with multiple individualisations and personalised images. There are no limits to your creativity.",
      },
      {
        type: "paragraph",
        text: "Even personalisation across multiple sheets is kept reliable by adding a barcode or Data Matrix code, ensuring your mailing campaign runs securely.",
      },
      {
        type: "paragraph",
        text: "We also address pre-produced advertising materials onto which addresses are printed afterwards, such as postcards, maxi cards, self-mailers and envelopes. We carry out this direct addressing using laser or inkjet methods, depending on which offers advantages for your mailing. We also offer addressing onto labels with automatic application.",
      },
    ],
  },
  {
    title: "Processing & assembly",
    summary: "Machine and manual processing of your mailing.",
    chips: ["Enveloping", "Assembly", "Shrink-wrapping"],
    body: [
      {
        type: "section",
        title: "Enveloping",
        paragraphs: [
          "The type and quality of your mailing's enclosure are key factors for the first impression — and there's no second chance at a first impression. Our machinery is designed for all sizes (from DIN A6 to DIN B4) and, with intelligent enveloping solutions, ensures fast turnaround and on-time postal hand-over. Enveloping with optical comparison reading (Data Matrix/barcode/OMR) to match multiple personalised components, plus selective insertion of advertising materials, is available.",
        ],
      },
      {
        type: "section",
        title: "Assembly",
        paragraphs: [
          "Since even the best technology eventually reaches its limits, alongside machine processing we also offer manual assembly: applying give-aways, product samples, assembling parcels with individual contents, folder assembly, and further solutions to suit your needs.",
        ],
      },
      {
        type: "section",
        title: "Shrink-wrapping",
        paragraphs: [
          "Wrapping in a transparent film is especially suited to products like brochures, leaflets or catalogues. The durable film protects the contents from mechanical impact, moisture and dirt while keeping the product in clear view. For heavy catalogues, we shrink the film with heat so the item is stabilised.",
        ],
      },
      {
        type: "tags",
        items: [
          "Folding",
          "Collating",
          "Grooving/creasing",
          "Binding",
          "Glue-folding",
          "Saddle-stitching",
          "Loop-stitching",
          "Perforating",
          "Die-cutting",
          "Drilling",
          "Labelling",
          "Numbering",
          "Gluing",
          "Banding",
          "Manual assembly",
        ],
      },
    ],
  },
  {
    title: "Finishing",
    summary: "Protection and visual enhancement of your printed materials.",
    chips: ["Lacquers", "Drip-Off", "Scented varnish"],
    body: [
      {
        type: "paragraph",
        text: "Printed paper is one of the oldest means of communication. But it's the choice of substrate and the finishing options that turn it into an experience for the senses. We finish printed materials with partial or full-surface dispersion, gold, silver and iridescent lacquers with a mother-of-pearl effect. Further visual effects are possible through our integrated Drip-Off technology. Sensory appeal can be created with scented varnishes, available in many variations. Combining state-of-the-art technology with our staff's craftsmanship, we meet the conditions for the precise processing of your print products.",
      },
    ],
  },
  {
    title: "Dispatch & postage optimisation",
    summary:
      "Postage-optimised dispatch as a certified partner of Deutsche Post AG.",
    chips: ["DV franking", "Pre-sorting", "Discounting"],
    body: [
      {
        type: "paragraph",
        text: "We make sure your advertising messages reach your customers safely and on time — never losing sight of cost, to achieve the most economical solution for you. Whether Dialogpost or heavy DHL Infopost (> 1 kg), we know every option for optimising costs. For example, complex pre-sorting of your mailings delivers not only a noticeable discount on postage but also a reduction in DPAG delivery time of up to one day.",
      },
      {
        type: "list",
        intro: "Our day-to-day work for you:",
        items: [
          "Checking and ensuring compliance with Deutsche Post AG's strict requirements",
          "Postage-optimised address preparation in single- or multi-stream processing",
          "DV franking (additional 1 % discount on the net charge)",
          "Preparation of bundles, containers and pallets",
          "Storage of mailings until the dispatch date (including large volumes)",
        ],
      },
      {
        type: "paragraph",
        text: "But it doesn't always have to be Deutsche Post AG. Even as a certified partner and Performance Partner of Deutsche Post AG, we also use alternative mail providers for you — both nationally and internationally.",
      },
      {
        type: "section",
        title: "DV franking",
        paragraphs: [
          "Instead of the franking impression or the shortened franking mark, you can use DV franking. This achieves a 1 % postage saving, as this franking method involves the least effort for the postal service. As a certified partner of Deutsche Post AG, we offer it cost-effectively via digital print or inkjet. Only those who have concluded a separate DV franking agreement with Deutsche Post AG can take part.",
        ],
      },
    ],
  },
  {
    title: "Dispatch types",
    summary: "The right dispatch product for every mailing.",
    body: [
      {
        type: "cardGrid",
        cards: [
          {
            title: "Dialogpost / Dialogpost Easy",
            description:
              "Addressed advertising mailings and catalogues at especially favourable rates. Free samples, product samples, promotional items and third-party inserts can be included.",
          },
          {
            title: "Pressepost",
            description:
              "Complete handling of your press mail: from printing the newspaper/magazine to inserting supplements or flyers. You set the delivery date.",
          },
          {
            title: "Postaktuell \"Postwurf Spezial\"",
            description:
              "Unaddressed advertising mailings to selected target groups — from a single district to the whole of Germany, with precisely targeted delivery plans.",
          },
          {
            title: "DHL Infopost",
            description:
              "Standard Dialogpost from 1 kg (national). Here too, we know every option for optimising costs.",
          },
          {
            title: "Parcel dispatch",
            description:
              "National and international parcel shipments in small and large volumes, including personalised cover letters, packaging and daily collection.",
          },
          {
            title: "Freight dispatch",
            description:
              "Domestic and international dispatch, with overnight delivery on request; our own courier service for particularly urgent shipments.",
          },
        ],
      },
    ],
  },
];

export default function EnglishLettershopPage() {
  return (
    <EnglishServicePage
      hero={{
        eyebrow: "Lettershop",
        title: "Processing and shipping preparation.",
        description:
          "DWS handles the practical implementation of mailing processes: assembly, processing, sorting and shipping-ready preparation.",
      }}
      intro={{
        eyebrow: "Context",
        title: "Lettershop services for reliable mailings.",
        description:
          "Depending on material, quantity and complexity, the process is set up to match the project and can be connected with print production or logistics.",
        paragraphs: [
          "DWS processes mailing components and prepares shipments according to material, quantity and shipping destination.",
          "Manual and machine-assisted steps are combined when formats, inserts or workflows require it.",
        ],
        image: {
          src: "/images/gallery/dws-company/lettershop-machine-overview.jpg",
          alt: "Automated lettershop system at DWS",
        },
      }}
      detailsSection={
        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Services
              </p>
              <h2 className="text-3xl font-semibold tracking-normal text-ink md:text-5xl">
                From address to dispatch
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                A range of options is available for your chosen marketing
                strategies, which we&apos;d be glad to present in more detail as
                a Performance Partner of Deutsche Post AG.
              </p>
            </div>
            <div className="mt-10">
              <LettershopServicesAccordion
                items={lettershopServices}
                moreLabel="Read more"
                lessLabel="Show less"
              />
            </div>
          </div>
        </section>
      }
      coordination={null}
      steps={[
        "Receive and check materials",
        "Assemble manually or with machine support",
        "Prepare items for shipping",
      ]}
      benefits={[
        "Flexible processing depending on project scope",
        "Connection between assembly and shipping",
        "Planned workflows for recurring mailings",
      ]}
      galleryItems={[
        {
          caption: "Mailing materials",
          alt: "Stacked print and mailing materials in DWS production",
          src: "/images/gallery/dws-company/lettershop-output-stack.jpg",
        },
        {
          caption: "Mailing",
          alt: "Mailing components for shipping preparation",
          src: "/images/gallery/urbanekuenste-mailing.jpg",
        },
        {
          caption: "Lasercut card",
          alt: "Processed card as part of a mailing project",
          src: "/images/gallery/weihnachtskarte-lasercut.jpg",
        },
        {
          caption: "Machine processing",
          alt: "Machine processing at DWS",
          src: "/images/gallery/einblicke-lettershop/automated-letter-insert.jpeg",
        },
        {
          caption: "Manual sorting",
          alt: "Manual sorting at DWS",
          src: "/images/gallery/einblicke-lettershop/hand-sorting-mailing-bundles.jpeg",
        },
        {
          caption: "Dispatch preparation",
          alt: "Dispatch preparation at DWS",
          src: "/images/gallery/einblicke-lettershop/foil-wrap-print-line.jpeg",
        },
      ]}
      relatedLinks={[
        {
          label: "Print",
          href: getRoute("en", "print"),
          description:
            "Print production for business applications and mailing projects.",
        },
        {
          label: "Logistics",
          href: getRoute("en", "warehouseLogistics"),
          description: "Storage, call-off coordination and shipping control.",
        },
      ]}
      sectionLabels={{
        workflowTitle: "Mailing workflow",
        workflowDescription:
          "Materials, formats and shipping requirements are prepared in a clear sequence.",
        benefitsTitle: "What this enables",
        benefitsDescription:
          "Lettershop work can combine manual and machine-assisted steps while keeping mailing projects structured.",
        galleryTitle: "Mailing and preparation views",
        galleryDescription:
          "Examples from mailing components, preparation and processing.",
      }}
      ctaTitle="Need support with lettershop services?"
      ctaDescription="DWS prepares mailing projects with clear process steps and coordinated shipping preparation."
    />
  );
}
