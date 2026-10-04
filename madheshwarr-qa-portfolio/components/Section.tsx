import type { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-14 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[200px_1fr] lg:gap-12 lg:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight lg:sticky lg:top-24 lg:self-start">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
