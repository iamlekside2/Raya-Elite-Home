// Centralized lead & booking intake — shared by all three form paths.
// Each path: (1) client confirmation email, (2) internal intake notification,
// (3) Google Sheet row write via Apps Script webhook.
//
// All side-effects are env-gated. With no keys set, routes still validate and
// return success (so forms work in dev) and the actions are skipped/logged.

import { SITE } from "@/lib/constants";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.INTAKE_FROM || `Raya Elite <onboarding@resend.dev>`;
const INTAKE_EMAIL = process.env.INTAKE_EMAIL || "intake@rayaelitecleaning.com";
const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export const dash = (v: unknown, fallback = "Not provided") => {
  const s = v == null ? "" : String(v).trim();
  return s === "" ? fallback : s;
};

/** Send an email via Resend. No-op (logged) if RESEND_API_KEY is not set. */
export async function sendEmail(to: string, subject: string, text: string) {
  if (!RESEND_API_KEY) {
    console.log(`[intake] email skipped (no RESEND_API_KEY) → ${to}: ${subject}`);
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: FROM, to, subject, text }),
    });
    if (!res.ok) console.error(`[intake] resend failed ${res.status}: ${await res.text()}`);
  } catch (e) {
    console.error("[intake] resend error", e);
  }
}

/** Write one row to the Google Sheet via the Apps Script webhook. */
export async function writeSheet(path: "homepage" | "contact" | "book", row: Record<string, unknown>) {
  if (!SHEETS_WEBHOOK) {
    console.log(`[intake] sheet write skipped (no GOOGLE_SHEETS_WEBHOOK_URL) → ${path}`, row);
    return;
  }
  try {
    const res = await fetch(SHEETS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, ...row }),
    });
    if (!res.ok) console.error(`[intake] sheet write failed ${res.status}`);
  } catch (e) {
    console.error("[intake] sheet write error", e);
  }
}

const SIGNOFF = `\n— The Raya Elite Team\n${SITE.phone} · ${SITE.email}\nMonday–Saturday 7AM–6PM · Sunday 8AM–4PM`;

export const intakeEmail = INTAKE_EMAIL;

// ---- Path 1: Homepage ------------------------------------------------------
export function homepageClientEmail(name: string) {
  return {
    subject: "We'll be in touch shortly — Raya Elite Cleaning",
    text:
      `Hi ${name},\n\n` +
      `Thanks for reaching out. We've received your message and a member of our team will be in touch with you shortly.\n\n` +
      `If you'd like to get a head start, you can tell us more about your space and get an accurate quote here: ${SITE.url}/contact\n\n` +
      `Or if you're ready to schedule a cleaning: ${SITE.url}/book\n` +
      SIGNOFF,
  };
}

export function homepageIntakeEmail(d: {
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  timestamp: string;
}) {
  return {
    subject: `[Homepage] ${d.name} — ${dash(d.service, "General")}`,
    text:
      `New Homepage Inquiry\n\n` +
      `Received: ${d.timestamp}\n` +
      `Name: ${d.name}\n` +
      `Email: ${d.email}\n` +
      `Phone: ${dash(d.phone)}\n` +
      `Service Interest: ${dash(d.service, "Not specified")}\n` +
      `Space Notes: ${dash(d.notes)}\n\n` +
      `This is an early-stage inquiry. Goal of first contact is to open a conversation, qualify their need, and close with a booking.\n` +
      `Target response: within 4 business hours.`,
  };
}

// ---- Shared quote/booking summary (Path 2 & 3) -----------------------------
export type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  spaceType: string;
  bedrooms?: string;
  bathrooms?: string;
  pets?: string;
  sqft?: string;
  restrooms?: string;
  levels?: string;
  spaceNotes?: string;
  cleanType?: string;
  frequency?: string;
  startWhen?: string;
  timeOfDay?: string;
  notes?: string;
  timestamp: string;
};

