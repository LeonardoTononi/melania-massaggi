import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

type SiteLayoutProps = {
  children: React.ReactNode;
  /** Home hero sits under the fixed nav — skip main top padding */
  flushTop?: boolean;
};

export function SiteLayout({ children, flushTop = false }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-paper font-sans text-foreground selection:bg-secondary selection:text-foreground">
      <Navbar />
      <main className={cn(!flushTop && "pt-28 md:pt-36")}>{children}</main>
      <Footer />
    </div>
  );
}
