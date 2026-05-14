import React, { useState, useEffect } from "react";
import { LanguageMenu } from "@/components/layout/LanguageMenu";
import { useI18n } from "@/i18n/I18nContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-b border-primary/10"
          : "bg-background/70 backdrop-blur-sm py-5 border-b border-primary/5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <svg
            viewBox="0 0 40 40"
            className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-[12deg]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20 4c-2 6-6 9-12 10 6 1 10 4 12 10 2-6 6-9 12-10-6-1-10-4-12-10z" opacity="0.85" />
            <circle cx="20" cy="20" r="2.2" />
          </svg>
          <span
            className="text-[1.9rem] leading-none text-primary tracking-tight"
            style={{ fontFamily: "'Parisienne', cursive" }}
          >
            Melania
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-3 md:gap-5 min-w-0">
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-semibold text-foreground">
            <a href="#chi-sono" className="hover:text-primary transition-colors">
              {t("nav.philosophy")}
            </a>
            <a href="#trattamento-firma" className="hover:text-primary transition-colors">
              {t("nav.ritual")}
            </a>
            <a href="#trattamenti" className="hover:text-primary transition-colors">
              {t("nav.treatments")}
            </a>
            <a href="#luogo" className="hover:text-primary transition-colors">
              {t("nav.studio")}
            </a>
          </div>

          <LanguageMenu />

          <a
            href="#contatti"
            className="shrink-0 text-xs uppercase tracking-widest font-semibold bg-primary text-primary-foreground border border-primary rounded-full px-5 py-2.5 hover:bg-primary/90 transition-all duration-300"
          >
            {t("nav.book")}
          </a>
        </div>
      </div>
    </nav>
  );
}