function spaceBlock(d: QuotePayload) {
  return (
    `SPACE\n` +
    `Type: ${dash(d.spaceType, "Not specified")}\n` +
    `Bedrooms: ${dash(d.bedrooms, "N/A")} · Bathrooms: ${dash(d.bathrooms, "N/A")}\n` +
    `Sq Footage: ${dash(d.sqft, "N/A")}\n` +
    `Restrooms: ${dash(d.restrooms, "N/A")} · Levels: ${dash(d.levels, "N/A")}\n` +
    `Pets: ${dash(d.pets, "N/A")}\n` +
    `Space Description: ${dash(d.spaceNotes)}`
  );
}

export function quoteClientEmail(d: QuotePayload) {
  return {
    subject: "Quote request received — Raya Elite Cleaning",
    text:
      `Hi ${d.name},\n\n` +
      `Thank you for reaching out to Raya Elite. We've received your request and a member of our team will follow up with an accurate quote or proposal within 2 business hours.\n\n` +
      `Here's a summary of what you submitted:\n` +
      `Service type: ${dash(d.spaceType)}\n` +
      `Type of clean: ${dash(d.cleanType)}\n` +
      `Frequency: ${dash(d.frequency)}\n` +
      `Preferred start: ${dash(d.startWhen)}\n` +
      `Preferred time: ${dash(d.timeOfDay)}\n` +
      SIGNOFF,
  };
}

export function quoteIntakeEmail(d: QuotePayload) {
  return {
    subject: `[Quote Request] ${d.name} — ${dash(d.spaceType, "Space")} — ${dash(d.frequency, "—")}`,
    text:
      `New Quote Request — Contact Page\n\n` +
      `Received: ${d.timestamp}\n\n` +
      `CONTACT\nName: ${d.name} · Email: ${d.email} · Phone: ${dash(d.phone)}\n\n` +
      spaceBlock(d) +
      `\n\nSERVICE\nClean Type: ${dash(d.cleanType)} · Frequency: ${dash(d.frequency)}\n\n` +
      `TIMING\nStart: ${dash(d.startWhen)} · Time: ${dash(d.timeOfDay)}\n\n` +
      `NOTES\n${dash(d.notes, "None")}\n\n` +
      `Target response: 2 business hours. Prepare quote from details above. Call first — email if no answer.`,
  };
}

export function bookingClientEmail(d: QuotePayload) {
  return {
    subject: "Booking request received — Raya Elite Cleaning",
    text:
      `Hi ${d.name},\n\n` +
      `We've received your booking request. A member of our team will confirm your appointment within 2 business hours.\n\n` +
      `Your booking summary:\n` +
      `Service: ${dash(d.spaceType)}\n` +
      `Type of clean: ${dash(d.cleanType)}\n` +
      `Frequency: ${dash(d.frequency)}\n` +
      `Preferred start: ${dash(d.startWhen)}\n` +
      `Preferred time: ${dash(d.timeOfDay)}\n` +
      `Notes: ${dash(d.notes, "None")}\n\n` +
      `No payment is required today. We'll confirm your date and time and send a final appointment confirmation once everything is locked in.\n` +
      SIGNOFF,
  };
}

export function bookingIntakeEmail(d: QuotePayload) {
  return {
    subject: `[Booking Request] ${d.name} — ${dash(d.spaceType, "Space")} — ${dash(d.startWhen, "—")}`,
    text:
      `New Booking Request — Booking Page\n\n` +
      `Received: ${d.timestamp}\n\n` +
      `CONTACT\nName: ${d.name} · Email: ${d.email} · Phone: ${dash(d.phone)}\n\n` +
      spaceBlock(d) +
      `\n\nSERVICE\nClean Type: ${dash(d.cleanType)} · Frequency: ${dash(d.frequency)}\n\n` +
      `SCHEDULING\nPreferred Start: ${dash(d.startWhen)} · Preferred Time: ${dash(d.timeOfDay)}\n\n` +
      `ACCESS & SPECIAL INSTRUCTIONS\n${dash(d.notes, "None provided")}\n\n` +
      `This client is ready to book. Check team availability, confirm by phone, and send the appointment confirmation email. Target: within 2 business hours.`,
  };
}
