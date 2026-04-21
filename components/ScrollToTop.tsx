"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration feature
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return null;
}
