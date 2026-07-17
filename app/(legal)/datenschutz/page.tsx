import { PageHero } from "@/components/PageHero";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("privacy");

const linkClass =
  "break-words font-semibold text-ink underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const sectionClass = "scroll-mt-24 space-y-5";
const subsectionClass = "space-y-3";
const paragraphClass = "text-[15px] leading-7 text-zinc-700";
const h2Class = "text-xl font-semibold text-ink md:text-2xl";
const h3Class = "text-lg font-semibold text-ink";
const h4Class = "text-base font-semibold text-ink";
const decimalListClass =
  "list-decimal space-y-2 pl-6 text-[15px] leading-7 text-zinc-700";
const olClass = "space-y-2 pl-0 text-[15px] leading-7 text-zinc-700";

const tocItems = [
  {
    href: "#verantwortlicher",
    label: "I. Name und Anschrift des Verantwortlichen",
  },
  {
    href: "#datenschutzbeauftragter",
    label: "II. Name und Anschrift des Datenschutzbeauftragten",
  },
  {
    href: "#allgemeines",
    label: "III. Allgemeines zur Datenverarbeitung",
  },
  {
    href: "#logfiles",
    label: "IV. Bereitstellung der Website und Erstellung von Logfiles",
  },
  { href: "#cookies", label: "V. Verwendung von Cookies" },
  { href: "#newsletter", label: "VI. Newsletter" },
  { href: "#registrierung", label: "VII. Registrierung" },
  {
    href: "#kontaktformular",
    label: "VIII. Kontaktformular und E-Mail-Kontakt",
  },
  {
    href: "#google-analytics",
    label: "IX. Webanalyse durch Google Analytics",
  },
  { href: "#rechte", label: "X. Rechte der betroffenen Person" },
];

