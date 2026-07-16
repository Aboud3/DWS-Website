import { PageHero } from "@/components/PageHero";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("imprint", "en");

const linkClass =
  "break-words font-semibold text-ink underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const openingParagraph =
  "The provider and party responsible for this internet domain within the meaning of Section 6 of the German Teleservices Act (TDG), the Act Governing the Framework Conditions for Information and Communication Services (IuKDG), and, with regard to editorial content, press law and Section 6(2) of the Interstate Treaty on Media Services (MDStV), is:";

export default function EnglishImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Imprint"
        description={openingParagraph}
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <div className="space-y-10 text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]">
          <address className="border border-zinc-200 bg-white p-7 not-italic shadow-line">
            <p>DWS Druckwerbe-Service + Logistik GmbH</p>
            <p>(abbreviated as DWS)</p>
            <p>Hengsener Str. 8a</p>
            <p>44309 Dortmund</p>
            <p>Germany</p>
            <p>Phone 0231 • 925055 • 0</p>
            <p>
              <a href="mailto:post@dws-logistik.de" className={linkClass}>
                post@dws-logistik.de
              </a>
            </p>
            <p>Managing Director: Manuel Lienau</p>
            <p>
              Entered in the commercial register of the Dortmund Local Court
              under no.: HRB 37865
            </p>
            <p>Tax no.: 316/5719/2290</p>
          </address>

          <p>
            Some of the photographs used within the DWS website were provided by
            photocase.com. It is not permitted to copy images, texts and logos.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Content of the online offering:
            </h2>
            <p>
              DWS assumes no responsibility for the timeliness, correctness,
              completeness or quality of the information provided. Liability
              claims against DWS relating to material or non-material damage
              caused by the use or non-use of the information presented, or by
              the use of incorrect and incomplete information, are generally
              excluded unless DWS can be proven to have acted with intent or
              gross negligence. All offers are subject to change and
              non-binding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              References and links:
            </h2>
            <p>
              In the case of direct or indirect references to external websites
              (&quot;links&quot;) that lie outside the area of responsibility of
              DWS, a liability obligation would come into effect exclusively in the
              event that DWS has knowledge of the content and it would be
              technically possible and reasonable for it to prevent use in the
              event of unlawful content. DWS therefore expressly declares that,
              at the time the links were set, the corresponding linked pages
              were free of illegal content. DWS has no influence whatsoever on
              the current and future design or on the content of the linked /
              connected pages. It therefore hereby expressly distances itself
              from all content of all linked / connected pages that was changed
              after the links were set. This statement applies to all links and
              references set within its own internet offering as well as to
              third-party entries in any guest books, discussion forums and
              mailing lists set up by DWS. For illegal, incorrect or incomplete
              content and, in particular, for damage arising from the use or
              non-use of information presented in this manner, only the provider
              of the page to which reference was made is liable, not the party
              that merely refers to the respective page via links.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Google Analytics:
            </h2>
            <p>
              This website uses Google Analytics, a web analytics service of
              Google Inc. (&quot;Google&quot;). Google Analytics uses so-called
              &quot;cookies&quot;, text files that are stored on your computer and that enable an
              analysis of your use of the website. The information generated by
              the cookie about your use of this website (including your IP
              address, which is, however, anonymized before storage using the
              _anonymizeIp() method so that it can no longer be assigned to a
              connection) is transmitted to a Google server in the USA and stored
              there. Google will use this information to evaluate your use of
              the website, to compile reports on website activity for the
              website operators and to provide further services associated with
              website use and internet use. Google may also transfer this
              information to third parties where required to do so by law or
              where such third parties process the data on Google&apos;s behalf.
              Google will under no circumstances associate your IP address with
              other Google data. You can prevent the installation of cookies by
              selecting the appropriate settings in your browser software; we
              point out, however, that in this case you may not be able to use
              all functions of this website in full. By using this website, you
              declare your consent to the processing of the data collected about
              you by Google in the manner and for the purpose described above.
            </p>
            <p>
              You can object to the collection of data by Google Analytics with
              effect for the future by installing a deactivation add-on (
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              ) for your browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Consumer information on online dispute resolution pursuant to
              Article 14(1) of the ODR Regulation:
            </h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR), which you can find at{" "}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                http://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">
              Notice pursuant to Section 36 of the German Consumer Dispute
              Resolution Act (VSBG):
            </h2>
            <p>
              We are neither willing nor obliged to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
