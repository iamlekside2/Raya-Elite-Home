"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";

const SPACE_TYPES = [
  { key: "Residential home or apartment", icon: "🏠" },
  { key: "Office or commercial space", icon: "🏢" },
  { key: "Move-in / move-out property", icon: "📦" },
  { key: "Post-construction site", icon: "🔧" },
  { key: "Government or agency facility", icon: "🏛️" },
  { key: "Embassy or diplomatic residence", icon: "🚩" },
  { key: "Not sure yet", icon: "❓" },
];

const SQFT_RANGES = [
  "Under 1,000 sq ft",
  "1,000 – 2,500 sq ft",
  "2,500 – 5,000 sq ft",
  "5,000 – 10,000 sq ft",
  "Over 10,000 sq ft",
];

const CLEAN_TYPES = [
  { key: "Standard clean", icon: "✨" },
  { key: "Deep clean", icon: "🔍" },
  { key: "Move-in / move-out clean", icon: "📦" },
  { key: "Post-construction clean", icon: "🔧" },
  { key: "Recurring service (weekly / biweekly / monthly)", icon: "🔄" },
  { key: "Other", icon: "💬" },
];

const FREQUENCY = ["One-time", "Weekly", "Every two weeks", "Monthly"];

const START = [
  { key: "As soon as possible", icon: "🚀" },
  { key: "Within the next few days", icon: "⏱️" },
  { key: "This week", icon: "📅" },
  { key: "Next week", icon: "📆" },
  { key: "I'm just planning ahead", icon: "🗺️" },
];

const TIMES = [
  { key: "Morning (7AM – 12PM)", icon: "☀️" },
  { key: "Afternoon (12PM – 4PM)", icon: "🌤️" },
  { key: "Evening (4PM – 6PM)", icon: "🌙" },
  { key: "Flexible — any time works", icon: "⚙️" },
];

const COMMERCIAL = new Set([
  "Office or commercial space",
  "Government or agency facility",
  "Embassy or diplomatic residence",
  "Post-construction site",
]);

const labelCls = "flex flex-col gap-2 text-[13px] font-bold text-ink";
const inputCls =
  "rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-[15px] font-normal text-ink outline-none transition-colors focus:border-clay";

