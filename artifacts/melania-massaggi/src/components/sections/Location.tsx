import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { useI18n } from "@/i18n/I18nContext";

export function Location() {
  const { t } = useI18n();

  return (
    <section className="relative bg-paper py-20 md:py-28" id="luogo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {t("location.eyebrow")}
              </p>
              <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                {t("location.title")}
              </h2>
              <p className="mt-4 max-w-prose font-serif text-lg italic text-primary/75 md:text-xl">
                {t("location.tagline")}
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg"
            >
              <p>
                {t("location.p1a")}{" "}
                <span className="font-medium text-foreground">{t("location.p1b")}</span>
                {t("location.p1c")}
              </p>
              <p>{t("location.p2")}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-sm font-medium text-primary">{t("location.chip")}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.08}>
              <FramedPhoto
                src="/illu-relax.jpg"
                alt={t("location.imgAlt")}
                caption={t("location.imgCaption")}
                className="lg:mx-0 lg:ml-auto"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
