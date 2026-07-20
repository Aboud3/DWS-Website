import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import {
  LettershopServicesAccordion,
  type LettershopService,
} from "@/components/LettershopServicesAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("lettershop");

const steps = [
  "Material übernehmen und prüfen",
  "Manuell oder maschinell konfektionieren",
  "Versandfertig vorbereiten",
];

const benefits = [
  "Flexible Verarbeitung je nach Projektumfang",
  "Verbindung von Konfektionierung und Versand",
  "Planbare Abläufe für wiederkehrende Aussendungen",
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Mailingunterlagen",
    alt: "Gestapelte Druck- und Mailingunterlagen in der DWS-Produktion",
    src: "/images/gallery/dws-company/lettershop-output-stack.jpg",
  },
  {
    caption: "Mailing",
    alt: "Mailingbestandteile für eine Aussendung",
    src: "/images/gallery/urbanekuenste-mailing.jpg",
  },
  {
    caption: "Lasercut-Karte",
    alt: "Verarbeitete Karte als Bestandteil eines Mailingprojekts",
    src: "/images/gallery/weihnachtskarte-lasercut.jpg",
  },
  {
    caption: "Maschinelle Verarbeitung",
    alt: "Maschinelle Verarbeitung bei DWS",
    src: "/images/gallery/einblicke-lettershop/automated-letter-insert.jpeg",
  },
  {
    caption: "Manuelle Sortierung",
    alt: "Manuelle Sortierung bei DWS",
    src: "/images/gallery/einblicke-lettershop/hand-sorting-mailing-bundles.jpeg",
  },
  {
    caption: "Versandvorbereitung",
    alt: "Versandvorbereitung bei DWS",
    src: "/images/gallery/einblicke-lettershop/foil-wrap-print-line.jpeg",
  },
];

