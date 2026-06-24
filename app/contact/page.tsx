import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/contact/QuoteForm";
import { IMAGES } from "@/lib/data";
import { SITE, SOCIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Raya Elite | Get a Free Quote — Maryland & DC Cleaning Services",
  description:
    "Get in touch with Raya Elite for a free, accurate cleaning quote. We serve residential, commercial, government, and embassy clients across Maryland and Washington DC. We respond within two business hours.",
  alternates: { canonical: "/contact" },
};

const TYPE_MAP: Record<string, string> = {
  government: "Government or agency facility",
  embassy: "Embassy or diplomatic residence",
  residential: "Residential home or apartment",
  office: "Office or commercial space",
};

export default function ContactPage({ searchParams }: { searchParams: { type?: string } }) {
  const initialType = TYPE_MAP[searchParams.type ?? ""] ?? "";
  const tel = `tel:${SITE.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      <PageHeader
        img={IMAGES.contactHeader}
        imgAlt="Polished corporate lobby"
        title="Get in Touch"
        tagline="We respond to every inquiry within two business hours — often sooner."
      />

      {/* INTRO + FORM */}
      <section className="container-x grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            centered={false}
            eyebrow="Reach Out"
            title="Tell Us What You Need. We'll Take It From There."
          />
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Some cleaning jobs are straightforward — a three-bedroom home, a standard office suite.
            Others need a conversation before anyone can put a number to them. Either way, this is the
            right place to start.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            Fill out the form and give us as much detail as you can about your space. The more we know
            upfront, the more accurate and useful your quote will be. No ballpark figures, no pressure
            — just a clear response from a real person on our team.
          </p>

          {/* Contact details */}
          <div className="mt-8 rounded-4xl bg-sage-deep px-7 py-7 text-cream">
            <div className="font-display text-[19px] font-semibold">Prefer to reach us directly?</div>
            <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-cream/90">
              <div>📞 <a href={tel} className="font-semibold underline-offset-2 hover:underline">{SITE.phone}</a></div>
              <div>✉️ {SITE.email}</div>
              <div>📍 {SITE.area}</div>
              <div>🕐 {SITE.hours[0]} · {SITE.hours[1]}</div>
            </div>
          </div>
        </div>

        <div id="quote">
          <QuoteForm initialType={initialType} />
        </div>
      </section>

      {/* SERVICE AREA / MAP */}
      <section className="bg-sand">
        <div className="container-x grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Where We Work"
              title="Maryland & Washington DC — Our Full Service Area"
            />
            <p className="mt-5 max-w-[460px] text-[16px] leading-relaxed text-ink-soft">
              If your location isn&apos;t on the map and you&apos;re in the surrounding area, get in
              touch. We&apos;ll confirm coverage directly rather than have you guess.
            </p>
            <p className="mt-4 text-[15px] text-ink-soft">
              Including Bethesda, Rockville, Silver Spring, Gaithersburg, Chevy Chase, Potomac,
              College Park, Bowie, Annapolis, and the District.
            </p>
          </div>
          <div className="arch-sm relative aspect-[4/3] overflow-hidden bg-sage-deep shadow-lift">
            <div className="absolute inset-0 [background:radial-gradient(circle_at_45%_45%,rgba(216,162,74,0.35),transparent_50%)]" />
            <div className="absolute left-[45%] top-[45%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_10px_rgba(216,162,74,0.25)]" />
            <div className="absolute bottom-5 left-6 font-mono text-[12px] text-cream/60">
              [ Google Maps — MD &amp; DC service area ]
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNMENT / EMBASSY / COMMERCIAL */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <SectionHeading
            eyebrow="Larger Contracts"
            title="Government Agencies, Embassies & Large Commercial Facilities"
            subtitle="Standard quote forms work for most jobs. For government contracts, embassy properties, multi-site commercial accounts, or any project that requires formal documentation — this section is for you."
            className="mb-8"
          />
          <p className="text-center text-[16px] leading-relaxed text-ink-soft">
            We provide a complete capability statement, itemized scope of work, and formal pricing
            proposal for institutional and commercial clients. Our team is background-checked, fully
            insured, and experienced in regulated and sensitive environments.
          </p>
          <div className="mx-auto mt-8 grid max-w-[680px] gap-3 sm:grid-cols-2">
            {[
              "Formal written proposal with itemized scope and pricing",
              "Capability statement for procurement and compliance review",
              "SAM.gov registration documentation (in progress)",
              "MBE and WOSB certification documentation (in progress)",
              "References from existing commercial and institutional clients",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-cream px-5 py-4 text-[14.5px] text-ink shadow-soft">
                <span className="mt-[2px] text-clay">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact?type=government#quote" className="btn-clay px-9 py-4 text-[16px]">
              Request a Formal Proposal
            </Link>
            <p className="mt-4 text-[14px] text-ink-soft">
              We respond to all government and commercial inquiries within two business hours.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL + REASSURANCE */}
      <section className="bg-ink">
        <div className="container-x py-16 text-center text-paper">
          <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-clay">Follow Us</div>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-paper/70">
            Find us on socials for cleaning tips, before-and-after results, and a look at the work we
            do every day.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="rounded-full border border-cream/25 px-5 py-2 text-[14px] font-semibold text-cream transition-colors hover:border-clay hover:bg-clay">
                {s}
              </a>
            ))}
          </div>
          <h2 className="mx-auto mt-12 max-w-[640px] font-display text-[clamp(24px,3vw,34px)] font-semibold text-cream">
            You&apos;ll Hear From Us. Guaranteed.
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[16px] leading-relaxed text-paper/75">
            Every message, form submission, and call gets a response from a real member of our team —
            not an automated reply. We take your inquiry seriously because your time is worth that.
          </p>
        </div>
      </section>
    </>
  );
}
