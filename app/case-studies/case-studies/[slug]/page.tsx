import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies } from "@/data/caseStudies";
import CaseStudy from "./CaseStudy";

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
    return {
      title: "Case Study Not Found | PrimeDigitor",
    };
  }

  return {
    title: study.seoTitle ?? `${study.title} | PrimeDigitor`,
    description: study.seoDescription,
    openGraph: {
      title: study.seoTitle ?? study.title,
      description: study.seoDescription,
      images: [study.coverImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudy caseStudy={study} />;
}
