"use client";

import { useState } from "react";
import { SERVICE_OPTIONS, HEAR_OPTIONS } from "@/lib/data";
import Sprig from "@/components/ui/Sprig";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  hear: string;
};

const empty = (service = ""): FormState => ({
  name: "",
  email: "",
  phone: "",
  service,
  message: "",
  hear: "",
});

const labelCls = "flex flex-col gap-2 text-[13px] font-bold text-ink";
const inputCls =
  "rounded-2xl border border-ink/15 bg-cream px-4 py-3 text-[15px] font-normal text-ink outline-none transition-colors focus:border-clay";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [form, setForm] = useState<FormState>(empty(initialService));
  const [status, setStatus] = useState<"idle" | "error" | "success" | "sending">("idle");

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      try {
        window.scrollTo({ top: 0 });
      } catch {}
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-4xl bg-cream px-10 py-16 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-deep text-cream">
          <Sprig className="h-8 w-8" />
        </div>
        <h2 className="mt-6 font-display text-[28px] font-semibold text-ink">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-[360px] text-[16px] leading-relaxed text-ink-soft">
          We&apos;ve received your message and will be in touch within 2 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(empty());
            setStatus("idle");
          }}
          className="btn-outline mt-7 px-7 py-3 text-[14px]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-4xl bg-cream p-8 shadow-soft md:p-10">
      {status === "error" && (
        <div className="rounded-2xl border-l-4 border-clay bg-clay-tint px-4 py-3 text-[14px] font-semibold text-clay-deep">
          Please complete the required fields marked with an asterisk.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelCls}>
          Full Name *
          <input type="text" value={form.name} onChange={set("name")} className={inputCls} />
        </label>
        <label className={labelCls}>
          Email *
          <input type="email" value={form.email} onChange={set("email")} className={inputCls} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelCls}>
          Phone
          <input type="tel" value={form.phone} onChange={set("phone")} className={inputCls} />
        </label>
        <label className={labelCls}>
          Service Type
          <select value={form.service} onChange={set("service")} className={inputCls}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelCls}>
        Message *
        <textarea rows={5} value={form.message} onChange={set("message")} className={`${inputCls} resize-y`} />
      </label>

      <label className={labelCls}>
        How did you hear about us?
        <select value={form.hear} onChange={set("hear")} className={inputCls}>
          <option value="">Optional</option>
          {HEAR_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" disabled={status === "sending"} className="btn-clay mt-1 py-4 text-[16px] disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
