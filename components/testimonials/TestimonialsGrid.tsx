"use client";

import { useState } from "react";
import { TESTIMONIALS, TEST_FILTERS } from "@/lib/data";

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.cat === filter);

  return (
    <section className="container-x py-20 md:py-24">
      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {TEST_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-[10px] text-[14px] font-semibold transition-colors ${
              filter === f
                ? "bg-clay text-cream"
                : "bg-cream text-ink-soft ring-1 ring-ink/10 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="flex flex-col rounded-4xl border border-ink/10 bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="text-[14px] tracking-[2px] text-gold">★★★★★</span>
              <span className="rounded-full bg-sage-tint px-3 py-1 text-[12px] font-bold text-sage-deep">
                {t.cat}
              </span>
            </div>
            <blockquote className="mt-5 flex-1 text-[16px] italic leading-relaxed text-ink/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-tint font-display text-[18px] font-semibold text-clay">
                {t.initial}
              </span>
              <span>
                <span className="block text-[15px] font-bold text-ink">{t.name}</span>
                <span className="block text-[13px] text-ink-soft">{t.location}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
