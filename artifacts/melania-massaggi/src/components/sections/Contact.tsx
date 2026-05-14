import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export function Contact() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-card relative" id="contatti">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">{t("contact.title")}</h2>
            <p className="text-lg text-foreground/70 font-light">{t("contact.intro")}</p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto bg-background shadow-sm border border-primary/5 p-8 md:p-16 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <Reveal delay={0.1} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {t("contact.phoneLabel")}
                    </h4>
                    <a
                      href="https://wa.me/393273390521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-serif text-primary hover:text-primary/70 transition-colors"
                    >
                      +39 327 339 05 21
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {t("contact.studioLabel")}
                    </h4>
                    <p className="text-lg font-light text-foreground/90 leading-relaxed">
                      {t("contact.studioBodyBefore")}{" "}
                      <span className="font-serif text-primary">{t("contact.studioPlace")}</span>
                      {t("contact.studioBodyAfter")}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25} direction="up">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/5 p-3 rounded-full text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {t("contact.emailLabel")}
                    </h4>
                    <a
                      href="mailto:moreni.melania66@gmail.com"
                      className="text-xl font-serif text-primary hover:text-primary/70 transition-colors break-all"
                    >
                      moreni.melania66@gmail.com
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-6 bg-primary/5 p-8 border border-primary/10 rounded-2xl">
              <Reveal delay={0.4} direction="left">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-primary mb-2">{t("contact.waTitle")}</h3>
                <p className="text-foreground/70 font-light mb-8">{t("contact.waBody")}</p>
                <a
                  href="https://wa.me/393273390521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 w-full rounded-full hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium text-center"
                >
                  {t("contact.waButton")}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
