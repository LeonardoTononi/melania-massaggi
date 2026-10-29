import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

export function HomeFlagship() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <Reveal>
              <p className="tracking-[0.2em] uppercase text-xs text-primary/70 mb-3">
                {t("homeFlagship.eyebrow")}
              </p>
              <h2 className="text-4xl md:text-5xl mb-4">{t("homeFlagship.title")}</h2>
              <p className="text-foreground/80 font-light leading-relaxed text-lg">
                {t("homeFlagship.body")}
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/trattamenti/pietre-laviche"
                  className="text-sm uppercase tracking-widest font-semibold text-primary border-b border-primary/40 hover:border-primary pb-0.5"
                >
                  {t("homeFlagship.link")}
                </Link>
                <Link
                  href="/trattamenti"
                  className="text-sm uppercase tracking-widest font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  {t("homeFlagship.allLink")}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal direction="left">
              <div className="aspect-[4/3] w-full max-w-lg mx-auto overflow-hidden rounded-3xl">
                <img
                  src="/lava-stones.png"
                  alt={t("signature.imgAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
