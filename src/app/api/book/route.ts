import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Receives a booking from the /free-consultancy page and appends it to the
 * Google Sheet via a Google Apps Script Web App.
 *
 * Set GOOGLE_SHEETS_WEBHOOK_URL in .env.local to the deployed Apps Script URL.
 * See google-apps-script/SETUP.md for the one-time setup.
 */

type Booking = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  date: string;
  dateISO: string;
  time: string;
  time24: string;
  timezone: string;
  event: string;
  duration: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Partial<Booking>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Minimal server-side validation.
  if (!body.name || !body.email || !emailRe.test(body.email)) {
    return NextResponse.json(
      { error: "A valid name and email are required." },
      { status: 400 }
    );
  }
  if (!body.dateISO || !body.time24) {
    return NextResponse.json(
      { error: "Please pick a date and time." },
      { status: 400 }
    );
  }

  const record = {
    submittedAt: new Date().toISOString(),
    name: body.name,
    email: body.email,
    phone: body.phone ?? "",
    company: body.company ?? "",
    service: body.service ?? "",
    message: body.message ?? "",
    date: body.date ?? "",
    dateISO: body.dateISO,
    time: body.time ?? "",
    time24: body.time24,
    timezone: body.timezone ?? "",
    event: body.event ?? "",
    duration: body.duration ?? "",
  };

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  if (!webhook) {
    // Fail loudly in dev so the missing config is obvious, but don't leak details.
    console.error(
      "[api/book] GOOGLE_SHEETS_WEBHOOK_URL is not set — booking not saved:",
      record
    );
    return NextResponse.json(
      { error: "Booking service is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  // Common mistake: pasting the spreadsheet's own edit URL instead of the
  // deployed Apps Script Web App URL. The sheet URL can't receive data.
  // Accepts both personal (/macros/s/…/exec) and Workspace (/a/macros/…/exec).
  let isAppsScriptUrl = false;
  try {
    const u = new URL(webhook);
    isAppsScriptUrl =
      u.hostname === "script.google.com" &&
      u.pathname.includes("/macros/") &&
      u.pathname.endsWith("/exec");
  } catch {
    isAppsScriptUrl = false;
  }
  if (!isAppsScriptUrl) {
    console.error(
      "[api/book] GOOGLE_SHEETS_WEBHOOK_URL is not an Apps Script /exec URL. " +
        "Deploy google-apps-script/Code.gs as a Web App and use the URL ending in /exec. " +
        "Got:",
      webhook
    );
    return NextResponse.json(
      {
        error:
          "Booking isn't connected yet. The configured URL isn't a Google Apps Script Web App URL (it must start with https://script.google.com/macros/ and end in /exec).",
      },
      { status: 503 }
    );
  }

  try {
    // Apps Script answers a POST with a 302 redirect to a
    // script.googleusercontent.com URL that holds the real response. Letting
    // fetch auto-follow re-issues the POST and hangs (411 Length Required), so
    // we follow the redirect ourselves with a GET.
    const first = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
    });

    let res = first;
    if (first.status >= 300 && first.status < 400) {
      const location = first.headers.get("location");
      if (!location) throw new Error("Apps Script redirect had no Location header");
      res = await fetch(location, {
        method: "GET",
        signal: AbortSignal.timeout(20000),
      });
    }

    const text = await res.text().catch(() => "");

    // Apps Script returns HTTP 200 even for its own errors (e.g. "Script
    // function not found: doPost", or an HTML login page when access isn't
    // "Anyone"). So we can't trust the status alone — the script must echo
    // back our JSON { ok: true }.
    let payload: { ok?: boolean; error?: string } | null = null;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }

    if (!res.ok || !payload || payload.ok !== true) {
      const snippet = stripHtml(text).slice(0, 300);
      console.error(
        "[api/book] Apps Script did not confirm the write. status:",
        res.status,
        "| response:",
        snippet
      );
      return NextResponse.json(
        {
          error:
            "We couldn't save your booking to the sheet. The Google Apps Script Web App didn't confirm the write — re-deploy a NEW version of the script (with doPost) and set access to Anyone.",
          detail: snippet,
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[api/book] Failed to reach the Google Sheet webhook:", err);
    return NextResponse.json(
      { error: "We couldn't save your booking. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

/** Collapse an HTML error page into a readable one-liner for logs/diagnostics. */
function stripHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}
