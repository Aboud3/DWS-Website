import { EnglishServicePage } from "@/app/en/_components/EnglishServicePage";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("warehouseLogistics", "en");

export default function EnglishWarehouseLogisticsPage() {
  return (
    <EnglishServicePage
      hero={{
        eyebrow: "Logistics",
        title: "Storage and shipping coordination for B2B workflows.",
        description:
          "DWS connects storage, call-off coordination and shipping so that materials are available on time and shipped through the right channels.",
      }}
      intro={{
        eyebrow: "Context",
        title: "Logistics for planned stock movement.",
        description:
          "Logistics steps are aligned with campaigns, recurring shipments and project-specific requirements.",
        paragraphs: [
          "DWS stores printed materials, advertising materials and shipping materials, and makes stock available for specific projects.",
          "Call-offs, time windows and shipping channels are coordinated so that recurring processes remain manageable.",
        ],
        image: {
          src: "/images/gallery/lager-smartphone.jpg",
          alt: "Warehouse coordination with a smartphone in the working area",
        },
      }}
      typicalServices={[
        "Storage",
        "Stock preparation",
        "Just-in-time coordination",
        "Shipping control",
        "DHL/DPAG shipping processes",
      ]}
      suitableFor={[
        "Recurring campaigns",
        "Print and advertising material stock",
        "Project-based distribution",
        "Companies with planned stock movement",
      ]}
      coordination={{
        eyebrow: "Dortmund",
        title: "Centralized operational coordination.",
        description:
          "With its Dortmund location, DWS can closely coordinate print, processing and shipping logistics. This supports short communication paths and reliable coordination in daily operations.",
      }}
      steps={[
        "Receive and store stock",
        "Prepare materials for specific projects",
        "Coordinate shipping and delivery",
      ]}
      benefits={[
        "Make stock movement easier to plan",
        "Connect storage and shipping more closely",
        "Support on-time stock preparation",
      ]}
      galleryItems={[
        {
          caption: "Warehouse coordination",
          alt: "Warehouse coordination with a smartphone in the working area",
          src: "/images/gallery/lager-smartphone.jpg",
        },
        {
          caption: "Scheduling",
          alt: "Calendar view for coordinating recurring workflows",
          src: "/images/gallery/dws-kalender.jpg",
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
          label: "Lettershop",
          href: getRoute("en", "lettershop"),
          description: "Assembly, processing and shipping preparation.",
        },
      ]}
      sectionLabels={{
        workflowTitle: "Logistics workflow",
        workflowDescription:
          "Stock, project requirements and shipping channels are coordinated step by step.",
        benefitsTitle: "What this improves",
        benefitsDescription:
          "Storage and shipping can be linked more closely so recurring processes remain easier to plan.",
        galleryTitle: "Storage and coordination views",
        galleryDescription:
          "Selected views from warehouse coordination and scheduling.",
      }}
      ctaTitle="Looking for a warehouse-supported shipping solution?"
      ctaDescription="DWS supports storage, stock preparation and shipping coordination for recurring B2B workflows."
    />
  );
}
