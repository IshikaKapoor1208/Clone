"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedHeroCircle() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.svg
        className="absolute right-[-9vw] top-[10%] h-[28vw] w-[28vw] max-h-[340px] max-w-[340px] opacity-60 sm:right-[-8vw] md:right-[-6vw] md:top-[11%] md:h-[26vw] md:w-[26vw] lg:right-[-4vw]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="168"
          stroke="#c46e3d"
          strokeOpacity="0.22"
          strokeWidth="1.1"
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      className="absolute right-[-9vw] top-[10%] h-[28vw] w-[28vw] max-h-[340px] max-w-[340px] opacity-60 sm:right-[-8vw] md:right-[-6vw] md:top-[11%] md:h-[26vw] md:w-[26vw] lg:right-[-4vw]"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.94, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
    >
      <motion.circle
        cx="200"
        cy="200"
        r="168"
        stroke="#c46e3d"
        strokeOpacity="0.22"
        strokeWidth="1.1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: "easeInOut", delay: 0.28 }}
      />
    </motion.svg>
  );
}
