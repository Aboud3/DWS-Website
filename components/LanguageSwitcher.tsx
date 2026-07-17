"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPath,
  getRoute,
  getRouteKeyFromPath,
  type Locale,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  className?: string;
};

const defaultClassName =
  "hidden items-center gap-2 self-center text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 lg:flex";

export function LanguageSwitcher({
  className = defaultClassName,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const routeKey = getRouteKeyFromPath(pathname);

  const items: { locale: Locale; label: string }[] = [
    { locale: "de", label: "DE" },
    { locale: "en", label: "EN" },
  ];

  return (
    <div
      aria-label={
        currentLocale === "de" ? "Sprachauswahl" : "Language selection"
      }
      className={className}
    >
      {items.map((item, index) => {
        const isActive = item.locale === currentLocale;

        return (
          <span key={item.locale} className="inline-flex items-center gap-2">
            {index > 0 ? (
              <span className="text-zinc-300" aria-hidden="true">
                |
              </span>
            ) : null}
            <Link
              href={getRoute(item.locale, routeKey)}
              aria-current={isActive ? "page" : undefined}
              className={`transition-colors ${
                isActive ? "text-ink" : "text-zinc-500 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
