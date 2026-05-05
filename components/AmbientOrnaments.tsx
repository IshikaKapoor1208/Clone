"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useReducedMotion from "./useReducedMotion";

type CSSVars = CSSProperties & {
  [key: `--${string}`]: string | number;
};

export default function AmbientOrnaments() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const dotPositions = [
    { x: 126, y: 226, delay: 0 },
    { x: 158, y: 226, delay: 0.12 },
    { x: 190, y: 226, delay: 0.24 },
    { x: 222, y: 226, delay: 0.36 },
    { x: 254, y: 226, delay: 0.48 },
    { x: 126, y: 258, delay: 0.08 },
    { x: 158, y: 258, delay: 0.2 },
    { x: 190, y: 258, delay: 0.32 },
    { x: 222, y: 258, delay: 0.44 },
    { x: 254, y: 258, delay: 0.56 },
    { x: 126, y: 290, delay: 0.16 },
    { x: 158, y: 290, delay: 0.28 },
    { x: 190, y: 290, delay: 0.4 },
    { x: 222, y: 290, delay: 0.52 },
    { x: 254, y: 290, delay: 0.64 },
  ];

  useEffect(() => {
    const root = rootRef.current;

    if (!root || prefersReducedMotion || typeof window === "undefined") {
      return undefined;
    }

    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canTrackPointer) {
      return undefined;
    }

    let rafId = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const apply = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      root.style.setProperty("--ambient-x", currentX.toFixed(4));
      root.style.setProperty("--ambient-y", currentY.toFixed(4));

      const settled = Math.abs(targetX - currentX) < 0.0005 && Math.abs(targetY - currentY) < 0.0005;

      if (!settled) {
        rafId = window.requestAnimationFrame(apply);
      } else {
        rafId = 0;
      }
    };

    const requestApply = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(apply);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      requestApply();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      requestApply();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [prefersReducedMotion]);

  const wrapperStyle: CSSVars = {
    "--ambient-x": 0,
    "--ambient-y": 0,
  };

  return (
    <div
      ref={rootRef}
      className="ambient-ornaments pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
      style={wrapperStyle}
    >
      <div
        className="ambient-ornament ambient-ornament--lines ambient-ornament--left"
        style={
          {
            "--parallax-x": 16,
            "--parallax-y": 10,
          } as CSSVars
        }
      >
        <div className="ambient-ornament__drift ambient-ornament__drift--lines">
          <div className="ambient-ornament__parallax">
            <svg viewBox="0 0 420 980" fill="none" aria-hidden="true">
              <g stroke="#a86a41" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 176 L204 90 L204 784" strokeWidth="1.3" />
                <path d="M18 176 L18 968 L204 784" strokeWidth="1.3" />
                <path d="M204 545 L297 492" strokeWidth="1.05" />
                <path d="M18 968 L204 784 L362 858" strokeWidth="1.05" />
                <path d="M18 968 L18 858" strokeWidth="1.05" />
                <path d="M18 868 L362 858" strokeWidth="0.95" />
                <path d="M68 802 L362 858" strokeWidth="0.95" />
              </g>
              <g stroke="#b27a50" strokeWidth="0.95" strokeLinecap="round">
                {Array.from({ length: 20 }).map((_, index) => {
                  const x = 74 + index * 13.4;
                  const topY = 808 + index * 3.6;

                  return <line key={`left-line-beam-${index}`} x1={x} y1={topY} x2={x} y2={980} />;
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="ambient-ornament ambient-ornament--circle ambient-ornament--right"
        style={
          {
            "--parallax-x": 14,
            "--parallax-y": 12,
          } as CSSVars
        }
      >
        <div className="ambient-ornament__drift ambient-ornament__drift--circle">
          <div className="ambient-ornament__parallax">
            <motion.svg
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
              initial={{ rotate: -2, scale: 0.985, opacity: 0 }}
              animate={{
                rotate: [0, 1.5, -1, 0],
                scale: [0.985, 1, 0.993, 0.985],
                opacity: 1,
              }}
              transition={{
                rotate: { duration: 36, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.7, ease: "easeOut" },
              }}
            >
              <motion.circle
                cx="200"
                cy="200"
                r="168"
                stroke="#c46e3d"
                strokeOpacity="0.2"
                strokeWidth="1.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.14, 0.22, 0.16, 0.22],
                }}
                transition={{
                  pathLength: { duration: 1.2, ease: "easeInOut" },
                  opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="126"
                stroke="#c46e3d"
                strokeOpacity="0.08"
                strokeWidth="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.05, 0.1, 0.07, 0.1],
                }}
                transition={{
                  pathLength: { duration: 1.05, ease: "easeInOut", delay: 0.08 },
                  opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <g>
                {dotPositions.map((dot, index) => (
                  <motion.circle
                    key={`${dot.x}-${dot.y}`}
                    cx={dot.x}
                    cy={dot.y}
                    r="1.7"
                    fill="#c46e3d"
                    fillOpacity="0.78"
                    animate={{
                      y: [0, -2, 0],
                      opacity: [0.45, 1, 0.55, 1],
                      scale: [0.88, 1, 0.94, 0.88],
                    }}
                    transition={{
                      duration: 4.5 + (index % 5) * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: dot.delay,
                    }}
                  />
                ))}
              </g>
            </motion.svg>
          </div>
        </div>
      </div>

      <div
        className="ambient-ornament ambient-ornament--lines ambient-ornament--right-bottom"
        style={
          {
            "--parallax-x": 10,
            "--parallax-y": 8,
          } as CSSVars
        }
      >
        <div className="ambient-ornament__drift ambient-ornament__drift--lines ambient-ornament__drift--reverse">
          <div className="ambient-ornament__parallax">
            <svg viewBox="0 0 420 420" fill="none" aria-hidden="true">
              <g stroke="#a86a41" strokeLinecap="round" strokeLinejoin="round">
                <path d="M34 88 L196 28 L346 96" strokeWidth="1.1" />
                <path d="M24 94 L24 302 L184 356" strokeWidth="1.05" />
                <path d="M126 250 L278 214" strokeWidth="0.92" />
                <path d="M186 356 L346 298" strokeWidth="0.92" />
              </g>
              <g stroke="#b27a50" strokeWidth="0.85" strokeLinecap="round">
                {Array.from({ length: 10 }).map((_, index) => {
                  const x = 54 + index * 23.5;
                  const topY = 158 + index * 6.5;

                  return <line key={`right-line-beam-${index}`} x1={x} y1={topY} x2={x} y2={384} />;
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="ambient-ornament ambient-ornament--circle ambient-ornament--left-bottom"
        style={
          {
            "--parallax-x": 8,
            "--parallax-y": 10,
          } as CSSVars
        }
      >
        <div className="ambient-ornament__drift ambient-ornament__drift--small-circle">
          <div className="ambient-ornament__parallax">
            <svg viewBox="0 0 240 240" fill="none" aria-hidden="true">
              <circle cx="120" cy="120" r="82" stroke="#c46e3d" strokeOpacity="0.16" strokeWidth="1" />
              <circle cx="120" cy="120" r="54" stroke="#c46e3d" strokeOpacity="0.08" strokeWidth="0.75" />
              <path d="M120 42 A78 78 0 0 1 198 120" stroke="#c46e3d" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
