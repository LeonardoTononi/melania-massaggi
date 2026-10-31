import React from "react";
import { Link } from "wouter";
import { BrandMark } from "@/components/brand/BrandMark";
import { useI18n } from "@/i18n/I18nContext";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:px-12 md:text-left">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <BrandMark className="h-9 w-9" />
          <div>
            <p className="text-sm font-semibold text-foreground">Melania Massaggi</p>
            <p className="text-xs text-muted-foreground">Healing Touch</p>
          </div>
        </Link>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-8">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
