import { notFound } from "next/navigation";
import { services } from "@/data/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 20px",
      }}
    >
      <h1>{service.title}</h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "20px",
        }}
      >
        {service.subtitle}
      </p>

      <p
        style={{
          marginTop: "20px",
          lineHeight: 1.8,
        }}
      >
        {service.description}
      </p>
    </main>
  );
}
