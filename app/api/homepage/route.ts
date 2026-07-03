import { NextRequest, NextResponse } from "next/server";
import {
  sendEmail,
  writeSheet,
  intakeEmail,
  homepageClientEmail,
  homepageIntakeEmail,
  dash,
} from "@/lib/intake";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const notes = String(body.notes ?? body.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

  const ce = homepageClientEmail(name);
  await sendEmail(email, ce.subject, ce.text, ce.html);

  const ie = homepageIntakeEmail({ name, email, phone, service, notes, timestamp });
  await sendEmail(intakeEmail, ie.subject, ie.text, ie.html);

  await writeSheet("homepage", {
    timestamp,
    fullName: name,
    email,
    phone: dash(phone, ""),
    serviceInterest: service,
    spaceNotes: dash(notes, ""),
    status: "New",
  });

  return NextResponse.json({ success: true });
}
