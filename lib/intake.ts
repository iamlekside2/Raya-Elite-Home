// Lead & booking intake — email notifications via cPanel mail + Google Sheet row write.

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

// ── Email sending ─────────────────────────────────────────────────────────────

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

export async function sendEmail(to: string, subject: string, text: string, html?: string) {
  const msg = { from: FROM, to, subject, text, ...(html ? { html } : {}) };

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

// ── HTML email building blocks (inline styles for email-client support) ──────

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Escape + apply the dash fallback in one step for HTML output. */
const hval = (v: unknown, fallback = "Not provided") => esc(dash(v, fallback));

function shell(tag: string, heading: string, inner: string) {
  return (
    `<div style="margin:0;padding:0;background:#F2F0EB;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2F0EB;"><tr><td align="center" style="padding:28px 10px;">` +
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">` +
    // Header band
    `<tr><td style="background:#002147;border-radius:14px 14px 0 0;padding:26px 32px;">` +
    `<span style="font-family:Georgia,'Times New Roman',serif;font-size:19px;font-weight:700;color:#C9A84C;letter-spacing:4px;">RAYA ELITE</span><br>` +
    `<span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9FB0C4;letter-spacing:2px;text-transform:uppercase;">Home &amp; Office Cleaning Services</span>` +
    `</td></tr>` +
    // Body card
    `<tr><td style="background:#FFFFFF;padding:30px 32px 34px;border:1px solid #E6E2D8;border-top:0;border-radius:0 0 14px 14px;">` +
    (tag
      ? `<span style="display:inline-block;background:#EDF1F7;color:#002147;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:5px 12px;border-radius:999px;margin-bottom:14px;">${tag}</span><br>`
      : "") +
    `<h1 style="margin:6px 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:700;color:#11233B;">${heading}</h1>` +
    inner +
    `</td></tr>` +
    // Footer
    `<tr><td style="padding:18px 12px;text-align:center;">` +
    `<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8896A6;line-height:1.8;">` +
    `Raya Elite Home &amp; Office Cleaning Services LLC · Maryland &amp; Washington D.C.<br>` +
    `&#128222; ${esc(SITE.phone)} · Monday&ndash;Saturday 7AM&ndash;6PM · Sunday 8AM&ndash;4PM` +
    `</p></td></tr>` +
    `</table></td></tr></table></div>`
  );
}

function kv(label: string, value: string) {
  return (
    `<tr>` +
    `<td style="padding:7px 16px 7px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#8896A6;text-transform:uppercase;letter-spacing:0.6px;white-space:nowrap;vertical-align:top;">${label}</td>` +
    `<td style="padding:7px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#11233B;line-height:1.5;">${value}</td>` +
    `</tr>`
  );
}

function sect(title: string, rows: string) {
  return (
    `<h3 style="margin:22px 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#C9A84C;letter-spacing:1.5px;text-transform:uppercase;">${title}</h3>` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #E6E2D8;padding-top:4px;">${rows}</table>`
  );
}

function callout(text: string) {
  return (
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;"><tr>` +
    `<td style="background:#FBF6E9;border-left:4px solid #C9A84C;padding:13px 16px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#5C4D1E;line-height:1.6;">${text}</td>` +
    `</tr></table>`
  );
}

function para(text: string) {
  return `<p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:14.5px;color:#33465C;line-height:1.7;">${text}</p>`;
}

function btn(href: string, label: string) {
  return `<a href="${href}" style="display:inline-block;background:#002147;color:#C9A84C;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:999px;margin:4px 10px 4px 0;">${label}</a>`;
}

function summaryCard(rows: string) {
  return (
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 4px;"><tr>` +
    `<td style="background:#F8F6F1;border:1px solid #E6E2D8;border-radius:10px;padding:16px 20px;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>` +
    `</td></tr></table>`
  );
}

// ── Path 1: Homepage ──────────────────────────────────────────────────────────

export function homepageClientEmail(name: string) {
  const text =
    `Hi ${name},\n\n` +
    `Thanks for reaching out. We've received your message and a member of our team will be in touch with you shortly.\n\n` +
    `If you'd like to get a head start, you can tell us more about your space and get an accurate quote here: ${SITE.url}/contact\n\n` +
    `Or if you're ready to schedule a cleaning: ${SITE.url}/book\n\n` +
    `— The Raya Elite Team\n` +
    `📞 ${SITE.phone}\n` +
    `Monday–Saturday 7AM–6PM · Sunday 8AM–4PM`;

  const html = shell(
    "",
    `We&rsquo;ll be in touch shortly`,
    para(`Hi ${esc(name)},`) +
      para(
        `Thanks for reaching out. We&rsquo;ve received your message and a member of our team will be in touch with you shortly.`
      ) +
      para(`If you&rsquo;d like to get a head start:`) +
      `<div style="margin:6px 0 10px;">` +
      btn(`${SITE.url}/contact`, "Get an Accurate Quote") +
      btn(`${SITE.url}/book`, "Book a Cleaning") +
      `</div>` +
      para(`&mdash; The Raya Elite Team`)
  );

  return { subject: "We'll be in touch shortly — Raya Elite Cleaning", text, html };
}

export function homepageIntakeEmail(d: {
  name: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
  timestamp: string;
}) {
  const text =
    `New Homepage Inquiry\n\n` +
    `Received: ${d.timestamp}\n` +
    `Name: ${d.name}\n` +
    `Email: ${d.email}\n` +
    `Phone: ${dash(d.phone)}\n` +
    `Service Interest: ${dash(d.service, "Not specified")}\n` +
    `Space Notes: ${dash(d.notes)}\n\n` +
    `This is an early-stage inquiry. Goal of first contact is to open a conversation, qualify their need, and close with a booking.\n` +
    `Target response: within 4 business hours.`;

  const html = shell(
    "Homepage Inquiry",
    esc(d.name),
    `<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#8896A6;">Received ${esc(d.timestamp)}</p>` +
      sect(
        "Contact",
        kv("Name", esc(d.name)) +
          kv("Email", `<a href="mailto:${esc(d.email)}" style="color:#002147;">${esc(d.email)}</a>`) +
          kv("Phone", hval(d.phone))
      ) +
      sect(
        "Inquiry",
        kv("Service Interest", hval(d.service, "Not specified")) + kv("Space Notes", hval(d.notes))
      ) +
      callout(
        `This is an early-stage inquiry. Goal of first contact is to open a conversation, qualify their need, and close with a booking. <strong>Target response: within 4 business hours.</strong>`
      )
  );

  return { subject: `[Homepage] ${d.name} — ${dash(d.service, "General")}`, text, html };
}

// ── Shared blocks (Paths 2 & 3) ───────────────────────────────────────────────

function spaceBlockText(d: QuotePayload) {
  return (
    `SPACE\n` +
    `Type: ${dash(d.spaceType, "Not specified")}\n` +
    `Bedrooms: ${dash(d.bedrooms, "N/A")} · Bathrooms: ${dash(d.bathrooms, "N/A")}\n` +
    `Sq Footage: ${dash(d.sqft, "N/A")}\n` +
    `Levels: ${dash(d.levels, "N/A")}\n` +
    `Pets: ${dash(d.pets, "N/A")}\n` +
    `Space Description: ${dash(d.spaceNotes)}`
  );
}

function contactSect(d: QuotePayload) {
  return sect(
    "Contact",
    kv("Name", esc(d.name)) +
      kv("Email", `<a href="mailto:${esc(d.email)}" style="color:#002147;">${esc(d.email)}</a>`) +
      kv("Phone", hval(d.phone))
  );
}

function spaceSect(d: QuotePayload, withDescription: boolean) {
  return sect(
    "Space",
    kv("Type", hval(d.spaceType, "Not specified")) +
      kv("Bedrooms / Bathrooms", `${hval(d.bedrooms, "N/A")} / ${hval(d.bathrooms, "N/A")}`) +
      kv("Sq Footage", hval(d.sqft, "N/A")) +
      kv("Levels", hval(d.levels, "N/A")) +
      kv("Pets", hval(d.pets, "N/A")) +
      (withDescription ? kv("Description", hval(d.spaceNotes)) : "")
  );
}

// ── Path 2: Contact ───────────────────────────────────────────────────────────

export function quoteClientEmail(d: QuotePayload) {
  const text =
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
    `— The Raya Elite Team`;

  const html = shell(
    "",
    "Quote request received",
    para(`Hi ${esc(d.name)},`) +
      para(
        `Thank you for reaching out to Raya Elite. We&rsquo;ve received your request and a member of our team will follow up with an accurate quote or proposal <strong>within 2 business hours</strong>.`
      ) +
      para(`Here&rsquo;s a summary of what you submitted:`) +
      summaryCard(
        kv("Service Type", hval(d.spaceType)) +
          kv("Type of Clean", hval(d.cleanType)) +
          kv("Frequency", hval(d.frequency)) +
          kv("Preferred Start", hval(d.startWhen)) +
          kv("Preferred Time", hval(d.timeOfDay))
      ) +
      para(
        `If anything changes before we get back to you:<br>&#128222; ${esc(SITE.phone)} &middot; <a href="mailto:${esc(SITE.email)}" style="color:#002147;">${esc(SITE.email)}</a>`
      ) +
      para(`&mdash; The Raya Elite Team`)
  );

  return { subject: "Quote request received — Raya Elite Cleaning", text, html };
}

export function quoteIntakeEmail(d: QuotePayload) {
  const text =
    `New Quote Request — Contact Page\n\n` +
    `Received: ${d.timestamp}\n\n` +
    `CONTACT\nName: ${d.name} · Email: ${d.email} · Phone: ${dash(d.phone)}\n\n` +
    spaceBlockText(d) +
    `\n\nSERVICE\nClean Type: ${dash(d.cleanType)} · Frequency: ${dash(d.frequency)}\n\n` +
    `TIMING\nStart: ${dash(d.startWhen)} · Time: ${dash(d.timeOfDay)}\n\n` +
    `NOTES\n${dash(d.notes, "None")}\n\n` +
    `Target response: 2 business hours. Prepare quote from details above. Call first — email if no answer.`;

  const html = shell(
    "Quote Request",
    esc(d.name),
    `<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#8896A6;">Received ${esc(d.timestamp)} · Contact Page</p>` +
      contactSect(d) +
      spaceSect(d, true) +
      sect(
        "Service",
        kv("Clean Type", hval(d.cleanType)) + kv("Frequency", hval(d.frequency))
      ) +
      sect(
        "Timing",
        kv("Start", hval(d.startWhen)) + kv("Time", hval(d.timeOfDay))
      ) +
      sect("Notes", kv("Notes", hval(d.notes, "None"))) +
      callout(
        `<strong>Target response: 2 business hours.</strong> Prepare quote from details above. Call first &mdash; email if no answer.`
      )
  );

  return {
    subject: `[Quote Request] ${d.name} — ${dash(d.spaceType, "Space")} — ${dash(d.frequency, "—")}`,
    text,
    html,
  };
}

// ── Path 3: Booking ───────────────────────────────────────────────────────────

export function bookingClientEmail(d: QuotePayload) {
  const text =
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
    `— The Raya Elite Team`;

  const html = shell(
    "",
    "Booking request received",
    para(`Hi ${esc(d.name)},`) +
      para(
        `We&rsquo;ve received your booking request. A member of our team will confirm your appointment <strong>within 2 business hours</strong>.`
      ) +
      para(`Your booking summary:`) +
      summaryCard(
        kv("Service", hval(d.spaceType)) +
          kv("Type of Clean", hval(d.cleanType)) +
          kv("Frequency", hval(d.frequency)) +
          kv("Preferred Start", hval(d.startWhen)) +
          kv("Preferred Time", hval(d.timeOfDay)) +
          kv("Notes", hval(d.notes, "None"))
      ) +
      para(
        `No payment is required today. We&rsquo;ll confirm your date and time and send a final appointment confirmation once everything is locked in.`
      ) +
      para(
        `Questions before we call?<br>&#128222; ${esc(SITE.phone)} &middot; <a href="mailto:${esc(SITE.email)}" style="color:#002147;">${esc(SITE.email)}</a>`
      ) +
      para(`&mdash; The Raya Elite Team`)
  );

  return { subject: "Booking request received — Raya Elite Cleaning", text, html };
}

export function bookingIntakeEmail(d: QuotePayload) {
  const text =
    `New Booking Request — Booking Page\n\n` +
    `Received: ${d.timestamp}\n\n` +
    `CONTACT\nName: ${d.name} · Email: ${d.email} · Phone: ${dash(d.phone)}\n\n` +
    `SPACE\n` +
    `Type: ${dash(d.spaceType, "Not specified")}\n` +
    `Bedrooms: ${dash(d.bedrooms, "N/A")} · Bathrooms: ${dash(d.bathrooms, "N/A")}\n` +
    `Sq Footage: ${dash(d.sqft, "N/A")}\n` +
    `Levels: ${dash(d.levels, "N/A")}\n` +
    `Pets: ${dash(d.pets, "N/A")}\n\n` +
    `SERVICE\nClean Type: ${dash(d.cleanType)} · Frequency: ${dash(d.frequency)}\n\n` +
    `SCHEDULING\nPreferred Start: ${dash(d.startWhen)} · Preferred Time: ${dash(d.timeOfDay)}\n\n` +
    `ACCESS & SPECIAL INSTRUCTIONS\n${dash(d.notes, "None provided")}\n\n` +
    `This client is ready to book. Check team availability, confirm the appointment by phone, and send the appointment confirmation email. Target: within 2 business hours.`;

  const html = shell(
    "Booking Request",
    esc(d.name),
    `<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12.5px;color:#8896A6;">Received ${esc(d.timestamp)} · Booking Page</p>` +
      contactSect(d) +
      spaceSect(d, false) +
      sect(
        "Service",
        kv("Clean Type", hval(d.cleanType)) + kv("Frequency", hval(d.frequency))
      ) +
      sect(
        "Scheduling",
        kv("Preferred Start", hval(d.startWhen)) + kv("Preferred Time", hval(d.timeOfDay))
      ) +
      sect("Access & Instructions", kv("Notes", hval(d.notes, "None provided"))) +
      callout(
        `<strong>This client is ready to book.</strong> Check team availability, confirm the appointment by phone, and send the appointment confirmation email. Target: within 2 business hours.`
      )
  );

  return {
    subject: `[Booking Request] ${d.name} — ${dash(d.spaceType, "Space")} — ${dash(d.startWhen, "—")}`,
    text,
    html,
  };
}
