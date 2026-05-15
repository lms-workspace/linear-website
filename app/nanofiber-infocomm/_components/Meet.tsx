"use client";

import { useId, useMemo, useRef, useState } from "react";
import styles from "../page.module.css";

const VERTICALS = ["Broadcast", "Pro AV", "Data Center", "Stadium", "Corporate", "Other"] as const;
const NEEDS = ["Project-based", "Bulk fiber", "Custom builds", "Not sure yet"] as const;
const ATTENDING = ["Yes", "No", "Maybe"] as const;

type TimeSlot = { value: string; label: string };

const TIME_SLOTS: TimeSlot[] = [
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
];

const OUTLOOK_BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/163d6424f4414ae480bdf257027dae0a@p2pcable.com?anonymous&ep=signature&ismsaljsauthenabled";

type Status = "idle" | "submitting" | "success" | "error";
type Attending = (typeof ATTENDING)[number];
type AvailableDate = { value: string; label: string; isInfoComm: boolean };

const DATE_LABEL_FMT = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "short",
  month: "short",
  day: "numeric",
});
const DATE_ISO_FMT = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const WEEKDAY_FMT = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "short",
});

function generateAvailableDates(): AvailableDate[] {
  const out: AvailableDate[] = [];
  const start = new Date();
  for (let offset = 1; offset <= 45 && out.length < 18; offset++) {
    const d = new Date(start.getTime() + offset * 24 * 3600 * 1000);
    const dow = WEEKDAY_FMT.format(d);
    if (dow === "Sat" || dow === "Sun") continue;
    const iso = DATE_ISO_FMT.format(d);
    const isInfoComm = iso >= "2026-06-17" && iso <= "2026-06-19";
    out.push({
      value: iso,
      label: DATE_LABEL_FMT.format(d) + (isInfoComm ? " · InfoComm Vegas" : ""),
      isInfoComm,
    });
  }
  return out;
}

export function Meet() {
  return (
    <section id="meet" className={styles.meet} aria-labelledby="nf-meet-heading">
      <div className={styles.meetInner}>
        <header className={styles.meetHeader}>
          <h2 id="nf-meet-heading" className={styles.meetTitle}>
            Get on Blake&apos;s calendar.
          </h2>
          <p className={styles.meetSub}>
            30-minute call — pick a slot below, at InfoComm (June 17–19) or any time after.
            Or send a brief and Blake replies within one business day.
          </p>
        </header>

        <CallRequestPanel />
        <BriefFormPanel />
      </div>
    </section>
  );
}

