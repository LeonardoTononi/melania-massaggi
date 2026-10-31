import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { WHATSAPP_URL } from "@/lib/site";

const STEPS = ["s1", "s2", "s3"] as const;

export function HomeJourney() {
  const { t } = useI18n();

  return (
    <section className="relative bg-surface py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="max-w-xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {t("homeJourney.kicker")}
            </p>
            <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
              {t("homeJourney.title")}
            </h2>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("homeJourney.intro")}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-primary/90 enabled:active:scale-[0.96]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {t("homeJourney.cta")}
            </a>
          </Reveal>
        </div>

        <ol className="relative mt-14 md:mt-16">
          {/* Desktop connector */}
          <div
            className="pointer-events-none absolute start-[calc(16.66%+0.5rem)] end-[calc(16.66%+0.5rem)] top-5 hidden h-px bg-border md:block"
            aria-hidden
          />

          <div className="grid gap-0 md:grid-cols-3 md:gap-10">
            {STEPS.map((key, i) => {
              const isLast = i === STEPS.length - 1;
              return (
                <Reveal key={key} delay={i * 0.08} direction="up">
                  <li className="relative flex gap-5 md:flex-col md:gap-0">
                    {/* Mobile vertical rail */}
                    {!isLast ? (
                      <div
                        className="absolute start-[0.9rem] top-10 bottom-0 w-px bg-border md:hidden"
                        aria-hidden
                      />
                    ) : null}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground md:mb-6">
                      {i + 1}
                    </div>

                    <div className="min-w-0 pb-10 md:pb-0">
                      <h3 className="font-serif text-xl text-primary md:text-2xl">
                        {t(`homeJourney.${key}Title`)}
                      </h3>
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/75 md:text-base">
                        {t(`homeJourney.${key}Body`)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </div>
        </ol>
      </div>
    </section>
  );
}
