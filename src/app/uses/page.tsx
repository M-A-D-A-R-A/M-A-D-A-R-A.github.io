import Link from "next/link";

type Item = {
  name: string;
  description: string;
  href?: string;
};

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Editor & Terminal",
    items: [
      {
        name: "VS Code Insiders",
        description: "My primary code editor, with access to the latest features.",
        href: "https://code.visualstudio.com/insiders/",
      },
      {
        name: "iTerm2",
        description: "My macOS terminal emulator, with tmux integration.",
        href: "https://iterm2.com/",
      },
      {
        name: "Pi",
        description:
          "A lightweight, extensible coding agent that I use from the terminal.",
        href: "https://pi.dev/",
      },
      {
        name: "Herdr",
        description:
          "A runtime for keeping coding agents running across projects and machines, each in its own terminal.",
        href: "https://herdr.dev/",
      },
    ],
  },
  {
    title: "Computer",
    items: [
      {
        name: "14-inch MacBook Pro (Apple M5)",
        description:
          "Base configuration: 10-core CPU, 10-core GPU, 16GB unified memory, and 1TB SSD. My daily machine for development, local models, writing, and experiments.",
      },
    ],
  },
  {
    title: "Desk",
    items: [
      {
        name: "Green Soul Trigger standing desk",
        description:
          "1600 × 750 mm height-adjustable desk with digital memory presets and an 80 kg lifting capacity.",
      },
      {
        name: "ASTRIDE Ergofit ergonomic office chair",
        description:
          "Adjustable headrest, arms, lumbar support, tilt lock, and a heavy-duty metal base.",
      },
      {
        name: "LG 32MR50C curved monitor",
        description:
          "32-inch Full HD curved VA display with a 100Hz refresh rate, AMD FreeSync, and HDMI inputs.",
        href: "https://www.amazon.in/dp/B0DKFTZCJ2",
      },
    ],
  },
  {
    title: "Tinkering",
    items: [
      {
        name: "RoboCraze UNO R3 SMD Board",
        description:
          "Arduino-compatible development board for small hardware experiments.",
        href: "https://www.amazon.in/dp/B07G4C4D8F",
      },
      {
        name: "Aptechdeals breadboard jumper wires",
        description:
          "Male-to-male, male-to-female, and female-to-female jumper-wire set.",
        href: "https://www.amazon.in/dp/B074JB6SX8",
      },
      {
        name: "Electrobot ESP32 ESP-32S starter kit",
        description:
          "Wi-Fi-enabled microcontroller board for IoT and DIY experiments.",
        href: "https://www.amazon.in/dp/B0CX5JK24H",
      },
    ],
  },
];

export default function UsesPage() {
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
          <h1 className="mt-4 text-3xl font-serif">Uses</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            An evolving record of the tools, hardware, and small things that
            support my work and experiments.
          </p>
        </header>

        <div className="max-w-3xl space-y-14">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-sm mb-4 tracking-wide uppercase">
                {section.title}
              </h2>
              <hr />
              <ul className="mt-6 space-y-6">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <h3 className="font-serif text-base">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-600 transition-colors"
                        >
                          {item.name} ↗
                        </a>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
