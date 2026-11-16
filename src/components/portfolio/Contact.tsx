import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const EMAIL = "wesleysantos103094@gmail.com";

export const Contact = () => {
  const { t } = useTranslation();

  const links = [
    { label: "LinkedIn", value: "in/wesleysanto", href: "https://www.linkedin.com/in/wesleysanto" },
    { label: "GitHub", value: "Wesley085", href: "https://github.com/Wesley085" },
    { label: "WhatsApp", value: "(85) 99224-3723", href: "https://wa.me/5585992243723" },
  ];

  return (
    <Section id="contato" number="05" title={t("contact.title")}>
      <p className="max-w-xl text-lg text-muted-foreground">{t("contact.text")}</p>

      <a
        href={`mailto:${EMAIL}`}
        className="group mt-8 inline-flex flex-wrap items-center gap-3 font-display text-[clamp(1.5rem,4.2vw,3rem)] leading-tight break-all"
      >
        <span className="link-underline">{EMAIL}</span>
        <ArrowUpRight className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/60"
            >
              <span className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="text-lg">{link.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
