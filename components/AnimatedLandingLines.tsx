"use client";

import { motion, useReducedMotion } from "framer-motion";

const primaryPaths = [
  { d: "M18 176 L204 90 L204 784", strokeWidth: 1.3, delay: 0.05 },
  { d: "M18 176 L18 968 L204 784", strokeWidth: 1.3, delay: 0.16 },
  { d: "M204 545 L297 492", strokeWidth: 1.05, delay: 0.28 },
  { d: "M18 968 L204 784 L362 858", strokeWidth: 1.05, delay: 0.4 },
  { d: "M18 968 L18 858", strokeWidth: 1.05, delay: 0.52 },
  { d: "M18 868 L362 858", strokeWidth: 0.95, delay: 0.66 },
  { d: "M68 802 L362 858", strokeWidth: 0.95, delay: 0.78 },
];

const beamCount = 20;
const primaryStroke = "#a86a41";
const secondaryStroke = "#b27a50";

export default function AnimatedLandingLines() {
  const prefersReducedMotion = useReducedMotion();
  const slowDrift = {
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };
  const beamDrift = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  if (prefersReducedMotion) {
    return (
      <svg
        className="absolute left-[-21vw] top-[10%] h-[74%] w-[40vw] min-w-[160px] max-w-[380px] opacity-50 sm:left-[-17vw] sm:opacity-60 md:left-[-9vw] md:w-[30vw] md:opacity-65 lg:left-[-7vw]"
        viewBox="0 0 420 980"
        fill="none"
        aria-hidden="true"
      >
        <g stroke={primaryStroke} strokeLinecap="round" strokeLinejoin="round">
          {primaryPaths.slice(0, 5).map((item) => (
            <path key={item.d} d={item.d} strokeWidth={item.strokeWidth} />
          ))}
        </g>
        <g stroke={secondaryStroke} strokeWidth="0.95" strokeLinecap="round">
          {Array.from({ length: beamCount }).map((_, index) => {
            const x = 74 + index * 13.4;
            const topY = 808 + index * 3.6;
            return <line key={`beam-${index}`} x1={x} y1={topY} x2={x} y2={980} />;
          })}
          {primaryPaths.slice(5).map((item) => (
            <path key={item.d} d={item.d} />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <motion.svg
      className="absolute left-[-21vw] top-[10%] h-[74%] w-[40vw] min-w-[160px] max-w-[380px] opacity-50 sm:left-[-17vw] sm:opacity-60 md:left-[-9vw] md:w-[30vw] md:opacity-65 lg:left-[-7vw]"
      viewBox="0 0 420 980"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 2, -1, 0],
        y: [0, -4, 0],
        rotate: [0, -0.12, 0.08, 0],
      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: 0.6, ease: "easeOut" },
        x: slowDrift,
        y: { ...slowDrift, duration: 11 },
        rotate: { ...slowDrift, duration: 18 },
      }}
    >
      <g stroke={primaryStroke} strokeLinecap="round" strokeLinejoin="round">
        {primaryPaths.slice(0, 5).map((item) => (
          <motion.path
            key={item.d}
            d={item.d}
            strokeWidth={item.strokeWidth}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.05,
              ease: "easeInOut",
              delay: item.delay,
            }}
          />
        ))}
      </g>

      <g stroke={secondaryStroke} strokeWidth="0.95" strokeLinecap="round">
        {Array.from({ length: beamCount }).map((_, index) => {
          const x = 74 + index * 13.4;
          const topY = 808 + index * 3.6;

          return (
            <motion.line
              key={`beam-${index}`}
              x1={x}
              y1={topY}
              x2={x}
              y2={980}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0, 1, 0.88, 1],
                y: [0, -1.2, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.72 + index * 0.03,
                opacity: {
                  duration: 9.5 + index * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.72 + index * 0.03,
                },
                y: {
                  ...beamDrift,
                  delay: index * 0.06,
                },
              }}
            />
          );
        })}

        {primaryPaths.slice(5).map((item) => (
          <motion.path
            key={item.d}
            d={item.d}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 1, 0.9, 1],
              x: [0, 1.2, 0],
              y: [0, -0.9, 0],
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: item.delay,
              opacity: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              x: {
                ...slowDrift,
                duration: 16,
                delay: item.delay,
              },
              y: {
                ...slowDrift,
                duration: 13,
                delay: item.delay,
              },
            }}
          />
        ))}
      </g>
    </motion.svg>
  );
}
