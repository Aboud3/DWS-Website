import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { companyContact } from "@/lib/content";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact");

export default function KontaktPage() {
  const contactCards = [
    {
      title: "Telefon",
      value: companyContact.phone,
      href: "tel:+492319250550",
    },
    {
      title: "E-Mail",
      value: companyContact.email,
      href: `mailto:${companyContact.email}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Anfrage zu Druck, Lettershop oder Lagerlogistik."
        description="Beschreiben Sie kurz Ihr Projekt, die benötigten Leistungen und den gewünschten Zeitrahmen. DWS meldet sich mit den nächsten Schritten."
      />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
          <div className="relative h-40 overflow-hidden border border-zinc-200 bg-white md:h-auto md:aspect-[5/1]">
            <Image
              src="/images/gallery/mailing-kuvert.jpg"
              alt="Kuvert als Bestandteil einer Versandvorbereitung bei DWS"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <address className="not-italic">
          <SectionHeading
            title="Direkter Kontakt"
            description="Für Anfragen zu Design, Druck, Lettershop und Lagerlogistik stehen die folgenden Kontaktdaten zur Verfügung."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactCards.map((card) => (
              <section
                key={card.title}
                className="border border-zinc-200 bg-white p-6 shadow-line"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  {card.title}
                </h3>
                <a
                  href={card.href}
                  className="mt-4 inline-flex text-lg font-semibold text-ink underline decoration-zinc-300 underline-offset-4 hover:decoration-ink"
                >
                  {card.value}
                </a>
              </section>
            ))}
            <section className="border border-zinc-200 bg-white p-6 shadow-line md:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600">
                Adresse
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {companyContact.company}
                <br />
                {companyContact.street}
                <br />
                {companyContact.postalCode} {companyContact.city}
              </p>
            </section>
          </div>
        </address>

        <form
          id="contact-form"
          action="/contact.php"
          method="post"
          acceptCharset="UTF-8"
          className="grid gap-5 border border-zinc-200 bg-zinc-50 p-7 shadow-line"
        >
          <input type="hidden" name="language" value="de" />
          <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
            />
          </div>
          <div className="border-b border-zinc-200 pb-5">
            <p
              id="success"
              role="status"
              className="mb-4 hidden border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900 target:block"
            >
              Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.
            </p>
            <p
              id="error"
              role="alert"
              className="mb-4 hidden border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900 target:block"
            >
              Ihre Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre
              Angaben oder schreiben Sie direkt an post@dws-logistik.de.
            </p>
            <h2 className="text-2xl font-semibold text-ink">Anfrage senden</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Wir melden uns nach Eingang Ihrer Anfrage zeitnah zurück.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={120}
                autoComplete="name"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 text-base"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-sm font-semibold text-ink"
              >
                Unternehmen
              </label>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={160}
                autoComplete="organization"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 text-base"
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 text-base"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-ink">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={60}
                autoComplete="tel"
                className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 text-base"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              maxLength={5000}
              className="mt-2 w-full border border-zinc-300 bg-white px-4 py-3 text-base"
            />
          </div>
          <button
            type="submit"
            className="min-h-12 bg-ink px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Anfrage senden
          </button>
          <p className="text-sm leading-6 text-zinc-500">
            Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage
            verarbeitet. Bitte senden Sie keine sensiblen Daten. Weitere
            Informationen finden Sie in der{" "}
            <a
              href="/datenschutz/"
              className="font-semibold text-ink underline decoration-zinc-300 underline-offset-4 hover:decoration-ink"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </form>
      </section>
    </>
  );
}
