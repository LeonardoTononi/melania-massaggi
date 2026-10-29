import React from "react";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/i18n/I18nContext";
import type { Locale } from "@/i18n/types";
import { LOCALES } from "@/i18n/types";
import { cn } from "@/lib/utils";

const shortLabel: Record<Locale, string> = {
  it: "IT",
  en: "EN",
  de: "DE",
};

export function LanguageMenu() {
  const { locale, setLocale, t } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.languageMenu")}
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-semibold uppercase tracking-widest sm:gap-2 sm:px-3",
          "text-foreground bg-white/70 backdrop-blur-sm",
          "outline-none transition-colors hover:bg-white",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <Globe className="h-4 w-4 shrink-0 text-primary" aria-hidden />
        <span className="tabular-nums">{shortLabel[locale]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[11rem] rounded-xl border-primary/10 p-1 shadow-lg">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className="flex cursor-pointer items-center justify-between gap-6 rounded-lg px-3 py-2.5 text-sm"
          >
            <span className="font-medium">{t(`nav.lang_${loc}`)}</span>
            {locale === loc ? (
              <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            ) : (
              <span className="w-4 shrink-0" aria-hidden />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
