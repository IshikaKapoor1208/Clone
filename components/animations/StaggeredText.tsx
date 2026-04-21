"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StaggeredTextProps = {
  children?: ReactNode;
  className?: string;
};

export default function StaggeredText({
  children,
  className = "",
}: StaggeredTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) {
      return undefined;
    }

    const animation = gsap.from(element, {
      y: 72,
      opacity: 0,
      filter: "blur(6px)",
      duration: 1.5,
      ease: "expo.out",
      paused: true,
      clearProps: "filter",
    });

    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 88%",
      once: true,
      onEnter: () => animation.play(),
    });

    ScrollTrigger.refresh();

    if (element.getBoundingClientRect().top <= window.innerHeight * 0.88) {
      animation.play();
      trigger.kill();
    }

    return () => {
      trigger.kill();
      animation.kill();
    };
  }, [children]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
