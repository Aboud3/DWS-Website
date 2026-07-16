import { PageHero } from "@/components/PageHero";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("privacy", "en");

const linkClass =
  "break-words font-semibold text-ink underline decoration-zinc-300 underline-offset-4 transition hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

const sectionClass = "scroll-mt-24 space-y-5";
const subsectionClass = "space-y-3";
const paragraphClass = "text-base leading-7 text-zinc-700";
const h2Class = "text-2xl font-semibold text-ink md:text-3xl";
const h3Class = "text-xl font-semibold text-ink";
const h4Class = "text-lg font-semibold text-ink";
const decimalListClass =
  "list-decimal space-y-2 pl-6 text-base leading-7 text-zinc-700";
const olClass = "space-y-2 pl-0 text-base leading-7 text-zinc-700";

const tocItems = [
  { href: "#verantwortlicher", label: "I. Name and address of the controller" },
  {
    href: "#datenschutzbeauftragter",
    label: "II. Name and address of the Data Protection Officer",
  },
  {
    href: "#allgemeines",
    label: "III. General information on data processing",
  },
  {
    href: "#logfiles",
    label: "IV. Provision of the website and creation of log files",
  },
  { href: "#cookies", label: "V. Use of cookies" },
  { href: "#newsletter", label: "VI. Newsletter" },
  { href: "#registrierung", label: "VII. Registration" },
  { href: "#kontaktformular", label: "VIII. Contact form and email contact" },
  {
    href: "#google-analytics",
    label: "IX. Web analysis using Google Analytics",
  },
  { href: "#rechte", label: "X. Rights of the data subject" },
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

export default function EnglishPrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Data Protection"
        description="Privacy Policy"
      />
      <section className="mx-auto max-w-5xl px-6 py-14 md:px-8">
        <nav
          aria-labelledby="datenschutz-inhalt"
          className="border border-zinc-200 bg-zinc-50 p-6"
        >
          <h2 id="datenschutz-inhalt" className="text-lg font-semibold text-ink">
            Contents
          </h2>
          <ul className="mt-4 list-none space-y-2 pl-0 text-base leading-7 text-zinc-700">
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
                11. Further development of this Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-12 space-y-12 text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]">
          <section id="verantwortlicher" className={sectionClass}>
            <h2 className={h2Class}>I. Name and address of the controller</h2>
            <p className={paragraphClass}>
              The controller within the meaning of the General Data Protection
              Regulation and other national data protection laws of the member
              states as well as other data protection provisions is:
            </p>
            <address className="border border-zinc-200 bg-white p-6 not-italic shadow-line">
              <p>DWS Druckwerbe-Service + Logistik GmbH</p>
              <p>Managing Director: Manuel Lienau</p>
              <p>Hengsener Str. 8a</p>
              <p>44309 Dortmund</p>
              <p>Germany</p>
              <p>
                <a href="tel:+4902319250550" className={linkClass}>
                  Tel.: +49(0)231-925055-0
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:post@dws-logistik.de" className={linkClass}>
                  post@dws-logistik.de
                </a>
              </p>
            </address>
          </section>

          <section id="datenschutzbeauftragter" className={sectionClass}>
            <h2 className={h2Class}>
              II. Name and address of the Data Protection Officer
            </h2>
            <p className={paragraphClass}>
              The Data Protection Officer of the controller is, pursuant to Art.
              39 GDPR and Section 7 BDSG (new):
            </p>
            <address className="border border-zinc-200 bg-white p-6 not-italic shadow-line">
              <p>Online-Agentur Rüsche</p>
              <p>c/o ARKM</p>
              <p>Bunsenstr. 5</p>
              <p>51647 Gummersbach</p>
              <p>Germany</p>
              <p>
                <a href="tel:+49022619989242" className={linkClass}>
                  Tel.: +49(0)2261-9989-242
                </a>
              </p>
              <p>
                Email:{" "}
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
            <h2 className={h2Class}>
              III. General information on data processing
            </h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Scope of the processing of personal data
              </h3>
              <p className={paragraphClass}>
                We process our users&apos; personal data only to the extent necessary
                to provide a functional website as well as our content and
                services. The processing of our users&apos; personal data generally
                takes place only with the user&apos;s consent. An exception applies in
                cases in which prior consent cannot be obtained for factual
                reasons and the processing of the data is permitted by statutory
                provisions.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Legal basis for the processing of personal data
              </h3>
              <p className={paragraphClass}>
                Where we obtain the consent of the data subject for processing
                operations involving personal data, Art. 6(1)(a) EU General Data
                Protection Regulation (GDPR) serves as the legal basis.
              </p>
              <p className={paragraphClass}>
                Where the processing of personal data is necessary for the
                performance of a contract to which the data subject is party,
                Art. 6(1)(b) GDPR serves as the legal basis. This also applies
                to processing operations that are necessary for carrying out
                pre-contractual measures.
              </p>
              <p className={paragraphClass}>
                Where processing of personal data is necessary for compliance
                with a legal obligation to which our company is subject, Art.
                6(1)(c) GDPR serves as the legal basis.
              </p>
              <p className={paragraphClass}>
                If vital interests of the data subject or another natural person
                make processing of personal data necessary, Art. 6(1)(d) GDPR
                serves as the legal basis.
              </p>
              <p className={paragraphClass}>
                If processing is necessary to safeguard a legitimate interest of
                our company or of a third party and the interests, fundamental
                rights and freedoms of the data subject do not override the
                former interest, Art. 6(1)(f) GDPR serves as the legal basis for
                the processing.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Data erasure and storage period</h3>
              <p className={paragraphClass}>
                The personal data of the data subject will be erased or blocked
                as soon as the purpose of storage ceases to apply. Storage may
                also take place if this has been provided for by the European or
                national legislator in Union regulations, laws or other
                provisions to which the controller is subject. Blocking or
                erasure of the data also takes place when a storage period
                prescribed by the aforementioned standards expires, unless there
                is a need for further storage of the data for the conclusion or
                performance of a contract.
              </p>
            </section>
          </section>

          <section id="logfiles" className={sectionClass}>
            <h2 className={h2Class}>
              IV. Provision of the website and creation of log files
            </h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Description and scope of data processing
              </h3>
              <p className={paragraphClass}>
                Each time our website is accessed, our system automatically
                records data and information from the computer system of the
                accessing computer.
              </p>
              <p className={paragraphClass}>The following data is collected:</p>
              <ol className={decimalListClass}>
                <li>Information about the browser type and version used</li>
                <li>The user&apos;s operating system</li>
                <li>The user&apos;s internet service provider</li>
                <li>The user&apos;s IP address</li>
                <li>Date and time of access</li>
                <li>Websites from which the user&apos;s system reaches our website</li>
                <li>
                  Websites that are accessed by the user&apos;s system via our
                  website
                </li>
                <li>
                  Various metadata (protocol version, sent data volume, server
                  port, service name)
                </li>
              </ol>
              <p className={paragraphClass}>
                The data is also stored in the log files of our system. This
                data is not stored together with other personal data of the
                user.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Legal basis for data processing</h3>
              <p className={paragraphClass}>
                The legal basis for the temporary storage of the data and log
                files is Art. 6(1)(f) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Purpose of data processing</h3>
              <p className={paragraphClass}>
                Storage in log files takes place in order to ensure the
                functionality of the website. In addition, the data serves us to
                optimize the website and to ensure the security of our
                information technology systems. The data is not evaluated for
                marketing purposes in this context.
              </p>
              <p className={paragraphClass}>
                These purposes also constitute our legitimate interest in data
                processing pursuant to Art. 6(1)(f) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Duration of storage</h3>
              <p className={paragraphClass}>
                If the data is stored in log files, it is deleted after no more
                than 31 days. In this case, the users&apos; IP addresses are
                deleted.
              </p>
              <h3 className={h3Class}>Right to object and removal options</h3>
              <p className={paragraphClass}>
                The collection of data for provision of the website and the
                storage of the data in log files is absolutely necessary for
                operation of the website. Consequently, the user has no option to
                object.
              </p>
            </section>
          </section>

          <section id="cookies" className={sectionClass}>
            <h2 className={h2Class}>V. Use of cookies</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                (a) Description and scope of data processing
              </h3>
              <p className={paragraphClass}>
                Our website uses cookies. Cookies are text files that are stored
                in the internet browser or by the internet browser on the user&apos;s
                computer system. If a user accesses a website, a cookie may be
                stored on the user&apos;s operating system. This cookie contains a
                characteristic string that enables unique identification of the
                browser when the website is accessed again.
              </p>
              <p className={paragraphClass}>
                We use cookies to make our website more user-friendly. Some
                elements of our website require that the accessing browser can
                still be identified after a page change.
              </p>
              <p className={paragraphClass}>
                We also use cookies on our website that enable analysis of the
                users&apos; browsing behavior.
              </p>
              <p className={paragraphClass}>
                In this way, the following data can be transmitted:
              </p>
              <ol className={decimalListClass}>
                <li>Search terms entered</li>
                <li>Frequency of page views</li>
                <li>Use of website functions</li>
                <li>Session cookie (deleted again after the browser session)</li>
              </ol>
              <p className={paragraphClass}>
                When our website is accessed, users are informed by an
                information banner about the use of cookies for analysis purposes
                and referred to this Privacy Policy. In this context, information
                is also provided on how the storage of cookies can be prevented
                in the browser settings.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>(b) Legal basis for data processing</h3>
              <p className={paragraphClass}>
                The legal basis for the processing of personal data using
                technically necessary cookies is Art. 6(1)(f) GDPR.
              </p>
              <p className={paragraphClass}>
                The legal basis for the processing of personal data using
                cookies for analysis purposes, where the user&apos;s corresponding
                consent has been obtained, is Art. 6(1)(a) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>(c) Purpose of data processing</h3>
              <p className={paragraphClass}>
                The purpose of using technically necessary cookies is to simplify
                the use of websites for users. Some functions of our website
                cannot be offered without the use of cookies. For these, it is
                necessary that the browser is recognized again after a page
                change.
              </p>
              <p className={paragraphClass}>
                We need cookies for the following applications:
              </p>
              <ol className={decimalListClass}>
                <li>Retaining language settings</li>
                <li>Remembering login status</li>
              </ol>
              <p className={paragraphClass}>
                The user data collected by technically necessary cookies is not
                used to create user profiles.
              </p>
              <p className={paragraphClass}>
                Analysis cookies are used for the purpose of improving the
                quality of our website and its content. Through analysis cookies,
                we learn how the website is used and can thus continuously
                optimize our offering.
              </p>
              <p className={paragraphClass}>
                These purposes also constitute our legitimate interest in the
                processing of personal data pursuant to Art. 6(1)(f) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                (d) Duration of storage, right to object and removal options
              </h3>
              <p className={paragraphClass}>
                Cookies are stored on the user&apos;s computer and transmitted from
                it to our site. As a user, you therefore also have full control
                over the use of cookies. By changing the settings in your
                internet browser, you can disable or restrict the transmission of
                cookies. Cookies that have already been stored can be deleted at
                any time. This can also be done automatically. If cookies are
                disabled for our website, not all functions of the website may
                be fully usable.
              </p>
            </section>
          </section>

          <section id="newsletter" className={sectionClass}>
            <h2 className={h2Class}>VI. Newsletter</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Description and scope of data processing
              </h3>
              <p className={paragraphClass}>
                On our website, it is possible to subscribe to a free
                newsletter. During registration for the newsletter, the data from
                the input form is transmitted to us.
              </p>
              <p className={paragraphClass}>
                In addition, the following data is collected during registration:
              </p>
              <ol className={decimalListClass}>
                <li>IP address of the accessing computer</li>
                <li>Date and time of registration</li>
              </ol>
              <p className={paragraphClass}>
                For the processing of the data, your consent is obtained during
                the registration process and reference is made to this Privacy
                Policy.
              </p>
              <p className={paragraphClass}>
                In connection with data processing for the sending of
                newsletters, the data is not disclosed to third parties. The
                data is used exclusively for sending the newsletter.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Legal basis for data processing</h3>
              <p className={paragraphClass}>
                The legal basis for processing the data after registration for
                the newsletter by the user is, where the user&apos;s consent has been
                obtained, Art. 6(1)(a) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Purpose of data processing</h3>
              <p className={paragraphClass}>
                The collection of the user&apos;s email address serves to deliver the
                newsletter.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Duration of storage</h3>
              <p className={paragraphClass}>
                The data is erased as soon as it is no longer necessary for
                achieving the purpose for which it was collected. The user&apos;s
                email address is therefore stored for as long as the newsletter
                subscription is active.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Right to object and removal options
              </h3>
              <p className={paragraphClass}>
                The newsletter subscription can be cancelled at any time by the
                data subject. For this purpose, every newsletter contains a
                corresponding unsubscribe link.
              </p>
              <p className={paragraphClass}>
                This also enables withdrawal of consent to the storage of the
                personal data collected during the registration process.
              </p>
            </section>
          </section>

          <section id="registrierung" className={sectionClass}>
            <h2 className={h2Class}>VII. Registration</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Description and scope of data processing
              </h3>
              <p className={paragraphClass}>
                On our website, we offer users the option of registering by
                providing personal data. The data is entered into an input form
                and transmitted to us and stored. The data is not disclosed to
                third parties. The following data is collected as part of the
                registration process:
              </p>
              <ol className={decimalListClass}>
                <li>Username (a pseudonym if desired)</li>
                <li>Postal address</li>
                <li>Telephone number</li>
                <li>The email address</li>
                <li>A password that is stored in encrypted form</li>
              </ol>
              <p className={paragraphClass}>
                At the time of registration, the following data is also stored:
              </p>
              <p className={paragraphClass}>Date and time of registration</p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Legal basis for data processing</h3>
              <p className={paragraphClass}>
                The legal basis for processing the data is, where the user&apos;s
                consent has been obtained, Art. 6(1)(a) GDPR.
              </p>
              <p className={paragraphClass}>
                If registration serves the performance of a contract to which
                the user is party or the implementation of pre-contractual
                measures, the additional legal basis for processing the data is
                Art. 6(1)(b) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Purpose of data processing</h3>
              <p className={paragraphClass}>
                Registration of the user is necessary for providing certain
                content and services on our website.
              </p>
              <p className={paragraphClass}>
                Registration of the user may be necessary for the performance of
                a contract with the user or for carrying out pre-contractual
                measures.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Duration of storage</h3>
              <p className={paragraphClass}>
                The data is erased as soon as it is no longer necessary for
                achieving the purpose for which it was collected.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Right to object and removal options
              </h3>
              <p className={paragraphClass}>
                As a user, you have the option at any time to cancel the
                registration. You can have the data stored about you changed at
                any time. To do so, use the respective deregistration link, or,
                if applicable, write informally by email to the controller
                (pursuant to Section I).
              </p>
            </section>
          </section>

          <section id="kontaktformular" className={sectionClass}>
            <h2 className={h2Class}>VIII. Contact form and email contact</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Description and scope of data processing
              </h3>
              <p className={paragraphClass}>
                Contact forms may be available on our websites that can be used
                for electronic contact. If a user makes use of this option, the
                data entered in the input form is transmitted to us and stored.
                This data is generally (but may also differ slightly):
              </p>
              <ol className={decimalListClass}>
                <li>Your name</li>
                <li>Your email</li>
                <li>Postal address</li>
                <li>Telephone number</li>
                <li>Subject</li>
                <li>Your message (text message addressed to us)</li>
              </ol>
              <p className={paragraphClass}>
                For the processing of the data, your consent is obtained during
                the sending process and reference is made to this Privacy Policy.
              </p>
              <p className={paragraphClass}>
                Alternatively, contact can be made via the email address
                provided. In this case, the user&apos;s personal data transmitted with
                the email is stored.
              </p>
              <p className={paragraphClass}>
                In this context, the data is not disclosed to third parties. The
                data is used exclusively for processing the conversation.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Legal basis for data processing</h3>
              <p className={paragraphClass}>
                The legal basis for processing the data is, where the user&apos;s
                consent has been obtained, Art. 6(1)(a) GDPR.
              </p>
              <p className={paragraphClass}>
                The legal basis for processing the data transmitted in the
                course of sending an email is Art. 6(1)(f) GDPR. If the email
                contact is aimed at concluding a contract, the additional legal
                basis for processing is Art. 6(1)(b) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Purpose of data processing</h3>
              <p className={paragraphClass}>
                The processing of personal data from the input form serves us
                solely to process the contact. In the case of contact by email,
                this also constitutes the necessary legitimate interest in
                processing the data.
              </p>
              <p className={paragraphClass}>
                The other personal data processed during the sending process
                serves to prevent misuse of the contact form and to ensure the
                security of our information technology systems.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Duration of storage</h3>
              <p className={paragraphClass}>
                The data is erased as soon as it is no longer necessary for
                achieving the purpose for which it was collected. For the
                personal data from the input form of the contact form and the
                data sent by email, this is the case when the respective
                conversation with the user has ended. The conversation is ended
                when it can be inferred from the circumstances that the matter in
                question has been conclusively clarified.
              </p>
              <p className={paragraphClass}>
                The additional personal data collected during the sending process
                is erased no later than after a period of seven days.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Right to object and removal options
              </h3>
              <p className={paragraphClass}>
                The user has the option at any time to withdraw consent to the
                processing of personal data. If the user contacts us by email,
                the user may object at any time to the storage of personal data.
                In such a case, the conversation cannot be continued.
              </p>
              <p className={paragraphClass}>
                All personal data stored in the course of contact will be erased
                in this case.
              </p>
            </section>
          </section>

          <section id="google-analytics" className={sectionClass}>
            <h2 className={h2Class}>IX. Web analysis using Google Analytics</h2>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                1. Scope of the processing of personal data
              </h3>
              <p className={paragraphClass}>
                We use the web analytics service &quot;Google Analytics&quot; on our
                website. This is a service of Google Inc. (&quot;Google&quot;) used to
                analyze our users&apos; browsing behavior. Google places a cookie on
                the user&apos;s computer (for cookies, see above). If individual pages
                of our website are accessed, the following data is stored:
              </p>
              <ol className={decimalListClass}>
                <li>Two bytes of the IP address of the user&apos;s accessing system</li>
                <li>The accessed website</li>
                <li>
                  The website from which the user arrived at the accessed
                  website (referrer)
                </li>
                <li>The subpages accessed from the accessed website</li>
                <li>The time spent on the website</li>
                <li>The frequency with which the website is accessed</li>
              </ol>
              <p className={paragraphClass}>
                Google will use this information on our behalf to evaluate the
                use of our online offering by users, to compile reports on
                activities within this online offering and to provide us with
                further services associated with the use of this online offering
                and internet use. Pseudonymous user profiles may be created from
                the processed data.
              </p>
              <p className={paragraphClass}>
                We use Google Analytics only with activated IP anonymisation.
                This means that the user&apos;s IP address is shortened by Google
                within the member states of the European Union or in other
                contracting states to the Agreement on the European Economic
                Area. The IP address transmitted by the user&apos;s browser is not
                combined with other Google data.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                2. Legal basis for the processing of personal data
              </h3>
              <p className={paragraphClass}>
                The legal basis for the processing of users&apos; personal data is
                Art. 6(1)(f) GDPR.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>3. Purpose of data processing</h3>
              <p className={paragraphClass}>
                The processing of users&apos; personal data enables us to analyze our
                users&apos; browsing behavior. Through the evaluation of the data
                obtained, we are able to compile information about the use of the
                individual components of our website. This helps us to
                continuously improve our website and its user-friendliness. These
                purposes also constitute our legitimate interest in processing
                the data pursuant to Art. 6(1)(f) GDPR. The anonymisation of the
                IP address sufficiently takes into account the users&apos; interest in
                the protection of their personal data.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Duration of storage</h3>
              <p className={paragraphClass}>
                The data is erased as soon as it is no longer needed for our
                recording purposes.
              </p>
              <p className={paragraphClass}>
                In our case, this is after 14 months.
              </p>
            </section>
            <section className={subsectionClass}>
              <h3 className={h3Class}>
                5. Right to object and removal options
              </h3>
              <p className={paragraphClass}>
                Cookies are stored on the user&apos;s computer and transmitted from
                it to our site. As a user, you therefore also have full control
                over the use of cookies. By changing the settings in your
                internet browser, you can disable or restrict the transmission of
                cookies. Cookies that have already been stored can be deleted at
                any time. This can also be done automatically. If cookies are
                disabled for our website, not all functions of the website may
                be fully usable.
              </p>
              <p className={paragraphClass}>
                Users can prevent the storage of cookies by selecting the
                appropriate settings in their browser software; users can also
                prevent the collection by Google of the data generated by the
                cookie and related to their use of the online offering, as well
                as the processing of this data by Google, by downloading and
                installing the browser plug-in available at the following link:{" "}
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
            <h2 className={h2Class}>X. Rights of the data subject</h2>
            <p className={paragraphClass}>
              If personal data concerning you is processed, you are a data
              subject within the meaning of the GDPR and you have the following
              rights vis-a-vis the controller:
            </p>
            <section className={subsectionClass}>
              <h3 className={h3Class}>1. Right of access</h3>
              <p className={paragraphClass}>
                You may request confirmation from the controller as to whether
                personal data concerning you is being processed by us.
              </p>
              <p className={paragraphClass}>
                If such processing is taking place, you may request information
                from the controller about the following:
              </p>
              <ParenList
                items={[
                  "the purposes for which the personal data is processed;",
                  "the categories of personal data that are processed;",
                  "the recipients or categories of recipients to whom the personal data concerning you has been or will be disclosed;",
                  "the planned duration of storage of the personal data concerning you or, if specific information is not possible, criteria for determining the storage period;",
                  "the existence of a right to rectification or erasure of the personal data concerning you, a right to restriction of processing by the controller or a right to object to this processing;",
                  "the existence of a right to lodge a complaint with a supervisory authority;",
                  "all available information about the origin of the data if the personal data is not collected from the data subject;",
                  "the existence of automated decision-making, including profiling, pursuant to Art. 22(1) and (4) GDPR and - at least in these cases - meaningful information about the logic involved as well as the significance and intended effects of such processing for the data subject.",
                ]}
              />
              <p className={paragraphClass}>
                You have the right to request information as to whether the
                personal data concerning you is transferred to a third country or
                to an international organization. In this context, you may
                request to be informed about the appropriate safeguards pursuant
                to Art. 46 GDPR in connection with the transfer.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>2. Right to rectification</h3>
              <p className={paragraphClass}>
                You have a right to rectification and/or completion vis-a-vis the
                controller if the processed personal data concerning you is
                inaccurate or incomplete. The controller must carry out the
                rectification without undue delay.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                3. Right to restriction of processing
              </h3>
              <p className={paragraphClass}>
                Under the following conditions, you may request restriction of
                the processing of the personal data concerning you:
              </p>
              <ParenList
                items={[
                  "if you contest the accuracy of the personal data concerning you for a period enabling the controller to verify the accuracy of the personal data;",
                  "the processing is unlawful and you oppose the erasure of the personal data and instead request restriction of the use of the personal data;",
                  "the controller no longer needs the personal data for the purposes of processing, but you need it for the establishment, exercise or defense of legal claims, or",
                  "if you have objected to processing pursuant to Art. 21(1) GDPR and it has not yet been determined whether the controller's legitimate grounds override your grounds.",
                ]}
              />
              <p className={paragraphClass}>
                Where the processing of the personal data concerning you has
                been restricted, this data may - apart from its storage - be
                processed only with your consent or for the establishment,
                exercise or defense of legal claims or for the protection of the
                rights of another natural or legal person or for reasons of
                important public interest of the Union or of a member state.
              </p>
              <p className={paragraphClass}>
                If processing has been restricted under the aforementioned
                conditions, you will be informed by the controller before the
                restriction is lifted.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>4. Right to erasure</h3>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(a) Erasure obligation</h4>
                <p className={paragraphClass}>
                  You may request that the controller erase the personal data
                  concerning you without undue delay, and the controller is
                  obliged to erase this data without undue delay if one of the
                  following grounds applies:
                </p>
                <ParenList
                  items={[
                    "The personal data concerning you is no longer necessary for the purposes for which it was collected or otherwise processed.",
                    "You withdraw your consent on which the processing was based pursuant to Art. 6(1)(a) or Art. 9(2)(a) GDPR, and there is no other legal basis for the processing.",
                    "You object to the processing pursuant to Art. 21(1) GDPR and there are no overriding legitimate grounds for the processing, or you object to the processing pursuant to Art. 21(2) GDPR.",
                    "The personal data concerning you has been unlawfully processed.",
                    "Erasure of the personal data concerning you is necessary for compliance with a legal obligation under Union law or the law of the member states to which the controller is subject.",
                    "The personal data concerning you has been collected in relation to information society services offered pursuant to Art. 8(1) GDPR.",
                  ]}
                />
              </section>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(b) Information to third parties</h4>
                <p className={paragraphClass}>
                  If the controller has made the personal data concerning you
                  public and is obliged pursuant to Art. 17(1) GDPR to erase it,
                  the controller, taking account of available technology and the
                  cost of implementation, shall take reasonable steps, including
                  technical measures, to inform controllers that process the
                  personal data that you, as the data subject, have requested the
                  erasure by such controllers of any links to, or copy or
                  replication of, this personal data.
                </p>
              </section>
              <section className={subsectionClass}>
                <h4 className={h4Class}>(c) Exceptions</h4>
                <p className={paragraphClass}>
                  The right to erasure does not exist insofar as processing is
                  necessary
                </p>
                <ParenList
                  items={[
                    "for exercising the right of freedom of expression and information;",
                    "for compliance with a legal obligation that requires processing under Union law or the law of the member states to which the controller is subject, or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;",
                    "for reasons of public interest in the area of public health pursuant to Art. 9(2)(h) and (i) and Art. 9(3) GDPR;",
                    "for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes pursuant to Art. 89(1) GDPR, insofar as the right referred to in section (a) is likely to render impossible or seriously impair the achievement of the objectives of this processing, or",
                    "for the establishment, exercise or defense of legal claims.",
                  ]}
                />
              </section>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>5. Right to information</h3>
              <p className={paragraphClass}>
                If you have asserted the right to rectification, erasure or
                restriction of processing against the controller, the controller
                is obliged to communicate this rectification or erasure of data
                or restriction of processing to all recipients to whom the
                personal data concerning you has been disclosed, unless this
                proves impossible or involves disproportionate effort.
              </p>
              <p className={paragraphClass}>
                You have the right vis-a-vis the controller to be informed about
                these recipients.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>6. Right to data portability</h3>
              <p className={paragraphClass}>
                You have the right to receive the personal data concerning you
                that you have provided to the controller in a structured,
                commonly used and machine-readable format. You also have the
                right to transmit this data to another controller without
                hindrance from the controller to whom the personal data was
                provided, provided that
              </p>
              <ParenList
                items={[
                  "the processing is based on consent pursuant to Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR or on a contract pursuant to Art. 6(1)(b) GDPR and",
                  "the processing is carried out by automated means.",
                ]}
              />
              <p className={paragraphClass}>
                In exercising this right, you also have the right to have the
                personal data concerning you transmitted directly from one
                controller to another controller, where technically feasible. The
                freedoms and rights of other persons must not be adversely
                affected by this.
              </p>
              <p className={paragraphClass}>
                The right to data portability does not apply to processing of
                personal data that is necessary for the performance of a task
                carried out in the public interest or in the exercise of official
                authority vested in the controller.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>7. Right to object</h3>
              <p className={paragraphClass}>
                You have the right, on grounds relating to your particular
                situation, to object at any time to the processing of personal
                data concerning you that is carried out on the basis of Art.
                6(1)(e) or (f) GDPR; this also applies to profiling based on
                those provisions.
              </p>
              <p className={paragraphClass}>
                The controller will no longer process the personal data
                concerning you unless the controller can demonstrate compelling
                legitimate grounds for the processing that override your
                interests, rights and freedoms, or the processing serves the
                establishment, exercise or defense of legal claims.
              </p>
              <p className={paragraphClass}>
                If the personal data concerning you is processed for direct
                marketing purposes, you have the right to object at any time to
                the processing of the personal data concerning you for the
                purpose of such marketing; this also applies to profiling insofar
                as it is related to such direct marketing.
              </p>
              <p className={paragraphClass}>
                If you object to processing for direct marketing purposes, the
                personal data concerning you will no longer be processed for
                these purposes.
              </p>
              <p className={paragraphClass}>
                In connection with the use of information society services,
                notwithstanding Directive 2002/58/EC, you have the option of
                exercising your right to object by automated means using
                technical specifications.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                8. Right to withdraw the data-protection consent declaration
              </h3>
              <p className={paragraphClass}>
                You have the right to withdraw your data-protection consent
                declaration at any time. The withdrawal of consent does not
                affect the lawfulness of processing carried out on the basis of
                consent before its withdrawal.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                9. Automated individual decision-making, including profiling
              </h3>
              <p className={paragraphClass}>
                You have the right not to be subject to a decision based solely
                on automated processing, including profiling, which produces
                legal effects concerning you or similarly significantly affects
                you. This does not apply if the decision
              </p>
              <ParenList
                items={[
                  "is necessary for entering into or performing a contract between you and the controller,",
                  "is authorized by Union or member state law to which the controller is subject and that law lays down suitable measures to safeguard your rights and freedoms and legitimate interests, or",
                  "is based on your explicit consent.",
                ]}
              />
              <p className={paragraphClass}>
                However, these decisions may not be based on special categories
                of personal data pursuant to Art. 9(1) GDPR unless Art. 9(2)(a)
                or (g) GDPR applies and suitable measures to safeguard your
                rights and freedoms and legitimate interests have been
                implemented.
              </p>
              <p className={paragraphClass}>
                With regard to the cases referred to in (1) and (3), the
                controller shall implement suitable measures to safeguard your
                rights and freedoms and legitimate interests, which include at
                least the right to obtain human intervention on the part of the
                controller, to express your point of view and to contest the
                decision.
              </p>
            </section>

            <section className={subsectionClass}>
              <h3 className={h3Class}>
                10. Right to lodge a complaint with a supervisory authority
              </h3>
              <p className={paragraphClass}>
                Without prejudice to any other administrative or judicial remedy,
                you have the right to lodge a complaint with a supervisory
                authority, in particular in the member state of your habitual
                residence, place of work or place of the alleged infringement,
                if you consider that the processing of personal data concerning
                you infringes the GDPR.
              </p>
              <p className={paragraphClass}>
                The supervisory authority with which the complaint has been
                lodged informs the complainant about the status and outcome of
                the complaint, including the possibility of a judicial remedy
                pursuant to Art. 78 GDPR.
              </p>
            </section>

            <section
              id="weiterentwicklung"
              className={`${subsectionClass} scroll-mt-24`}
            >
              <h3 className={h3Class}>
                11. Further development of this Privacy Policy
              </h3>
              <p className={paragraphClass}>
                This Privacy Policy is adapted and further developed at
                irregular intervals in line with developments in data protection
                and security technology. We reserve the right to adapt this
                Privacy Policy if necessary so that it always complies with
                current legal requirements or in order to implement changes to
                our services in the Privacy Policy, e.g. when introducing new
                services. The new Privacy Policy will then apply to your next
                visit.
              </p>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
