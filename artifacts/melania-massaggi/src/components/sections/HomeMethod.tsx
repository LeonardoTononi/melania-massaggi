import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

export function HomeMethod() {
  const { t } = useI18n();

  return (
    <section className="relative bg-paper py-20 md:py-28" id="come-lavoro">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-md shadow-primary/10">
                <img
                  src="/melania.png"
                  alt={t("about.photoAlt")}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-3xl" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Healing Touch
              </p>
              <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">{t("homeMethod.title")}</h2>
              <p className="mt-3 font-serif text-lg italic text-primary/80 md:text-xl">
                {t("homeMethod.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8 max-w-prose space-y-5 text-base font-light leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
              <p>{t("homeMethod.p1")}</p>
              <p>{t("homeMethod.p2")}</p>
              <Link
                href="/chi-sono"
                className="inline-flex mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary"
              >
                {t("homeMethod.link")}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
