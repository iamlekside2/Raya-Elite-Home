import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadges from "@/components/ui/TrustBadges";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
import Sprig from "@/components/ui/Sprig";
import {
  IMAGES,
  WHY_CARDS,
  SERVICES_PREVIEW,
  HOW_STEPS,
  HOME_REVIEWS,
  CLIENTS_SERVE,
} from "@/lib/data";
import { SITE } from "@/lib/constants";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  name: SITE.name,
  url: SITE.url,
  telephone: "+1-240-555-0147",
  email: SITE.email,
  address: { "@type": "PostalAddress", addressRegion: "MD", addressCountry: "US" },
  areaServed: ["Maryland", "Washington DC"],
  priceRange: "$$–$$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "500" },
};

const tint = ["bg-clay-tint text-clay", "bg-sage-tint text-sage-deep"];

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO — asymmetric, paper background (no dark photo overlay) */}
      <section className="paper-grain relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-clay-tint/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sage-tint/50 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="kicker mb-5">
              <Sprig className="h-4 w-4 text-sage" />
              Serving Maryland &amp; Washington D.C.
            </div>
            <h1 className="font-display text-[clamp(40px,6vw,68px)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink">
              A home that feels{" "}
              <span className="underline-sketch text-clay">cared for</span>, every time.
            </h1>
            <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed text-ink-soft">
              Premium residential and commercial cleaning for discerning clients across Maryland and
              Washington D.C. An elite standard, every single time.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/book" className="btn-clay px-8 py-4 text-[16px]">
                Book Your Cleaning
              </Link>
              <Link href="/contact" className="btn-outline px-8 py-4 text-[16px]">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-ink-soft">
              <span className="text-[17px] tracking-[2px] text-gold">★★★★★</span>
              <span className="font-semibold text-ink">500+ Happy Clients</span>
              <span className="h-1 w-1 rounded-full bg-clay" />
              <span>Bonded &amp; Insured</span>
              <span className="h-1 w-1 rounded-full bg-clay" />
              <span>Same-Day Response</span>
            </div>
          </div>

          {/* Arched hero photo with floating chips */}
          <div className="relative mx-auto w-full max-w-[460px] animate-rise">
            <div className="arch relative aspect-[4/5] overflow-hidden shadow-lift">
              <Image
                src={IMAGES.hero}
                alt="Spotless luxury living room cleaned by Raya Elite"
                fill
                priority
                sizes="(max-width:1024px) 90vw, 460px"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 shadow-soft">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                <Sprig className="h-5 w-5" />
              </span>
              <span className="text-[13px] font-bold leading-tight text-ink">
                Eco-friendly
                <br />
                products
              </span>
            </div>
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-cream px-5 py-3 text-center shadow-soft">
              <div className="font-display text-[24px] font-semibold text-clay">5.0</div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
                Google rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY — heading left, 2x2 feature rows */}
      <section className="bg-cream">
        <div className="container-x grid gap-12 py-20 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              centered={false}
              eyebrow="Why Raya Elite"
              title="The difference is in the detail"
            />
            <p className="mt-5 max-w-[360px] text-[16px] leading-relaxed text-ink-soft">
              Vetted, uniformed professionals using safe products and an obsessive checklist — so
              every visit lands the same, elevated standard.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {WHY_CARDS.map((c, i) => (
              <div key={c.title} className="flex gap-4">
                <span
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full ${tint[i % 2]}`}
                >
                  <Sprig className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW — arched-top cards, middle raised */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              centered={false}
              eyebrow="Our Services"
              title={<>Cleaning tailored<br className="hidden sm:block" /> to your space</>}
            />
            <Link href="/services" className="btn-link">
              View all services <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {SERVICES_PREVIEW.map((s, i) => (
              <article
                key={s.title}
                className={`group overflow-hidden rounded-4xl bg-cream shadow-soft transition-transform duration-300 hover:-translate-y-2 ${
                  i === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[12px] font-bold text-clay">
                    {s.price}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-[22px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
                  <Link href="/services" className="btn-link mt-5">
                    Learn more <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — connected steps */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading eyebrow="How It Works" title="Spotless in three simple steps" className="mb-16" />
        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-clay/30 md:block" />
          {HOW_STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-clay bg-paper font-display text-[28px] font-semibold text-clay">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-[21px] font-semibold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[280px] text-[15px] leading-relaxed text-ink-soft">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/book" className="btn-clay px-9 py-4 text-[16px]">
            Start Today
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-clay-tint/50">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            stars
            eyebrow="Kind Words"
            title="What our clients say"
            subtitle="5.0 average rating across 500+ verified reviews"
            className="mb-14"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {HOME_REVIEWS.slice(0, 3).map((r) => (
              <figure key={r.name} className="rounded-4xl bg-cream p-8 shadow-soft">
                <div className="font-display text-[48px] leading-[0.4] text-clay">“</div>
                <span className="mt-4 inline-block text-[14px] tracking-[2px] text-gold">★★★★★</span>
                <blockquote className="mt-3 text-[16px] italic leading-relaxed text-ink/80">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-tint font-display text-[18px] font-semibold text-sage-deep">
                    {r.initial}
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-ink">{r.name}</span>
                    <span className="block text-[13px] text-ink-soft">{r.location}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <BirdeyeWidget />
          <div className="mt-12 text-center">
            <Link href="/testimonials" className="btn-outline px-8 py-[14px] text-[15px]">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* CLIENTS WE SERVE */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading eyebrow="Who We Serve" title="Trusted across the DMV" className="mb-14" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS_SERVE.map((c, i) => (
            <div
              key={c}
              className="flex items-center gap-4 rounded-3xl border border-ink/10 bg-cream px-6 py-5 transition-colors hover:border-clay/40"
            >
              <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-full ${tint[i % 2]}`}>
                <Sprig className="h-5 w-5" />
              </span>
              <span className="text-[16px] font-semibold text-ink">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — arched image inside a clay block */}
      <section className="container-x pb-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-clay px-8 py-14 text-cream md:grid-cols-[1.2fr_0.8fr] md:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cream/10" />
          <div className="relative">
            <h2 className="font-display text-[clamp(30px,4vw,46px)] font-semibold leading-tight">
              Ready for a spotless space?
            </h2>
            <p className="mt-4 max-w-[460px] text-[17px] text-cream/85">
              Book online in under two minutes. No payment required today.
            </p>
            <Link href="/book" className="btn-outline-light mt-8 px-9 py-4 text-[16px]">
              Book Now
            </Link>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[280px] md:block">
            <div className="arch-sm relative aspect-[3/4] overflow-hidden shadow-lift">
              <Image src={IMAGES.ctaKitchen} alt="Spotless bright kitchen cleaned by Raya Elite" fill sizes="280px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
