import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogs";

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

export default function BlogArchivePage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-24">
      <header className="mb-14">
        <Link
          href="/blogs"
          className="text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
        >
          Blogs
        </Link>
        <h1 className="mt-4 text-3xl font-serif">Blog Archive</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Longer essays, travel notes, movie writing, and technical pieces.
        </p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => {
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
                <h2 className="text-lg font-medium leading-snug">
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
                </h2>

                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 sm:justify-end">
                  <time dateTime={post.date}>{fmtDate(post.date)}</time>
                  {readMinutes && (
                    <>
                      <span aria-hidden>•</span>
                      <span>{Intl.NumberFormat().format(post.count ?? 0)} words</span>
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
    </div>
  );
}
