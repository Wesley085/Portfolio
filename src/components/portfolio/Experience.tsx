import { useTranslation } from "react-i18next";
import { Section } from "./Section";

type Job = { company: string; context: string; role: string; period: string; points: string[] };
type Education = { degree: string; school: string; period: string; note: string };

export const Experience = () => {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true }) as Job[];
  const education = t("education.items", { returnObjects: true }) as Education[];

  return (
    <>
      <Section id="experiencia" number="03" title={t("experience.title")}>
        <ol className="space-y-4">
          {jobs.map((job, i) => (
            <li
              key={`${job.company}-${job.period}`}
              className={`group rounded-xl border p-6 transition-colors hover:border-primary/60 sm:p-8 ${
                i === 0 ? "border-primary/40 bg-card" : "border-border bg-card/40"
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{job.period}</p>
              <h3 className="mt-3 text-2xl sm:text-3xl">{job.company}</h3>
              <p className="mt-1 text-primary">{job.role}</p>
              <p className="text-sm text-muted-foreground">{job.context}</p>
              <ul className="mt-5 space-y-2 text-[15px]">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-3 before:bg-primary">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="formacao" number="04" title={t("education.title")}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.degree} className="rounded-xl border border-border bg-card/40 p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {item.period}
                {item.note && <span className="ml-2 text-primary">· {item.note}</span>}
              </p>
              <p className="mt-3 font-display text-xl leading-snug">{item.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};
