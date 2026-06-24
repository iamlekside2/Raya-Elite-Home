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
        title="Our work speaks for itself"
        subtitle="Before & After Transformations Across Maryland & D.C."
      />

      <GalleryClient />

      {/* BOTTOM CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-sage-deep px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Ready for your own transformation?
          </h2>
          <Link href="/book" className="btn-gold mt-8 px-9 py-4 text-[16px]">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
