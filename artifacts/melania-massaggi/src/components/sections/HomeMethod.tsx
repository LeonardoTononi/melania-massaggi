import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

export function HomeMethod() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-background relative" id="come-lavoro">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <Reveal>
          <h2 className="text-4xl md:text-5xl mb-3">{t("homeMethod.title")}</h2>
          <p className="text-primary italic text-xl font-serif mb-8">{t("homeMethod.subtitle")}</p>
        </Reveal>
        <Reveal delay={0.15} className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
          <p>{t("homeMethod.p1")}</p>
          <p>{t("homeMethod.p2")}</p>
          <Link
            href="/chi-sono"
            className="inline-block mt-4 text-sm uppercase tracking-widest font-semibold text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
          >
            {t("homeMethod.link")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
