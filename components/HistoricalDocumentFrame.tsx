import Image from "next/image";

type HistoricalDocumentFrameProps = {
  alt: string;
};

export function HistoricalDocumentFrame({ alt }: HistoricalDocumentFrameProps) {
  return (
    <div className="relative mx-auto aspect-[1086/1448] w-full max-w-sm">
      <Image
        src="/images/history/historischer-meisterbrief-karl-sander-1934.webp"
        alt={alt}
        fill
        sizes="(min-width: 1024px) 384px, 85vw"
        className="object-contain"
      />
    </div>
  );
}
