"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Case Studies", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Why Us", href: "#whychooseus", id: "whychooseus" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 16);

      // Home page ছাড়া active section দেখাবে না
      if (pathname !== "/") {
        setActive("");
        return;
      }

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollY = window.scrollY + 140;

      let current = "";

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const handleClick = (href: string) => {
    setMenuOpen(false);

    // Home page না হলে Home page-এ নিয়ে যাবে
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const el = document.querySelector(href);

    if (!el) return;

    const y =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      90;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`${styles.shell} ${compact ? styles.compact : ""}`}
      >
        <div className={`site-container ${styles.inner}`}>
          <button
            type="button"
            className={styles.brand}
            onClick={() => handleClick("#hero")}
          >
            Prime<span>Digitor</span>
          </button>

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.href)}
                className={`${styles.navPill} ${
                  pathname === "/" && active === item.id
                    ? styles.navPillActive
                    : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileDrawerWrap} ${
          menuOpen ? styles.mobileDrawerOpen : ""
        }`}
      >
        <div
          className={styles.mobileDrawerBackdrop}
          onClick={() => setMenuOpen(false)}
        />

        <aside className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerTop}>
            <div className={styles.brand}>
              Prime<span>Digitor</span>
            </div>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className={styles.mobileNavList}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.href)}
                className={`${styles.mobileNavItem} ${
                  pathname === "/" && active === item.id
                    ? styles.mobileNavItemActive
                    : ""
                }`}
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
