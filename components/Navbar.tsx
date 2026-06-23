"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Our Work" },
  { id: "process", label: "Process" },
  { id: "clients", label: "Clients" },
  { id: "stories", label: "Stories" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { threshold:[0.3,0.55,0.8], rootMargin:"-18% 0px -52% 0px" });

    sections.forEach((s)=>observer.observe(s));
    const onScroll = () => setCompact(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
    setOpen(false);
  };

  return (
    <>
      <header className={`nav-shell ${compact ? "nav-shell-compact" : ""}`}>
        <div className="site-container">
          <div className="nav-inner">
            <button onClick={() => go("hero")} className="brand">Prime<span>Digitor</span></button>

            <nav className="desktop-nav">
              {links.map((link) => (
                <button key={link.id} onClick={() => go(link.id)} className={`nav-pill ${active === link.id ? "nav-pill-active" : ""}`}>
                  {link.label}
                </button>
              ))}
            </nav>

            <button className="mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer-wrap ${open ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="mobile-drawer">
          <div className="mobile-drawer-top">
            <div className="brand">Prime<span>Digitor</span></div>
            <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mobile-nav-list">
            {links.map((link) => (
              <button key={link.id} onClick={() => go(link.id)} className={`mobile-nav-item ${active === link.id ? "mobile-nav-item-active" : ""}`}>
                {link.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
