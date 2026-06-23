import type { ReactElement } from "react";
import { TRUST_BADGES } from "@/lib/constants";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[15px] w-[15px]",
};

// A distinct, meaningful icon per credential.
const ICONS: Record<string, ReactElement> = {
  "Google 5-Star Rated": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
      <path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.6 9.3l5.8-.8z" />
    </svg>
  ),
  "Maryland Licensed": (
    <svg {...svg}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </svg>
  ),
  "Bonded & Insured": (
    <svg {...svg}>
      <path d="M12 3l7 2.6v5.1c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V5.6L12 3z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  ),
  "Eco-Friendly": (
    <svg {...svg}>
      <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14" />
      <path d="M5 19c2.5-4 5.5-6.6 9-8.2" />
    </svg>
  ),
  "Background-Checked Team": (
    <svg {...svg}>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4 20c0-3.3 2.7-6 6-6 1.1 0 2.2.3 3 .9" />
      <path d="M15.3 18.4l1.8 1.8 3.2-3.4" />
    </svg>
  ),
  "Satisfaction Guarantee": (
    <svg {...svg}>
      <path d="M12 2.6l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-1 2.7 1 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.4l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6 1-2.7-1-2.7 2.3-1.6.9-2.7 2.8.2L12 2.6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

const fallback = (
  <svg {...svg}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </svg>
);

export default function TrustBadges({ py = "py-16" }: { py?: string }) {
  return (
    <section className="relative overflow-hidden bg-clay">
      {/* soft gold glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 92% at 50% 0%, rgba(201,168,76,0.16), transparent 62%)",
        }}
      />
      <div
        className={`container-x relative flex flex-wrap items-center justify-center gap-3.5 ${py}`}
      >
        {TRUST_BADGES.map((b) => (
          <span
            key={b}
            className="group inline-flex items-center gap-2.5 rounded-full border border-cream/[0.14] bg-cream/[0.06] py-[7px] pl-[7px] pr-[18px] text-[13.5px] font-semibold text-cream shadow-[0_4px_16px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-gold/40 hover:bg-cream/[0.1] hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/[0.16] text-gold ring-1 ring-gold/30 transition-colors duration-300 group-hover:bg-gold group-hover:text-clay group-hover:ring-gold">
              {ICONS[b] ?? fallback}
            </span>
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
