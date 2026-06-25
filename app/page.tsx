import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadges from "@/components/ui/TrustBadges";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
import QuoteModal from "@/components/ui/QuoteModal";
import LeadForm from "@/components/ui/LeadForm";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import {
  IMAGES,
  SERVICES_PREVIEW,
  HOW_STEPS,
  HOME_REVIEWS,
  CLIENTS_SERVE,
  LOCATIONS,
  BLOG_PREVIEW,
  HOMEPAGE_FAQS,
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
          className="object-cover object-[62%_18%]"
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
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C9A84C] px-[34px] py-[17px] text-[15px] font-bold text-[#002147] shadow-[0_8px_22px_-10px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-[3px] hover:bg-white hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.6)] active:translate-y-0"
              >
                Book Your Cleaning
              </Link>
              <QuoteModal
                triggerLabel="Get a Free Quote"
                triggerClassName="inline-flex min-h-[54px] items-center justify-center rounded-full border-2 border-white/60 px-8 py-[15px] text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#002147] hover:shadow-[0_16px_30px_-12px_rgba(0,0,0,0.5)] active:translate-y-0"
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

      {/* SECTION 2 — WHY (scroll-reveal cards on navy) */}
      <WhyChooseUs />

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
            <Link href="/services" className="btn-gold px-8 py-[14px] text-[15px]">
              View All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOCIAL PROOF */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/foam.jpeg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-clay/[0.82]" />
        <div className="container-x relative py-20 md:py-24">
          <SectionHeading
            stars
            light
            eyebrow="Client Reviews"
            title="What our clients say"
            subtitle="We let the work speak. Here's what Maryland and DC clients have said after experiencing the Raya Elite difference firsthand."
            className="mb-14"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {HOME_REVIEWS.map((r) => (
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
          <p className="mt-10 text-center text-[15px] font-semibold text-cream">
            <span className="tracking-[2px] text-gold">★★★★★</span> Rated 5.0 · Serving Maryland &amp;
            Washington DC
          </p>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS (navy band, white cards) */}
      <section className="bg-clay py-20 text-cream md:py-24">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="The Process"
            title="From first click to squeaky clean"
            subtitle="We've made booking as simple as possible. No back-and-forth. No uncertainty. Just a clean home or office, on your schedule."
            className="mb-16"
          />
          <div className="relative grid gap-8 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-cream/25 md:block" />
            {HOW_STEPS.map((s) => (
              <div
                key={s.n}
                className="relative rounded-3xl bg-cream p-8 text-center shadow-lift transition-transform duration-300 hover:-translate-y-[6px]"
              >
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-clay bg-paper font-display text-[28px] font-semibold text-clay">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-[21px] font-semibold text-ink">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[300px] text-[15px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/book" className="btn-gold px-9 py-4 text-[16px]">
              Ready to Get Started? Book Your Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST BADGES */}
      <TrustBadges />

      {/* PARALLAX DIVIDER */}
      <section className="relative flex min-h-[460px] items-center justify-center bg-[url('/images/team-cleaning.jpeg')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-ink/55" />
        <p className="relative z-10 max-w-[1180px] px-6 text-center font-display text-[clamp(26px,3.4vw,40px)] font-semibold leading-snug text-cream">
          <span className="block">At Raya Elite…</span>
          <span className="block md:whitespace-nowrap">
            We take absolute pride in making your space shine!
          </span>
        </p>
      </section>

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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* A — Locations */}
            <div>
              <SectionHeading
                eyebrow="Service Areas"
                title="We serve Maryland & Washington DC"
                subtitle="Based in Maryland, we cover a wide reach across the metro area — from the suburbs to the District. If you're not sure whether we serve your area, just ask."
                className="mb-10"
                centered={false}
              />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc}
                    className="group flex cursor-default items-center gap-2 rounded-2xl bg-cream px-4 py-4 text-[14px] font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-[5px] hover:bg-clay hover:text-cream hover:shadow-lift"
                  >
                    <span className="h-[6px] w-[6px] flex-none rounded-full bg-clay transition-colors duration-300 group-hover:bg-gold" />
                    {loc}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-[15px] text-ink-soft">
                  Don&apos;t see your area listed? We may still be able to help.
                </p>
                <Link href="/contact" className="btn-gold mt-4 px-8 py-[14px] text-[15px]">
                  Check Your Area
                </Link>
              </div>
            </div>

            {/* B — Van image */}
            <div className="relative h-[420px] overflow-hidden rounded-4xl shadow-lift lg:h-[540px]">
              <Image
                src="/images/van.jpeg"
                alt="Raya Elite branded cleaning van"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — BLOG PREVIEW */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="From the Blog"
            title="Cleaning Advice Worth Reading"
            subtitle="Practical guides for homeowners and businesses who want to make better decisions about their space. Written by people who clean for a living."
            className="mb-12"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {BLOG_PREVIEW.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col overflow-hidden rounded-4xl bg-cream shadow-soft transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-1 flex-col p-7">
                  <span className="inline-block self-start rounded-full bg-sage-tint px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-clay">
                    {post.cat}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-semibold leading-snug text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {post.desc}
                  </p>
                  <Link href={post.href} className="btn-link mt-6">
                    Read the Guide <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[15px] text-ink-soft">
              For more articles on home care, office maintenance, and professional cleaning…
            </p>
            <Link href="/blog" className="btn-gold mt-5 px-8 py-[14px] text-[15px]">
              See Our Full Blog
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="bg-clay-tint">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Common Questions"
            title="Straight Answers to the Questions We Hear Most"
            className="mb-12"
          />
          <div className="mx-auto max-w-[820px] flex flex-col gap-3">
            {HOMEPAGE_FAQS.map((faq) => (
              <details key={faq.q} className="group overflow-hidden rounded-2xl border border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 bg-[#002147] px-6 py-5 text-[15px] font-bold text-cream marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-[20px] font-light text-cream transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="bg-cream px-6 py-5 text-[15px] leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-[15px] text-ink-soft">Have a question we didn&apos;t answer here?</p>
            <Link href="/contact" className="btn-gold mt-5 px-8 py-[14px] text-[15px]">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11 — LEAD CAPTURE */}
      <section className="container-x py-20 md:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-clay px-7 pt-12 pb-0 text-cream md:px-12 md:pt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 12% 0%, rgba(201,168,76,0.16), transparent 60%)",
            }}
          />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left — pitch + cleaner */}
            <div className="flex h-full flex-col">
              {/* Text block — has its own bottom padding */}
              <div className="pb-8 pt-0">
                <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
                  Book In Minutes
                </span>
                <h2 className="mt-4 font-display text-[clamp(30px,4vw,46px)] font-semibold leading-tight text-cream">
                  Ready for a spotless space?
                </h2>
                <p className="mt-4 max-w-[460px] text-[17px] leading-relaxed text-cream/85">
                  Fill in the form and our team will confirm and reach out the same day. No payment
                  required today.
                </p>
                <p className="mt-4 text-[14px] text-cream/75">
                  Prefer to talk first?{" "}
                  <a
                    href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                    className="font-semibold text-gold underline underline-offset-2"
                  >
                    Call us
                  </a>
                  .
                </p>
              </div>
              {/* Image — mt-auto pushes it to the very bottom of the card (pb-0) */}
              <Image
                src="/images/form-lady-new.png"
                alt="A friendly Raya Elite cleaner"
                width={1088}
                height={1446}
                className="mx-auto mt-2 hidden w-[460px] max-w-full self-end md:block"
              />
            </div>

            {/* Right — full lead-capture form, vertically centred against the image */}
            <div className="flex items-center self-stretch py-12 md:py-14">
              <div className="w-full">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
