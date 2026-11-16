import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDownRight } from "lucide-react";

const useFortalezaTime = () => {
  const format = () =>
    new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Fortaleza" }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 20_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

export const Hero = () => {
  const { t } = useTranslation();
  const time = useFortalezaTime();

  const rows = [
    { label: t("hero.card.location"), value: `Fortaleza, CE · ${time}` },
    { label: t("hero.card.now"), value: t("hero.card.nowValue") },
    { label: t("hero.card.stack"), value: "PHP · Laravel · React · Node.js" },
    { label: t("hero.card.status"), value: t("hero.card.statusValue"), live: true },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-end gap-14 px-6 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t("hero.eyebrow")}</p>

          <h1 className="mt-6 text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.9]">
            Wesley
            <br />
            <span className="italic text-primary">dos Santos</span>
            <br />
            Silva
          </h1>

          <p className="mt-10 max-w-xl text-xl leading-snug sm:text-2xl">{t("hero.role")}</p>
          <p className="mt-4 max-w-xl text-muted-foreground">{t("hero.intro")}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contato"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta")}
            </a>
            <a href="#experiencia" className="inline-flex items-center gap-1 text-sm link-underline">
              {t("hero.cv")}
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-card/70 shadow-[0_1px_0_hsl(var(--foreground)/0.04)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <span className="font-mono text-xs text-muted-foreground">~/{t("hero.card.title")}</span>
            <span className="flex gap-1.5" aria-hidden>
              <i className="h-2.5 w-2.5 rounded-full bg-border" />
              <i className="h-2.5 w-2.5 rounded-full bg-border" />
              <i className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </span>
          </div>
          <dl className="divide-y divide-border">
            {rows.map((row) => (
              <div key={row.label} className="px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{row.label}</dt>
                <dd className="mt-1 flex items-center gap-2 text-sm">
                  {row.live && <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-[hsl(var(--live))]" aria-hidden />}
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
};
