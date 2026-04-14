"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useReducedMotion } from "framer-motion";
import useSectionReveal from "./useSectionReveal";

const houseLines = [
  {
    id: "roof-left",
    from: { x1: 120, y1: 660, x2: 460, y2: 210 },
    to: { x1: 300, y1: 560, x2: 760, y2: 260 },
    strokeWidth: 2.4,
    delay: 0.06
  },
  {
    id: "roof-right",
    from: { x1: 1680, y1: 170, x2: 1120, y2: 600 },
    to: { x1: 760, y1: 260, x2: 1290, y2: 340 },
    strokeWidth: 2.4,
    delay: 0.12
  },
  {
    id: "wall-left",
    from: { x1: 500, y1: 140, x2: 520, y2: 840 },
    to: { x1: 430, y1: 560, x2: 430, y2: 890 },
    strokeWidth: 2.1,
    delay: 0.22
  },
  {
    id: "wall-right",
    from: { x1: 1500, y1: 110, x2: 1460, y2: 890 },
    to: { x1: 1190, y1: 340, x2: 1190, y2: 890 },
    strokeWidth: 2.1,
    delay: 0.28
  },
  {
    id: "base-front",
    from: { x1: 80, y1: 860, x2: 1540, y2: 780 },
    to: { x1: 430, y1: 890, x2: 1190, y2: 890 },
    strokeWidth: 2.3,
    delay: 0.36
  },
  {
    id: "base-depth",
    from: { x1: 420, y1: 930, x2: 1700, y2: 890 },
    to: { x1: 1190, y1: 890, x2: 1460, y2: 790 },
    strokeWidth: 1.8,
    delay: 0.42
  },
  {
    id: "roof-depth",
    from: { x1: 980, y1: 80, x2: 1580, y2: 140 },
    to: { x1: 1290, y1: 340, x2: 1460, y2: 300 },
    strokeWidth: 1.8,
    delay: 0.5
  },
  {
    id: "back-wall",
    from: { x1: 1410, y1: 180, x2: 1490, y2: 720 },
    to: { x1: 1460, y1: 300, x2: 1460, y2: 790 },
    strokeWidth: 1.7,
    delay: 0.56
  },
  {
    id: "door-left",
    from: { x1: 760, y1: 330, x2: 710, y2: 930 },
    to: { x1: 700, y1: 650, x2: 700, y2: 890 },
    strokeWidth: 1.7,
    delay: 0.66
  },
  {
    id: "door-right",
    from: { x1: 980, y1: 350, x2: 930, y2: 910 },
    to: { x1: 880, y1: 650, x2: 880, y2: 890 },
    strokeWidth: 1.7,
    delay: 0.7
  },
  {
    id: "door-top",
    from: { x1: 630, y1: 560, x2: 1030, y2: 510 },
    to: { x1: 700, y1: 650, x2: 880, y2: 650 },
    strokeWidth: 1.7,
    delay: 0.74
  },
  {
    id: "window-top",
    from: { x1: 980, y1: 430, x2: 1360, y2: 400 },
    to: { x1: 950, y1: 520, x2: 1120, y2: 520 },
    strokeWidth: 1.4,
    delay: 0.84
  },
  {
    id: "window-bottom",
    from: { x1: 980, y1: 600, x2: 1360, y2: 560 },
    to: { x1: 950, y1: 650, x2: 1120, y2: 650 },
    strokeWidth: 1.4,
    delay: 0.88
  },
  {
    id: "window-left",
    from: { x1: 1040, y1: 380, x2: 1020, y2: 780 },
    to: { x1: 950, y1: 520, x2: 950, y2: 650 },
    strokeWidth: 1.4,
    delay: 0.92
  },
  {
    id: "window-right",
    from: { x1: 1260, y1: 360, x2: 1240, y2: 770 },
    to: { x1: 1120, y1: 520, x2: 1120, y2: 650 },
    strokeWidth: 1.4,
    delay: 0.96
  }
];

const guideLines = [
  { id: "g-1", x1: 0, y1: 170, x2: 1800, y2: 170 },
  { id: "g-2", x1: 0, y1: 340, x2: 1800, y2: 340 },
  { id: "g-3", x1: 0, y1: 510, x2: 1800, y2: 510 },
  { id: "g-4", x1: 0, y1: 680, x2: 1800, y2: 680 },
  { id: "g-5", x1: 0, y1: 850, x2: 1800, y2: 850 },
  { id: "g-6", x1: 170, y1: 0, x2: 170, y2: 1200 },
  { id: "g-7", x1: 500, y1: 0, x2: 500, y2: 1200 },
  { id: "g-8", x1: 830, y1: 0, x2: 830, y2: 1200 },
  { id: "g-9", x1: 1160, y1: 0, x2: 1160, y2: 1200 },
  { id: "g-10", x1: 1490, y1: 0, x2: 1490, y2: 1200 }
];

