import { NextRequest, NextResponse } from "next/server";
import {
  sendEmail,
  writeSheet,
  intakeEmail,
  bookingClientEmail,
  bookingIntakeEmail,
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
  const phone = s("phone");
  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required to confirm a booking." },
      { status: 422 }
    );
  }

  const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const d: QuotePayload = {
    name,
    email,
    phone,
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

  const ce = bookingClientEmail(d);
  await sendEmail(email, ce.subject, ce.text, ce.html);

  const ie = bookingIntakeEmail(d);
  await sendEmail(intakeEmail, ie.subject, ie.text, ie.html);

  await writeSheet("book", {
    timestamp,
    fullName: d.name,
    email: d.email,
    phone: d.phone,
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
    preferredStart: dash(d.startWhen, ""),
    preferredTime: dash(d.timeOfDay, ""),
    accessInstructions: dash(d.notes, ""),
    status: "New",
  });

  return NextResponse.json({ success: true });
}
