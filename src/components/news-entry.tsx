import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{news.date}</p>
        <h3 className="font-serif text-base mb-3">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-sm text-zinc-600">{news.description}</p>
        {news.stats && (
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
            {news.stats.map((stat) => (
              <a
                key={stat.href}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-900 hover:decoration-zinc-900"
              >
                {stat.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
