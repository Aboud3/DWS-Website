export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export type RouteKey =
  | "home"
  | "services"
  | "print"
  | "lettershop"
  | "warehouseLogistics"
  | "about"
  | "contact"
  | "imprint"
  | "privacy";

export const routes: Record<Locale, Record<RouteKey, string>> = {
  de: {
    home: "/",
    services: "/leistungen",
    print: "/druck",
    lettershop: "/lettershop",
    warehouseLogistics: "/lagerlogistik",
    about: "/ueber-uns",
    contact: "/kontakt",
    imprint: "/impressum",
    privacy: "/datenschutz",
  },
  en: {
    home: "/en",
    services: "/en/services",
    print: "/en/print",
    lettershop: "/en/lettershop",
    warehouseLogistics: "/en/logistics",
    about: "/en/about-us",
    contact: "/en/contact",
    imprint: "/en/imprint",
    privacy: "/en/privacy-policy",
  },
};

export const englishRoutesEnabled = true;

const routeAliases: Partial<Record<string, RouteKey>> = {
  "/en/warehouse-logistics": "warehouseLogistics",
};

export function getRoute(locale: Locale, key: RouteKey) {
  return routes[locale][key];
}

export function getPlannedEnglishRoute(key: RouteKey) {
  return routes.en[key];
}

export function getRouteKeyFromPath(pathname: string): RouteKey {
  const allRoutes = [...Object.entries(routes.de), ...Object.entries(routes.en)] as [
    RouteKey,
    string,
  ][];

  return (
    routeAliases[pathname] ??
    allRoutes.find(([, path]) => path === pathname)?.[0] ??
    "home"
  );
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === routes.en.home || pathname.startsWith("/en/")
    ? "en"
    : defaultLocale;
}
