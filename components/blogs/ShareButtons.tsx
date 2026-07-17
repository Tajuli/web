"use client";

import { useState } from "react";
import styles from "./ShareButtons.module.css";

type Props = {
  title: string;
  url: string;
};

export default function ShareButtons({
  title,
  url,
}: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const nativeShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        url,
      });
    } catch {}
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        Share Article
      </span>

      <div className={styles.buttons}>
        <button type="button" aria-label="Share on Facebook" onClick={shareFacebook}>
          Facebook
        </button>

        <button type="button" aria-label="Share on LinkedIn" onClick={shareLinkedIn}>
          LinkedIn
        </button>

        <button type="button" aria-label="Share on X" onClick={shareTwitter}>
          X
        </button>

        {"share" in navigator && (
          <button type="button" aria-label="Share using your device" onClick={nativeShare}>
            Share
          </button>
        )}

        <button type="button" aria-label="Copy article link" onClick={copyLink}>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
