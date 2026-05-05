"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

const skylineBuildings = [
  { x: 74, width: 56, height: 36, windows: 1 },
  { x: 134, width: 62, height: 58, windows: 2 },
  { x: 206, width: 50, height: 82, windows: 3 },
  { x: 262, width: 64, height: 44, windows: 1 },
  { x: 336, width: 72, height: 104, windows: 4 },
  { x: 416, width: 54, height: 54, windows: 2 },
  { x: 478, width: 64, height: 76, windows: 3 },
  { x: 550, width: 56, height: 40, windows: 1 },
  { x: 618, width: 70, height: 92, windows: 3 },
  { x: 700, width: 58, height: 52, windows: 2 },
];

function BuildingWindows({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  const rows = Math.max(1, Math.floor(height / 22));
  const cols = Math.max(1, Math.floor(width / 18));

  return (
    <>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, column) => {
          const windowX = x + 10 + column * 12;
          const windowY = y + 12 + row * 12;

          if (windowX > x + width - 12 || windowY > y + height - 12) {
            return null;
          }

          return (
            <line
              key={`${x}-${row}-${column}`}
              x1={windowX}
              y1={windowY}
              x2={windowX + 7}
              y2={windowY}
              stroke="#e6d4c4"
              strokeOpacity="0.85"
              strokeWidth="1"
              strokeLinecap="round"
            />
          );
        }),
      )}
    </>
  );
}

export default function AnimatedSkyline() {
  const prefersReducedMotion = useReducedMotion();
  const maskId = useId();
  const baseY = 172;
  const revealWidth = 820;

  const skyline = (
    <svg
      viewBox="0 0 820 220"
      className="block h-auto w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`skyline-glow-${maskId}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c46e3d" stopOpacity="0" />
          <stop offset="50%" stopColor="#c46e3d" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#c46e3d" stopOpacity="0" />
        </linearGradient>

        {!prefersReducedMotion ? (
          <mask
            id={`skyline-mask-${maskId}`}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width={revealWidth} height="220" fill="black" />
            <motion.rect
              x="0"
              y="0"
              width="0"
              height="220"
              fill="white"
              initial={{ width: 0 }}
              animate={{ width: revealWidth }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </mask>
        ) : null}
      </defs>

      <g mask={prefersReducedMotion ? undefined : `url(#skyline-mask-${maskId})`}>
        <path
          d={`M24 ${baseY}H780`}
          stroke="#d8b08a"
          strokeOpacity="0.42"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {skylineBuildings.map((building) => {
          const y = baseY - building.height;

          return (
            <g key={building.x}>
              <rect
                x={building.x}
                y={y}
                width={building.width}
                height={building.height}
                rx="0"
                stroke="#d8b08a"
                strokeOpacity="0.95"
                strokeWidth="1.15"
              />
              <BuildingWindows
                x={building.x}
                y={y}
                width={building.width}
                height={building.height}
              />
            </g>
          );
        })}

        <path
          d="M20 178H784"
          stroke="#c46e3d"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  if (prefersReducedMotion) {
    return <div className="relative overflow-hidden">{skyline}</div>;
  }

  return (
    <div className="relative overflow-hidden">
      {skyline}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 w-[24%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_32%,rgba(255,255,255,0.46)_50%,rgba(255,255,255,0.18)_68%,rgba(255,255,255,0)_100%)]"
        initial={{ x: "-140%" }}
        animate={{ x: "260%" }}
        transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-[6px] h-px bg-[#c46e3d]/15" />
    </div>
  );
}
