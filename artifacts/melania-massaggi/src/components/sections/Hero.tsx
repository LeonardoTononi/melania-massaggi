import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-v2.png"
          alt={t("hero.heroImgAlt")}
          className="h-full w-full object-cover object-[center_35%] scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-background/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-2xl text-left md:max-w-3xl">
          <Reveal delay={0.1} direction="down">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80 sm:text-sm">
              {t("hero.tagline")}
            </p>
          </Reveal>

          <Reveal delay={0.25} direction="up">
            <h1 className="text-balance font-serif text-4xl leading-[1.08] text-primary sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {t("hero.title1")}
              <span className="block mt-1 text-foreground/90">{t("hero.title2")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/80 sm:text-lg md:mt-8 md:text-xl md:leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              {t("hero.lead")}
            </p>
          </Reveal>

          <Reveal delay={0.55} direction="up">
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.ctaAria")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-105" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                  {t("hero.cta")}
                </span>
              </a>
              <Link
                href="/trattamenti"
                className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white/80 sm:text-sm"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <img
        src="/illu-botanical.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 hidden h-56 w-auto opacity-40 mix-blend-multiply md:block lg:h-72 lg:opacity-50"
      />
    </section>
  );
}
