import Image from "next/image";
import styles from "./Hero.module.css";

type HeroProps = {
  image: string;
  alt: string;
};

export default function Hero({ image, alt }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
    </section>
  );
}
