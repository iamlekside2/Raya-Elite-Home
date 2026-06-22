import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadges from "@/components/ui/TrustBadges";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
import QuoteModal from "@/components/ui/QuoteModal";
import Sprig from "@/components/ui/Sprig";
import {
  IMAGES,
  WHY_CARDS,
  SERVICES_PREVIEW,
  HOW_STEPS,
  HOME_REVIEWS,
  CLIENTS_SERVE,
  LOCATIONS,
} from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Raya Elite Cleaning | Luxury Home & Office Cleaning in Maryland & DC",
  description:
    "Professional home and office cleaning in Maryland and Washington DC. Bonded, insured, and trusted by homeowners, businesses, and government clients. Book online today.",
  alternates: { canonical: "/" },
};

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

      {/* SECTION 1 — HERO */}
      <section className="paper-grain relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-clay-tint/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sage-tint/50 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-rise">
            <div className="kicker mb-5">
              <Sprig className="h-4 w-4 text-sage" />
              Serving Maryland &amp; Washington D.C.
            </div>
            <h1 className="font-display text-[clamp(38px,5.6vw,64px)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              Maryland&apos;s Most Trusted{" "}
              <span className="underline-sketch text-clay">Luxury Cleaning</span> Service
            </h1>
            <p className="mt-6 max-w-[540px] text-[18px] leading-relaxed text-ink-soft">
              Your home or office reflects who you are. We make sure it always looks the part — with
              thorough, professional cleaning that respects your space, your time, and your standards.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/book" className="btn-clay px-8 py-4 text-[16px]">
                Book Your Cleaning
              </Link>
              <QuoteModal triggerLabel="Get a Free Quote" triggerClassName="btn-outline px-8 py-4 text-[16px]" />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] text-ink-soft">
              <span className="text-[17px] tracking-[2px] text-gold">★★★★★</span>
              <span className="font-semibold text-ink">500+ Satisfied Clients</span>
              <span className="h-1 w-1 rounded-full bg-clay" />
              <span>Bonded &amp; Insured</span>
              <span className="h-1 w-1 rounded-full bg-clay" />
              <span>Same-Day Response Guaranteed</span>
            </div>
          </div>

          {/* Cleaner photo in arched frame */}
          <div className="relative mx-auto w-full max-w-[460px] animate-rise">
            <div className="arch relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-sage-tint to-clay-tint shadow-lift">
              <Image
                src={IMAGES.heroCleaner}
                alt="Smiling Raya Elite cleaning professional in branded uniform"
                fill
                priority
                sizes="(max-width:1024px) 90vw, 460px"
                className="object-cover object-top"
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

      {/* SECTION 2 — WHY */}
      <section className="bg-cream">
        <div className="container-x grid gap-12 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              centered={false}
              eyebrow="Why Clients Choose Us"
              title={<>Cleaning you can count on. Every single time</>}
            />
            <p className="mt-5 font-display text-[20px] italic text-clay">
              We don&apos;t cut corners. We clean them.
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {WHY_CARDS.map((c, i) => (
              <div key={c.title} className="flex gap-4">
                <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-full ${tint[i % 2]}`}>
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

      {/* SECTION 3 — SERVICES PREVIEW */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="The right clean for every space"
            subtitle="We bring the same level of care and attention to every job — whether it's your family home, your office, or a property you're moving in or out of."
            className="mb-12"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {SERVICES_PREVIEW.map((s, i) => (
              <article
                key={s.title}
                className={`group flex flex-col overflow-hidden rounded-4xl bg-cream shadow-soft transition-transform duration-300 hover:-translate-y-2 ${
                  i === 1 ? "md:-translate-y-6" : ""
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[12px] font-bold text-clay">
                    {s.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[22px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
                  <Link href="/services" className="btn-link mt-5">
                    See Full Service Details <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline px-8 py-[14px] text-[15px]">
              View All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOCIAL PROOF */}
      <section className="bg-clay-tint/50">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            stars
            eyebrow="Client Reviews"
            title="What our clients say"
            subtitle="We let the work speak. Here's what Maryland and DC clients have said after experiencing the Raya Elite difference firsthand."
            className="mb-14"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {HOME_REVIEWS.slice(0, 3).map((r) => (
              <figure key={r.name} className="rounded-4xl bg-cream p-8 shadow-soft">
                <div className="font-display text-[48px] leading-[0.4] text-clay">“</div>
                <span className="mt-4 inline-block text-[14px] tracking-[2px] text-gold">★★★★★</span>
                <blockquote className="mt-3 text-[16px] italic leading-relaxed text-ink/80">{r.quote}</blockquote>
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
          <p className="mt-10 text-center text-[15px] font-semibold text-ink">
            <span className="tracking-[2px] text-gold">★★★★★</span> Rated 5.0 · Serving Maryland &amp;
            Washington DC
          </p>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="The Process"
          title="From first click to squeaky clean"
          subtitle="We've made booking as simple as possible. No back-and-forth. No uncertainty. Just a clean home or office, on your schedule."
          className="mb-16"
        />
        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-clay/30 md:block" />
          {HOW_STEPS.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-clay bg-paper font-display text-[28px] font-semibold text-clay">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-[21px] font-semibold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[300px] text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/book" className="btn-clay px-9 py-4 text-[16px]">
            Ready to Get Started? Book Your Cleaning
          </Link>
        </div>
      </section>

      {/* SECTION 6 — TRUST BADGES */}
      <section className="container-x pb-10 text-center">
        <SectionHeading eyebrow="Our Credentials" title="Trusted, verified, and accountable" />
      </section>
      <TrustBadges />

      {/* SECTION 7 — CLIENTS WE SERVE (picture cards) */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Built for homes and businesses that hold a higher standard"
          subtitle="From a single-family home in Bethesda to a government office in the District — our clients share one thing in common: they expect it done right."
          className="mb-14"
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {CLIENTS_SERVE.map((c) => (
            <article key={c.title} className="group flex flex-col overflow-hidden rounded-4xl border border-ink/10 bg-cream shadow-soft">
              <div className="relative h-48 overflow-hidden">
                <Image src={c.img} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-[21px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 8 — LOCATIONS WE COVER */}
      <section className="bg-sage-tint/50">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Service Areas"
            title="We serve Maryland & Washington DC"
            subtitle="Based in Maryland, we cover a wide reach across the metro area — from the suburbs to the District. If you're not sure whether we serve your area, just ask."
            className="mb-12"
          />
          <div className="mx-auto grid max-w-[920px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="flex items-center justify-center gap-2 rounded-2xl bg-cream px-4 py-4 text-center text-[14px] font-semibold text-ink shadow-soft"
              >
                <span className="h-[6px] w-[6px] flex-none rounded-full bg-clay" />
                {loc}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[15px] text-ink-soft">
              Don&apos;t see your area listed? We may still be able to help.
            </p>
            <Link href="/contact" className="btn-outline mt-5 px-8 py-[14px] text-[15px]">
              Check Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA BANNER */}
      <section className="container-x pb-24">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-clay px-8 py-14 text-cream md:grid-cols-[1.2fr_0.8fr] md:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cream/10" />
          <div className="relative">
            <h2 className="font-display text-[clamp(30px,4vw,46px)] font-semibold leading-tight">
              Ready for a spotless space?
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] text-cream/85">
              Book online in under two minutes. No payment required today. Our team will confirm your
              appointment the same day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book" className="btn-outline-light px-9 py-4 text-[16px]">
                Book Now
              </Link>
              <QuoteModal
                triggerLabel="Get a Free Quote"
                triggerClassName="rounded-full bg-cream/15 px-7 py-4 text-[16px] font-bold text-cream transition-colors hover:bg-cream/25"
              />
            </div>
            <p className="mt-5 text-[14px] text-cream/75">
              Prefer to talk first?{" "}
              <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="font-semibold underline underline-offset-2">
                Call us
              </a>
              .
            </p>
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
