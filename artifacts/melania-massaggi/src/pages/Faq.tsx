import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

type FaqItem = { q: string; a: string };

export default function Faq() {
  const { t, get } = useI18n();
  const items = (get("faq.items") as FaqItem[] | undefined) ?? [];

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      faqPageSchema(items.map((i) => ({ question: i.q, answer: i.a }))),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("faq.title"), path: "/domande" },
      ]),
    ],
    [t, items],
  );

  return (
    <SiteLayout>
      <DocumentHead
        title={t("faq.metaTitle")}
        description={t("faq.metaDescription")}
        path="/domande"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-6 md:px-12 pb-24 max-w-3xl">
        <Reveal>
          <p className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              {t("common.home")}
            </Link>
            <span className="mx-2">/</span>
            <span>{t("faq.title")}</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">{t("faq.title")}</h1>
          <p className="text-lg text-foreground/75 font-light mb-12">{t("faq.intro")}</p>
        </Reveal>

        <div className="space-y-8">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 0.04, 0.3)}>
              <section className="border-b border-primary/10 pb-8">
                <h2 className="text-xl font-serif text-primary mb-3">{item.q}</h2>
                <p className="text-foreground/80 font-light leading-relaxed">{item.a}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary/90"
          >
            {t("common.bookWhatsApp")}
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
