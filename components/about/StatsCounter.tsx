"use client";

import { useEffect, useRef, useState } from "react";
import { STAT_DEFS } from "@/lib/data";

export default function StatsCounter() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const dur = 1500;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <section className="container-x py-8">
      <div
        ref={ref}
        className="grid gap-px overflow-hidden rounded-[2.5rem] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STAT_DEFS.map((s) => (
          <div key={s.label} className="bg-clay px-6 py-12 text-center text-cream">
            <div className="font-display text-[clamp(38px,5vw,56px)] font-semibold leading-none">
              {(s.target * progress).toFixed(s.decimals)}
              {s.suffix}
            </div>
            <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-cream/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
