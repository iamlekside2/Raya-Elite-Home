import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/services/Accordion";
import Sprig from "@/components/ui/Sprig";
import { IMAGES, SERVICE_PACKAGES, RES_PRICING, COM_PRICING, ADDONS, FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cleaning Services & Pricing | Raya Elite Cleaning Maryland",
  description:
    "View all Raya Elite cleaning packages — residential deep clean, office cleaning, move-in/out, post-construction, and government/commercial services. Transparent pricing.",
  alternates: { canonical: "/services" },
};

export const revalidate = 86400;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.servicesHeader}
        imgAlt="Bright, spotless living room"
        breadcrumb="Home / Services"
        title="Our cleaning services"
        subtitle="Transparent pricing and meticulous detail for homes, offices, and institutions across Maryland and D.C."
      />

      {/* PACKAGES */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-4xl border border-ink/10 bg-paper shadow-soft transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-clay px-3 py-1 text-[12px] font-bold text-cream">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[23px] font-semibold text-ink">{p.name}</h3>
                  <div className="mt-1 text-[14px] font-bold uppercase tracking-wider text-clay">
                    {p.price}
                  </div>
                  <div className="mt-5 flex-1 space-y-[10px]">
                    {p.items.map((it) => (
                      <div key={it} className="flex items-start gap-3 text-[15px] text-ink-soft">
                        <Sprig className="mt-[2px] h-[18px] w-[18px] flex-none text-sage" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/book" className="btn-gold mt-6 py-[14px] text-[15px]">
                    Book This Service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENT PRICING */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading eyebrow="No Surprises" title="Transparent pricing" className="mb-12" />
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Residential */}
            <div className="overflow-hidden rounded-4xl bg-cream shadow-soft">
              <div className="bg-sage-deep px-7 py-5 font-display text-[18px] font-semibold text-cream">
                Residential — by bedroom
              </div>
              <div className="grid grid-cols-[2fr_1fr_1fr] px-7 py-3 text-[12px] font-bold uppercase tracking-wider text-ink-soft">
                <div>Home Size</div>
                <div className="text-center">Standard</div>
                <div className="text-center">Deep</div>
              </div>
              {RES_PRICING.map((r) => (
                <div
                  key={r.home}
                  className="grid grid-cols-[2fr_1fr_1fr] items-center border-t border-ink/5 px-7 py-[14px] transition-colors hover:bg-paper-2"
                >
                  <div className="text-[15px] font-bold text-ink">{r.home}</div>
                  <div className="text-center text-[15px] text-ink-soft">{r.std}</div>
                  <div className="text-center text-[15px] font-bold text-clay">{r.deep}</div>
                </div>
              ))}
            </div>
            {/* Commercial */}
            <div>
              <div className="overflow-hidden rounded-4xl bg-cream shadow-soft">
                <div className="bg-clay px-7 py-5 font-display text-[18px] font-semibold text-cream">
                  Commercial — by square footage
                </div>
                {COM_PRICING.map((c) => (
                  <div
                    key={c.size}
                    className="flex items-center justify-between gap-4 border-t border-ink/5 px-7 py-[18px] transition-colors hover:bg-paper-2 first:border-t-0"
                  >
                    <div className="text-[15px] font-bold text-ink">{c.size}</div>
                    <div className="text-right text-[15px] font-bold text-clay">{c.rate}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 px-2 text-[14px] leading-relaxed text-ink-soft">
                No hidden fees. Final quote confirmed after a brief walkthrough. Recurring service
                discounts available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <SectionHeading eyebrow="Add-On Services" title="Customize your clean" className="mb-10" />
          <Accordion
            variant="addon"
            items={ADDONS.map((a) => ({ title: a.name, price: a.price, body: a.desc }))}
          />
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-sage-tint/50">
        <div className="container-x grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading centered={false} eyebrow="Where We Clean" title="Service areas" />
            <p className="mt-5 max-w-[460px] text-[16px] leading-relaxed text-ink-soft">
              Proudly serving the greater Maryland and Washington D.C. metropolitan area — including
              Bethesda, Silver Spring, Rockville, Potomac, Chevy Chase, and the District.
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
          <SectionHeading eyebrow="Good To Know" title="Frequently asked questions" className="mb-10" />
          <Accordion variant="faq" defaultOpen={0} items={FAQS.map((f) => ({ title: f.q, body: f.a }))} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-sage-deep px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Not sure which package?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-cream/85">
            Tell us about your space and we&apos;ll recommend the perfect fit — and a custom quote.
          </p>
          <Link href="/contact" className="btn-gold mt-8 px-9 py-4 text-[16px]">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
