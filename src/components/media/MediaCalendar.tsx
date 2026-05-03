"use client";

import Image from "next/image";
import { MediaEntry } from "@/data/media";
import { formatYMD, parseYMD } from "@/lib/date";

type Props = {
  year: number;
  month: number; // 0–11
  entries: MediaEntry[];
  onSelectEntry?: (entry: MediaEntry) => void;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
};

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function startDay(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0 Sun
}

function getEntryRange(entry: MediaEntry) {
  if (entry.startDate || entry.endDate) {
    return {
      start: entry.startDate ?? entry.endDate ?? entry.date,
      end: entry.endDate ?? entry.startDate ?? entry.date,
    };
  }
  return { start: entry.date, end: entry.date };
}

export default function MediaCalendar({
  year,
  month,
  entries,
  onSelectEntry,
  onPrevMonth,
  onNextMonth,
}: Props) {
  const totalDays = daysInMonth(year, month);
  const offset = startDay(year, month);

  const byDate = entries.reduce<Record<string, MediaEntry[]>>((acc, entry) => {
    const { start, end } = getEntryRange(entry);
    if (!start || !end) return acc;
    const startDate = parseYMD(start);
    const endDate = parseYMD(end);
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const key = formatYMD(d);
      acc[key] = acc[key] || [];
      acc[key].push(entry);
    }
    return acc;
  }, {});

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={onPrevMonth}
          className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
          aria-label="Previous month"
        >
          <span aria-hidden="true">←</span>
        </button>

        <h2 className="text-lg font-serif">
          {new Date(year, month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button
          type="button"
          onClick={onNextMonth}
          className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
          aria-label="Next month"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 text-xs text-zinc-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;
          const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
            day
          ).padStart(2, "0")}`;

          const dayEntries = byDate[date] || [];
          const overlapCount = dayEntries.length;

          return (
            <div
              key={date}
              className="min-h-[120px] border rounded-lg p-1 flex flex-col gap-1"
            >
              <div className="text-[10px] text-zinc-400">{day}</div>

              {overlapCount > 1 && (
                <div className="text-[10px] text-emerald-600 font-semibold">
                  {overlapCount} overlaps
                </div>
              )}

              {dayEntries.map(entry => {
                const { start, end } = getEntryRange(entry);
                const isRange = start && end && start !== end;
                const isStart = start === date;
                const isEnd = end === date;
                // const isInProgress = isRange && !isStart && !isEnd;
                const buttonClassName = isRange
                  ? "group text-left rounded-md overflow-hidden border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100/80 transition"
                  : "group text-left rounded-md overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition";

                return (
                  <button
                    key={entry.id}
                    onClick={() => onSelectEntry?.(entry)}
                    className={buttonClassName}
                  >
                    {entry.image && (!isRange || isStart || isEnd) && (
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        width={160}
                        height={80}
                        className="w-full h-20 object-cover"
                      />
                    )}

                  <div className="px-2 py-1">
                    <div
                      className="text-[11px] font-medium leading-tight line-clamp-2"
                      title={entry.title}
                    >
                      {entry.title}
                    </div>

                    {entry.subtitle && (
                      <div className="text-[10px] text-zinc-500 line-clamp-1">
                        {entry.subtitle}
                      </div>
                    )}

                    {isRange && (
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-zinc-400">
                        <span className="uppercase tracking-wide">
                          {isStart ? "Start" : isEnd ? "End" : "In progress"}
                        </span>
                      </div>
                    )}
                  </div>
                </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
