import { NextResponse } from "next/server";

interface ConsultationPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredTime?: string;
  notes?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ConsultationPayload;

  if (!body.name || !body.email || !body.service) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and service are required." },
      { status: 400 }
    );
  }

  console.log("New consultation request:", body);

  return NextResponse.json({ ok: true });
}
