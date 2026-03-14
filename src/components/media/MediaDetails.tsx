import Image from "next/image";
import { MediaEntry } from "@/data/media";
import { parseYMD } from "@/lib/date";

type Props = {
  entry?: MediaEntry;
};
export function MediaDetailsLeft({ entry }: Props) {
  if (!entry) {
    return (
      <div className="text-sm text-zinc-500">
        Select a calendar item to see details.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
      {entry.image && (
        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
          <Image
            src={entry.image}
            alt={entry.title}
            width={360}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-zinc-500">
          <span className="rounded-full border border-zinc-200 px-2 py-1">
            {entry.type}
          </span>
          {entry.year && <span>{entry.year}</span>}
          {entry.runtime && <span>• {entry.runtime}</span>}
          {entry.genre && <span>• {entry.genre}</span>}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-serif leading-tight text-zinc-900">
            {entry.title}
          </h3>
          {entry.imdbRating && (
            <span className="inline-flex items-center gap-1 text-sm text-zinc-600">
              <span className="text-xs uppercase text-zinc-500">IMDb</span>
              <span className="font-semibold text-zinc-900">
                {entry.imdbRating}
                <span className="text-xs font-normal text-zinc-400">/10</span>
              </span>
            </span>
          )}
        </div>

        {entry.subtitle && (
          <p className="text-sm text-zinc-500">
            {entry.subtitle}
          </p>
        )}

        <div className="text-xs text-zinc-400">
          {(() => {
            const start = entry.startDate ?? entry.endDate ?? entry.date;
            const end = entry.endDate ?? entry.startDate ?? entry.date;
            if (!start || !end) return null;
            const formatter = new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const startLabel = formatter.format(parseYMD(start));
            const endLabel = formatter.format(parseYMD(end));

            if (start === end) {
              return <time>{startLabel}</time>;
            }

            return (
              <div className="flex flex-col gap-1">
                <span>Start: {startLabel}</span>
                <span>End: {endLabel}</span>
              </div>
            );
          })()}
        </div>
      </div>

      {(typeof entry.rating === "number" || entry.opinion) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
          <div className="flex flex-wrap items-center gap-3">
            {typeof entry.rating === "number" && (
              <div className="flex items-center gap-2">
                <span className="text-amber-600">
                  {"★".repeat(Math.round(entry.rating))}
                  {"☆".repeat(5 - Math.round(entry.rating))}
                </span>
                <span className="text-xs text-amber-800">{entry.rating}/5</span>
              </div>
            )}
            {entry.opinion && (
              <p className="text-sm italic leading-relaxed text-amber-900">
                “{entry.opinion}”
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function MediaDetailsRight({ entry }: Props) {
  if (!entry) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
      {entry.plot && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Storyline
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            {entry.plot}
          </p>
        </div>
      )}

      {(entry.director || entry.writer || entry.actors) && (
        <div className="grid gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm">
          {entry.director && (
            <p>
              <span className="font-semibold text-zinc-700">Director:</span> {entry.director}
            </p>
          )}
          {entry.writer && (
            <p>
              <span className="font-semibold text-zinc-700">Writer:</span> {entry.writer}
            </p>
          )}
          {entry.actors && (
            <p>
              <span className="font-semibold text-zinc-700">Cast:</span> {entry.actors}
            </p>
          )}
        </div>
      )}

      {(entry.language || entry.country || entry.awards || entry.boxOffice) && (
        <div className="grid gap-3 text-sm text-zinc-600">
          {entry.language && (
            <p>
              <span className="font-medium text-zinc-700">Language:</span> {entry.language}
            </p>
          )}
          {entry.country && (
            <p>
              <span className="font-medium text-zinc-700">Country:</span> {entry.country}
            </p>
          )}
          {entry.awards && (
            <p>
              <span className="font-medium text-zinc-700">Awards:</span> {entry.awards}
            </p>
          )}
          {entry.boxOffice && (
            <p>
              <span className="font-medium text-zinc-700">Box Office:</span> {entry.boxOffice}
            </p>
          )}
        </div>
      )}

      {(entry.metascore || entry.ratings?.length) && (
        <div className="grid gap-3 text-sm">
          {entry.metascore && (
            <div className="rounded-xl border border-zinc-200 p-3">
              <p className="text-xs uppercase text-zinc-500">Metascore</p>
              <p className="mt-2 text-lg font-semibold text-zinc-900">
                {entry.metascore}
                <span className="text-xs font-normal text-zinc-400">/100</span>
              </p>
            </div>
          )}

          {entry.ratings?.length && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Critics
              </h4>
              <div className="mt-3 grid gap-2">
                {entry.ratings.map((rating, index) => (
                  <div
                    key={`${rating.source}-${index}`}
                    className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm"
                  >
                    <span className="text-zinc-500">{rating.source}</span>
                    <span className="font-semibold text-zinc-800">
                      {rating.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
