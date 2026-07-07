/**
 * Booking configuration + date/time helpers for the Free Consultancy page.
 *
 * Availability (9–5, Mon–Fri) is interpreted in the visitor's *selected*
 * timezone, so the slots they see are always in their own time. All helpers
 * are pure and dependency-free so they run on both server and client.
 */

export const booking = {
  eventTitle: "Free Strategy Consultation",
  durationMinutes: 30,
  /** Availability window, expressed in the visitor's selected timezone. */
  dayStartHour: 9, // 9:00 AM
  dayEndHour: 17, // 5:00 PM (last slot starts before this)
  slotStepMinutes: 30,
  /** Minimum lead time before the next bookable slot today (minutes). */
  leadMinutes: 60,
  /** How many days out visitors can book. */
  bookingWindowDays: 60,
  /** 0 = Sunday … 6 = Saturday. Days the team takes calls. */
  availableWeekdays: [1, 2, 3, 4, 5],
};

export type Slot = {
  /** 24h "HH:MM" used as the value we store. */
  value: string;
  /** Pretty label, e.g. "9:30 AM". */
  label: string;
};

/* ── Timezone-aware "now" ──────────────────────────────────────────── */

type Parts = {
  year: number;
  month: number; // 1–12
  day: number;
  hour: number; // 0–23
  minute: number;
};

/** The wall-clock parts of an instant, as seen in a given IANA timezone. */
export function partsInTimeZone(tz: string, date: Date = new Date()): Parts {
  try {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const map: Record<string, string> = {};
    for (const p of fmt.formatToParts(date)) map[p.type] = p.value;
    return {
      year: Number(map.year),
      month: Number(map.month),
      day: Number(map.day),
      hour: Number(map.hour) % 24, // some engines emit "24" at midnight
      minute: Number(map.minute),
    };
  } catch {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  }
}

/** Sortable YYYYMMDD number for a calendar date. */
function dayNum(y: number, m: number, d: number): number {
  return y * 10000 + m * 100 + d;
}

/** The numeric key of a Date's calendar day (using its own y/m/d). */
function cellNum(d: Date): number {
  return dayNum(d.getFullYear(), d.getMonth() + 1, d.getDate());
}

/** "Today" in the given timezone, as a local Date at midnight. */
export function todayInTimeZone(tz: string): Date {
  const p = partsInTimeZone(tz);
  return new Date(p.year, p.month - 1, p.day);
}

/* ── Formatting ────────────────────────────────────────────────────── */

/** Local YYYY-MM-DD key for a Date (avoids UTC off-by-one from toISOString). */
export function dateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function isSameDay(a: Date, b: Date): boolean {
  return dateKey(a) === dateKey(b);
}

export function formatTime(hour: number, minute: number): string {
  const period = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${h12}:${String(minute).padStart(2, "0")} ${period}`;
}

/** e.g. "Tuesday, July 7, 2026" */
export function formatLongDate(d: Date): string {
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Availability ──────────────────────────────────────────────────── */

/** Is this date bookable in the given timezone? (within window, weekday, not past) */
export function isDateAvailable(d: Date, tz: string): boolean {
  const today = todayInTimeZone(tz);
  const todayN = cellNum(today);
  const targetN = cellNum(d);

  if (targetN < todayN) return false;

  const max = new Date(today);
  max.setDate(max.getDate() + booking.bookingWindowDays);
  if (targetN > cellNum(max)) return false;

  return booking.availableWeekdays.includes(d.getDay());
}

/**
 * All time slots for a given day, in the selected timezone.
 * Slots that have already passed today (in that timezone) are hidden.
 */
export function slotsForDate(d: Date, tz: string): Slot[] {
  const slots: Slot[] = [];

  const now = partsInTimeZone(tz);
  const isToday = cellNum(d) === dayNum(now.year, now.month, now.day);
  const nowMinutes = now.hour * 60 + now.minute;

  const total =
    (booking.dayEndHour - booking.dayStartHour) * (60 / booking.slotStepMinutes);

  for (let i = 0; i < total; i++) {
    const minutesFromStart = i * booking.slotStepMinutes;
    const hour = booking.dayStartHour + Math.floor(minutesFromStart / 60);
    const minute = minutesFromStart % 60;
    const slotMinutes = hour * 60 + minute;

    if (isToday && slotMinutes <= nowMinutes + booking.leadMinutes) continue;

    slots.push({
      value: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
      label: formatTime(hour, minute),
    });
  }
  return slots;
}

/* ── Timezone list for the picker ──────────────────────────────────── */

/** The visitor's IANA timezone, e.g. "Asia/Karachi". Safe fallback for SSR. */
export function localTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

/** A curated fallback used when Intl.supportedValuesOf is unavailable. */
const FALLBACK_TIMEZONES = [
  "UTC",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Istanbul",
  "Africa/Cairo",
  "Asia/Dubai",
  "Asia/Karachi",
  "Asia/Kolkata",
  "Asia/Dhaka",
  "Asia/Singapore",
  "Asia/Shanghai",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
];

/** Full list of IANA timezones (falls back to a curated set). */
export function allTimezones(): string[] {
  try {
    const supported = (
      Intl as unknown as { supportedValuesOf?: (k: string) => string[] }
    ).supportedValuesOf?.("timeZone");
    if (supported && supported.length) return supported;
  } catch {
    /* ignore */
  }
  return FALLBACK_TIMEZONES;
}

/** "Asia/Karachi (GMT+5)" — a friendly label with the current offset. */
export function timezoneLabel(tz: string): string {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset",
    }).formatToParts(new Date());
    const off = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
    return `${tz.replace(/_/g, " ")}${off ? ` (${off})` : ""}`;
  } catch {
    return tz.replace(/_/g, " ");
  }
}
