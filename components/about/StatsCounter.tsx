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

    // start when the band scrolls into view
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
    <section className="bg-navy">
      <div
        ref={ref}
        className="container-x grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 py-[clamp(48px,6vw,72px)] text-center"
      >
        {STAT_DEFS.map((s) => (
          <div key={s.label}>
            <div className="font-playfair text-[clamp(38px,5vw,56px)] font-bold leading-none text-gold">
              {(s.target * progress).toFixed(s.decimals)}
              {s.suffix}
            </div>
            <div className="mt-3 text-[13px] uppercase tracking-[1px] text-white/[0.78]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
