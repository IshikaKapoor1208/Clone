"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useSectionReveal from "./useSectionReveal";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const HERO_VIDEO_PLAYBACK_RATE = 1.35;

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { sectionRef, revealClassName } = useSectionReveal();
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) {
      return undefined;
    }

    const applyPlaybackRate = () => {
      video.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
    };

    applyPlaybackRate();
    video.addEventListener("loadedmetadata", applyPlaybackRate);
    video.addEventListener("play", applyPlaybackRate);

    return () => {
      video.removeEventListener("loadedmetadata", applyPlaybackRate);
      video.removeEventListener("play", applyPlaybackRate);
    };
  }, []);

  const [isVideoExpanded, setIsVideoExpanded] = useState(true);
  const [playReveal, setPlayReveal] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVideoExpanded(false);
      setPlayReveal(true);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!playReveal) return;

    gsap.registerPlugin(SplitText);

    // Make the text container visible right before GSAP children animation
    if (textContainerRef.current)
      gsap.set(textContainerRef.current, { opacity: 1 });

    const split = new SplitText(textContainerRef.current, { type: "chars" });

    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        opacity: 0.1,
        scale: 0.8,
        filter: "blur(4px)",
        stagger: { each: 0.06, from: "center" },
        duration: 0.4,
        ease: "power2.out",
        delay: 0.1,
      });
    });

    return () => {
      split.revert();
      ctx.revert();
    };
  }, [playReveal, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-white ${revealClassName}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-[96rem] grid-cols-1 px-4 pb-8 pt-24 md:px-10 md:pb-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-0 lg:px-16 lg:pt-20">
        <div className="relative h-[54vh] w-full md:h-[62vh] lg:h-[78vh]">
          <motion.div
            layout
            className={`hero-video-feather overflow-hidden bg-[#212121] origin-center ${
              isVideoExpanded && !prefersReducedMotion
                ? "fixed inset-0 z-50 rounded-none border-none"
                : "absolute inset-0 border border-black/10"
            }`}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            onLayoutAnimationComplete={() => {
              if (!isVideoExpanded && !prefersReducedMotion) {
                setPlayReveal(true);
              }
            }}
          >
            <motion.video
              layout
              ref={heroVideoRef}
              className="h-full w-full object-cover object-center grayscale"
              src="/vid3.mp4"
              poster="/vid3-poster.jpg"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={(event) => {
                const video = event.currentTarget;
                video.pause();
                video.currentTime = Math.max(video.duration - 0.03, 0);
                setIsVideoExpanded(false);
              }}
              aria-hidden="true"
            />
            <motion.div layout className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.14))]" />
          </motion.div>
        </div>

        <motion.div
          className="flex items-end pb-8 md:pb-10 lg:border-l lg:border-black/10 lg:pb-14 lg:pl-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={
            prefersReducedMotion || playReveal
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
          }
          transition={{ duration: 0.68, ease: "easeOut" }}
        >
          <div className="max-w-[31rem]">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/52 md:text-[0.72rem]">
              Chapter 01 \ Architectural Motion Study
            </p>

            <h1
              ref={textContainerRef}
              className="opacity-0 mt-4 font-signature text-[2.2rem] leading-[0.96] tracking-[0.02em] text-[#212020] md:text-[3.15rem] lg:text-[4rem]"
            >
              <span className="block">Gaurav Patharey</span>
              <span className="block">Architects</span>
            </h1>

            <p className="mt-5 max-w-[33ch] text-[0.98rem] leading-8 text-black/64 md:text-[1rem]">
              Thin drafting lines move from abstract positions into a clear
              building form, shaping a calm narrative of process, precision, and
              place.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#project-01"
                className="inline-flex items-center justify-center border border-[#212020] bg-[#212020] px-6 py-3 text-[0.66rem] uppercase tracking-[0.24em] text-white transition hover:bg-[#111111]"
              >
                Explore Work
              </a>
              <a
                href="#portfolio-footer"
                className="inline-flex items-center justify-center border border-black/22 bg-transparent px-6 py-3 text-[0.66rem] uppercase tracking-[0.24em] text-black/72 transition hover:border-black/45 hover:text-black"
              >
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
