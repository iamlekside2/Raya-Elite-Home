"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <section className="bg-cream">
      <div className="container-x py-20 md:py-24">
        <SectionHeading eyebrow="On Camera" title="Hear it from our clients" className="mb-12" />
        <div className="grid gap-7 md:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <div
              key={v.title}
              className="relative aspect-video overflow-hidden rounded-4xl bg-sage-deep shadow-soft"
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
                  <div className="absolute inset-0 bg-ink/35 transition-colors group-hover:bg-ink/25" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clay pl-1 text-[22px] text-cream shadow-lg transition-transform group-hover:scale-110">
                    ▶
                  </span>
                  <span className="absolute bottom-4 left-5 font-display text-[17px] font-semibold text-cream drop-shadow">
                    {v.title}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
