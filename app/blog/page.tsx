import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { IMAGES } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = pageMeta({
  title: "Blog | Cleaning Advice & Guides — Raya Elite Maryland & DC",
  description:
    "Practical cleaning guides for homeowners and businesses across Maryland and Washington DC — written by people who clean for a living.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        img={IMAGES.aboutStory}
        imgAlt="Raya Elite professional cleaning a home"
        breadcrumb="Home / Blog"
        title="Cleaning Advice Worth Reading"
        subtitle="Practical guides for homeowners and businesses who want to make better decisions about their space — written by people who clean for a living."
      />

      <section className="container-x py-20 md:py-24">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-4xl bg-cream shadow-soft transition-transform duration-300 hover:-translate-y-2"
            >
              <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-clay">
                  {post.cat}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-ink-soft">
                  {post.date}
                  {post.read ? ` · ${post.read}` : ""}
                </div>
                <h2 className="mt-3 font-display text-[21px] font-semibold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn-link mt-6">
                  Read the Guide <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-clay px-8 py-16 text-center text-cream md:px-14">
          <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-tight">
            Ready for a Spotless Space?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-cream/85">
            Book online in under two minutes — no payment required today.
          </p>
          <Link href="/book" className="btn-gold mt-8 px-9 py-4 text-[16px]">
            Book Your Cleaning
          </Link>
        </div>
      </section>
    </>
  );
}
