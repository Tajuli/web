"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What digital marketing services does PrimeDigitor offer?",
    a: "PrimeDigitor provides complete digital marketing solutions including Facebook Marketing, Google Ads, TikTok Marketing, SEO Services, Website Design & Development, Software & App Development, Video Advertisement Production, Social Media Management, and Content Creation & Branding.",
  },
  {
    q: "Why should I choose PrimeDigitor for digital marketing?",
    a: "We focus on data-driven strategies, creative marketing, and measurable business growth. Our goal is to increase your brand visibility, generate qualified leads, improve conversions, and maximize your return on investment (ROI).",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. Most businesses begin to see noticeable improvements within 3–6 months, depending on competition, website quality, and the current state of SEO.",
  },
  {
    q: "How quickly can Google Ads and Facebook Ads generate results?",
    a: "Paid advertising campaigns can start generating traffic and leads within a few days after launch. We continuously optimize campaigns to improve performance and maximize ROI.",
  },
  {
    q: "Do you build SEO-friendly websites?",
    a: "Yes. Every website we develop is fast, mobile-responsive, SEO-friendly, secure, and optimized for performance, user experience, and higher search engine rankings.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We redesign existing websites with modern UI/UX, improved performance, better SEO structure, faster loading speed, and higher conversion optimization.",
  },
  {
    q: "Do you work with businesses outside Bangladesh?",
    a: "Yes. PrimeDigitor serves businesses worldwide through remote collaboration, online meetings, and digital project management.",
  },
  {
    q: "Which advertising platform is best for my business?",
    a: "It depends on your industry, target audience, and business goals. We recommend the most effective combination of Google Ads, Facebook Ads, TikTok Marketing, SEO, or other digital channels after analyzing your business.",
  },
  {
    q: "Do you provide Social Media Management services?",
    a: "Yes. We create content calendars, design engaging posts, manage publishing schedules, interact with audiences, and help grow your brand across social media platforms.",
  },
  {
    q: "Do you provide custom software and mobile app development?",
    a: "Yes. We develop custom business software, web applications, and mobile apps tailored to your business requirements, helping automate processes and improve productivity.",
  },
  {
    q: "How much do your digital marketing services cost?",
    a: "Our pricing depends on your project requirements, business goals, and the services you need. We offer customized solutions and transparent pricing based on your objectives.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. We offer a free consultation to understand your business goals, analyze your current digital presence, and recommend the best marketing strategy for long-term growth.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className={`site-container ${styles.wrapper}`}>
        {/* Left Side */}
        <div className={styles.left}>
          <h2 className={styles.title}>FAQs</h2>

          <p className={styles.description}>
            Everything you need to know about our services.
            <br />
            Can't find the answer you're looking for?
            <br />
            Please contact our team.
          </p>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className={`${styles.item} ${
                  active ? styles.active : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.q}</span>

                  <div className={styles.icon}>
                    {active ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    active ? styles.show : ""
                  }`}
                >
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
