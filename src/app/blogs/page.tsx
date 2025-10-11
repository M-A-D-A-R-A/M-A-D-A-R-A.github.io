// app/blogs/page.tsx
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { tilItems } from "@/data/til";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")           // drop quotes
    .replace(/[^a-z0-9]+/g, "-")    // non-alnum → dashes
    .replace(/^-+|-+$/g, "");       // trim dashes
}

function fmtDate(d: string) {
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? d : dt.toLocaleDateString(undefined, {
    year: "numeric", month: "short", day: "2-digit"
  });
}

const WORDS_PER_MIN = 220;

export default function BlogsPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const tils = [...tilItems].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-24">
      <h1 className="text-3xl font-serif">Blogs & TIL</h1>

      <br></br>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Blog list */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-serif mb-4">Blog</h2>
          <ul className="space-y-5">
            {posts.map((post) => {
              const slug = slugify(post.title);
              const href = `/blogs/${slug}.html`; // served from /public/blog/<slug>.html
              return (
                <li key={slug} className="group border-b border-zinc-200 pb-5">
  <div className="flex items-center justify-between gap-4">
    <h3 className="text-lg font-medium">
      <Link href={href} className="hover:underline decoration-2 underline-offset-4">
        {post.title}
      </Link>
    </h3>

    <div className="flex items-center gap-2 text-xs text-zinc-500">
      <time>{fmtDate(post.date)}</time>
      {typeof post.count === 'number' && post.count > 0 && (
        <>
          <span aria-hidden>•</span>
          <span>
            {Intl.NumberFormat().format(post.count)} words
            {" "}(~{Math.max(1, Math.round(post.count / WORDS_PER_MIN))} min read)
          </span>
        </>
      )}
    </div>
  </div>

  <p className="text-sm text-zinc-600 mt-2">{post.description}</p>

  {post.tags?.length ? (
    <div className="mt-3 flex flex-wrap gap-2">
      {post.tags.map((t) => (
        <span
          key={t}
          className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-zinc-100 text-zinc-700"
        >
          {t}
        </span>
      ))}
    </div>
  ) : null}

  <div className="mt-3">
    <Link href={href} className="text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors">
      Read Blog
    </Link>
  </div>
</li>
              );
            })}
          </ul>
        </section>

        {/* Right: TIL */}
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-serif mb-4">TIL (Today I Learned)</h2>
          <ol className="space-y-4">
            {tils.map((item, idx) => (
              <li key={`${item.date}-${idx}`} className="rounded-xl border border-zinc-200 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <time className="text-[11px] text-zinc-500">{fmtDate(item.date)}</time>
                </div>
                <p className="text-sm text-zinc-600 mt-2">{item.description}</p>
                {item.link ? (
                  <div className="mt-3">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-zinc-900"
                    >
                      Source ↗
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
