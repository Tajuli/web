import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";

import { services } from "@/data/services";

import Hero from "./sections/Hero/Hero";
import Overview from "./sections/Overview/Overview";
import Features from "./sections/Features/Features";
import WhyThisImportant from "./sections/WhyThisImportant/WhyThisImportant";
import WorkingProcess from "./sections/WorkingProcess/WorkingProcess";
import Results from "./sections/Results/Results";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import FAQ from "./sections/FAQ/FAQ";
import CTA from "./sections/CTA/CTA";
import RelatedServices from "./sections/RelatedServices/RelatedServices";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://primedigitor.com";

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    return {
      title: "Service Not Found | PrimeDigitor",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServicePage({
  params,
}: Props) {

  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>

        <Hero service={service} />

        <Overview service={service} />

        <Features service={service} />

        <WhyThisImportant service={service} />

        <WorkingProcess service={service} />

        <Results service={service} />

        <WhyChooseUs service={service} />

        <FAQ service={service} />

        <CTA service={service} />

        <RelatedServices
          currentSlug={slug}
          related={service.related}
        />

      </main>

      <Footer />

      {/* JSON-LD Schema */}

    </>
  );
}
