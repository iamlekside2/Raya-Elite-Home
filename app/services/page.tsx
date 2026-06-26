import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/services/Accordion";
import TierCard from "@/components/services/TierCard";
import {
  IMAGES,
  RESIDENTIAL_TIERS,
  RESIDENTIAL_SUBSERVICES,
  RESIDENTIAL_ADDONS,
  COMMERCIAL_PLANS,
  FAQS,
} from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Services & Pricing | Raya Elite Home & Office Cleaning — Maryland & DC",
  description:
    "Residential white-glove cleaning, deep cleans, move-in/out, Airbnb turnovers, and commercial, embassy & government services across Maryland and Washington DC. Full transparent pricing. Book online today.",
  alternates: { canonical: "/services" },
};

export const revalidate = 86400;

/* Prominent top-level header for one of the two service tracks. */
function ServiceBanner({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 border-b border-ink/10 pb-9">
      <div className="flex items-center gap-5">
        <span className="font-display text-[clamp(46px,8vw,88px)] font-semibold leading-none text-clay/25">
          {index}
        </span>
        <div>
          <div className="mb-1.5 text-[12.5px] font-bold uppercase tracking-[0.22em] text-clay">
            {eyebrow}
          </div>
          <h2 className="font-display text-[clamp(28px,4.2vw,48px)] font-semibold leading-[1.05] text-ink">
            {title}
          </h2>
        </div>
      </div>
      <p className="mt-6 max-w-[780px] text-[17px] leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

/* Sub-section divider that groups packages under a service. */
function GroupLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-7 flex items-center gap-4 ${className}`}>
      <span className="text-[12.5px] font-bold uppercase tracking-[0.22em] text-ink/70">
        {children}
      </span>
      <span className="h-px flex-1 bg-ink/12" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.servicesHeader}
        imgAlt="Bright, spotless living room"
        breadcrumb="Home / Services"
        title="Our Cleaning Services"
        tagline="Every space is different. But the standard is always the same."
      />

      {/* ============ SERVICE 01 — RESIDENTIAL ============ */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <ServiceBanner
            index="01"
            eyebrow="Service 01 of 02"
            title="Residential Cleaning"
          >
            <span className="font-display font-semibold text-ink">
              Your Home. Our Masterpiece.
            </span>{" "}
            Life is too short for ordinary cleaning. Raya Elite delivers white-glove residential
            cleaning services that transform your home into the sanctuary it deserves to be —
            available across the packages and add-ons below.
          </ServiceBanner>

          {/* Packages under Residential */}
          <GroupLabel>Cleaning Packages</GroupLabel>
          <div className="space-y-8">
            {RESIDENTIAL_TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} accent="sage" />
            ))}
          </div>

          {/* Additional services under Residential */}
          <GroupLabel className="mt-16">Additional Residential Services</GroupLabel>
          <div className="grid gap-8 lg:grid-cols-2">
            {RESIDENTIAL_SUBSERVICES.map((s) => (
              <article
                key={s.name}
                className="flex flex-col overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft"
              >
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="font-display text-[22px] font-semibold leading-tight text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                    <span className="font-bold text-ink">Ideal for:</span> {s.idealFor}
                  </p>
                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-ink/10 bg-paper-2 px-5 py-4">
                    <div>
                      <div className="font-display text-[24px] font-semibold leading-none text-ink">
                        {s.range}
                      </div>
                      <div className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
                        {s.rangeNote}
                      </div>
                    </div>
                    <Link href="/contact" className="btn-clay px-6 py-3 text-[14px]">
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Add-ons under Residential */}
          <GroupLabel className="mt-16">Add-On Menu</GroupLabel>
          <article className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft">
            <div className="p-7 md:p-9">
              <p className="max-w-[680px] text-[15px] leading-relaxed text-ink-soft">
                Customize any clean with optional extras. Mention any of these when you reach out and
                we&apos;ll include them in your quote.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {RESIDENTIAL_ADDONS.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-ink/12 bg-paper-2 px-4 py-2 text-[14px] font-semibold text-ink"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ============ SERVICE 02 — COMMERCIAL ============ */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <ServiceBanner
            index="02"
            eyebrow="Service 02 of 02"
            title="Commercial Cleaning"
          >
            <span className="font-display font-semibold text-ink">
              Your Office Speaks Before You Do. Make It Speak Volumes.
            </span>{" "}
            A clean, professionally maintained office signals to clients, employees, and stakeholders
            that you operate at the highest standard. Raya Elite delivers commercial cleaning that
            reflects the excellence your organization represents — across the plans below.
          </ServiceBanner>

          {/* Plans under Commercial */}
          <GroupLabel>Commercial Plans</GroupLabel>
          <div className="space-y-8">
            {COMMERCIAL_PLANS.map((plan) => (
              <TierCard key={plan.name} tier={plan} accent="navy" />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE PRICE */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <div className="mx-auto max-w-[820px]">
            <SectionHeading
              eyebrow="Our Approach"
              title="We Quote Based on Your Actual Space — Not a Generic Formula"
              className="mb-8"
            />
            <p className="text-[17px] leading-relaxed text-ink-soft">
              Every home and office is different. Square footage, current condition, number of rooms,
              and how long it&apos;s been since the last professional clean all factor into what your
              job actually costs. We&apos;d rather give you an accurate number upfront than pad a low
              quote and surprise you afterward.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
              Here&apos;s how it works: (1) you tell us about your space, (2) we give you a clear
              price before booking is confirmed, and (3) you make your payment. No add-on fees after
              the fact. No minimum visit charges buried in the fine print.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
              If you have questions about pricing before you book,{" "}
              <a href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`} className="font-bold text-clay underline underline-offset-2">
                call us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-sage-tint/50">
        <div className="container-x grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Where We Work"
              title="We Cover Maryland and the Washington DC Metro Area"
            />
            <p className="mt-5 max-w-[460px] text-[16px] leading-relaxed text-ink-soft">
              From Bethesda to Annapolis, Silver Spring to the District — we service a wide reach
              across the Maryland metro. If your area isn&apos;t listed on the homepage, get in touch
              and we&apos;ll confirm coverage directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Montgomery County", "Washington D.C.", "Prince George's County"].map((p) => (
                <span key={p} className="rounded-full bg-cream px-5 py-2 text-[14px] font-semibold text-ink shadow-soft">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="arch-sm relative aspect-[4/3] overflow-hidden bg-sage-deep shadow-lift">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_45%_45%,rgba(216,162,74,0.4),transparent_50%)]" />
            <div className="absolute left-[45%] top-[45%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_10px_rgba(216,162,74,0.25)]" />
            <div className="absolute bottom-5 left-6 font-mono text-[12px] text-cream/60">
              [ Google Maps — MD &amp; DC coverage ]
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <SectionHeading
            eyebrow="Common Questions"
            title="Questions We Hear Before Every First Booking"
            className="mb-10"
          />
          <Accordion variant="faq" defaultOpen={0} items={FAQS.map((f) => ({ title: f.q, body: f.a }))} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-sage-deep px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Not Sure Which Service Fits?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-cream/85">
            Tell us about your space and we&apos;ll point you in the right direction — with a clear
            quote before anything is confirmed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold px-9 py-4 text-[16px]">
              Get a Custom Quote
            </Link>
            <Link href="/book" className="text-[15px] font-semibold text-cream/90 underline underline-offset-4 hover:text-cream">
              Or browse our booking page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
