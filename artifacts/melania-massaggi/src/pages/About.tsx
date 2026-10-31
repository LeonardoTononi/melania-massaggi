import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { breadcrumbSchema, personSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

export default function About() {
  const { t, ta } = useI18n();
  const facts = ta("about.facts");
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

      <article>
        <section className="bg-paper pb-16 pt-4 md:pb-20 md:pt-6">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <p className="mb-8 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  {t("common.home")}
                </Link>
                <span className="mx-2">/</span>
                <span>{t("about.title")}</span>
              </p>
            </Reveal>

            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-36">
                <Reveal direction="right">
                  <FramedPhoto
                    src="/melania.png"
                    alt={t("about.photoAlt")}
                    caption={t("about.photoCaption")}
                    className="lg:mx-0"
                  />
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className="mb-3 text-sm font-medium text-muted-foreground">
                    {t("about.eyebrow")}
                  </p>
                  <h1 className="text-balance font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
                    {t("about.name")}
                  </h1>
                  <p className="mt-2 font-serif text-xl italic text-primary/70 md:text-2xl">
                    {t("about.role")}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
                    {t("about.lead")}
                  </p>
                </Reveal>

                {facts.length > 0 ? (
                  <Reveal delay={0.08}>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {facts.map((fact) => (
                        <li
                          key={fact}
                          className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground sm:text-sm"
                        >
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ) : null}

                <Reveal delay={0.12}>
                  <h2 className="mt-12 font-serif text-2xl text-primary md:mt-14 md:text-3xl">
                    {t("about.bioTitle")}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                    <p>{t("about.bioP1")}</p>
                    <p>{t("about.bioP2")}</p>
                    <p>{t("about.bioP3")}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blush py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                    {t("about.methodTitle")}
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal
                  delay={0.08}
                  className="max-w-prose space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg"
                >
                  <p>{t("about.methodP1")}</p>
                  <p>{t("about.methodP2")}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl">
                    {t("about.studioTitle")}
                  </h2>
                  <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground/80 md:text-lg">
                    {t("about.studioBody")}
                  </p>
                  <p className="mt-6 inline-flex rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground sm:text-sm">
                    {t("about.studioChip")}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={0.08}>
                  <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl">
                    {t("about.offerTitle")}
                  </h2>
                  <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground/80 md:text-lg">
                    {t("about.offerBody")}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{t("about.offerNote")}</p>
                  <Link
                    href="/trattamenti"
                    className="mt-6 inline-flex text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-8 hover:decoration-primary"
                  >
                    {t("about.treatmentsCta")}
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="space-y-14 md:space-y-16">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl">
                      {t("about.limitsTitle")}
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-7">
                  <Reveal delay={0.08}>
                    <p className="max-w-prose text-base leading-relaxed text-foreground/75 md:text-lg">
                      {t("about.limitsBody")}
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="border-t border-border/70" />

              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl">
                      {t("about.credentialsTitle")}
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-7">
                  <Reveal delay={0.08}>
                    <p className="max-w-prose text-base leading-relaxed text-foreground/75 md:text-lg">
                      {t("about.credentialsBody")}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal className="mx-auto max-w-xl text-center">
              <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl">
                {t("about.ctaTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
                {t("about.ctaBody")}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-primary shadow-md transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white/95 enabled:active:scale-[0.96]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {t("about.cta")}
              </a>
            </Reveal>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
