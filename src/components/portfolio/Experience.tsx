import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}

interface Academic {
  degree: string;
  school: string;
  period: string;
}

export const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  const jobs = t("experience.jobs", { returnObjects: true }) as Job[];
  const academic = t("experience.academic", { returnObjects: true }) as Academic[];

  // Define metadata for each job (tags and current status need to be mapped to the translated jobs)
  // Since translations don't hold the 'tags' or 'current' boolean, we map them here by index.
  const jobsMetadata = [
    { current: true, tags: ["PHP", "WordPress", "React.js", "Composer"] },
    { current: true, tags: ["Laravel", "Firebird", "API REST", "UI/UX"] },
    { current: true, tags: ["Ensino", "Office", "Didática"] }, // Tags aren't translated usually, but could be if needed
    { current: false, tags: ["PHP", "Pagamentos", "Gateway", "Manutenção"] },
    { current: false, tags: ["API", "WebSocket", "Real-time"] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = jobs[active];
  const meta = jobsMetadata[active];

  return (
    <section id="experiencia" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <div
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-3xl font-bold text-foreground">{t("experience.title")}</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Company list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {jobs.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 font-mono text-sm rounded-lg transition-all duration-200 border-l-2 ${active === i
                  ? "text-primary bg-primary/10 border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* Experience detail */}
          <div
            key={active}
            className="p-8 rounded-2xl animate-fade-in"
            style={{
              background: "var(--gradient-card)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              {meta.current && (
                <span className="flex items-center gap-1.5 text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {t("experience.current")}
                </span>
              )}
            </div>

            <p className="text-primary font-semibold mb-1">{exp.company}</p>
            <p className="text-muted-foreground text-sm mb-1">{exp.location}</p>
            <p className="font-mono text-xs text-muted-foreground mb-6">{exp.period}</p>

            <ul className="space-y-3 mb-6">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary">🎓</span> {t("experience.education.title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {academic.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl card-hover"
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                  {index === 1 && ( // Assuming second education is the one in progress
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/30 flex-shrink-0 ml-2">
                      {t("experience.education.inProgress")}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-1">{edu.school}</p>
                <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
