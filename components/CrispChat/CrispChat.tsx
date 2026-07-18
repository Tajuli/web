"use client";

import { useEffect } from "react";

const CRISP_WEBSITE_ID = "05bcdaf5-41b9-45d0-a99d-605facf3485b";

export default function CrispChat() {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleCallbackId: number | undefined;
    let cancelled = false;

    const loadCrisp = async () => {
      if (cancelled) return;
      cleanupTriggers();

      const { Crisp } = await import("crisp-sdk-web");
      if (!cancelled) {
        Crisp.configure(CRISP_WEBSITE_ID);
      }
    };

    const scheduleIdleLoad = () => {
      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(loadCrisp, { timeout: 5000 });
      } else {
        timeoutId = globalThis.setTimeout(loadCrisp, 3500);
      }
    };

    const cleanupTriggers = () => {
      window.removeEventListener("pointerdown", loadCrisp);
      window.removeEventListener("keydown", loadCrisp);
      window.removeEventListener("scroll", loadCrisp);
    };

    window.addEventListener("pointerdown", loadCrisp, { once: true, passive: true });
    window.addEventListener("keydown", loadCrisp, { once: true });
    window.addEventListener("scroll", loadCrisp, { once: true, passive: true });
    scheduleIdleLoad();

    return () => {
      cancelled = true;
      cleanupTriggers();
      if (timeoutId) globalThis.clearTimeout(timeoutId);
      if (idleCallbackId) window.cancelIdleCallback(idleCallbackId);
    };
  }, []);

  return null;
}
