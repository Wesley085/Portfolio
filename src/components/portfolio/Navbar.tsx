import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.experience"), href: "#experiencia" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-primary text-lg font-semibold tracking-wider">
          &lt;wesley.<span className="text-foreground">dev</span>/&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.label} className="min-w-[100px] text-center">
                <a
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                >
                  <span className="text-primary text-xs mr-1">{String(i + 1).padStart(2, "0")}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <a
            href="https://wa.me/85992243723"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary font-mono text-sm px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            {t("nav.talkToMe")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border px-6 py-6">
          <ul className="space-y-4">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-mono text-muted-foreground hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-primary text-xs mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/85992243723"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-primary text-primary font-mono text-sm px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.talkToMe")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

