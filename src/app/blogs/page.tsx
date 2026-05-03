// app/blogs/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { tilItems } from "@/data/til";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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

const WORDS_PER_MIN = 220;

export default function BlogsPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const tils = [...tilItems].sort((a, b) => (a.date < b.date ? 1 : -1));
  const latestPosts = posts.slice(0, 4);
  const latestTils = tils.slice(0, 3);

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-24">
      <header className="mb-14">
        <Link
          href="/"
          className="text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
        >
          Home
        </Link>
        <h1 className="mt-4 text-3xl font-serif">Blogs & TIL</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Longer essays, field notes, and small things I learned while poking at
          technology, films, travel, and whatever else refuses to leave my head.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-xl font-serif">Blog</h2>
            <Link
              href="/blogs/archive"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
            >
              View all posts
              <ArrowUpRight size={12} />
            </Link>
          </div>
          <ul className="space-y-6">
            {latestPosts.map((post) => {
              const slug = slugify(post.title);
              const href = `/blogs/${slug}.html`;
              const readMinutes =
                typeof post.count === "number" && post.count > 0
                  ? Math.max(1, Math.round(post.count / WORDS_PER_MIN))
                  : null;

              return (
                <li
                  key={slug}
                  className="group border-b border-zinc-200 pb-6 last:border-b-0"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-medium leading-snug">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 hover:text-zinc-600 transition-colors"
                      >
                        {post.title}
                        <ArrowUpRight
                          size={15}
                          className="mt-0.5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </Link>
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 sm:justify-end">
                      <time dateTime={post.date}>{fmtDate(post.date)}</time>
                      {readMinutes && (
                        <>
                          <span aria-hidden>•</span>
                          <span>
                            {Intl.NumberFormat().format(post.count ?? 0)} words
                          </span>
                          <span aria-hidden>•</span>
                          <span>{readMinutes} min read</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {post.description}
                  </p>

                  {post.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-zinc-100 text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="lg:col-span-1">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="text-xl font-serif">TIL</h2>
            {tils.length > latestTils.length ? (
              <Link
                href="/blogs/til"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
              >
                Show more
                <ArrowUpRight size={12} />
              </Link>
            ) : null}
          </div>
          <ol className="space-y-4">
            {latestTils.map((item, idx) => (
              <li
                key={`${item.date}-${idx}`}
                className="rounded-lg border border-zinc-200 p-4"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <time dateTime={item.date} className="text-[11px] text-zinc-500">
                    {fmtDate(item.date)}
                  </time>
                </div>
                <p className="text-sm text-zinc-600 mt-2">{item.description}</p>
                {item.link ? (
                  <div className="mt-3">
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
        </aside>
      </div>
    </div>
  );
}