function Counter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-ink/15 bg-paper px-4 py-3">
      <span className="text-[14px] font-semibold text-ink">{label}</span>
      <span className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`decrease ${label}`}
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-clay-tint text-[18px] font-bold text-clay"
        >
          −
        </button>
        <span className="w-6 text-center text-[16px] font-bold text-ink">{value}</span>
        <button
          type="button"
          aria-label={`increase ${label}`}
          onClick={() => onChange(value + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-[18px] font-bold text-cream"
        >
          +
        </button>
      </span>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onSelect,
}: {
  options: { key: string; icon?: string }[];
  value: string;
  onSelect: (k: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const active = value === o.key;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => onSelect(o.key)}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-semibold transition-colors ${
              active
                ? "border-clay bg-clay text-cream"
                : "border-ink/15 bg-paper text-ink hover:border-clay/50"
            }`}
          >
            {o.icon && <span className="text-[18px]">{o.icon}</span>}
            <span>{o.key}</span>
          </button>
        );
      })}
    </div>
  );
}

const STEP_LABELS = [
  "Your contact details",
  "About the space",
  "Type & frequency of clean",
  "Timing & availability",
  "Anything else?",
];

export default function QuoteForm({
  initialType = "",
  mode = "contact",
}: {
  initialType?: string;
  mode?: "contact" | "book";
}) {
  const isBooking = mode === "book";
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const tel = `tel:${SITE.phone.replace(/[^0-9]/g, "")}`;
  // Reset the form's scroll position to the top whenever the step changes.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [step]);
  // Bring the confirmation into view (centered) once submitted.
  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: initialType,
    bedrooms: 1,
    bathrooms: 1,
    pets: "",
    petsDetail: "",
    sqft: "",
    levels: 1,
    sqftRange: "",
    restrooms: 1,
    spaceNotes: "",
    cleanType: "",
    cleanOther: "",
    frequency: "",
    startWhen: "",
    timeOfDay: "",
    notes: "",
  });

  const set = (k: keyof typeof f, v: string | number) => setF((s) => ({ ...s, [k]: v }));
  const isResidential = f.spaceType === "Residential home or apartment";
  const isCommercial = COMMERCIAL.has(f.spaceType);

  const canNext = () => {
    if (step === 0) return !!f.name && !!f.email && !!f.phone;
    if (step === 1) return !!f.spaceType;
    return true;
  };

  const submit = async () => {
    setStatus("sending");
    const summary = [
      `Space: ${f.spaceType}`,
      isResidential && `Bedrooms ${f.bedrooms}, Bathrooms ${f.bathrooms}, Levels ${f.levels}, Pets: ${f.pets}${f.petsDetail ? ` (${f.petsDetail})` : ""}, Sq ft: ${f.sqft || "n/a"}`,
      isCommercial && `Size: ${f.sqftRange}, Restrooms ${f.restrooms}, Levels ${f.levels}, Notes: ${f.spaceNotes || "n/a"}`,
      `Clean: ${f.cleanType}${f.cleanOther ? ` (${f.cleanOther})` : ""}`,
      `Frequency: ${f.frequency}`,
      `Start: ${f.startWhen}, Preferred time: ${f.timeOfDay}`,
      f.notes && `Notes: ${f.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch(isBooking ? "/api/book" : "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          phone: f.phone,
          spaceType: f.spaceType,
          bedrooms: isResidential ? String(f.bedrooms) : "",
          bathrooms: isResidential ? String(f.bathrooms) : "",
          pets: isResidential ? (f.pets === "Yes" ? `Yes — ${f.petsDetail || "unspecified"}` : f.pets) : "",
          sqft: isResidential ? f.sqft : isCommercial ? f.sqftRange : "",
          restrooms: isCommercial ? String(f.restrooms) : "",
          levels: String(f.levels),
          spaceNotes: isCommercial ? f.spaceNotes : "",
          cleanType: f.cleanType === "Other" ? `Other — ${f.cleanOther || "unspecified"}` : f.cleanType,
          frequency: f.frequency,
          startWhen: f.startWhen,
          timeOfDay: f.timeOfDay,
          notes: f.notes,
          message: summary,
          source: isBooking ? "booking-form" : "contact-quote-form",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="flex flex-col items-center rounded-[2rem] bg-cream px-8 py-14 text-center shadow-soft md:px-12"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-deep text-[36px] text-cream shadow-soft">
          ✓
        </div>
        <h3 className="mt-6 font-display text-[26px] font-semibold text-ink">
          {isBooking ? "Booking request received" : "Request received"}
        </h3>
        <p className="mx-auto mt-3 max-w-[440px] text-[16px] leading-relaxed text-ink-soft">
          {isBooking
            ? "We'll confirm your appointment within 2 business hours. Check your email for a summary."
            : "Thank you. We've received your request and will be in touch shortly with your quote."}
        </p>
        <a href={tel} className="btn-outline mt-7 px-7 py-3 text-[14px]">
          Prefer to talk? Call us
        </a>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="max-h-[80vh] overflow-y-auto overscroll-contain rounded-[2rem] bg-cream p-7 shadow-soft md:p-9"
    >
      <div className="kicker mb-2">{isBooking ? "Book Your Cleaning" : "Get a Free Quote"}</div>
      <h2 className="font-display text-[26px] font-semibold leading-tight text-ink">
        Tell us about your space
      </h2>
      <p className="mt-1 text-[15px] text-ink-soft">
        {isBooking
          ? "Pick what fits — we'll confirm your appointment within 2 business hours."
          : "We'll come back with an accurate price — no guesswork, no obligation."}
      </p>

      {/* progress */}
      <div className="mt-6 flex items-center gap-2">
        {STEP_LABELS.map((_, i) => (
          <span
            key={i}
            className={`h-[6px] flex-1 rounded-full ${i <= step ? "bg-clay" : "bg-ink/10"}`}
          />
        ))}
      </div>
      <div className="mt-4 text-[12px] font-bold uppercase tracking-wider text-clay">
        Step {step + 1} of {STEP_LABELS.length} · {STEP_LABELS[step]}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {step === 0 && (
          <>
            <label className={labelCls}>
              Full Name *
              <input className={inputCls} placeholder="Your full name" value={f.name} onChange={(e) => set("name", e.target.value)} />
            </label>
            <label className={labelCls}>
              Email Address *
              <input type="email" className={inputCls} placeholder="Your email address" value={f.email} onChange={(e) => set("email", e.target.value)} />
            </label>
            <label className={labelCls}>
              Phone Number
              <input type="tel" className={inputCls} placeholder="Your phone number" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
            </label>
          </>
        )}

        {step === 1 && (
          <>
            <div className={labelCls}>What type of space are we cleaning?</div>
            <OptionGrid options={SPACE_TYPES} value={f.spaceType} onSelect={(k) => set("spaceType", k)} />

            {isResidential && (
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <Counter label="Bedrooms" value={f.bedrooms} onChange={(n) => set("bedrooms", n)} />
                <Counter label="Bathrooms" value={f.bathrooms} onChange={(n) => set("bathrooms", n)} />
                <Counter label="Building levels" value={f.levels} onChange={(n) => set("levels", n)} />
                <label className={labelCls}>
                  Approx. square footage (optional)
                  <input className={inputCls} placeholder="e.g. 1,200 sq ft" value={f.sqft} onChange={(e) => set("sqft", e.target.value)} />
                </label>
                <div className="sm:col-span-2">
                  <div className={`${labelCls} mb-2`}>Pets at home?</div>
                  <OptionGrid
                    options={[{ key: "No pets" }, { key: "Yes" }]}
                    value={f.pets}
                    onSelect={(k) => set("pets", k)}
                  />
                  {f.pets === "Yes" && (
                    <textarea
                      className={`${inputCls} mt-3 w-full resize-y`}
                      rows={2}
                      placeholder="What type? How many?"
                      value={f.petsDetail}
                      onChange={(e) => set("petsDetail", e.target.value)}
                    />
                  )}
                </div>
              </div>
            )}

            {isCommercial && (
              <div className="mt-2 flex flex-col gap-3">
                <label className={labelCls}>
                  Approximate square footage
                  <select className={inputCls} value={f.sqftRange} onChange={(e) => set("sqftRange", e.target.value)}>
                    <option value="">Select a range</option>
                    {SQFT_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Counter label="Restrooms" value={f.restrooms} onChange={(n) => set("restrooms", n)} />
                  <Counter label="Building levels" value={f.levels} onChange={(n) => set("levels", n)} />
                </div>
                <label className={labelCls}>
                  Tell us about the space (optional)
                  <textarea className={`${inputCls} resize-y`} rows={3} placeholder="Briefly describe the space — layout, floors, access notes…" value={f.spaceNotes} onChange={(e) => set("spaceNotes", e.target.value)} />
                </label>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <div className={labelCls}>What type of clean do you need?</div>
            <OptionGrid options={CLEAN_TYPES} value={f.cleanType} onSelect={(k) => set("cleanType", k)} />
            {f.cleanType === "Other" && (
              <textarea className={`${inputCls} resize-y`} rows={2} placeholder="Please specify" value={f.cleanOther} onChange={(e) => set("cleanOther", e.target.value)} />
            )}
            <div className={`${labelCls} mt-2`}>How often?</div>
            <OptionGrid options={FREQUENCY.map((k) => ({ key: k }))} value={f.frequency} onSelect={(k) => set("frequency", k)} />
          </>
        )}

        {step === 3 && (
          <>
            <div className={labelCls}>When would you like to start?</div>
            <OptionGrid options={START} value={f.startWhen} onSelect={(k) => set("startWhen", k)} />
            <div className={`${labelCls} mt-2`}>Preferred time of day</div>
            <OptionGrid options={TIMES} value={f.timeOfDay} onSelect={(k) => set("timeOfDay", k)} />
          </>
        )}

        {step === 4 && (
          <>
            <label className={labelCls}>
              Additional notes (optional)
              <textarea className={`${inputCls} resize-y`} rows={4} placeholder="e.g. We have two dogs, a finished basement, and the kitchen needs extra attention." value={f.notes} onChange={(e) => set("notes", e.target.value)} />
            </label>
            {status === "error" && (
              <div className="rounded-2xl border-l-4 border-clay bg-clay-tint px-4 py-3 text-[14px] font-semibold text-clay-deep">
                Something went wrong. Please try again or call us directly.
              </div>
            )}
          </>
        )}
      </div>

      {/* nav */}
      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-outline px-6 py-3 text-[14px]">
            Back
          </button>
        ) : (
          <span />
        )}
        {step < STEP_LABELS.length - 1 ? (
          <button
            type="button"
            disabled={!canNext()}
            onClick={() => setStep((s) => s + 1)}
            className="btn-clay px-7 py-3 text-[15px] disabled:opacity-50"
          >
            Continue
          </button>
        ) : (
          <button type="button" disabled={status === "sending"} onClick={submit} className="btn-clay px-7 py-3 text-[15px] disabled:opacity-60">
            {status === "sending" ? "Sending…" : isBooking ? "Send My Booking Request" : "Send My Quote Request"}
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-[13px] text-ink-soft">
        🔒 We respond within 2 business hours. Your details are never shared or sold.
      </p>
    </div>
  );
}
