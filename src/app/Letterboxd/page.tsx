"use client";

import { useState } from "react";
import MediaHeatmap from "@/components/media/MediaHeatmap";
import MediaCalendar from "@/components/media/MediaCalendar";
import { MediaDetailsLeft, MediaDetailsRight } from "@/components/media/MediaDetails";
import { mediaLog, MediaEntry } from "@/data/media";
import { parseYMD } from "@/lib/date";

export default function MediaPage() {
  const sortedEntries = [...mediaLog].sort((a, b) => {
    const aDate = a.endDate ?? a.startDate ?? a.date ?? "";
    const bDate = b.endDate ?? b.startDate ?? b.date ?? "";
    return aDate.localeCompare(bDate);
  });
  const latestEntry = sortedEntries[sortedEntries.length - 1];
  const latestDate = latestEntry
    ? latestEntry.endDate ?? latestEntry.startDate ?? latestEntry.date
    : undefined;
  const initialDate = latestDate ? parseYMD(latestDate) : new Date();

  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [selected, setSelected] = useState<MediaEntry | null>(latestEntry ?? null);

  const handlePrevMonth = () => {
    setMonth(prev => {
      if (prev === 0) {
        setYear(y => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setMonth(prev => {
      if (prev === 11) {
        setYear(y => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24">
      <h1 className="text-3xl font-serif">Media</h1>
      <p className="text-zinc-600 mt-2">
        Movies, books, and anime I watched or read — tracked over time.
      </p>

      {/* Heatmap */}
      <div className="mt-12">
        <MediaHeatmap
          entries={mediaLog}
          onSelectDate={(date) => {
            const entry = mediaLog.find(e => {
              const start = e.startDate ?? e.endDate ?? e.date;
              const end = e.endDate ?? e.startDate ?? e.date;
              if (!start || !end) return false;
              const current = parseYMD(date).getTime();
              return current >= parseYMD(start).getTime()
                && current <= parseYMD(end).getTime();
            });
            if (entry) {
              setSelected(entry);
              const d = parseYMD(date);
              setYear(d.getFullYear());
              setMonth(d.getMonth());
            }
          }}
        />
      </div>

      <hr className="my-12" />

      {/* Calendar + details split */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.4fr_0.85fr] gap-12 items-start">
        <aside className="lg:pr-2">
          <h3 className="text-sm font-semibold tracking-wide mb-3">
            DETAILS
          </h3>
          <MediaDetailsLeft entry={selected ?? undefined} />
        </aside>

        <div>
          <MediaCalendar
            year={year}
            month={month}
            entries={mediaLog}
            onSelectEntry={setSelected}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
        </div>

        <aside className="lg:pl-2">
          <h3 className="text-sm font-semibold tracking-wide mb-3">
            MORE
          </h3>
          <MediaDetailsRight entry={selected ?? undefined} />
        </aside>
      </div>
    </div>
  );
}
