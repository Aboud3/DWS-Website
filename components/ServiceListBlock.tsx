type ServiceListBlockProps = {
  title: string;
  items: string[];
};

export function ServiceListBlock({ title, items }: ServiceListBlockProps) {
  return (
    <article className="border border-zinc-200 bg-white shadow-line">
      <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
        <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      </div>
      <ul className="grid gap-0 p-6">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[3rem_1fr] items-center border-b border-zinc-200 py-4 last:border-b-0 first:pt-0 last:pb-0"
          >
            <span className="text-sm font-semibold text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base font-medium text-zinc-700">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
