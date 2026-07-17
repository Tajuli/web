"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What digital marketing services does PrimeDigitor offer?",
    a: "PrimeDigitor provides SEO, local SEO, Google Ads, Facebook and Instagram marketing, TikTok marketing, website design and development, software development, video ads, social media management, content creation, and branding for businesses that want more qualified inquiries.",
  },
  {
    q: "How do you decide which service is right for my business?",
    a: "We start with a free growth audit to review your goals, website, current traffic sources, offer, location, and budget. Then we recommend the channel mix most likely to generate leads with the least wasted spend.",
  },
  {
    q: "Do you help with Google Business Profile and local SEO?",
    a: "Yes. We help optimize Google Business Profile information, service categories, website links, local landing pages, on-page SEO, and review-generation workflows so nearby customers can find and contact your business more easily.",
  },
  {
    q: "How long does SEO take to generate leads?",
    a: "SEO usually takes 3–6 months to show meaningful movement, depending on competition, website quality, content depth, and local authority. We focus on technical fixes, high-intent pages, internal linking, and conversion improvements early so traffic has a better chance to become inquiries.",
  },
  {
    q: "How quickly can Google Ads or Facebook Ads generate inquiries?",
    a: "Paid campaigns can begin generating traffic and inquiries within days of launch. Performance depends on the offer, landing page, budget, targeting, and tracking setup, so we test creative and keywords while optimizing for lead quality—not just clicks.",
  },
  {
    q: "Will you improve my existing website before running ads?",
    a: "If the website is slow, unclear, or missing trust signals, we will recommend conversion improvements before scaling paid traffic. This protects your budget and helps more visitors take action through calls, WhatsApp, email, or forms.",
  },
  {
    q: "What should I include when contacting you?",
    a: "Share your website or company name, target location, main service or product, current marketing channels, monthly budget range if available, and the outcome you want—more calls, form submissions, bookings, store visits, or online sales.",
  },
  {
    q: "Do you provide reporting and transparent communication?",
    a: "Yes. We provide clear performance updates focused on leads, traffic quality, campaign spend, rankings, conversions, and next actions so you understand what is working and what needs improvement.",
  },
  {
    q: "Do you work with businesses outside Bangladesh?",
    a: "Yes. PrimeDigitor is based in Bangladesh and serves clients locally and internationally through remote collaboration, online meetings, WhatsApp, email, and digital project management.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on your goals, competition, current digital presence, and selected services. After reviewing your needs, we provide a transparent scope so you know what is included before starting.",
  },
  {
    q: "Do you have case studies I can review?",
    a: "Yes. You can review our case studies to see examples of websites, digital campaigns, branding, and growth work before requesting a consultation.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. You can request a free consultation or growth audit through the contact form, WhatsApp, or email. We will review your situation and recommend practical next steps.",
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
