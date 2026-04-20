"use client";

import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

export default function useSectionReveal() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

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
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return {
    sectionRef,
    revealClassName: prefersReducedMotion
      ? "translate-y-0 opacity-100"
      : `transform-gpu transition duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`,
  };
}
