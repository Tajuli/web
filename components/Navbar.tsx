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
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const setCurrentSection = () => {
      const scrollY = window.scrollY;
      const navOffset = 140; // sticky navbar height + top breathing room

      let current = sectionIds[0];

      for (const section of sections) {
        const top = section.offsetTop - navOffset;
        if (scrollY >= top) {
          current = section.id;
        }
      }

      setActive(current);
    };

    // Initial check
    setCurrentSection();

    const onScroll = () => {
      setCompact(window.scrollY > 20);
      setCurrentSection();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setCurrentSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setCurrentSection);
    };
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <header className={`nav-shell ${compact ? "nav-shell-compact" : ""}`}>
        <div className="site-container">
          <div className="nav-inner">
            <button onClick={() => go("hero")} className="brand">
              Prime<span>Digitor</span>
            </button>

            <nav className="desktop-nav">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`nav-pill ${active === link.id ? "nav-pill-active" : ""}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer-wrap ${open ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)} />
        <aside className="mobile-drawer">
          <div className="mobile-drawer-top">
            <div className="brand">
              Prime<span>Digitor</span>
            </div>
            <button
              className="mobile-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mobile-nav-list">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`mobile-nav-item ${
                  active === link.id ? "mobile-nav-item-active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
