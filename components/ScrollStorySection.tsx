"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useSectionReveal from "./useSectionReveal";
import useReducedMotion from "./useReducedMotion";

const storyFrames = [
  {
    eyebrow: "Threshold",
    title: "Light gathers before the room begins.",
    text: "A quiet edge slows the approach, letting shadow, texture, and proportion set the pace of arrival.",
    imageSrc: "/monsoon-court.jpg",
    imageAlt: "Architectural planning table with drawings and warm light",
  },
  {
    eyebrow: "Courtyard",
    title: "Open air becomes the center of the plan.",
    text: "Rooms hold their shape around a calmer middle, where movement, pause, and daylight meet.",
    imageSrc: "/north-gallery-house.jpg",
    imageAlt: "Architectural team reviewing residential plans",
  },
  {
    eyebrow: "Detail",
    title: "Precision gives the atmosphere its stillness.",
    text: "Edges are resolved carefully so the building feels effortless, grounded, and quietly complete.",
    imageSrc: "/laterite-studio.jpg",
    imageAlt: "Detailed architectural drawing for a compact studio",
  },
];

export default function ScrollStorySection() {
  const prefersReducedMotion = useReducedMotion();
  const { sectionRef, revealClassName } = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#fbfaf7] px-4 py-16 text-[#212020] md:px-10 md:py-0 lg:px-20 ${revealClassName}`}
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div className="md:sticky md:top-24 md:flex md:h-[calc(100vh-6rem)] md:items-center">
          <div className="max-w-[34rem] space-y-6">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-black/45">
              Spatial Story
            </p>
            <h2 className="max-w-[8ch] font-signature text-[3.2rem] leading-[0.88] tracking-[0.03em] md:text-[4.8rem] lg:text-[6rem]">
              A slow walk through form.
            </h2>
            <p className="max-w-[30rem] text-sm leading-7 text-black/62 md:text-[0.98rem]">
              Architecture is read in sequence: the first threshold, the open
              middle, the final detail that makes everything feel inevitable.
            </p>
          </div>
        </div>

        <div className="space-y-10 md:space-y-0">
          {storyFrames.map((frame, index) => (
            <motion.article
              key={frame.title}
              className="grid min-h-[100vh] content-center gap-6"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-4 border-t border-black/10 pt-5">
                <div className="flex items-center gap-4">
                  <span className="text-[0.72rem] uppercase tracking-[0.26em] text-black/42">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                  <span className="text-[0.72rem] uppercase tracking-[0.26em] text-black/42">
                    {frame.eyebrow}
                  </span>
                </div>

                <h3 className="max-w-[12ch] text-3xl font-medium leading-[1.04] tracking-[0.01em] md:text-4xl lg:text-5xl">
                  {frame.title}
                </h3>
                <p className="max-w-[34rem] text-sm leading-7 text-black/62 md:text-[0.98rem]">
                  {frame.text}
                </p>
              </div>

              <motion.div
                className="relative aspect-[4/5] w-full overflow-hidden border border-black/8 bg-[#f1ede6] md:aspect-[4/4.6] lg:aspect-[4/3.6]"
                initial={prefersReducedMotion ? false : { scale: 0.98 }}
                whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={frame.imageSrc}
                  alt={frame.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 48vw"
                  className="w-full h-auto object-cover object-center grayscale transition duration-700"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.08))]" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
