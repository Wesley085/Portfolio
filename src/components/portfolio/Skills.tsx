import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const SkillBar = ({ name, level, animate }: { name: string; level: number; animate: boolean }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <span className="text-sm text-foreground font-medium">{name}</span>
      <span className="font-mono text-xs text-primary">{level}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${level}%` : "0%",
          background: "var(--gradient-accent)",
          transitionDelay: "200ms",
        }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const skillCategories = [
    {
      title: t("skills.categories.languages"),
      icon: "⌨️",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "PHP", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C#", level: 65 },
        { name: "MySQL", level: 78 },
      ],
    },
    {
      title: t("skills.categories.frameworks"),
      icon: "🛠️",
      skills: [
        { name: "Laravel", level: 85 },
        { name: "React.js", level: 78 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 88 },
        { name: ".NET", level: 60 },
      ],
    },
    {
      title: t("skills.categories.tools"),
      icon: "🔧",
      skills: [
        { name: "WordPress", level: 88 },
        { name: "Composer", level: 82 },
        { name: "WebSocket", level: 72 },
        { name: "Git", level: 80 },
        { name: "API REST", level: 83 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl font-bold text-foreground">{t("skills.title")}</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-2xl card-hover"
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      animate={visible}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-6 font-mono">{t("skills.techsUsed")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["MySQL", "Composer", "WordPress Plugins", "Themes WP", "WebSocket", "API Gateway", "Integração de Sistemas"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
