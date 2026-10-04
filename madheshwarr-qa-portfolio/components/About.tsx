import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
