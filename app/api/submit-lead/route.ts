// app/api/submit-lead/route.ts
// Verifies the reCAPTCHA token, then forwards the lead to Google Sheets.
// Env vars needed in .env.local (and Vercel project settings):
//   RECAPTCHA_SECRET_KEY   — your existing reCAPTCHA server secret
//   SHEETS_WEBHOOK_URL     — Apps Script web app URL (ends in /exec)
//   SHEETS_WEBHOOK_SECRET  — must match SECRET in the Apps Script

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token, name, phone, course } = await req.json();

    if (!token || !name || !phone) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // 1. Verify reCAPTCHA
    const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return NextResponse.json({ success: false, error: "captcha" }, { status: 400 });
    }

    // 2. Forward lead to Google Sheets
    const sheetRes = await fetch(process.env.SHEETS_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.SHEETS_WEBHOOK_SECRET,
        name: String(name).slice(0, 200),
        phone: String(phone).slice(0, 30),
        course: String(course || "").slice(0, 200),
        source: "website-contact-form",
      }),
      redirect: "follow", // Apps Script responds via a 302 redirect
    });

    const sheetData = await sheetRes.json().catch(() => null);
    if (!sheetData?.success) {
      // Lead capture failed but captcha passed — log it, don't block the user
      console.error("Sheets webhook failed:", sheetData);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("submit-lead error:", err);
    return NextResponse.json({ success: false, error: "server" }, { status: 500 });
  }
}
