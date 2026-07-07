"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dateKey, isDateAvailable, isSameDay, todayInTimeZone } from "@/lib/booking";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

type CalendarProps = {
  selected: Date | null;
  tz: string;
  onSelect: (d: Date) => void;
};

export default function Calendar({ selected, tz, onSelect }: CalendarProps) {
  const today = todayInTimeZone(tz);
  const [view, setView] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Only allow navigating back to the current month.
  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const monthLabel = view.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-ink">{monthLabel}</h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous month"
            disabled={!canGoPrev}
            onClick={() => setView(new Date(year, month - 1, 1))}
            className="grid place-items-center h-9 w-9 rounded-full text-ink hover:bg-ocean-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setView(new Date(year, month + 1, 1))}
            className="grid place-items-center h-9 w-9 rounded-full text-ink hover:bg-ocean-50 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((w, i) => (
          <div
            key={i}
            className="grid place-items-center h-9 text-xs font-semibold uppercase tracking-wide text-slatey"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={i} />;

          const available = isDateAvailable(date, tz);
          const isSelected = selected && isSameDay(date, selected);
          const isToday = isSameDay(date, today);

          return (
            <button
              key={dateKey(date)}
              type="button"
              disabled={!available}
              onClick={() => onSelect(date)}
              aria-pressed={!!isSelected}
              className={[
                "relative grid place-items-center h-10 w-full rounded-full text-sm font-semibold transition-colors",
                isSelected
                  ? "bg-ocean-700 text-white"
                  : available
                  ? "bg-ocean-50 text-ocean-800 hover:bg-ocean-100"
                  : "text-slate-300 cursor-not-allowed",
              ].join(" ")}
            >
              {date.getDate()}
              {isToday && !isSelected && (
                <span className="absolute bottom-1 h-1 w-1 rounded-full bg-reef" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
