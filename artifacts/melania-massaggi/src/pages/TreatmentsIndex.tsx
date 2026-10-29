import React, { useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { useI18n } from "@/i18n/I18nContext";
import { TREATMENTS, type TreatmentMeta } from "@/lib/treatments-catalog";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

function TreatmentRow({
  item,
  t,
}: {
  item: TreatmentMeta;
  t: (path: string) => string;
}) {
  const base = `treatmentsPage.items.${item.i18nKey}`;

  return (
    <Link
      href={`/trattamenti/${item.slug}`}
      className="group grid items-center gap-6 border-t border-primary/10 py-8 transition-colors first:border-t-0 md:grid-cols-12 md:gap-8 md:py-10"
    >
      <div className="overflow-hidden rounded-2xl md:col-span-4">
        <img
          src={item.image}
          alt={t(`${base}.title`)}
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="md:col-span-8">
        <p className="mb-1 font-serif text-sm italic text-primary/65">{t(`${base}.subtitle`)}</p>
        <h2 className="font-serif text-2xl text-primary transition-colors group-hover:text-primary/85 md:text-3xl">
          {t(`${base}.title`)}
        </h2>
        <p className="mt-3 max-w-prose text-base font-light leading-relaxed text-foreground/75">
          {t(`${base}.short`)}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          <span>
            {item.durationMin} min · {t("common.onRequest")}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {t("treatmentsPage.cardCta")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function TreatmentsIndex() {
  const { t, ta } = useI18n();
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

  const flagship = TREATMENTS.find((x) => x.flagship) ?? TREATMENTS[0];
  const others = TREATMENTS.filter((x) => x.slug !== flagship.slug);
  const flagBase = `treatmentsPage.items.${flagship.i18nKey}`;
  const benefits = ta(`${flagBase}.benefits`).slice(0, 3);

  return (
    <SiteLayout>
      <DocumentHead
        title={t("treatmentsPage.metaTitle")}
        description={t("treatmentsPage.metaDescription")}
        path="/trattamenti"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-paper pb-16 pt-4 md:pb-20 md:pt-6">
        <img
          src="/illu-botanical.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 hidden h-64 w-auto opacity-30 mix-blend-multiply md:block lg:h-80 lg:opacity-40"
        />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <Reveal>
            <p className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("common.home")}
              </Link>
              <span className="mx-2">/</span>
              <span>{t("treatmentsPage.title")}</span>
            </p>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("treatmentsPage.eyebrow")}
            </p>
            <h1 className="max-w-2xl text-balance font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
              {t("treatmentsPage.title")}
            </h1>
            <p className="mt-5 max-w-prose text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              {t("treatmentsPage.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Flagship — HomeFlagship layout, not a white card */}
      <section className="bg-paper pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <Link
              href={`/trattamenti/${flagship.slug}`}
              className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className="relative mx-auto max-w-lg lg:mx-0">
                <div className="overflow-hidden rounded-3xl shadow-lg shadow-primary/15">
                  <img
                    src={flagship.image}
                    alt={t(`${flagBase}.title`)}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                  {t("treatmentsPage.flagshipBadge")}
                </span>
              </div>

              <div>
                <p className="mb-2 font-serif text-lg italic text-primary/70">
                  {t(`${flagBase}.subtitle`)}
                </p>
                <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                  {t(`${flagBase}.title`)}
                </h2>
                <p className="mt-2 text-sm text-foreground/60">
                  {flagship.durationMin} min · {t("common.price")}: {t("common.onRequest")}
                </p>
                <p className="mt-6 max-w-prose text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                  {t(`${flagBase}.description`)}
                </p>
                {benefits.length > 0 ? (
                  <ul className="mt-6 space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm font-light text-foreground/75">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t("treatmentsPage.cardCta")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="bg-paper">
        <WaveDivider tone="card" />
      </div>

      {/* Others — editorial list, no card grid */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="mb-2 font-serif text-2xl text-primary md:text-3xl">
              {t("treatmentsPage.otherTitle")}
            </h2>
          </Reveal>
          <div className="mt-4">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.04}>
                <TreatmentRow item={item} t={t} />
              </Reveal>
            ))}
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
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl">
              {t("treatmentsPage.helpTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-primary-foreground/80 md:text-lg">
              {t("treatmentsPage.helpBody")}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                {t("treatmentsPage.helpCta")}
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
