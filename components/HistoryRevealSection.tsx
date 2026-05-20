"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { HistoricalDocumentFrame } from "@/components/HistoricalDocumentFrame";

type HistoryRevealSectionProps = {
  imageAlt: string;
  children: ReactNode;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HistoryRevealSection({
  imageAlt,
  children,
}: HistoryRevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!section || !image || !text) {
      return;
    }

    const motionQuery = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );

    const reset = () => {
      image.style.transform = "";
      image.style.willChange = "";
      text.style.opacity = "";
      text.style.transform = "";
      text.style.willChange = "";
    };

    if (!motionQuery.matches) {
      reset();
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = clamp(
        (viewportHeight * 0.78 - rect.top) / (viewportHeight * 0.58),
        0,
        1,
      );
      const textProgress = clamp((progress - 0.24) / 0.58, 0, 1);

      image.style.willChange = "transform";
      image.style.transform = `translateX(${(1 - progress) * 24}px) scale(${
        1.12 - progress * 0.12
      })`;

      text.style.willChange = "opacity, transform";
      text.style.opacity = String(0.62 + textProgress * 0.38);
      text.style.transform = `translateY(${(1 - textProgress) * 12}px)`;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reset();
    };
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div ref={imageRef}>
          <HistoricalDocumentFrame alt={imageAlt} />
        </div>
        <div ref={textRef}>{children}</div>
      </div>
    </section>
  );
}
