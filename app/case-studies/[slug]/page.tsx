import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetails from "./CaseStudy";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, creativeWorkSchema, webpageSchema } from "@/lib/jsonLd";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return createMetadata({ title: "Case Study Not Found", path: `/case-studies/${slug}`, noIndex: true });
  }

  return createMetadata({
    title: study.seoTitle ?? `${study.title} Case Study`,
    description: study.seoDescription || study.shortDescription,
    path: `/case-studies/${study.slug}`,
    image: study.coverImage,
  });
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudyDetails caseStudy={study} />
      <JsonLd data={[creativeWorkSchema(study), webpageSchema(study.title, study.seoDescription || study.shortDescription, `/case-studies/${study.slug}`), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: study.title, path: `/case-studies/${study.slug}` }])]} />
    </>
  );
}
