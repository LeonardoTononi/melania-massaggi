import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";
import { breadcrumbSchema, personSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

export default function About() {
  const { t } = useI18n();
  const jsonLd = useMemo(
    () => [
      personSchema(),
      localBusinessSchema(),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("about.title"), path: "/chi-sono" },
      ]),
    ],
    [t],
  );

  return (
    <SiteLayout>
      <DocumentHead
        title={t("about.metaTitle")}
        description={t("about.metaDescription")}
        path="/chi-sono"
        jsonLd={jsonLd}
        ogType="profile"
      />

      <article className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary">
                {t("common.home")}
              </Link>
              <span className="mx-2">/</span>
              <span>{t("about.title")}</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">{t("about.title")}</h1>
            <p className="text-xl font-light text-foreground/85 max-w-2xl leading-relaxed mb-16">
              {t("about.lead")}
            </p>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            <div className="w-full lg:w-2/5">
              <Reveal direction="right">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl max-w-md">
                  <img
                    src="/melania.png"
                    alt={t("about.photoAlt")}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:w-3/5 space-y-12 text-foreground/80 font-light leading-relaxed text-lg">
              <Reveal delay={0.1}>
                <h2 className="text-2xl font-serif text-primary mb-4">{t("about.methodTitle")}</h2>
                <p className="mb-4">{t("about.methodP1")}</p>
                <p>{t("about.methodP2")}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="text-2xl font-serif text-primary mb-4">{t("about.offerTitle")}</h2>
                <p>{t("about.offerBody")}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-2xl font-serif text-primary mb-4">{t("about.limitsTitle")}</h2>
                <p>{t("about.limitsBody")}</p>
              </Reveal>
              <Reveal delay={0.25}>
                <h2 className="text-2xl font-serif text-primary mb-4">{t("about.credentialsTitle")}</h2>
                <p>{t("about.credentialsBody")}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-2xl font-serif text-primary mb-4">{t("about.studioTitle")}</h2>
                <p>{t("about.studioBody")}</p>
              </Reveal>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary/90"
                >
                  {t("about.cta")}
                </a>
                <Link
                  href="/trattamenti"
                  className="inline-flex rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 hover:bg-primary/5"
                >
                  {t("about.treatmentsCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
