import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { WHATSAPP_URL } from "@/lib/site";

export function HomeBookingBand() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src="/illu-wave.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85" />

      <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
            {t("homeBooking.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-primary-foreground/80 md:text-lg">
            {t("homeBooking.body")}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-primary shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              {t("homeBooking.cta")}
            </span>
          </a>
          <p className="mt-5 text-sm font-light text-primary-foreground/65">{t("homeBooking.note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
