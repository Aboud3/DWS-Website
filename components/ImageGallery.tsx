import Image from "next/image";

export type GalleryItem = {
  caption: string;
  alt: string;
  src: string;
};

type ImageGalleryProps = {
  items: GalleryItem[];
  compact?: boolean;
  unoptimized?: boolean;
};

export function ImageGallery({
  items,
  compact = false,
  unoptimized = false,
}: ImageGalleryProps) {
  return (
    <div className={`grid ${compact ? "gap-4 md:grid-cols-3" : "gap-5 md:grid-cols-3"}`}>
      {items.map((item) => (
        <figure key={item.caption} className="group">
          <div
            className={`relative overflow-hidden border border-zinc-200 bg-white ${
              compact ? "aspect-[3/2]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt || item.caption}
              fill
              loading="eager"
              unoptimized={unoptimized}
              sizes={
                compact
                  ? "(min-width: 768px) 33vw, 100vw"
                  : "(min-width: 1024px) 33vw, 100vw"
              }
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025]"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
