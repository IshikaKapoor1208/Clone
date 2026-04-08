"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState(prefersReducedMotion ? "settled" : "drawing");

  const primaryPaths = useMemo(
    () => [
      "M18 698 L234 694 L304 690 L374 640 L468 538 L618 420 L762 354 L976 298 L1188 266 L1408 254 L1756 256",
      "M102 742 L412 742 L672 738 L960 724 L1266 718 L1718 714",
      "M516 202 L654 288 L760 380 L874 512 L930 620",
      "M858 184 L1068 166 L1272 176 L1498 208 L1696 250",
      "M1172 104 L1184 712",
      "M1414 126 L1426 716",
      "M1564 144 L1578 720",
      "M268 238 L276 716",
      "M418 274 L430 714",
      "M560 320 L572 710",
      "M706 374 L718 706",
      "M886 452 L898 702",
      "M1042 490 L1052 700",
      "M130 372 L284 360 L448 366 L652 388",
      "M836 356 L1130 350 L1438 364 L1664 386",
      "M944 458 L1206 452 L1468 460",
      "M952 540 L1198 536 L1464 546",
      "M942 620 L1186 616 L1450 626",
      "M712 486 L694 682",
      "M772 480 L756 682",
      "M832 478 L816 682",
      "M124 580 Q154 494 224 424",
      "M64 638 Q124 520 210 462",
      "M1524 692 Q1610 620 1702 540",
      "M1488 650 Q1580 562 1660 488"
    ],
    []
  );

  const detailPaths = useMemo(
    () => [
      "M0 116 L1800 116",
      "M0 240 L1800 240",
      "M0 362 L1800 362",
      "M0 484 L1800 484",
      "M0 606 L1800 606",
      "M0 728 L1800 728",
      "M0 850 L1800 850",
      "M72 0 L72 1200",
      "M198 0 L198 1200",
      "M324 0 L324 1200",
      "M450 0 L450 1200",
      "M576 0 L576 1200",
      "M702 0 L702 1200",
      "M828 0 L828 1200",
      "M954 0 L954 1200",
      "M1080 0 L1080 1200",
      "M1206 0 L1206 1200",
      "M1332 0 L1332 1200",
      "M1458 0 L1458 1200",
      "M1584 0 L1584 1200",
      "M1710 0 L1710 1200",
      "M238 228 L1682 228",
      "M142 820 L1656 820",
      "M292 186 L288 1080",
      "M1514 132 L1514 1070",
      "M468 544 L618 544",
      "M462 614 L610 614",
      "M450 682 L604 682",
      "M908 392 L906 720",
      "M966 388 L970 716",
      "M1028 382 L1032 714",
      "M1092 378 L1096 714",
      "M1202 322 L1462 322",
      "M1198 408 L1474 410",
      "M1188 494 L1486 498",
      "M1178 580 L1492 584",
      "M1168 666 L1496 670",
      "M208 176 L558 430",
      "M226 148 L610 460",
      "M1260 164 L1550 160",
      "M1268 174 L1558 178",
      "M1272 190 L1562 194",
      "M1276 206 L1564 212"
    ],
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setStage("settled");
      return undefined;
    }

    const zoomTimer = window.setTimeout(() => {
      setStage("zoomed");
    }, 2000);

    const settleTimer = window.setTimeout(() => {
      setStage("settled");
    }, 2800);

    return () => {
      window.clearTimeout(zoomTimer);
      window.clearTimeout(settleTimer);
    };
  }, [prefersReducedMotion]);

  const isZoomed = stage === "zoomed" || stage === "settled";
  const isSettled = stage === "settled";

  return (
    <section id="top" className="relative h-screen overflow-hidden bg-[#fcfbf8]">
      <motion.div
        className="absolute inset-0"
        animate={
          prefersReducedMotion
            ? { scale: 1, x: 0, y: 0 }
            : isSettled
              ? { scale: 1, x: "-18%", y: 0 }
              : isZoomed
                ? { scale: 1, x: 0, y: 0 }
                : { scale: 1.32, x: "-9%", y: "-4%" }
        }
        transition={{
          duration: isSettled ? 0.8 : 0.85,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(0,0,0,0.04),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(155,183,178,0.18),transparent_24%)]" />

        <svg
          viewBox="0 0 1800 1200"
          className="absolute left-1/2 top-1/2 h-[140vh] w-[140vw] -translate-x-1/2 -translate-y-1/2 md:h-[126vh] md:w-[126vw]"
          fill="none"
          aria-label="Architectural sketch in progress"
        >
          <g stroke="rgba(18,18,18,0.08)" strokeWidth="1">
            {Array.from({ length: 12 }).map((_, index) => (
              <line
                key={`h-${index}`}
                x1="0"
                y1={100 + index * 88}
                x2="1800"
                y2={100 + index * 88}
              />
            ))}
            {Array.from({ length: 16 }).map((_, index) => (
              <line
                key={`v-${index}`}
                x1={70 + index * 108}
                y1="0"
                x2={70 + index * 108}
                y2="1200"
              />
            ))}
          </g>

          <g stroke="rgba(26,24,24,0.18)" strokeWidth="1.1" strokeDasharray="8 12">
            <motion.path
              d="M236 226 L1684 226"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.15 }}
            />
            <motion.path
              d="M148 834 L1658 834"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.24 }}
            />
            <motion.path
              d="M296 154 L292 1086"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.35 }}
            />
            <motion.path
              d="M1516 136 L1516 1070"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.42 }}
            />
          </g>

          <g stroke="rgba(20,18,18,0.9)" strokeLinecap="round" strokeLinejoin="round">
            {primaryPaths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                strokeWidth={index < 8 ? 2.1 : 1.55}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.75,
                  ease: [0.4, 0, 0.2, 1],
                  delay: index * 0.045
                }}
              />
            ))}
          </g>

          <g stroke="rgba(20,18,18,0.58)" strokeLinecap="round" strokeLinejoin="round">
            {detailPaths.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                strokeWidth={0.95}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.55,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.018
                }}
              />
            ))}
          </g>

          <g stroke="rgba(20,18,18,0.44)" strokeLinecap="round" strokeLinejoin="round">
            {[
              "M188 208 L650 558",
              "M204 194 L742 598",
              "M654 422 L492 676",
              "M720 394 L556 694",
              "M930 688 L1700 322",
              "M946 704 L1714 356",
              "M772 356 L1108 646",
              "M828 332 L1162 618",
              "M1130 232 L1484 508",
              "M1112 214 L1462 474"
            ].map((path, index) => (
              <motion.path
                key={path}
                d={path}
                strokeWidth={0.9}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{
                  duration: 1.25,
                  ease: "easeOut",
                  delay: 0.1 + index * 0.065
                }}
              />
            ))}
          </g>

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.8 }}
          >
            <path
              d="M1288 258 L1742 258"
              stroke="rgba(18,18,18,0.82)"
              strokeWidth="1.2"
            />
            {Array.from({ length: 42 }).map((_, index) => (
              <line
                key={`hatch-top-${index}`}
                x1={1288 + index * 11}
                y1="258"
                x2={1298 + index * 11}
                y2="286"
                stroke="rgba(18,18,18,0.76)"
                strokeWidth="1"
              />
            ))}
            <path
              d="M322 566 L610 566"
              stroke="rgba(18,18,18,0.84)"
              strokeWidth="1.1"
            />
            {Array.from({ length: 30 }).map((_, index) => (
              <line
                key={`hatch-mid-${index}`}
                x1={322 + index * 9}
                y1="566"
                x2={336 + index * 9}
                y2="586"
                stroke="rgba(18,18,18,0.7)"
                strokeWidth="0.95"
              />
            ))}
            <rect
              x="1208"
              y="214"
              width="508"
              height="486"
              stroke="rgba(18,18,18,0.16)"
              strokeWidth="1.2"
            />
          </motion.g>
        </svg>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden md:block"
        initial={prefersReducedMotion ? { width: "50%" } : { width: "0%" }}
        animate={{ width: isSettled ? "50%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.96)_52%,#fbfaf7_100%)] backdrop-blur-[1px]" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 md:hidden"
        initial={prefersReducedMotion ? { height: "42svh" } : { height: "0svh" }}
        animate={{ height: isSettled ? "42svh" : "0svh" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.84)_48%,#fbfaf7_100%)]" />
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-6 right-6 z-20 overflow-hidden text-left md:bottom-10 md:left-auto md:right-10 md:max-w-[calc(50%-40px)] md:text-right"
        initial={
          prefersReducedMotion
            ? { opacity: 1, filter: "blur(0px)", y: 0 }
            : { opacity: 0, filter: "blur(4px)", y: 10 }
        }
        animate={
          isSettled
            ? { opacity: 1, filter: "blur(0px)", y: 0 }
            : { opacity: 0, filter: "blur(4px)", y: 10 }
        }
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="m-0 font-signature text-[clamp(2.8rem,11vw,4.8rem)] font-normal leading-[0.96] tracking-[0.03em] text-[#212020] md:whitespace-nowrap md:text-[clamp(3.2rem,5vw,6rem)]"
          initial={prefersReducedMotion ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          animate={isSettled ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Gaurav Patharey Architects
        </motion.h1>
      </motion.div>

      <a
        href="#index-section"
        className="group absolute bottom-6 right-6 z-20 text-[0.78rem] uppercase tracking-[0.22em] text-[rgba(33,32,32,0.55)] md:bottom-auto md:right-10 md:top-10"
      >
        Index
        <span className="mt-2 block h-px w-full origin-right bg-current transition-transform duration-200 group-hover:scale-x-[0.4]" />
      </a>
    </section>
  );
}
