"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type AnimatedHeroNameProps = {
  firstLine: string;
  secondLine: string;
  className?: string;
};

function splitCharacters(text: string) {
  return text.split("").map((character, index) => ({
    character,
    key: `${character}-${index}`,
  }));
}

export default function AnimatedHeroName({
  firstLine,
  secondLine,
  className = "",
}: AnimatedHeroNameProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const firstLineChars = useMemo(() => splitCharacters(firstLine), [firstLine]);
  const secondLineChars = useMemo(() => splitCharacters(secondLine), [secondLine]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const chars = Array.from(container.querySelectorAll("[data-hero-char]"));
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(chars, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });
      return undefined;
    }

    const tween = gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 18,
        scale: 0.9,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: {
          each: 0.035,
          from: "center",
        },
        delay: 0.15,
      },
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <h1
      ref={containerRef}
      className={`font-signature text-[clamp(2.35rem,11vw,7.5rem)] leading-[0.9] tracking-[0.02em] text-[#b24e1f] ${className}`}
    >
      <span className="block">
        {firstLineChars.map(({ character, key }) => (
          <span
            key={key}
            data-hero-char
            className={character === " " ? "inline-block w-[0.32em]" : "inline-block"}
          >
            {character}
          </span>
        ))}
      </span>
      <span className="mt-2.5 block text-[clamp(2rem,8.8vw,6.4rem)]">
        {secondLineChars.map(({ character, key }) => (
          <span
            key={key}
            data-hero-char
            className={character === " " ? "inline-block w-[0.32em]" : "inline-block"}
          >
            {character}
          </span>
        ))}
      </span>
    </h1>
  );
}
