import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadges from "@/components/ui/TrustBadges";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
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

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <Image
          src={IMAGES.hero}
          alt="Spotless luxury living room cleaned by Raya Elite"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="pointer-events-none absolute -right-[60px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rotate-45 border border-gold/[0.18]" />
        <div className="container-x relative py-20">
          <div className="max-w-[700px] animate-fadeUp">
            <div className="mb-[30px] inline-flex items-center gap-[11px] rounded-full border border-gold/50 px-[18px] py-2">
              <span className="diamond h-[7px] w-[7px]" />
              <span className="text-[11px] uppercase tracking-[2.5px] text-champagne">
                Serving Maryland &amp; Washington D.C.
              </span>
            </div>
            <h1 className="m-0 mb-6 font-playfair text-[clamp(38px,5.4vw,62px)] font-bold leading-[1.07] text-white">
              Maryland&apos;s Most Trusted Luxury Cleaning Service
            </h1>
            <p className="m-0 mb-[38px] max-w-[580px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-white/[0.82]">
              Premium residential and commercial cleaning for discerning clients across Maryland and
              Washington D.C. An elite standard, every single time.
            </p>
            <div className="mb-[46px] flex flex-wrap gap-4">
              <Link href="/book" className="btn-gold min-h-[54px] px-[34px] py-[17px] text-[15px]">
                Book Your Cleaning
              </Link>
              <Link
                href="/contact"
                className="btn-outline-light min-h-[54px] px-8 py-[15px] text-[15px]"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-[18px] border-t border-white/10 pt-[30px]">
              <span className="text-[18px] tracking-[3px] text-gold">★★★★★</span>
              <span className="text-[14px] text-white/90">500+ Happy Clients</span>
              <span className="text-gold/50">/</span>
              <span className="text-[14px] text-white/90">Bonded &amp; Insured</span>
              <span className="text-gold/50">/</span>
              <span className="text-[14px] text-white/90">Same-Day Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="Why Raya Elite"
          flankEyebrow
          title="The Difference Is In The Detail"
          className="mb-14"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6">
          {WHY_CARDS.map((c) => (
            <div
              key={c.title}
              className="border-t-4 border-gold bg-white px-[30px] py-[38px] shadow-card transition-all duration-300 hover:-translate-y-[6px] hover:shadow-card-hover"
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

      {/* SERVICES PREVIEW */}
      <section className="border-y border-[#eee] bg-white">
        <div className="container-x py-[clamp(64px,8vw,104px)]">
          <div className="mb-[50px] flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="mb-[14px] inline-flex items-center gap-[9px]">
                <span className="diamond h-[7px] w-[7px]" />
                <span className="eyebrow">Our Services</span>
              </div>
              <h2 className="m-0 max-w-[520px] font-playfair text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.12] text-navy">
                Cleaning Tailored To Your Space
              </h2>
            </div>
            <Link href="/services" className="btn-link whitespace-nowrap text-[14px]">
              View All Services →
            </Link>
          </div>
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
                  <p className="m-0 mb-[22px] flex-1 text-[14.5px] leading-[1.65] text-[#5a5a5a]">
                    {s.desc}
                  </p>
                  <Link href="/services" className="btn-link self-start">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="How It Works"
          flankEyebrow
          title="Spotless In Three Simple Steps"
          className="mb-[58px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[30px]">
          {HOW_STEPS.map((s) => (
            <div key={s.n} className="px-3 text-center">
              <div className="mx-auto mb-6 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-navy font-playfair text-[30px] font-bold text-gold">
                {s.n}
              </div>
              <h3 className="m-0 mb-3 text-[19px] font-black text-navy">{s.title}</h3>
              <p className="mx-auto m-0 max-w-[280px] text-[14.5px] leading-[1.65] text-[#5a5a5a]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[50px] text-center">
          <Link href="/book" className="btn-primary min-h-[54px] px-10 py-[17px] text-[15px]">
            Start Today
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gradient-to-b from-champagne to-champagne-alt">
        <div className="container-x py-[clamp(64px,8vw,104px)]">
          <SectionHeading
            stars
            title="What Our Clients Say"
            subtitle={<span className="text-[#6b5d3a]">5.0 average rating across 500+ verified reviews</span>}
            className="mb-[54px]"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {HOME_REVIEWS.map((r) => (
              <div key={r.name} className="relative bg-white px-[30px] py-[34px] shadow-card">
                <div className="h-[30px] font-playfair text-[56px] leading-[0.6] text-gold">“</div>
                <span className="text-[14px] tracking-[2px] text-gold">★★★★★</span>
                <p className="my-[14px] mb-[22px] text-[15.5px] italic leading-[1.7] text-[#3a3a3a]">
                  {r.quote}
                </p>
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
          {/* Production review source — renders when Birdeye is configured */}
          <BirdeyeWidget />
          <div className="mt-[44px] text-center">
            <Link href="/testimonials" className="btn-outline-navy px-8 py-[14px] text-[14px] uppercase tracking-wider">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* CLIENTS WE SERVE */}
      <section className="container-x py-[clamp(64px,8vw,104px)]">
        <SectionHeading
          eyebrow="Who We Serve"
          flankEyebrow
          title="Trusted Across The DMV"
          className="mb-[54px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[18px]">
          {CLIENTS_SERVE.map((c) => (
            <div
              key={c}
              className="border border-card-border bg-white px-[18px] py-[30px] text-center transition-colors hover:border-gold"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center border-[1.5px] border-gold">
                <span className="diamond h-[11px] w-[11px]" />
              </div>
              <div className="text-[14px] font-bold leading-[1.4] text-navy">{c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <Image
          src={IMAGES.ctaKitchen}
          alt="Spotless bright kitchen cleaned by Raya Elite"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="overlay-cta absolute inset-0" />
        <div className="pointer-events-none absolute -bottom-20 -left-[50px] h-[320px] w-[320px] rotate-45 border border-gold/[0.18]" />
        <div className="relative mx-auto max-w-[900px] px-6 py-[clamp(60px,8vw,96px)] text-center">
          <h2 className="m-0 mb-4 font-playfair text-[clamp(30px,4vw,46px)] font-bold text-white">
            Ready For A Spotless Space?
          </h2>
          <p className="m-0 mb-[34px] text-[17px] text-white/80">
            Book online in under two minutes. No payment required today.
          </p>
          <Link href="/book" className="btn-gold min-h-[56px] px-11 py-[18px] text-[16px]">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
