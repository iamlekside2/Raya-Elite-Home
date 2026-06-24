"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WHY_CARDS } from "@/lib/data";

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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((c) => c.classList.add("why-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("why-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-clay-tint">
      <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left — sticky intro + a real "people cleaning" photo */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-clay">
            Why Clients Choose Us
          </p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,46px)] font-semibold leading-[1.1] text-ink">
            Cleaning you can count on. Every single time.
          </h2>
          <p className="mt-5 max-w-[440px] text-[16px] leading-relaxed text-ink-soft">
            Every Raya Elite clean is handled by trained, vetted professionals who
            treat your space like their own — so the result always speaks for itself.
          </p>
          <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
            <Image
              src="/images/cleaning-lady.jpeg"
              alt="A Raya Elite cleaner detailing a living room"
              fill
              sizes="(max-width:1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right — cards revealed one at a time on scroll */}
        <div ref={listRef} className="flex flex-col gap-8">
          {WHY_CARDS.map((c, i) => (
            <div
              key={c.title}
              data-why-card
              className="why-card rounded-[1.75rem] bg-cream p-8 shadow-lift md:p-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay text-cream">
                {ICONS[i % ICONS.length]}
              </span>
              <h3 className="mt-5 font-display text-[23px] font-semibold text-ink">
                {c.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
