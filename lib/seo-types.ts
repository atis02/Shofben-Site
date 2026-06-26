export type FaqItem = {
  question: string;
  answer: string;
};

export type SeoSubsection = {
  h3: string;
  paragraphs: string[];
};

export type SeoContentSection = {
  h2: string;
  paragraphs: string[];
  subsections?: SeoSubsection[];
};

export type SeoPageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  h2Service: string;
  serviceDescription: string;
  h2Faults: string;
  faults: string[];
  h2WhyUs: string;
  whyUs: string[];
  h2Regions: string;
  regionText: string;
  image: string;
  sections: SeoContentSection[];
  faq: FaqItem[];
  relatedBrandSlugs: string[];
  breadcrumbLabel: string;
};
