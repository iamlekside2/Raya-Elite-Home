import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Accordion from "@/components/services/Accordion";
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
        title="Our Cleaning Services"
        subtitle="Transparent pricing and meticulous detail for homes, offices, and institutions across Maryland and D.C."
      />

      {/* PACKAGES */}
      <section className="container-x py-[clamp(56px,7vw,90px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[26px]">
          {SERVICE_PACKAGES.map((p) => (
            <div
              key={p.name}
              className="relative flex flex-col border-t-4 border-gold bg-white px-[30px] py-[34px] shadow-card transition-all duration-300 hover:-translate-y-[6px] hover:shadow-card-hover"
            >
              <div className="relative -mx-[30px] -mt-[34px] mb-6 h-[160px] overflow-hidden bg-navy-img">
                <Image src={p.img} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,21,46,0.3)]" />
              </div>
              {p.badge && (
                <span className="absolute right-6 top-[142px] rounded-full bg-navy px-[14px] py-[7px] text-[11px] font-bold uppercase tracking-[1px] text-gold">
                  {p.badge}
                </span>
              )}
              <h3 className="m-0 mb-2 font-playfair text-[24px] font-bold text-navy">{p.name}</h3>
              <div className="mb-[22px] text-[13px] font-bold uppercase tracking-[1.5px] text-gold-text">
                {p.price}
              </div>
              <div className="mb-[26px] flex-1">
                {p.items.map((it) => (
                  <div key={it} className="flex items-start gap-[11px] py-[7px] text-[14.5px] text-[#444]">
                    <span className="diamond mt-[6px] h-2 w-2 flex-none" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
              <Link href="/book" className="btn-primary min-h-[50px] py-[14px] text-[14px]">
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSPARENT PRICING */}
      <section className="border-y border-[#eee] bg-white">
        <div className="container-x py-[clamp(56px,7vw,90px)]">
          <h2 className="m-0 mb-9 text-center font-playfair text-[clamp(26px,3.4vw,38px)] font-bold text-navy">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-9">
            {/* Residential */}
            <div>
              <div className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold-text">
                Residential — by bedroom
              </div>
              <div className="overflow-hidden border border-card-border">
                <div className="grid grid-cols-[2fr_1fr_1fr] bg-navy text-[13px] font-bold tracking-[0.5px] text-white">
                  <div className="px-[18px] py-[14px]">Home Size</div>
                  <div className="px-3 py-[14px] text-center">Standard</div>
                  <div className="px-3 py-[14px] text-center">Deep</div>
                </div>
                {RES_PRICING.map((r) => (
                  <div
                    key={r.home}
                    className="grid grid-cols-[2fr_1fr_1fr] border-t border-[#f0ece2] bg-white transition-colors hover:bg-pearl"
                  >
                    <div className="px-[18px] py-[14px] text-[14.5px] font-bold text-[#333]">{r.home}</div>
                    <div className="px-3 py-[14px] text-center text-[14.5px] text-[#444]">{r.std}</div>
                    <div className="px-3 py-[14px] text-center text-[14.5px] font-bold text-navy">{r.deep}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Commercial */}
            <div>
              <div className="mb-4 text-[12px] font-bold uppercase tracking-[2px] text-gold-text">
                Commercial — by square footage
              </div>
              <div className="overflow-hidden border border-card-border">
                <div className="grid grid-cols-[2fr_1fr] bg-navy text-[13px] font-bold tracking-[0.5px] text-white">
                  <div className="px-[18px] py-[14px]">Facility Size</div>
                  <div className="px-3 py-[14px] text-right">Rate</div>
                </div>
                {COM_PRICING.map((c) => (
                  <div
                    key={c.size}
                    className="grid grid-cols-[2fr_1fr] border-t border-[#f0ece2] bg-white transition-colors hover:bg-pearl"
                  >
                    <div className="px-[18px] py-4 text-[14px] font-bold text-[#333]">{c.size}</div>
                    <div className="px-[18px] py-4 text-right text-[14px] font-bold text-navy">{c.rate}</div>
                  </div>
                ))}
              </div>
              <p className="m-0 mt-4 text-[13px] leading-[1.6] text-[#8a8a8a]">
                No hidden fees. Final quote confirmed after a brief walkthrough. Recurring service
                discounts available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="mx-auto max-w-[1000px] px-6 py-[clamp(56px,7vw,90px)]">
        <div className="mb-[14px] text-center">
          <span className="eyebrow">Add-On Services</span>
        </div>
        <h2 className="m-0 mb-9 text-center font-playfair text-[clamp(26px,3.4vw,38px)] font-bold text-navy">
          Customize Your Clean
        </h2>
        <Accordion
          variant="addon"
          items={ADDONS.map((a) => ({ title: a.name, price: a.price, body: a.desc }))}
        />
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-champagne">
        <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10 py-[clamp(56px,7vw,80px)]">
          <div>
            <h2 className="m-0 mb-4 font-playfair text-[clamp(24px,3vw,34px)] font-bold text-navy">
              Service Areas
            </h2>
            <p className="m-0 mb-5 text-[15.5px] leading-[1.7] text-[#5a5740]">
              Proudly serving the greater Maryland and Washington D.C. metropolitan area — including
              Bethesda, Silver Spring, Rockville, Potomac, Chevy Chase, and the District.
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {["Montgomery County", "Washington D.C.", "Prince George's County"].map((p) => (
                <span key={p} className="rounded-full bg-white px-4 py-2 text-[13px] font-bold text-navy">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[280px] border-[6px] border-white bg-gradient-to-br from-navy-img to-[#16406e] shadow-[0_12px_34px_rgba(0,33,71,0.18)]">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_45%_50%,rgba(201,168,76,0.35),transparent_45%)]" />
            <div className="absolute left-[45%] top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_8px_rgba(201,168,76,0.25)]" />
            <div className="absolute bottom-4 left-5 font-mono text-[11px] text-champagne/60">
              [ Google Maps — MD &amp; DC coverage ]
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1000px] px-6 py-[clamp(56px,7vw,90px)]">
        <h2 className="m-0 mb-9 text-center font-playfair text-[clamp(26px,3.4vw,38px)] font-bold text-navy">
          Frequently Asked Questions
        </h2>
        <Accordion
          variant="faq"
          defaultOpen={0}
          items={FAQS.map((f) => ({ title: f.q, body: f.a }))}
        />
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <div className="mx-auto max-w-[820px] px-6 py-[clamp(54px,7vw,84px)] text-center">
          <h2 className="m-0 mb-[14px] font-playfair text-[clamp(26px,3.6vw,40px)] font-bold text-white">
            Not Sure Which Package?
          </h2>
          <p className="m-0 mb-[30px] text-[16px] text-white/80">
            Tell us about your space and we&apos;ll recommend the perfect fit — and a custom quote.
          </p>
          <Link href="/contact" className="btn-gold min-h-[54px] px-10 py-[17px] text-[15px]">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
