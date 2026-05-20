import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { companyContact } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("imprint", "en");

export default function EnglishImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Imprint"
        description="The English legal version is currently being prepared. The German version remains the legally relevant version."
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="grid gap-5 text-base leading-7 text-zinc-700 md:grid-cols-2">
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">Provider</h2>
            <div className="mt-4 space-y-2">
              <p>{companyContact.company}</p>
              <p>{companyContact.street}</p>
              <p>
                {companyContact.postalCode} {companyContact.city}
              </p>
              <p>{companyContact.country}</p>
            </div>
          </section>
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">Contact</h2>
            <div className="mt-4 space-y-2">
              <p>Phone: {companyContact.phone}</p>
              <p>Email: {companyContact.email}</p>
            </div>
          </section>
        </div>
        <p className="mt-8 border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-500">
          The English legal version is currently being prepared. The German
          version remains the legally relevant version.{" "}
          <Link
            href={getRoute("de", "imprint")}
            className="font-semibold text-ink underline decoration-zinc-400 underline-offset-4"
          >
            View the German imprint.
          </Link>
        </p>
      </section>
    </>
  );
}
