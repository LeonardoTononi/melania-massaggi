import React, { useMemo } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { HomeMethod } from "@/components/sections/HomeMethod";
import { HomeJourney } from "@/components/sections/HomeJourney";
import { HomeFlagship } from "@/components/sections/HomeFlagship";
import { HomeBookingBand } from "@/components/sections/HomeBookingBand";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { DocumentHead } from "@/components/seo/DocumentHead";
import { useI18n } from "@/i18n/I18nContext";
import {
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";

export default function Home() {
  const { t } = useI18n();
  const jsonLd = useMemo(
    () => [websiteSchema(), localBusinessSchema(), personSchema()],
    [],
  );

  return (
    <SiteLayout flushTop>
      <DocumentHead
        title={t("meta.title")}
        description={t("meta.description")}
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <HomeMethod />
      <div className="bg-blush">
        <WaveDivider tone="surface" />
      </div>
      <HomeJourney />
      <HomeFlagship />
      <HomeBookingBand />
      <div className="bg-primary">
        <WaveDivider tone="background" />
      </div>
      <Location />
      <div className="bg-paper">
        <WaveDivider tone="blush" />
      </div>
      <Contact />
    </SiteLayout>
  );
}
