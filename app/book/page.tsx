import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import JobberWidget from "@/components/booking/JobberWidget";
import TrustBadges from "@/components/ui/TrustBadges";
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
        title="Book Your Cleaning Online"
        centered
        subtitle={
          <span className="inline-flex flex-wrap justify-center gap-[14px] text-[14px]">
            <span>Secure booking</span>
            <span className="text-gold/50">/</span>
            <span>No payment required today</span>
            <span className="text-gold/50">/</span>
            <span>Instant confirmation</span>
          </span>
        }
      />

      <section className="container-x grid grid-cols-1 items-start gap-9 py-[clamp(48px,6vw,80px)] lg:grid-cols-[1fr_300px]">
        <JobberWidget />

        <aside className="flex flex-col gap-[18px] lg:sticky lg:top-[104px]">
          <div className="bg-navy px-[26px] py-7 text-white">
            <div className="mb-5 font-playfair text-[19px] font-bold">Why book with us</div>
            {BOOK_REASSURANCE.map((b) => (
              <div key={b} className="flex items-start gap-3 py-[9px] text-[14px] text-white/[0.88]">
                <span className="diamond mt-[5px] h-2 w-2 flex-none" />
                <span>{b}</span>
              </div>
            ))}
          </div>
          <div className="bg-champagne px-[26px] py-6">
            <div className="mb-2 text-[15px] font-bold text-navy">Prefer a custom quote?</div>
            <p className="m-0 mb-4 text-[13.5px] leading-[1.6] text-[#6b5d3a]">
              For enterprise, embassy, or government work, request a formal proposal.
            </p>
            <Link href="/contact" className="btn-primary w-full py-[13px] text-[13.5px]">
              Request a Quote
            </Link>
          </div>
        </aside>
      </section>

      <TrustBadges py="py-[46px]" />
    </>
  );
}
