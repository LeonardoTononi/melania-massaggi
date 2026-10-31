import React, { useMemo } from "react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WaveDivider } from "@/components/ui/WaveDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nContext";
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from "@/lib/schema";
import { WHATSAPP_URL } from "@/lib/site";

type FaqItem = { q: string; a: string };

export default function Faq() {
  const { t, get } = useI18n();
  const items = (get("faq.items") as FaqItem[] | undefined) ?? [];

  const jsonLd = useMemo(
    () => [
      localBusinessSchema(),
      faqPageSchema(items.map((i) => ({ question: i.q, answer: i.a }))),
      breadcrumbSchema([
        { name: t("common.home"), path: "/" },
        { name: t("faq.title"), path: "/domande" },
      ]),
    ],
    [t, items],
  );

  return (
    <SiteLayout>
      <DocumentHead
        title={t("faq.metaTitle")}
        description={t("faq.metaDescription")}
        path="/domande"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-paper pb-16 pt-4 md:pb-20 md:pt-6">
        <img
          src="/illu-botanical.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-16 top-0 hidden h-64 w-auto opacity-30 mix-blend-multiply md:block lg:h-80 lg:opacity-40"
        />
        <div className="container relative z-10 mx-auto max-w-3xl px-6 md:px-12">
          <Reveal>
            <p className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t("common.home")}
              </Link>
              <span className="mx-2">/</span>
              <span>{t("faq.title")}</span>
            </p>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("faq.eyebrow")}
            </p>
            <h1 className="text-balance font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
              {t("faq.title")}
            </h1>
            <p className="mt-5 max-w-prose text-base font-light leading-relaxed text-foreground/75 md:text-lg">
              {t("faq.intro")}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-paper">
        <WaveDivider tone="card" />
      </div>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 md:px-12">
          <Reveal>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {items.map((item, i) => {
                const n = String(i + 1).padStart(2, "0");
                return (
                  <AccordionItem
                    key={item.q}
                    value={`item-${i}`}
                    className="border-primary/10"
                  >
                    <AccordionTrigger className="group gap-4 py-6 text-left hover:no-underline md:py-7">
                      <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-5">
                        <span
                          className="mt-0.5 shrink-0 font-serif text-sm tabular-nums text-primary/35 transition-colors group-data-[state=open]:text-primary/70"
                          aria-hidden
                        >
                          {n}
                        </span>
                        <span className="font-serif text-lg leading-snug text-primary md:text-xl">
                          {item.q}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="max-w-prose pb-6 pl-10 text-base font-light leading-relaxed text-foreground/75 md:pl-12">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src="/illu-wave.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85" />
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl">
              {t("faq.stillTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-primary-foreground/80">
              {t("faq.stillBody")}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
                {t("faq.stillCta")}
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
