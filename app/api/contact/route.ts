import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // In production this would forward to an email/CRM integration.
  console.log("New contact submission:", body);

  return NextResponse.json({ ok: true });
}
