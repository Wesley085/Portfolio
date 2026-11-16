import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

const languages = ["pt", "en", "es"] as const;

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || "pt").slice(0, 2);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  const items = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.skills"), href: "#habilidades" },
    { label: t("nav.experience"), href: "#experiencia" },
    { label: t("nav.education"), href: "#formacao" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl">
          wesley<span className="text-primary">.</span>dev
        </a>

        <nav className="flex items-center gap-5 text-sm">
          <ul className="hidden items-center gap-6 lg:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 font-mono text-xs" role="group" aria-label="Language">
            {languages.map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                aria-pressed={current === lng}
                className={`px-1.5 py-1 uppercase transition-colors ${
                  current === lng ? "text-primary underline underline-offset-4" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label={t("hero.card.theme")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};
