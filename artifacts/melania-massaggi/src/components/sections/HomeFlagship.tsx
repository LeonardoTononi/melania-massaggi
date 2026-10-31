import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { useI18n } from "@/i18n/I18nContext";

export function HomeFlagship() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <FramedPhoto
                src="/lava-stones.png"
                alt={t("homeFlagship.imgAlt")}
                caption={t("homeFlagship.imgCaption")}
                className="lg:mx-0"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {t("homeFlagship.eyebrow")}
              </p>
              <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                {t("homeFlagship.title")}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-foreground/80 md:text-lg">
                {t("homeFlagship.body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/trattamenti/pietre-laviche"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("homeFlagship.link")}
                </Link>
                <Link
                  href="/trattamenti"
                  className="text-sm font-medium text-foreground/65 underline decoration-primary/25 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary"
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
