"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Works", href: "#work", id: "work" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Stories", href: "#stories", id: "stories" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 16);
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollY = window.scrollY + 140;
      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActive(section.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav-shell ${compact ? "nav-shell-compact" : ""}`}>
        <div className="site-container nav-inner">
          <button className="brand" onClick={() => handleClick("#hero")}>
            Prime<span>Digitor</span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.href)}
                className={`nav-pill ${active === item.id ? "nav-pill-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer-wrap ${menuOpen ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />
        <aside className="mobile-drawer">
          <div className="mobile-drawer-top">
            <div className="brand">
              Prime<span>Digitor</span>
            </div>

            <button
              className="mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.href)}
                className={`mobile-nav-item ${active === item.id ? "mobile-nav-item-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
