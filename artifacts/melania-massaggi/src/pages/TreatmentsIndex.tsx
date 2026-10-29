import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";
import { TREATMENTS } from "@/lib/treatments-catalog";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

export default function TreatmentsIndex() {
  const { t } = useI18n();
  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("treatmentsPage.title"), path: "/trattamenti" },
      ]),
    ],
    [t],
  );

  const sorted = [...TREATMENTS].sort((a, b) => Number(!!b.flagship) - Number(!!a.flagship));

  return (
    <SiteLayout>
      <DocumentHead
        title={t("treatmentsPage.metaTitle")}
        description={t("treatmentsPage.metaDescription")}
        path="/trattamenti"
        jsonLd={jsonLd}
      />

      <div className="container mx-auto px-6 md:px-12 pb-24">
        <Reveal>
          <p className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              {t("common.home")}
            </Link>
            <span className="mx-2">/</span>
            <span>{t("treatmentsPage.title")}</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            {t("treatmentsPage.title")}
          </h1>
          <p className="text-lg text-foreground/75 font-light max-w-2xl mb-16">
            {t("treatmentsPage.intro")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {sorted.map((item, i) => {
            const base = `treatmentsPage.items.${item.i18nKey}`;
            return (
              <Reveal key={item.slug} delay={i * 0.05}>
                <Link
                  href={`/trattamenti/${item.slug}`}
                  className="group block h-full rounded-3xl border border-primary/10 bg-card/50 p-8 hover:bg-card transition-colors"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h2 className="text-2xl font-serif text-primary group-hover:text-primary/80">
                      {t(`${base}.title`)}
                    </h2>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground shrink-0">
                      {item.durationMin} min
                    </span>
                  </div>
                  {item.flagship ? (
                    <p className="text-xs uppercase tracking-widest text-primary/70 mb-2">
                      {t("treatmentsPage.flagshipBadge")}
                    </p>
                  ) : null}
                  <p className="text-foreground/75 font-light leading-relaxed mb-4">
                    {t(`${base}.short`)}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {t("common.price")}: {t("common.onRequest")}
                  </p>
                  <span className="inline-block mt-6 text-xs uppercase tracking-widest font-semibold text-primary border-b border-primary/30 pb-0.5">
                    {t("treatmentsPage.cardCta")}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 max-w-2xl rounded-2xl border border-primary/15 bg-card/40 px-6 py-10 text-center mx-auto">
            <h2 className="text-2xl font-serif text-primary mb-3">{t("treatmentsPage.helpTitle")}</h2>
            <p className="text-foreground/75 font-light mb-6">{t("treatmentsPage.helpBody")}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary/90"
            >
              {t("treatmentsPage.helpCta")}
            </a>
          </div>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
