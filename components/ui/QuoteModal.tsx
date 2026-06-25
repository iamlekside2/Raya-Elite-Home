"use client";

import { useEffect, useState } from "react";
import { QUOTE_HELP_OPTIONS } from "@/lib/data";
import { SITE } from "@/lib/constants";
import Sprig from "@/components/ui/Sprig";

type Props = {
  triggerLabel: string;
  triggerClassName?: string;
};

type FormState = { name: string; email: string; phone: string; help: string; space: string };
const empty: FormState = { name: "", email: "", phone: "", help: "", space: "" };

const labelCls = "flex flex-col gap-2 text-[13px] font-bold text-ink";
const inputCls =
  "rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-[15px] font-normal text-ink outline-none transition-colors focus:border-clay";

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
    // reset shortly after closing so the modal doesn't flash empty
    setTimeout(() => {
      setForm(empty);
      setStatus("idle");
    }, 200);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/homepage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.help,
          notes: form.space,
          source: "homepage-quick-form",
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
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Get a free quote"
            className="my-8 w-full max-w-[560px] animate-rise rounded-[2rem] bg-cream p-7 shadow-lift md:p-9"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="kicker mb-2">
                  <Sprig className="h-4 w-4 text-sage" />
                  Free Quote
                </div>
                <h2 className="font-display text-[26px] font-semibold leading-tight text-ink">
                  Get a Free Quote
                </h2>
                <p className="mt-1 text-[15px] text-ink-soft">
                  Tell us what you need. We&apos;ll get back to you in no time.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="-mr-2 -mt-2 flex h-9 w-9 flex-none items-center justify-center rounded-full text-[24px] text-ink-soft hover:bg-ink/5"
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-deep text-cream">
                  <Sprig className="h-8 w-8" />
                </div>
                <p className="mx-auto mt-5 max-w-[360px] text-[17px] font-semibold text-ink">
                  Thank you. We&apos;ll be in touch within 2 hours.
                </p>
                <button type="button" onClick={close} className="btn-outline mt-6 px-7 py-3 text-[14px]">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {status === "error" && (
                  <div className="rounded-2xl border-l-4 border-clay bg-clay-tint px-4 py-3 text-[14px] font-semibold text-clay-deep">
                    Something went wrong. Please try again or call us at {SITE.phone}.
                  </div>
                )}
                <label className={labelCls}>
                  Full Name *
                  <input type="text" placeholder="Your full name" value={form.name} onChange={set("name")} className={inputCls} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
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
                <button type="submit" disabled={status === "sending"} className="btn-clay mt-1 py-4 text-[16px] disabled:opacity-70">
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
