import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Location() {
  const { t } = useI18n();

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative" id="luogo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <Reveal>
              <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-4xl md:text-5xl text-primary-foreground mb-4">{t("location.title")}</h2>
              <p className="text-primary-foreground/70 italic font-serif text-xl">{t("location.tagline")}</p>
            </Reveal>

            <Reveal delay={0.2} className="space-y-6 text-primary-foreground/80 font-light text-lg leading-relaxed">
              <p>
                {t("location.p1a")}{" "}
                <span className="text-primary-foreground font-normal">{t("location.p1b")}</span>
                {t("location.p1c")}{" "}
                <span className="text-primary-foreground font-normal">{t("location.p1d")}</span>
                {t("location.p1e")}
              </p>
              <p>{t("location.p2")}</p>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal direction="left">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-3xl">
                <img
                  src="/botanical.png"
                  alt={t("location.imgAlt")}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