function CallRequestPanel() {
  const formId = useId();
  const mountedAtRef = useRef<number>(Date.now());
  const dates = useMemo(generateAvailableDates, []);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [date, setDate] = useState(dates[0]?.value ?? "");
  const [time, setTime] = useState(TIME_SLOTS[2].value);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = new FormData(event.currentTarget);
    const payload = {
      type: "call_30min" as const,
      name: (data.get("name") as string | null)?.trim() ?? "",
      email: (data.get("email") as string | null)?.trim() ?? "",
      company: (data.get("company") as string | null)?.trim() ?? "",
      preferredDate: date,
      preferredTime: time,
      preferredTimezone: "America/Los_Angeles",
      notes: (data.get("notes") as string | null)?.trim() ?? "",
      website: (data.get("website") as string | null) ?? "",
      mountedAt: mountedAtRef.current,
      submittedAt: Date.now(),
    };

    if (!payload.name || !payload.email) {
      setErrorMsg("Name and email are required.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/infocomm-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(
          body.error === "invalid_email"
            ? "That email doesn't look valid."
            : "Something went wrong. Try again or email BPederson@P2PCable.com.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Try again in a moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    const slotLabel = dates.find((d) => d.value === date)?.label ?? date;
    const timeLabel = TIME_SLOTS.find((t) => t.value === time)?.label ?? time;
    return (
      <div className={`${styles.panel} ${styles.success}`} role="status" aria-live="polite">
        <p className={styles.successTag}>Call Requested</p>
        <h3 className={styles.successTitle}>{slotLabel} · {timeLabel} PT</h3>
        <p className={styles.successBody}>
          Blake confirms within one business day. Add this to your calendar as
          tentative — final invite follows over email.
        </p>
      </div>
    );
  }

  return (
    <article className={styles.panel} aria-labelledby="nf-scheduler-heading">
      <span className={styles.panelTag}>30-Min Call</span>
      <h3 id="nf-scheduler-heading" className={styles.panelHeading}>
        Pick a time with Blake
      </h3>
      <p className={styles.panelLede}>
        Spec review, project scoping, sample requests. Slots Mon–Fri, 9 AM – 5 PM
        Pacific. InfoComm (June 17–19) slots tagged Vegas. Already on the show
        floor? <a href="mailto:BPederson@P2PCable.com">BPederson@P2PCable.com</a>.
      </p>

      <form id={formId} className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-date`}>
            Date<span className={styles.required}>*</span>
          </label>
          <div className={styles.selectWrap}>
            <select
              id={`${formId}-date`}
              className={styles.select}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            >
              {dates.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-time`}>
            Time (Pacific)<span className={styles.required}>*</span>
          </label>
          <div className={styles.selectWrap}>
            <select
              id={`${formId}-time`}
              className={styles.select}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              {TIME_SLOTS.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-name`}>
            Name<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-name`}
            className={styles.input}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-email`}>
            Email<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-email`}
            className={styles.input}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-company`}>
            Company<span className={styles.optional}>(optional)</span>
          </label>
          <input
            id={`${formId}-company`}
            className={styles.input}
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor={`${formId}-notes`}>
            What do you want to cover?<span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id={`${formId}-notes`}
            className={styles.textarea}
            name="notes"
            rows={3}
            placeholder="One-line context — broadcast OB, stadium trunk, AV backbone…"
          />
        </div>

        {status === "error" && errorMsg && (
          <p className={styles.error} role="alert">{errorMsg}</p>
        )}

        <div className={styles.formFooter}>
          <p className={styles.disclaimer}>
            Or book via{" "}
            <a
              href={OUTLOOK_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.disclaimerLink}
            >
              Outlook Bookings ↗
            </a>
          </p>
          <button
            type="submit"
            className={styles.btn}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Request 30-Min Call"}
            <span className={styles.btnArrow} aria-hidden>→</span>
          </button>
        </div>
      </form>
    </article>
  );
}

function BriefFormPanel() {
  const formId = useId();
  const mountedAtRef = useRef<number>(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [attending, setAttending] = useState<Attending | "">("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = new FormData(event.currentTarget);
    const payload = {
      type: "brief" as const,
      name: (data.get("name") as string | null)?.trim() ?? "",
      email: (data.get("email") as string | null)?.trim() ?? "",
      company: (data.get("company") as string | null)?.trim() ?? "",
      role: (data.get("role") as string | null)?.trim() ?? "",
      vertical: (data.get("vertical") as string | null) ?? "",
      need: (data.get("need") as string | null) ?? "",
      attending,
      notes: (data.get("notes") as string | null)?.trim() ?? "",
      website: (data.get("website") as string | null) ?? "",
      mountedAt: mountedAtRef.current,
      submittedAt: Date.now(),
    };

    if (!payload.name || !payload.email || !payload.company || !payload.role) {
      setErrorMsg("Name, email, company, and role are required.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/infocomm-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(
          body.error === "invalid_email"
            ? "That email doesn't look valid."
            : "Something went wrong. Try again or email BPederson@P2PCable.com.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Try again in a moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="brief" className={`${styles.panel} ${styles.success}`} role="status" aria-live="polite">
        <p className={styles.successTag}>Brief Received</p>
        <h3 className={styles.successTitle}>Got it. Blake will be in touch.</h3>
        <p className={styles.successBody}>
          Expect a reply within one business day. If you&apos;re heading to
          InfoComm, a calendar invite follows.
        </p>
      </div>
    );
  }

  return (
    <article id="brief" className={styles.panel} aria-labelledby="nf-form-heading">
      <span className={styles.panelTag}>Project Brief</span>
      <h3 id="nf-form-heading" className={styles.panelHeading}>
        Send the build details
      </h3>
      <p className={styles.panelLede}>
        Share fiber count, deploy mode, and timeline. Blake replies
        personally — same flow before, during, or after InfoComm.
      </p>

      <form id={formId} className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor={`${formId}-website`}>Website</label>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-name`}>
            Name<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-name`}
            className={styles.input}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-email`}>
            Email<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-email`}
            className={styles.input}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-company`}>
            Company<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-company`}
            className={styles.input}
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-role`}>
            Role<span className={styles.required}>*</span>
          </label>
          <input
            id={`${formId}-role`}
            className={styles.input}
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="Broadcast Engineer, AV Consultant…"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-vertical`}>
            Vertical
          </label>
          <div className={styles.selectWrap}>
            <select
              id={`${formId}-vertical`}
              className={styles.select}
              name="vertical"
              defaultValue=""
            >
              <option value="">Select…</option>
              {VERTICALS.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`${formId}-need`}>
            Need Type
          </label>
          <div className={styles.selectWrap}>
            <select
              id={`${formId}-need`}
              className={styles.select}
              name="need"
              defaultValue=""
            >
              <option value="">Select…</option>
              {NEEDS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        <fieldset className={`${styles.field} ${styles.fieldFull} ${styles.fieldsetReset}`}>
          <legend className={styles.label}>
            Attending InfoComm 2026?
          </legend>
          <div className={styles.radioRow} role="radiogroup" aria-label="Attending InfoComm 2026">
            {ATTENDING.map((opt) => {
              const active = attending === opt;
              return (
                <label
                  key={opt}
                  className={`${styles.radioPill}${active ? ` ${styles.radioPillActive}` : ""}`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={opt}
                    checked={active}
                    onChange={() => setAttending(opt)}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor={`${formId}-notes`}>
            Notes<span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id={`${formId}-notes`}
            className={styles.textarea}
            name="notes"
            rows={4}
            placeholder="Project scope, fiber count, connector preference, timeline."
          />
        </div>

        {status === "error" && errorMsg && (
          <p className={styles.error} role="alert">{errorMsg}</p>
        )}

        <div className={styles.formFooter}>
          <p className={styles.disclaimer}>
            Used to route your project. No list selling.
          </p>
          <button
            type="submit"
            className={styles.btn}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send Brief"}
            <span className={styles.btnArrow} aria-hidden>→</span>
          </button>
        </div>
      </form>
    </article>
  );
}
