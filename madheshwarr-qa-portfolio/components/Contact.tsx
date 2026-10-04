import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { label: "Location", value: profile.location },
    ...profile.links.map((l) => ({ label: l.label, value: l.href.replace(/^https?:\/\//, ""), href: l.href })),
  ];

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        I'm open to QA and software testing roles. Email is the quickest way to reach me.
      </p>
      <dl className="mt-8 max-w-xl divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[100px_1fr] gap-4 py-4">
            <dt className="text-sm text-muted">{r.label}</dt>
            <dd className="break-words font-medium">
              {r.href ? (
                <a href={r.href} className="transition-colors hover:text-accent">
                  {r.value}
                </a>
              ) : (
                r.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <a href={profile.resume} download className="mt-8 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90">
        Download résumé
      </a>
    </Section>
  );
}
