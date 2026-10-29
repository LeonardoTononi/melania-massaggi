import React, { useMemo } from "react";
import { Link, useParams } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
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

      <article className="bg-paper pb-28 pt-4 md:pt-6">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <p className="mb-8 text-sm text-muted-foreground">
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
          </Reveal>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="overflow-hidden rounded-3xl shadow-lg shadow-primary/10">
                  <img
                    src={meta.image}
                    alt={title}
                    className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                {meta.flagship ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                    {t("treatmentsPage.flagshipBadge")}
                  </p>
                ) : null}
                <p className="mb-2 font-serif text-lg italic text-primary/70">{t(`${base}.subtitle`)}</p>
                <h1 className="text-balance font-serif text-4xl text-primary md:text-5xl">{title}</h1>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {t("common.duration")}: {meta.durationMin} min
                  </span>
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {t("common.price")}: {t("common.onRequest")}
                  </span>
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {t("common.where")}: {CITY}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="mt-8 max-w-prose space-y-5 text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                <p>{description}</p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 rounded-2xl border border-primary/10 bg-card/80 p-6">
                  <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t("treatmentsPage.forWhomLabel")}
                  </h2>
                  <p className="font-light leading-relaxed text-foreground/80">{t(`${base}.forWhom`)}</p>
                  <h2 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t("treatmentsPage.howLabel")}
                  </h2>
                  <p className="font-light leading-relaxed text-foreground/80">{t(`${base}.how`)}</p>
                </div>
              </Reveal>

              {benefits.length > 0 ? (
                <Reveal delay={0.2}>
                  <h2 className="mb-4 mt-10 font-serif text-xl text-primary">
                    {t("treatments.benefitsHeading")}
                  </h2>
                  <ul className="space-y-3">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex gap-3 text-foreground/80 font-light leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/55" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>
          </div>

          <div className="sticky bottom-5 z-20 mt-14 rounded-2xl border border-primary/15 bg-card/95 p-4 shadow-lg shadow-primary/10 backdrop-blur-md sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-light text-foreground/70">
                <span className="font-serif text-base text-primary">{title}</span>
                <span className="mx-2 text-primary/30">·</span>
                {meta.durationMin} min
                <span className="mx-2 text-primary/30">·</span>
                {t("common.onRequest")}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {t("common.bookWhatsApp")}
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-primary/10 pt-10">
            <h2 className="mb-6 font-serif text-xl text-primary">{t("treatmentsPage.otherTitle")}</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/trattamenti/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-primary/10 bg-card/70 transition-shadow hover:shadow-md hover:shadow-primary/10"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={t(`treatmentsPage.items.${r.i18nKey}.title`)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-serif text-primary group-hover:text-primary/80">
                      {t(`treatmentsPage.items.${r.i18nKey}.title`)}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{r.durationMin} min</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/trattamenti"
              className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary underline decoration-primary/30 underline-offset-8 hover:decoration-primary"
            >
              {t("common.backTreatments")}
            </Link>
          </div>
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
