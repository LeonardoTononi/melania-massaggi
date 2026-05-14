import React from "react";
import { useI18n } from "@/i18n/I18nContext";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-background py-12 border-t border-primary/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-serif text-primary">Melania</h2>
          <p className="text-sm text-muted-foreground italic font-serif mt-1">Healing Touch</p>
        </div>

        <div className="text-sm text-foreground/60 font-light flex flex-col md:flex-row gap-4 md:gap-8">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
