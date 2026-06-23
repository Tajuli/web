"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  { q:"What kind of businesses do you work with?", a:"PrimeDigitor is suited for service businesses, healthcare brands, local businesses, B2B companies and any growth-focused brand that needs better lead generation and a stronger digital presence." },
  { q:"Do you only build websites, or do you also handle marketing?", a:"Both. The goal is not just a better-looking site — it is a stronger growth system. That can include SEO, paid campaigns, landing pages, CRO and content strategy." },
  { q:"Can you redesign an existing website instead of starting from scratch?", a:"Yes. If the current structure has potential, we can redesign and improve it instead of rebuilding everything from zero." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section section-dark">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">A stronger FAQ section that still feels on-brand with the rest of the site.</h2>
        </div>
        <div className="faq-list">
          {items.map((item, index) => {
            const active = open === index;
            return (
              <article key={item.q} className={`faq-item ${active ? "faq-item-open" : ""}`}>
                <button className="faq-trigger" onClick={() => setOpen(active ? null : index)}>
                  <span>{item.q}</span>
                  <Plus className={`faq-icon ${active ? "faq-icon-open" : ""}`} />
                </button>
                <div className="faq-content"><p>{item.a}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
