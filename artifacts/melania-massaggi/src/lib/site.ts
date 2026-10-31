/** Verified NAP and site facts: keep aligned with Contact, schema, llms.txt */

export const SITE_URL = "https://melaniamassaggi.it";
export const SITE_NAME = "Melania Massaggi";
export const BRAND_ALT = "Healing Touch";
export const PERSON_NAME = "Melania";

export const PHONE_DISPLAY = "+39 327 339 05 21";
export const PHONE_E164 = "+393273390521";
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;
export const EMAIL = "moreni.melania66@gmail.com";

/** Service area for local SEO: home visits or studio in Maderno */
export const CITY = "Maderno";
export const AREA_NOTE = "Massaggi a domicilio o in studio a Maderno, su appuntamento; dettagli in chat";

export const OG_IMAGE = `${SITE_URL}/melania.png`;

export const SAME_AS: string[] = [
  // TODO: aggiungere Google Business Profile, Instagram, Facebook quando disponibili
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "/" : p.replace(/\/$/, "") || "/"}`;
}
