"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
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

  useLayoutEffect(() => {
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
        color: "#ffffff",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        color: "#b24e1f",
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
      className={`font-signature text-[3.1rem] leading-[0.88] tracking-[0.02em] text-[#b24e1f] min-[390px]:text-[3.55rem] sm:text-[5.35rem] md:text-[clamp(2.8rem,12vw,8rem)] md:leading-[0.9] ${className}`}
    >
      <span className="block">
        {firstLineChars.map(({ character, key }) => (
          <span
            key={key}
            data-hero-char
            className={character === " " ? "inline-block w-[0.32em] whitespace-nowrap opacity-0" : "inline-block whitespace-nowrap opacity-0"}
          >
            {character}
          </span>
        ))}
      </span>
      <span className="mt-2.5 block whitespace-nowrap text-[2.65rem] min-[390px]:text-[3.05rem] sm:text-[4.6rem] md:text-[clamp(2.45rem,9.6vw,7rem)]">
        {secondLineChars.map(({ character, key }) => (
          <span
            key={key}
            data-hero-char
            className={character === " " ? "inline-block w-[0.32em] whitespace-nowrap opacity-0" : "inline-block whitespace-nowrap opacity-0"}
          >
            {character}
          </span>
        ))}
      </span>
    </h1>
  );
}
