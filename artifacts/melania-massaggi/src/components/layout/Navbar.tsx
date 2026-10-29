import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md py-3 shadow-sm border-b border-primary/10"
          : "bg-background/70 backdrop-blur-sm py-4 border-b border-primary/5"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2 group">
          <svg
            viewBox="0 0 40 40"
            className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-[12deg] sm:h-7 sm:w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20 4c-2 6-6 9-12 10 6 1 10 4 12 10 2-6 6-9 12-10-6-1-10-4-12-10z"
              opacity="0.85"
            />
            <circle cx="20" cy="20" r="2.2" />
          </svg>
          <span
            className="text-[1.65rem] leading-none text-primary tracking-tight sm:text-[1.9rem]"
            style={{ fontFamily: "'Parisienne', cursive" }}
          >
            Melania
          </span>
        </Link>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:gap-8 text-[0.7rem] xl:text-xs tracking-[0.18em] uppercase font-semibold text-foreground whitespace-nowrap">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {t(link.key)}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {t(link.key)}
              </Link>
            ),
          )}
        </div>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageMenu />

          <a
            href="/#contatti"
            className="hidden sm:inline-flex shrink-0 text-xs uppercase tracking-widest font-semibold bg-primary text-primary-foreground rounded-full px-4 py-2.5 hover:bg-primary/90 transition-all duration-300"
          >
            {t("nav.book")}
          </a>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label={t("nav.openMenu")}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-primary/5 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100vw,20rem)] border-primary/10 bg-background px-6 pt-10"
            >
              <SheetHeader className="mb-8 text-left">
                <SheetTitle
                  className="text-2xl text-primary"
                  style={{ fontFamily: "'Parisienne', cursive" }}
                >
                  Melania
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        className="rounded-xl px-3 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {t(link.key)}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="rounded-xl px-3 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {t(link.key)}
                      </Link>
                    )}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 border-t border-primary/10 pt-6">
                <SheetClose asChild>
                  <a
                    href="/#contatti"
                    className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
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
