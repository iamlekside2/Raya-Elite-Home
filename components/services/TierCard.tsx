import Link from "next/link";
import Sprig from "@/components/ui/Sprig";
import { SITE } from "@/lib/constants";
import type { ServiceTier } from "@/lib/data";

/* One package = one bordered card: name + badge, ideal-for, inclusions,
   an indicative price range, and a clear enquire/book CTA. */
export default function TierCard({
  tier,
  accent,
}: {
  tier: ServiceTier;
  accent: "navy" | "sage";
}) {
  const inclusions = tier.includes.split(/,\s*(?![^()]*\))/).map((s) => s.trim());
  const tel = `tel:${SITE.phone.replace(/[^0-9]/g, "")}`;
  return (
    <article className="overflow-hidden rounded-4xl border border-ink/10 bg-cream shadow-soft">
      <div className="p-7 md:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-[24px] font-semibold leading-tight text-ink">
            {tier.name}
          </h3>
          {tier.badge && (
            <span className="rounded-full bg-clay px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-cream">
              {tier.badge}
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          <span className="font-bold text-ink">Ideal for:</span> {tier.idealFor}
        </p>

        <div className="mb-2 mt-6 text-[12px] font-bold uppercase tracking-wider text-ink/70">
          What&apos;s included
        </div>
        <div className="grid gap-x-7 gap-y-[9px] sm:grid-cols-2">
          {inclusions.map((it) => (
            <div key={it} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
              <Sprig className="mt-[3px] h-[17px] w-[17px] flex-none text-sage" />
              <span>{it}</span>
            </div>
          ))}
        </div>

        {/* Price range + CTA */}
        <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-ink/10 bg-paper-2 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
              Investment
            </div>
            <div className="mt-1.5 font-display text-[30px] font-semibold leading-none text-ink">
              {tier.range}
            </div>
            <div className="mt-2 max-w-[320px] text-[13px] leading-relaxed text-ink-soft">
              {tier.rangeNote}
            </div>
          </div>
          <div className="flex flex-none flex-col gap-2 sm:items-end">
            <Link
              href={tier.ctaHref}
              className={`${accent === "navy" ? "btn-gold" : "btn-clay"} px-8 py-[14px] text-[15px]`}
            >
              {tier.cta}
            </Link>
            <a href={tel} className="text-[13px] font-semibold text-clay hover:underline">
              or call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
