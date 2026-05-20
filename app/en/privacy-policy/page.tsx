import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { companyContact } from "@/lib/content";
import { getRoute } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("privacy", "en");

export default function EnglishPrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="The English legal version is currently being prepared. The German version remains the legally relevant version."
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="space-y-5">
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">
              Responsible party
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              {companyContact.company}, {companyContact.street},{" "}
              {companyContact.postalCode} {companyContact.city},{" "}
              {companyContact.country}. Contact: {companyContact.email}, phone:{" "}
              {companyContact.phone}.
            </p>
          </section>
          <section className="border border-zinc-200 bg-white p-7 shadow-line">
            <h2 className="text-2xl font-semibold text-ink">
              English legal version in preparation
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              The English legal version is currently being prepared. The German
              version remains the legally relevant version.
            </p>
          </section>
        </div>
        <p className="mt-8 border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-500">
          Please refer to the German privacy policy until the reviewed English
          legal version is available.{" "}
          <Link
            href={getRoute("de", "privacy")}
            className="font-semibold text-ink underline decoration-zinc-400 underline-offset-4"
          >
            View the German privacy policy.
          </Link>
        </p>
      </section>
    </>
  );
}
