import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { LanguageMenu } from "@/components/layout/LanguageMenu";
import { useI18n } from "@/i18n/I18nContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/chi-sono", key: "nav.about" },
  { href: "/trattamenti", key: "nav.treatments" },
  { href: "/domande", key: "nav.questions" },
  { href: "/#luogo", key: "nav.studio" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/95 py-2.5 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/80 py-3.5 backdrop-blur-sm"
      }`}
    >
      <div className="container relative mx-auto flex h-12 items-center justify-between gap-4 px-6 md:px-12">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Melania Massaggi"
        >
          <BrandMark className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="hidden text-sm font-medium tracking-wide text-foreground/80 sm:inline">
            Melania Massaggi
          </span>
        </Link>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 text-sm font-medium text-foreground/75 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {t(link.key)}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {t(link.key)}
              </Link>
            ),
          )}
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageMenu />

          <a
            href="/#contatti"
            className="hidden shrink-0 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-200 hover:bg-primary/90 enabled:active:scale-[0.96] sm:inline-flex"
          >
            {t("nav.book")}
          </a>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label={t("nav.openMenu")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw,20rem)] border-border bg-background px-6 pt-10"
            >
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="flex items-center gap-2.5 text-base font-medium text-foreground">
                  <BrandMark className="h-8 w-8" />
                  Melania Massaggi
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className="rounded-xl px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {t(link.key)}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="rounded-xl px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {t(link.key)}
                      </Link>
                    )}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 border-t border-border pt-6">
                <SheetClose asChild>
                  <a
                    href="/#contatti"
                    className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {t("nav.book")}
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
