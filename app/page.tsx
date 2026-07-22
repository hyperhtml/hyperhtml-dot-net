function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const links = [
  {
    href: "https://github.com/hyperhtml",
    label: "GitHub",
    Icon: GitHubIcon,
    className:
      "bg-neutral-900/5 text-neutral-800 hover:bg-neutral-900 hover:text-white dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-neutral-900",
  },
  {
    href: "https://www.linkedin.com/in/brycecarr/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
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
            {links.map(({ href, label, Icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-white ${className}`}
              >
                <Icon className="h-4 w-4" />
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
