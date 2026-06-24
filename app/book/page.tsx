import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import JobberWidget from "@/components/booking/JobberWidget";
import TrustBadges from "@/components/ui/TrustBadges";
import Sprig from "@/components/ui/Sprig";
import { BOOK_REASSURANCE, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Book a Cleaning | Raya Elite Cleaning Maryland",
  description:
    "Book your luxury cleaning service in under 2 minutes. Choose your service, pick a date and time, and we'll handle the rest. Same-day response guaranteed.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.bookHeader}
        imgAlt="Inviting, freshly cleaned living space"
        title="Book your cleaning online"
        subtitle={
          <span className="inline-flex flex-wrap gap-x-4 gap-y-1">
            <span>Secure booking</span>
            <span className="text-clay">·</span>
            <span>No payment required today</span>
            <span className="text-clay">·</span>
            <span>Instant confirmation</span>
          </span>
        }
      />

      <section className="container-x grid grid-cols-1 items-start gap-9 py-20 md:py-24 lg:grid-cols-[1fr_320px]">
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
              Request a Quote
            </Link>
          </div>
        </aside>
      </section>

      <TrustBadges py="py-14" />
    </>
  );
}
