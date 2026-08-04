import { NextRequest, NextResponse } from "next/server";

// Sends an email notification whenever a site form is submitted
// (currently used by /book-consultation and /contact).
// Uses Resend (https://resend.com) — free tier, no credit card required.
//
// Setup (one-time):
// 1. Create a free account at https://resend.com and verify your email.
// 2. Create an API key: https://resend.com/api-keys
// 3. In your Vercel project → Settings → Environment Variables, add:
//      RESEND_API_KEY   = the key from step 2
//      NOTIFY_EMAIL     = the email address that should receive submissions
//                          (on the free tier, without verifying your own domain,
//                          this MUST be the same email you signed up to Resend with)
// 4. Redeploy. That's it — no server or extra hosting needed.

// Labels for known field keys, so the email reads nicely regardless of which
// form sent it. Unknown keys are still included, title-cased automatically.
const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  industry: "Industry",
  "project-type": "Project type",
  budget: "Approximate budget",
  message: "Message",
  website: "Website",
};

function labelFor(key: string) {
  return (
    FIELD_LABELS[key] ||
    key.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const formName =
    typeof data.formName === "string" && data.formName.trim()
      ? data.formName.trim()
      : "Website form";

  const rawFields = data.fields;
  if (!rawFields || typeof rawFields !== "object") {
    return NextResponse.json({ error: "Missing form fields." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(rawFields as Record<string, unknown>)) {
    if (typeof value === "string" && value.trim()) {
      fields[key] = value.trim();
    }
  }

  const name = fields.name || "";
  const email = fields.email || "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!apiKey || !notifyEmail) {
    console.error(
      `${formName}: missing RESEND_API_KEY or NOTIFY_EMAIL env vars — email not sent.`
    );
    // Don't block the user's form submission just because email isn't configured yet.
    return NextResponse.json({ ok: true, emailSent: false });
  }

  const rows = Object.entries(fields)
    .map(([key, value]) => {
      const label = labelFor(key);
      const content =
        key === "message"
          ? escapeHtml(value).replace(/\n/g, "<br/>")
          : escapeHtml(value);
      return `<p><strong>${escapeHtml(label)}:</strong> ${content}</p>`;
    })
    .join("\n");

  const html = `
    <h2>New submission: ${escapeHtml(formName)}</h2>
    ${rows}
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${formName} <onboarding@resend.dev>`,
        to: [notifyEmail],
        reply_to: email,
        subject: `${formName}: new submission from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`${formName}: Resend API error:`, errText);
      return NextResponse.json({ ok: true, emailSent: false });
    }
  } catch (err) {
    console.error(`${formName}: failed to send email:`, err);
    return NextResponse.json({ ok: true, emailSent: false });
  }

  return NextResponse.json({ ok: true, emailSent: true });
}
