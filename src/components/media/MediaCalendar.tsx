"use client";

import { MediaEntry } from "@/data/media";

type Props = {
  year: number;
  month: number; // 0–11
  entries: MediaEntry[];
  onSelectEntry?: (entry: MediaEntry) => void;
};

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function startDay(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0 Sun
}

export default function MediaCalendar({
  year,
  month,
  entries,
  onSelectEntry,
}: Props) {
  const totalDays = daysInMonth(year, month);
  const offset = startDay(year, month);

  const byDate = entries.reduce<Record<string, MediaEntry[]>>((acc, e) => {
    acc[e.date] = acc[e.date] || [];
    acc[e.date].push(e);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-lg font-serif mb-4">
        {new Date(year, month).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>

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

          return (
            <div
              key={date}
              className="min-h-[120px] border rounded-lg p-1 flex flex-col gap-1"
            >
              <div className="text-[10px] text-zinc-400">{day}</div>

              {dayEntries.map(entry => (
                <button
                  key={entry.id}
                  onClick={() => onSelectEntry?.(entry)}
                  className="group text-left rounded-md overflow-hidden bg-zinc-50 hover:bg-zinc-100 transition"
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-20 object-cover"
                      loading="lazy"
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
                  </div>
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
