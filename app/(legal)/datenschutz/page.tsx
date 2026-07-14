import { PageHero } from "@/components/PageHero";
import { companyContact } from "@/lib/content";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("privacy");

const sections = [
  {
    title: "Verantwortliche Stelle",
    text: `${companyContact.company}, ${companyContact.street}, ${companyContact.postalCode} ${companyContact.city}. Kontakt: ${companyContact.email}, Telefon: ${companyContact.phone}.`,
  },
  {
    title: "Status dieser Datenschutzhinweise",
    text: "Diese Seite ist ein Platzhalter für Datenschutzhinweise. Vor einer produktiven Veröffentlichung ist eine finale rechtliche Prüfung erforderlich.",
  },
  {
    title: "Kontaktformular",
    text: "Das Kontaktformular ist derzeit als Benutzeroberfläche vorbereitet. Backend, Verarbeitung, Speicherdauer, Empfänger und Datenschutzinformationen müssen vor dem produktiven Einsatz geprüft und ergänzt werden.",
  },
  {
    title: "Hosting und technische Dienstleister",
    text: "TODO: Hostinganbieter, Serverstandort, Auftragsverarbeitung und eingesetzte Dienste ergänzen.",
  },
  {
    title: "Technische Zugriffsdaten",
    text: "Beim Betrieb einer Website können technische Zugriffsdaten anfallen. Welche Daten konkret verarbeitet werden, hängt von Hosting, Serverkonfiguration und eingesetzten Diensten ab und muss final geprüft werden.",
  },
  {
    title: "Rechte betroffener Personen",
    text: "Informationen zu Betroffenenrechten sind nach finaler rechtlicher Prüfung zu ergänzen.",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        description="Platzhalter für Datenschutzhinweise. Diese Seite muss vor produktiver Nutzung rechtlich geprüft und ergänzt werden."
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="mb-8 border border-zinc-200 bg-zinc-50 p-7">
          <h2 className="text-2xl font-semibold text-ink">
            Finale rechtliche Prüfung erforderlich
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Diese Datenschutzhinweise sind bewusst nicht als vollständige
            DSGVO-Erklärung formuliert. Hosting, Formularverarbeitung und
            eingesetzte Dienste müssen vor Veröffentlichung geprüft werden.
          </p>
        </div>
        <div className="grid gap-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border border-zinc-200 bg-white p-7 shadow-line"
            >
              <h2 className="text-2xl font-semibold text-ink">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
