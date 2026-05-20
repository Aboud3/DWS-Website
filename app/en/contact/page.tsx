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
      title: "Support",
      value: companyContact.support,
      href: "tel:+4923192505529",
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
          <div className="relative aspect-[5/1] min-h-40 overflow-hidden border border-zinc-200 bg-white">
            <Image
              src="/images/gallery/mailing-kuvert.jpg"
              alt="Envelope as part of shipping preparation at DWS"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover grayscale saturate-[0.75] contrast-[0.95]"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <address className="not-italic">
          <SectionHeading
            title="Direct contact"
            description="Use these contact details for inquiries about print, lettershop and logistics."
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

        {/* TODO: form submission backend needed. */}
        <form className="grid gap-5 border border-zinc-200 bg-zinc-50 p-7 shadow-line">
          <div className="border-b border-zinc-200 pb-5">
            <h2 className="text-2xl font-semibold text-ink">Start inquiry</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              We will respond promptly after receiving your request.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["name", "Name", "text"],
              ["company", "Company", "text"],
              ["email", "Email", "email"],
              ["phone", "Phone", "tel"],
            ].map(([id, label, type]) => (
              <div key={id}>
                <label htmlFor={id} className="text-sm font-semibold text-ink">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
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
              className="mt-2 w-full border border-zinc-300 bg-white px-4 py-3 text-base"
            />
          </div>
          <button
            type="button"
            className="min-h-12 bg-ink px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Send inquiry
          </button>
          <p className="text-sm leading-6 text-zinc-500">
            Please do not send sensitive data through this form.
          </p>
        </form>
      </section>
    </>
  );
}
