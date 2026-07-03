// Lead & booking intake — email notifications via cPanel SMTP + Google Sheet row write.

import nodemailer from "nodemailer";
import { SITE } from "@/lib/constants";

const SHEETS_WEBHOOK =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbxUgoXIZoulqaMkQJQuGtEj4K3hdXkPNlkKgn9MvVom26vPA_S0rO0V_JNlP2t6N0qT/exec";

const INTAKE_EMAIL =
  process.env.INTAKE_EMAIL || "intake@rayaelitehomesandofficescleaningservices.com";

export const intakeEmail = INTAKE_EMAIL;

export const dash = (v: unknown, fallback = "Not provided") => {
  const s = v == null ? "" : String(v).trim();
  return s === "" ? fallback : s;
};

// ── Email sending via cPanel SMTP ─────────────────────────────────────────────

const FROM = `Raya Elite <noreply@rayaelitehomesandofficescleaningservices.com>`;

function smtpFromEnv() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: (process.env.SMTP_PORT || "465") === "465",
    auth: { user, pass },
  });
}

export async function sendEmail(to: string, subject: string, text: string) {
  const msg = { from: FROM, to, subject, text };

  // Explicit SMTP config wins if provided
  const smtp = smtpFromEnv();
  if (smtp) {
    try {
      await smtp.sendMail(msg);
    } catch (e) {
      console.error("[intake] email error (smtp)", e);
    }
    return;
  }

  // cPanel: sendmail binary at its full path (not in PATH inside the app jail)
  try {
    await nodemailer
      .createTransport({ sendmail: true, path: "/usr/sbin/sendmail" })
      .sendMail(msg);
    return;
  } catch (e) {
    console.error("[intake] email error (sendmail), trying localhost:25", e);
  }

  // Last resort: the server's own Exim on localhost:25 (accepts local connections)
  try {
    await nodemailer
      .createTransport({
        host: "127.0.0.1",
        port: 25,
        secure: false,
        tls: { rejectUnauthorized: false },
      })
      .sendMail(msg);
  } catch (e) {
    console.error("[intake] email error (localhost:25)", e);
  }
}

// ── Google Sheet row write ────────────────────────────────────────────────────

export async function writeSheet(
  path: "homepage" | "contact" | "book",
  row: Record<string, unknown>
) {
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

// ── Shared type ───────────────────────────────────────────────────────────────

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

// ── Path 1: Homepage ──────────────────────────────────────────────────────────

export function homepageClientEmail(name: string) {
  return {
    subject: "We'll be in touch shortly — Raya Elite Cleaning",
    text:
      `Hi ${name},\n\n` +
      `Thanks for reaching out. We've received your message and a member of our team will be in touch with you shortly.\n\n` +
      `If you'd like to get a head start, you can tell us more about your space and get an accurate quote here: ${SITE.url}/contact\n\n` +
      `Or if you're ready to schedule a cleaning: ${SITE.url}/book\n\n` +
      `— The Raya Elite Team\n` +
      `📞 ${SITE.phone}\n` +
      `Monday–Saturday 7AM–6PM · Sunday 8AM–4PM`,
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

// ── Path 2: Contact ───────────────────────────────────────────────────────────

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
      `Preferred time: ${dash(d.timeOfDay)}\n\n` +
      `If anything changes before we get back to you:\n` +
      `📞 ${SITE.phone} · ${SITE.email}\n` +
      `Monday–Saturday 7AM–6PM · Sunday 8AM–4PM\n` +
      `— The Raya Elite Team`,
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

// ── Path 3: Booking ───────────────────────────────────────────────────────────

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
      `No payment is required today. We'll confirm your date and time and send a final appointment confirmation once everything is locked in.\n\n` +
      `Questions before we call?\n` +
      `📞 ${SITE.phone} · ${SITE.email}\n` +
      `Monday–Saturday 7AM–6PM · Sunday 8AM–4PM\n` +
      `— The Raya Elite Team`,
  };
}

export function bookingIntakeEmail(d: QuotePayload) {
  return {
    subject: `[Booking Request] ${d.name} — ${dash(d.spaceType, "Space")} — ${dash(d.startWhen, "—")}`,
    text:
      `New Booking Request — Booking Page\n\n` +
      `Received: ${d.timestamp}\n\n` +
      `CONTACT\nName: ${d.name} · Email: ${d.email} · Phone: ${dash(d.phone)}\n\n` +
      `SPACE\n` +
      `Type: ${dash(d.spaceType, "Not specified")}\n` +
      `Bedrooms: ${dash(d.bedrooms, "N/A")} · Bathrooms: ${dash(d.bathrooms, "N/A")}\n` +
      `Sq Footage: ${dash(d.sqft, "N/A")}\n` +
      `Restrooms: ${dash(d.restrooms, "N/A")} · Levels: ${dash(d.levels, "N/A")}\n` +
      `Pets: ${dash(d.pets, "N/A")}\n\n` +
      `SERVICE\nClean Type: ${dash(d.cleanType)} · Frequency: ${dash(d.frequency)}\n\n` +
      `SCHEDULING\nPreferred Start: ${dash(d.startWhen)} · Preferred Time: ${dash(d.timeOfDay)}\n\n` +
      `ACCESS & SPECIAL INSTRUCTIONS\n${dash(d.notes, "None provided")}\n\n` +
      `This client is ready to book. Check team availability, confirm the appointment by phone, and send the appointment confirmation email. Target: within 2 business hours.`,
  };
}
