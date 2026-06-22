"use client";

import { useState } from "react";
import { TESTIMONIALS, TEST_FILTERS } from "@/lib/data";

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.cat === filter);

  return (
    <section className="container-x py-[clamp(48px,6vw,80px)]">
      {/* Filters */}
      <div className="mb-11 flex flex-wrap justify-center gap-2">
        {TEST_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className="relative px-4 py-[10px] text-[13px] font-bold uppercase tracking-[1px] text-navy transition-colors hover:text-gold-text"
          >
            {f}
            {filter === f && <span className="absolute inset-x-3 bottom-[2px] h-[2px] bg-gold" />}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
        {list.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex flex-col border border-card-border bg-white px-[30px] py-8 transition-all duration-200 hover:border-gold hover:shadow-[0_14px_36px_rgba(0,33,71,0.1)]"
          >
            <div className="mb-[14px] flex items-center justify-between">
              <span className="text-[14px] tracking-[2px] text-gold">★★★★★</span>
              <span className="rounded-full bg-champagne px-3 py-[5px] text-[11px] font-bold tracking-[0.5px] text-navy">
                {t.cat}
              </span>
            </div>
            <p className="m-0 mb-[22px] flex-1 text-[15.5px] italic leading-[1.7] text-[#3a3a3a]">
              {t.quote}
            </p>
            <div className="flex items-center gap-[13px] border-t border-[#f0ece2] pt-[18px]">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-navy font-playfair text-[18px] font-bold text-gold">
                {t.initial}
              </div>
              <div>
                <div className="text-[14.5px] font-bold text-navy">{t.name}</div>
                <div className="text-[12.5px] text-[#8a8a8a]">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
