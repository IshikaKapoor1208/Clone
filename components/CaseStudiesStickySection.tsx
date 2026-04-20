"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useReducedMotion from "./useReducedMotion";
const REVEAL_START = "top 78%";
const REVEAL_END = "top 28%";

export default function CaseStudiesStickySection({ projects }) {
  const containerRef = useRef(null);
  const pinnedMediaRef = useRef(null);
  const sectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const imageLayerRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const setActiveProjectIndex = (nextIndex) => {
    if (nextIndex === activeIndexRef.current) {
      return;
    }

    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    const pinnedMedia = pinnedMediaRef.current;
    const sections = sectionRefs.current.filter(Boolean);
    const contentBlocks = contentRefs.current.filter(Boolean);

    if (
      !container ||
      !pinnedMedia ||
      !sections.length ||
      contentBlocks.length !== sections.length
    ) {
      return undefined;
    }

    let isCancelled = false;
    let mm;

    const setupAnimation = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (isCancelled) {
        return;
      }

      if (prefersReducedMotion) {
        activeIndexRef.current = 0;
        setActiveIndex(0);
        gsap.set(imageLayerRefs.current.filter(Boolean), { clearProps: "all" });
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const context = gsap.context(() => {
          ScrollTrigger.create({
            trigger: container,
            start: "top top+=80",
            end: "bottom bottom-=40",
            pin: pinnedMedia,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          imageLayerRefs.current.forEach((layer, index) => {
            if (!layer) return;
            gsap.set(layer, {
              clipPath:
                index === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
              opacity: index === 0 ? 1 : 0.9,
              zIndex: 10 + index,
            });
          });

          sections.forEach((section, index) => {
            const content = contentRefs.current[index];
            const layer = imageLayerRefs.current[index];

            if (!content) {
              return;
            }

            ScrollTrigger.create({
              trigger: content,
              start: REVEAL_START,
              end: REVEAL_END,
              onEnter: () => setActiveProjectIndex(index),
              onEnterBack: () => setActiveProjectIndex(index),
            });

            if (layer && index > 0) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: content,
                    start: REVEAL_START,
                    end: REVEAL_END,
                    scrub: true,
                  },
                })
                .to(layer, {
                  clipPath: "inset(0% 0% 0% 0%)",
                  opacity: 1,
                  ease: "none",
                });
            }
          });
        }, container);

        return () => context.revert();
      });

      mm.add("(max-width: 1023px)", () => {
        const context = gsap.context(() => {
          activeIndexRef.current = 0;
          setActiveIndex(0);
        }, container);

        return () => context.revert();
      });
    };

    setupAnimation();

    return () => {
      isCancelled = true;
      mm?.revert();
    };
  }, [prefersReducedMotion, projects.length]);

  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="relative bg-white px-4 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

      <div className="relative mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div>
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              data-index={index}
              ref={(element) => {
                sectionRefs.current[index] = element;
              }}
              className="flex min-h-[92vh] items-center border-t border-black/8 py-12 md:min-h-screen md:py-16"
            >
              <div
                ref={(element) => {
                  contentRefs.current[index] = element;
                }}
                className="max-w-[34rem] space-y-6"
              >
                <div className="space-y-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.24em] text-black/52">
                    Project {project.number}
                  </p>
                  <h2 className="text-[2.5rem] leading-[0.9] tracking-[0.02em] text-[#1f1d1b] md:text-[4rem] lg:text-[4.8rem]">
                    {project.title}
                  </h2>
                  <p className="text-base tracking-[0.04em] text-black/62 md:text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-black/46 md:text-[0.76rem]">
                  {project.meta}
                </p>

                <p className="text-[0.96rem] leading-8 text-black/68">
                  {project.paragraphs[0]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/14 px-3 py-1 text-[0.64rem] uppercase tracking-[0.15em] text-black/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-4 aspect-[16/10] overflow-hidden border border-black/10 lg:hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="w-full h-auto object-cover object-center grayscale"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:block">
          <div
            ref={pinnedMediaRef}
            className="mx-auto h-[calc(100vh-12rem)] max-w-[42rem] border border-black/10 bg-white shadow-[0_22px_58px_rgba(33,32,32,0.09)]"
          >
            <div className="relative h-full w-full overflow-hidden">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(element) => {
                    imageLayerRefs.current[index] = element;
                  }}
                  className="absolute inset-0 will-change-[clip-path,opacity]"
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1279px) 56vw, 42rem"
                    className="w-full h-auto object-cover object-center grayscale"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.18))]" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 bg-white/92 px-5 py-4 backdrop-blur-[2px]">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-black/46">
                Active Case Study
              </p>
              <p className="mt-1 text-sm tracking-[0.06em] text-black/72">
                {activeProject.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}