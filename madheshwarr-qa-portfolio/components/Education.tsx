import Section from "./Section";
import { certifications, education } from "@/data/portfolio";

function Rows({ heading, rows }: { heading: string; rows: { title: string; place?: string; period: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold">{heading}</h3>
      <ul className="mt-4 space-y-4">
        {rows.map((r) => (
          <li key={r.title}>
            <p className="font-medium leading-snug">{r.title}</p>
            <p className="text-sm text-muted">{[r.place, r.period].filter(Boolean).join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <Rows heading="Education" rows={education} />
        <Rows heading="Certifications" rows={certifications} />
      </div>
    </Section>
  );
}
