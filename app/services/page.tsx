import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/services/Accordion";
import Sprig from "@/components/ui/Sprig";
import {
  IMAGES,
  RESIDENTIAL_TIERS,
  MOVE_IN_OUT,
  AIRBNB_TURNOVER,
  RESIDENTIAL_ADDONS,
  COMMERCIAL_PLANS,
  FAQS,
  type PriceTable as PriceTableType,
  type ServiceTier,
} from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Services & Pricing | Raya Elite Home & Office Cleaning — Maryland & DC",
  description:
    "Residential white-glove cleaning, deep cleans, move-in/out, Airbnb turnovers, and commercial, embassy & government services across Maryland and Washington DC. Full transparent pricing. Book online today.",
  alternates: { canonical: "/services" },
};

export const revalidate = 86400;

/* Shared pricing table — maps any column/row shape from the blueprint. */
function PriceTable({ table, accent }: { table: PriceTableType; accent: "navy" | "sage" }) {
  const headBg = accent === "navy" ? "bg-[#002147]" : "bg-sage-deep";
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className={`${headBg} text-cream`}>
            {table.columns.map((c, i) => (
              <th
                key={c}
                className={`px-5 py-3.5 text-[12.5px] font-bold uppercase tracking-wider ${
                  i === 0 ? "" : "text-center"
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-t border-ink/8 bg-paper transition-colors hover:bg-paper-2"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-[14px] align-top text-[14.5px] ${
                    ci === 0
                      ? "font-bold text-ink"
                      : "text-center text-ink-soft"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* One package = one bordered card: name + badge, ideal-for, inclusions, table, CTA. */
function TierCard({ tier, accent }: { tier: ServiceTier; accent: "navy" | "sage" }) {
  const inclusions = tier.includes.split(/,\s*(?![^()]*\))/).map((s) => s.trim());
  return (
    <article className="overflow-hidden rounded-4xl border border-ink/10 bg-cream shadow-soft">
      <div className="p-7 md:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-[24px] font-semibold leading-tight text-ink">
            {tier.name}
          </h3>
          {tier.badge && (
            <span className="rounded-full bg-clay px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-cream">
              {tier.badge}
            </span>
          )}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          <span className="font-bold text-ink">Ideal for:</span> {tier.idealFor}
        </p>

        <div className="mb-2 mt-6 text-[12px] font-bold uppercase tracking-wider text-ink/70">
          What&apos;s included
        </div>
        <div className="grid gap-x-7 gap-y-[9px] sm:grid-cols-2">
          {inclusions.map((it) => (
            <div key={it} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
              <Sprig className="mt-[3px] h-[17px] w-[17px] flex-none text-sage" />
              <span>{it}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <PriceTable table={tier.table} accent={accent} />
        </div>

        <Link
          href={tier.ctaHref}
          className={`${accent === "navy" ? "btn-gold" : "btn-clay"} mt-7 inline-flex px-8 py-[14px] text-[15px]`}
        >
          {tier.cta}
        </Link>
      </div>
    </article>
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

      {/* RESIDENTIAL */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Residential Cleaning"
            title="Your Home. Our Masterpiece."
            subtitle="Life is too short for ordinary cleaning. Raya Elite delivers white-glove residential cleaning services that transform your home into the sanctuary it deserves to be."
            className="mb-14"
          />

          <div className="space-y-8">
            {RESIDENTIAL_TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} accent="sage" />
            ))}
          </div>

          {/* Sub-services */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft">
              <div className="p-7 md:p-8">
                <h3 className="font-display text-[22px] font-semibold leading-tight text-ink">
                  Move-In / Move-Out Cleaning
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  A complete, move-ready deep clean for an empty home — inside cabinets, appliances,
                  and every surface, on your timeline.
                </p>
                <div className="mt-6">
                  <PriceTable table={MOVE_IN_OUT} accent="sage" />
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft">
              <div className="p-7 md:p-8">
                <h3 className="font-display text-[22px] font-semibold leading-tight text-ink">
                  Airbnb &amp; Short-Term Rental Turnover
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  Fast, reliable, guest-ready turnovers with a guaranteed service-level turnaround
                  between bookings.
                </p>
                <div className="mt-6">
                  <PriceTable table={AIRBNB_TURNOVER} accent="sage" />
                </div>
              </div>
            </article>
          </div>

          {/* Add-on menu */}
          <article className="mt-8 overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft">
            <div className="p-7 md:p-9">
              <h3 className="font-display text-[22px] font-semibold leading-tight text-ink">
                Residential Add-On Menu
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Customize any clean. Add any of the following when you book or mention them on your
                quote request.
              </p>
              <div className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2">
                {RESIDENTIAL_ADDONS.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/8 py-3"
                  >
                    <span className="text-[15px] font-semibold text-ink">{a.name}</span>
                    <span className="flex-none text-right text-[14.5px] font-bold text-clay">
                      {a.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Commercial Cleaning"
            title="Your Office Speaks Before You Do. Make It Speak Volumes."
            subtitle="A clean, professionally maintained office signals to clients, employees, and stakeholders that you operate at the highest standard. Raya Elite delivers commercial cleaning services that reflect the level of excellence your organization represents."
            className="mb-14"
          />

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
