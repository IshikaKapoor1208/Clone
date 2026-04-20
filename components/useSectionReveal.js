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

<<<<<<< HEAD
=======
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

>>>>>>> 8a94f3366c507a229a6db82a92e677e4672e2cf2
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
<<<<<<< HEAD
    revealClassName: prefersReducedMotion
      ? "translate-y-0 opacity-100"
      : `transform-gpu transition duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`
=======
    revealClassName: `transform-gpu transition duration-700 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`,
>>>>>>> 8a94f3366c507a229a6db82a92e677e4672e2cf2
  };
}
