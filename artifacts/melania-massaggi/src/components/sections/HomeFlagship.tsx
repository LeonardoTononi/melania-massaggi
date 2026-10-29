import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

export function HomeFlagship() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-3xl shadow-lg shadow-primary/15">
                <img
                  src="/illu-ritual.jpg"
                  alt={t("signature.imgAlt")}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 hidden max-w-[11rem] overflow-hidden rounded-2xl border border-primary/10 bg-card/95 p-2 shadow-md backdrop-blur-sm md:block lg:-right-6">
                <img
                  src="/lava-stones.png"
                  alt=""
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
                {t("homeFlagship.eyebrow")}
              </p>
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">{t("homeFlagship.title")}</h2>
              <p className="mt-6 max-w-prose text-base font-light leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
                {t("homeFlagship.body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/trattamenti/pietre-laviche"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("homeFlagship.link")}
                </Link>
                <Link
                  href="/trattamenti"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/65 underline decoration-primary/25 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {t("homeFlagship.allLink")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
