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

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[86vh] items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <Image
          src={IMAGES.heroTeam}
          alt="The Raya Elite cleaning team in branded uniforms inside a bright home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_22%]"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="pointer-events-none absolute -right-[60px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rotate-45 border border-gold/[0.18]" />
        <div className="container-x relative py-20">
          <div className="max-w-[660px] animate-fadeUp">
            <div className="mb-[30px] inline-flex items-center gap-[11px] rounded-full border border-gold/50 px-[18px] py-2">
              <span className="diamond h-[7px] w-[7px]" />
              <span className="text-[11px] uppercase tracking-[2.5px] text-champagne">
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
              <Link href="/book" className="btn-gold min-h-[54px] px-[34px] py-[17px] text-[15px]">
                Book Your Cleaning
              </Link>
              <QuoteModal
                triggerLabel="Get a Free Quote"
                triggerClassName="btn-outline-light min-h-[54px] px-8 py-[15px] text-[15px]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-[18px] border-t border-white/10 pt-[30px]">
              <span className="text-[18px] tracking-[3px] text-gold">★★★★★</span>
              <span className="text-[14px] text-white/90">500+ Satisfied Clients</span>
              <span className="text-gold/50">·</span>
              <span className="text-[14px] text-white/90">Bonded &amp; Insured</span>
              <span className="text-gold/50">·</span>
              <span className="text-[14px] text-white/90">Same-Day Response Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="Why Clients Choose Us"
          flankEyebrow
          title="Cleaning You Can Count On. Every Single Time"
          subtitle="We don't cut corners. We clean them."
          className="mb-14"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="border-t-4 border-gold bg-white px-[30px] py-[36px] shadow-card transition-all duration-300 hover:-translate-y-[6px] hover:shadow-card-hover"
            >
              <div className="mb-[22px] flex h-12 w-12 items-center justify-center border-[1.5px] border-gold">
                <span className="diamond h-[14px] w-[14px]" />
              </div>
              <h3 className="m-0 mb-3 text-[19px] font-black text-navy">{c.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-[#5a5a5a]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — SERVICES PREVIEW */}
      <section className="border-y border-[#eee] bg-white">
        <div className="container-x py-[clamp(64px,8vw,104px)]">
          <SectionHeading
            eyebrow="What We Do"
            flankEyebrow
            title="The Right Clean for Every Space"
            subtitle="We bring the same level of care and attention to every job — whether it's your family home, your office, or a property you're moving in or out of."
            className="mb-14"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[26px]">
            {SERVICES_PREVIEW.map((s) => (
              <div
                key={s.title}
                className="flex flex-col overflow-hidden border border-card-border bg-pearl transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,33,71,0.12)]"
              >
                <div className="relative h-[200px] overflow-hidden bg-navy-img">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,21,46,0.35)]" />
                </div>
                <div className="flex flex-1 flex-col p-[30px]">
                  <div className="mb-[10px] text-[12px] font-bold uppercase tracking-[1.5px] text-gold-text">
                    {s.price}
                  </div>
                  <h3 className="m-0 mb-3 font-playfair text-[23px] font-bold text-navy">{s.title}</h3>
                  <p className="m-0 mb-[22px] flex-1 text-[14.5px] leading-[1.65] text-[#5a5a5a]">{s.desc}</p>
                  <Link href="/services" className="btn-link self-start">
                    See Full Service Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[44px] text-center">
            <Link href="/services" className="btn-outline-navy px-8 py-[14px] text-[14px] uppercase tracking-wider">
              View All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOCIAL PROOF */}
      <section className="bg-gradient-to-b from-champagne to-champagne-alt">
        <div className="container-x py-[clamp(64px,8vw,104px)]">
          <SectionHeading
            stars
            title="What Our Clients Say"
            subtitle="We let the work speak. Here's what Maryland and DC clients have said after experiencing the Raya Elite difference firsthand."
            className="mb-[54px]"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {HOME_REVIEWS.slice(0, 3).map((r) => (
              <div key={r.name} className="relative bg-white px-[30px] py-[34px] shadow-card">
                <div className="h-[30px] font-playfair text-[56px] leading-[0.6] text-gold">“</div>
                <span className="text-[14px] tracking-[2px] text-gold">★★★★★</span>
                <p className="my-[14px] mb-[22px] text-[15.5px] italic leading-[1.7] text-[#3a3a3a]">{r.quote}</p>
                <div className="flex items-center gap-[13px] border-t border-[#eee] pt-[18px]">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-navy font-playfair text-[18px] font-bold text-gold">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-navy">{r.name}</div>
                    <div className="text-[12.5px] text-[#8a8a8a]">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BirdeyeWidget />
          <p className="mt-10 text-center text-[15px] font-bold text-navy">
            <span className="tracking-[2px] text-gold">★★★★★</span> Rated 5.0 · Serving Maryland &amp;
            Washington DC
          </p>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="The Process"
          flankEyebrow
          title="From First Click to Squeaky Clean"
          subtitle="We've made booking as simple as possible. No back-and-forth. No uncertainty. Just a clean home or office, on your schedule."
          className="mb-[58px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[30px]">
          {HOW_STEPS.map((s) => (
            <div key={s.n} className="px-3 text-center">
              <div className="mx-auto mb-6 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-navy font-playfair text-[30px] font-bold text-gold">
                {s.n}
              </div>
              <h3 className="m-0 mb-3 text-[19px] font-black text-navy">{s.title}</h3>
              <p className="mx-auto m-0 max-w-[300px] text-[14.5px] leading-[1.65] text-[#5a5a5a]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-[50px] text-center">
          <Link href="/book" className="btn-primary min-h-[54px] px-10 py-[17px] text-[15px]">
            Ready to Get Started? Book Your Cleaning
          </Link>
        </div>
      </section>

      {/* SECTION 6 — TRUST BADGES */}
      <section className="bg-pearl pb-2 pt-[clamp(40px,5vw,64px)]">
        <SectionHeading eyebrow="Our Credentials" flankEyebrow title="Trusted, Verified, and Accountable" />
      </section>
      <TrustBadges />

      {/* SECTION 7 — CLIENTS WE SERVE (picture cards) */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="Who We Work With"
          flankEyebrow
          title="Built for Homes and Businesses That Hold a Higher Standard"
          subtitle="From a single-family home in Bethesda to a government office in the District — our clients share one thing in common: they expect it done right."
          className="mb-14"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[26px]">
          {CLIENTS_SERVE.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden border border-card-border bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="relative h-[190px] overflow-hidden bg-navy-img">
                <Image src={c.img} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,21,46,0.35)]" />
              </div>
              <div className="flex flex-1 flex-col p-[28px]">
                <h3 className="m-0 mb-3 font-playfair text-[21px] font-bold text-navy">{c.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.65] text-[#5a5a5a]">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 8 — LOCATIONS WE COVER */}
      <section className="bg-pearl">
        <div className="container-x py-[clamp(64px,8vw,104px)]">
          <SectionHeading
            eyebrow="Service Areas"
            flankEyebrow
            title="We Serve Maryland & Washington DC"
            subtitle="Based in Maryland, we cover a wide reach across the metro area — from the suburbs to the District. If you're not sure whether we serve your area, just ask."
            className="mb-12"
          />
          <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-5">
            {LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="flex items-center justify-center gap-2 border border-card-border bg-white px-4 py-4 text-center text-[14px] font-bold text-navy"
              >
                <span className="diamond h-[8px] w-[8px] flex-none" />
                {loc}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="m-0 mb-5 text-[15px] text-[#5a5a5a]">
              Don&apos;t see your area listed? We may still be able to help.
            </p>
            <Link href="/contact" className="btn-outline-navy px-8 py-[14px] text-[14px] uppercase tracking-wider">
              Check Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <Image src={IMAGES.ctaKitchen} alt="Spotless bright kitchen cleaned by Raya Elite" fill sizes="100vw" className="object-cover" />
        <div className="overlay-cta absolute inset-0" />
        <div className="pointer-events-none absolute -bottom-20 -left-[50px] h-[320px] w-[320px] rotate-45 border border-gold/[0.18]" />
        <div className="relative mx-auto max-w-[900px] px-6 py-[clamp(60px,8vw,96px)] text-center">
          <h2 className="m-0 mb-4 font-playfair text-[clamp(30px,4vw,46px)] font-bold text-white">
            Ready For A Spotless Space?
          </h2>
          <p className="m-0 mb-[34px] text-[17px] text-white/80">
            Book online in under two minutes. No payment required today. Our team will confirm your
            appointment the same day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/book" className="btn-gold min-h-[56px] px-11 py-[18px] text-[16px]">
              Book Now
            </Link>
            <QuoteModal
              triggerLabel="Get a Free Quote"
              triggerClassName="btn-outline-light min-h-[56px] px-9 py-[16px] text-[16px]"
            />
          </div>
          <p className="m-0 mt-5 text-[14px] text-white/75">
            Prefer to talk first?{" "}
            <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="font-bold text-gold underline underline-offset-2">
              Call us
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
