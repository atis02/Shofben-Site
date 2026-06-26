import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { homeFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  const faq = FAQ_ITEMS.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd data={homeFaqSchema(faq)} />
      <HomePage />
    </>
  );
}
