import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import VideoTestimonials from "@/components/testimonials/VideoTestimonials";
import BirdeyeWidget from "@/components/reviews/BirdeyeWidget";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Raya Elite Cleaning",
  description:
    "See what Maryland and DC clients say about Raya Elite. Hundreds of 5-star reviews from homeowners, businesses, and government clients.",
  alternates: { canonical: "/testimonials" },
};

export const revalidate = 3600;

const STATS = [
  { num: "5.0", label: "Average Google Rating" },
  { num: "500+", label: "Verified Reviews" },
  { num: "100%", label: "Would Recommend" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.testimonialsHeader}
        imgAlt="Clean, comfortable home interior"
        title="Client testimonials"
        subtitle="Maryland's Most Trusted Cleaning Service"
        stars
      />

      {/* STATS BAR */}
      <section className="container-x py-12">
        <div className="grid gap-5 rounded-[2.5rem] bg-sand px-6 py-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[clamp(34px,4vw,48px)] font-semibold text-clay">
                {s.num}
              </div>
              <div className="mt-1 text-[13px] font-bold uppercase tracking-[0.15em] text-ink-soft">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container-x">
        <BirdeyeWidget />
      </div>

      <VideoTestimonials />

      <TestimonialsGrid />

      {/* BOTTOM CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-clay-tint px-8 py-16 text-center md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight text-ink">
            Loved your service?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-ink-soft">
            Share your experience and help others discover the Raya Elite difference.
          </p>
          <Link href="/contact" className="btn-gold mt-8 px-9 py-4 text-[16px]">
            Leave a Review
          </Link>
        </div>
      </section>
    </>
  );
}
