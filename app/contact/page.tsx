import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { IMAGES, SERVICE_OPTIONS } from "@/lib/data";
import { SITE, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Raya Elite Cleaning | Maryland & DC",
  description:
    "Contact Raya Elite for custom quotes, commercial inquiries, government and embassy cleaning services, or general questions. We respond within 2 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  const requested = searchParams.service;
  const initialService = requested && SERVICE_OPTIONS.includes(requested) ? requested : "";

  return (
    <>
      <PageHeader
        img={IMAGES.contactHeader}
        imgAlt="Polished corporate lobby"
        title="Get In Touch"
        subtitle="We respond to all inquiries within 2 business hours."
        corner="bl"
      />

      <section className="container-x grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-11 py-[clamp(48px,6vw,80px)]">
        {/* Form */}
        <div>
          <ContactForm key={initialService} initialService={initialService} />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-5">
          <div className="bg-navy px-7 py-[30px] text-white">
            <div className="mb-[22px] font-playfair text-[20px] font-bold">Contact Information</div>
            <div className="text-[14.5px] leading-[1.5] text-white/85">
              <div className="flex gap-3 border-b border-white/10 py-[11px]">
                <span className="min-w-[62px] font-bold text-gold">Phone</span>
                <span>{SITE.phone}</span>
              </div>
              <div className="flex gap-3 border-b border-white/10 py-[11px]">
                <span className="min-w-[62px] font-bold text-gold">Email</span>
                <span>{SITE.email}</span>
              </div>
              <div className="flex gap-3 border-b border-white/10 py-[11px]">
                <span className="min-w-[62px] font-bold text-gold">Hours</span>
                <span>
                  {SITE.hours[0]}
                  <br />
                  {SITE.hours[1]}
                </span>
              </div>
              <div className="flex gap-3 py-[11px]">
                <span className="min-w-[62px] font-bold text-gold">Area</span>
                <span>{SITE.area}</span>
              </div>
            </div>
          </div>
          <div className="relative h-[200px] border-[5px] border-white bg-gradient-to-br from-navy-img to-[#16406e] shadow-[0_10px_30px_rgba(0,33,71,0.14)]">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_45%_50%,rgba(201,168,76,0.32),transparent_45%)]" />
            <div className="absolute left-[45%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_7px_rgba(201,168,76,0.25)]" />
            <div className="absolute bottom-[14px] left-[18px] font-mono text-[10.5px] text-champagne/60">
              [ Google Maps — service area ]
            </div>
          </div>
        </aside>
      </section>

      {/* INSTITUTIONAL BAND */}
      <section className="bg-champagne">
        <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[30px] py-[clamp(50px,6.5vw,80px)]">
          <div>
            <div className="mb-[14px] text-[12px] font-bold uppercase tracking-[2px] text-gold-text">
              Institutional Clients
            </div>
            <h2 className="m-0 mb-[14px] font-playfair text-[clamp(24px,3vw,34px)] font-bold leading-[1.15] text-navy">
              Government, Embassies &amp; Commercial
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.7] text-[#5a5740]">
              We provide custom proposals and capability statements for agencies, embassies, banks,
              and large commercial facilities — with cleared, vetted personnel and full compliance
              documentation.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/contact?service=Government"
              className="btn-primary min-h-[56px] px-10 py-[18px] text-[15px]"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL STRIP */}
      <section className="bg-navy">
        <div className="container-x flex flex-wrap items-center justify-center gap-[14px] px-6 py-9">
          <span className="text-[13px] tracking-[1px] text-white/70">FOLLOW US</span>
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="rounded-sm border border-gold/50 px-[18px] py-[9px] text-[12.5px] font-bold text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              {s}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
