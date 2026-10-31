import React from "react";
import { Link } from "wouter";
import { Reveal } from "@/components/ui/reveal";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { useI18n } from "@/i18n/I18nContext";

export function HomeMethod() {
  const { t, ta } = useI18n();
  const details = ta("homeMethod.details");

  return (
    <section className="relative bg-blush py-20 md:py-28" id="come-lavoro">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <FramedPhoto
                src="/illu-ritual.jpg"
                alt={t("homeMethod.imgAlt")}
                caption={t("homeMethod.imgCaption")}
                className="lg:mx-0"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-3 text-sm font-medium text-muted-foreground">{t("homeMethod.kicker")}</p>
              <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                {t("homeMethod.title")}
              </h2>
              <p className="mt-3 font-serif text-xl italic text-primary/75 md:text-2xl">
                {t("homeMethod.subtitle")}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-7 max-w-prose space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>{t("homeMethod.p1")}</p>
              <p>{t("homeMethod.p2")}</p>
            </Reveal>

            {details.length > 0 ? (
              <Reveal delay={0.16}>
                <dl className="mt-9 grid gap-4 sm:grid-cols-2">
                  {details.map((line) => {
                    const [label, ...rest] = line.split("|");
                    const value = rest.join("|").trim();
                    return (
                      <div
                        key={line}
                        className="rounded-2xl border border-border/80 bg-surface/80 px-4 py-3.5"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {label.trim()}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-snug text-foreground/85 md:text-[0.95rem]">
                          {value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </Reveal>
            ) : null}

            <Reveal delay={0.2}>
              <Link
                href="/chi-sono"
                className="mt-9 inline-flex text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-8 transition-colors hover:decoration-primary"
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
