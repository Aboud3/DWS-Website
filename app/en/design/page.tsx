import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("design", "en");

const steps = [
  "Review requirements and source material",
  "Prepare layout and production data",
  "Coordinate print-ready implementation",
];

const benefits = [
  "Early alignment with print and processing",
  "Practical preparation for mailing and shipping workflows",
  "Less friction between design, production and logistics",
];

export default function EnglishDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="DESIGN"
        title="Design and digitization aligned with production."
        description="Layout, the transfer of analogue data into digital data, and print preparation are coordinated so that printing, finishing, storage and shipping can follow on efficiently."
      />

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl space-y-12 px-6 py-14 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Good advice …" />
            <div className="space-y-6 text-lg leading-8 text-zinc-600 lg:pt-2">
              <h3 className="text-2xl font-semibold leading-8 text-ink">
                Included as standard!
              </h3>
              <p>
                We&apos;re glad to advise and support you in carrying out your
                direct-marketing campaign — from the first vision through design
                and production to postage-optimised mail submission.
              </p>
              <p>
                Draw on our more than 70 years of industry experience: the
                course for later costs is already set at the concept stage.
                Postal requirements must be observed so there are no surprises
                in postage costs later on.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Digitization" />
            <div className="text-lg leading-8 text-zinc-600 lg:pt-2">
              <p>
                Whether consumption bills, patient records or general documents, we
                digitize your analogue materials and convert them into digital data in
                the format you require.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
            <SectionHeading title="Graphics / Layout" />
            <div className="text-lg leading-8 text-zinc-600 lg:pt-2">
              <p>
                Whether it&apos;s a new corporate design, the relaunch of an existing
                layout or producing a company&apos;s advertising materials, our
                graphic designers bring a strong portfolio covering every
                creative service across print and web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePageSections
        steps={steps}
        benefits={benefits}
        workflowLead="You have a goal — we have the ways."
        workflowBody={
          <>
            <p>
              Right at the concept stage of a new project, the possible output
              channels are defined according to the respective objective. Print,
              personalisation and digital marketing strategies can often be
              combined into a single workflow. Whether controlled independently
              or launched as one comprehensive campaign, the key lies in planning
              the project in advance.
            </p>
            <p>
              The ways to combine print production with creative, digital
              marketing strategies are varied and impressive.
            </p>
            <p>
              Our media department supports clients early on, with the setup and
              modification of the input and/or control file.
            </p>
            <p>
              The workflows developed for company campaigns are of course not
              lost. Loaded with new content, the setup can be reused at any time
              for current projects, and expanded or adapted.
            </p>
          </>
        }
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
          {
            label: "Logistics",
            href: getRoute("en", "warehouseLogistics"),
            description: "Storage, call-off coordination and shipping control.",
          },
        ]}
        labels={{
          workflowEyebrow: "Workflow",
          workflowTitle: "How DWS works",
          workflowDescription:
            "Source material, layout and production data are prepared in clear steps.",
          benefitsEyebrow: "Advantage",
          benefitsTitle: "What this supports",
          benefitsDescription:
            "Design preparation can be aligned with print, lettershop and logistics before production begins.",
          galleryEyebrow: "Insights",
          galleryTitle: "Operational views",
          galleryDescription:
            "Selected views from production, processing or logistics coordination.",
          relatedTitle: "Connected services",
          relatedEyebrow: "Service",
          relatedCta: "View service",
        }}
      />

      <CTASection
        title="Planning a print or mailing project?"
        description="DWS can support layout, print-ready preparation and the connected production steps."
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
