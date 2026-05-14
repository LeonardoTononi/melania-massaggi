import type { Locale } from "./types";
import { isLocale } from "./types";

const STORAGE_KEY = "melania-locale";

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v && isLocale(v) ? v : null;
}

export function setStoredLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
}

/** Maps browser language to supported locale; Italian as fallback. */
export function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "it";
  const list = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of list) {
    const base = lang.slice(0, 2).toLowerCase();
    if (base === "de") return "de";
    if (base === "en") return "en";
    if (base === "it") return "it";
  }
  return "it";
}

/** Prefer saved choice, otherwise browser, otherwise Italian. */
export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "it";
  return getStoredLocale() ?? detectBrowserLocale();
}
