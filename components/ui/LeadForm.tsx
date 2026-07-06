"use client";

import { useState } from "react";
import { QUOTE_HELP_OPTIONS } from "@/lib/data";
import { SITE } from "@/lib/constants";
import Sprig from "@/components/ui/Sprig";

type FormState = { name: string; email: string; phone: string; help: string; space: string };
const empty: FormState = { name: "", email: "", phone: "", help: "", space: "" };

const labelCls = "flex flex-col gap-2 text-[13px] font-bold text-ink";
const inputCls =
  "rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-[15px] font-normal text-ink outline-none transition-colors focus:border-clay";

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
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
          source: "homepage-book-form",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[2rem] bg-cream p-7 shadow-lift md:p-9">
      {status === "success" ? (
        <div className="py-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-clay">
            <Sprig className="h-8 w-8" />
          </div>
          <p className="mx-auto mt-5 max-w-[360px] text-[17px] font-semibold text-ink">
            Thank you. We&apos;ll be in touch within 2 hours.
          </p>
        </div>
      ) : (
        <>
          <div className="kicker mb-2">
            <Sprig className="h-4 w-4 text-sage" />
            Free Quote
          </div>
          <h3 className="font-display text-[24px] font-semibold leading-tight text-ink">
            Request your free quote
          </h3>
          <p className="mt-1 text-[14.5px] text-ink-soft">
            Tell us what you need — we&apos;ll reply the same day.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
            {status === "error" && (
              <div className="rounded-2xl border-l-4 border-clay bg-clay-tint px-4 py-3 text-[14px] font-semibold text-clay-deep">
                Please add at least your name and email — or call us at {SITE.phone}.
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
        </>
      )}
    </div>
  );
}
