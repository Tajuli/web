"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const resultCards = [
  { value: "01", label: "Facebook Marketing", href: "/services/facebook-marketing" },
  { value: "02", label: "Google Ads", href: "/services/google-ads" },
  { value: "03", label: "TikTok Marketing", href: "/services/tiktok-marketing" },
  { value: "04", label: "SEO Services", href: "/services/seo" },
  { value: "05", label: "Website Design & Development", href: "/services/website-development" },
  { value: "06", label: "Software & App Development", href: "/services/software-development" },
  { value: "07", label: "Video Advertisement Production", href: "/services/video-production" },
  { value: "08", label: "Social Media Management", href: "/services/social-media-management" },
  { value: "09", label: "Content Creation & Branding", href: "/services/content-branding" },
];

export default function HeroSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const animationRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const oneSetWidth = slider.scrollWidth / 3;
    slider.scrollLeft = oneSetWidth;

    const handleLoop = () => {
      if (slider.scrollLeft <= oneSetWidth * 0.15) {
        slider.scrollLeft += oneSetWidth;
      } else if (slider.scrollLeft >= oneSetWidth * 1.85) {
        slider.scrollLeft -= oneSetWidth;
      }
    };

    const stopAutoSlide = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        lastFrameRef.current = null;
      }
    };

    const autoSlide = (timestamp: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp;
      }

      if (!isDown.current) {
        const delta = timestamp - lastFrameRef.current;
        slider.scrollLeft += delta / 16;
        handleLoop();
      }

      lastFrameRef.current = timestamp;
      animationRef.current = requestAnimationFrame(autoSlide);
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      animationRef.current = requestAnimationFrame(autoSlide);
    };

    slider.addEventListener("scroll", handleLoop, { passive: true });
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();

    return () => {
      slider.removeEventListener("scroll", handleLoop);
      slider.removeEventListener("mouseenter", stopAutoSlide);
      slider.removeEventListener("mouseleave", startAutoSlide);
      stopAutoSlide();
    };
  }, []);

  const pauseAuto = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      lastFrameRef.current = null;
    }
  };

  const resumeAuto = () => {
    if (!sliderRef.current || animationRef.current) return;

    const tick = (timestamp: number) => {
      const slider = sliderRef.current;
      if (!slider) return;

      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp;
      }

      if (!isDown.current) {
        const oneSetWidth = slider.scrollWidth / 3;
        const delta = timestamp - lastFrameRef.current;

        slider.scrollLeft += delta / 16;

        if (slider.scrollLeft <= oneSetWidth * 0.15) {
          slider.scrollLeft += oneSetWidth;
        } else if (slider.scrollLeft >= oneSetWidth * 1.85) {
          slider.scrollLeft -= oneSetWidth;
        }
      }

      lastFrameRef.current = timestamp;
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = true;
    pauseAuto();
    slider.classList.add(styles.dragging);
    startX.current = e.pageX - slider.offsetLeft;
    startScrollLeft.current = slider.scrollLeft;
  };

  const stopDragging = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = false;
    slider.classList.remove(styles.dragging);
    resumeAuto();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDown.current) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.25;
    slider.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = true;
    pauseAuto();
    startX.current = e.touches[0].pageX - slider.offsetLeft;
    startScrollLeft.current = slider.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDown.current) return;

    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.25;
    slider.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
    resumeAuto();
  };

  return (
    <div
      ref={sliderRef}
      className={styles.resultSlider}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.resultTrack}>
        {[...resultCards, ...resultCards, ...resultCards].map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href}
            className={styles.resultCard}
            onTouchStart={(e) => e.currentTarget.classList.add(styles.touchHover)}
            onTouchEnd={(e) => e.currentTarget.classList.remove(styles.touchHover)}
            onTouchCancel={(e) => e.currentTarget.classList.remove(styles.touchHover)}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
