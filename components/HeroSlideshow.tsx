"use client";

import Image from "next/image";

export type HeroSlide = {
  src: string;
  alt: string;
};

type HeroSlideshowProps = {
  slides: HeroSlide[];
};

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  if (slides.length === 0) {
    return null;
  }

  const hasMultipleSlides = slides.length > 1;
  const duration = slides.length * 5;
  const visibleEnd = Math.max(0, 100 / slides.length - 5);
  const fadeEnd = 100 / slides.length;

  return (
    <div className="relative aspect-[1403/1059] bg-white">
      {hasMultipleSlides ? (
        <style>
          {`
            .hero-slideshow-slide {
              opacity: 0;
            }

            .hero-slideshow-slide[data-slide-index="0"] {
              opacity: 1;
            }

            @keyframes hero-slideshow-fade {
              0%, ${visibleEnd}% { opacity: 1; }
              ${fadeEnd}%, 95% { opacity: 0; }
              100% { opacity: 1; }
            }

            @media (prefers-reduced-motion: reduce) {
              .hero-slideshow-slide {
                animation: none !important;
                opacity: 0 !important;
              }

              .hero-slideshow-slide[data-slide-index="0"] {
                opacity: 1 !important;
              }
            }
          `}
        </style>
      ) : null}
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          loading={index === 0 ? undefined : "eager"}
          sizes="(min-width: 1280px) 552px, (min-width: 1024px) 42vw, 100vw"
          className="hero-slideshow-slide object-contain [filter:drop-shadow(0_18px_24px_rgba(17,17,17,0.16))]"
          data-slide-index={index}
          style={
            hasMultipleSlides
              ? {
                  animation: `hero-slideshow-fade ${duration}s infinite`,
                  animationDelay: `-${index * 5}s`,
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}
