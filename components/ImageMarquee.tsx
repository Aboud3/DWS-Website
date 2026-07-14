import Image from "next/image";
import type { GalleryItem } from "@/components/ImageGallery";

type ImageMarqueeProps = {
  items: GalleryItem[];
};

function MarqueeSet({
  items,
  duplicate = false,
}: {
  items: GalleryItem[];
  duplicate?: boolean;
}) {
  return (
    <div
      className={`image-marquee-set flex shrink-0 gap-4 pr-4 md:gap-5 md:pr-5 ${
        duplicate ? "image-marquee-duplicate" : ""
      }`}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {items.map((item) => (
        <figure
          key={`${duplicate ? "duplicate-" : ""}${item.caption}`}
          className="w-[72vw] max-w-[320px] shrink-0 md:w-80"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-zinc-200 bg-white">
            <Image
              src={item.src}
              alt={item.alt || item.caption}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 320px, 72vw"
              className="object-cover"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

export function ImageMarquee({ items }: ImageMarqueeProps) {
  return (
    <div
      className="image-marquee"
      tabIndex={0}
      aria-label="Image gallery"
    >
      <style>
        {`
          @keyframes image-marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .image-marquee-track {
            animation: image-marquee-scroll 48s linear infinite;
          }

          .image-marquee:hover .image-marquee-track,
          .image-marquee:focus-within .image-marquee-track {
            animation-play-state: paused;
          }

          @media (max-width: 767px) {
            .image-marquee-viewport {
              overflow-x: auto;
            }

            .image-marquee-track {
              animation: none;
              transform: none;
            }

            .image-marquee-set {
              padding-right: 0;
            }

            .image-marquee-duplicate {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .image-marquee-viewport {
              overflow-x: auto;
            }

            .image-marquee-track {
              animation: none;
              flex-wrap: wrap;
              transform: none;
              width: 100%;
            }

            .image-marquee-set {
              flex-wrap: wrap;
              padding-right: 0;
              width: 100%;
            }

            .image-marquee-duplicate {
              display: none;
            }
          }
        `}
      </style>
      <div className="image-marquee-viewport overflow-hidden">
        <div className="image-marquee-track flex w-max">
          <MarqueeSet items={items} />
          <MarqueeSet items={items} duplicate />
        </div>
      </div>
    </div>
  );
}
