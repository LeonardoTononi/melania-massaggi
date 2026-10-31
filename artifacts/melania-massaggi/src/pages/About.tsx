import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WaveDivider } from "@/components/ui/WaveDivider";
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

  const pillars = [
    { title: t("about.p1Title"), body: t("about.p1Body") },
    { title: t("about.p2Title"), body: t("about.p2Body") },
    { title: t("about.p3Title"), body: t("about.p3Body") },
  ];

  return (
    <SiteLayout>
      <DocumentHead
        title={t("about.metaTitle")}
        description={t("about.metaDescription")}
        path="/chi-sono"
        jsonLd={jsonLd}
        ogType="profile"
      />

      {/* Intro — same grid language as HomeMethod */}
      <section className="relative overflow-hidden bg-paper pb-16 pt-4 md:pb-24 md:pt-6">
        <img
          src="/illu-botanical.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-20 top-8 hidden h-72 w-auto opacity-30 mix-blend-multiply md:block lg:h-96 lg:opacity-40"
        />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <Reveal>
            <p className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("common.home")}
              </Link>
              <span className="mx-2">/</span>
              <span>{t("about.title")}</span>
            </p>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t("about.eyebrow")}
                </p>
                <h1 className="text-balance font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
                  {t("about.title")}
                </h1>
                <p className="mt-6 max-w-prose text-lg font-light leading-relaxed text-foreground/80 md:text-xl md:leading-relaxed">
                  {t("about.lead")}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="left" delay={0.08}>
                <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-md shadow-primary/10 lg:mx-0 lg:ml-auto">
                  <img
                    src="/melania.png"
                    alt={t("about.photoAlt")}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-paper">
        <WaveDivider tone="card" />
      </div>

      {/* Pillars — HomeJourney rhythm */}
      <section className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl">
              {t("about.pillarsTitle")}
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
              {t("about.pillarsIntro")}
            </p>
          </Reveal>

          <ol className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08} direction="up">
                <li className="text-center md:text-left">
                  <span className="font-serif text-5xl leading-none text-primary/20 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-primary md:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-foreground/75 md:text-base">
                    {pillar.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="bg-card">
        <WaveDivider tone="background" />
      </div>

      {/* Method */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="relative overflow-hidden rounded-3xl shadow-md shadow-primary/10">
                  <img
                    src="/illu-ritual.jpg"
                    alt=""
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t("about.methodEyebrow")}
                </p>
                <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                  {t("about.methodTitle")}
                </h2>
              </Reveal>
              <Reveal
                delay={0.1}
                className="mt-8 max-w-prose space-y-5 text-base font-light leading-relaxed text-foreground/80 md:text-lg"
              >
                <p>{t("about.methodP1")}</p>
                <p>{t("about.methodP2")}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Offer + notes — one section, left-aligned, no white cards */}
      <section className="bg-card py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t("about.offerEyebrow")}
                </p>
                <h2 className="font-serif text-3xl text-primary md:text-4xl">{t("about.offerTitle")}</h2>
                <p className="mt-5 max-w-prose text-base font-light leading-relaxed text-foreground/80 md:text-lg">
                  {t("about.offerBody")}
                </p>
                <p className="mt-3 text-sm font-light text-muted-foreground">{t("about.offerNote")}</p>
                <Link
                  href="/trattamenti"
                  className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary"
                >
                  {t("about.treatmentsCta")}
                </Link>
              </Reveal>
            </div>

            <div className="space-y-12 lg:col-span-6">
              <Reveal delay={0.06}>
                <h2 className="font-serif text-2xl text-primary">{t("about.limitsTitle")}</h2>
                <p className="mt-4 max-w-prose text-base font-light leading-relaxed text-foreground/75">
                  {t("about.limitsBody")}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-2xl text-primary">{t("about.credentialsTitle")}</h2>
                <p className="mt-4 max-w-prose text-base font-light leading-relaxed text-foreground/75">
                  {t("about.credentialsBody")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t("about.studioEyebrow")}
                </p>
                <h2 className="font-serif text-3xl text-primary md:text-4xl">{t("about.studioTitle")}</h2>
                <p className="mt-5 max-w-prose text-base font-light leading-relaxed text-foreground/75 md:text-lg">
                  {t("about.studioBody")}
                </p>
                <p className="mt-6 text-sm font-medium text-primary">{t("about.studioChip")}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal direction="left" delay={0.08}>
                <div className="overflow-hidden rounded-3xl shadow-md shadow-primary/10">
                  <img
                    src="/illu-wave.jpg"
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Single CTA — HomeBookingBand pattern */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/illu-relax.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl">
              {t("about.ctaTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-primary-foreground/80 md:text-lg">
              {t("about.ctaBody")}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                {t("about.cta")}
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
