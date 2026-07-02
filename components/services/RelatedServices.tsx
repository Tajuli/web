import Link from "next/link";
import Image from "next/image";

import { services } from "@/data/services";

import styles from "./RelatedServices.module.css";

type Props = {
  currentSlug: string;
  related: string[];
};

export default function RelatedServices({
  currentSlug,
  related,
}: Props) {
  const relatedServices = related
    .map((slug) => ({
      slug,
      ...services[slug as keyof typeof services],
    }))
    .filter(
      (service) =>
        service.title && service.slug !== currentSlug
    );

  if (!relatedServices.length) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {relatedServices.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className={styles.card}
        >
          <Image
            src={service.heroImage}
            alt={service.title}
            width={600}
            height={380}
            className={styles.image}
          />

          <div className={styles.content}>
            <span className={styles.category}>
              {service.category}
            </span>

            <h3>{service.title}</h3>

            <p>{service.subtitle}</p>

            <span className={styles.readMore}>
              Learn More →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
