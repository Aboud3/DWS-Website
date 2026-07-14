"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyContact, navigationByLocale } from "@/lib/content";
import { getLocaleFromPath, getRoute } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const navigation = navigationByLocale[locale];

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-9 px-6 py-11 md:grid-cols-[1.25fr_0.8fr_1.15fr] md:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/DWS_Bildmarke2026.png"
              alt="DWS Bildmarke"
              width={1240}
              height={1240}
              className="h-10 w-10 object-contain"
              sizes="40px"
            />
            <p className="max-w-xs text-base font-bold leading-6 text-ink">
              DWS Druckwerbe-Service + Logistik
            </p>
          </div>
          <p className="mt-4 max-w-xs border-t border-zinc-200 pt-4 text-sm leading-6 text-zinc-600">
            {locale === "de"
              ? "Dienstleister in Dortmund für Design, Druck, Lettershop, Fulfillment und Lagerlogistik."
              : "Service provider in Dortmund for design, print, lettershop, fulfillment and logistics."}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-700">
            {locale === "de" ? "Navigation" : "Navigation"}
          </h2>
          <ul className="mt-4 space-y-2 text-sm font-medium text-zinc-700">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-700">
            {locale === "de" ? "Kontakt" : "Contact"}
          </h2>
          <div className="mt-4 space-y-1 text-sm leading-6 text-zinc-700">
            <p>{companyContact.company}</p>
            <p>{companyContact.street}</p>
            <p>
              {companyContact.postalCode} {companyContact.city}
            </p>
            {locale === "en" ? <p>{companyContact.country}</p> : null}
            <p>
              {locale === "de" ? "Telefon" : "Phone"}:{" "}
              <a href="tel:+492319250550" className="font-medium transition-colors hover:text-ink">
                {companyContact.phone}
              </a>
            </p>
            <p>
              {locale === "de" ? "E-Mail" : "Email"}:{" "}
              <a
                href={`mailto:${companyContact.email}`}
                className="font-medium transition-colors hover:text-ink"
              >
                {companyContact.email}
              </a>
            </p>
          </div>
        </address>
      </div>
      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 DWS Druckwerbe-Service + Logistik GmbH.</p>
          <div className="flex gap-5">
            <Link href={getRoute(locale, "imprint")} className="transition-colors hover:text-ink">
              {locale === "de" ? "Impressum" : "Imprint"}
            </Link>
            <Link href={getRoute(locale, "privacy")} className="transition-colors hover:text-ink">
              {locale === "de" ? "Datenschutz" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
