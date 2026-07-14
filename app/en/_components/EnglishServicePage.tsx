import Image from "next/image";
import type { ReactNode } from "react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceListBlock } from "@/components/ServiceListBlock";
import { ServicePageSections } from "@/components/ServicePageSections";
import type { GalleryItem } from "@/components/ImageGallery";
import { getRoute } from "@/lib/i18n";

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type EnglishServicePageProps = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  typicalServices?: string[];
  suitableFor?: string[];
  detailsSection?: ReactNode;
  methodPanels?: {
    title: string;
    items: string[];
  }[];
  coordination: {
    eyebrow: string;
    title: string;
    description: string;
  } | null;
  steps: string[];
  benefits: string[];
  galleryItems: GalleryItem[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaDescription: string;
  sectionLabels?: {
    workflowTitle: string;
    workflowDescription: string;
    benefitsTitle: string;
    benefitsDescription: string;
    galleryTitle: string;
    galleryDescription: string;
  };
};

export function EnglishServicePage({
  hero,
  intro,
  typicalServices = [],
  suitableFor = [],
  detailsSection,
  methodPanels,
  coordination,
  steps,
  benefits,
  galleryItems,
  relatedLinks,
  ctaTitle,
  ctaDescription,
  sectionLabels = {
    workflowTitle: "Workflow",
    workflowDescription:
      "Each project is coordinated and prepared in clear, traceable steps.",
    benefitsTitle: "What this supports",
    benefitsDescription:
      "Clear workflows, defined handovers and project-specific implementation help keep connected work steps manageable.",
    galleryTitle: "Operational views",
    galleryDescription:
      "Examples from production, processing or logistics coordination.",
  },
}: EnglishServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover grayscale saturate-[0.75] contrast-[0.95]"
          />
        </div>
      </section>

      {detailsSection ?? (
        <section className="border-b border-zinc-200 bg-white">
          <div
            className={
              methodPanels
                ? "mx-auto max-w-7xl px-6 py-14 md:px-8"
                : "mx-auto grid max-w-7xl gap-6 px-6 py-14 md:px-8 lg:grid-cols-2"
            }
          >
            {methodPanels ? (
              <article className="border border-zinc-200 bg-white shadow-line">
                <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
                  <h2 className="text-2xl font-semibold text-ink">
                    Typical services
                  </h2>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-3">
                  {methodPanels.map((method) => (
                    <section
                      key={method.title}
                      className="border border-zinc-200 bg-white p-5"
                    >
                      <h3 className="text-xl font-semibold text-ink">
                        {method.title}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {method.items.map((item) => (
                          <li
                            key={item}
                            className="border-t border-zinc-200 pt-3 text-sm font-medium leading-6 text-zinc-700 first:border-t-0 first:pt-0"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ) : (
              <>
                <ServiceListBlock
                  title="Typical services"
                  items={typicalServices}
                />
                <ServiceListBlock title="Suitable for" items={suitableFor} />
              </>
            )}
          </div>
        </section>
      )}

      {coordination ? (
        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
            <SectionHeading
              eyebrow={coordination.eyebrow}
              title={coordination.title}
              description={coordination.description}
            />
          </div>
        </section>
      ) : null}
      <ServicePageSections
        steps={steps}
        benefits={benefits}
        galleryItems={galleryItems}
        relatedLinks={relatedLinks}
        labels={{
          workflowEyebrow: "Workflow",
          workflowTitle: sectionLabels.workflowTitle,
          workflowDescription: sectionLabels.workflowDescription,
          benefitsEyebrow: "Advantage",
          benefitsTitle: sectionLabels.benefitsTitle,
          benefitsDescription: sectionLabels.benefitsDescription,
          galleryEyebrow: "Insights",
          galleryTitle: sectionLabels.galleryTitle,
          galleryDescription: sectionLabels.galleryDescription,
          relatedTitle: "Connected services",
          relatedEyebrow: "Service",
          relatedCta: "View service",
        }}
      />
      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        buttonLabel="Contact us"
        href={getRoute("en", "contact")}
      />
    </>
  );
}
