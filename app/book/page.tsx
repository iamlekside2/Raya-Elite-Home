import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import JobberWidget from "@/components/booking/JobberWidget";
import TrustBadges from "@/components/ui/TrustBadges";
import Sprig from "@/components/ui/Sprig";
import { BOOK_REASSURANCE, IMAGES } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Cleaning | Raya Elite Home & Office Cleaning — Maryland & DC",
  description:
    "Book your residential or commercial cleaning online in under two minutes. Choose your service, pick a date, and we'll handle the rest. Same-day confirmation guaranteed.",
  alternates: { canonical: "/book" },
};

const CONFIDENCE = [
  { title: "Satisfaction Guaranteed", desc: "If something isn't right, we return and fix it. No debate, no fine print." },
  { title: "Background-Checked Staff", desc: "Every cleaner on our team has been vetted, trained, and held to our standard before they step into your home or office." },
  { title: "Flexible Scheduling", desc: "Early mornings, evenings, weekends — we work around your life, not the other way around." },
  { title: "Cancel or Reschedule Anytime", desc: "Plans change. We get it. Adjust your booking without penalty as long as you give us reasonable notice." },
  { title: "We Confirm the Same Day", desc: "You won't be left guessing. Once you submit your booking, our team reviews it and sends confirmation — typically within the hour." },
];

const STEPS = [
  { n: "1", title: "You submit your booking", desc: "Takes under two minutes. Select your service type, space details, and preferred date and time. No payment is collected at this stage." },
  { n: "2", title: "We review and confirm", desc: "A member of our team reviews your booking and sends a confirmation — typically within the hour, always the same day. If we have any questions, we'll reach out directly." },
  { n: "3", title: "Our team shows up, on time", desc: "Your cleaner arrives in uniform with everything needed to do the job. You don't need to prepare a thing. If you won't be home, leave us access instructions and we'll handle the rest." },
  { n: "4", title: "You walk in to a clean space", desc: "That's the whole point. If anything didn't meet your expectations, let us know within 24 hours and we'll make it right — no questions, no charge." },
];

const FIRST_TIME = [
  { title: "We quote accurately, not attractively.", desc: "The price you see when your booking is confirmed is the price you pay. We don't lowball the initial quote and adjust it at the door." },
  { title: "You don't need to clean before we arrive.", desc: "We've heard this more times than we can count. Your space doesn't need to be tidy for us to do our job. That's exactly what we're there for." },
  { title: "Recurring clients get priority.", desc: "If you book on a weekly, biweekly, or monthly basis, you'll receive preferred pricing and first access to scheduling slots. It's our way of taking care of the clients who trust us regularly." },
  { title: "Communicating your preferences matters.", desc: "Products you'd like us to avoid, areas that need extra attention, access instructions — the more you tell us upfront, the better the result. There's a notes field in the booking form for exactly this." },
];

export default function BookPage() {
  const tel = `tel:${SITE.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      <PageHeader
        img={IMAGES.bookHeader}
        imgAlt="Inviting, freshly cleaned living space"
        title="Book Your Cleaning Online"
        subtitle={
          <span className="inline-flex flex-wrap gap-x-4 gap-y-1">
            <span>Secure booking</span>
            <span className="text-clay">·</span>
            <span>No payment required today</span>
            <span className="text-clay">·</span>
            <span>Same-day confirmation</span>
          </span>
        }
      />

      {/* BOOKING WIDGET INTRO + WIDGET */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="Schedule Your Service"
          title="A Clean Space Is Two Minutes Away"
          subtitle="Select your service, tell us about your space, pick a date and time that works for you — and we take it from there. No phone tag, no waiting, no uncertainty. For a government facility, embassy property, or large commercial space, use the custom quote link — we'll put together a proper proposal and get back to you the same day."
          className="mb-12"
        />
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[1fr_320px]">
          <JobberWidget />

          <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
            <div className="rounded-4xl bg-sage-deep px-7 py-8 text-cream">
              <div className="font-display text-[20px] font-semibold">Why book with us</div>
              <div className="mt-5 space-y-[10px]">
                {BOOK_REASSURANCE.map((b) => (
                  <div key={b} className="flex items-start gap-3 text-[15px] text-cream/90">
                    <Sprig className="mt-[2px] h-[18px] w-[18px] flex-none text-gold" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-4xl bg-clay-tint px-7 py-7">
              <div className="font-display text-[18px] font-semibold text-ink">
                Prefer a custom quote?
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                For enterprise, embassy, or government work, request a formal proposal.
              </p>
              <Link href="/contact" className="btn-gold mt-5 w-full py-[13px] text-[14px]">
                Get a Custom Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* REASSURANCE STRIP */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <SectionHeading title="Why Clients Book With Confidence" className="mb-14" />
          <div className="grid gap-7 md:grid-cols-3">
            {CONFIDENCE.map((c) => (
              <div key={c.title} className="rounded-4xl border border-ink/10 bg-paper p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                  <Sprig className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER YOU BOOK */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading
          eyebrow="What to Expect"
          title="Here's Exactly What Happens Next"
          subtitle="We know booking a service for the first time involves a degree of trust. Here's how the process works, step by step, so there are no surprises."
          className="mb-14"
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-4xl bg-cream p-7 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-clay font-display text-[24px] font-semibold text-clay">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-[18px] font-semibold leading-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FIRST-TIME CLIENT NOTE */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="First Time With Us?"
            title="A Few Things Worth Knowing Before You Book"
            className="mb-14"
          />
          <div className="mx-auto grid max-w-[920px] gap-7 md:grid-cols-2">
            {FIRST_TIME.map((f) => (
              <div key={f.title} className="flex gap-4">
                <Sprig className="mt-1 h-6 w-6 flex-none text-clay" />
                <div>
                  <h3 className="font-display text-[18px] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE & GOVERNMENT FALLBACK */}
      <section className="container-x py-20 md:py-24">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-sage-tint/50 px-8 py-14 md:px-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="Larger Projects"
              title="Government, Embassy, or Large Commercial Facility?"
            />
            <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-ink-soft">
              Online booking is built for standard residential and commercial jobs. For government
              agencies, diplomatic residences, post-construction projects, or facilities over 5,000
              sq ft, a custom proposal is the better route. We&apos;ll put together a formal scope of
              work, a capability statement, and pricing that reflects your actual requirements — not
              a generic package adapted to fit.
            </p>
            <p className="mt-3 text-[14px] font-semibold text-ink">
              We respond to all commercial and government inquiries within two business hours.
            </p>
          </div>
          <div className="lg:text-right">
            <Link href="/contact" className="btn-clay px-9 py-4 text-[16px]">
              Request a Custom Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges py="py-14" />

      {/* BOTTOM REASSURANCE */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionHeading title="Still Have Questions Before You Book?" />
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-ink-soft">
            We&apos;re happy to talk through your space, your schedule, or anything else before you
            commit to a booking. No pressure, just a straightforward conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={tel} className="btn-clay px-9 py-4 text-[16px]">
              Call Us Directly
            </a>
            <Link href="/contact" className="btn-outline px-9 py-4 text-[16px]">
              Send Us a Message
            </Link>
          </div>
          <p className="mt-6 text-[14px] text-ink-soft">
            {SITE.hours[0]} · {SITE.hours[1]} · We also respond to messages outside business hours —
            just not always immediately.
          </p>
        </div>
      </section>
    </>
  );
}
