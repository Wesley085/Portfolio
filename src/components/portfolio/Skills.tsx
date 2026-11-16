import { useTranslation } from "react-i18next";
import { Section } from "./Section";

type Group = { name: string; items: string[] };

// Habilidades exibidas como um arquivo JSON num editor, com cores de sintaxe.
export const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as Group[];

  const lines: { n: number; node: JSX.Element }[] = [];
  let n = 1;
  const push = (node: JSX.Element) => lines.push({ n: n++, node });
  const punct = (s: string) => <span className="text-muted-foreground">{s}</span>;

  push(punct("{"));
  groups.forEach((group, gi) => {
    push(
      <span className="pl-6">
        <span className="text-primary">"{group.name.toLowerCase()}"</span>
        {punct(": [")}
      </span>,
    );
    group.items.forEach((item, ii) => {
      push(
        <span className="pl-12">
          <span className="text-[hsl(var(--live))]">"{item}"</span>
          {punct(ii < group.items.length - 1 ? "," : "")}
        </span>,
      );
    });
    push(<span className="pl-6">{punct(gi < groups.length - 1 ? "]," : "]")}</span>);
  });
  push(punct("}"));

  return (
    <Section id="habilidades" number="02" title={t("skills.title")}>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-3 border-b border-border px-5 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <i className="h-2.5 w-2.5 rounded-full bg-border" />
            <i className="h-2.5 w-2.5 rounded-full bg-border" />
            <i className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">stack.json</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 sm:text-sm" aria-label={t("skills.title")}>
          {lines.map((line) => (
            <div key={line.n} className="flex">
              <span className="mr-5 w-5 shrink-0 select-none text-right text-muted-foreground/50">{line.n}</span>
              <code>{line.node}</code>
            </div>
          ))}
        </pre>
      </div>
    </Section>
  );
};
