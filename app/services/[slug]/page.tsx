import { notFound } from "next/navigation";
import { services } from "@/data/services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Components will be added here */}
    </>
  );
}
