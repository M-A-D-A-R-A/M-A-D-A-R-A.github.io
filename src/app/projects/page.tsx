import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  const currentProjects = portfolioData.filter(
    (portfolio) => portfolio.status === "current"
  );
  const otherProjects = portfolioData.filter(
    (portfolio) => portfolio.status !== "current"
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <main className="max-w-screen-lg mx-auto px-8 py-24">
        <header className="mb-14">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            Home
          </Link>
          <h1 className="mt-4 text-3xl font-serif">Projects</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Developer tools, experiments, apps, and open-source work. Some of
            these are polished, some are scrappy, all of them taught me
            something useful.
          </p>
        </header>

        {currentProjects.length > 0 && (
          <section className="mb-20">
            <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
              Currently Working On
            </h2>
            <hr />
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {currentProjects.map((portfolio, index) => (
                <ProjectCard key={index} portfolio={portfolio} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section>
            <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
              Project Archive
            </h2>
            <hr />
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {otherProjects.map((portfolio, index) => (
                <ProjectCard key={index} portfolio={portfolio} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
