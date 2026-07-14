import Link from "next/link";
import type { ReactNode } from "react";
import { ImageGallery, type GalleryItem } from "@/components/ImageGallery";
import { SectionHeading } from "@/components/SectionHeading";

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type ServicePageSectionsProps = {
  steps?: string[];
  benefits: string[];
  relatedLinks: RelatedLink[];
  galleryItems?: GalleryItem[];
  showWorkflow?: boolean;
  workflowLead?: string;
  workflowBody?: ReactNode;
  labels?: {
    workflowEyebrow: string;
    workflowTitle: string;
    workflowDescription: string;
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefitsDescription: string;
    galleryEyebrow: string;
    galleryTitle: string;
    galleryDescription: string;
    relatedTitle: string;
    relatedEyebrow: string;
    relatedCta: string;
  };
};

export function ServicePageSections({
  steps = [],
  benefits,
  relatedLinks,
  galleryItems,
  showWorkflow = true,
  workflowLead,
  workflowBody,
  labels = {
    workflowEyebrow: "Ablauf",
    workflowTitle: "So arbeitet DWS",
    workflowDescription:
      "Die Umsetzung wird projektbezogen abgestimmt und in nachvollziehbaren Schritten vorbereitet.",
    benefitsEyebrow: "Nutzen",
    benefitsTitle: "Ihr Vorteil",
    benefitsDescription:
      "Die Vorteile liegen in klaren Abläufen, abgestimmten Übergaben und einer Umsetzung, die zum jeweiligen Projekt passt.",
    galleryEyebrow: "Einblicke",
    galleryTitle: "Aus dem Arbeitsbereich",
    galleryDescription:
      "Beispiele aus Produktion, Verarbeitung oder logistischer Koordination.",
    relatedTitle: "Verbundene Leistungen",
    relatedEyebrow: "Leistung",
    relatedCta: "Zur Leistung",
  },
}: ServicePageSectionsProps) {
  return (
    <>
      {showWorkflow ? (
        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
            {workflowBody ? (
              <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
                <SectionHeading
                  eyebrow={labels.workflowEyebrow}
                  title={labels.workflowTitle}
                  description={workflowLead ?? labels.workflowDescription}
                />
                <div className="space-y-6 text-lg leading-8 text-zinc-600 lg:pt-2">
                  {workflowBody}
                </div>
              </div>
            ) : (
              <>
                <SectionHeading
                  eyebrow={labels.workflowEyebrow}
                  title={labels.workflowTitle}
                  description={labels.workflowDescription}
                />
                <ol className="mt-9 grid gap-4 md:grid-cols-3">
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className="min-h-40 border border-zinc-200 bg-white p-6 shadow-line"
                    >
                      <span className="text-sm font-semibold text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-6 text-xl font-semibold leading-7 text-ink">
                        {step}
                      </h3>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <SectionHeading
          eyebrow={labels.benefitsEyebrow}
          title={labels.benefitsTitle}
          description={labels.benefitsDescription}
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="grid min-h-28 grid-rows-[auto_1fr] border border-zinc-200 bg-zinc-50 p-5"
            >
              <span className="text-sm font-semibold text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 self-start text-base font-semibold leading-7 text-ink">
                {benefit}
              </p>
            </article>
          ))}
        </div>
      </section>

      {galleryItems ? (
        <section className="border-y border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
            <SectionHeading
              eyebrow={labels.galleryEyebrow}
              title={labels.galleryTitle}
              description={labels.galleryDescription}
            />
            <div className="mt-8">
              <ImageGallery items={galleryItems} compact />
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <SectionHeading title={labels.relatedTitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group grid min-h-36 border border-zinc-200 bg-white p-5 shadow-line transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_14px_34px_rgba(17,17,17,0.07)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  {labels.relatedEyebrow}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  {link.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex self-end text-sm font-semibold text-ink underline decoration-zinc-400 underline-offset-4 transition-colors group-hover:decoration-ink">
                  {labels.relatedCta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
