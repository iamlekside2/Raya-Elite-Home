"use client";

import Sprig from "@/components/ui/Sprig";

// In production, embed the live Jobber booking widget here via next/script:
//   <Script src={process.env.NEXT_PUBLIC_JOBBER_BOOKING_URL} strategy="lazyOnload" />
//   <div id="jobber-booking-widget" />
// The styled placeholder below mirrors the intended branded shell.

export default function JobberWidget() {
  return (
    <div className="overflow-hidden rounded-4xl border border-ink/10 bg-cream shadow-soft">
      <div className="flex items-center gap-3 bg-clay px-7 py-5">
        <Sprig className="h-5 w-5 text-cream" />
        <span className="font-display text-[18px] font-semibold text-cream">
          Raya Elite Online Booking
        </span>
      </div>
      <div className="flex min-h-[520px] flex-col items-center justify-center px-8 py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-tint text-sage-deep">
          <Sprig className="h-10 w-10" />
        </div>
        <div className="mt-6 font-mono text-[13px] tracking-[1px] text-clay">
          [ JOBBER BOOKING WIDGET ]
        </div>
        <p className="mt-4 max-w-[400px] text-[16px] leading-relaxed text-ink-soft">
          The live Jobber scheduling widget embeds here — clients choose a service, date, and time,
          and receive instant confirmation. No payment is collected at booking.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["Select Service", "Pick Date & Time", "Confirm"].map((s) => (
            <span
              key={s}
              className="rounded-full bg-paper-2 px-5 py-2 text-[13px] font-bold text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
