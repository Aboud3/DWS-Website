import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("services", "en");

const serviceOverviews = [
  {
    title: "Design",
    href: getRoute("en", "design"),
    text: "DWS designs print products, mailings and project-based print materials.",
    tasks: ["Design", "Layout"],
  },
  {
    title: "Print",
    href: getRoute("en", "print"),
    text: "DWS produces all print products, mailing components and project-based print materials.",
    tasks: ["Book printing", "Digital printing", "Offset printing"],
  },
  {
    title: "Lettershop",
    href: getRoute("en", "lettershop"),
    text: "DWS processes mailing components and prepares shipments for planned mailings.",
    tasks: [
      "Hand assembly",
      "Data preparation",
      "Machine-assisted processing",
      "Shipping preparation",
      "Enveloping of all kinds",
      "Finishing",
    ],
  },
  {
    title: "Logistics",
    href: getRoute("en", "warehouseLogistics"),
    text: "DWS connects storage, stock provision and shipping control for project-based material flows.",
    tasks: [
      "Storage",
      "Stock preparation",
      "Just-in-time coordination",
      "Shipping control / Carriers",
      "DHL/DPAG shipping processes",
    ],
  },
];

const workflowSteps = [
  "Consultation",
  "Design",
  "Print",
  "Processing",
  "Storage",
  "Shipping",
];

export default function EnglishServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Design, print, processing and logistics in a single process."
        description="DWS bundles the relevant steps for print and mailing projects: from design and production through finishing to warehouse-backed shipping coordination."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow="Overview"
          title="DWS combines design, print, lettershop and warehouse logistics."
          description="The service areas can be used individually or combined into a coordinated workflow."
        />
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            DWS supports customers when ideas from the customer, print data,
            material, processing, stock and shipping dates need to be brought
            together in a single process.
          </p>
          <p>
            The goal is a transparent process with clear coordination between
            design, production, finishing, storage and shipping.
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
                  View service
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
            title="A coordinated process"
            description="The work steps are planned on a project basis and coordinated with one another during implementation."
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
      <CTASection
        title="Let's talk about your next project."
        description="Whether design of print products, production, mailing or logistics: DWS coordinates the right steps from a single source, with clear points of contact."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
