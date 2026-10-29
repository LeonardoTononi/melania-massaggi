import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { Phone, MapPin, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export function Contact() {
  const { t } = useI18n();

  return (
    <section className="relative bg-card py-20 md:py-28" id="contatti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl">{t("contact.title")}</h2>
            <p className="mt-5 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
              {t("contact.intro")}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-primary/10 bg-background shadow-md shadow-primary/5 md:grid-cols-2">
          <div className="space-y-10 p-8 md:p-12 lg:p-14">
            <Reveal delay={0.05} direction="up">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 rounded-full bg-primary/8 p-3 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.phoneLabel")}
                  </h4>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl text-primary transition-colors hover:text-primary/70"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} direction="up">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 rounded-full bg-primary/8 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.studioLabel")}
                  </h4>
                  <p className="text-base font-light leading-relaxed text-foreground/85">
                    {t("contact.studioBodyBefore")}{" "}
                    <span className="font-serif text-primary">{t("contact.studioPlace")}</span>
                    {t("contact.studioBodyAfter")}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} direction="up">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 rounded-full bg-primary/8 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t("contact.emailLabel")}
                  </h4>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-serif text-lg text-primary transition-colors hover:text-primary/70 md:text-xl"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-primary px-8 py-12 text-center text-primary-foreground md:px-12">
            <img
              src="/illu-wave.jpg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-soft-light"
            />
            <Reveal delay={0.2} direction="left" className="relative z-10">
              <WhatsAppIcon className="mx-auto mb-5 h-11 w-11 text-[#25D366]" />
              <h3 className="mb-3 font-serif text-2xl text-primary-foreground md:text-3xl">
                {t("contact.waTitle")}
              </h3>
              <p className="mx-auto mb-8 max-w-sm text-sm font-light leading-relaxed text-primary-foreground/80 md:text-base">
                {t("contact.waBody")}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-md transition-transform hover:-translate-y-0.5 hover:bg-white/95"
              >
                {t("contact.waButton")}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
