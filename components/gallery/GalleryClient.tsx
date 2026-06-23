"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { GALLERY, GALLERY_FILTERS, type GalleryItem } from "@/lib/data";

export default function GalleryClient() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [baPos, setBaPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const list: GalleryItem[] =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  const item = lightbox === null ? null : list[lightbox];
  const isBA = !!(item && item.tag === "Before / After");

  const open = (i: number) => {
    setLightbox(i);
    setBaPos(50);
  };
  const close = () => setLightbox(null);
  const step = (dir: number) =>
    setLightbox((cur) => {
      if (cur === null) return cur;
      setBaPos(50);
      return (cur + dir + list.length) % list.length;
    });

  const updateBA = useCallback((e: React.PointerEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    let p = ((e.clientX - r.left) / r.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setBaPos(p);
  }, []);

  return (
    <>
      {/* Filters */}
      <section className="container-x py-16 md:py-20">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-[10px] text-[13px] font-semibold transition-colors ${
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {list.map((g, i) => (
            <button
              key={`${g.title}-${i}`}
              type="button"
              onClick={() => open(i)}
              className="group relative block h-[260px] overflow-hidden rounded-3xl bg-sage-deep"
            >
              <Image
                src={g.img}
                alt={g.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-clay">
                {g.tag}
              </span>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-transparent to-transparent p-5">
                <div className="text-left">
                  <div className="font-display text-[18px] font-semibold text-cream">{g.title}</div>
                  <div className="mt-[2px] text-[12px] text-cream/75">{g.cat}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {item && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] flex animate-fadeIn items-center justify-center bg-ink/90 p-6"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-5 text-[36px] leading-none text-cream"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-[24px] text-cream ring-1 ring-cream/30 hover:bg-cream/20"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-[24px] text-cream ring-1 ring-cream/30 hover:bg-cream/20"
          >
            ›
          </button>

          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[900px]">
            {!isBA ? (
              <div className="relative h-[min(70vh,560px)] overflow-hidden rounded-3xl border-[6px] border-cream bg-sage-deep shadow-lift">
                <Image src={item.img} alt={item.title} fill sizes="900px" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-clay">
                  {item.tag}
                </span>
              </div>
            ) : (
              <div
                onPointerDown={(e) => {
                  setDragging(true);
                  updateBA(e);
                }}
                onPointerMove={(e) => dragging && updateBA(e)}
                onPointerUp={() => setDragging(false)}
                onPointerLeave={() => setDragging(false)}
                className="relative h-[min(70vh,560px)] touch-none select-none overflow-hidden rounded-3xl border-[6px] border-cream bg-sage-deep shadow-lift [cursor:ew-resize]"
              >
                {/* AFTER (full color) */}
                <Image
                  src={item.img}
                  alt={`${item.title} after`}
                  fill
                  sizes="900px"
                  className="pointer-events-none object-cover"
                />
                <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-clay px-3 py-1 text-[11px] font-bold tracking-wider text-cream">
                  AFTER
                </span>
                {/* BEFORE (graded) clipped */}
                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - baPos}% 0 0)` }}>
                  <Image
                    src={item.img}
                    alt={`${item.title} before`}
                    fill
                    sizes="900px"
                    className="pointer-events-none object-cover [filter:grayscale(0.55)_brightness(0.62)_sepia(0.45)_contrast(0.92)]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(40,33,20,0.35)] to-[rgba(0,0,0,0.25)]" />
                  <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[11px] font-bold tracking-wider text-ink">
                    BEFORE
                  </span>
                </div>
                {/* Handle */}
                <div
                  className="pointer-events-none absolute bottom-0 top-0 w-[3px] -translate-x-[1.5px] bg-cream shadow-[0_0_14px_rgba(0,0,0,0.4)]"
                  style={{ left: `${baPos}%` }}
                />
                <div
                  className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-[18px] text-clay shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                  style={{ left: `${baPos}%` }}
                >
                  ↔
                </div>
              </div>
            )}
            <div className="mt-5 text-center">
              <div className="font-display text-[22px] font-semibold text-cream">{item.title}</div>
              <div className="mt-1 text-[13px] text-cream/70">{item.cat}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
