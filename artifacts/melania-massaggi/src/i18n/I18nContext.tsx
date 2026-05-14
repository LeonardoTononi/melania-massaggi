import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "./types";
import { getInitialLocale, setStoredLocale } from "./detectLocale";
import it from "./locales/it.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

const messages = { it, en, de } as const;

type Messages = (typeof messages)[Locale];

function getValue(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur === null || cur === undefined || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

function applyDocumentLocale(locale: Locale, data: Messages) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  html.lang = locale === "de" ? "de" : locale === "en" ? "en" : "it";
  document.title = data.meta.title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", data.meta.description);

  const syncOg = (prop: string, content: string) => {
    let el = document.querySelector(`meta[property="${prop}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", prop);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  const syncTw = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  syncOg("og:title", data.meta.title);
  syncOg("og:description", data.meta.description);
  syncTw("twitter:title", data.meta.title);
  syncTw("twitter:description", data.meta.description);
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  /** String array from JSON (e.g. treatment benefits). */
  ta: (path: string) => string[];
  messages: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "it";
    return getInitialLocale();
  });

  const setLocale = useCallback((next: Locale) => {
    setStoredLocale(next);
    setLocaleState(next);
  }, []);

  const data = messages[locale];

  const t = useCallback(
    (path: string) => {
      const v = getValue(data, path);
      return typeof v === "string" ? v : path;
    },
    [data],
  );

  const ta = useCallback(
    (path: string) => {
      const v = getValue(data, path);
      return Array.isArray(v) && v.every((x) => typeof x === "string") ? (v as string[]) : [];
    },
    [data],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      ta,
      messages: data,
    }),
    [locale, setLocale, t, ta, data],
  );

  useEffect(() => {
    applyDocumentLocale(locale, data);
  }, [locale, data]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
