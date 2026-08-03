import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();
  if (!token) return NextResponse.json({ success: false }, { status: 400 });

  const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await r.json();

  return NextResponse.json({ success: data.success === true });
}
