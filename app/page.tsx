import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadges from "@/components/ui/TrustBadges";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
import QuoteModal from "@/components/ui/QuoteModal";
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

// One distinct gold-style icon per "Why" card (build guide: "each card has gold icon").
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
};
const WHY_ICONS = [
  // Licensed & Fully Insured — shield with check
  <svg key="shield" {...iconProps}>
    <path d="M12 3l7 2.6v5.1c0 4.3-2.9 7.4-7 8.8-4.1-1.4-7-4.5-7-8.8V5.6L12 3z" />
    <path d="M9 12l2 2 4-4.2" />
  </svg>,
  // Eco-Friendly Products — leaf
  <svg key="leaf" {...iconProps}>
    <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14" />
    <path d="M5 19c2.5-4 5.5-6.6 9-8.2" />
  </svg>,
  // Professionally Trained Staff — award medal
  <svg key="medal" {...iconProps}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9.2 9l1.8 1.8L14.6 7" />
    <path d="M8.5 14L7 21l5-2.6L17 21l-1.5-7" />
  </svg>,
  // Satisfaction, Guaranteed — seal with check
  <svg key="seal" {...iconProps}>
    <path d="M12 2.6l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-1 2.7 1 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.4l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6 1-2.7-1-2.7 2.3-1.6.9-2.7 2.8.2L12 2.6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
];

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* SECTION 1 — HERO (navy/gold, ported from the first design) */}
      <section
        className="relative flex min-h-[86vh] items-center overflow-hidden"
        style={{ background: "linear-gradient(130deg,#00152e 0%,#002147 48%,#0a3262 100%)" }}
      >
        <Image
          src={IMAGES.heroTeam}
          alt="The Raya Elite cleaning team in branded uniforms inside a bright home"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[60%_22%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 30%, rgba(201,168,76,0.12), transparent 52%), linear-gradient(90deg, rgba(0,16,34,0.82) 0%, rgba(0,22,46,0.58) 38%, rgba(0,33,71,0.18) 70%, rgba(0,33,71,0) 100%)",
          }}
        />
        <div className="container-x relative py-20">
          <div className="max-w-[660px] animate-rise">
            <div className="mb-[30px] inline-flex items-center gap-[11px] rounded-full border border-[#C9A84C]/50 px-[18px] py-2">
              <span className="inline-block h-[7px] w-[7px] rotate-45 bg-[#C9A84C]" />
              <span className="text-[11px] uppercase tracking-[2.5px] text-[#F5E6CA]">
                Serving Maryland &amp; Washington D.C.
              </span>
            </div>
            <h1 className="m-0 mb-6 font-playfair text-[clamp(38px,5.4vw,62px)] font-bold leading-[1.07] text-white">
              Maryland&apos;s Most Trusted Luxury Cleaning Service
            </h1>
            <p className="m-0 mb-[38px] max-w-[580px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-white/[0.85]">
              Your home or office reflects who you are. We make sure it always looks the part — with
              thorough, professional cleaning that respects your space, your time, and your standards.
            </p>
            <div className="mb-[46px] flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C9A84C] px-[34px] py-[17px] text-[15px] font-bold text-[#002147] transition-colors hover:bg-white"
              >
                Book Your Cleaning
              </Link>
              <QuoteModal
                triggerLabel="Get a Free Quote"
                triggerClassName="inline-flex min-h-[54px] items-center justify-center rounded-full border-2 border-white/60 px-8 py-[15px] text-[15px] font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-[#002147]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-[18px] border-t border-white/10 pt-[30px]">
              <span className="text-[18px] tracking-[3px] text-[#C9A84C]">★★★★★</span>
              <span className="text-[14px] text-white/90">500+ Satisfied Clients</span>
              <span className="text-[#C9A84C]/50">·</span>
              <span className="text-[14px] text-white/90">Bonded &amp; Insured</span>
              <span className="text-[#C9A84C]/50">·</span>
              <span className="text-[14px] text-white/90">Same-Day Response Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY */}
      <section className="bg-cream">
        <div className="container-x grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Why Clients Choose Us"
              title={<>Cleaning you can count on. Every single time</>}
            />
            <p className="mt-5 font-display text-[20px] italic text-clay">
              We don&apos;t cut corners. We clean them.
            </p>
            <div className="relative mt-9 aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2rem] bg-sage-tint/40 shadow-lift">
              <Image
                src={IMAGES.heroCleaner}
                alt="A trained Raya Elite cleaner in branded uniform"
                fill
                sizes="(max-width:1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="grid content-start gap-6 sm:grid-cols-2">
            {WHY_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="group rounded-3xl border border-ink/[0.08] bg-paper p-7 shadow-soft transition-all duration-300 hover:-translate-y-[6px] hover:shadow-lift"
              >
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${tint[i % 2]}`}>
                  {WHY_ICONS[i % WHY_ICONS.length]}
                </span>
                <h3 className="font-display text-[19px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.desc}</p>
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
