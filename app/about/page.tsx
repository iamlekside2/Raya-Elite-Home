import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsCounter from "@/components/about/StatsCounter";
import Sprig from "@/components/ui/Sprig";
import { IMAGES, VALUES, LEADERSHIP, CERTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Raya Elite | Maryland's Luxury Cleaning Company — Our Story & Standards",
  description:
    "Raya Elite is a Maryland-based luxury cleaning company built on professionalism, integrity, and an uncompromising standard of service. Meet the team behind the clean.",
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
      <section className="container-x grid items-start gap-12 py-20 md:py-24 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-28">
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
          <SectionHeading
            centered={false}
            eyebrow="How We Started"
            title="Built on a Simple Belief: Clean Spaces Improve Wellbeing"
          />
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink-soft">
            <p>
              There&apos;s a version of cleaning that checks boxes. Surfaces wiped, floors swept, job
              done. And then there&apos;s the version where you walk into a room and something is
              noticeably, unmistakably different — the air feels lighter and everything is exactly
              where it should be.
            </p>
            <p className="font-display text-[19px] italic text-clay">
              Raya Elite was founded to deliver the second kind.
            </p>
            <p>
              We started in Maryland with a clear focus: serve homeowners, businesses, and
              institutions that hold a higher standard and deserve a cleaning company that actually
              meets it. Not one that shows up late, cuts corners on the rooms you&apos;re least likely
              to check, or disappears when something goes wrong.
            </p>
            <p>
              Every client we&apos;ve taken on has added to what we know about what excellent service
              actually looks like in practice — not in a brochure. That knowledge shapes how we hire,
              how we train, and how we show up on every single job.
            </p>
            <p>
              We serve residential homeowners, commercial offices, government agencies, and
              diplomatic residences across Maryland and the Washington DC metro area. The spaces are
              different. The standard is not.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-cream">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Three Things We Don't Compromise On"
            subtitle="These are the principles that have shaped every hiring decision, every client interaction, and every job we've walked away from — satisfied."
            className="mb-14"
          />
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
        <SectionHeading
          eyebrow="The People Behind the Work"
          title="Leadership That Shows Up"
          subtitle="We're not a faceless cleaning company. There are real people behind every booking, every team dispatch, and every quality check — and we think you should know who they are."
          className="mb-14"
        />
        <div className="mx-auto grid max-w-[960px] gap-7 md:grid-cols-2">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="rounded-4xl bg-cream p-8 shadow-soft">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-sage-deep font-display text-[26px] font-semibold text-cream">
                  {l.initial}
                </div>
                <div>
                  <h3 className="font-display text-[22px] font-semibold text-ink">{l.name}</h3>
                  <div className="mt-1 text-[13px] font-bold uppercase tracking-wider text-clay">
                    {l.role}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-sand">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Our Credentials"
            title="Verified, Covered, and Accountable"
            subtitle="Credentials matter in this business. They're not decorations — they're the difference between a company you can trust with your keys and one you can't. Here's where we stand."
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => {
              const active = c.status.toLowerCase().includes("progress");
              return (
                <div key={c.label} className="rounded-3xl bg-cream p-6 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage-tint text-sage-deep">
                      <Sprig className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                        active ? "bg-clay-tint text-clay-deep" : "bg-sage-tint text-sage-deep"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[18px] font-semibold text-ink">{c.label}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{c.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-[760px] text-center text-[15px] leading-relaxed text-ink-soft">
            Our government and federal certifications are actively in progress. Clients requiring
            compliance documentation for contract purposes are welcome to{" "}
            <Link href="/contact" className="font-bold text-clay underline underline-offset-2">
              contact us directly
            </Link>{" "}
            for our current capability statement.
          </p>
        </div>
      </section>

      {/* COMMUNITY & RESPONSIBILITY */}
      <section className="container-x py-20 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <SectionHeading
            eyebrow="How We Operate"
            title="Good Business and Good Practice Aren't Separate Things"
            className="mb-8"
          />
          <div className="space-y-4 text-[17px] leading-relaxed text-ink-soft">
            <p>
              We made a deliberate decision early on to build Raya Elite around products, practices,
              and people that we could stand behind. That means EPA-recognized, non-toxic cleaning
              products that are safe for families, children, and pets — not just effective on
              surfaces.
            </p>
            <p>
              It means hiring from within the communities we serve, providing proper training, and
              creating work that people can take pride in. And it means running a business with
              transparency — clear pricing, honest communication, and accountability when something
              falls short.
            </p>
            <p>
              We&apos;re not the right fit for every client. But for the ones we serve, we intend to
              be exactly what they need.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x pt-4">
        <div className="kicker mb-4 justify-center">
          <Sprig className="h-4 w-4 text-sage" />
          By the Numbers
        </div>
      </section>
      <StatsCounter />

      {/* BOTTOM CTA */}
      <section className="container-x py-20 md:py-24">
        <div className="rounded-[2.5rem] bg-clay px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Ready to Experience the Raya Elite Difference?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-cream/85">
            Join hundreds of Maryland and DC clients who&apos;ve handed over the keys — and never
            looked back.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/book" className="btn-gold px-9 py-4 text-[16px]">
              Book Your Cleaning
            </Link>
            <Link href="/contact" className="btn-outline-light px-9 py-4 text-[16px]">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
