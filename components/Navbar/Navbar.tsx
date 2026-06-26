"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Works", href: "#work", id: "work" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Stories", href: "#stories", id: "stories" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
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
      <header className={`${styles.shell} ${compact ? styles.compact : ""}`}>
        <div className={`site-container ${styles.inner}`}>
          <button className={styles.brand} onClick={() => handleClick("#hero")}>
            Prime<span>Digitor</span>
          </button>

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.href)}
                className={`${styles.navPill} ${active === item.id ? styles.navPillActive : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileDrawerWrap} ${menuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.mobileDrawerBackdrop} onClick={() => setMenuOpen(false)} />
        <aside className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerTop}>
            <div className={styles.brand}>Prime<span>Digitor</span></div>
            <button className={styles.mobileClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <div className={styles.mobileNavList}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.href)}
                className={`${styles.mobileNavItem} ${active === item.id ? styles.mobileNavItemActive : ""}`}
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
