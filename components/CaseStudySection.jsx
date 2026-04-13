"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function CaseStudySection({
  id,
  number,
  backgroundClassName,
  title,
  subtitle,
  meta,
  paragraphs,
  tags,
  imageSrc,
  imageAlt,
  imagePriority = false,
  watermark,
  reverse = false
}) {
  const prefersReducedMotion = useReducedMotion();

  const sectionTransition = prefersReducedMotion
    ? {}
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const itemTransition = prefersReducedMotion
    ? {}
    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] };

  const sectionInitial = prefersReducedMotion ? false : { opacity: 0, y: 40 };
  const textInitial = prefersReducedMotion
    ? false
    : { opacity: 0, x: reverse ? 28 : -28 };
  const imageInitial = prefersReducedMotion
    ? false
    : { opacity: 0, x: reverse ? -28 : 28 };
  const mediaInitial = prefersReducedMotion ? false : { opacity: 0, scale: 1.03 };

  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden px-4 py-20 md:px-10 md:py-24 lg:px-20 xl:py-28 ${backgroundClassName}`}
      initial={sectionInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={sectionTransition}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[16%] border-r border-black/6 bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0))] xl:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[22%] bg-[linear-gradient(0deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40 xl:block" />

      <div className="grid min-h-[calc(100svh-5rem)] grid-cols-1 gap-10 md:gap-12 xl:grid-cols-12 xl:gap-16">
        <motion.div
          className={`relative min-w-0 ${
            reverse ? "xl:col-span-4 xl:col-start-8" : "xl:col-span-4 xl:col-start-1"
          }`}
          initial={textInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition}
        >
          <div className="xl:sticky xl:top-24">
            <div className="max-w-[30rem] space-y-6 md:space-y-7">
              <motion.p
                className="text-[0.68rem] uppercase tracking-[0.24em] text-[#6a645e] md:text-[0.72rem] md:tracking-[0.34em]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={itemTransition}
              >
                Project {number}
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={itemTransition}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[0.76rem] uppercase tracking-[0.18em] text-black/40 md:text-[0.82rem] md:tracking-[0.24em]">
                    {watermark}
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>

                <h2 className="max-w-[7ch] text-[3.1rem] leading-[0.84] tracking-[0.02em] text-[#1f1d1b] md:text-[4.8rem] lg:text-[5.6rem] xl:text-[6.4rem]">
                  {title}
                </h2>

                <p className="max-w-[24rem] text-base font-medium tracking-[0.08em] text-[#4f4a45] md:text-xl">
                  {subtitle}
                </p>
              </motion.div>

              <motion.p
                className="max-w-[28rem] text-xs uppercase leading-6 tracking-[0.18em] text-[#6a645e] md:text-sm md:tracking-[0.24em]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.05 }}
              >
                {meta}
              </motion.p>

              <motion.div
                className="space-y-5 text-sm leading-7 text-[#3f3a35] md:space-y-6 md:leading-8 md:text-[0.98rem]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.1 }}
              >
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`relative min-w-0 ${
            reverse
              ? "xl:col-span-7 xl:col-start-1 xl:row-start-1"
              : "xl:col-span-7 xl:col-start-6"
          }`}
          initial={imageInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition}
        >
          <div className="relative overflow-hidden border border-black/8 bg-[#f5f2ec] shadow-[0_30px_70px_rgba(33,32,32,0.08)]">
            <motion.div
              className="border-b border-black/10 px-4 py-4 text-[0.68rem] uppercase tracking-[0.16em] text-[#5d5751] md:px-8 md:py-5 md:text-[0.72rem] md:tracking-[0.22em] xl:px-10"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.06 }}
            >
              <div className="grid gap-3 md:grid-cols-3">
                {tags.map((tag) => (
                  <p key={tag} className="break-words">{tag}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[4/4.7] w-full overflow-hidden md:aspect-[4/3.1]"
              initial={mediaInitial}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.12 }}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(255,255,255,0.28),rgba(255,255,255,0.06))]" />
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={imagePriority}
                sizes="(max-width: 1279px) 100vw, 58vw"
                className="h-auto w-full object-cover object-center grayscale"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
