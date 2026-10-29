import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

const STEPS = ["s1", "s2", "s3"] as const;

export function HomeJourney() {
  const { t } = useI18n();

  return (
    <section className="relative bg-card py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">{t("homeJourney.title")}</h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            {t("homeJourney.intro")}
          </p>
        </Reveal>

        <ol className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((key, i) => (
            <Reveal key={key} delay={i * 0.1} direction="up">
              <li className="relative text-center md:text-left">
                <span className="font-serif text-5xl leading-none text-primary/20 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-serif text-primary md:text-2xl">
                  {t(`homeJourney.${key}Title`)}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/75 md:text-base md:leading-relaxed">
                  {t(`homeJourney.${key}Body`)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
