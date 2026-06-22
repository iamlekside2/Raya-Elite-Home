import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 422 }
    );
  }

  try {
    // Production wiring (env-driven):
    // 1. Send email via SendGrid/Resend to CONTACT_FORM_EMAIL.
    // 2. POST to the GoHighLevel webhook for CRM capture:
    //    await fetch(process.env.GHL_WEBHOOK_URL!, {
    //      method: "POST",
    //      headers: { "Content-Type": "application/json" },
    //      body: JSON.stringify({ ...body, source: "website-contact" }),
    //    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
