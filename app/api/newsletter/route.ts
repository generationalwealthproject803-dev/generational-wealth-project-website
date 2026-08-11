import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };

  if (!body.email || !body.email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required." },
      { status: 400 }
    );
  }

  console.log("Newsletter signup:", body.email);

  return NextResponse.json({ ok: true });
}
