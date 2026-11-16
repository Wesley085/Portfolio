import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  number: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, number, title, children }: SectionProps) => (
  <section id={id} className="border-t border-border">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[240px_1fr] md:gap-16 md:py-28">
      <div className="self-start md:sticky md:top-24">
        <p className="font-mono text-xs text-primary">{number} /</p>
        <h2 className="mt-2 text-4xl md:text-5xl">{title}</h2>
      </div>
      <Reveal>{children}</Reveal>
    </div>
  </section>
);
