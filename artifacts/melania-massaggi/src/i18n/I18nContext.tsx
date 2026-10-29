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
import { pageMessages } from "./pageMessages";
import it from "./locales/it.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

const baseMessages = { it, en, de } as const;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge(
  base: Record<string, unknown>,
  overlay: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = { ...base };
  for (const [k, v] of Object.entries(overlay)) {
    if (isPlainObject(v) && isPlainObject(out[k])) {
      out[k] = deepMerge(out[k] as Record<string, unknown>, v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function getValue(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur === null || cur === undefined || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

function applyDocumentLang(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang =
    locale === "de" ? "de" : locale === "en" ? "en" : "it";
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  ta: (path: string) => string[];
  /** Raw value (objects/arrays) for FAQ items etc. */
  get: (path: string) => unknown;
  messages: Record<string, unknown>;
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

  const data = useMemo(
    () =>
      deepMerge(
        baseMessages[locale] as unknown as Record<string, unknown>,
        pageMessages[locale],
      ),
    [locale],
  );

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

  const get = useCallback((path: string) => getValue(data, path), [data]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      ta,
      get,
      messages: data,
    }),
    [locale, setLocale, t, ta, get, data],
  );

  useEffect(() => {
    applyDocumentLang(locale);
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
