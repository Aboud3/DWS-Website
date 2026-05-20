type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-normal text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl md:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
