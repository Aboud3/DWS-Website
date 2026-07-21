import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { companyContact } from "@/lib/content";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata("contact", "en");

export default function EnglishContactPage() {
  const contactCards = [
    {
      title: "Phone",
      value: companyContact.phone,
      href: "tel:+492319250550",
    },
    {
      title: "Email",
      value: companyContact.email,
      href: `mailto:${companyContact.email}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact DWS"
        title="Start an inquiry or contact DWS directly."
        description="Whether print production, lettershop or logistics: DWS will review your inquiry and respond with the next steps."
      />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
          <div className="relative h-40 overflow-hidden border border-zinc-200 bg-white md:h-auto md:aspect-[5/1]">
            <Image
              src="/images/gallery/mailing-kuvert.jpg"
              alt="Envelope as part of shipping preparation at DWS"
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
            title="Direct contact"
            description="Use these contact details for inquiries about design, print, lettershop and logistics."
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
                Address
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {companyContact.company}
                <br />
                {companyContact.street}
                <br />
                {companyContact.postalCode} {companyContact.city}
                <br />
                {companyContact.country}
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
          <input type="hidden" name="language" value="en" />
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
              Thank you. Your inquiry was sent successfully.
            </p>
            <p
              id="error"
              role="alert"
              className="mb-4 hidden border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900 target:block"
            >
              Your inquiry could not be sent. Please check your information or
              email post@dws-logistik.de directly.
            </p>
            <h2 className="text-2xl font-semibold text-ink">Start inquiry</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              We will respond promptly after receiving your request.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                required: true,
                maxLength: 120,
                autoComplete: "name",
              },
              {
                id: "company",
                label: "Company",
                type: "text",
                required: false,
                maxLength: 160,
                autoComplete: "organization",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                required: true,
                maxLength: 254,
                autoComplete: "email",
              },
              {
                id: "phone",
                label: "Phone",
                type: "tel",
                required: false,
                maxLength: 60,
                autoComplete: "tel",
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="text-sm font-semibold text-ink"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  maxLength={field.maxLength}
                  autoComplete={field.autoComplete}
                  className="mt-2 min-h-12 w-full border border-zinc-300 bg-white px-4 text-base"
                />
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Message
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
            Send inquiry
          </button>
          <p className="text-sm leading-6 text-zinc-500">
            By submitting this form, your information will be processed to
            handle your inquiry. Please do not send sensitive data. Further
            information is available in the{" "}
            <a
              href="/en/privacy-policy/"
              className="font-semibold text-ink underline decoration-zinc-300 underline-offset-4 hover:decoration-ink"
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </section>
    </>
  );
}
