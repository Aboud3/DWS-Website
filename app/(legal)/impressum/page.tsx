import { PageHero } from "@/components/PageHero";
import { companyContact } from "@/lib/content";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("imprint");

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        description="Angaben gemäß den gesetzlichen Informationspflichten. Fehlende rechtliche Daten sind als Platzhalter markiert."
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="grid gap-5 text-base leading-7 text-zinc-700 md:grid-cols-2">
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">Anbieter</h2>
            <div className="mt-4 space-y-2">
              <p>{companyContact.company}</p>
              <p>{companyContact.street}</p>
              <p>
                {companyContact.postalCode} {companyContact.city}
              </p>
            </div>
          </section>
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">Kontakt</h2>
            <div className="mt-4 space-y-2">
              <p>Telefon: {companyContact.phone}</p>
              <p>E-Mail: {companyContact.email}</p>
            </div>
          </section>
          <section className="border border-zinc-200 bg-zinc-50 p-7">
            <h2 className="text-2xl font-semibold text-ink">
              Geschäftsführer
            </h2>
            <p className="mt-4">TODO: Geschäftsführer ergänzen.</p>
          </section>
          <section className="border border-zinc-200 bg-zinc-50 p-7">
            <h2 className="text-2xl font-semibold text-ink">Handelsregister</h2>
            <p className="mt-4">TODO: Handelsregister ergänzen.</p>
          </section>
          <section className="border border-zinc-200 bg-zinc-50 p-7">
            <h2 className="text-2xl font-semibold text-ink">Registergericht</h2>
            <p className="mt-4">TODO: Registergericht ergänzen.</p>
          </section>
          <section className="border border-zinc-200 bg-zinc-50 p-7">
            <h2 className="text-2xl font-semibold text-ink">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-4">TODO: Umsatzsteuer-ID ergänzen.</p>
          </section>
        </div>
        <p className="mt-8 border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-500">
          TODO: Impressum rechtlich prüfen und mit vollständigen rechtlichen
          Angaben finalisieren.
        </p>
      </section>
    </>
  );
}