function ParenList({ items }: { items: string[] }) {
  return (
    <ol className={olClass}>
      {items.map((item, index) => (
        <li key={item}>
          ({index + 1}) {item}
        </li>
      ))}
    </ol>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <div className="[&_h1]:!text-3xl [&_h1]:md:!text-5xl [&_p.mt-6]:!text-base [&_p.mt-6]:md:!text-lg">
        <PageHero
          eyebrow="Rechtliches"
          title="Datenschutz"
          description="Datenschutzerklärung"
        />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <nav
          aria-labelledby="datenschutz-inhalt"
          className="border border-zinc-200 bg-zinc-50 p-6"
        >
          <h2 id="datenschutz-inhalt" className="text-base font-semibold text-ink">
            Inhalt
          </h2>
          <ul className="mt-4 list-none space-y-2 pl-0 text-[15px] leading-7 text-zinc-700">
            {tocItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pl-5">
              <a
                href="#weiterentwicklung"
                className="underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                11. Weiterentwicklung dieser Datenschutzerklärung
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-12 space-y-12 text-[15px] leading-7 text-zinc-700 [overflow-wrap:anywhere]">
          <section id="verantwortlicher" className={sectionClass}>
            <h2 className={h2Class}>
              I. Name und Anschrift des Verantwortlichen
            </h2>
            <p className={paragraphClass}>
              Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und
              anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie
              sonstiger datenschutzrechtlicher Bestimmungen ist die:
            </p>
            <address className="border border-zinc-200 bg-white p-6 not-italic shadow-line">
              <p>DWS Druckwerbe-Service + Logistik GmbH</p>
              <p>Geschäftsführer: Manuel Lienau</p>
              <p>Hengsener Str. 8a</p>
              <p>44309 Dortmund</p>
              <p>Deutschland</p>
              <p>
                <a href="tel:+4902319250550" className={linkClass}>
                  Tel.: +49(0)231-925055-0
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:post@dws-logistik.de" className={linkClass}>
                  post@dws-logistik.de
                </a>
              </p>
            </address>
          </section>

          <section id="datenschutzbeauftragter" className={sectionClass}>
            <h2 className={h2Class}>
              II. Name und Anschrift des Datenschutzbeauftragten
            </h2>
            <p className={paragraphClass}>
              Der Datenschutzbeauftragte des Verantwortlichen ist gem. Art. 39
              DSGVO und §7 BDSG (neu):
            </p>
            <address className="border border-zinc-200 bg-white p-6 not-italic shadow-line">
              <p>Online-Agentur Rüsche</p>
              <p>c/o ARKM</p>
              <p>Bunsenstr. 5</p>
              <p>51647 Gummersbach</p>
              <p>Deutschland</p>
              <p>
                <a href="tel:+49022619989242" className={linkClass}>
                  Tel.: +49(0)2261-9989-242
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:datenschutz@sor.de" className={linkClass}>
                  datenschutz@sor.de
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.sor.de/datenschutzbeauftragter"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.sor.de/datenschutzbeauftragter
                </a>
              </p>
            </address>
          </section>

          <section id="allgemeines" className={sectionClass}>
            <h2 className={h2Class}>III. Allgemeines zur Datenverarbeitung</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Umfang der Verarbeitung personenbezogener Daten
              </h3>
              <p className={paragraphClass}>
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung personenbezogener Daten
                unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
                Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
                vorherige Einholung einer Einwilligung aus tatsächlichen Gründen
                nicht möglich ist und die Verarbeitung der Daten durch
                gesetzliche Vorschriften gestattet ist.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              </h3>
              <p className={paragraphClass}>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
                eine Einwilligung der betroffenen Person einholen, dient Art. 6
                Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
                Rechtsgrundlage.
              </p>
              <p className={paragraphClass}>
                Bei der Verarbeitung von personenbezogenen Daten, die zur
                Erfüllung eines Vertrages, dessen Vertragspartei die betroffene
                Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
                als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
                die zur Durchführung vorvertraglicher Maßnahmen erforderlich
                sind.
              </p>
              <p className={paragraphClass}>
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich ist, der unser
                Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als
                Rechtsgrundlage.
              </p>
              <p className={paragraphClass}>
                Für den Fall, dass lebenswichtige Interessen der betroffenen
                Person oder einer anderen natürlichen Person eine Verarbeitung
                personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
                lit. d DSGVO als Rechtsgrundlage.
              </p>
              <p className={paragraphClass}>
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                unseres Unternehmens oder eines Dritten erforderlich und
                überwiegen die Interessen, Grundrechte und Grundfreiheiten des
                Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Datenlöschung und Speicherdauer</h3>
              <p className={paragraphClass}>
                Die personenbezogenen Daten der betroffenen Person werden
                gelöscht oder gesperrt, sobald der Zweck der Speicherung
                entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn
                dies durch den europäischen oder nationalen Gesetzgeber in
                unionsrechtlichen Verordnungen, Gesetzen oder sonstigen
                Vorschriften, denen der Verantwortliche unterliegt, vorgesehen
                wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann,
                wenn eine durch die genannten Normen vorgeschriebene
                Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit
                zur weiteren Speicherung der Daten für einen Vertragsabschluss
                oder eine Vertragserfüllung besteht.
              </p>
            </section>
          </section>

          <section id="logfiles" className={sectionClass}>
            <h2 className={h2Class}>
              IV. Bereitstellung der Website und Erstellung von Logfiles
            </h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Bei jedem Aufruf unserer Internetseite erfasst unser System
                automatisiert Daten und Informationen vom Computersystem des
                aufrufenden Rechners.
              </p>
              <p className={paragraphClass}>
                Folgende Daten werden hierbei erhoben:
              </p>
              <ol className={decimalListClass}>
                <li>Informationen über den Browsertyp und die verwendete Version</li>
                <li>Das Betriebssystem des Nutzers</li>
                <li>Den Internet-Service-Provider des Nutzers</li>
                <li>Die IP-Adresse des Nutzers</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>
                  Websites, von denen das System des Nutzers auf unsere
                  Internetseite gelangt
                </li>
                <li>
                  Websites, die vom System des Nutzers über unsere Website
                  aufgerufen werden
                </li>
                <li>
                  Diverse Metadaten (Protokollversion, gesendet Datenmenge,
                  Server-Port, Dienstname)
                </li>
              </ol>
              <p className={paragraphClass}>
                Die Daten werden ebenfalls in den Logfiles unseres Systems
                gespeichert. Eine Speicherung dieser Daten zusammen mit anderen
                personenbezogenen Daten des Nutzers findet nicht statt.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit
                der Website sicherzustellen. Zudem dienen uns die Daten zur
                Optimierung der Website und zur Sicherstellung der Sicherheit
                unserer informationstechnischen Systeme. Eine Auswertung der
                Daten zu Marketingzwecken findet in diesem Zusammenhang nicht
                statt.
              </p>
              <p className={paragraphClass}>
                In diesen Zwecken liegt auch unser berechtigtes Interesse an der
                Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Dauer der Speicherung</h3>
              <p className={paragraphClass}>
                Im Falle der Speicherung der Daten in Logfiles ist dies nach
                spätestens 31 Tagen der Fall. In diesem Fall werden die
                IP-Adressen der Nutzer gelöscht.
              </p>
              <h3 className={h3Class}>
                Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Die Erfassung der Daten zur Bereitstellung der Website und die
                Speicherung der Daten in Logfiles ist für den Betrieb der
                Internetseite zwingend erforderlich. Es besteht folglich seitens
                des Nutzers keine Widerspruchsmöglichkeit.
              </p>
            </section>
          </section>

          <section id="cookies" className={sectionClass}>
            <h2 className={h2Class}>V. Verwendung von Cookies</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                a) Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich
                um Textdateien, die im Internetbrowser bzw. vom Internetbrowser
                auf dem Computersystem des Nutzers gespeichert werden. Ruft ein
                Nutzer eine Website auf, so kann ein Cookie auf dem
                Betriebssystem des Nutzers gespeichert werden. Dieses Cookie
                enthält eine charakteristische Zeichenfolge, die eine eindeutige
                Identifizierung des Browsers beim erneuten Aufrufen der Website
                ermöglicht.
              </p>
              <p className={paragraphClass}>
                Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu
                gestalten. Einige Elemente unserer Internetseite erfordern es,
                dass der aufrufende Browser auch nach einem Seitenwechsel
                identifiziert werden kann.
              </p>
              <p className={paragraphClass}>
                Wir verwenden auf unserer Website darüber hinaus Cookies, die
                eine Analyse des Surfverhaltens der Nutzer ermöglichen.
              </p>
              <p className={paragraphClass}>
                Auf diese Weise können folgende Daten übermittelt werden:
              </p>
              <ol className={decimalListClass}>
                <li>Eingegebene Suchbegriffe</li>
                <li>Häufigkeit von Seitenaufrufen</li>
                <li>Inanspruchnahme von Website-Funktionen</li>
                <li>Sitzungs-Cookie (wird nach der Browser-Session wieder gelöscht)</li>
              </ol>
              <p className={paragraphClass}>
                Beim Aufruf unserer Website werden die Nutzer durch einen
                Infobanner über die Verwendung von Cookies zu Analysezwecken
                informiert und auf diese Datenschutzerklärung verwiesen. Es
                erfolgt in diesem Zusammenhang auch ein Hinweis darauf, wie die
                Speicherung von Cookies in den Browsereinstellungen unterbunden
                werden kann.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                b) Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung technisch notweniger Cookies ist Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p className={paragraphClass}>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung von Cookies zu Analysezwecken ist bei Vorliegen
                einer diesbezüglichen Einwilligung des Nutzers Art. 6 Abs. 1
                lit. a DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>c) Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                Nutzung von Websites für die Nutzer zu vereinfachen. Einige
                Funktionen unserer Internetseite können ohne den Einsatz von
                Cookies nicht angeboten werden. Für diese ist es erforderlich,
                dass der Browser auch nach einem Seitenwechsel wiedererkannt
                wird.
              </p>
              <p className={paragraphClass}>
                Für folgende Anwendungen benötigen wir Cookies:
              </p>
              <ol className={decimalListClass}>
                <li>Übernahme von Spracheinstellungen</li>
                <li>Merken des Login-Status</li>
              </ol>
              <p className={paragraphClass}>
                Die durch technisch notwendige Cookies erhobenen Nutzerdaten
                werden nicht zur Erstellung von Nutzerprofilen verwendet.
              </p>
              <p className={paragraphClass}>
                Die Verwendung der Analyse-Cookies erfolgt zu dem Zweck, die
                Qualität unserer Website und ihre Inhalte zu verbessern. Durch
                die Analyse-Cookies erfahren wir, wie die Website genutzt wird
                und können so unser Angebot stetig optimieren.
              </p>
              <p className={paragraphClass}>
                In diesen Zwecken liegt auch unser berechtigtes Interesse in der
                Verarbeitung der personenbezogenen Daten nach Art. 6 Abs. 1 lit.
                f DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                d) Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Cookies werden auf dem Rechner des Nutzers gespeichert und von
                diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer
                auch die volle Kontrolle über die Verwendung von Cookies. Durch
                eine Änderung der Einstellungen in Ihrem Internetbrowser können
                Sie die Übertragung von Cookies deaktivieren oder einschränken.
                Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                Dies kann auch automatisiert erfolgen. Werden Cookies für unsere
                Website deaktiviert, können möglicherweise nicht mehr alle
                Funktionen der Website vollumfänglich genutzt werden.
              </p>
            </section>
          </section>

          <section id="newsletter" className={sectionClass}>
            <h2 className={h2Class}>VI. Newsletter</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Auf unserer Internetseite besteht die Möglichkeit einen
                kostenfreien Newsletter zu abonnieren. Dabei werden bei der
                Anmeldung zum Newsletter die Daten aus der Eingabemaske an uns
                übermittelt.
              </p>
              <p className={paragraphClass}>
                Zudem werden folgende Daten bei der Anmeldung erhoben:
              </p>
              <ol className={decimalListClass}>
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit der Registrierung</li>
              </ol>
              <p className={paragraphClass}>
                Für die Verarbeitung der Daten wird im Rahmen des
                Anmeldevorgangs Ihre Einwilligung eingeholt und auf diese
                Datenschutzerklärung verwiesen.
              </p>
              <p className={paragraphClass}>
                Es erfolgt im Zusammenhang mit der Datenverarbeitung für den
                Versand von Newslettern keine Weitergabe der Daten an Dritte.
                Die Daten werden ausschließlich für den Versand des Newsletters
                verwendet.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Rechtsgrundlage für die Verarbeitung der Daten nach Anmeldung
                zum Newsletters durch den Nutzer ist bei Vorliegen einer
                Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Die Erhebung der E-Mail-Adresse des Nutzers dient dazu, den
                Newsletter zuzustellen.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Dauer der Speicherung</h3>
              <p className={paragraphClass}>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Die
                E-Mail-Adresse des Nutzers wird demnach solange gespeichert, wie
                das Abonnement des Newsletters aktiv ist.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Das Abonnement des Newsletters kann durch den betroffenen Nutzer
                jederzeit gekündigt werden. Zu diesem Zweck findet sich in jedem
                Newsletter ein entsprechender Abmelde-Link.
              </p>
              <p className={paragraphClass}>
                Hierdurch wird ebenfalls ein Widerruf der Einwilligung der
                Speicherung der während des Anmeldevorgangs erhobenen
                personenbezogenen Daten ermöglicht.
              </p>
            </section>
          </section>

          <section id="registrierung" className={sectionClass}>
            <h2 className={h2Class}>VII. Registrierung</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Auf unserer Internetseite bieten wir Nutzern die Möglichkeit,
                sich unter Angabe personenbezogener Daten zu registrieren. Die
                Daten werden dabei in eine Eingabemaske eingegeben und an uns
                übermittelt und gespeichert. Eine Weitergabe der Daten an Dritte
                findet nicht statt. Folgende Daten werden im Rahmen des
                Registrierungsprozesses erhoben:
              </p>
              <ol className={decimalListClass}>
                <li>Benutzername (wenn gewünscht ein Psydonym)</li>
                <li>Postanschrift</li>
                <li>Telefon-Nummer</li>
                <li>Die Mailadresse</li>
                <li>Ein Passwort, dass verschlüsselt gespeichert wird</li>
              </ol>
              <p className={paragraphClass}>
                Im Zeitpunkt der Registrierung werden zudem folgende Daten
                gespeichert:
              </p>
              <p className={paragraphClass}>Datum und Uhrzeit der Registrierung</p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen
                einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className={paragraphClass}>
                Dient die Registrierung der Erfüllung eines Vertrages, dessen
                Vertragspartei der Nutzer ist oder der Durchführung
                vorvertraglicher Maßnahmen, so ist zusätzliche Rechtsgrundlage
                für die Verarbeitung der Daten Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Eine Registrierung des Nutzers ist für das Bereithalten
                bestimmter Inhalte und Leistungen auf unserer Website
                erforderlich.
              </p>
              <p className={paragraphClass}>
                Eine Registrierung des Nutzers ist ggf. zur Erfüllung eines
                Vertrages mit dem Nutzer oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Dauer der Speicherung</h3>
              <p className={paragraphClass}>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Als Nutzer haben sie jederzeit die Möglichkeit, die
                Registrierung aufzulösen. Die über Sie gespeicherten Daten können
                Sie jederzeit abändern lassen. Nutzen Sie hierfür den jeweiligen
                Abmelde-Link, oder schreiben Sie ggf. die Verantwortliche (gem. §
                I) per E-Mail formlos an.
              </p>
            </section>
          </section>

          <section id="kontaktformular" className={sectionClass}>
            <h2 className={h2Class}>
              VIII. Kontaktformular und E-Mail-Kontakt
            </h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Auf unseren Internetseiten sind ggf. Kontaktformulare vorhanden,
                welche für die elektronische Kontaktaufnahme genutzt werden
                können. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die
                in der Eingabemaske eingegeben Daten an uns übermittelt und
                gespeichert. Diese Daten sind i.d.R. (können aber auch leicht
                abweichen):
              </p>
              <ol className={decimalListClass}>
                <li>Ihr Name</li>
                <li>Ihre E-Mail</li>
                <li>Postanschrift</li>
                <li>Telefon-Nummer</li>
                <li>Betreff</li>
                <li>Ihre Nachricht (Textbotschaft an uns gerichtet)</li>
              </ol>
              <p className={paragraphClass}>
                Für die Verarbeitung der Daten wird im Rahmen des
                Absendevorgangs Ihre Einwilligung eingeholt und auf diese
                Datenschutzerklärung verwiesen.
              </p>
              <p className={paragraphClass}>
                Alternativ ist eine Kontaktaufnahme über die bereitgestellte
                E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail
                übermittelten personenbezogenen Daten des Nutzers gespeichert.
              </p>
              <p className={paragraphClass}>
                Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an
                Dritte. Die Daten werden ausschließlich für die Verarbeitung der
                Konversation verwendet.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className={paragraphClass}>
                Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen
                einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className={paragraphClass}>
                Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge
                einer Übersendung einer E-Mail übermittelt werden, ist Art. 6
                Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss
                eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
                Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske
                dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle
                einer Kontaktaufnahme per E-Mail liegt hieran auch das
                erforderliche berechtigte Interesse an der Verarbeitung der
                Daten.
              </p>
              <p className={paragraphClass}>
                Die sonstigen während des Absende Vorgangs verarbeiteten
                personenbezogenen Daten dienen dazu, einen Missbrauch des
                Kontaktformulars zu verhindern und die Sicherheit unserer
                informationstechnischen Systeme sicherzustellen.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Dauer der Speicherung</h3>
              <p className={paragraphClass}>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die
                personenbezogenen Daten aus der Eingabemaske des
                Kontaktformulars und diejenigen, die per E-Mail übersandt
                wurden, ist dies dann der Fall, wenn die jeweilige Konversation
                mit dem Nutzer beendet ist. Beendet ist die Konversation dann,
                wenn sich aus den Umständen entnehmen lässt, dass der betroffene
                Sachverhalt abschließend geklärt ist.
              </p>
              <p className={paragraphClass}>
                Die während des Absende Vorgangs zusätzlich erhobenen
                personenbezogenen Daten werden spätestens nach einer Frist von
                sieben Tagen gelöscht.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur
                Verarbeitung der personenbezogenen Daten zu widerrufen. Nimmt der
                Nutzer per E-Mail Kontakt mit uns auf, so kann er der
                Speicherung seiner personenbezogenen Daten jederzeit
                widersprechen. In einem solchen Fall kann die Konversation nicht
                fortgeführt werden.
              </p>
              <p className={paragraphClass}>
                Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme
                gespeichert wurden, werden in diesem Fall gelöscht.
              </p>
            </section>
          </section>

          <section id="google-analytics" className={sectionClass}>
            <h2 className={h2Class}>IX. Webanalyse durch Google Analytics</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Umfang der Verarbeitung personenbezogener Daten
              </h3>
              <p className={paragraphClass}>
                Wir nutzen auf unserer Website den Webanalysedienst „Google
                Analytics“ ein. Dieses ist ein Dienst der Google Inc.
                („Google“). Zur Analyse des Surfverhaltens unserer Nutzer.
                Google setzt ein Cookie auf dem Rechner der Nutzer (zu Cookies
                siehe bereits oben). Werden Einzelseiten unserer Website
                aufgerufen, so werden folgende Daten gespeichert:
              </p>
              <ol className={decimalListClass}>
                <li>Zwei Bytes der IP-Adresse des aufrufenden Systems des Nutzers</li>
                <li>Die aufgerufene Webseite</li>
                <li>
                  Die Website, von der der Nutzer auf die aufgerufene Webseite
                  gelangt ist (Referrer)
                </li>
                <li>
                  Die Unterseiten, die von der aufgerufenen Webseite aus
                  aufgerufen werden
                </li>
                <li>Die Verweildauer auf der Webseite</li>
                <li>Die Häufigkeit des Aufrufs der Webseite</li>
              </ol>
              <p className={paragraphClass}>
                Google wird diese Informationen in unserem Auftrag benutzen, um
                die Nutzung unseres Onlineangebotes durch die Nutzer
                auszuwerten, um Reports über die Aktivitäten innerhalb dieses
                Onlineangebotes zusammenzustellen und um weitere mit der Nutzung
                dieses Onlineangebotes und der Internetnutzung verbundene
                Dienstleistungen uns gegenüber zu erbringen. Dabei können aus
                den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer
                erstellt werden.
              </p>
              <p className={paragraphClass}>
                Wir setzen Google Analytics nur mit aktivierter
                IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer
                wird von Google innerhalb der Mitgliedstaaten der Europäischen
                Union oder in anderen Vertragsstaaten des Abkommens über den
                Europäischen Wirtschaftsraum gekürzt. Die von dem Browser des
                Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von
                Google zusammengeführt.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              </h3>
              <p className={paragraphClass}>
                Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten
                der Nutzer ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Zweck der Datenverarbeitung</h3>
              <p className={paragraphClass}>
                Die Verarbeitung der personenbezogenen Daten der Nutzer
                ermöglicht uns eine Analyse des Surfverhaltens unserer Nutzer.
                Wir sind in durch die Auswertung der gewonnenen Daten in der
                Lage, Informationen über die Nutzung der einzelnen Komponenten
                unserer Webseite zusammenzustellen. Dies hilft uns dabei unsere
                Webseite und deren Nutzerfreundlichkeit stetig zu verbessern. In
                diesen Zwecken liegt auch unser berechtigtes Interesse in der
                Verarbeitung der Daten nach Art. 6 Abs. 1 lit. f DSGVO. Durch
                die Anonymisierung der IP-Adresse wird dem Interesse der Nutzer
                an deren Schutz personenbezogener Daten hinreichend Rechnung
                getragen.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Dauer der Speicherung</h3>
              <p className={paragraphClass}>
                Die Daten werden gelöscht, sobald sie für unsere
                Aufzeichnungszwecke nicht mehr benötigt werden.
              </p>
              <p className={paragraphClass}>
                In unserem Fall ist dies nach 14 Monate der Fall.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className={paragraphClass}>
                Cookies werden auf dem Rechner des Nutzers gespeichert und von
                diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer
                auch die volle Kontrolle über die Verwendung von Cookies. Durch
                eine Änderung der Einstellungen in Ihrem Internetbrowser können
                Sie die Übertragung von Cookies deaktivieren oder einschränken.
                Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                Dies kann auch automatisiert erfolgen. Werden Cookies für unsere
                Website deaktiviert, können möglicherweise nicht mehr alle
                Funktionen der Website vollumfänglich genutzt werden.
              </p>
              <p className={paragraphClass}>
                Die Nutzer können die Speicherung der Cookies durch eine
                entsprechende Einstellung ihrer Browser-Software verhindern; die
                Nutzer können darüber hinaus die Erfassung der durch das Cookie
                erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen
                Daten an Google sowie die Verarbeitung dieser Daten durch Google
                verhindern, indem sie das unter dem folgenden Link verfügbare
                Browser-Plugin herunterladen und installieren:{" "}
                <a
                  href="http://tools.google.com/dlpage/gaoptout?hl=de"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://tools.google.com/dlpage/gaoptout?hl=de
                </a>
                .
              </p>
            </section>
          </section>

          <section id="rechte" className={sectionClass}>
            <h2 className={h2Class}>X. Rechte der betroffenen Person</h2>
            <p className={paragraphClass}>
              Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
              Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte
              gegenüber dem Verantwortlichen zu:
            </p>
            <section className={subsectionClass}>
              <h3 className={h3Class}>1. Auskunftsrecht</h3>
              <p className={paragraphClass}>
                Sie können von dem Verantwortlichen eine Bestätigung darüber
                verlangen, ob personenbezogene Daten, die Sie betreffen, von uns
                verarbeitet werden.
              </p>
              <p className={paragraphClass}>
                Liegt eine solche Verarbeitung vor, können Sie von dem
                Verantwortlichen über folgende Informationen Auskunft verlangen:
              </p>
              <ParenList
                items={[
                  "die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;",
                  "die Kategorien von personenbezogenen Daten, welche verarbeitet werden;",
                  "die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;",
                  "die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;",
                  "das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;",
                  "das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;",
                  "alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;",
                  "das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.",
                ]}
              />
              <p className={paragraphClass}>
                Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die
                Sie betreffenden personenbezogenen Daten in ein Drittland oder an
                eine internationale Organisation übermittelt werden. In diesem
                Zusammenhang können Sie verlangen, über die geeigneten Garantien
                gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung
                unterrichtet zu werden.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Recht auf Berichtigung</h3>
              <p className={paragraphClass}>
                Sie haben ein Recht auf Berichtigung und/oder Vervollständigung
                gegenüber dem Verantwortlichen, sofern die verarbeiteten
                personenbezogenen Daten, die Sie betreffen, unrichtig oder
                unvollständig sind. Der Verantwortliche hat die Berichtigung
                unverzüglich vorzunehmen.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                3. Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className={paragraphClass}>
                Unter den folgenden Voraussetzungen können Sie die Einschränkung
                der Verarbeitung der Sie betreffenden personenbezogenen Daten
                verlangen:
              </p>
              <ParenList
                items={[
                  "wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;",
                  "die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;",
                  "der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder",
                  "wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.",
                ]}
              />
              <p className={paragraphClass}>
                Wurde die Verarbeitung der Sie betreffenden personenbezogenen
                Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Union oder eines Mitgliedstaats verarbeitet werden.
              </p>
              <p className={paragraphClass}>
                Wurde die Einschränkung der Verarbeitung nach den o.g.
                Voraussetzungen eingeschränkt, werden Sie von dem
                Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben
                wird.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Recht auf Löschung</h3>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(a) Löschungspflicht</h4>
                <p className={paragraphClass}>
                  Sie können von dem Verantwortlichen verlangen, dass die Sie
                  betreffenden personenbezogenen Daten unverzüglich gelöscht
                  werden, und der Verantwortliche ist verpflichtet, diese Daten
                  unverzüglich zu löschen, sofern einer der folgenden Gründe
                  zutrifft:
                </p>
                <ParenList
                  items={[
                    "Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.",
                    "Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.",
                    "Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.",
                    "Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.",
                    "Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.",
                    "Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.",
                  ]}
                />
              </section>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(b) Information an Dritte</h4>
                <p className={paragraphClass}>
                  Hat der Verantwortliche die Sie betreffenden personenbezogenen
                  Daten öffentlich gemacht und ist er gem. Art. 17 Abs. 1 DSGVO
                  zu deren Löschung verpflichtet, so trifft er unter
                  Berücksichtigung der verfügbaren Technologie und der
                  Implementierungskosten angemessene Maßnahmen, auch technischer
                  Art, um für die Datenverarbeitung Verantwortliche, die die
                  personenbezogenen Daten verarbeiten, darüber zu informieren,
                  dass Sie als betroffene Person von ihnen die Löschung aller
                  Links zu diesen personenbezogenen Daten oder von Kopien oder
                  Replikationen dieser personenbezogenen Daten verlangt haben.
                </p>
              </section>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(c) Ausnahmen</h4>
                <p className={paragraphClass}>
                  Das Recht auf Löschung besteht nicht, soweit die Verarbeitung
                  erforderlich ist
                </p>
                <ParenList
                  items={[
                    "zur Ausübung des Rechts auf freie Meinungsäußerung und Information;",
                    "zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;",
                    "aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;",
                    "für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder",
                    "zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
                  ]}
                />
              </section>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>5. Recht auf Unterrichtung</h3>
              <p className={paragraphClass}>
                Haben Sie das Recht auf Berichtigung, Löschung oder
                Einschränkung der Verarbeitung gegenüber dem Verantwortlichen
                geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen
                die Sie betreffenden personenbezogenen Daten offengelegt wurden,
                diese Berichtigung oder Löschung der Daten oder Einschränkung
                der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als
                unmöglich oder ist mit einem unverhältnismäßigen Aufwand
                verbunden.
              </p>
              <p className={paragraphClass}>
                Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über
                diese Empfänger unterrichtet zu werden.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>6. Recht auf Datenübertragbarkeit</h3>
              <p className={paragraphClass}>
                Sie haben das Recht, die Sie betreffenden personenbezogenen
                Daten, die Sie dem Verantwortlichen bereitgestellt haben, in
                einem strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten. Außerdem haben Sie das Recht diese Daten einem anderen
                Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
                die personenbezogenen Daten bereitgestellt wurden, zu
                übermitteln, sofern
              </p>
              <ParenList
                items={[
                  "die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und",
                  "die Verarbeitung mithilfe automatisierter Verfahren erfolgt.",
                ]}
              />
              <p className={paragraphClass}>
                In Ausübung dieses Rechts haben Sie ferner das Recht, zu
                erwirken, dass die Sie betreffenden personenbezogenen Daten
                direkt von einem Verantwortlichen einem anderen Verantwortlichen
                übermittelt werden, soweit dies technisch machbar ist.
                Freiheiten und Rechte anderer Personen dürfen hierdurch nicht
                beeinträchtigt werden.
              </p>
              <p className={paragraphClass}>
                Das Recht auf Datenübertragbarkeit gilt nicht für eine
                Verarbeitung personenbezogener Daten, die für die Wahrnehmung
                einer Aufgabe erforderlich ist, die im öffentlichen Interesse
                liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem
                Verantwortlichen übertragen wurde.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>7. Widerspruchsrecht</h3>
              <p className={paragraphClass}>
                Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                betreffenden personenbezogenen Daten, die aufgrund von Art. 6
                Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
                gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              </p>
              <p className={paragraphClass}>
                Der Verantwortliche verarbeitet die Sie betreffenden
                personenbezogenen Daten nicht mehr, es sei denn, er kann
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen.
              </p>
              <p className={paragraphClass}>
                Werden die Sie betreffenden personenbezogenen Daten verarbeitet,
                um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
                dies gilt auch für das Profiling, soweit es mit solcher
                Direktwerbung in Verbindung steht.
              </p>
              <p className={paragraphClass}>
                Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung,
                so werden die Sie betreffenden personenbezogenen Daten nicht mehr
                für diese Zwecke verarbeitet.
              </p>
              <p className={paragraphClass}>
                Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von
                Diensten der Informationsgesellschaft – ungeachtet der Richtlinie
                2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter
                Verfahren auszuüben, bei denen technische Spezifikationen
                verwendet werden.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                8. Recht auf Widerruf der datenschutzrechtlichen
                Einwilligungserklärung
              </h3>
              <p className={paragraphClass}>
                Sie haben das Recht, Ihre datenschutzrechtliche
                Einwilligungserklärung jederzeit zu widerrufen. Durch den
                Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund
                der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht
                berührt.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                9. Automatisierte Entscheidung im Einzelfall einschließlich
                Profiling
              </h3>
              <p className={paragraphClass}>
                Sie haben das Recht, nicht einer ausschließlich auf einer
                automatisierten Verarbeitung – einschließlich Profiling –
                beruhenden Entscheidung unterworfen zu werden, die Ihnen
                gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher
                Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die
                Entscheidung
              </p>
              <ParenList
                items={[
                  "für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen erforderlich ist,",
                  "aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten oder",
                  "mit Ihrer ausdrücklichen Einwilligung erfolgt.",
                ]}
              />
              <p className={paragraphClass}>
                Allerdings dürfen diese Entscheidungen nicht auf besonderen
                Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO
                beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g DSGVO gilt und
                angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie
                Ihrer berechtigten Interessen getroffen wurden.
              </p>
              <p className={paragraphClass}>
                Hinsichtlich der in (1) und (3) genannten Fälle trifft der
                Verantwortliche angemessene Maßnahmen, um die Rechte und
                Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu
                mindestens das Recht auf Erwirkung des Eingreifens einer Person
                seitens des Verantwortlichen, auf Darlegung des eigenen
                Standpunkts und auf Anfechtung der Entscheidung gehört.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                10. Recht auf Beschwerde bei einer Aufsichtsbehörde
              </h3>
              <p className={paragraphClass}>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
                bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
                mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die DSGVO verstößt.
              </p>
              <p className={paragraphClass}>
                Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde,
                unterrichtet den Beschwerdeführer über den Stand und die
                Ergebnisse der Beschwerde einschließlich der Möglichkeit eines
                gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </p>
            </section>

            <section
              id="weiterentwicklung"
              className={`${subsectionClass} scroll-mt-24`}
            >
              <h3 className={h3Class}>
                11. Weiterentwicklung dieser Datenschutzerklärung
              </h3>
              <p className={paragraphClass}>
                Diese Datenschutzerklärung wird der Entwicklung des
                Datenschutzes und der Sicherheitstechnik unregelmäßig angepasst
                und weiterentwickelt. Wir behalten uns vor, diese
                Datenschutzerklärung ggf. anzupassen, damit sie stets den
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen
                unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B.
                bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
                dann die neue Datenschutzerklärung.
              </p>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
