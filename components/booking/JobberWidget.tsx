"use client";

// In production, embed the live Jobber booking widget here via next/script:
//   <Script src={process.env.NEXT_PUBLIC_JOBBER_BOOKING_URL} strategy="lazyOnload" />
//   <div id="jobber-booking-widget" />
// The styled placeholder below mirrors the intended branded shell.

export default function JobberWidget() {
  return (
    <div className="overflow-hidden rounded-sm border border-[#d9d2c4] bg-white shadow-[0_12px_40px_rgba(0,33,71,0.1)]">
      <div className="flex items-center gap-3 bg-navy px-[26px] py-[18px]">
        <span className="diamond h-[11px] w-[11px]" />
        <span className="text-[14px] font-bold tracking-[1px] text-white">
          Raya Elite Online Booking
        </span>
      </div>
      <div className="flex min-h-[540px] flex-col items-center justify-center px-[30px] py-[60px] text-center [background:repeating-linear-gradient(135deg,#fbf9f5,#fbf9f5_22px,#f5f2ea_22px,#f5f2ea_44px)]">
        <div className="mb-6 flex h-16 w-16 items-center justify-center border-2 border-gold">
          <span className="diamond h-5 w-5" />
        </div>
        <div className="mb-[14px] font-mono text-[13px] tracking-[1px] text-gold-text">
          [ JOBBER BOOKING WIDGET ]
        </div>
        <p className="m-0 mb-[26px] max-w-[380px] text-[15px] leading-[1.7] text-[#6a6a6a]">
          The live Jobber scheduling widget embeds here — clients choose a service, date, and time,
          and receive instant confirmation. No payment is collected at booking.
        </p>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {["Select Service", "Pick Date & Time", "Confirm"].map((s) => (
            <span
              key={s}
              className="border border-[#e2dccd] bg-white px-4 py-[9px] text-[13px] font-bold text-navy"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
