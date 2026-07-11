"use client";

import { MessageCircle } from "lucide-react";
import styles from "./FloatingChat.module.css";

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

export default function FloatingChat() {
  const openChat = () => {
  if (window.Tawk_API) {
    window.Tawk_API.showWidget();
    window.Tawk_API.maximize();
  }
};

  return (
    <button
      className={styles.chatButton}
      onClick={openChat}
      aria-label="Live Chat"
    >
      <span className={styles.online}></span>

      <MessageCircle size={28} strokeWidth={2.2} />

      <span className={styles.tooltip}>
        Chat with us
      </span>
    </button>
  );
}
