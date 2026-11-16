import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
        <a href="#" className="link-underline">
          ↑
        </a>
      </div>
    </footer>
  );
};
