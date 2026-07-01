"use client";

import { useEffect } from "react";

export default function HashScroller() {
  useEffect(() => {
    if (!window.location.hash) return;

    const id = window.location.hash.substring(1);

    const el = document.getElementById(id);

    if (!el) return;

    setTimeout(() => {
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          90,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return null;
}
