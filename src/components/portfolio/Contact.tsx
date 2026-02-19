import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export const Contact = () => {
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
    <section id="contato" className="py-24 px-6 bg-card/30">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-border max-w-xs" />
          <span className="font-mono text-primary text-sm whitespace-nowrap">{t("contact.sectionTitle")}</span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          <Trans i18nKey="contact.title">
            Vamos <span className="text-gradient">trabalhar juntos?</span>
          </Trans>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          <Trans i18nKey="contact.description">
            Estou aberto a oportunidades
            <span className="text-primary">presenciais</span>,
            <span className="text-primary">hibridas</span> ou
            <span className="text-primary">remotas</span>.
            Se você tem um projeto interessante ou uma vaga disponivel,
            minha caixa de entrada está sempre aberta!
          </Trans>
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=wesleysantos103094@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 hover:-translate-y-1 mb-12 pulse-glow"
        >
          {t("contact.sayHello")}
        </a>

        <div className="flex justify-center gap-8">
          <a
            href="https://wa.me/85992243723"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-lg">📞</span>
            <span className="font-mono text-sm">(85) 99224-3723</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=wesleysantos103094@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-lg">📧</span>
            <span className="font-mono text-sm">wesleysantos103094@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
