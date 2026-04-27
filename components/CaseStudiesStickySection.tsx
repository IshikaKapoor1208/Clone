"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useReducedMotion from "./useReducedMotion";
import StaggeredText from "./animations/StaggeredText";
const REVEAL_START = "top 78%";
const REVEAL_END = "top 28%";

export default function CaseStudiesStickySection({ projects }) {
  const containerRef = useRef(null);
  const pinnedMediaRef = useRef(null);
  const sectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const imageLayerRefs = useRef([]);
  const mobileImageLayerRefs = useRef([]);
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
        gsap.set([...imageLayerRefs.current.filter(Boolean), ...mobileImageLayerRefs.current.filter(Boolean)], { clearProps: "all" });
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const context = gsap.context(() => {
          ScrollTrigger.create({
            trigger: container,
            start: "top top+=24",
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

          mobileImageLayerRefs.current.forEach((layer, index) => {
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
            const layer = mobileImageLayerRefs.current[index];

            if (!content) {
              return;
            }

            ScrollTrigger.create({
              trigger: content,
              start: "top 90%",
              end: "top 55%",
              onEnter: () => setActiveProjectIndex(index),
              onEnterBack: () => setActiveProjectIndex(index),
            });

            if (layer && index > 0) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: content,
                    start: "top 90%",
                    end: "top 55%",
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
      className="relative bg-white px-4 py-8 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.018)_0,rgba(33,32,32,0.018)_1px,transparent_1px,transparent_86px)]" />

      <div className="sticky top-[-1px] z-40 mx-auto mb-10 w-full bg-white pt-[4.5rem] pb-3 shadow-[0_22px_58px_rgba(33,32,32,0.09)] lg:hidden">
        <div className="max-w-[42rem] mx-auto overflow-hidden border border-black/10">
          <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[16/10]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(element) => {
                  mobileImageLayerRefs.current[index] = element;
                }}
                className="absolute inset-0 will-change-[clip-path,opacity]"
              >
                <Image
                  src={project.stickyImageSrc || project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="100vw"
                  className="h-full w-full object-cover object-center grayscale transition-all duration-500 ease-out"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.16))]" />
              </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 bg-white/95 px-4 py-3 backdrop-blur-[4px] sm:px-6">
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-black/50">
                Active Case Study
              </p>
              <p className="mt-0.5 text-sm font-medium tracking-[0.04em] text-rustic-red transition-colors duration-300">
                {activeProject.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[96rem] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="min-w-0">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              data-index={index}
              ref={(element) => {
                sectionRefs.current[index] = element;
              }}
              className="flex min-h-auto items-start border-t border-black/8 py-8 md:min-h-screen md:items-center"
            >
              <div
                ref={(element) => {
                  contentRefs.current[index] = element;
                }}
                className="max-w-full space-y-5 md:max-w-[34rem] md:space-y-6"
              >
                <div className="space-y-3">
                  <h2 className="text-xl md:text-2xl xl:text-3xl font-light leading-relaxed">
                    {(() => {
                      const words = project.title.trim().split(" ");
                      const last = words.pop();
                      return (
                        <>
                          <span className="text-rustic-red">{words.join(" ")} </span>
                          <span className="text-[#A34E24]">{last}</span>
                        </>
                      );
                    })()}
                  </h2>
                  <p className="text-base text-black/62 sm:text-body-lg">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[0.6rem] tracking-[0.22em] text-black/46 sm:text-label-xs">
                  {project.meta}
                </p>

                <div className="space-y-4 text-body-base text-black/68">
                  <p>{project.description}</p>
                  <p>{project.paragraphs[0]}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/14 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.14em] text-black/55 sm:px-3 sm:text-[0.64rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-block w-full border border-black/10 px-6 py-4 text-center text-label-xs text-black transition-colors duration-300 hover:bg-black hover:text-white sm:w-auto sm:px-8"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:block">
          <div
            ref={pinnedMediaRef}
             className="mx-auto h-[calc(100vh-16rem)] md:sticky md:top-14 max-w-[42rem] border border-black/10 bg-white shadow-[0_22px_58px_rgba(33,32,32,0.09)]"
          >
            <div className="relative h-full w-full overflow-hidden">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(element) => {
                    imageLayerRefs.current[index] = element;
                  }}
                   className="absolute inset-0 will-change-[clip-path,opacity] transition-all duration-500 ease-out"
                >
                  <Image
                    src={project.stickyImageSrc || project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1279px) 56vw, 42rem"
                     className="w-full h-auto object-cover object-center grayscale transition-all duration-500 ease-out"
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
