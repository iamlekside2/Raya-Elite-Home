import Link from "next/link";
import { NAV_ITEMS, FOOTER_SERVICES, SITE } from "@/lib/constants";
import Sprig from "@/components/ui/Sprig";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* soft arch glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-clay/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sage/15 blur-2xl" />

      <div className="container-x relative grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-12 pt-20">
        {/* Brand */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-clay">
              <Sprig className="h-5 w-5" />
            </span>
            <span className="font-display text-[22px] font-semibold">Raya Elite</span>
          </div>
          <p className="mb-6 max-w-[260px] text-[15px] leading-relaxed text-paper/65">
            Luxury residential &amp; commercial cleaning for Maryland and Washington D.C. An elite
            standard, every time.
          </p>
          <span className="text-[15px] tracking-[3px] text-gold">★★★★★</span>
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
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
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
        <span>Licensed · Bonded · Insured · Maryland</span>
      </div>
    </footer>
  );
}
