import React, { useEffect, useMemo, useRef } from "react";
import { Link, useParams } from "wouter";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { getTreatment, TREATMENTS, type TreatmentMeta } from "@/lib/treatments-catalog";
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/schema";
import { CITY, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/not-found";

type FaqItem = { q: string; a: string };

const photoFrame =
  "outline outline-1 outline-black/10 [outline-offset:-1px] dark:outline-white/10";

function TreatmentFaq({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (defaultOpen && ref.current) ref.current.open = true;
  }, [defaultOpen]);

  return (
    <details ref={ref} className="group">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-serif text-xl leading-snug text-primary [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-foreground transition-transform duration-150 group-open:rotate-180" />
      </summary>
      <p className="max-w-prose pb-4 text-base font-normal leading-relaxed text-foreground">{a}</p>
    </details>
  );
}

function TreatmentDetailView({ meta }: { meta: TreatmentMeta }) {
  const { t, get } = useI18n();
  const base = `treatmentsPage.items.${meta.i18nKey}`;
  const path = `/trattamenti/${meta.slug}`;
  const title = t(`${base}.title`);
  const summary = t(`${base}.short`);
  const faqs = (get(`${base}.faqs`) as FaqItem[] | undefined) ?? [];
  const message = t("treatmentsPage.bookMessage").replace("{title}", title);
  const bookHref = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
  const related = TREATMENTS.filter((item) => item.slug !== meta.slug);
  const sections = [
    ["whatLabel", "what"],
    ["whoLabel", "who"],
    ["placeLabel", "place"],
    ["expectLabel", "expect"],
    ["cautionLabel", "caution"],
  ] as const;

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      serviceSchema({
        name: title,
        description: summary,
        path,
        durationMin: meta.durationMin,
      }),
      faqPageSchema(faqs.map((item) => ({ question: item.q, answer: item.a }))),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("treatmentsPage.title"), path: "/trattamenti" },
        { name: title, path },
      ]),
    ],
    [t, title, summary, path, meta.durationMin, faqs],
  );

  return (
    <SiteLayout flushTop>
      <DocumentHead
        title={`${title} | Melania Massaggi`}
        description={summary}
        path={path}
        jsonLd={jsonLd}
        ogType="article"
      />

      <div className="pt-[4.75rem] lg:grid lg:grid-cols-2">
        <div className="lg:sticky lg:top-[4.75rem] lg:h-[calc(100svh-4.75rem)]">
          <img
            src={meta.image}
            alt={title}
            className={cn("h-[52vh] w-full object-cover lg:h-full", photoFrame)}
          />
        </div>

        <div className="bg-paper px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-10 lg:pb-20 lg:pt-10">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <p className="text-base text-foreground">
                <Link href="/" className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                  {t("common.home")}
                </Link>
                <span className="mx-2 text-foreground/50">/</span>
                <Link
                  href="/trattamenti"
                  className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {t("treatmentsPage.title")}
                </Link>
              </p>
              <h1 className="mt-8 text-balance font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-primary md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg font-normal leading-relaxed text-foreground">{t(`${base}.subtitle`)}</p>
              <p className="mt-4 text-base font-normal leading-relaxed text-foreground">
                {meta.durationMin} min · {t("common.onRequest")} · {CITY}
              </p>
              <p className="mt-6 max-w-prose text-lg font-normal leading-relaxed text-foreground">
                {t(`${base}.description`)}
              </p>
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-[transform,background-color] duration-150 hover:bg-primary/90 motion-safe:enabled:active:scale-[0.96]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
                {t("common.bookWhatsApp")}
              </a>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground">{message}</p>
            </Reveal>

            {sections.map(([labelKey, bodyKey]) => (
              <section key={bodyKey} className="mt-20 md:mt-28">
                <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                  {t(`treatmentsPage.${labelKey}`)}
                </h2>
                <div className="mt-4 max-w-prose space-y-4 text-base font-normal leading-relaxed text-foreground">
                  {t(`${base}.${bodyKey}`)
                    .split("\n\n")
                    .map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                </div>
              </section>
            ))}

            {faqs.length > 0 ? (
              <section className="mt-20 md:mt-28">
                <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                  {t("treatmentsPage.faqLabel")}
                </h2>
                <div className="mt-6">
                  {faqs.map((item, i) => (
                    <TreatmentFaq key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-20 md:mt-28">
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                {t("treatmentsPage.otherTitle")}
              </h2>
              <ul className="mt-8 space-y-6">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/trattamenti/${item.slug}`}
                      className="grid grid-cols-[4.5rem_1fr] items-center gap-4"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className={cn("aspect-square w-full rounded-2xl object-cover", photoFrame)}
                      />
                      <span>
                        <span className="block font-serif text-xl text-primary">
                          {t(`treatmentsPage.items.${item.i18nKey}.title`)}
                        </span>
                        <span className="mt-1 block text-base text-foreground">
                          {item.durationMin} min · {t("common.onRequest")}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  href="/trattamenti"
                  className="text-base text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {t("common.backTreatments")}
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default function TreatmentDetail() {
  const params = useParams<{ slug: string }>();
  const meta = getTreatment(params.slug ?? "");
  if (!meta) return <NotFound />;
  return <TreatmentDetailView key={meta.slug} meta={meta} />;
}
