import { useEffect } from "react";
import { absoluteUrl, OG_IMAGE, SITE_NAME } from "@/lib/site";
import { useI18n } from "@/i18n/I18nContext";

type DocumentHeadProps = {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD objects (will be wrapped in @graph if multiple) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogType?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const id = "page-json-ld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  el.textContent = JSON.stringify(payload);
}

export function DocumentHead({
  title,
  description,
  path,
  jsonLd,
  ogType = "website",
}: DocumentHeadProps) {
  const { locale } = useI18n();
  const url = absoluteUrl(path);

  useEffect(() => {
    document.title = title;
    document.documentElement.lang =
      locale === "de" ? "de" : locale === "en" ? "en" : "it";

    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta(
      "property",
      "og:locale",
      locale === "de" ? "de_DE" : locale === "en" ? "en_US" : "it_IT",
    );

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    if (jsonLd) upsertJsonLd(jsonLd);
  }, [title, description, path, url, locale, jsonLd, ogType]);

  return null;
}
