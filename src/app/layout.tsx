import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/assets/images/Madara-Uchiha-Sharingan.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#FFFCF8]/95 backdrop-blur">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-3 px-8 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="font-serif text-base text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              {aboutMe.name}
            </Link>
            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap gap-2 text-xs text-zinc-600"
            >
              <Link
                href="/projects"
                className="rounded-full border border-zinc-200 px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="rounded-full border border-zinc-200 px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/Letterboxd"
                className="rounded-full border border-zinc-200 px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Letterboxd
              </Link>
              {aboutMe.cvUrl && (
                <a
                  href={aboutMe.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-200 px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  CV
                </a>
              )}
            </nav>
          </div>
        </header>
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
