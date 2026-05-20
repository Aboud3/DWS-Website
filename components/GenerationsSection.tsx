import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";

type GenerationPortrait = {
  title: string;
  label: string;
  placeholderLabel?: string;
  image?: {
    src: string;
    alt: string;
    preserveColor?: boolean;
  };
};

type GenerationsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  portraits: GenerationPortrait[];
};

export function GenerationsSection({
  eyebrow,
  title,
  description,
  portraits,
}: GenerationsSectionProps) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {portraits.map((portrait) => (
            <article
              key={portrait.title}
              className="border border-zinc-200 bg-white p-5"
            >
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden border border-zinc-200 bg-zinc-50 text-center">
                {portrait.image ? (
                  <Image
                    src={portrait.image.src}
                    alt={portrait.image.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className={`object-cover object-center ${
                      portrait.image.preserveColor
                        ? ""
                        : "grayscale saturate-[0.7] contrast-[1.02]"
                    }`}
                  />
                ) : (
                  <>
                    <span className="pointer-events-none absolute text-6xl font-semibold tracking-normal text-zinc-900/[0.035]">
                      DWS
                    </span>
                    <span className="relative text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      {portrait.placeholderLabel}
                    </span>
                  </>
                )}
              </div>
              <h2 className="mt-6 text-xl font-semibold text-ink">
                {portrait.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {portrait.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
