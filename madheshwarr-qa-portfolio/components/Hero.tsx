import { highlights, profile } from "@/data/portfolio";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-pass" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div>
        <p className="rise text-sm text-muted" style={delay(0)}>{profile.location}</p>
        <h1 className="rise mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl" style={delay(80)}>
          {profile.name}
        </h1>
        <p className="rise mt-3 text-xl font-medium text-accent" style={delay(160)}>{profile.title}</p>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={delay(240)}>{profile.positioning}</p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={delay(320)}>
          <a href="#work" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90">
            See selected work
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
            Email me
          </a>
          <a href={profile.resume} download className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
            Download résumé
          </a>
        </div>
      </div>

      <aside aria-label="At a glance" className="rise rounded-lg border border-line bg-panel" style={delay(400)}>
        <p className="border-b border-line px-5 py-3 font-mono text-sm text-muted">at-a-glance</p>
        <ul className="divide-y divide-line">
          {highlights.map((h) => (
            <li key={h.label} className="flex gap-3 px-5 py-4">
              <Check />
              <div>
                <p className="text-sm text-muted">{h.label}</p>
                <p className="font-medium leading-snug">{h.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
