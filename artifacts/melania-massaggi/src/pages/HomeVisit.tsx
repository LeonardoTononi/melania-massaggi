import React, { useMemo, useState } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { TREATMENTS } from "@/lib/treatments-catalog";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { EMAIL, HOME_VISIT_AREAS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const PATH = "/massaggio-a-domicilio-maderno";
const AREAS = HOME_VISIT_AREAS;

const photoFrame =
  "outline outline-1 outline-black/10 [outline-offset:-1px] dark:outline-white/10";

function whatsAppHref(town: string | null, template: string) {
  if (!town) return WHATSAPP_URL;
  const text = template.replace("{town}", town);
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export default function HomeVisit() {
  const { t } = useI18n();
  const [town, setTown] = useState<string | null>(null);
  const flagship = TREATMENTS.find((item) => item.flagship) ?? TREATMENTS[0];
  const others = TREATMENTS.filter((item) => item.slug !== flagship.slug);
  const bookHref = whatsAppHref(town, t("homeVisit.waTown"));

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(AREAS),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("homeVisit.h1"), path: PATH },
      ]),
    ],
    [t],
  );

  return (
    <SiteLayout flushTop>
      <DocumentHead
        title={t("homeVisit.metaTitle")}
        description={t("homeVisit.metaDescription")}
        path={PATH}
        jsonLd={jsonLd}
      />

      <div className="pt-[4.75rem] lg:grid lg:grid-cols-2">
        <div className="lg:sticky lg:top-[4.75rem] lg:h-[calc(100svh-4.75rem)]">
          <img
            src="/lake-garda-shore.jpg"
            alt={t("common.lakeAlt")}
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
                <span>{t("homeVisit.h1")}</span>
              </p>
              <h1 className="mt-8 text-balance font-serif text-4xl leading-[1.02] tracking-[-0.03em] text-primary md:text-6xl">
                {t("homeVisit.h1")}
              </h1>
              <p className="mt-6 max-w-prose text-lg font-normal leading-relaxed text-foreground">
                {t("homeVisit.lead")}
              </p>
            </Reveal>

            <section className="mt-16 md:mt-24">
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                {t("homeVisit.areasTitle")}
              </h2>
              <p className="mt-4 max-w-prose text-base font-normal leading-relaxed text-foreground">
                {t("homeVisit.areasIntro")}
              </p>
              <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground/80">
                {t("homeVisit.townHint")}
              </p>
              <div className="mt-8 flex flex-col" role="group" aria-label={t("homeVisit.areasTitle")}>
                {AREAS.map((area) => {
                  const selected = town === area;
                  return (
                    <button
                      key={area}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setTown(selected ? null : area)}
                      className={cn(
                        "min-h-11 py-2 text-left font-serif text-3xl leading-tight tracking-[-0.02em] transition-colors duration-150",
                        "hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                        "origin-left motion-safe:enabled:active:scale-[0.96]",
                        selected ? "text-primary" : "text-foreground/75",
                      )}
                    >
                      {area}
                    </button>
                  );
                })}
              </div>
              <a
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground transition-[transform,background-color] duration-150 hover:bg-primary/90 motion-safe:enabled:active:scale-[0.96]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
                {town ? `${t("common.bookWhatsApp")} · ${town}` : t("common.bookWhatsApp")}
              </a>
              <p className="mt-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-base text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {EMAIL}
                </a>
              </p>
              <p className="mt-6">
                <Link
                  href="/blog/massaggio-a-domicilio-lago-di-garda"
                  className="text-base text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                >
                  {t("homeVisit.areasArticle")}
                </Link>
              </p>
            </section>

            <section className="mt-20 md:mt-28">
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                {t("homeVisit.howTitle")}
              </h2>
              <div className="mt-4 max-w-prose space-y-4 text-base font-normal leading-relaxed text-foreground">
                {t("homeVisit.howBody")
                  .split("\n\n")
                  .map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
              </div>
            </section>

            <section className="mt-20 md:mt-28">
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-primary md:text-4xl">
                {t("homeVisit.treatmentsTitle")}
              </h2>
              <p className="mt-4 max-w-prose text-base font-normal leading-relaxed text-foreground">
                {t("homeVisit.treatmentsIntro")}
              </p>
              <Link href={`/trattamenti/${flagship.slug}`} className="mt-8 block">
                <img
                  src={flagship.image}
                  alt={t(`treatmentsPage.items.${flagship.i18nKey}.title`)}
                  className={cn("aspect-[16/10] w-full rounded-3xl object-cover", photoFrame)}
                />
                <span className="mt-4 block font-serif text-2xl text-primary">
                  {t(`treatmentsPage.items.${flagship.i18nKey}.title`)}
                </span>
                <span className="mt-1 block text-base text-foreground">
                  {flagship.durationMin} min · {t("common.onRequest")}
                </span>
              </Link>
              <ul className="mt-10 space-y-6">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/trattamenti/${item.slug}`} className="grid grid-cols-[4.5rem_1fr] items-center gap-4">
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
            </section>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
