import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES, FOOTER_COMPANY, SITE } from "@/lib/constants";

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
              src="/images/raya-logo-light-v3.png"
              alt="Raya Elite — Home & Office Cleaning"
              width={688}
              height={687}
              className="h-[104px] w-auto"
            />
          </div>
          <p className="mb-6 max-w-[260px] text-[15px] leading-relaxed text-paper/65">
            An elite standard of clean — for homes, offices, and the spaces that matter most.
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#002147]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#002147]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#002147]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#002147]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
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
              className="block py-[7px] text-[15px] text-paper/70 transition-colors hover:text-[#C9A84C]"
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
              className="block py-[7px] text-[15px] text-paper/70 transition-colors hover:text-[#C9A84C]"
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
            <div>Toll-free: {SITE.tollFree}</div>
            <div>Fax: {SITE.fax}</div>
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
          <Link href="/privacy" className="transition-colors hover:text-[#C9A84C]">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link href="/terms" className="transition-colors hover:text-[#C9A84C]">Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
