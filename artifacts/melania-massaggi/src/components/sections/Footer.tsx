import React from "react";
import { Link } from "wouter";
import { BrandMark } from "@/components/brand/BrandMark";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useI18n } from "@/i18n/I18nContext";
import { EMAIL, PHONE_DISPLAY, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

const contactLinkClass =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:items-start md:px-12 md:text-left">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <BrandMark className="h-9 w-9" />
          <div>
            <p className="text-sm font-semibold text-foreground">Melania Massaggi</p>
            <p className="text-xs text-muted-foreground">Healing Touch</p>
          </div>
        </Link>

        <address className="not-italic text-sm leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">{SITE_NAME}</p>
          <p className="mt-1">{t("footer.zone")}</p>
          <p className="mt-1">
            <Link href="/massaggio-a-domicilio-maderno" className={contactLinkClass}>
              {t("homeVisit.footerLink")}
            </Link>
          </p>
          {/* TODO: indirizzo dello studio — non pubblicare finché non è confermato */}
          <p className="mt-3">
            {t("contact.phoneLabel")}{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-1">
            {t("contact.emailLabel")}{" "}
            <a href={`mailto:${EMAIL}`} className={contactLinkClass}>
              {EMAIL}
            </a>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
        </address>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end md:text-right">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
