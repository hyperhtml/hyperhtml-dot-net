import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    href: "https://github.com/hyperhtml",
    label: "GitHub",
    icon: faGithub,
    className:
      "bg-neutral-900/5 text-neutral-800 hover:bg-neutral-900 hover:text-white dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-neutral-900",
  },
  {
    href: "https://www.linkedin.com/in/brycecarr/",
    label: "LinkedIn",
    icon: faLinkedin,
    className:
      "bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#5CA9F3] dark:hover:bg-[#0A66C2] dark:hover:text-white",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-50 px-6 dark:bg-neutral-950">
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-500/20"
      />
      <div
        aria-hidden
        className="animate-float-delayed pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl dark:bg-purple-500/20"
      />

      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-blue-400/40 via-purple-400/40 to-transparent opacity-60 blur-md"
        />
        <div className="relative z-10 flex flex-col items-center gap-8 rounded-3xl border border-black/5 bg-white/70 px-10 py-14 text-center shadow-xl shadow-black/5 backdrop-blur-xl sm:px-16 sm:py-16 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
            Bryce Carr
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ href, label, icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white ${className}`}
              >
                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="relative z-10 mt-10 text-sm text-neutral-400 dark:text-neutral-600">
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}
