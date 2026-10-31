import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Home } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export function Contact() {
  const { t } = useI18n();

  return (
    <section className="relative bg-blush py-20 md:py-28" id="contatti">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {t("contact.kicker")}
              </p>
              <h2 className="text-balance font-serif text-3xl text-primary md:text-4xl lg:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("contact.intro")}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-md shadow-primary/15 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-primary/90 enabled:active:scale-[0.96]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {t("contact.waButton")}
              </a>
              <p className="mt-4 text-sm text-muted-foreground">{t("contact.waNote")}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <ul className="overflow-hidden rounded-3xl border border-border bg-surface shadow-md shadow-primary/5">
                <li className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t("contact.phoneLabel")}
                      </p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-block font-serif text-xl text-primary transition-colors hover:text-primary/75 md:text-2xl"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {t("contact.waBody")}
                      </p>
                    </div>
                  </div>
                </li>

                <li className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Home className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t("contact.placeLabel")}
                      </p>
                      <p className="mt-1.5 text-base leading-relaxed text-foreground/85 md:text-lg">
                        {t("contact.placeBodyBefore")}{" "}
                        <span className="font-medium text-primary">{t("contact.placeArea")}</span>
                        {t("contact.placeBodyAfter")}
                      </p>
                    </div>
                  </div>
                </li>

                <li className="px-6 py-6 sm:px-8 sm:py-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {t("contact.emailLabel")}
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1.5 inline-block break-all font-serif text-lg text-primary transition-colors hover:text-primary/75 md:text-xl"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
