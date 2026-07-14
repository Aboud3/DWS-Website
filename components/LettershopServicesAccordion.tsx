"use client";

import { useState } from "react";

type LettershopBodyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      intro?: string;
      items: string[];
    }
  | {
      type: "section";
      title: string;
      paragraphs: string[];
    }
  | {
      type: "tags";
      items: string[];
    }
  | {
      type: "cardGrid";
      cards: {
        title: string;
        description: string;
      }[];
    };

export type LettershopService = {
  title: string;
  summary: string;
  chips?: string[];
  body: LettershopBodyBlock[];
};

type LettershopServicesAccordionProps = {
  items: LettershopService[];
  moreLabel?: string;
  lessLabel?: string;
};

function getPanelId(title: string) {
  return `lettershop-service-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
}

function BodyBlock({ block }: { block: LettershopBodyBlock }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <div className="space-y-4">
        {block.intro ? <p>{block.intro}</p> : null}
        <ul className="list-disc space-y-3 pl-6">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "section") {
    return (
      <section className="space-y-3">
        <h4 className="text-lg font-semibold text-ink">{block.title}</h4>
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    );
  }

  if (block.type === "tags") {
    return (
      <div className="flex flex-wrap gap-2">
        {block.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm font-medium leading-none text-zinc-700"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {block.cards.map((card) => (
        <article key={card.title} className="border border-zinc-200 bg-white p-5">
          <h4 className="text-lg font-semibold text-ink">{card.title}</h4>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            {card.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function LettershopServicesAccordion({
  items,
  moreLabel = "Mehr erfahren",
  lessLabel = "Weniger anzeigen",
}: LettershopServicesAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {items.map((item) => {
        const isOpen = openItem === item.title;
        const panelId = getPanelId(item.title);

        return (
          <article
            key={item.title}
            className="border border-zinc-200 bg-white shadow-line"
          >
            <div className="p-5 md:p-6">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => {
                    setOpenItem(isOpen ? null : item.title);
                  }}
                  className="group flex w-full select-none flex-col items-start gap-4 text-left transition-colors focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-xl font-semibold leading-7 text-ink">
                    {item.title}
                  </span>
                  <span className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-zinc-400 bg-white px-3.5 text-sm font-semibold text-ink shadow-line transition-colors group-hover:border-ink group-focus-visible:ring-2 group-focus-visible:ring-ink group-focus-visible:ring-offset-2">
                    <span>{isOpen ? lessLabel : moreLabel}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <p className="mt-4 max-w-prose text-base leading-7 text-zinc-600">
                {item.summary}
              </p>
              {item.chips?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm font-medium leading-none text-zinc-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-zinc-200 px-5 py-6 md:px-6">
                  <div className="space-y-6 text-lg leading-8 text-zinc-600">
                    {item.body.map((block, index) => (
                      <div
                        key={`${item.title}-${index}`}
                        className={
                          block.type === "cardGrid" ? "max-w-none" : "max-w-prose"
                        }
                      >
                        <BodyBlock block={block} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
