import { EnglishServicePage } from "@/app/en/_components/EnglishServicePage";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("lettershop", "en");

export default function EnglishLettershopPage() {
  return (
    <EnglishServicePage
      hero={{
        eyebrow: "Lettershop",
        title: "Mailing preparation and shipping support.",
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
          src: "/images/gallery/mailing-kuvert.jpg",
          alt: "Envelope as part of shipping preparation at DWS",
        },
      }}
      typicalServices={[
        "Assembly",
        "Manual processing",
        "Machine-assisted processing",
        "Shipping preparation",
        "Serial mailings",
      ]}
      suitableFor={[
        "Direct mailing campaigns",
        "Recurring mailings",
        "Insert and information mailings",
        "Project-based shipping campaigns",
      ]}
      coordination={{
        eyebrow: "Coordination",
        title: "From printed sheet to ready-to-ship unit.",
        description:
          "DWS focuses on stock movement, clear assignment and defined handovers into shipping. This keeps multi-step projects transparent and manageable.",
      }}
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
          caption: "Envelope preparation",
          alt: "Envelope as part of shipping preparation",
          src: "/images/gallery/mailing-kuvert.jpg",
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
          "Selected views from mailing components, preparation and processing.",
      }}
      ctaTitle="Need support with lettershop services?"
      ctaDescription="DWS prepares mailing projects with clear process steps and coordinated shipping preparation."
    />
  );
}
