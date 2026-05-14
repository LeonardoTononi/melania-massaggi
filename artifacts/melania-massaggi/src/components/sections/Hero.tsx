import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { useI18n } from "@/i18n/I18nContext";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-v2.png"
          alt={t("hero.heroImgAlt")}
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-background/65 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <Reveal delay={0.2} direction="down">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6 font-semibold">
            {t("hero.tagline")}
          </p>
        </Reveal>

        <Reveal delay={0.4} direction="up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-[1.05] [text-shadow:0_1px_2px_rgba(0,0,0,0.08)]">
            {t("hero.title1")}
            <br className="hidden md:block" /> {t("hero.title2")}
          </h1>
          <h2 className="text-lg md:text-2xl font-serif text-foreground italic mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </h2>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="w-16 h-[1px] bg-primary/60 mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-foreground/85 max-w-xl mx-auto font-light leading-relaxed mb-12">
            {t("hero.lead")}
          </p>
        </Reveal>

        <Reveal delay={0.8} direction="up">
          <a
            href="https://wa.me/393273390521"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("hero.ctaAria")}
            className="group inline-flex items-center gap-3 rounded-full bg-white/80 px-8 py-3.5 text-primary backdrop-blur-md transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.99]"
          >
            <WhatsAppIcon className="h-6 w-6 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xs uppercase tracking-widest font-semibold sm:text-sm">
              {t("hero.cta")}
            </span>
          </a>
        </Reveal>
      </div>

      <div className="absolute -left-32 -bottom-32 w-96 h-96 opacity-10 pointer-events-none mix-blend-multiply">
        <img src="/botanical.png" alt="" className="w-full h-full object-cover rounded-full blur-sm" />
      </div>
    </section>
  );
}
