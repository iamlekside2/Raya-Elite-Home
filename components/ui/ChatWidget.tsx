"use client";

import { useEffect, useRef, useState } from "react";
import { QUOTE_HELP_OPTIONS } from "@/lib/data";

// Lightweight automated chat: greets the visitor, asks them to fill a short
// form, and logs the lead to the Homepage tab of the Google Sheet, flagged as
// coming from the chat widget. No live agent / third-party service needed.

type Form = { name: string; email: string; phone: string; help: string };
const empty: Form = { name: "", email: "", phone: "", help: "" };

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-paper px-3 py-2 text-[14px] text-ink outline-none transition-colors focus:border-clay";

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-[2px] flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage-tint text-sage-deep">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="M12 21V7" /><path d="M12 12c0-3 2.2-5.2 5-5.6-.2 2.8-2.2 5-5 5.6Z" />
          <path d="M12 9.5C12 6.8 10 4.6 7 4c.1 2.7 2 4.9 5 5.5Z" />
        </svg>
      </span>
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-paper-2 px-3.5 py-2.5 text-[14px] leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [form, setForm] = useState<Form>(empty);
  const bodyRef = useRef<HTMLDivElement>(null);

  // reveal the form a beat after opening (automated "typing" feel)
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setShowForm(true), 700);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [showForm, sent, status]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
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
          notes: "💬 Submitted via website chat widget",
          source: "chat-widget",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setSent(true);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[110] flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream shadow-lift transition-transform duration-200 hover:-translate-y-[2px] hover:bg-clay-deep"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[110] flex max-h-[70vh] w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl bg-cream shadow-lift">
          {/* Header */}
          <div className="flex items-center gap-3 bg-clay px-5 py-4 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15 text-[16px]">💬</span>
            <div>
              <div className="font-display text-[16px] font-semibold leading-tight">Raya Elite</div>
              <div className="text-[12px] text-cream/80">We typically reply in minutes</div>
            </div>
          </div>

          {/* Body */}
          <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain p-4">
            <Bubble>Hi! 👋 Welcome to Raya Elite — your space deserves an elite clean.</Bubble>
            {showForm && !sent && (
              <Bubble>
                Tell us a little about you and our team will reach out the same day with a quote.
              </Bubble>
            )}

            {showForm && !sent && (
              <form onSubmit={submit} className="ml-9 space-y-2.5 rounded-2xl bg-paper-2 p-3.5">
                {status === "error" && (
                  <div className="rounded-lg bg-clay-tint px-3 py-2 text-[12.5px] font-semibold text-clay-deep">
                    Please add your name, email, and phone.
                  </div>
                )}
                <input className={inputCls} placeholder="Full name *" value={form.name} onChange={set("name")} />
                <input type="email" className={inputCls} placeholder="Email address *" value={form.email} onChange={set("email")} />
                <input type="tel" className={inputCls} placeholder="Phone number *" value={form.phone} onChange={set("phone")} />
                <select className={inputCls} value={form.help} onChange={set("help")}>
                  <option value="">What can we help with?</option>
                  {QUOTE_HELP_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-clay w-full py-2.5 text-[14px] disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send My Request"}
                </button>
              </form>
            )}

            {sent && (
              <Bubble>
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}! ✅ We&apos;ve got your
                details and a Raya Elite team member will reach out shortly.
              </Bubble>
            )}
          </div>
        </div>
      )}
    </>
  );
}
