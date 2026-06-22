"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-gold/35 bg-navy">
        <div className="container-x flex h-[84px] items-center justify-between gap-6">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-[13px]" aria-label="Raya Elite home">
            <span className="diamond block h-[14px] w-[14px] flex-none" />
            <span className="flex flex-col leading-none">
              <span className="font-playfair text-[22px] font-bold tracking-[3px] text-white">
                RAYA ELITE
              </span>
              <span className="mt-[6px] text-[9.5px] uppercase tracking-[4px] text-gold">
                Home &amp; Office Cleaning
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 min-[881px]:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-[12.5px] uppercase tracking-[1.3px] text-white transition-colors hover:text-gold"
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gold" />
                )}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-gold px-[26px] py-[13px] text-[12.5px] uppercase tracking-[1px]"
            >
              Book Now
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col gap-[5px] p-[10px] min-[881px]:hidden"
          >
            <span className="block h-[2px] w-[26px] bg-white" />
            <span className="block h-[2px] w-[26px] bg-white" />
            <span className="block h-[2px] w-[26px] bg-white" />
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="sticky top-[84px] z-[55] animate-fadeIn border-b-2 border-gold bg-navy px-6 pb-6 pt-2 min-[881px]:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block w-full border-b border-white/10 px-[2px] py-[17px] text-[15px] uppercase tracking-[1.2px] text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-[18px] w-full p-4 uppercase tracking-[1px]"
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
