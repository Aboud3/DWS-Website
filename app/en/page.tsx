import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ImageGallery, type GalleryItem } from "@/components/ImageGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { Service } from "@/lib/content";

export const metadata = getPageMetadata("home", "en");

const services: Service[] = [
  {
    title: "Print",
    href: getRoute("en", "print"),
    eyebrow: "Print production",
    description:
      "Business print materials, mailing components and project-based print products prepared for further processing.",
    points: ["Book printing", "Digital printing", "Offset printing"],
  },
  {
    title: "Lettershop",
    href: getRoute("en", "lettershop"),
    eyebrow: "Processing",
    description:
      "Manual and machine-assisted processing, assembly and shipping preparation for mailing projects.",
    points: ["Assembly", "Machine-assisted processing", "Shipping preparation"],
  },
  {
    title: "Logistics",
    href: getRoute("en", "warehouseLogistics"),
    eyebrow: "Fulfillment",
    description:
      "Storage, stock preparation, call-off coordination and shipping control for recurring B2B processes.",
    points: ["Storage", "Stock preparation", "Shipping control"],
  },
];

const processSteps = [
  {
    title: "Consultation",
    description:
      "Requirements, quantities, timing and shipping goals are clarified together.",
  },
  {
    title: "Print",
    description:
      "Print products are prepared and produced according to the project requirements.",
  },
  {
    title: "Processing",
    description:
      "Materials are processed manually or with machine assistance and prepared for shipping.",
  },
  {
    title: "Storage",
    description:
      "Stock can be stored and made available for specific projects.",
  },
  {
    title: "Shipping",
    description:
      "Shipments are prepared and coordinated through suitable shipping channels.",
  },
];

const credibilityCards = [
  {
    title: "Company tradition since 1952",
    text: "Many years of experience in recurring print, mailing and logistics processes.",
  },
  {
    title: "Everything from one source",
    text: "Print, processing, storage and shipping are coordinated as connected steps.",
  },
  {
    title: "Clear points of contact",
    text: "Short communication paths and reliable coordination for planned workflows.",
  },
  {
    title: "Based in Dortmund",
    text: "Production, processing and logistics coordination from Dortmund.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Print production",
    alt: "Insight into print production at DWS",
    src: "/images/gallery/druckmaschine-urbanekuenste.jpg",
  },
  {
    caption: "Shipping preparation",
    alt: "Insight into shipping preparation at DWS",
    src: "/images/gallery/mailing-kuvert.jpg",
  },
  {
    caption: "Warehouse coordination",
    alt: "Insight into warehouse coordination at DWS",
    src: "/images/gallery/lager-smartphone.jpg",
  },
  {
    caption: "Mailing components",
    alt: "Mailing components in processing at DWS",
    src: "/images/gallery/urbanekuenste-mailing.jpg",
  },
  {
    caption: "Assembly",
    alt: "Insight into assembly at DWS",
    src: "/images/gallery/weihnachtskarte-lasercut.jpg",
  },
  {
    caption: "Stock preparation",
    alt: "Insight into stock preparation at DWS",
    src: "/images/gallery/dws-kalender.jpg",
  },
  {
    caption: "Print material",
    alt: "Print material in the production process at DWS",
    src: "/images/gallery/skoda-druckbogen.jpg",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
              DWS Direktwerbe-Service Dortmund
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-ink md:text-7xl">
              Print, lettershop and logistics from a single source.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl md:leading-9">
              DWS supports companies, agencies, public institutions, printers
              and publishers with reliable print, mailing and logistics
              processes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={getRoute("en", "services")}>
                View services
              </ButtonLink>
              <ButtonLink href={getRoute("en", "contact")} variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[540px]" aria-hidden="true">
            <div className="absolute inset-0 border border-zinc-200 bg-zinc-50" />
            <div className="absolute inset-6 border border-zinc-200 bg-white" />
            <div className="absolute inset-x-6 top-6 grid grid-cols-5 border-b border-zinc-200">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="border-r border-zinc-200 px-3 py-4 last:border-r-0"
                >
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="h-24 border border-zinc-200 bg-zinc-100" />
              <div className="h-24 border border-zinc-200 bg-white" />
              <div className="h-24 border border-zinc-200 bg-zinc-200" />
            </div>
            <div className="absolute left-10 top-1/2 h-px w-[72%] bg-zinc-300" />
            <div className="absolute left-1/2 top-20 h-[68%] w-px bg-zinc-200" />
            <div className="absolute right-10 top-24 h-28 w-28 border border-zinc-300 bg-white" />
            <div className="absolute bottom-24 left-10 h-20 w-36 border border-zinc-300 bg-white" />
            <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-64 md:w-64">
              <Image
                src="/images/DWS_Bildmarke_23.png"
                alt="DWS Direktwerbe-Service symbol mark"
                width={1240}
                height={1240}
                className="h-full w-full object-contain opacity-90"
                sizes="(min-width: 768px) 256px, 208px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Three areas. One coordinated workflow."
          description="DWS combines print production, processing and logistics so that materials can be produced, prepared, stored and shipped in a structured process."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={index}
              featured
              linkLabel="View service"
            />
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <SectionHeading
            eyebrow="Why DWS"
            title="Reliable processes matter."
            description="For business customers, the value is not only in the individual service, but in a reliable overall workflow."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credibilityCards.map((card) => (
              <article
                key={card.title}
                className="border border-zinc-200 bg-white p-4"
              >
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-zinc-600">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Workflow"
          title="From production to delivery"
          description="DWS coordinates the required steps depending on the project, material and shipping objective."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-zinc-200 bg-white p-6 md:after:absolute md:after:left-full md:after:top-10 md:after:h-px md:after:w-4 md:after:bg-zinc-300 md:last:after:hidden"
            >
              <span className="text-sm font-semibold text-zinc-600">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="Insights into print, processing and shipping"
            description="Examples from production, assembly and logistics workflows at DWS."
          />
          <div className="mt-10">
            <ImageGallery items={galleryItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Customers"
            title="Who we work for"
            description="DWS supports business customers who need recurring print, mailing and logistics processes to be implemented reliably."
          />
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Companies",
              "Agencies",
              "Public institutions",
              "Printers",
              "Publishers",
            ].map((item) => (
              <li
                key={item}
                className="border border-zinc-200 bg-white px-5 py-4 text-base font-semibold text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Planning a print, mailing or logistics project?"
        description="DWS coordinates the right steps from a single source and with clear points of contact."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
