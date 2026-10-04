import Section from "./Section";
import { research } from "@/data/portfolio";

export default function Research() {
  return (
    <Section id="research" title="Research and leadership">
      <ul className="max-w-3xl space-y-8">
        {research.map((r) => (
          <li key={r.title}>
            <h3 className="font-medium leading-snug">{r.title}</h3>
            <p className="text-sm text-muted">{r.period}</p>
            <p className="mt-2 leading-relaxed text-muted">{r.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