const draftingLines = [
  "M90 230 L560 640",
  "M140 210 L600 610",
  "M660 310 L1220 860",
  "M760 270 L1320 790",
  "M1210 250 L1600 600",
  "M1240 230 L1640 570",
  "M320 900 L720 260",
  "M1240 860 L1760 620"
];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { sectionRef, revealClassName } = useSectionReveal();
  const heroSketchRef = useRef(null);
  const headingRef = useRef(null);
  const hasAnimatedHeading = useRef(false);
  const hasAnimatedHeroSketch = useRef(false);
  const heroName = "Gaurav Datharey Architects";
  const heroNameCharacters = [...heroName];

  useEffect(() => {
    if (!headingRef.current || hasAnimatedHeading.current) {
      return undefined;
    }

    hasAnimatedHeading.current = true;

    const context = gsap.context(() => {
      const characters = gsap.utils.toArray(".hero-heading-character");

      if (prefersReducedMotion) {
        gsap.set(characters, { opacity: 1, scaleX: 1 });
        return;
      }

      gsap.fromTo(
        characters,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "center center",
          duration: 0.4,
          ease: "power2.out",
          delay: 1.45,
          stagger: {
            each: 0.04,
            from: "edges"
          }
        }
      );
    }, headingRef);

    return () => context.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!heroSketchRef.current || hasAnimatedHeroSketch.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(heroSketchRef.current, { scale: 1, opacity: 1 });
        return;
      }

      const animation = gsap.fromTo(
        heroSketchRef.current,
        { scale: 3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.35
        }
      );

      return () => animation.kill();
    }, heroSketchRef);

    hasAnimatedHeroSketch.current = true;

    return () => {
      context.revert();
      hasAnimatedHeroSketch.current = false;
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-[#f7f4ee] ${revealClassName}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.68))]" />

      <div className="absolute left-4 top-1/2 h-[62vh] w-[76vw] -translate-y-1/2 md:left-10 md:h-[68vh] md:w-[54vw] lg:left-20 lg:w-[48vw]">
        <div
          ref={heroSketchRef}
          className="absolute inset-0 opacity-0"
        >
          <Image
            src="/sketch-3.webp"
            alt="Minimal architectural perspective sketch of a modern residence"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center grayscale"
          />
        </div>
        <svg
          viewBox="0 0 1800 1200"
          className="hidden"
          fill="none"
          aria-label="Architectural line sketch forming a house"
        >
          <g stroke="rgba(25,24,22,0.08)" strokeWidth="1">
            {Array.from({ length: 18 }).map((_, index) => (
              <line
                key={`grid-v-${index}`}
                x1={70 + index * 94}
                y1="0"
                x2={70 + index * 94}
                y2="1200"
              />
            ))}
            {Array.from({ length: 13 }).map((_, index) => (
              <line
                key={`grid-h-${index}`}
                x1="0"
                y1={85 + index * 92}
                x2="1800"
                y2={85 + index * 92}
              />
            ))}
          </g>

          <g stroke="rgba(25,24,22,0.18)" strokeWidth="1.05">
            {guideLines.map((line, index) => (
              <motion.line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: index * 0.04 }}
              />
            ))}
          </g>

          <g stroke="rgba(25,24,22,0.2)" strokeWidth="1">
            {draftingLines.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.95 }}
                transition={{ duration: 1.05, ease: "easeOut", delay: 0.2 + index * 0.08 }}
              />
            ))}
          </g>

          <g stroke="rgba(25,24,22,0.92)" strokeLinecap="round" strokeLinejoin="round">
            {houseLines.map((line) => (
              <motion.line
                key={line.id}
                strokeWidth={line.strokeWidth}
                initial={prefersReducedMotion ? false : { ...line.from, opacity: 0 }}
                animate={{ ...line.to, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: line.delay,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
              />
            ))}
          </g>

          <motion.g
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <path
              d="M1340 744 L1600 648"
              stroke="rgba(25,24,22,0.6)"
              strokeWidth="1.1"
            />
            <path
              d="M1290 340 L1460 300"
              stroke="rgba(25,24,22,0.45)"
              strokeWidth="1"
              strokeDasharray="10 12"
            />
            <path
              d="M430 560 L1190 340"
              stroke="rgba(25,24,22,0.26)"
              strokeWidth="1"
              strokeDasharray="7 10"
            />
          </motion.g>
        </svg>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-[48svh] bg-[linear-gradient(180deg,rgba(247,244,238,0)_0%,rgba(247,244,238,0.86)_48%,#f7f4ee_100%)] md:right-0 md:left-auto md:h-full md:w-[44%] md:bg-[linear-gradient(90deg,rgba(247,244,238,0)_0%,rgba(247,244,238,0.9)_26%,#f7f4ee_100%)]"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.4 }}
      />

      <motion.div
        className="relative z-10 flex min-h-screen items-end px-4 pb-8 pt-24 md:items-end md:justify-end md:px-10 md:pb-12 lg:px-20"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.45 }}
      >
        <div className="w-full max-w-[58rem] text-left md:ml-auto md:max-w-[42rem] md:translate-y-6 md:text-right">
          <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(33,32,32,0.55)] md:text-[0.72rem] md:tracking-[0.34em]">
            Architectural Motion Study
          </p>
          <div className="flex md:justify-end">
            <h1
              ref={headingRef}
              className="m-0 overflow-visible font-signature text-[2rem] font-normal leading-[0.95] tracking-[0.03em] text-[#212020] md:text-[3.2rem] lg:text-[4.2rem]"
            >
              {heroNameCharacters.map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  className="hero-heading-character inline-block opacity-0"
                >
                  {character === " " ? "\u00A0" : character}
                </span>
              ))}
            </h1>
          </div>
          <p className="mt-5 max-w-[34rem] text-sm leading-7 text-[rgba(33,32,32,0.7)] md:ml-auto md:text-[0.98rem]">
            Thin drafting lines move from abstract positions into a simple house
            structure, creating the illusion that the architecture is being
            discovered in real time.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
