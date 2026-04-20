"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

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

    const split = new SplitType(element, { types: "lines" });
    const lines = split.lines || [];

    if (!lines.length) {
      return () => {
        split.revert();
      };
    }

    lines.forEach((line) => {
      const wrapper = document.createElement("div");

      // Clip each line to keep the upward movement hidden before reveal.
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "block";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      line.style.display = "block";
      line.style.willChange = "transform, opacity";
    });

    const animation = gsap.from(lines, {
      y: 72,
      opacity: 0,
      filter: "blur(6px)",
      stagger: 0.2,
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
      split.revert();
    };
  }, [children]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
