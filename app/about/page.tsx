import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsCounter from "@/components/about/StatsCounter";
import Sprig from "@/components/ui/Sprig";
import { IMAGES, VALUES, LEADERSHIP, CERTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Raya Elite Cleaning | Maryland Luxury Cleaning Company",
  description:
    "Learn the story behind Raya Elite — a Maryland-based luxury cleaning company built on professionalism, trust, and an elite standard of service.",
  alternates: { canonical: "/about" },
};

const tint = ["bg-clay-tint text-clay", "bg-sage-tint text-sage-deep", "bg-clay-tint text-clay"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.aboutHeader}
        imgAlt="Immaculate luxury bedroom"
        breadcrumb="Home / About"
        title="About Raya Elite"
        tagline="An Elite Standard — Every Time"
      />

      {/* OUR STORY */}
      <section className="container-x grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-sage-tint" />
          <div className="arch relative aspect-[4/5] overflow-hidden shadow-lift">
            <Image
              src={IMAGES.aboutStory}
              alt="Raya Elite professional cleaning a home"
              fill
              sizes="(max-width:1024px) 90vw, 460px"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <SectionHeading centered={false} eyebrow="Our Story" title="Built on trust, driven by detail" />
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            Raya Elite was founded on a simple belief: a truly clean space should feel effortless to
            the people who live and work in it — and earning that requires uncompromising standards
            behind the scenes.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            From private residences in Bethesda to embassies and government facilities in the
            District, we bring the same vetted, uniformed professionalism to every job. We don&apos;t
            cut corners. We clean them.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <SectionHeading eyebrow="What Guides Us" title="Our mission & values" className="mb-14" />
          <div className="grid gap-7 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.title} className="rounded-4xl border border-ink/10 bg-paper p-8 shadow-soft">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${tint[i % 3]}`}>
                  <Sprig className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-[23px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container-x py-20 md:py-24">
        <SectionHeading eyebrow="The People" title="Leadership" className="mb-14" />
        <div className="mx-auto grid max-w-[920px] gap-7 md:grid-cols-2">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="flex items-start gap-6 rounded-4xl bg-cream p-8 shadow-soft">
              <div className="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-sage-deep font-display text-[30px] font-semibold text-cream">
                {l.initial}
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-ink">{l.name}</h3>
                <div className="mt-1 text-[13px] font-bold uppercase tracking-wider text-clay">
                  {l.role}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading eyebrow="Credentials" title="Certifications & credentials" className="mb-12" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <div key={c} className="flex items-center gap-4 rounded-3xl bg-cream px-6 py-5 shadow-soft">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                  <Sprig className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-bold text-ink">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY COMMITMENT */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="kicker mb-4 justify-center">
            <Sprig className="h-4 w-4 text-sage" />
            Community Commitment
          </div>
          <p className="font-display text-[clamp(20px,2.4vw,28px)] font-medium italic leading-relaxed text-ink">
            Beyond a spotless finish, we are committed to doing business responsibly — choosing EPA
            Safer Choice products that protect your family and our team, hiring and training
            professionals from the communities we serve, and holding ourselves to fair, transparent
            practices on every job.
          </p>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* BOTTOM CTA */}
      <section className="container-x py-20 md:py-24">
        <div className="rounded-[2.5rem] bg-clay px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Ready to experience the Raya Elite difference?
          </h2>
          <Link href="/book" className="btn-gold mt-8 px-9 py-4 text-[16px]">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
