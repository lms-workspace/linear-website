import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadType = "brief" | "call_30min";

type LeadPayload = {
  type?: LeadType;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  vertical?: string;
  need?: string;
  attending?: string;
  notes?: string;
  preferredDate?: string;
  preferredTime?: string;
  preferredTimezone?: string;
  website?: string;
  submittedAt?: number;
  mountedAt?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;
const MIN_FILL_MS = 1200;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true, id: "skipped" });
  }
  if (
    typeof body.mountedAt === "number" &&
    typeof body.submittedAt === "number" &&
    body.submittedAt - body.mountedAt < MIN_FILL_MS
  ) {
    return NextResponse.json({ ok: true, id: "skipped" });
  }

  const type: LeadType = body.type === "call_30min" ? "call_30min" : "brief";
  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_required" }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  if (type === "brief") {
    const company = body.company?.trim();
    const role = body.role?.trim();
    if (!company || !role) {
      return NextResponse.json({ ok: false, error: "missing_required" }, { status: 422 });
    }
  } else {
    if (!body.preferredDate || !ISO_DATE_RE.test(body.preferredDate)) {
      return NextResponse.json({ ok: false, error: "invalid_date" }, { status: 422 });
    }
    if (!body.preferredTime || !TIME_RE.test(body.preferredTime)) {
      return NextResponse.json({ ok: false, error: "invalid_time" }, { status: 422 });
    }
  }

  const lead = {
    type,
    name,
    email,
    company: body.company?.trim() || null,
    role: body.role?.trim() || null,
    vertical: body.vertical?.trim() || null,
    need: body.need?.trim() || null,
    attending: body.attending?.trim() || null,
    preferredDate: body.preferredDate?.trim() || null,
    preferredTime: body.preferredTime?.trim() || null,
    preferredTimezone: body.preferredTimezone?.trim() || null,
    notes: body.notes?.trim() || null,
    source: "nanofiber-infocomm",
    receivedAt: new Date().toISOString(),
  };

  // TODO Blake: fan out to Google Sheet (Apps Script webhook) + GoHighLevel
  // "InfoComm" pipeline (tag: InfoComm-Campaign). For call_30min leads, also
  // create a tentative Outlook event so Blake's pre-confirm flow is one-click.
  console.log("[infocomm-lead]", lead);

  const id = crypto.randomUUID();
  return NextResponse.json({ ok: true, id });
}
