import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper" aria-hidden="true" />
            <h3 className="font-display text-xl font-semibold tracking-tight">{e.role}</h3>
            <p className="mt-1 text-sm text-muted">
              {e.company}, {e.period}
            </p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2.5 pl-5 leading-relaxed marker:text-muted">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
