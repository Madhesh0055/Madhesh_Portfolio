import Section from "./Section";
import { work } from "@/data/portfolio";

export default function FeaturedWork() {
  return (
    <Section id="work" title="Selected work">
      <div className="space-y-14">
        {work.map((w) => (
          <article key={w.name}>
            <h3 className="font-display text-2xl font-semibold tracking-tight">{w.name}</h3>
            <p className="mt-1 text-sm text-muted">{w.context}</p>

            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-[110px_1fr]">
              {[
                ["Problem", w.problem],
                ["Solution", w.solution],
                ["My role", w.contribution],
                ["Outcome", w.outcome],
              ].map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-sm font-medium text-muted">{k}</dt>
                  <dd className={`leading-relaxed ${k === "Outcome" ? "font-medium" : ""}`}>{v}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {w.tech.map((t) => (
                <li key={t} className="rounded border border-line px-2.5 py-1 text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
