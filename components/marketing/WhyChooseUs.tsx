"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WHY_CARDS, IMAGES } from "@/lib/data";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
};

const ICONS = [
  // Licensed & Fully Insured — shield with check
  <svg key="shield" {...svg}>
    <path d="M12 3l7 2.6v5.1c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V5.6L12 3z" />
    <path d="M9 12l2 2 4-4.2" />
  </svg>,
  // Eco-Friendly Products — leaf
  <svg key="leaf" {...svg}>
    <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14" />
    <path d="M5 19c2.5-4 5.5-6.6 9-8.2" />
  </svg>,
  // Professionally Trained Staff — award medal
  <svg key="medal" {...svg}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9.2 9l1.8 1.8L14.6 7" />
    <path d="M8.5 14L7 21l5-2.6L17 21l-1.5-7" />
  </svg>,
  // Satisfaction, Guaranteed — seal with check
  <svg key="seal" {...svg}>
    <path d="M12 2.6l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-1 2.7 1 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.4l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6 1-2.7-1-2.7 2.3-1.6.9-2.7 2.8.2L12 2.6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
];

export default function WhyChooseUs() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = listRef.current?.querySelectorAll<HTMLElement>("[data-why-card]");
    if (!cards || cards.length === 0) return;

    // Respect reduced-motion: show everything immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((c) => c.classList.add("why-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("why-in");
            io.unobserve(e.target); // reveal once, one at a time as each scrolls in
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -18% 0px" },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-clay text-cream">
      {/* soft gold glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 15% 0%, rgba(201,168,76,0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-12 py-20 md:py-28 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Left — sticky intro + cleaner photo */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            Why Clients Choose Us
          </p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,46px)] font-semibold leading-[1.1] text-cream">
            Cleaning you can count on. Every single time.
          </h2>
          <p className="mt-5 font-display text-[20px] italic text-gold">
            We don&apos;t cut corners. We clean them.
          </p>
          <div className="relative mt-9 aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[2rem] ring-1 ring-cream/15 shadow-lift">
            <Image
              src={IMAGES.heroCleaner}
              alt="A Raya Elite cleaner in branded uniform"
              fill
              sizes="(max-width:1024px) 90vw, 400px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right — cards revealed one at a time on scroll */}
        <div ref={listRef} className="flex flex-col gap-6">
          {WHY_CARDS.map((c, i) => (
            <div
              key={c.title}
              data-why-card
              className="why-card flex items-start gap-5 rounded-3xl bg-cream p-8 text-ink shadow-lift"
            >
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-clay/[0.08] text-clay">
                {ICONS[i % ICONS.length]}
              </span>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
