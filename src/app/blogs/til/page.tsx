import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tilItems } from "@/data/til";

function fmtDate(d: string) {
  const dt = new Date(d);
  return isNaN(dt.getTime())
    ? d
    : dt.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
}

export default function TilArchivePage() {
  const tils = [...tilItems].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-24">
      <header className="mb-14">
        <Link
          href="/blogs"
          className="text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
        >
          Blogs
        </Link>
        <h1 className="mt-4 text-3xl font-serif">TIL Archive</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Small things I learned, noticed, or finally found a name for.
        </p>
      </header>

      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {tils.map((item, idx) => (
          <li
            key={`${item.date}-${idx}`}
            className="rounded-lg border border-zinc-200 bg-white/55 p-5"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="text-base font-medium">{item.title}</h2>
              <time dateTime={item.date} className="text-[11px] text-zinc-500">
                {fmtDate(item.date)}
              </time>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {item.description}
            </p>
            {item.link ? (
              <div className="mt-4">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900"
                >
                  Source
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
