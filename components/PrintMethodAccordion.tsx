"use client";

import { useState } from "react";

export type PrintMethod = {
  title: string;
  summary: string;
  chips: string[];
  paragraphs: string[];
};

type PrintMethodAccordionProps = {
  methods: PrintMethod[];
  moreLabel?: string;
  lessLabel?: string;
};

export function PrintMethodAccordion({
  methods,
  moreLabel = "Mehr erfahren",
  lessLabel = "Weniger anzeigen",
}: PrintMethodAccordionProps) {
  const [openMethod, setOpenMethod] = useState<string | null>(null);

  return (
    <div className="grid gap-4">
      {methods.map((method) => {
        const isOpen = openMethod === method.title;
        const panelId = `print-method-${method.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <article
            key={method.title}
            className="border border-zinc-200 bg-white shadow-line"
          >
            <div className="p-5 md:p-6">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => {
                    setOpenMethod(isOpen ? null : method.title);
                  }}
                  className="group flex w-full select-none items-center justify-between gap-4 text-left transition-colors focus-visible:outline-none"
                >
                  <span className="text-xl font-semibold leading-7 text-ink">
                    {method.title}
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
                {method.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {method.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm font-medium leading-none text-zinc-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-zinc-200 px-5 py-6 md:px-6">
                  <div className="max-w-prose space-y-6 text-lg leading-8 text-zinc-600">
                    {method.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
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
