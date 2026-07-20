import { EnglishServicePage } from "@/app/en/_components/EnglishServicePage";
import { WarehouseCapacitySection } from "@/components/WarehouseCapacitySection";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("warehouseLogistics", "en");

const warehouseCapacityLists = [
  {
    title: "Services",
    items: [
      "Storage of your products",
      "Order management",
      "Assembly and quality packaging",
      "Delivery-note and invoice printing",
      "On-time delivery by parcel service, freight forwarder, courier or direct transport",
      "International shipping including customs handling",
      "Returns and response management",
    ],
  },
  {
    title: "Short- & long-term storage",
    items: [
      "High-bay warehouse",
      "Small-parts storage",
      "Individual storage for bulky goods",
      "Secure storage for sensitive and high-value goods",
    ],
  },
];

const warehouseMetrics = [
  { label: "Storage area", value: "1,000 m²" },
  { label: "Total usable area", value: "2,500 m²" },
  { label: "Pallet spaces", value: "800" },
];

const warehouseFacts = [
  "Computerised warehouse management",
  "Specialist staff for warehouse management and picking",
  "Perpetual inventory",
  "Modern lifting and forklift equipment",
];

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
          src: "/images/gallery/dws-company/warehouse-pallet-storage.jpg",
          alt: "View into a stocked warehouse aisle at DWS",
        },
      }}
      detailsSection={
        <WarehouseCapacitySection
          eyebrow="Storage capacity"
          title="We have space … for your products too"
          description="Together with you, we develop a concept for the demand-based, on-time delivery of your print media or other goods. That includes not just providing e-mail accounts, but also the certainty that the right quantity arrives at the right time, in the right quality, with the right recipient."
          lists={warehouseCapacityLists}
          factsLabel="Facts & figures"
          metrics={warehouseMetrics}
          facts={warehouseFacts}
        />
      }
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
          caption: "Warehouse exterior",
          alt: "Exterior view of a DWS warehouse",
          src: "/images/gallery/dws-company/warehouse-exterior.jpg",
        },
        {
          caption: "Warehouse aisle",
          alt: "Warehouse aisle with high-bay racking at DWS",
          src: "/images/gallery/dws-company/warehouse-aisle.jpg",
        },
        {
          caption: "Warehouse location labeling",
          alt: "Warehouse location labeling in the DWS facility",
          src: "/images/gallery/dws-company/warehouse-rack-location.jpg",
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
        galleryTitle: "Insights into warehouse logistics",
        galleryDescription:
          "Examples of storage, warehouse infrastructure and warehouse organization at DWS.",
      }}
      ctaTitle="Looking for a warehouse-supported shipping solution?"
      ctaDescription="DWS supports storage, stock preparation and shipping coordination for recurring B2B workflows."
    />
  );
}
