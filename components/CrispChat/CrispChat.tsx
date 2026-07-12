"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("05bcdaf5-41b9-45d0-a99d-605facf3485b");
  }, []);

  return null;
}