const lettershopServices: LettershopService[] = [
  {
    title: "Adressmanagement",
    summary:
      "Qualifizierte, aktuelle Adressdaten als Basis für erfolgreiches Direktmarketing.",
    chips: ["Adressdatenbanken", "Selektion", "Dublettenprüfung", "DSGVO-konform"],
    body: [
      {
        type: "list",
        intro:
          "Wir unterstützen Sie rund um Ihre Adressen und bieten Ihnen folgende Leistungen an:",
        items: [
          "Konzeption und Erstellung von Adressdatenbanken (inkl. Erfassung)",
          "Beschaffung und Selektion zielgruppenorientierter Adressen bei namhaften Adressverlagen",
          "Konvertierung und Zusammenführung von Datenbanken mit unterschiedlichen Strukturen",
          "Auslesung der Vornamen zur persönlichen Anredegewinnung sowie Dublettenprüfung und Dublettenabgleich nach Ihren Anforderungen mittels Softwarelösung",
          "Spezialprogrammierung für individuelle Lösungen (z. B. Rechnungs- und Mahnungsversand)",
          "Portooptimierte Datenaufbereitung mit höchstmöglicher Rabattierung mittels DV-Freimachung (zertifizierter Partner der Deutschen Post AG)",
          "Premium-Adress-Verfahren",
          "PDF-Generierung Ihrer Mailings für Ihr Archivsystem",
        ],
      },
      {
        type: "paragraph",
        text: "Die Sicherheit Ihrer Daten ist uns wichtig. Ihre Adressdaten werden gemäß der aktuellen DSGVO bearbeitet. Dies bestätigen wir Ihnen bei Auftragserteilung schriftlich mit einem Datenschutzvertrag gemäß DSGVO.",
      },
    ],
  },
  {
    title: "Personalisierung & Adressierung",
    summary:
      "Individuelle Personalisierung und Direktadressierung Ihrer Werbemittel.",
    chips: ["Personalisierung", "Laser/Inkjet", "Etiketten", "Data-Matrix"],
    body: [
      {
        type: "paragraph",
        text: "Personalisierte und individualisierte Mailings sind erfolgreicher als anonyme Massensendungen, denn der persönliche Brief übernimmt eine anspruchsvolle Aufgabe – er soll den persönlichen Kontakt „ersetzen\".",
      },
      {
        type: "paragraph",
        text: "Nutzen Sie unser Know-how, personalisieren Sie Ihr Mailing und reichern Sie Inhalte kundenindividuell an. So lassen sich – in Abhängigkeit von der Kundendatenbank – alle denkbaren Briefvarianten erzeugen. Gern bieten wir Ihnen die farbige Personalisierung Ihrer Werbemittel an, in denen Sie sogar mehrfach Individualisierungen und Bilder personalisieren können. Ihrer Kreativität sind keine Grenzen gesetzt.",
      },
      {
        type: "paragraph",
        text: "Selbst Personalisierungen von mehreren Blättern gewährleisten wir durch Hinzufügen eines Bar- oder Data-Matrix-Codes, um einen sicheren Ablauf Ihrer Mailingaktion zu gewährleisten.",
      },
      {
        type: "paragraph",
        text: "Natürlich adressieren wir auch fertig produzierte Werbemittel, auf denen nachträglich Adressen eingedruckt werden, wie z. B. Postkarten, Maxi-Cards, Selfmailer und Versandhüllen. Diese Direktadressierung realisieren wir per Laser- oder Inkjet-Verfahren, je nachdem welches Verfahren Vorteile für Ihre Aussendung hat. Darüber hinaus bieten wir die Adressierung auf Etiketten mit automatischem Aufspenden an.",
      },
    ],
  },
  {
    title: "Verarbeitung & Konfektionierung",
    summary: "Maschinelle und manuelle Verarbeitung Ihres Mailings.",
    chips: ["Kuvertierung", "Konfektionierung", "Folieneinschweißung"],
    body: [
      {
        type: "section",
        title: "Kuvertierung",
        paragraphs: [
          "Die Art und Qualität der Umhüllung Ihres Mailings sind wichtige Faktoren für den ersten Eindruck – und für den ersten Eindruck gibt es keine zweite Chance. Unsere Maschinenausstattung ist für alle Größenordnungen (vom Format DIN A6 bis DIN B4) ausgelegt und sorgt mit intelligenten Kuvertierlösungen für eine kurzfristige Umsetzung und termingerechte Postauflieferung. Eine Kuvertierung mit optischer Vergleichslesung (Data-Matrix/Barcode/OMR) zum Abgleich mehrerer personalisierter Bestandteile sowie eine selektive Werbemittel-Zusteuerung ist gegeben.",
        ],
      },
      {
        type: "section",
        title: "Konfektionierung",
        paragraphs: [
          "Da auch die beste Technik irgendwann an ihre Grenzen stößt, bieten wir neben der maschinellen Verarbeitung auch die manuelle Konfektionierung an: Aufspenden von Give-Aways, Warenmustern, Konfektionierung von Paketen mit individuellem Inhalt, Ordnerkonfektionierung und weitere Lösungen je nach Kundenwunsch.",
        ],
      },
      {
        type: "section",
        title: "Folieneinschweißung",
        paragraphs: [
          "Die Umhüllung mit einer transparenten Folie eignet sich besonders für Produkte wie Broschüren, Prospekte oder Kataloge. Die strapazierfähige Folie schützt den Inhalt vor mechanischen Einflüssen, Feuchtigkeit und Schmutz und bietet zugleich einen freien Blick auf das Produkt. Bei Katalogen mit hohem Eigengewicht schrumpfen wir die Folie durch Hitze, sodass die Sendung stabilisiert wird.",
        ],
      },
      {
        type: "tags",
        items: [
          "falzen",
          "zusammentragen",
          "nuten/rillen",
          "binden",
          "klebefalzen",
          "rückendrahtheften",
          "ringösenheften",
          "perforieren",
          "stanzen",
          "bohren",
          "etikettieren",
          "nummerieren",
          "leimen",
          "banderolieren",
          "manuelles Konfektionieren",
        ],
      },
    ],
  },
  {
    title: "Veredelung",
    summary: "Schutz und visuelle Aufwertung Ihrer Drucksachen.",
    chips: ["Lacke", "Drip-Off", "Duftlack"],
    body: [
      {
        type: "paragraph",
        text: "Bedrucktes Papier ist eines der ältesten Kommunikationsmittel. Doch erst die Auswahl des Bedruckstoffes sowie die Möglichkeiten der Veredelung können daraus ein Erlebnis für die Sinne machen. So veredeln wir Drucksachen mit partiellen oder vollflächigen Dispersions-, Gold-, Silber- und irisierenden Lacken mit Perlmutteffekt. Weitere visuelle Effekte sind durch unsere integrierte Drip-Off-Technologie möglich. Sinnliche Reize lassen sich durch Duftlacke erzeugen, die in vielen Variationen erhältlich sind. In der Kombination aus modernster Technik und dem handwerklichen Geschick unserer Mitarbeiter erfüllen wir die Voraussetzungen für die präzise Verarbeitung Ihrer Druckprodukte.",
      },
    ],
  },
  {
    title: "Versand & Portooptimierung",
    summary:
      "Portooptimierter Versand als zertifizierter Partner der Deutschen Post AG.",
    chips: ["DV-Freimachung", "Vorsortierung", "Rabattierung"],
    body: [
      {
        type: "paragraph",
        text: "Wir sorgen dafür, dass Ihre Werbebotschaften sicher und termingerecht bei Ihren Kunden ankommen. Dabei verlieren wir nie die Kosten aus den Augen und erzielen für Sie die wirtschaftlichste Lösung. Ob Dialogpost oder DHL Infopost schwer (> 1 kg) – wir kennen alle Möglichkeiten zur Kostenoptimierung. So garantiert z. B. eine komplexe Vorsortierung Ihrer Mailings nicht nur eine spürbare Rabattierung der Portokosten, sondern auch eine Verkürzung der Zustelllaufzeit der DPAG von bis zu einem Tag.",
      },
      {
        type: "list",
        intro: "Unser Tagesgeschäft für Sie:",
        items: [
          "Prüfung und Sicherstellung der strengen Vorgaben der Deutschen Post AG",
          "Portooptimierte Adressaufbereitung im Ein- oder Mehrstrom-Verfahren",
          "DV-Freimachung (zusätzliche Rabattierung in Höhe von 1 % des Nettoentgeltes)",
          "Fertigung von Bunden, Behältern und Paletten",
          "Einlagerung der Mailings bis zum Versandtermin (auch große Volumen)",
        ],
      },
      {
        type: "paragraph",
        text: "Aber es muss nicht immer die Deutsche Post AG sein. Selbst als zertifizierter Partner und Performance Partner der Deutschen Post AG nutzen wir für Sie auch alternative Briefdienstleister – national wie international.",
      },
      {
        type: "section",
        title: "DV-Freimachung",
        paragraphs: [
          "Anstelle der Frankierwelle oder des verkürzten Frankiervermerkes können Sie die DV-Freimachung nutzen. Hierdurch erzielt man eine Portoeinsparung von 1 %, denn diese Frankierart hat für die Post den geringsten Aufwand. Als zertifizierter Partner der Deutschen Post AG bieten wir dies im Digitaldruck oder per Inkjet günstig an. Teilnehmen kann nur, wer eine gesonderte DV-Freimachungs-Vereinbarung mit der Deutschen Post AG abgeschlossen hat.",
        ],
      },
    ],
  },
  {
    title: "Versandarten",
    summary: "Das passende Versandprodukt für jede Aussendung.",
    body: [
      {
        type: "cardGrid",
        cards: [
          {
            title: "Dialogpost / Dialogpost Easy",
            description:
              "Adressierte Werbesendungen und Kataloge zu besonders günstigen Konditionen. Kostenlose Proben, Produktmuster, Werbeartikel und Fremdbeilagen können beigefügt werden.",
          },
          {
            title: "Pressepost",
            description:
              "Komplette Abwicklung Ihrer Pressepost: vom Druck der Zeitung/Zeitschrift bis zur Zuführung von Beilagen oder Flyern. Sie bestimmen den Zustelltermin.",
          },
          {
            title: "Postaktuell „Postwurf Spezial\"",
            description:
              "Unadressierte Werbesendungen an ausgewählte Zielgruppen – vom Ortsteil bis ins ganze Bundesgebiet, mit zielgenauen Zustellplänen.",
          },
          {
            title: "DHL Infopost",
            description:
              "Normale Dialogpost ab 1 kg (national). Auch hier kennen wir alle Möglichkeiten zur Kostenoptimierung.",
          },
          {
            title: "Paketversand",
            description:
              "Nationale und internationale Paketsendungen in kleinen und großen Mengen, inkl. personalisierter Anschreiben, Verpackung und täglicher Abholung.",
          },
          {
            title: "Speditionsversand",
            description:
              "Versand im In- und Ausland, auf Wunsch mit Overnight-Zustellung; eigener Fahrdienst für besonders eilige Sendungen.",
          },
        ],
      },
    ],
  },
];

