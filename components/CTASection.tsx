import { ButtonLink } from "@/components/ButtonLink";
import { getRoute } from "@/lib/i18n";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTASection({
  title = "Sprechen wir über Ihren nächsten Prozess.",
  description = "Ob Printproduktion, Mailing oder Logistik: DWS koordiniert die passenden Schritte aus einer Hand und mit klaren Ansprechpartnern.",
  buttonLabel = "Kontakt aufnehmen",
  href = getRoute("de", "contact"),
}: CTASectionProps) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-normal md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p>
        </div>
        <ButtonLink href={href} variant="secondary">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
