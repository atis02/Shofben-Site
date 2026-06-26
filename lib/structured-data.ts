import { BRAND_LINKS, SITE } from "./constants";
import { SITE_NAME, SITE_URL } from "./site-config";
import type { FaqItem, SeoPageData } from "./seo-types";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: SITE.description,
    url: SITE_URL,
    telephone: ["+908503465457", "+905527136767"],
    email: SITE.email,
    image: `${SITE_URL}/logo.avif`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₺₺",
    sameAs: [SITE.whatsappHref],
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function servicePageSchemas(page: SeoPageData) {
  const breadcrumbs = [
    { name: "Ana Sayfa", path: "/" },
    ...(page.slug === "hermetik-sofben-servisi"
      ? [{ name: page.breadcrumbLabel, path: `/${page.slug}` }]
      : [
          {
            name: "Hermetik Şofben Servisi",
            path: "/hermetik-sofben-servisi",
          },
          { name: page.breadcrumbLabel, path: `/${page.slug}` },
        ]),
  ];

  return [
    localBusinessSchema(),
    breadcrumbSchema(breadcrumbs),
    faqSchema(page.faq),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.description,
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        telephone: "+908503465457",
      },
      areaServed: "İstanbul",
      url: `${SITE_URL}/${page.slug}`,
    },
  ];
}

export function homeFaqSchema(faq: FaqItem[]) {
  return [localBusinessSchema(), faqSchema(faq)];
}

export function relatedBrandLinks(slugs: string[]) {
  return BRAND_LINKS.filter((b) =>
    slugs.some((slug) => b.href === `/${slug}`),
  );
}
