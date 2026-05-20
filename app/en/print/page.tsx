import { EnglishServicePage } from "@/app/en/_components/EnglishServicePage";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("print", "en");

export default function EnglishPrintPage() {
  return (
    <EnglishServicePage
      hero={{
        eyebrow: "Print",
        title: "Print production for reliable B2B workflows.",
        description:
          "DWS produces business print materials, mailing components and project-based printed products in coordination with lettershop and logistics workflows.",
      }}
      intro={{
        eyebrow: "Context",
        title: "Print as part of a coordinated workflow.",
        description:
          "The suitable print process depends on quantity, material, personalization and further processing.",
        paragraphs: [
          "DWS produces printed materials for business applications and, when required, coordinates production directly with lettershop, storage and shipping.",
          "This helps ensure that materials, timing and downstream processing steps are considered early in the project.",
        ],
        image: {
          src: "/images/gallery/druckmaschine-urbanekuenste.jpg",
          alt: "Print machine in a production environment at DWS",
        },
      }}
      typicalServices={[
        "Book printing",
        "Digital printing",
        "Offset printing",
        "Mailings and inserts",
        "Forms and business stationery",
      ]}
      suitableFor={[
        "Companies",
        "Agencies",
        "Printers",
        "Publishers",
        "Public institutions",
      ]}
      coordination={{
        eyebrow: "Workflow",
        title: "Print data, timing and shipping goals in view.",
        description:
          "For integrated projects, print production is coordinated early with processing and shipping. This reduces friction between production steps and supports reliable scheduling.",
      }}
      steps={[
        "Clarify project requirements",
        "Coordinate print process and material",
        "Prepare production for further processing",
      ]}
      benefits={[
        "Suitable processes for different quantities",
        "Coordination with processing and shipping",
        "Clear implementation of business print materials",
      ]}
      galleryItems={[
        {
          caption: "Print machine",
          alt: "Print machine in a production environment at DWS",
          src: "/images/gallery/druckmaschine-urbanekuenste.jpg",
        },
        {
          caption: "Print material",
          alt: "Printed sheet as part of a print project",
          src: "/images/gallery/skoda-druckbogen.jpg",
        },
        {
          caption: "Print production",
          alt: "Print production for business applications",
          src: "/images/gallery/druckproduktion-skoda.jpg",
        },
      ]}
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
      sectionLabels={{
        workflowTitle: "Print workflow",
        workflowDescription:
          "Print requirements, materials and downstream steps are coordinated before production begins.",
        benefitsTitle: "What this supports",
        benefitsDescription:
          "Print production can be aligned with processing, storage and shipping from the start.",
        galleryTitle: "Operational views",
        galleryDescription:
          "Selected views from print production and project-based printed materials.",
      }}
      ctaTitle="Planning a print or mailing project?"
      ctaDescription="DWS coordinates print production with processing, storage and shipping where the project requires it."
    />
  );
}
