import { NextRequest, NextResponse } from "next/server";
import { writeSheet, dash } from "@/lib/intake";

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
