"use client";

import { useState } from "react";
import MediaHeatmap from "@/components/media/MediaHeatmap";
import MediaCalendar from "@/components/media/MediaCalendar";
import { mediaLog, MediaEntry } from "@/data/media";

export default function MediaPage() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<MediaEntry | null>(null);

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-24">
      <h1 className="text-3xl font-serif">Media</h1>
      <p className="text-zinc-600 mt-2">
        Movies, books, and anime I watched or read — tracked over time.
      </p>

      {/* Heatmap */}
      <div className="mt-12">
        <MediaHeatmap
          entries={mediaLog}
          onSelectDate={(date) => {
            const entry = mediaLog.find(e => e.date === date);
            if (entry) {
              setSelected(entry);
              const d = new Date(date);
              setYear(d.getFullYear());
              setMonth(d.getMonth());
            }
          }}
        />
      </div>

      <hr className="my-12" />

      {/* Calendar + side notes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <MediaCalendar
            year={year}
            month={month}
            entries={mediaLog}
            onSelectEntry={setSelected}
          />
        </div>

        <aside className="lg:col-span-1">
          <h3 className="text-sm font-semibold tracking-wide mb-3">
            NOTES & WATCHLOG
          </h3>

          {!selected && (
            <p className="text-sm text-zinc-500">
              Select a date or item to see details.
            </p>
          )}

          {selected && (
            <div className="border rounded-xl p-4 space-y-3">
              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-lg w-full object-cover"
                />
              )}

              <div>
                <h4 className="font-medium">{selected.title}</h4>
                {selected.subtitle && (
                  <p className="text-sm text-zinc-500">
                    {selected.subtitle}
                  </p>
                )}
              </div>

              {selected.rating && (
                <div className="text-sm">
                  Rating: <strong>{selected.rating}/5</strong>
                </div>
              )}

              {selected.notes && (
                <ul className="text-sm list-disc pl-4 space-y-1">
                  {selected.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              )}

              {selected.opinion && (
                <p className="text-sm italic text-zinc-600">
                  “{selected.opinion}”
                </p>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
