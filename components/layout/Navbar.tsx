"use client";

import Image from "next/image";
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
      <header className="sticky top-0 z-[60] border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="container-x flex h-[92px] items-center gap-6">
          {/* Wordmark */}
          <Link href="/" className="flex items-center" aria-label="Raya Elite home">
            <Image
              src="/images/raya-logo-v3.png"
              alt="Raya Elite — Home & Office Cleaning"
              width={688}
              height={687}
              priority
              className="h-[74px] w-auto"
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden flex-1 items-center justify-center gap-7 min-[900px]:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[14px] font-semibold transition-colors ${
                  isActive(item.href)
                    ? "text-clay"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book Now — right */}
          <div className="hidden min-[900px]:block">
            <Link href="/book" className="btn-clay px-6 py-[11px] text-[14px]">
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col gap-[5px] p-2 min-[900px]:hidden"
          >
            <span className="block h-[2px] w-[24px] rounded-full bg-ink" />
            <span className="block h-[2px] w-[24px] rounded-full bg-ink" />
            <span className="block h-[2px] w-[24px] rounded-full bg-ink" />
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="sticky top-[92px] z-[55] animate-fadeIn border-b border-ink/10 bg-paper px-6 pb-6 pt-2 min-[900px]:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full border-b border-ink/5 py-4 text-[16px] font-semibold ${
                isActive(item.href) ? "text-clay" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="btn-clay mt-5 w-full py-[14px]"
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
