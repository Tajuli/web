import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";

import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found | PrimeDigitor",
    };
  }

  return {
    title: `${service.title} | PrimeDigitor`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          paddingTop: "110px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            {service.title}
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#555",
              marginBottom: "30px",
              lineHeight: 1.6,
            }}
          >
            {service.subtitle}
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#666",
            }}
          >
            {service.description}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
