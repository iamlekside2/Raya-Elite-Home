import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import StatsCounter from "@/components/about/StatsCounter";
import { IMAGES, VALUES, LEADERSHIP, CERTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Raya Elite Cleaning | Maryland Luxury Cleaning Company",
  description:
    "Learn the story behind Raya Elite — a Maryland-based luxury cleaning company built on professionalism, trust, and an elite standard of service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.aboutHeader}
        imgAlt="Immaculate luxury bedroom"
        breadcrumb="Home / About"
        title="About Raya Elite"
        tagline="An Elite Standard — Every Time"
        corner="bl"
      />

      {/* OUR STORY */}
      <section className="container-x grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[50px] py-[clamp(56px,7vw,96px)]">
        <div className="relative h-[420px] overflow-hidden bg-navy-img shadow-[0_18px_50px_rgba(0,33,71,0.2)]">
          <Image
            src={IMAGES.aboutStory}
            alt="Raya Elite professional cleaning a home"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/15 to-transparent" />
          <div className="absolute -left-4 -top-4 h-[90px] w-[90px] border-l-[3px] border-t-[3px] border-gold" />
        </div>
        <div>
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold-text">
            Our Story
          </div>
          <h2 className="m-0 mb-[22px] font-playfair text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.15] text-navy">
            Built On Trust, Driven By Detail
          </h2>
          <p className="m-0 mb-[18px] text-[16px] leading-[1.8] text-[#4a4a4a]">
            Raya Elite was founded on a simple belief: a truly clean space should feel effortless to
            the people who live and work in it — and earning that requires uncompromising standards
            behind the scenes.
          </p>
          <p className="m-0 text-[16px] leading-[1.8] text-[#4a4a4a]">
            From private residences in Bethesda to embassies and government facilities in the
            District, we bring the same vetted, uniformed professionalism to every job. We don&apos;t
            cut corners. We clean them.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="border-y border-[#eee] bg-white">
        <div className="container-x py-[clamp(56px,7vw,90px)]">
          <h2 className="m-0 mb-11 text-center font-playfair text-[clamp(26px,3.4vw,38px)] font-bold text-navy">
            Our Mission &amp; Values
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[26px]">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t-4 border-gold bg-pearl px-8 py-[38px]">
                <div className="mb-[22px] flex h-12 w-12 items-center justify-center border-[1.5px] border-gold">
                  <span className="diamond h-[14px] w-[14px]" />
                </div>
                <h3 className="m-0 mb-3 font-playfair text-[23px] font-bold text-navy">{v.title}</h3>
                <p className="m-0 text-[15px] leading-[1.7] text-[#5a5a5a]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-[1000px] px-6 py-[clamp(56px,7vw,90px)]">
        <h2 className="m-0 mb-11 text-center font-playfair text-[clamp(26px,3.4vw,38px)] font-bold text-navy">
          Leadership
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[26px]">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="flex items-start gap-[22px] bg-white p-[34px] shadow-card">
              <div className="flex h-[88px] w-[88px] flex-none items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-light font-playfair text-[28px] font-bold text-gold">
                {l.initial}
              </div>
              <div>
                <h3 className="m-0 mb-1 font-playfair text-[21px] font-bold text-navy">{l.name}</h3>
                <div className="mb-3 text-[12.5px] font-bold uppercase tracking-[1.5px] text-gold-text">
                  {l.role}
                </div>
                <p className="m-0 text-[14.5px] leading-[1.65] text-[#5a5a5a]">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-champagne">
        <div className="container-x py-[clamp(56px,7vw,84px)]">
          <h2 className="m-0 mb-9 text-center font-playfair text-[clamp(24px,3vw,34px)] font-bold text-navy">
            Certifications &amp; Credentials
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {CERTS.map((c) => (
              <div key={c} className="bg-white px-[18px] py-[26px] text-center">
                <div className="mx-auto mb-[14px] flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-emerald">
                  <span className="inline-block h-[9px] w-[9px] rotate-45 bg-emerald" />
                </div>
                <div className="text-[13.5px] font-bold leading-[1.4] text-navy">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY COMMITMENT */}
      <section className="mx-auto max-w-[900px] px-6 py-[clamp(48px,6vw,80px)] text-center">
        <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold-text">
          Community Commitment
        </div>
        <p className="m-0 text-[16px] leading-[1.85] text-[#4a4a4a]">
          Beyond a spotless finish, we are committed to doing business responsibly. We choose EPA
          Safer Choice, eco-friendly products to protect your family and our team, hire and train
          professionals from the communities we serve, and hold ourselves to fair, transparent
          practices on every job. Caring for your space and caring for our community are the same
          standard at Raya Elite.
        </p>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-[820px] px-6 py-[clamp(54px,7vw,84px)] text-center">
        <h2 className="m-0 mb-7 font-playfair text-[clamp(26px,3.6vw,40px)] font-bold text-navy">
          Ready To Experience The Raya Elite Difference?
        </h2>
        <Link href="/book" className="btn-primary min-h-[54px] px-10 py-[17px] text-[15px]">
          Book Now
        </Link>
      </section>
    </>
  );
}
