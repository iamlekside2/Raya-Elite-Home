import { TRUST_BADGES } from "@/lib/constants";

export default function TrustBadges({ py = "py-[54px]" }: { py?: string }) {
  return (
    <section className="bg-navy">
      <div className={`container-x flex flex-wrap justify-center gap-[14px] ${py}`}>
        {TRUST_BADGES.map((b) => (
          <span
            key={b}
            className="rounded-full bg-champagne px-[22px] py-[11px] text-[13px] font-bold text-navy"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
