import Image from "next/image";
import { MediaEntry } from "@/data/media";

type Props = {
  entry?: MediaEntry;
};

export default function MediaDetails({ entry }: Props) {
  if (!entry) {
    return (
      <div className="text-sm text-zinc-500">
        Select a calendar item to see details.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-4">
      {/* Poster */}
      {entry.image && (
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={entry.image}
            alt={entry.title}
            width={300}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Title + Subtitle */}
      <div>
        <h3 className="text-lg font-serif leading-tight">
          {entry.title}
        </h3>

        {entry.subtitle && (
          <p className="text-sm text-zinc-500 mt-1">
            {entry.subtitle}
          </p>
        )}
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span className="uppercase tracking-wide">
          {entry.type}
        </span>

        <time>
          {new Date(entry.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      {/* Rating */}
      {typeof entry.rating === "number" && (
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">Rating</span>
          <span className="text-amber-600">
            {"★".repeat(Math.round(entry.rating))}
            {"☆".repeat(5 - Math.round(entry.rating))}
          </span>
          <span className="text-xs text-zinc-500">
            ({entry.rating}/5)
          </span>
        </div>
      )}

      {/* Notes */}
      {entry.notes?.length && (
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-2">
            Notes
          </h4>

          <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
            {entry.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Opinion */}
      {entry.opinion && (
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500 mb-2">
            Personal Take
          </h4>

          <p className="text-sm italic leading-relaxed text-zinc-700">
            “{entry.opinion}”
          </p>
        </div>
      )}
    </div>
  );
}
