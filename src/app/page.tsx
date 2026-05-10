import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";

const featuredProjects = [
  {
    title: "Passco",
    href: "https://passco.site/",
    description:
      "Community memberships, booking, OTP verification, UPI payments, and organizer tools for small recurring groups.",
  },
  {
    title: "Vigil",
    href: "https://github.com/M-A-D-A-R-A/Vigil",
    description:
      "A local-first observability box for logs, traces, metrics, and cost summaries across side projects.",
  },
  {
    title: "Rocky Relay",
    href: "https://github.com/M-A-D-A-R-A/rocky-relay",
    description:
      "A low-latency voice assistant experiment with STT, local LLMs, persona transforms, and swappable TTS.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {aboutMe.description && (
              <section>
                <p className="font-serif text-sm leading-relaxed text-zinc-700">
                  {aboutMe.description}
                </p>
              </section>
            )}

            <section>
              <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
                Featured Projects
              </h2>
              <hr />
              <div className="space-y-6">
                {featuredProjects.map((project) => (
                  <div key={project.title}>
                    <h3 className="font-serif text-base mb-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-600 transition-colors duration-300"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {experienceData.length > 0 && (
              <section>
                <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
                  Experience
                </h2>
                <hr />
                <div className="space-y-8">
                  {experienceData.map((experience, index) => (
                    <ExperienceEntry key={index} experience={experience} />
                  ))}
                </div>
              </section>
            )}

            {newsData.length > 0 && (
              <section>
                <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
                  Open Source Contributions
                </h2>
                <hr />
                <div className="space-y-8">
                  {newsData.map((news, index) => (
                    <NewsEntry key={index} news={news} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
