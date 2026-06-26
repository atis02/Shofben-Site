import { IMAGES } from "./constants";
import {
  buildBrandSections,
  buildBrandWhyUs,
} from "./seo-content/brand-types";
import { BRAND_CONFIGS } from "./seo-content/brands-data";
import {
  HERMETIK_FAQ,
  HERMETIK_INTRO,
  HERMETIK_SECTIONS,
} from "./seo-content/hermetik";
import type { SeoPageData } from "./seo-types";

const BRAND_IMAGES: Record<string, string> = {
  "baymak-hermetik-sofben-servisi": IMAGES.hermetic,
  "eca-hermetik-sofben-servisi": IMAGES.kombi,
  "demirdokum-hermetik-sofben-servisi": IMAGES.hermetic,
  "vaillant-hermetik-sofben-servisi": IMAGES.maintenance,
  "daxom-hermetik-sofben-servisi": IMAGES.hermetic,
  "goldtherm-hermetik-sofben-servisi": IMAGES.installation,
  "termodinamik-hermetik-sofben-servisi": IMAGES.hermetic,
  "copa-hermetik-sofben-servisi": IMAGES.kombi,
  "termomex-hermetik-sofben-servisi": IMAGES.maintenance,
};

const hermetikPage: SeoPageData = {
  slug: "hermetik-sofben-servisi",
  title: "Hermetik Şofben Servisi | İstanbul Teknik Servis",
  description:
    "İstanbul hermetik şofben servisi: tamiri, bakımı ve arıza tespiti. Aynı gün yerinde tamir, garantili hizmet, 7/24 acil servis. 0850 346 54 57.",
  h1: "İstanbul Hermetik Şofben Servisi",
  intro: HERMETIK_INTRO,
  h2Service: "Hermetik Şofben Tamir ve Bakım Hizmeti",
  serviceDescription:
    "Hermetik şofbenler kapalı yanma odası ve fan sistemiyle çalışır; bu yüzden arıza tespiti deneyim ister. Ekibimiz su ısıtmama, ateşleme sorunu, fan arızası ve gaz ayarı gibi işlemleri yerinde halleder. Yeni cihaz montajından periyodik bakıma kadar tüm hermetik şofben ihtiyaçlarınız için İstanbul genelinde hizmet veriyoruz.",
  h2Faults: "Sık Görülen Hermetik Şofben Arızaları",
  faults: [
    "Sıcak su gelmemesi veya suyun ısınmaması",
    "Ateşleme yapıyor ama hemen sönüyor",
    "Fan çalışmıyor veya anormal ses çıkarıyor",
    "Ekranda hata kodu görünmesi",
    "Gaz kokusu veya düzensiz yanma",
    "Su sızıntısı ve eşanjör tıkanıklığı",
    "Düşük su debisinde ısıtma zayıflığı",
    "Uzun süre kapalı kalınca devreye girmeme",
  ],
  h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
  whyUs: [
    "Doğalgaz yetki belgeli teknisyenlerle güvenli müdahale",
    "Aynı gün yerinde tamir ve bakım imkânı",
    "Orijinal yedek parça ve garantili işçilik",
    "7/24 acil servis hattı ve WhatsApp desteği",
  ],
  h2Regions: "İstanbul Bölge Servisi",
  regionText:
    "Avrupa Yakası'nda Beşiktaş, Bakırköy, Beylikdüzü, Fatih ve Şişli başta olmak üzere; Anadolu Yakası'nda Kadıköy, Üsküdar, Maltepe, Ataşehir ve Ümraniye dahil pek çok ilçeye mobil ekip yönlendiriyoruz. Semtinize en yakın servis aracımızı aradığınızda yola çıkar, arızayı adresinizde çözeriz.",
  image: IMAGES.hermetic,
  sections: HERMETIK_SECTIONS,
  faq: HERMETIK_FAQ,
  relatedBrandSlugs: [
    "baymak-hermetik-sofben-servisi",
    "eca-hermetik-sofben-servisi",
    "demirdokum-hermetik-sofben-servisi",
    "vaillant-hermetik-sofben-servisi",
  ],
  breadcrumbLabel: "Hermetik Şofben Servisi",
};

const brandPages: SeoPageData[] = BRAND_CONFIGS.map((config) => ({
  slug: config.slug,
  title: config.title,
  description: config.description,
  h1: `${config.brand} Hermetik Şofben Servisi`,
  intro: config.intro,
  h2Service: `${config.brand} Hermetik Şofben Tamir ve Bakım`,
  serviceDescription: `${config.brand} hermetik şofben modellerinde arıza tespiti, yerinde tamir ve periyodik bakım hizmeti sunuyoruz. ${config.serviceAngle} Aynı gün servis, garantili hizmet ve 7/24 teknik destek ile İstanbul'un her iki yakasında hizmetinizdeyiz.`,
  h2Faults: `${config.brand} Şofbende Sık Görülen Arızalar`,
  faults: config.faults,
  h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
  whyUs: buildBrandWhyUs(config.brand),
  h2Regions: "İstanbul Bölge Servisi",
  regionText: config.regionNote,
  image: BRAND_IMAGES[config.slug] ?? IMAGES.hermetic,
  sections: buildBrandSections(config),
  faq: config.faq,
  relatedBrandSlugs: config.relatedSlugs,
  breadcrumbLabel: `${config.brand} Hermetik Şofben Servisi`,
}));

export const SEO_PAGES: SeoPageData[] = [hermetikPage, ...brandPages];

export type { SeoPageData };

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}

export function getAllSeoSlugs(): string[] {
  return SEO_PAGES.map((page) => page.slug);
}
