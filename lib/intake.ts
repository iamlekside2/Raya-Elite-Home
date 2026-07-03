// Lead & booking intake — writes one row to Google Sheet per submission.
// Admin team manages all outreach manually from their cPanel inboxes.

const SHEETS_WEBHOOK =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbxUgoXIZoulqaMkQJQuGtEj4K3hdXkPNlkKgn9MvVom26vPA_S0rO0V_JNlP2t6N0qT/exec";

export const dash = (v: unknown, fallback = "Not provided") => {
  const s = v == null ? "" : String(v).trim();
  return s === "" ? fallback : s;
};

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
