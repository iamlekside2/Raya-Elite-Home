import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import GalleryClient from "@/components/gallery/GalleryClient";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Before & After Gallery | Raya Elite Cleaning Results",
  description:
    "See Raya Elite's cleaning results in action — before and after photos from residential, office, move-in/out, and commercial cleaning jobs across Maryland and DC.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.galleryHeader}
        imgAlt="Pristine luxury bathroom"
        title="Our Work Speaks For Itself"
        subtitle="Before & After Transformations Across Maryland & D.C."
        centered
      />

      <GalleryClient />

      {/* BOTTOM CTA */}
      <section className="bg-champagne">
        <div className="mx-auto max-w-[820px] px-6 py-[clamp(50px,6.5vw,80px)] text-center">
          <h2 className="m-0 mb-[14px] font-playfair text-[clamp(26px,3.6vw,40px)] font-bold text-navy">
            Ready For Your Own Transformation?
          </h2>
          <Link href="/book" className="btn-primary mt-[14px] min-h-[54px] px-10 py-[17px] text-[15px]">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
