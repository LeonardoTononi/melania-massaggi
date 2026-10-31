import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  const { t, ta } = useI18n();
  const facts = ta("hero.facts");

  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05} direction="down">
              <p className="mb-5 text-sm font-medium text-muted-foreground">{t("hero.tagline")}</p>
            </Reveal>

            <Reveal delay={0.12} direction="up">
              <h1 className="text-balance font-serif text-4xl leading-[1.12] text-primary sm:text-5xl md:text-6xl lg:text-[3.85rem]">
                {t("hero.title1")}
                <span className="mt-1 block text-foreground">{t("hero.title2")}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-foreground/80 sm:text-lg md:mt-7">
                {t("hero.subtitle")}
              </p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("hero.lead")}
              </p>
            </Reveal>

            {facts.length > 0 ? (
              <Reveal delay={0.28}>
                <ul className="mt-8 flex flex-wrap gap-2">
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

            <Reveal delay={0.35} direction="up">
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("hero.ctaAria")}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-md shadow-primary/15 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-primary/90 enabled:active:scale-[0.96]"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
                  <span className="text-sm font-medium">{t("hero.cta")}</span>
                </a>
                <Link
                  href="/trattamenti"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-secondary"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18} direction="left" className="lg:flex lg:justify-end">
              <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
                <div
                  className="absolute -top-3 -bottom-3 -left-3 -right-3 rounded-[2rem] bg-secondary/80 sm:-top-4 sm:-bottom-4 sm:-left-4 sm:-right-4 sm:rounded-[2.25rem] lg:right-0"
                  aria-hidden
                />
                <div
                  className="absolute -top-1.5 -bottom-1.5 -left-1.5 -right-1.5 rounded-[1.65rem] border border-primary/25 sm:-top-2 sm:-bottom-2 sm:-left-2 sm:-right-2 sm:rounded-[1.85rem] lg:right-0"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.35rem] shadow-lg shadow-primary/10 sm:rounded-[1.5rem]">
                  <img
                    src="/melania.png"
                    alt={t("about.photoAlt")}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/40 sm:rounded-[1.5rem]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-white/10"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
