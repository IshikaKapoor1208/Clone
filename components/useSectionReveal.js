"use client";

import { useEffect, useRef, useState } from "react";

export default function useSectionReveal() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.25
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return {
    sectionRef,
    revealClassName: `transform-gpu transition duration-700 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`
  };
}
