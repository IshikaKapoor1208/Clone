"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import useSectionReveal from "./useSectionReveal";
import useReducedMotion from "./useReducedMotion";
import StaggeredText from "./animations/StaggeredText";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/dist/Flip";

const HERO_VIDEO_PLAYBACK_RATE = 1.35;

gsap.registerPlugin(Flip);

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
  const [showTitlePreview, setShowTitlePreview] = useState(false);
  const [canRenderPreview, setCanRenderPreview] = useState(false);
  const textContainerRef = useRef(null);
  const videoShellRef = useRef<HTMLDivElement | null>(null);
  const sideContentRef = useRef<HTMLDivElement | null>(null);
  const titlePreviewRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const content = sideContentRef.current;

    if (!content) {
      return undefined;
    }

    if (prefersReducedMotion) {
      gsap.set(content, { clearProps: "all", autoAlpha: 1, y: 0 });
      return undefined;
    }

    if (!playReveal) {
      return undefined;
    }

    const tween = gsap.fromTo(
      content,
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.68, ease: "power2.out" },
    );

    return () => {
      tween.kill();
    };
  }, [playReveal, prefersReducedMotion]);

  useEffect(() => {
    setCanRenderPreview(true);

    return () => {
      if (titlePreviewRef.current) {
        gsap.killTweensOf(titlePreviewRef.current);
      }
    };
  }, []);

  const moveTitlePreview = (event: MouseEvent<HTMLHeadingElement>) => {
    if (!titlePreviewRef.current) {
      return;
    }

    gsap.to(titlePreviewRef.current, {
      x: event.clientX + 20,
      y: event.clientY + 20,
      duration: 0.26,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const titlePreviewNode = (
    <div
      ref={titlePreviewRef}
      className={`pointer-events-none fixed left-0 top-0 z-[240] overflow-hidden rounded-[0.4rem] border border-black/10 bg-[#f7f5f1] shadow-[0_22px_52px_rgba(16,16,16,0.24)] transition-all duration-300 ease-out ${showTitlePreview ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[0.95] blur-[2px]"
        }`}
      style={{ width: 220, height: 150 }}
      aria-hidden="true"
    >
      <Image
        src="/bulding.jpg"
        alt="Modern architectural building"
        fill
        sizes="220px"
        className="h-full w-full object-cover object-center"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(20,20,20,0.12))]" />
    </div>
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-white ${revealClassName}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-[96rem] grid-cols-1 px-4 pb-8 pt-24 md:px-10 md:pb-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-0 lg:px-16 lg:pt-20">
        <div className="relative h-[54vh] w-full md:h-[62vh] lg:h-[78vh]">
          <div
            ref={videoShellRef}
            className={`hero-video-feather overflow-hidden bg-[#212121] origin-center ${isVideoExpanded && !prefersReducedMotion
              ? "fixed inset-0 z-50 rounded-none border-none"
              : "absolute inset-0 border border-black/10"
              }`}
          >
            <video
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

                if (prefersReducedMotion || !videoShellRef.current) {
                  setIsVideoExpanded(false);
                  setPlayReveal(true);
                  return;
                }

                const state = Flip.getState(videoShellRef.current);
                setIsVideoExpanded(false);

                requestAnimationFrame(() => {
                  if (!videoShellRef.current) {
                    setPlayReveal(true);
                    return;
                  }

                  Flip.from(state, {
                    duration: 1.2,
                    ease: "power4.inOut",
                    absolute: true,
                    onComplete: () => setPlayReveal(true),
                  });
                });
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.14))]" />
          </div>
        </div>

        <div
          ref={sideContentRef}
          className="flex items-end pb-8 opacity-0 md:pb-10 lg:border-l lg:border-black/10 lg:pb-14 lg:pl-12"
        >
          <div className="max-w-[31rem]">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/52 md:text-[0.72rem]">
              Chapter 01 \ Architectural Motion Study
            </p>

            <h1
              ref={textContainerRef}
              className="cursor-image opacity-0 mt-4 font-signature text-[2.2rem] leading-[0.96] tracking-[0.02em] text-[#212020] md:text-[3.15rem] lg:text-[4rem]"
              onMouseEnter={(event) => {
                setShowTitlePreview(true);
                moveTitlePreview(event);
              }}
              onMouseMove={moveTitlePreview}
              onMouseLeave={() => setShowTitlePreview(false)}
            >
              <span className="block">Gaurav Patharey</span>
              <span className="block">Architects</span>
            </h1>

            <StaggeredText className="mt-5 max-w-[33ch] text-[0.98rem] leading-8 text-black/64 md:text-[1rem]">
              Thin drafting lines move from abstract positions into a clear
              building form, shaping a calm narrative of process, precision, and
              place.
            </StaggeredText>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#project-01"
                data-cursor="view"
                className="inline-flex items-center justify-center border border-[#212020] bg-[#212020] px-6 py-3 text-[0.66rem] uppercase tracking-[0.24em] text-white transition hover:bg-[#111111]"
              >
                Explore Work
              </a>
              <a
                href="#cta-section"
                data-cursor="view"
                className="inline-flex items-center justify-center border border-black/22 bg-transparent px-6 py-3 text-[0.66rem] uppercase tracking-[0.24em] text-black/72 transition hover:border-black/45 hover:text-black"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
      {canRenderPreview ? createPortal(titlePreviewNode, document.body) : null}
    </section>
  );
}
