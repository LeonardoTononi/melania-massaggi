import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

export function Philosophy() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-background relative" id="chi-sono">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <Reveal direction="right">
              <div className="aspect-[3/4] relative w-full max-w-md mx-auto overflow-hidden rounded-3xl">
                <img
                  src="/melania.png"
                  alt={t("philosophy.portraitAlt")}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 m-4 rounded-2xl"></div>
              </div>
            </Reveal>
            <div className="hidden lg:block absolute -right-12 -bottom-12 w-48 h-48 bg-secondary/20 -z-10 rounded-full blur-2xl"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl">{t("philosophy.title")}</h2>
              <p className="text-primary italic mt-2 text-xl font-serif">{t("philosophy.subtitle")}</p>
            </Reveal>

            <Reveal delay={0.2} className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
              <p>{t("philosophy.p1")}</p>
              <p>{t("philosophy.p2")}</p>
              <p>{t("philosophy.p3")}</p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-8">
                <img
                  src="/botanical.png"
                  alt={t("philosophy.botanicalAlt")}
                  className="w-16 h-16 object-cover mix-blend-multiply opacity-60 rounded-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
