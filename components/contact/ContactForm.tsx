"use client";

import { useState } from "react";
import { SERVICE_OPTIONS, HEAR_OPTIONS } from "@/lib/data";

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

const labelCls =
  "flex flex-col gap-[7px] text-[12.5px] font-bold uppercase tracking-[0.5px] text-navy";
const inputCls =
  "rounded-sm border border-[#d6cfc0] bg-[#fbf9f5] px-[14px] py-[13px] text-[15px] font-normal normal-case tracking-normal text-charcoal outline-none focus:border-gold";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [form, setForm] = useState<FormState>(empty(initialService));
  const [status, setStatus] = useState<"idle" | "error" | "success" | "sending">("idle");

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
      <div className="border-t-4 border-emerald bg-white px-10 py-14 text-center shadow-[0_12px_40px_rgba(0,33,71,0.1)]">
        <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-[32px] text-white">
          ✓
        </div>
        <h2 className="m-0 mb-3 font-playfair text-[26px] font-bold text-navy">Thank You!</h2>
        <p className="m-0 mb-[26px] text-[15.5px] leading-[1.7] text-[#5a5a5a]">
          We&apos;ve received your message and will be in touch within 2 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(empty());
            setStatus("idle");
          }}
          className="btn-outline-navy px-7 py-3 text-[14px]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-[18px] bg-white px-9 py-[38px] shadow-[0_12px_40px_rgba(0,33,71,0.08)]"
    >
      {status === "error" && (
        <div className="border-l-[3px] border-[#b3261e] bg-[#fbeaea] px-4 py-3 text-[13.5px] text-[#8a1e18]">
          Please complete the required fields marked with an asterisk.
        </div>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
        <label className={labelCls}>
          Full Name *
          <input type="text" value={form.name} onChange={set("name")} className={inputCls} />
        </label>
        <label className={labelCls}>
          Email *
          <input type="email" value={form.email} onChange={set("email")} className={inputCls} />
        </label>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[18px]">
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-[6px] min-h-[52px] py-4 text-[15px] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
