"use client";

import { useState } from "react";

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

  if (variant === "addon") {
    return (
      <div className="border border-card-border bg-white">
        {items.map((a, i) => (
          <div key={a.title} className="border-b border-[#f0ece2] last:border-b-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-[14px]">
                <span className="diamond h-[9px] w-[9px] flex-none" />
                <span className="text-[16px] font-bold text-navy">{a.title}</span>
              </span>
              <span className="flex items-center gap-[18px]">
                <span className="text-[15px] font-bold text-gold-text">{a.price}</span>
                <span className="w-[18px] text-center text-[20px] text-gold">
                  {open === i ? "–" : "+"}
                </span>
              </span>
            </button>
            {open === i && (
              <div className="animate-fadeIn px-6 pb-[22px] pl-[62px] text-[14.5px] leading-[1.65] text-[#5a5a5a]">
                {a.body}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // FAQ
  return (
    <div className="border-t-2 border-gold">
      {items.map((f, i) => (
        <div key={f.title} className="border-b border-[#e8e2d6]">
          <button
            type="button"
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between gap-4 px-1 py-[22px] text-left"
          >
            <span className="text-[16.5px] font-bold text-navy">{f.title}</span>
            <span className="w-5 flex-none text-center text-[24px] text-gold">
              {open === i ? "–" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="animate-fadeIn max-w-[760px] px-1 pb-6 text-[15px] leading-[1.7] text-[#5a5a5a]">
              {f.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
