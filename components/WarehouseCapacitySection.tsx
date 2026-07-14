type WarehouseCapacityList = {
  title: string;
  items: string[];
};

type WarehouseMetric = {
  label: string;
  value: string;
};

type WarehouseCapacitySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  lists: WarehouseCapacityList[];
  factsLabel: string;
  metrics: WarehouseMetric[];
  facts: string[];
};

export function WarehouseCapacitySection({
  eyebrow,
  title,
  description,
  lists,
  factsLabel,
  metrics,
  facts,
}: WarehouseCapacitySectionProps) {
  return (
    <section className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="max-w-2xl min-w-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-ink [overflow-wrap:anywhere] md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600 [overflow-wrap:anywhere]">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {lists.map((list) => (
            <article
              key={list.title}
              className="min-w-0 border border-zinc-200 bg-white p-6 shadow-line"
            >
              <h2 className="text-2xl font-semibold text-ink">
                {list.title}
              </h2>
              <ul className="mt-6 space-y-4">
                {list.items.map((item) => (
                  <li
                    key={item}
                    className="break-words border-t border-zinc-200 pt-4 text-base leading-7 text-zinc-700 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-600">
            {factsLabel}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="min-w-0 border border-zinc-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-zinc-600">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {facts.map((fact) => (
              <span
                key={fact}
                className="max-w-full break-words border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
