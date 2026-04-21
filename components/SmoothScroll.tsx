"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
