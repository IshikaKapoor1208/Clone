"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StaggeredText from "./animations/StaggeredText";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIndexSection({ projects }) {
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [canRenderPreview, setCanRenderPreview] = useState(false);
  // Removed revealed state to avoid 1-by-1 open animation

  const movePreviewToCursor = (event) => {
    if (!previewRef.current) {
      return;
    }

    gsap.to(previewRef.current, {
      x: event.clientX + 20,
      y: event.clientY + 20,
      duration: 0.28,
      ease: "power3.out",
      overwrite: true,
    });
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(section, { clearProps: "all" });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.set(section, {
        yPercent: 14,
        opacity: 0.98,
        willChange: "transform",
      });

      const tween = gsap.to(section, {
        yPercent: 0,
        opacity: 1,
        duration: 0.95,
        ease: "power3.out",
        paused: true,
        clearProps: "transform,willChange",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=10%",
        once: true,
        onEnter: () => tween.play(),
      });
    }, section);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!projects.length) {
      return undefined;
    }

    const indexObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Number(a.target.getAttribute("data-project-index")) -
              Number(b.target.getAttribute("data-project-index")),
          )[0];

        if (visibleEntry) {
          const projectId = visibleEntry.target.getAttribute("data-project-id");

          setActiveProjectId(projectId);
        }
      },
      {
        root: null,
        rootMargin: "-24% 0px -48% 0px",
        threshold: 0,
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveProjectId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    itemRefs.current
      .filter(Boolean)
      .forEach((item) => indexObserver.observe(item));

    const observedSections = projects
      .map((project) => document.getElementById(project.id))
      .filter(Boolean);

    observedSections.forEach((section) => sectionObserver.observe(section));

    return () => {
      indexObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [projects]);

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        gsap.killTweensOf(previewRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setCanRenderPreview(true);
  }, []);

  const previewNode = (
    <div
      ref={previewRef}
      className={`pointer-events-none fixed left-0 top-0 z-[220] overflow-hidden rounded-[0.35rem] border border-black/10 bg-[#f7f5f1] shadow-[0_20px_44px_rgba(16,16,16,0.22)] transition-all duration-300 ease-out ${hoveredProject ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[0.95] blur-[2px]"
        }`}
      style={{ width: 260, height: 178 }}
      aria-hidden="true"
    >
      {hoveredProject?.imageSrc ? (
        <>
          <Image
            src={hoveredProject.imageSrc}
            alt={hoveredProject.imageAlt || hoveredProject.title}
            fill
            sizes="260px"
            className="h-full w-full object-cover object-center grayscale"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(20,20,20,0.1))]" />
        </>
      ) : null}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_100%)] px-4 pb-20 pt-20 md:px-10 md:pb-24 md:pt-24 lg:px-20 lg:pb-24 lg:pt-28 xl:pt-32 xl:px-28"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[24%] bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 xl:block" />

      <div className="grid gap-12 md:gap-14 lg:grid-cols-[minmax(16rem,0.38fr)_minmax(0,1fr)] lg:items-stretch lg:gap-16 lg:pb-[45vh] xl:gap-20">
        <div className="self-stretch">
          <div className="lg:sticky lg:top-28 xl:top-32">
            <p className="text-[0.76rem] uppercase tracking-[0.28em] text-[rgba(33,32,32,0.48)]">
              Selected Work
            </p>
            <h2 className="mt-6 font-signature text-[3.2rem] leading-[0.9] tracking-[0.03em] md:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.4rem]">
              <span className="block whitespace-nowrap text-rustic-red">Project</span>
              <span className="block text-[#A34E24]">Index</span>
            </h2>
            <p className="mt-6 max-w-[24rem] text-sm leading-7 text-black/60 md:text-[0.98rem]">
              A curated sequence of residential, hospitality, and wellness work
              presented through drawings, process studies, and spatial
              narratives.
            </p>
          </div>
        </div>

        <div
          id="projects-overview"
          ref={listRef}
          className="min-w-0 lg:pt-2"
        >
          <nav
            aria-label="Projects"
            className="border-t border-[rgba(33,32,32,0.14)]"
          >
            {projects.map((project, index) => {
              const isActive = activeProjectId === project.id;

              return (
                <Link
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  data-project-id={project.id}
                  data-project-index={index}
                  aria-current={isActive ? "true" : undefined}
                  onMouseEnter={(event) => {
                    setHoveredProject(project);
                    movePreviewToCursor(event);
                  }}
                  onMouseMove={movePreviewToCursor}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`cursor-image grid min-w-0 gap-4 border-b border-[rgba(33,32,32,0.12)] py-5 text-black transition duration-300 ease-out hover:translate-x-1 hover:text-black sm:grid-cols-[52px_minmax(0,1fr)_minmax(145px,220px)] sm:items-start sm:gap-5 lg:grid-cols-[58px_minmax(0,1fr)_minmax(190px,270px)] lg:gap-7 ${isActive ? "translate-x-1" : "translate-x-0"
                    }`}
                >
                  <span
                    className={`font-body text-[0.72rem] font-normal uppercase leading-[1.2] tracking-[0.18em] transition duration-300 sm:pt-1 ${isActive
                      ? "text-[#1f1f1f]"
                      : "text-[#858585]"
                      }`}
                  >
                    {project.number}
                  </span>

                  <span className="grid min-w-0 gap-2">
                    <h3
                      className={`project-name relative m-0 w-fit max-w-full whitespace-normal font-body text-[1.55rem] font-normal leading-[1.08] tracking-[0.02em] transition duration-300 sm:whitespace-nowrap md:text-[1.85rem] lg:text-[2.1rem] xl:text-[2.4rem] ${isActive ? "translate-x-1" : ""}`}
                    >
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
                    </h3>
                    <p
                      className={`m-0 max-w-[58ch] font-body text-[0.9rem] font-normal leading-[1.65] tracking-[0.02em] transition duration-300 md:text-[0.98rem] lg:text-[1.02rem] ${isActive
                        ? "translate-x-1 text-[#707070]"
                        : "text-[#747474]"
                        }`}
                    >
                      {project.description}
                    </p>
                  </span>

                  <span
                    className={`break-words font-body text-[0.68rem] font-normal uppercase leading-[1.65] tracking-[0.28em] transition duration-300 sm:pt-1 sm:text-right md:text-[0.76rem] ${isActive
                      ? "text-[#3f3f3f]"
                      : "text-[#808080]"
                      }`}
                  >
                    {project.meta}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {canRenderPreview ? createPortal(previewNode, document.body) : null}
    </section>
  );
}
