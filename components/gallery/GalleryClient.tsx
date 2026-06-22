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
      <section className="container-x py-[clamp(44px,5.5vw,72px)]">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="relative px-[14px] py-[10px] text-[12.5px] font-bold uppercase tracking-[1px] text-navy transition-colors hover:text-gold-text"
            >
              {f}
              {filter === f && (
                <span className="absolute inset-x-[10px] bottom-[2px] h-[2px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
          {list.map((g, i) => (
            <button
              key={`${g.title}-${i}`}
              type="button"
              onClick={() => open(i)}
              className="group relative block h-[240px] overflow-hidden bg-navy-img transition-opacity hover:opacity-95"
            >
              <Image src={g.img} alt={g.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              <span className="absolute left-[14px] top-[14px] whitespace-nowrap bg-gold/95 px-[11px] py-[5px] text-[10.5px] font-bold uppercase tracking-[0.5px] text-navy">
                {g.tag}
              </span>
              <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-[rgba(0,15,32,0.78)] p-[18px]">
                <div className="text-left">
                  <div className="font-playfair text-[18px] font-bold text-white">{g.title}</div>
                  <div className="mt-[3px] text-[12px] text-champagne/75">{g.cat}</div>
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
          className="fixed inset-0 z-[100] flex animate-fadeIn items-center justify-center bg-[rgba(0,15,32,0.92)] p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-7 top-6 text-[34px] leading-none text-white"
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
            className="absolute left-6 top-1/2 h-[52px] w-[52px] -translate-y-1/2 border border-gold/50 bg-white/10 text-[24px] text-gold"
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
            className="absolute right-6 top-1/2 h-[52px] w-[52px] -translate-y-1/2 border border-gold/50 bg-white/10 text-[24px] text-gold"
          >
            ›
          </button>

          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[900px]">
            {!isBA ? (
              <div className="relative h-[min(70vh,560px)] overflow-hidden border-[6px] border-white bg-navy-img shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                <Image src={item.img} alt={item.title} fill sizes="900px" className="object-cover" />
                <span className="absolute left-[18px] top-[18px] bg-gold/95 px-[13px] py-[6px] text-[11px] font-bold uppercase tracking-[0.5px] text-navy">
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
                className="relative h-[min(70vh,560px)] touch-none select-none overflow-hidden border-[6px] border-white bg-navy-img shadow-[0_24px_70px_rgba(0,0,0,0.5)] [cursor:ew-resize]"
              >
                {/* AFTER (full color) */}
                <Image
                  src={item.img}
                  alt={`${item.title} after`}
                  fill
                  sizes="900px"
                  className="pointer-events-none object-cover"
                />
                <span className="pointer-events-none absolute right-4 top-4 bg-gold/95 px-[13px] py-[6px] text-[11px] font-bold tracking-[1px] text-navy">
                  AFTER
                </span>
                {/* BEFORE (graded) clipped */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - baPos}% 0 0)` }}
                >
                  <Image
                    src={item.img}
                    alt={`${item.title} before`}
                    fill
                    sizes="900px"
                    className="pointer-events-none object-cover [filter:grayscale(0.55)_brightness(0.62)_sepia(0.45)_contrast(0.92)]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(40,33,20,0.35)] to-[rgba(0,0,0,0.25)]" />
                  <span className="pointer-events-none absolute left-4 top-4 bg-white/85 px-[13px] py-[6px] text-[11px] font-bold tracking-[1px] text-[#241f17]">
                    BEFORE
                  </span>
                </div>
                {/* Handle */}
                <div
                  className="pointer-events-none absolute bottom-0 top-0 w-[3px] -translate-x-[1.5px] bg-white shadow-[0_0_14px_rgba(0,0,0,0.4)]"
                  style={{ left: `${baPos}%` }}
                />
                <div
                  className="pointer-events-none absolute top-1/2 flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[18px] text-navy shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                  style={{ left: `${baPos}%` }}
                >
                  ↔
                </div>
              </div>
            )}
            <div className="mt-[18px] text-center">
              <div className="font-playfair text-[22px] font-bold text-white">{item.title}</div>
              <div className="mt-[5px] text-[13px] text-champagne/70">{item.cat}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
