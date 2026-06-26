import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceSeoPage from "@/components/ServiceSeoPage";
import JsonLd from "@/components/JsonLd";
import { buildSeoPageMetadata } from "@/lib/seo-metadata";
import { servicePageSchemas } from "@/lib/structured-data";
import { getAllSeoSlugs, getSeoPageBySlug } from "@/lib/seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};

  return buildSeoPageMetadata(page);
}

export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd data={servicePageSchemas(page)} />
      <ServiceSeoPage page={page} />
    </>
  );
}
