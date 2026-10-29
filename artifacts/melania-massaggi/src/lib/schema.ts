import {
  absoluteUrl,
  AREA_NOTE,
  BRAND_ALT,
  CITY,
  EMAIL,
  OG_IMAGE,
  PERSON_NAME,
  PHONE_E164,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: absoluteUrl("/chi-sono"),
    image: OG_IMAGE,
    jobTitle: "Massaggiatrice",
    worksFor: { "@id": `${SITE_URL}/#business` },
    email: EMAIL,
    telephone: PHONE_E164,
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: BRAND_ALT,
    url: SITE_URL,
    image: OG_IMAGE,
    description:
      "Massaggi professionali su appuntamento a Maderno: Sarvanga Abhyanga, rilassante, decontratturante, detox e pietre laviche.",
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressCountry: "IT",
      // Street withheld until booking — privacy
      description: AREA_NOTE,
    },
    areaServed: {
      "@type": "City",
      name: CITY,
    },
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: ["it-IT", "en", "de"],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  durationMin: number;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: CITY },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description: "Prezzo su richiesta",
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
