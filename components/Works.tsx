"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    category:"Healthcare SEO + CRO",
    title:"Clinic growth engine built for local visibility and lead conversion.",
    text:"We restructured service pages, strengthened local SEO, refined page hierarchy and redesigned lead flows to turn search visibility into patient enquiries.",
    metrics:["+162% organic traffic","+58% form conversion","3 new service funnels"]
  },
  {
    category:"Lead Generation Campaigns",
    title:"Paid acquisition system with stronger CPL efficiency and better lead quality.",
    text:"From ad structure to landing pages and follow-up logic, the campaign stack was rebuilt around lower acquisition cost and higher lead intent.",
    metrics:["4.1x ROAS","-31% CPL","+93% qualified leads"]
  },
  {
    category:"Premium Website Redesign",
    title:"B2B brand site rebuilt to feel premium, trustworthy and conversion-focused.",
    text:"We tightened the narrative, improved hierarchy, upgraded the design language and created clearer decision paths for visitors.",
    metrics:["+44% engagement","+67% CTA clicks","Faster mobile UX"]
  }
];

export default function Works() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((prev)=>(prev+1)%projects.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" className="section section-work">
      <div className="site-container">
        <div className="section-head work-head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="section-title">A more editorial, premium case-study section with a distinct chapter feel.</h2>
            <p className="section-text">This section is intentionally styled to feel different from Services so users feel they have entered a new story layer.</p>
          </div>
          <div className="work-controls">
            <button className="work-btn" onClick={() => setActive((prev)=>(prev-1+projects.length)%projects.length)}><ArrowLeft className="h-5 w-5" /></button>
            <button className="work-btn" onClick={() => setActive((prev)=>(prev+1)%projects.length)}><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="work-stage premium-work-stage">
          {projects.map((project, index) => (
            <article key={project.title} className={`work-card premium-work-card ${index === active ? "work-card-active" : ""}`}>
              <div className="work-visual premium-work-visual">
                <div className="work-screen-shell">
                  <div className="work-screen-header"><span /><span /><span /></div>
                  <div className="work-screen-body">
                    <div className="work-ui-block large" />
                    <div className="work-ui-row"><div className="work-ui-block" /><div className="work-ui-block" /></div>
                    <div className="work-ui-row"><div className="work-ui-block small" /><div className="work-ui-block small" /><div className="work-ui-block small" /></div>
                  </div>
                </div>
              </div>

              <div className="work-copy premium-work-copy">
                <p className="work-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <ul>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
