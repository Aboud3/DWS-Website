import Link from "next/link";
import type { Service } from "@/lib/content";

type ServiceCardProps = {
  service: Service;
  index?: number;
  featured?: boolean;
  linkLabel?: string;
};

export function ServiceCard({
  service,
  index,
  featured = false,
  linkLabel = "Zur Leistung",
}: ServiceCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border bg-white transition-all ${
        featured
          ? "border-zinc-300 p-8 shadow-line hover:-translate-y-1 hover:border-ink hover:shadow-[0_24px_60px_rgba(17,17,17,0.10)]"
          : "border-zinc-200 p-7 hover:border-zinc-400"
      }`}
    >
      <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
        {featured && typeof index === "number"
          ? `${String(index + 1).padStart(2, "0")} ${service.eyebrow}`
          : service.eyebrow}
      </p>
      <h3
        className={`relative mt-4 font-semibold text-ink ${
          featured ? "text-3xl" : "text-2xl"
        }`}
      >
        {service.title}
      </h3>
      <p className="mt-4 flex-1 text-base leading-7 text-zinc-600">
        {service.description}
      </p>
      <ul className="mt-6 space-y-3 border-t border-zinc-200 pt-6 text-sm text-zinc-700">
        {service.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="mt-7 inline-flex text-sm font-semibold text-ink underline decoration-zinc-400 underline-offset-4 transition group-hover:decoration-ink"
      >
        {linkLabel}
      </Link>
    </article>
  );
}
