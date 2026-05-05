"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

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
  const clipId = useId();
  const baseY = 172;

  const skyline = (
    <svg
      viewBox="0 0 820 220"
      className="block h-auto w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`skyline-buildings-clip-${clipId}`}>
          <rect x="0" y="0" width="820" height={baseY} />
        </clipPath>
      </defs>

      <g>
        <path
          d={`M24 ${baseY}H780`}
          stroke="#d8b08a"
          strokeOpacity="0.42"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <g clipPath={`url(#skyline-buildings-clip-${clipId})`}>
          {skylineBuildings.map((building, index) => {
            const y = baseY - building.height;
            const buildingShape = (
              <>
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
              </>
            );

            if (prefersReducedMotion) {
              return <g key={building.x}>{buildingShape}</g>;
            }

            return (
              <motion.g
                key={building.x}
                initial={{ opacity: 0, y: 34, scaleY: 0.2 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{
                  delay: 0.18 + index * 0.1,
                  duration: 0.52,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
              >
                {buildingShape}
              </motion.g>
            );
          })}
        </g>

        <motion.path
          d="M20 178H784"
          stroke="#c46e3d"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeLinecap="round"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
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
      <div className="pointer-events-none absolute inset-x-0 bottom-[6px] h-px bg-[#c46e3d]/15" />
    </div>
  );
}
