import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceSeoPage from "@/components/ServiceSeoPage";
import {
  getAllSeoSlugs,
  getSeoPageBySlug,
} from "@/lib/seo-pages";

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

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
  };
}

export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ServiceSeoPage page={page} />;
}
