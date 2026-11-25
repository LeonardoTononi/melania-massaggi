import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { useI18n } from "@/i18n/I18nContext";
import { TREATMENTS } from "@/lib/treatments-catalog";
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

const PATH = "/blog/massaggio-a-domicilio-lago-di-garda";

type Section = { h2: string; body: string };
type FaqItem = { q: string; a: string };

function ArticleFaq({
  n,
  q,
  a,
  defaultOpen,
}: {
  n: string;
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (defaultOpen && ref.current) ref.current.open = true;
  }, [defaultOpen]);

  return (
    <details ref={ref} className="group border-b border-primary/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left md:py-7 [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-5">
          <span
            className="mt-0.5 shrink-0 font-serif text-sm tabular-nums text-primary/35 transition-colors group-open:text-primary/70"
            aria-hidden
          >
            {n}
          </span>
          <span className="font-serif text-lg leading-snug text-primary md:text-xl">{q}</span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="max-w-prose pb-6 pl-10 text-base font-light leading-relaxed text-foreground/75 md:pl-12">
        {a}
      </p>
    </details>
  );
}

export default function BlogPost() {
  const { t, get } = useI18n();
  const sections = (get("blogPost.sections") as Section[] | undefined) ?? [];
  const faqs = (get("blogPost.faqs") as FaqItem[] | undefined) ?? [];

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      faqPageSchema(faqs.map((item) => ({ question: item.q, answer: item.a }))),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("blogPost.h1"), path: PATH },
      ]),
    ],
    [t, faqs],
  );

  return (
    <SiteLayout>
      <DocumentHead
        title={t("blogPost.metaTitle")}
        description={t("blogPost.metaDescription")}
        path={PATH}
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-paper pb-16 pt-4 md:pb-20 md:pt-6">
        <img
          src="/illu-botanical.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-20 top-8 hidden h-72 w-auto opacity-25 mix-blend-multiply md:block"
        />
        <div className="container relative z-10 mx-auto max-w-3xl px-6 md:px-12">
          <Reveal>
            <p className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("common.home")}
              </Link>
              <span className="mx-2">/</span>
              <Link href="/massaggio-a-domicilio-maderno" className="hover:text-primary">
                {t("homeVisit.footerLink")}
              </Link>
              <span className="mx-2">/</span>
              <span>{t("blogPost.eyebrow")}</span>
            </p>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("blogPost.eyebrow")}
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
              {t("blogPost.h1")}
            </h1>
            <p className="mt-4 font-serif text-lg italic text-primary/70 md:text-xl">{t("blogPost.question")}</p>
            <p className="mt-5 max-w-prose text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              {t("blogPost.answer")}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl shadow-lg shadow-primary/10">
              <img
                src="/lake-garda.png"
                alt={t("common.lakeAlt")}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-paper">
        <WaveDivider tone="card" />
      </div>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 md:px-12">
          {sections.map((section, index) => (
            <div key={section.h2} className={index === 0 ? undefined : "mt-14"}>
              <h2 className="font-serif text-2xl text-primary md:text-3xl">{section.h2}</h2>
              <div className="mt-4 max-w-prose space-y-4 text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                {section.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
              {index === 1 ? (
                <div className="mt-8 overflow-hidden rounded-3xl">
                  <img
                    src="/illu-relax.jpg"
                    alt={t("treatmentsPage.items.relaxing.title")}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ) : null}
            </div>
          ))}

          <div className="mt-16">
            <h2 className="font-serif text-2xl text-primary md:text-3xl">{t("blogPost.treatmentsTitle")}</h2>
            <p className="mt-4 max-w-prose text-base font-light leading-relaxed text-foreground/80 md:text-lg">
              {t("blogPost.treatmentsIntro")}
            </p>
            <div className="mt-2">
              {TREATMENTS.map((item) => {
                const base = `treatmentsPage.items.${item.i18nKey}`;
                return (
                  <Link
                    key={item.slug}
                    href={`/trattamenti/${item.slug}`}
                    className="group grid items-center gap-5 border-t border-primary/10 py-6 first:mt-6 md:grid-cols-12 md:gap-8"
                  >
                    <div className="overflow-hidden rounded-2xl md:col-span-4">
                      <img
                        src={item.image}
                        alt={t(`${base}.title`)}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="font-serif text-xl text-primary md:text-2xl">{t(`${base}.title`)}</h3>
                      <p className="mt-2 text-sm text-foreground/60">{item.durationMin} min</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        {t("treatmentsPage.cardCta")}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="mt-6">
              <Link
                href="/massaggio-a-domicilio-maderno"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
              >
                {t("blogPost.homeVisitLabel")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl text-primary md:text-3xl">{t("blogPost.faqTitle")}</h2>
            <div className="mt-4 border-t border-primary/10">
              {faqs.map((item, i) => (
                <ArticleFaq
                  key={item.q}
                  n={String(i + 1).padStart(2, "0")}
                  q={item.q}
                  a={item.a}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/illu-wave.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl">
              {t("homeVisit.bookTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-primary-foreground/80">
              {t("homeVisit.bookBody")}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                {t("common.bookWhatsApp")}
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
