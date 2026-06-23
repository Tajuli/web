"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  { category: "SEO + CRO", title: "Healthcare growth system", text: "Rebuilt information architecture, local SEO pages and lead funnels for a specialist clinic brand.", metrics: ["+162% organic traffic", "+58% form conversion", "3 new service funnels"] },
  { category: "Paid Media", title: "Lead generation campaign engine", text: "Created a performance campaign system with landing page optimisation and tighter lead qualification.", metrics: ["4.1x ROAS", "-31% CPL", "+93% qualified leads"] },
  { category: "Web Design", title: "Premium B2B brand website", text: "Designed a modern high-trust website with stronger messaging hierarchy and clearer conversion paths.", metrics: ["+44% engagement", "+67% CTA clicks", "Faster mobile UX"] }
];

export default function Works() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % projects.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" className="section section-blue">
      <div className="site-container">
        <div className="section-head work-head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="section-title">A portfolio section built to feel like a distinct new chapter.</h2>
          </div>
          <div className="work-controls">
            <button onClick={() => setActive((p) => (p - 1 + projects.length) % projects.length)} className="work-btn"><ArrowLeft className="h-5 w-5" /></button>
            <button onClick={() => setActive((p) => (p + 1) % projects.length)} className="work-btn"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="work-stage">
          {projects.map((project, index) => (
            <article key={project.title} className={`work-card ${index === active ? "work-card-active" : ""}`}>
              <div className="work-visual"><div className="work-screen" /></div>
              <div className="work-copy">
                <p className="work-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <ul>{project.metrics.map((m) => <li key={m}>{m}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
