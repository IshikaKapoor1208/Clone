"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
    const lenis = new Lenis({
      smoothWheel: false,
      smoothTouch: true,
      syncTouch: false,
      normalizeWheel: false,
      easing: easeOutQuart
    });

    lenis.on("scroll", ScrollTrigger.update);

    let lastWheelAt = 0;
    let lastDirection = 0;
    const WHEEL_STEP = 300;
    const WHEEL_GATE_MS = 110;

    const onWheel = (event) => {
      const direction = Math.sign(event.deltaY);
      if (!direction) {
        return;
      }

      const now = performance.now();
      if (direction === lastDirection && now - lastWheelAt < WHEEL_GATE_MS) {
        event.preventDefault();
        return;
      }

      lastWheelAt = now;
      lastDirection = direction;
      event.preventDefault();

      lenis.scrollTo(window.scrollY + direction * WHEEL_STEP, {
        duration: 1.25,
        easing: easeOutQuart
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("wheel", onWheel);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
