import type { Metadata } from "next";
import Link from "next/link";
import Sprig from "@/components/ui/Sprig";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Explore Raya Elite's cleaning services, book online, or get a free quote.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-tint text-clay">
          <Sprig className="h-8 w-8" />
        </div>
        <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.2em] text-clay">404</p>
        <h1 className="mt-2 font-display text-[clamp(28px,4vw,44px)] font-semibold text-ink">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-relaxed text-ink-soft">
          The link may be outdated or mistyped. Everything we offer is one click away below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-clay px-7 py-[14px] text-[15px]">
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline px-7 py-[14px] text-[15px]">
            Our Services
          </Link>
          <Link href="/contact" className="btn-outline px-7 py-[14px] text-[15px]">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
