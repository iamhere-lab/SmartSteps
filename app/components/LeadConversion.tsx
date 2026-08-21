"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function LeadConversion() {
  useEffect(() => {
    // Event snippet for Submit lead form - IAH conversion page
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-948149620/dVQgCMXvtOUcEPS6jsQD",
        value: 1.0,
        currency: "INR",
      });
    } else {
      // gtag.js may still be loading (afterInteractive) — retry briefly
      const interval = setInterval(() => {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-948149620/dVQgCMXvtOUcEPS6jsQD",
            value: 1.0,
            currency: "INR",
          });
          clearInterval(interval);
        }
      }, 300);
      // Give up after 10s
      setTimeout(() => clearInterval(interval), 10000);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
}
