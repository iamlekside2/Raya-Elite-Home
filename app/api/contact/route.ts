import { NextRequest, NextResponse } from "next/server";
import {
  sendEmail,
  writeSheet,
  intakeEmail,
  quoteClientEmail,
  quoteIntakeEmail,
  dash,
  type QuotePayload,
} from "@/lib/intake";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const s = (k: string) => String(body[k] ?? "").trim();
  const name = s("name");
  const email = s("email");
  if (!name || !email) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const d: QuotePayload = {
    name,
    email,
    phone: s("phone"),
    spaceType: s("spaceType") || s("service"),
    bedrooms: s("bedrooms"),
    bathrooms: s("bathrooms"),
    pets: s("pets"),
    sqft: s("sqft"),
    restrooms: s("restrooms"),
    levels: s("levels"),
    spaceNotes: s("spaceNotes"),
    cleanType: s("cleanType"),
    frequency: s("frequency"),
    startWhen: s("startWhen"),
    timeOfDay: s("timeOfDay"),
    notes: s("notes") || s("message"),
    timestamp,
  };

  const ce = quoteClientEmail(d);
  await sendEmail(email, ce.subject, ce.text);

  const ie = quoteIntakeEmail(d);
  await sendEmail(intakeEmail, ie.subject, ie.text);

  await writeSheet("contact", {
    timestamp,
    fullName: d.name,
    email: d.email,
    phone: dash(d.phone, ""),
    spaceType: d.spaceType,
    bedrooms: dash(d.bedrooms, ""),
    bathrooms: dash(d.bathrooms, ""),
    pets: dash(d.pets, ""),
    sqFootage: dash(d.sqft, ""),
    restrooms: dash(d.restrooms, ""),
    buildingLevels: dash(d.levels, ""),
    spaceDescription: dash(d.spaceNotes, ""),
    cleanType: dash(d.cleanType, ""),
    frequency: dash(d.frequency, ""),
    whenToStart: dash(d.startWhen, ""),
    preferredTime: dash(d.timeOfDay, ""),
    additionalNotes: dash(d.notes, ""),
    status: "New",
  });

  return NextResponse.json({ success: true });
}
