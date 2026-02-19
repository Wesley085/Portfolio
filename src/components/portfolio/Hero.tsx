import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const roles = useMemo(() => t("hero.roles", { returnObjects: true }) as string[], [i18n.language, t]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Reset state when roles change (language change)
  useEffect(() => {
    setRoleIndex(0);
    setDisplayed("");
    setTyping(true);
    setCharIndex(0);
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex] || "";

    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="animate-slide-up">
          <p className="font-mono text-primary text-sm mb-4 tracking-widest">
            {t("hero.greeting")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Wesley
            <br />
            <span className="text-gradient">dos Santos</span>
          </h1>

          <div className="flex items-center gap-2 mb-8">
            <span className="font-mono text-xl md:text-2xl text-muted-foreground">&gt; </span>
            <span className="font-mono text-xl md:text-2xl text-primary">
              {displayed}
              <span className="cursor-blink text-primary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-10">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-1 shadow-lg"
              style={{ boxShadow: "0 0 20px hsl(174 72% 56% / 0.3)" }}
            >
              {t("hero.ctaExperience")}
            </a>
            <a
              href="#contato"
              className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:-translate-y-1"
            >
              {t("hero.ctaContact")}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-start gap-2 animate-bounce">
            <span className="font-mono text-xs text-muted-foreground tracking-widest">{t("hero.scroll")}</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent ml-2" />
          </div>
        </div>
      </div>

      {/* Side decorations */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wesleysantos103094@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs [writing-mode:vertical-lr] tracking-widest hover:-translate-y-1 duration-200">
          wesleysantos103094@gmail.com
        </a>
        <div className="w-px h-24 bg-muted-foreground/30" />
      </div>
    </section>
  );
};
