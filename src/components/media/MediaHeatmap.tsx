"use client";

import { useState } from "react";
import { MediaEntry } from "@/data/media";
import { formatYMD, parseYMD } from "@/lib/date";

/* ---------------- utils ---------------- */


const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const WEEKDAY_LABELS = [
  { label: "Mon", row: 1 },
  { label: "Wed", row: 3 },
  { label: "Fri", row: 5 },
];

/* ---------------- types ---------------- */

type Props = {
  entries: MediaEntry[];
  onSelectDate?: (date: string) => void;
};

/* ---------------- component ---------------- */

export default function MediaHeatmap({ entries, onSelectDate }: Props) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());

  /* group entries by date */
  const byDate = entries.reduce<Record<string, MediaEntry[]>>((acc, entry) => {
    const start = entry.startDate ?? entry.endDate ?? entry.date;
    const end = entry.endDate ?? entry.startDate ?? entry.date;
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

  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  const cells: React.ReactNode[] = [];
  const monthLabels: React.ReactNode[] = [];

  let weekIndex = 0;
  let lastMonth = -1;

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateKey = formatYMD(d);
    const items = byDate[dateKey] || [];

    const maxRating = Math.max(...items.map(i => i.rating ?? 0), 0);
    const heatClass = maxRating
      ? `heat-r-${maxRating}`
      : "heat-empty";

    const isToday =
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate();

    const hasEntries = items.length > 0;
    const overlapCount = items.length;

    /* month label at first week column of the month */
    if (d.getMonth() !== lastMonth) {
      lastMonth = d.getMonth();
      monthLabels.push(
        <div
          key={`month-${d.getMonth()}`}
          className="text-xs text-zinc-500"
          style={{ gridColumnStart: weekIndex + 1 }}
        >
          {MONTHS[d.getMonth()]}
        </div>
      );
    }

    cells.push(
      <button
        key={dateKey}
        disabled={!hasEntries}
        title={
          hasEntries
            ? `${dateKey} • ${overlapCount} entr${overlapCount === 1 ? "y" : "ies"}`
            : dateKey
        }
        onClick={() => hasEntries && onSelectDate?.(dateKey)}
        className={`
          w-3 h-3 rounded-sm
          ${heatClass}
          ${isToday ? "ring-2 ring-blue-500" : ""}
          ${hasEntries ? "cursor-pointer" : "cursor-default"}
        `}
      />
    );

    /* Saturday → move to next week column */
    if (d.getDay() === 6) weekIndex++;
  }

  return (
    <div className="flex justify-center">
      <div>
        {/* year navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setYear(y => y - 1)}
            className="px-2 py-1 border rounded"
          >
            ←
          </button>

          <span className="text-sm font-medium">{year}</span>

          <button
            onClick={() => setYear(y => y + 1)}
            className="px-2 py-1 border rounded"
          >
            →
          </button>
        </div>

        <div className="flex gap-3">
          {/* weekday labels */}
          <div
            className="grid text-xs text-zinc-500"
            style={{
              gridTemplateRows: "repeat(7, 12px)",
              gap: "4px",
            }}
          >
            {Array.from({ length: 7 }).map((_, i) => {
              const label = WEEKDAY_LABELS.find(w => w.row === i);
              return (
                <div
                  key={i}
                  className="h-3 flex items-center justify-end pr-1"
                >
                  {label?.label || ""}
                </div>
              );
            })}
          </div>

          {/* heatmap */}
          <div>
            {/* month labels */}
            <div
              className="grid mb-2"
              style={{
                gridAutoFlow: "column",
                gridAutoColumns: "12px",
                columnGap: "4px",
              }}
            >
              {monthLabels}
            </div>

            {/* grid */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(7, 12px)",
                gridAutoFlow: "column",
                gridAutoColumns: "12px",
                gap: "4px",
              }}
            >
              {cells}
            </div>
          </div>
        </div>

        {/* legend */}
        <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
          <span>Rating</span>
          {[1, 2, 3, 4, 5].map(r => (
            <span
              key={r}
              className={`w-3 h-3 rounded-sm heat-r-${r}`}
            />
          ))}
          <span>1 → 5</span>
        </div>
      </div>
    </div>
  );
}
