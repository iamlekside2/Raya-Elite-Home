import Link from "next/link";
import { FOOTER_SERVICES, FOOTER_COMPANY, SOCIALS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-11 pt-[68px]">
        {/* Brand */}
        <div>
          <div className="mb-[18px] flex items-center gap-3">
            <span className="diamond h-[13px] w-[13px]" />
            <span className="font-playfair text-[21px] font-bold tracking-[3px]">RAYA ELITE</span>
          </div>
          <p className="mb-5 max-w-[260px] text-[14px] leading-[1.7] text-white/65">
            An elite standard of clean — for homes, offices, and the spaces that matter most.
          </p>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="rounded-sm border border-white/20 px-3 py-[6px] text-[12px] font-bold text-white/75 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="mb-[18px] text-[12px] font-bold uppercase tracking-[2px] text-gold">
            Services
          </div>
          {FOOTER_SERVICES.map((s) => (
            <Link
              key={s}
              href="/services"
              className="block py-[7px] text-left text-[14px] text-white/70 transition-colors hover:text-gold"
            >
              {s}
            </Link>
          ))}
        </div>

        {/* Company */}
        <div>
          <div className="mb-[18px] text-[12px] font-bold uppercase tracking-[2px] text-gold">
            Company
          </div>
          {FOOTER_COMPANY.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-[7px] text-left text-[14px] text-white/70 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div className="mb-[18px] text-[12px] font-bold uppercase tracking-[2px] text-gold">
            Contact
          </div>
          <div className="text-[14px] leading-[1.9] text-white/70">
            <div>{SITE.phone}</div>
            <div>{SITE.email}</div>
            <div className="mt-[10px]">{SITE.hours[0]}</div>
            <div>{SITE.hours[1]}</div>
            <div className="mt-[10px]">{SITE.area}</div>
          </div>
        </div>
      </div>

      <div className="container-x mt-[54px] flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-[12.5px] text-white/50">
        <span>
          © {new Date().getFullYear()} {SITE.name} · All Rights Reserved
        </span>
        <span className="flex gap-3">
          <Link href="#" className="transition-colors hover:text-gold">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link href="#" className="transition-colors hover:text-gold">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
