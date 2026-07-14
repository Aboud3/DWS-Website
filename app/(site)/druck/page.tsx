import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import {
  PrintMethodAccordion,
  type PrintMethod,
} from "@/components/PrintMethodAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePageSections } from "@/components/ServicePageSections";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import type { GalleryItem } from "@/components/ImageGallery";

export const metadata = getPageMetadata("print");

const benefits = [
  "Passende Verfahren für unterschiedliche Auflagen",
  "Abstimmung mit Weiterverarbeitung und Versand",
  "Veredelung wie Heißfolie oder Duftlack zur Optimierung Ihrer Drucksachen",
];

const printMethods: PrintMethod[] = [
  {
    title: "Offsetdruck – Hochwertiger Standard",
    summary:
      "Eine unserer Kernkompetenzen – von der Visitenkarte bis zur Imagebroschüre wird jedes Produkt professionell durch unseren Workflow bis zur termingerechten Fertigstellung geleitet.",
    chips: ["Visitenkarten", "Imagebroschüren", "Postkarten", "Selfmailer"],
    paragraphs: [
      "Der Offsetdruck ist eine unserer Kernkompetenzen. Hier profitieren Sie von langjähriger Erfahrung, unserem umfangreichen Maschinenpark und vom Know-how unserer Mitarbeiter. Ob Ihre Visitenkarte oder Imagebroschüre, jedes Produkt wird gleichermaßen professionell durch unseren Workflow geleitet bis zur termingerechten Fertigstellung.",
      "Postkarten, Briefumschläge oder Selfmailer, wir beraten Sie und produzieren nach Ihren Vorstellungen und unter allen postalischen Vorgaben, damit Ihr Mailing termingerecht beim Kunden ankommt. Profitieren Sie davon, dass die Profis aus dem Lettershop bei der Planung Ihres Projektes von Anfang an involviert sind.",
    ],
  },
  {
    title: "Buchdruck – immer noch aktuell",
    summary:
      "Der Klassiker: Auf Original Heidelberger Tiegeln (OHT) und Zylindern (OHZ) werden Drucksachen gestanzt, gerillt, perforiert und veredelt.",
    chips: ["OHT", "OHZ", "Heißfolienprägung"],
    paragraphs: [
      "Obwohl der Buchdruck seit der Zeit von Gutenberg wenige Veränderungen erfahren hat, bleibt der Klassiker immer noch beliebt. Auf unseren Original Heidelberger Tiegeln (OHT) und dem Original Heidelberger Zylinder (OHZ) werden noch heute Aufträge gestanzt, gerillt, perforiert oder gar veredelt mit unserem Original Heidelberger Tiegel mit Heißfolienprägung. Ob silber, gold oder regenbogenfarbig, hier erfahren Ihre Drucksachen den letzten Schliff.",
    ],
  },
  {
    title: "Digital ist besser? Manchmal schon…",
    summary:
      "Kurze Produktionszeiten, geringe Kosten und Personalisierung in neuer Dimension – ideal für Kleinstauflagen, Test-Drucke und individualisierte Mailings.",
    chips: ["Print-on-Demand", "Kleinstauflagen", "Personalisierung"],
    paragraphs: [
      "Einige Vorteile liegen auf der Hand. Kurze Produktionszeiten, geringe Kosten, das Print-on-Demand-Prinzip … und natürlich die Möglichkeit einer Produktion von Kleinstauflagen und Test-Drucken erfreuen sich gerade bei unseren Kunden einer großen Beliebtheit.",
      "Präsentationen und Kundenmuster sind schnell und kostengünstig hergestellt. Die Qualität der Farbwiedergabe und die Auswahl an Papieren sind hervorragend und vielfältig.",
      "Das ist die eine Seite des Digitaldrucks.",
      "Auf der anderen Seite eröffnet sich – durch weiterentwickelte, vorgeschaltete Applikationen – eine Welt der Individualisierung für unsere Kunden.",
      "Personalisierungen in einer neuen Dimension, wenn man so will.",
      "Der Serienbrief, Rechnungs- und Mahnläufe sowie die individualisierte Code-Erstellung gehören zu unserem täglichen Geschäft.",
      "Aber was ist mit einem personalisierten Layoutwechsel? Die Eingabedatei entscheidet, welches Layout, welche Bilder und welche Texte ausgegeben werden sollen. Und wichtig … alles in einem Druckdurchgang!",
    ],
  },
];

