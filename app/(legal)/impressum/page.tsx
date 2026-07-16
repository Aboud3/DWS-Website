import { PageHero } from "@/components/PageHero";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("imprint");

const linkClass =
  "break-words font-semibold text-ink underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const openingParagraph =
  "Anbieter und Verantwortlicher für diese Internet-Domain im Sinne des § 6 des Gesetzes über die Nutzung von Telediensten (TDG) des Gesetzes zur Regelung der Rahmenbedingungen für Informations- und Kommunikationsdienste (IuKDG), und bezüglich redaktioneller Inhalte, des Presserechts, sowie des § 6 II des Staatsvertrages über Mediendienste (MDStV), ist:";

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description={openingParagraph}
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="space-y-10 text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]">
          <address className="border border-zinc-200 bg-white p-7 not-italic shadow-line">
            <p>DWS Druckwerbe-Service + Logistik GmbH</p>
            <p>(abgekürzt DWS)</p>
            <p>Hengsener Str. 8a</p>
            <p>44309 Dortmund</p>
            <p>Deutschland</p>
            <p>Telefon 0231 • 925055 • 0</p>
            <p>
              <a href="mailto:post@dws-logistik.de" className={linkClass}>
                post@dws-logistik.de
              </a>
            </p>
            <p>Geschäftsführung: Manuel Lienau</p>
            <p>
              Eingetragen im Handelsregister des Amtgerichts Dortmund Nr.: HRB
              37865
            </p>
            <p>St.-Nr.: 316/5719/2290</p>
          </address>

          <p>
            Einige der Fotos, die innerhalb der Webpräsenz der DWS verwendet
            werden, wurden von photocase.com zur Verfügung gestellt. Es ist
            nicht gestattet, Bilder, Texte und Logos zu kopieren.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Inhalt des Onlineangebotes:
            </h2>
            <p>
              Der DWS übernimmt keinerlei Gewähr für die Aktualität,
              Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
              Informationen. Haftungsansprüche gegen den DWS, welche sich auf
              Schäden materieller oder ideeller Art beziehen, die durch die
              Nutzung oder Nichtnutzung der dargebotenen Informationen bzw.
              durch die Nutzung fehlerhafter und unvollständiger Informationen
              verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens
              des DWS kein nachweislich vorsätzliches oder grob fahrlässiges
              Verschulden vorliegt. Alle Angebote sind freibleibend und
              unverbindlich.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Verweise und Links:
            </h2>
            <p>
              Bei direkten oder indirekten Verweisen auf fremde Internetseiten
              (“Links”), die außerhalb des Verantwortungsbereiches des DWS
              liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall
              in Kraft treten, in dem der DWS von den Inhalten Kenntnis hat und
              es ihr technisch möglich und zumutbar wäre, die Nutzung im Falle
              rechtswidriger Inhalte zu verhindern. Der DWS erklärt daher
              ausdrücklich, dass zum Zeitpunkt der Linksetzung die entsprechenden
              verlinkten Seiten frei von illegalen Inhalten waren. Der DWS hat
              keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und
              auf die Inhalte der gelinkten / verknüpften Seiten. Deshalb
              distanziert sich der DWS hiermit ausdrücklich von allen Inhalten
              aller gelinkten / verknüpften Seiten, die nach der Linksetzung
              verändert wurden. Diese Feststellung gilt für alle innerhalb des
              eigenen Internetangebotes gesetzten Links und Verweise sowie für
              Fremdeinträge in evtl. vom DWS eingerichteten Gästebüchern,
              Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder
              unvollständige Inhalte und insbesondere für Schäden, die aus der
              Nutzung oder Nichtnutzung solcherart dargebotener Informationen
              entstehen, haftet allein der Anbieter der Seite, auf welche
              verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
              Seite gelangt ist.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Google Analytics:
            </h2>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
              Textdateien, die auf Ihrem Computer gespeichert werden und die eine
              Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
              den Cookie erzeugten Informationen über Ihre Benutzung dieser
              Website (einschließlich Ihrer IP-Adresse, die jedoch vor dem
              Speichern mit der Methode _anonymizeIp() anonymisiert wird, so
              dass sie nicht mehr einem Anschluss zugeordnet werden kann) wird an
              einen Server von Google in den USA übertragen und dort gespeichert.
              Google wird diese Informationen benutzen, um Ihre Nutzung der
              Website auszuwerten, um Reports über die Websiteaktivitäten für die
              Websitebetreiber zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              zu erbringen. Auch wird Google diese Informationen gegebenenfalls
              an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder
              soweit Dritte diese Daten im Auftrag von Google verarbeiten.
              Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von
              Google in Verbindung bringen. Sie können die Installation der
              Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
              verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
              Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
              vollumfänglich nutzen können. Durch die Nutzung dieser Website
              erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten
              durch Google in der zuvor beschriebenen Art und Weise und zu dem
              zuvor benannten Zweck einverstanden.
            </p>
            <p>
              Sie können der Erhebung der Daten durch Google-Analytics mit
              Wirkung für die Zukunft widersprechen, indem sie ein
              Deaktivierungs-Add-on (
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              ) für Ihren Browser installieren.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Verbraucherinformation zur Online-Streitbeilegung gemäß Art 14
              Abs. 1 ODR-Verordnung:
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                http://ec.europa.eu/consumers/odr/
              </a>{" "}
              finden.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG):
            </h2>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle weder bereit noch dazu
              verpflichtet.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