export default function LettershopPage() {
  return (
    <>
      <PageHero
        eyebrow="Lettershop"
        title="Verarbeitung und Versandvorbereitung."
        description="DWS übernimmt die praktische Umsetzung von Mailingprozessen: konfektionieren, verarbeiten, sortieren, bereitstellen und für den Versand vorbereiten."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Einordnung"
            title="Lettershop für planbare Aussendungen."
            description="Je nach Material, Umfang und Komplexität wird der Prozess passend eingerichtet und mit Produktion oder Lagerlogistik verbunden."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS übernimmt die Verarbeitung von Mailingbestandteilen und bereitet
              Sendungen entsprechend Material, Menge und Versandziel vor.
            </p>
            <p>
              Manuelle und maschinelle Schritte werden passend zum Projekt
              kombiniert, wenn Formate, Beilagen oder Abläufe dies erfordern.
            </p>
          </div>
        </div>
        <div className="self-center">
          <Image
            src="/images/gallery/dws-company/lettershop-machine-overview.jpg"
            alt="Automatisierte Lettershop-Anlage bei DWS"
            width={5529}
            height={3511}
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600">
              Leistungen
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-ink md:text-5xl">
              Von der Adresse bis zum Versand
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Es stehen Ihnen verschiedene Möglichkeiten für die von Ihnen
              gewünschten Marketingstrategien zur Verfügung, die wir Ihnen als
              Performance Partner der Deutschen Post AG gerne näher vorstellen
              möchten.
            </p>
          </div>
          <div className="mt-10">
            <LettershopServicesAccordion items={lettershopServices} />
          </div>
        </div>
      </section>
      <ServicePageSections
        steps={steps}
        benefits={benefits}
        galleryItems={galleryItems}
        relatedLinks={[
          {
            label: "Druck",
            href: getRoute("de", "print"),
            description:
              "Printproduktion für geschäftliche Anwendungen und Mailingprojekte.",
          },
          {
            label: "Lagerlogistik",
            href: getRoute("de", "warehouseLogistics"),
            description: "Einlagerung, Abrufkoordination und Versandsteuerung.",
          },
        ]}
      />
      <CTASection title="Sie benötigen Unterstützung im Lettershop?" />
    </>
  );
}