const galleryItems: GalleryItem[] = [
  {
    caption: "Druck im Lauf",
    alt: "Druck im Lauf bei DWS",
    src: "/images/gallery/einblicke-druck/red-print-belt-run.jpeg",
  },
  {
    caption: "Zusammentragen",
    alt: "Zusammentragen bei DWS",
    src: "/images/gallery/einblicke-druck/sheet-collation-roller.jpeg",
  },
  {
    caption: "Druckauslage",
    alt: "Druckauslage bei DWS",
    src: "/images/gallery/einblicke-druck/newspaper-stack-output.jpeg",
  },
  {
    caption: "Druckmaschine",
    alt: "Druckmaschine bei DWS",
    src: "/images/gallery/einblicke-druck/druckmaschine-urbanekuenste.jpg",
  },
  {
    caption: "Plakat",
    alt: "Plakat bei DWS",
    src: "/images/gallery/einblicke-druck/urbanekuenste-poster.jpeg",
  },
  {
    caption: "Broschüre",
    alt: "Broschüre bei DWS",
    src: "/images/gallery/einblicke-druck/skoda-octavia-brochure.jpeg",
  },
];

export default function DruckPage() {
  return (
    <>
      <PageHero
        eyebrow="Druck"
        title="Printproduktion für planbare B2B-Prozesse."
        description="DWS produziert sämtliche Drucksachen, Mailingbestandteile und projektbezogene Printmaterialien – gerne auch im Zusammenspiel mit Lettershop und Logistik."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Einordnung"
            title="Druck als Teil eines abgestimmten Ablaufs."
            description="Das passende Druckverfahren richtet sich nach Art, Auflage, Material, Personalisierung und Weiterverarbeitung."
          />
          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              DWS produziert Drucksachen und stimmt die Produktion bei Bedarf
              direkt mit Lettershop, Lagerung und Versand ab.
            </p>
            <p>
              Dadurch werden Material, Termine und weitere Verarbeitungsschritte
              früh im Projekt berücksichtigt.
            </p>
            <p>Und natürlich alles unter umweltfreundlichen Aspekten.</p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden border border-zinc-300 bg-white">
          <Image
            src="/images/gallery/druckmaschine-urbanekuenste.jpg"
            alt="Druckmaschine im Produktionsumfeld bei DWS"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover grayscale saturate-[0.75] contrast-[0.95]"
          />
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl space-y-14 px-6 py-14 md:px-8">
          <div>
            <SectionHeading
              eyebrow="DRUCKVERFAHREN"
              title="Unsere Druckverfahren"
            />
            <div className="mt-8">
              <PrintMethodAccordion methods={printMethods} />
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-14">
            <SectionHeading title="Druck und Umwelt?" />
            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                Der Digitaldruck ist bei kleinen und mittleren Auflagen deutlich
                umweltfreundlicher als der Offsetdruck. Durch Print-on-Demand wird
                Überproduktion vermieden und der Ressourcenverbrauch sinkt. Zudem
                entfallen chemikalienintensive Druckplatten und schädliche
                Reinigungszyklen, während der Papierabfall auf ein Minimum reduziert
                wird.
              </p>
              <p>
                Wir setzen konsequent auf Nachhaltigkeit und bieten Öko-Papiere
                an.
              </p>
              <p className="font-semibold text-ink">
                Die ökologischen Hauptvorteile unserer Inkjet-Technologie
                umfassen:
              </p>
              <ul className="list-disc space-y-4 pl-6">
                <li>
                  <span className="font-semibold text-ink">
                    Hohe Energieeffizienz:
                  </span>{" "}
                  Durch die Kalt- bzw. Lufttrocknung entfällt das
                  energieintensive Aufheizen von Fixiereinheiten, was den
                  Energieverbrauch spürbar senkt.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Umweltfreundliche Tinte:
                  </span>{" "}
                  Die eingesetzten wasserbasierten Tinten sind
                  umweltverträglicher als lösungsmittelbasierte Varianten, da sie
                  beim Trocknen primär Wasserdampf freisetzen.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Langlebigkeit &amp; weniger Abfall:
                  </span>{" "}
                  Die Systeme sind auf Langlebigkeit ausgelegt. Verschleißarme
                  Druckköpfe und langlebige Komponenten reduzieren den
                  Ersatzteilbedarf und anfallenden Elektroschrott.
                </li>
                <li>
                  <span className="font-semibold text-ink">Zertifikate:</span>{" "}
                  Die Geräte erfüllen die strengen Kriterien des „Energy Star“
                  und sind mit dem Umweltzeichen „Blauer Engel“ zertifiziert.
                </li>
                <li>
                  <span className="font-semibold text-ink">Emissionsarm:</span>{" "}
                  Die vorgegebenen Richtwerte für Ozon-, Staub- und
                  Styrol-Emissionen werden teilweise erheblich unterschritten.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ServicePageSections
        benefits={benefits}
        galleryItems={galleryItems}
        showWorkflow={false}
        relatedLinks={[
          {
            label: "Lettershop",
            href: getRoute("de", "lettershop"),
            description: "Konfektionierung, Verarbeitung und Versandvorbereitung.",
          },
          {
            label: "Lagerlogistik",
            href: getRoute("de", "warehouseLogistics"),
            description: "Einlagerung, Abrufkoordination und Versandsteuerung.",
          },
        ]}
      />
      <CTASection title="Sie planen ein Druck- oder Mailingprojekt?" />
    </>
  );
}
