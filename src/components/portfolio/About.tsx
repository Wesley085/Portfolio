import { useTranslation } from "react-i18next";
import { Section } from "./Section";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="sobre" number="01" title={t("about.title")}>
      <div className="max-w-2xl space-y-6">
        <p className="font-display text-2xl leading-snug sm:text-3xl">{t("about.p1")}</p>
        <p className="text-muted-foreground">{t("about.p2")}</p>
        <p className="text-muted-foreground">{t("about.p3")}</p>
      </div>
    </Section>
  );
};
