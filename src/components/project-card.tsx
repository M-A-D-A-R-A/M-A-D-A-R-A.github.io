import { ArrowUpRight, Code2 } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function ProjectCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white/55 p-5 transition-colors hover:border-zinc-300">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="font-serif text-lg leading-snug">{portfolio.title}</h3>
        {portfolio.status === "current" && (
          <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-700">
            Current
          </span>
        )}
      </div>

      {portfolio.technologies && (
        <div className="mb-4 flex flex-wrap gap-2">
          {portfolio.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="mb-6 text-sm leading-relaxed text-zinc-600">
        {portfolio.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-4">
        {portfolio.projectUrl && (
          <a
            href={portfolio.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            Project
          </a>
        )}
        {portfolio.codeUrl && (
          <a
            href={portfolio.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            <Code2 size={13} />
            Code
          </a>
        )}
      </div>
    </article>
  );
}
