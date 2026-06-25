import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import Sprig from "@/components/ui/Sprig";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Raya Elite Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(130deg,#00152e 0%,#002147 48%,#0a3262 100%)" }}
      >
        <div className="pointer-events-none absolute -right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rotate-45 border border-[#C9A84C]/20" />
        <div className="container-x relative py-16 md:py-20">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / {post.cat}
          </div>
          <h1 className="max-w-[820px] font-display text-[clamp(30px,4.4vw,50px)] font-semibold leading-[1.08] text-cream">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-[14px] text-cream/75">
            <Sprig className="h-5 w-5 text-[#C9A84C]" />
            <span>
              {post.date}
              {post.read ? ` · ${post.read}` : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="container-x -mt-2 pt-10">
        <div className="relative mx-auto aspect-[16/9] max-w-[900px] overflow-hidden rounded-4xl shadow-lift">
          <Image src={post.img} alt={post.title} fill priority sizes="(max-width:1024px) 92vw, 900px" className="object-cover" />
        </div>
      </section>

      {/* Body */}
      <article className="container-x py-14 md:py-16">
        <div className="mx-auto max-w-[760px]">
          <p className="font-display text-[clamp(19px,2vw,24px)] font-medium leading-relaxed text-ink">
            {post.intro}
          </p>

          <div className="mt-10 space-y-9">
            {post.blocks.map((b, i) => (
              <div key={i}>
                {b.h && (
                  <h2 className="font-display text-[24px] font-semibold leading-snug text-ink">{b.h}</h2>
                )}
                {b.p && <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{b.p}</p>}
                {b.ul && (
                  <ul className="mt-4 space-y-2">
                    {b.ul.map((it, j) => (
                      <li key={j} className="flex items-start gap-3 text-[17px] leading-relaxed text-ink-soft">
                        <Sprig className="mt-[5px] h-[17px] w-[17px] flex-none text-sage" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 rounded-4xl bg-sand p-8 text-center">
            <h3 className="font-display text-[22px] font-semibold text-ink">Want this done for you?</h3>
            <p className="mx-auto mt-2 max-w-[440px] text-[15px] leading-relaxed text-ink-soft">
              Book a cleaning in under two minutes, or get a free quote tailored to your space.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn-clay px-7 py-[14px] text-[15px]">
                Book Your Cleaning
              </Link>
              <Link href="/contact" className="btn-outline px-7 py-[14px] text-[15px]">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream">
          <div className="container-x py-16 md:py-20">
            <h2 className="mb-10 text-center font-display text-[clamp(24px,3vw,34px)] font-semibold text-ink">
              Keep Reading
            </h2>
            <div className="mx-auto grid max-w-[760px] gap-7 sm:grid-cols-2">
              {related.map((p) => (
                <article key={p.slug} className="group flex flex-col overflow-hidden rounded-4xl bg-paper shadow-soft transition-transform duration-300 hover:-translate-y-2">
                  <Link href={`/blog/${p.slug}`} className="relative block h-44 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-clay">{p.cat}</div>
                    <h3 className="mt-2 font-display text-[18px] font-semibold leading-snug text-ink">{p.title}</h3>
                    <Link href={`/blog/${p.slug}`} className="btn-link mt-4">
                      Read the Guide <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
