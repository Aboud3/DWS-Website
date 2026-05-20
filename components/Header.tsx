"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderNav } from "@/components/HeaderNav";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { navigationByLocale } from "@/lib/content";
import { getLocaleFromPath, getRoute } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const navigation = navigationByLocale[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur print:static">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5 md:px-8">
        <Link
          href={getRoute(locale, "home")}
          className="flex items-center"
          aria-label={locale === "de" ? "DWS Startseite" : "DWS home"}
        >
          <Image
            src="/images/dws-logo-horizontal.jpg"
            alt="DWS Direktwerbe-Service Logo"
            width={2480}
            height={1240}
            priority
            className="hidden h-[3.4rem] w-auto object-contain sm:block md:h-16"
            sizes="(min-width: 768px) 260px, 180px"
          />
          <Image
            src="/images/DWS_Bildmarke_23.png"
            alt="DWS Direktwerbe-Service Bildmarke"
            width={1240}
            height={1240}
            priority
            className="h-11 w-11 object-contain sm:hidden"
            sizes="44px"
          />
        </Link>
        <HeaderNav items={navigation} />
        <div className="hidden items-center gap-4 self-center sm:flex">
          <LanguageSwitcher />
          <Link
            href={getRoute(locale, "contact")}
            className="inline-flex min-h-11 items-center justify-center self-center bg-ink px-4 text-sm font-semibold leading-none text-white transition-colors hover:bg-zinc-800"
          >
            {locale === "de" ? "Anfrage starten" : "Start inquiry"}
          </Link>
        </div>
      </div>
      <nav
        aria-label={
          locale === "de" ? "Mobile Hauptnavigation" : "Mobile main navigation"
        }
        className="flex gap-5 overflow-x-auto border-t border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 lg:hidden"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
