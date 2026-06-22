import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
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
        title="Get in touch"
        subtitle="We respond to all inquiries within 2 business hours."
      />

      <section className="container-x grid items-start gap-10 py-20 md:py-24 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Form */}
        <div>
          <ContactForm key={initialService} initialService={initialService} />
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-4xl bg-sage-deep px-8 py-8 text-cream">
            <div className="font-display text-[21px] font-semibold">Contact information</div>
            <div className="mt-5 text-[15px] leading-relaxed">
              {[
                ["Phone", SITE.phone],
                ["Email", SITE.email],
                ["Hours", `${SITE.hours[0]} · ${SITE.hours[1]}`],
                ["Area", SITE.area],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4 border-b border-cream/15 py-3 last:border-b-0">
                  <span className="min-w-[60px] font-bold text-gold">{label}</span>
                  <span className="text-cream/90">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="arch-sm relative h-[220px] overflow-hidden bg-sage-deep shadow-soft">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_45%_45%,rgba(216,162,74,0.35),transparent_50%)]" />
            <div className="absolute left-[45%] top-[45%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_8px_rgba(216,162,74,0.25)]" />
            <div className="absolute bottom-4 left-5 font-mono text-[11px] text-cream/60">
              [ Google Maps — service area ]
            </div>
          </div>
        </aside>
      </section>

      {/* INSTITUTIONAL BAND */}
      <section className="bg-sand">
        <div className="container-x grid items-center gap-10 py-20 md:py-24 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Institutional Clients"
              title="Government, embassies & commercial"
            />
            <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-ink-soft">
              We provide custom proposals and capability statements for agencies, embassies, banks,
              and large commercial facilities — with cleared, vetted personnel and full compliance
              documentation.
            </p>
          </div>
          <div className="lg:text-right">
            <Link href="/contact?service=Government" className="btn-clay px-9 py-4 text-[16px]">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL STRIP */}
      <section className="bg-ink">
        <div className="container-x flex flex-wrap items-center justify-center gap-3 py-10">
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-paper/60">
            Follow us
          </span>
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="rounded-full border border-cream/25 px-5 py-2 text-[14px] font-semibold text-cream transition-colors hover:bg-clay hover:border-clay"
            >
              {s}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
