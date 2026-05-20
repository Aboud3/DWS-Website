import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("services", "en");

const serviceOverviews = [
  {
    title: "Print production",
    href: getRoute("en", "print"),
    text: "Business print materials, mailing components and project-based printed products.",
    tasks: [
      "Book printing",
      "Digital printing",
      "Offset printing",
      "Mailings and inserts",
      "Forms and business stationery",
    ],
  },
  {
    title: "Lettershop",
    href: getRoute("en", "lettershop"),
    text: "Assembly, manual and machine-assisted processing and shipping preparation.",
    tasks: [
      "Assembly",
      "Manual processing",
      "Machine-assisted processing",
      "Shipping preparation",
      "Serial mailings",
    ],
  },
  {
    title: "Logistics",
    href: getRoute("en", "warehouseLogistics"),
    text: "Storage, stock preparation, call-off coordination and shipping control.",
    tasks: [
      "Storage",
      "Stock preparation",
      "Just-in-time coordination",
      "Shipping control",
      "DHL/DPAG shipping processes",
    ],
  },
];

const workflowSteps = [
  "Consultation",
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
        title="Integrated print, mailing and logistics services."
        description="DWS combines print production, lettershop services and logistics into coordinated B2B workflows."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          eyebrow="Overview"
          title="Services that work together."
          description="Print, processing and logistics are often connected tasks. They depend on timing, stock movement and clear coordination."
        />
        <div className="space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            DWS supports business customers by combining these steps in one
            structured workflow.
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
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600">
                    Typical tasks
                  </h3>
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
            description="From consultation to shipping, the required steps are planned and implemented according to the project."
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
        title="Need coordinated support?"
        description="DWS connects print, lettershop and logistics steps for structured B2B workflows."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
