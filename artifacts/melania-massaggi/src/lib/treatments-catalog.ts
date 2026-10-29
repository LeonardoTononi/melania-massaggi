export type TreatmentSlug =
  | "sarvanga-abhyanga"
  | "rilassante"
  | "decontratturante"
  | "detox"
  | "pietre-laviche";

export type TreatmentMeta = {
  slug: TreatmentSlug;
  /** i18n prefix under treatmentsPage.items.* */
  i18nKey: string;
  durationMin: number;
  flagship?: boolean;
  price: "on_request";
  image: string;
  imageAltKey?: string;
};

export const TREATMENTS: TreatmentMeta[] = [
  {
    slug: "pietre-laviche",
    i18nKey: "stones",
    durationMin: 75,
    flagship: true,
    price: "on_request",
    image: "/illu-ritual.jpg",
  },
  {
    slug: "sarvanga-abhyanga",
    i18nKey: "sarvanga",
    durationMin: 60,
    price: "on_request",
    image: "/illu-ayurveda.jpg",
  },
  {
    slug: "rilassante",
    i18nKey: "relaxing",
    durationMin: 60,
    price: "on_request",
    image: "/illu-relax.jpg",
  },
  {
    slug: "decontratturante",
    i18nKey: "deep",
    durationMin: 45,
    price: "on_request",
    image: "/massage-hands.png",
  },
  {
    slug: "detox",
    i18nKey: "detox",
    durationMin: 60,
    price: "on_request",
    image: "/illu-wave.jpg",
  },
];

export function getTreatment(slug: string): TreatmentMeta | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export const TREATMENT_PATHS = TREATMENTS.map((t) => `/trattamenti/${t.slug}`);
