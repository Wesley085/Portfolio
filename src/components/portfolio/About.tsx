import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-3xl font-bold text-foreground">{t("about.title")}</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <Trans i18nKey="about.p1">
                Sou <span className="text-foreground font-semibold">Wesley dos Santos Silva</span>, desenvolvedor
                web com formação técnica em Desenvolvimento de Sistemas e graduação em andamento
                em Análise e Desenvolvimento de Sistemas (ADS) pela Uninassau.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p2">
                Tenho experiência prática em projetos reais — desde o desenvolvimento de APIs
                em tempo real para uma startup espanhola até a modernização de sistemas de gestão
                pública com <span className="text-primary font-mono">Laravel</span>. Também atuo como
                professor de informática, compartilhando conhecimento com novas turmas.
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p3">
                Meu foco é criar soluções que combinem
                <span className="text-primary"> performance</span>,
                <span className="text-primary"> segurança</span> e uma excelente
                <span className="text-primary"> experiência de usuário</span>.
                Estou aberto a oportunidades presenciais, híbridas ou remotas.
              </Trans>
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                "PHP & Laravel",
                "React.js",
                "WordPress",
                "MySQL",
                ".NET / C#",
                "Tailwind CSS",
                "Bootstrap",
                "WebSocket",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-primary">▸</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-64 h-64 rounded-2xl flex items-center justify-center text-8xl float-animation"
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid hsl(var(--primary) / 0.3)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="font-mono text-primary text-xs tracking-widest">{t("about.badge")}</p>
                </div>
              </div>

              {/* Decorative border offset */}
              <div
                className="absolute -top-3 -right-3 w-64 h-64 rounded-2xl -z-10"
                style={{ border: "2px solid hsl(var(--primary) / 0.4)" }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "3+", label: t("about.stats.years") },
            { number: "4+", label: t("about.stats.companies") },
            { number: "10+", label: t("about.stats.technologies") },
            { number: "∞", label: t("about.stats.learning") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl card-hover"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
