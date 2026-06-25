import Sprig from "@/components/ui/Sprig";

export function LegalShell({
  title,
  updated,
  effective,
  intro,
  children,
}: {
  title: string;
  updated: string;
  effective: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header — navy/gold brand band */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(130deg,#00152e 0%,#002147 48%,#0a3262 100%)" }}
      >
        <div className="pointer-events-none absolute -right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rotate-45 border border-[#C9A84C]/20" />
        <div className="container-x relative py-16 md:py-20">
          <div className="flex items-center gap-3 text-[#C9A84C]">
            <Sprig className="h-5 w-5" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Legal</span>
          </div>
          <h1 className="mt-4 font-display text-[clamp(34px,5vw,52px)] font-semibold text-cream">
            {title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[14px] text-cream/75">
            <span>Last Updated: {updated}</span>
            <span>Effective Date: {effective}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-x py-16 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-4xl bg-cream p-7 text-[16px] leading-relaxed text-ink-soft shadow-soft md:p-12">
            <div className="space-y-4">{intro}</div>
            <div className="mt-10 space-y-10">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-[22px] font-semibold leading-snug text-ink">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function LSub({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[16px] font-bold text-ink">{children}</h3>;
}

export function LP({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function LUL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[3px] flex-none">
            <Sprig className="h-[16px] w-[16px] text-sage" />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
