import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroSlideshow, type HeroSlide } from "@/components/HeroSlideshow";
import type { GalleryItem } from "@/components/ImageGallery";
import { ImageMarquee } from "@/components/ImageMarquee";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { Service } from "@/lib/content";

export const metadata = getPageMetadata("home", "en");

const services: Service[] = [
  {
    title: "Design",
    href: getRoute("en", "design"),
    eyebrow: "Design",
    description:
      "Layout, data preparation and print-ready setup before production, processing and shipping.",
    points: ["Layout setup", "Data preparation", "Print-ready files"],
  },
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
    title: "Design",
    description:
      "Layouts, data and templates are prepared for the next production steps.",
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
    title: "Dispatch",
    description:
      "Shipments are prepared and coordinated through suitable shipping channels.",
  },
];

const credibilityCards = [
  {
    title: "Tradition since 1952",
    text: "Many years of experience in recurring print, mailing and logistics processes.",
  },
  {
    title: "Everything from one source",
    text: "Design, print, processing, storage and dispatch are coordinated as connected steps.",
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
    src: "/images/gallery/einblicke/druckmaschine-urbanekuenste.png",
  },
  {
    caption: "Dispatch preparation",
    alt: "Insight into dispatch preparation at DWS",
    src: "/images/gallery/einblicke/mailing-kuvert.png",
  },
  {
    caption: "Warehouse coordination",
    alt: "Insight into warehouse coordination at DWS",
    src: "/images/gallery/einblicke/lager-smartphone.png",
  },
  {
    caption: "Mailing components",
    alt: "Mailing components in processing at DWS",
    src: "/images/gallery/einblicke/urbanekuenste-mailing.png",
  },
  {
    caption: "Processing",
    alt: "Insight into processing at DWS",
    src: "/images/gallery/einblicke/weihnachtskarte-lasercut.png",
  },
  {
    caption: "Print sheet",
    alt: "Print sheet in the production process at DWS",
    src: "/images/gallery/einblicke/skoda-druckbogen.png",
  },
];

const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/og-press.png",
    alt: "Historic Heidelberg printing machine at DWS",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32 lg:pt-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
              DWS Druckwerbe-Service + Logistik
            </p>
            <h1 className="max-w-[20rem] text-3xl font-semibold tracking-normal text-ink sm:max-w-3xl sm:text-5xl md:text-7xl">
              Design, print and logistics from one source.
            </h1>
            <p className="mt-7 max-w-[20rem] text-lg leading-8 text-zinc-600 sm:max-w-2xl md:text-xl md:leading-9">
              DWS supports companies, agencies, public institutions, print shops,
              publishers, associations and private customers with design, print,
              mailing and logistics processes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={getRoute("en", "services")}>
                View services
              </ButtonLink>
              <ButtonLink href={getRoute("en", "contact")} variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>
          <HeroSlideshow slides={heroSlides} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Four areas – one coordinated workflow."
          description="DWS combines design, print production, processing and logistics so that materials can be prepared, produced, stored and shipped in a structured process."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            description="For customers, the value is not only in the individual service, but in a reliable overall workflow."
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

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Experience"
            title="Rooted in design, print and processing since 1952"
          />
          <div className="text-lg leading-8 text-zinc-600">
            <p>
              DWS works for customers who need predictable workflows and reliable
              communication. Its strength lies in connecting design, production,
              processing and dispatch coordination.
            </p>
            <p className="mt-6">
              This creates fewer handovers, clear responsibilities and a fast
              process from development through to delivery to the final customer.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow="Process"
          title="From idea to delivery"
          description="DWS coordinates each step on a per-project basis, aligned to deadline, material flow and shipping target."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-zinc-200 bg-white p-6 md:after:absolute md:after:left-full md:after:top-10 md:after:h-px md:after:w-4 md:after:bg-zinc-300 md:last:after:hidden"
            >
              <span className="text-sm font-semibold text-zinc-600">
                0{index + 1}
              </span>
              <h3 className="mt-6 min-w-0 hyphens-auto text-lg font-semibold leading-7 text-ink xl:text-xl">
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
            title="Insights into design, print, processing and dispatch"
            description="Examples from design, production, processing and logistics workflows at DWS."
          />
          <div className="mt-10">
            <ImageMarquee items={galleryItems} />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Customers"
            title="Who we work for"
            description="DWS supports customers who need print, mailing and logistics processes implemented reliably — from companies and organizations to associations and private customers."
          />
          <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Companies",
              "Agencies",
              "Public institutions",
              "Print shops",
              "Publishers",
              "Associations",
              "Private customers",
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
