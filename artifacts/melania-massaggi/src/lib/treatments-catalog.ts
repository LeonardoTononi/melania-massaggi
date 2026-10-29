export type TreatmentSlug =
  | "sarvanga-abhyanga"
  | "rilassante"
  | "decontratturante"
  | "detox"
  | "pietre-laviche";

export type TreatmentMeta = {
  slug: TreatmentSlug;
  /** i18n prefix under pages.treatments.items.* */
  i18nKey: string;
  durationMin: number;
  flagship?: boolean;
  price: "on_request";
};

export const TREATMENTS: TreatmentMeta[] = [
  {
    slug: "sarvanga-abhyanga",
    i18nKey: "sarvanga",
    durationMin: 60,
    price: "on_request",
  },
  {
    slug: "rilassante",
    i18nKey: "relaxing",
    durationMin: 60,
    price: "on_request",
  },
  {
    slug: "decontratturante",
    i18nKey: "deep",
    durationMin: 45,
    price: "on_request",
  },
  {
    slug: "detox",
    i18nKey: "detox",
    durationMin: 60,
    price: "on_request",
  },
  {
    slug: "pietre-laviche",
    i18nKey: "stones",
    durationMin: 75,
    flagship: true,
    price: "on_request",
  },
];

export function getTreatment(slug: string): TreatmentMeta | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export const TREATMENT_PATHS = TREATMENTS.map((t) => `/trattamenti/${t.slug}`);
