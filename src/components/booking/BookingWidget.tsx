"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Video,
  Globe,
  CalendarDays,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Calendar from "@/components/booking/Calendar";
import {
  allTimezones,
  booking,
  formatLongDate,
  localTimezone,
  slotsForDate,
  timezoneLabel,
  type Slot,
} from "@/lib/booking";
import { services } from "@/lib/services";

type Step = "select" | "details" | "done";

export default function BookingWidget() {
  const [step, setStep] = useState<Step>("select");
  const [date, setDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [tz, setTz] = useState("UTC");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Detect the visitor's timezone on mount; the list is built once.
  useEffect(() => setTz(localTimezone()), []);
  const timezones = useMemo(() => {
    const list = allTimezones();
    const detected = localTimezone();
    return list.includes(detected) ? list : [detected, ...list];
  }, []);

  const slots = useMemo(
    () => (date ? slotsForDate(date, tz) : []),
    [date, tz]
  );

  const handleSelectDate = (d: Date) => {
    setDate(d);
    setSlot(null);
  };

  // Changing timezone shifts which slots exist, so drop any chosen slot.
  const handleTimezoneChange = (next: string) => {
    setTz(next);
    setSlot(null);
  };

  const proceed = () => {
    if (date && slot) setStep("details");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !slot) return;
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
      date: date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      dateISO: date.toISOString().slice(0, 10),
      time: slot.label,
      time24: slot.value,
      timezone: tz,
      event: booking.eventTitle,
      duration: `${booking.durationMinutes} min`,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStep("done");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card-surface shadow-[0_20px_60px_-30px_rgba(11,11,69,0.35)] overflow-hidden grid md:grid-cols-[20rem_1fr]">
      {/* ── Left rail: host / event info ────────────────────────── */}
      <aside className="bg-mist/60 border-b md:border-b-0 md:border-r border-slate-200 p-7 flex flex-col">
        <Image
          src="/logo/codeaquarium-logo-dark.svg"
          alt="Code Aquarium"
          width={150}
          height={40}
          className="h-9 w-auto"
        />

        <div className="mt-8">
          <p className="text-sm font-semibold text-slatey">Code Aquarium</p>
          <h2 className="mt-1 text-2xl font-bold text-ink leading-tight">
            {booking.eventTitle}
          </h2>
        </div>

        <ul className="mt-6 space-y-3 text-slatey">
          <li className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-ocean-700 shrink-0" />
            <span>{booking.durationMinutes} minutes</span>
          </li>
          <li className="flex items-center gap-3">
            <Video className="h-5 w-5 text-ocean-700 shrink-0" />
            <span>Google Meet / Zoom</span>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="h-5 w-5 text-ocean-700 shrink-0 mt-2" />
            <label className="flex-1 min-w-0">
              <span className="sr-only">Timezone</span>
              <select
                value={tz}
                onChange={(e) => handleTimezoneChange(e.target.value)}
                className="w-full bg-white border border-slate-300 px-3 py-2 text-sm text-ink focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors"
              >
                {timezones.map((z) => (
                  <option key={z} value={z}>
                    {timezoneLabel(z)}
                  </option>
                ))}
              </select>
            </label>
          </li>
        </ul>

        {date && slot && step !== "done" && (
          <div className="mt-6 flex items-start gap-3 rounded-lg bg-white border border-ocean-100 p-4">
            <CalendarDays className="h-5 w-5 text-reef shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-ink leading-snug">
              {slot.label}, {formatLongDate(date)}
            </p>
          </div>
        )}

        <p className="mt-auto pt-8 text-sm text-slatey leading-relaxed">
          A no-pressure call to map the fastest path from your idea to launch —
          scope, timeline, and where we can add the most value.
        </p>
      </aside>

      {/* ── Right panel: step content ───────────────────────────── */}
      <div className="p-6 md:p-8 min-h-[30rem]">
        {step === "select" && (
          <div className="grid gap-8 lg:grid-cols-[1fr_15rem]">
            <div>
              <h3 className="text-lg font-bold text-ink mb-5">Select a date</h3>
              <Calendar selected={date} tz={tz} onSelect={handleSelectDate} />
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-8">
              <h3 className="text-lg font-bold text-ink mb-1">
                {date ? formatLongDate(date) : "Select a time"}
              </h3>
              <p className="text-sm text-slatey mb-4">
                {date
                  ? `${slots.length} slot${slots.length === 1 ? "" : "s"} available`
                  : "Pick a day to see open times."}
              </p>

              <div className="flex flex-col gap-2 max-h-[22rem] overflow-y-auto pr-1 no-scrollbar">
                {date && slots.length === 0 && (
                  <p className="text-sm text-slatey">
                    No times left for this day. Try another date.
                  </p>
                )}
                {slots.map((s) => {
                  const active = slot?.value === s.value;
                  return (
                    <div key={s.value} className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSlot(s)}
                        className={[
                          "flex-1 border px-4 py-3 font-semibold text-sm transition-colors",
                          active
                            ? "bg-ocean-700 text-white border-ocean-700"
                            : "border-slate-300 text-ink hover:border-ocean-600 hover:text-ocean-700",
                        ].join(" ")}
                      >
                        {s.label}
                      </button>
                      {active && (
                        <button
                          type="button"
                          onClick={proceed}
                          className="flex-1 bg-reef text-white px-4 py-3 font-semibold text-sm hover:bg-teal-600 transition-colors"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {step === "details" && date && slot && (
          <div>
            <button
              type="button"
              onClick={() => setStep("select")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slatey hover:text-ocean-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <h3 className="mt-4 text-xl font-bold text-ink">Enter your details</h3>
            <p className="mt-1 text-sm text-slatey flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-reef" />
              {slot.label}, {formatLongDate(date)}
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required placeholder="Jane Doe" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  optional
                  placeholder="+1 555 123 4567"
                />
                <Field label="Company" name="company" optional placeholder="Acme Inc." />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className={LABEL}>
                  What can we help with?
                </label>
                <select id="service" name="service" className={FIELD} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title.replace(
                        /^(Scale|Automate|Grow|Secure|Decide|Convert) With /,
                        ""
                      )}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className={LABEL}>
                  Anything we should know? <span className="text-slatey font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={FIELD}
                  placeholder="Goals, timeline, budget…"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center justify-center gap-2 bg-ocean-700 text-white font-semibold px-7 py-3.5 hover:bg-ocean-800 transition-colors disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Scheduling…
                  </>
                ) : (
                  <>
                    Confirm booking
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {step === "done" && date && slot && (
          <div className="h-full grid place-items-center text-center py-10">
            <div>
              <span className="inline-grid place-items-center rounded-full p-4 bg-reef/15 text-reef">
                <CheckCircle2 className="h-10 w-10" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">You&apos;re booked!</h3>
              <p className="mt-2 text-slatey max-w-md mx-auto">
                Your {booking.eventTitle.toLowerCase()} is confirmed for
              </p>
              <p className="mt-1 text-lg font-bold text-ocean-700">
                {slot.label}, {formatLongDate(date)}
              </p>
              <p className="mt-4 text-sm text-slatey max-w-md mx-auto">
                A calendar invite and meeting link are on their way to your inbox.
                Can&apos;t wait to dive in.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const FIELD =
  "w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors";
const LABEL = "text-sm font-semibold text-ink";

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className={LABEL}>
        {label}{" "}
        {optional && <span className="text-slatey font-normal">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={FIELD}
      />
    </div>
  );
}
