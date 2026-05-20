type ServiceHeroVisualProps = {
  variant: "druck" | "lettershop" | "lagerlogistik";
};

export function ServiceHeroVisual({ variant }: ServiceHeroVisualProps) {
  return (
    <div
      className="relative min-h-[320px] overflow-hidden border border-zinc-300 bg-zinc-50"
      aria-hidden="true"
    >
      <div className="absolute inset-6 border border-zinc-300 bg-white" />
      {variant === "druck" ? <PrintVisual /> : null}
      {variant === "lettershop" ? <LettershopVisual /> : null}
      {variant === "lagerlogistik" ? <LogisticsVisual /> : null}
    </div>
  );
}

function PrintVisual() {
  return (
    <>
      <div className="absolute left-12 top-12 h-56 w-40 border border-zinc-300 bg-white" />
      <div className="absolute left-20 top-20 h-56 w-40 border border-zinc-300 bg-white" />
      <div className="absolute left-28 top-28 h-56 w-40 border border-zinc-300 bg-white shadow-line">
        <div className="grid h-full grid-cols-4 grid-rows-6">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="border border-zinc-200" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 right-10 h-px w-48 bg-zinc-300" />
      <div className="absolute bottom-20 right-10 h-px w-36 bg-zinc-300" />
    </>
  );
}

function LettershopVisual() {
  return (
    <>
      <div className="absolute left-10 top-20 h-24 w-36 border border-zinc-300 bg-white">
        <div className="h-full w-full [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)] border-t border-zinc-300" />
      </div>
      <div className="absolute left-1/2 top-20 h-24 w-36 -translate-x-1/2 border border-zinc-300 bg-white">
        <div className="h-full w-full [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)] border-t border-zinc-300" />
      </div>
      <div className="absolute right-10 top-20 h-24 w-36 border border-zinc-300 bg-white">
        <div className="h-full w-full [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)] border-t border-zinc-300" />
      </div>
      <div className="absolute left-[25%] top-32 h-px w-[18%] bg-zinc-300" />
      <div className="absolute right-[25%] top-32 h-px w-[18%] bg-zinc-300" />
      <div className="absolute bottom-16 left-10 right-10 grid grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="h-16 border border-zinc-300 bg-zinc-100"
          />
        ))}
      </div>
    </>
  );
}

function LogisticsVisual() {
  return (
    <>
      <div className="absolute inset-x-10 top-12 grid grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="h-16 border border-zinc-300 bg-white"
          />
        ))}
      </div>
      <div className="absolute bottom-16 left-12 h-24 w-24 border border-zinc-300 bg-zinc-100" />
      <div className="absolute bottom-16 left-44 h-24 w-24 border border-zinc-300 bg-white" />
      <div className="absolute bottom-16 left-76 h-24 w-24 border border-zinc-300 bg-zinc-100" />
      <div className="absolute bottom-28 left-36 h-px w-8 bg-zinc-300" />
      <div className="absolute bottom-28 left-64 h-px w-8 bg-zinc-300" />
      <div className="absolute bottom-28 right-12 h-px w-36 bg-zinc-300" />
    </>
  );
}
