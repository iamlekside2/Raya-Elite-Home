import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES, FOOTER_COMPANY, SOCIALS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* soft arch glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sage/15 blur-2xl" />

      <div className="container-x relative grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-12 pt-20">
        {/* Brand */}
        <div>
          <div className="mb-6">
            <Image
              src="/images/raya-logo-light.png"
              alt="Raya Elite — Home & Office Cleaning"
              width={691}
              height={751}
              className="h-[104px] w-auto"
            />
          </div>
          <p className="mb-6 max-w-[260px] text-[15px] leading-relaxed text-paper/65">
            An elite standard of clean — for homes, offices, and the spaces that matter most.
          </p>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="rounded-full border border-paper/20 px-4 py-[6px] text-[12px] font-semibold text-paper/75 transition-colors hover:border-clay hover:bg-clay hover:text-cream"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.2em] text-clay">
            Services
          </div>
          {FOOTER_SERVICES.map((s) => (
            <Link
              key={s}
              href="/services"
              className="block py-[7px] text-[15px] text-paper/70 transition-colors hover:text-cream"
            >
              {s}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.2em] text-clay">
            Company
          </div>
          {FOOTER_COMPANY.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-[7px] text-[15px] text-paper/70 transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.2em] text-clay">
            Contact
          </div>
          <div className="text-[15px] leading-[1.9] text-paper/70">
            <div>{SITE.phone}</div>
            <div>{SITE.email}</div>
            <div className="mt-[10px]">{SITE.hours[0]}</div>
            <div>{SITE.hours[1]}</div>
            <div className="mt-[10px]">{SITE.area}</div>
          </div>
        </div>
      </div>

      <div className="container-x relative mt-16 flex flex-wrap justify-between gap-3 border-t border-paper/10 py-6 text-[13px] text-paper/50">
        <span>
          © {new Date().getFullYear()} {SITE.name} · All Rights Reserved
        </span>
        <span className="flex gap-3">
          <Link href="#" className="transition-colors hover:text-cream">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link href="#" className="transition-colors hover:text-cream">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
