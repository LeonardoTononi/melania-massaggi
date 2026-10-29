import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Location() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28" id="luogo">
      <img
        src="/illu-wave.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-soft-light"
      />
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="w-full space-y-8 lg:w-1/2">
            <Reveal>
              <div className="mb-5 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 p-3">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-balance text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
                {t("location.title")}
              </h2>
              <p className="mt-4 font-serif text-lg italic text-primary-foreground/70 md:text-xl">
                {t("location.tagline")}
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="max-w-prose space-y-5 text-base font-light leading-relaxed text-primary-foreground/85 md:text-lg"
            >
              <p>
                {t("location.p1a")}{" "}
                <span className="font-normal text-primary-foreground">{t("location.p1b")}</span>
                {t("location.p1c")}{" "}
                <span className="font-normal text-primary-foreground">{t("location.p1d")}</span>
                {t("location.p1e")}
              </p>
              <p>{t("location.p2")}</p>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal direction="left">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl shadow-black/20">
                <img
                  src="/lake-garda.png"
                  alt={t("location.imgAlt")}
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
