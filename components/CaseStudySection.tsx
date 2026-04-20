"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import useReducedMotion from "./useReducedMotion";

export default function CaseStudySection({
  id,
  number,
  title,
  subtitle,
  meta,
  paragraphs,
  tags,
  imageSrc,
  imageAlt,
  stackIndex = 0
}) {
  const sectionRef = useRef(null);
  const imageFrameRef = useRef(null);
  const revealMaskRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const summaryParagraphs = useMemo(() => paragraphs.slice(0, 1), [paragraphs]);

  useEffect(() => {
    const section = sectionRef.current;
    const imageFrame = imageFrameRef.current;
    const revealMask = revealMaskRef.current;
    const image = imageFrame?.querySelector("img");

    if (!section || !imageFrame || !revealMask || !image) {
      return undefined;
    }

    let isCancelled = false;
    let mm;

    const setupAnimation = async () => {
      const gsap = (await import("gsap")).default;

      if (isCancelled) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set([image, revealMask], { clearProps: "all" });
        return;
      }

      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (isCancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const context = gsap.context(() => {
          gsap.set(revealMask, {
            scaleY: 1,
            transformOrigin: "top center",
            willChange: "transform"
          });

          gsap.set(image, {
            scale: 1.08,
            objectPosition: "50% 58%",
            transformOrigin: "center center",
            willChange: "transform, object-position"
          });

          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 74%",
              end: "top 20%",
              scrub: true
            }
          })
            .to(
              revealMask,
              {
                scaleY: 0,
                ease: "none",
                duration: 1
              },
              0
            )
            .to(
              image,
              {
                scale: 1,
                objectPosition: "50% 44%",
                ease: "none",
                duration: 1
              },
              0
            )
            .to(
              imageFrame,
              {
                boxShadow: "0 34px 80px rgba(33,32,32,0.12)",
                ease: "none",
                duration: 0.6
              },
              0
            );
        }, section);

        return () => context.revert();
      });

      mm.add("(max-width: 1023px)", () => {
        const context = gsap.context(() => {
          gsap.set(revealMask, {
            scaleY: 0,
            clearProps: "transform-origin,will-change"
          });
          gsap.set(image, {
            scale: 1,
            objectPosition: "50% 50%",
            clearProps: "will-change"
          });
        }, section);

        return () => context.revert();
      });
    };

    setupAnimation();

    return () => {
      isCancelled = true;
      mm?.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative border-t border-black/8 bg-white px-4 py-14 md:sticky md:top-0 md:min-h-[130vh] md:px-10 md:py-0 lg:min-h-[140vh] lg:px-16"
      style={{ zIndex: 30 + stackIndex }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

      <div className="relative mx-auto grid max-w-[96rem] grid-cols-1 gap-10 py-14 md:h-screen md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <div>
            <div className="max-w-[33rem] space-y-6">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-black/52">
                  Project {number}
                </p>
                <h2 className="text-[2.6rem] leading-[0.9] tracking-[0.02em] text-[#1f1d1b] md:text-[4rem] lg:text-[5rem]">
                  {title}
                </h2>
                <p className="text-base tracking-[0.04em] text-black/62 md:text-lg">
                  {subtitle}
                </p>
              </div>

              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-black/46 md:text-[0.76rem]">
                {meta}
              </p>

              <div className="space-y-4 text-[0.96rem] leading-8 text-black/68">
                {summaryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/14 px-3 py-1 text-[0.64rem] uppercase tracking-[0.15em] text-black/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:h-full">
          <div
            ref={imageFrameRef}
            className="relative overflow-hidden border border-black/10 bg-white shadow-[0_18px_48px_rgba(33,32,32,0.08)]"
          >
            <div className="relative aspect-[4/4.8] w-full overflow-hidden md:aspect-[16/10] lg:aspect-[4/5] xl:aspect-[16/10]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 56vw"
                className="w-full h-auto object-cover object-center grayscale"
              />
              <div
                ref={revealMaskRef}
                className="pointer-events-none absolute inset-0 z-20 origin-top scale-y-0 bg-white"
              />
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.2))]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
