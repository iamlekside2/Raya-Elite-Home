"use client";

import Image from "next/image";
import { useState } from "react";

// Placeholder video testimonials. Replace `embed` with real YouTube/Vimeo embed
// URLs when client footage is available. The iframe only loads on click — the
// poster image keeps initial load fast (performance optimization per the spec).
const VIDEOS = [
  {
    title: "The Thompson Family",
    poster: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=75&auto=format&fit=crop",
    embed: "",
  },
  {
    title: "Regional Bank — Bethesda",
    poster: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=75&auto=format&fit=crop",
    embed: "",
  },
  {
    title: "Move-Out, Rockville",
    poster: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=75&auto=format&fit=crop",
    embed: "",
  },
];

export default function VideoTestimonials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container-x pb-2 pt-[clamp(40px,5vw,64px)]">
      <h2 className="m-0 mb-8 text-center font-playfair text-[clamp(24px,3vw,34px)] font-bold text-navy">
        Hear It From Our Clients
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {VIDEOS.map((v, i) => (
          <div
            key={v.title}
            className="relative aspect-video overflow-hidden border border-card-border bg-navy-img"
          >
            {active === i && v.embed ? (
              <iframe
                src={v.embed}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Play testimonial: ${v.title}`}
                className="group absolute inset-0"
              >
                <Image src={v.poster} alt={v.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/30" />
                <span className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-[22px] text-navy shadow-lg">
                  ▶
                </span>
                <span className="absolute bottom-3 left-4 font-playfair text-[16px] font-bold text-white drop-shadow">
                  {v.title}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
