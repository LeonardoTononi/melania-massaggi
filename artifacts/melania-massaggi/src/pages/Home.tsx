import React, { useMemo } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { HomeMethod } from "@/components/sections/HomeMethod";
import { HomeFlagship } from "@/components/sections/HomeFlagship";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
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
    <SiteLayout>
      <DocumentHead
        title={t("meta.title")}
        description={t("meta.description")}
        path="/"
        jsonLd={jsonLd}
      />
      <div className="-mt-20">
        <Hero />
      </div>
      <HomeMethod />
      <HomeFlagship />
      <Location />
      <Contact />
    </SiteLayout>
  );
}
