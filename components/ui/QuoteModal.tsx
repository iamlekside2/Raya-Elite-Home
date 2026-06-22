"use client";

import { useEffect, useState } from "react";
import { QUOTE_HELP_OPTIONS } from "@/lib/data";
import { SITE } from "@/lib/constants";

type Props = {
  triggerLabel: string;
  triggerClassName?: string;
};

type FormState = { name: string; email: string; phone: string; help: string; space: string };
const empty: FormState = { name: "", email: "", phone: "", help: "", space: "" };

const labelCls =
  "flex flex-col gap-[7px] text-[12.5px] font-bold uppercase tracking-[0.5px] text-navy";
const inputCls =
  "rounded-sm border border-[#d6cfc0] bg-[#fbf9f5] px-[14px] py-[12px] text-[15px] font-normal normal-case tracking-normal text-charcoal outline-none focus:border-gold";

export default function QuoteModal({ triggerLabel, triggerClassName }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setForm(empty);
      setStatus("idle");
    }, 200);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.help,
          message: form.space || `Quote request: ${form.help || "General enquiry"}`,
          source: "quote-modal",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel}
      </button>

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-[rgba(0,15,32,0.7)] p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Get a free quote"
            className="my-8 w-full max-w-[560px] animate-fadeUp bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.4)] md:p-9"
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#eee] pb-5">
              <div>
                <div className="mb-2 inline-flex items-center gap-[9px]">
                  <span className="diamond h-[7px] w-[7px]" />
                  <span className="eyebrow">Free Quote</span>
                </div>
                <h2 className="m-0 font-playfair text-[26px] font-bold leading-tight text-navy">
                  Get a Free Quote
                </h2>
                <p className="m-0 mt-1 text-[15px] text-[#5a5a5a]">
                  Tell us what you need. We&apos;ll get back to you in no time.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="-mr-1 -mt-1 flex h-9 w-9 flex-none items-center justify-center text-[26px] leading-none text-[#8a8a8a] hover:text-navy"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-[32px] text-white">
                  ✓
                </div>
                <p className="mx-auto mt-5 max-w-[360px] text-[16px] font-bold text-navy">
                  Thank you. We&apos;ll be in touch within 2 hours.
                </p>
                <button type="button" onClick={close} className="btn-outline-navy mt-6 px-7 py-3 text-[14px]">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="border-l-[3px] border-[#b3261e] bg-[#fbeaea] px-4 py-3 text-[13.5px] text-[#8a1e18]">
                    Something went wrong. Please try again or call us at {SITE.phone}.
                  </div>
                )}
                <label className={labelCls}>
                  Full Name *
                  <input type="text" placeholder="Your full name" value={form.name} onChange={set("name")} className={inputCls} />
                </label>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
                  <label className={labelCls}>
                    Email Address *
                    <input type="email" placeholder="Your email address" value={form.email} onChange={set("email")} className={inputCls} />
                  </label>
                  <label className={labelCls}>
                    Phone Number
                    <input type="tel" placeholder="Your phone number" value={form.phone} onChange={set("phone")} className={inputCls} />
                  </label>
                </div>
                <label className={labelCls}>
                  What Can We Help You With?
                  <select value={form.help} onChange={set("help")} className={inputCls}>
                    <option value="">Select an option</option>
                    {QUOTE_HELP_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelCls}>
                  Tell Us About Your Space (Optional)
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your space and what you need"
                    value={form.space}
                    onChange={set("space")}
                    className={`${inputCls} resize-y`}
                  />
                </label>
                <button type="submit" disabled={status === "sending"} className="btn-primary mt-1 min-h-[52px] py-4 text-[15px] disabled:opacity-70">
                  {status === "sending" ? "Sending…" : "Send My Quote Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
