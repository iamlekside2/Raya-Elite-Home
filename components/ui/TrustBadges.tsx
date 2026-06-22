import { TRUST_BADGES } from "@/lib/constants";
import Sprig from "@/components/ui/Sprig";

export default function TrustBadges({ py = "py-16" }: { py?: string }) {
  return (
    <section className="bg-sage-deep">
      <div className={`container-x flex flex-wrap items-center justify-center gap-3 ${py}`}>
        {TRUST_BADGES.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-[10px] text-[13px] font-semibold text-cream ring-1 ring-cream/15"
          >
            <Sprig className="h-[14px] w-[14px] text-gold" />
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
