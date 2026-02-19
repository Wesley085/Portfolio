import { useTranslation } from "react-i18next";
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Wesley085"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/wesleysanto"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.instagram.com/wesley_santto2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/85992243723"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <p className="font-mono text-muted-foreground text-sm flex items-center gap-2">
          {t("footer.developedBy")} <span className="text-foreground font-semibold">Wesley Santos</span>
        </p>


      </div>
    </footer>
  );
};
