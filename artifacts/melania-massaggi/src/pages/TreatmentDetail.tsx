import React, { useMemo } from "react";
import { Link, useParams } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";
import { getTreatment, TREATMENTS, type TreatmentMeta } from "@/lib/treatments-catalog";
import {
  breadcrumbSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/schema";
import { CITY, WHATSAPP_URL } from "@/lib/site";
import NotFound from "@/pages/not-found";

function TreatmentDetailView({ meta }: { meta: TreatmentMeta }) {
  const { t, ta } = useI18n();
  const base = `treatmentsPage.items.${meta.i18nKey}`;
  const path = `/trattamenti/${meta.slug}`;
  const title = t(`${base}.title`);
  const description = t(`${base}.description`);
  const benefits = ta(`${base}.benefits`);

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      serviceSchema({
        name: title,
        description,
        path,
        durationMin: meta.durationMin,
      }),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("treatmentsPage.title"), path: "/trattamenti" },
        { name: title, path },
      ]),
    ],
    [t, title, description, path, meta.durationMin],
  );

  const related = TREATMENTS.filter((x) => x.slug !== meta.slug).slice(0, 3);

  return (
    <SiteLayout>
      <DocumentHead
        title={`${title} | Melania Massaggi ${CITY}`}
        description={t(`${base}.short`)}
        path={path}
        jsonLd={jsonLd}
        ogType="article"
      />

      <article className="container mx-auto px-6 md:px-12 pb-24 max-w-3xl">
        <Reveal>
          <p className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              {t("common.home")}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/trattamenti" className="hover:text-primary">
              {t("treatmentsPage.title")}
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </p>
          <p className="text-primary/70 italic font-serif text-lg mb-2">{t(`${base}.subtitle`)}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">{title}</h1>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-10 text-xs uppercase tracking-widest font-semibold">
          <span className="rounded-full bg-primary/10 text-primary px-4 py-2">
            {t("common.duration")}: {meta.durationMin} min
          </span>
          <span className="rounded-full bg-primary/10 text-primary px-4 py-2">
            {t("common.price")}: {t("common.onRequest")}
          </span>
          <span className="rounded-full bg-primary/10 text-primary px-4 py-2">
            {t("common.where")}: {CITY}
          </span>
        </div>

        <Reveal className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed mb-12">
          <p>{description}</p>
          <p>{t(`${base}.forWhom`)}</p>
          <p>{t(`${base}.how`)}</p>
        </Reveal>

        {benefits.length > 0 ? (
          <Reveal>
            <h2 className="text-xl font-serif text-primary mb-4">{t("treatments.benefitsHeading")}</h2>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80 font-light mb-12">
              {benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <div className="sticky bottom-6 z-20 rounded-2xl border border-primary/15 bg-background/95 backdrop-blur-md p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
          <p className="text-sm text-foreground/70 font-light">
            {title} · {meta.durationMin} min · {t("common.onRequest")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-primary/90"
          >
            {t("common.bookWhatsApp")}
          </a>
        </div>

        <div className="mt-16 pt-10 border-t border-primary/10">
          <h2 className="text-lg font-serif text-primary mb-4">{t("common.backTreatments")}</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/trattamenti/${r.slug}`}
                  className="text-foreground/80 hover:text-primary font-light"
                >
                  {t(`treatmentsPage.items.${r.i18nKey}.title`)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/trattamenti"
                className="text-primary font-semibold text-sm uppercase tracking-widest"
              >
                {t("common.backTreatments")}
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </SiteLayout>
  );
}

export default function TreatmentDetail() {
  const params = useParams<{ slug: string }>();
  const meta = getTreatment(params.slug ?? "");
  if (!meta) return <NotFound />;
  return <TreatmentDetailView meta={meta} />;
}
