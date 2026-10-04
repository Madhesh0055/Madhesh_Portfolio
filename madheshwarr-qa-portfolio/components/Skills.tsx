import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="font-medium">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded border border-line px-2.5 py-1 text-sm text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
