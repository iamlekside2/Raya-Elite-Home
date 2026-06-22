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
        title="Client Testimonials"
        subtitle="Maryland's Most Trusted Cleaning Service"
        centered
        stars
        corner="bl"
      />

      {/* STATS BAR */}
      <section className="border-b border-[#eee] bg-white">
        <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 py-9 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-playfair text-[clamp(34px,4vw,46px)] font-bold text-navy">
                {s.num}
              </div>
              <div className="mt-[6px] text-[13px] font-bold uppercase tracking-[1px] text-gold-text">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production review source — renders when Birdeye is configured */}
      <div className="container-x">
        <BirdeyeWidget />
      </div>

      <VideoTestimonials />

      <TestimonialsGrid />

      {/* BOTTOM CTA */}
      <section className="bg-champagne">
        <div className="mx-auto max-w-[820px] px-6 py-[clamp(50px,6.5vw,80px)] text-center">
          <h2 className="m-0 mb-[14px] font-playfair text-[clamp(26px,3.6vw,40px)] font-bold text-navy">
            Loved Your Service?
          </h2>
          <p className="m-0 mb-[30px] text-[16px] text-[#6b5d3a]">
            Share your experience and help others discover the Raya Elite difference.
          </p>
          <Link href="/contact" className="btn-primary min-h-[54px] px-10 py-[17px] text-[15px]">
            Leave a Review
          </Link>
        </div>
      </section>
    </>
  );
}
