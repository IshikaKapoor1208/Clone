"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      className="relative bg-[linear-gradient(180deg,#fbfaf7_0%,#ffffff_100%)] px-4 py-20 md:px-10 md:py-24 lg:px-20 xl:py-28"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[24%] bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 xl:block" />

      <div className="grid gap-12 md:gap-14 xl:grid-cols-12 xl:gap-16">
        <div className="self-start xl:col-span-4">
          <div className="sticky top-24 md:top-28 xl:top-32">
            <p className="text-[0.76rem] uppercase tracking-[0.28em] text-[rgba(33,32,32,0.48)]">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-[8ch] text-[2.9rem] leading-[0.9] tracking-[0.03em] md:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.4rem]">
              Project Index
            </h2>
            <StaggeredText className="mt-6 max-w-[24rem] text-sm leading-7 text-black/60 md:text-[0.98rem]">
              A curated sequence of residential, hospitality, and wellness work
              presented through drawings, process studies, and spatial
              narratives.
            </StaggeredText>
          </div>
        </div>

        <div
          id="projects-overview"
          ref={listRef}
          className="xl:col-span-7 xl:col-start-6"
        >
          <nav
            aria-label="Projects"
            className="border-t border-[rgba(33,32,32,0.14)]"
          >
            {projects.map((project, index) => {
              const isActive = activeProjectId === project.id;

              return (
                <a
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  key={project.id}
                  href={`#${project.id}`}
                  data-project-id={project.id}
                  data-project-index={index}
                  aria-current={isActive ? "true" : undefined}
                  onMouseEnter={(event) => {
                    setHoveredProject(project);
                    movePreviewToCursor(event);
                  }}
                  onMouseMove={movePreviewToCursor}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`cursor-image grid min-w-0 gap-4 border-b border-[rgba(33,32,32,0.14)] py-7 transition duration-300 ease-out hover:translate-x-2 hover:text-black md:grid-cols-[72px_minmax(0,1fr)_minmax(140px,180px)] md:gap-5 xl:grid-cols-[80px_minmax(0,1fr)_minmax(170px,210px)] opacity-100 text-black ${isActive ? "translate-x-1" : "translate-x-0"
                    }`}
                >
                  <span
                    className={`text-[0.82rem] uppercase tracking-[0.18em] transition duration-300 ${isActive
                      ? "font-medium text-[rgba(33,32,32,0.9)]"
                      : "text-[rgba(33,32,32,0.58)]"
                      }`}
                  >
                    {project.number}
                  </span>

                  <span className="grid gap-2">
                    <h3
                      className={`project-name relative m-0 w-fit text-xl font-medium leading-[1.1] transition duration-300 md:text-2xl lg:text-[1.95rem] ${isActive ? "translate-x-1 text-black" : "text-black/70"
                        }`}
                    >
                      {project.title}
                    </h3>
                    <StaggeredText
                      className={`m-0 max-w-[56ch] text-sm leading-[1.7] transition duration-300 md:text-[0.97rem] ${isActive
                        ? "translate-x-1 text-[rgba(33,32,32,0.72)]"
                        : "text-[rgba(33,32,32,0.62)]"
                        }`}
                    >
                      {project.description}
                    </StaggeredText>
                  </span>

                  <span
                    className={`break-words text-[0.76rem] uppercase tracking-[0.16em] transition duration-300 md:text-[0.82rem] md:tracking-[0.18em] ${isActive
                      ? "font-medium text-[rgba(33,32,32,0.82)]"
                      : "text-[rgba(33,32,32,0.58)]"
                      }`}
                  >
                    {project.meta}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      {canRenderPreview ? createPortal(previewNode, document.body) : null}
    </section>
  );
}
