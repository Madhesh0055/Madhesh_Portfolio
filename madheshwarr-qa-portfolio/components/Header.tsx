import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-5">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          MM
        </a>
        <nav aria-label="Primary" className="ml-auto flex min-w-0 gap-5 overflow-x-auto text-sm text-muted">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="whitespace-nowrap transition-colors hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
