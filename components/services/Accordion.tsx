"use client";

import { useState } from "react";
import Sprig from "@/components/ui/Sprig";

export type AccordionItem = {
  title: string;
  price?: string;
  body: string;
};

type Props = {
  items: AccordionItem[];
  variant: "addon" | "faq";
  defaultOpen?: number | null;
};

export default function Accordion({ items, variant, defaultOpen = null }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={`overflow-hidden rounded-3xl border bg-cream transition-colors ${
              isOpen ? "border-clay/40" : "border-ink/10"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-3">
                {variant === "addon" && <Sprig className="h-5 w-5 flex-none text-sage" />}
                <span className="text-[17px] font-bold text-ink">{item.title}</span>
              </span>
              <span className="flex items-center gap-5">
                {item.price && (
                  <span className="text-[15px] font-bold text-clay">{item.price}</span>
                )}
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-[18px] transition-all ${
                    isOpen ? "rotate-45 bg-clay text-cream" : "bg-clay-tint text-clay"
                  }`}
                >
                  +
                </span>
              </span>
            </button>
            {isOpen && (
              <div className="animate-fadeIn px-6 pb-6 pl-[58px] text-[15px] leading-relaxed text-ink-soft">
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
