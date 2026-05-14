import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

const TREATMENT_KEYS = ["sarvanga", "relaxing", "deep", "detox"] as const;

export function Treatments() {
  const { t, ta } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-background relative" id="trattamenti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-4">{t("treatments.title")}</h2>
            <div className="w-12 h-[1px] bg-primary/40 mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 font-light">{t("treatments.intro")}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {TREATMENT_KEYS.map((slug, index) => {
            const prefix = `treatments.${slug}`;
            const benefits = ta(`${prefix}.benefits`);
            return (
              <Reveal key={slug} delay={index * 0.1} direction="up">
                <div className="group bg-card/60 border border-primary/10 rounded-3xl p-8 hover:bg-card transition-colors duration-500 h-full flex flex-col">
                  <div className="mb-3 flex justify-between items-baseline border-b border-primary/10 pb-3">
                    <h3 className="text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                      {t(`${prefix}.title`)}
                    </h3>
                    <span className="text-sm tracking-wider text-muted-foreground font-medium uppercase whitespace-nowrap ml-4">
                      {t(`${prefix}.duration`)}
                    </span>
                  </div>
                  <p className="text-primary/70 italic font-serif mb-3 text-lg">{t(`${prefix}.subtitle`)}</p>
                  <p className="text-foreground/80 font-light leading-relaxed flex-1">{t(`${prefix}.description`)}</p>
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <p className="text-sm font-semibold tracking-wide text-primary/90 uppercase mb-3">
                      {t("treatments.benefitsHeading")}
                    </p>
                    <ul className="list-disc pl-5 space-y-2.5 text-foreground/80 font-light leading-relaxed text-[0.95rem]">
                      {benefits.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 max-w-2xl mx-auto text-center rounded-2xl border border-primary/15 bg-card/40 px-6 py-10">
            <p className="text-foreground/85 font-light leading-relaxed mb-2">{t("treatments.ctaTitle")}</p>
            <p className="text-sm text-foreground/70 font-light mb-6">{t("treatments.ctaBody")}</p>
            <a
              href="#contatti"
              className="inline-block text-sm uppercase tracking-widest font-semibold text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
            >
              {t("treatments.ctaLink")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
