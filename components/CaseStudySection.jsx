"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function CaseStudySection({
  id,
  backgroundClassName,
  studyLabel,
  title,
  subtitle,
  meta,
  paragraphs,
  tags,
  imageSrc,
  imageAlt,
  imagePriority = false,
  watermark
}) {
  const prefersReducedMotion = useReducedMotion();

  const sectionTransition = prefersReducedMotion
    ? {}
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const itemTransition = prefersReducedMotion
    ? {}
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  const sectionInitial = prefersReducedMotion
    ? false
    : { opacity: 0, y: 40 };

  const leftInitial = prefersReducedMotion
    ? false
    : { opacity: 0, x: -28 };

  const rightInitial = prefersReducedMotion
    ? false
    : { opacity: 0, x: 28 };

  const imageInitial = prefersReducedMotion
    ? false
    : { opacity: 0, scale: 1.04 };

  return (
    <motion.section
      id={id}
      className={`relative py-8 md:py-10 xl:py-14 ${backgroundClassName}`}
      initial={sectionInitial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={sectionTransition}
    >
      <div className="grid min-h-[calc(100svh-4rem)] grid-cols-1 overflow-hidden bg-[#fbfaf7] md:grid-cols-5">
        <motion.div
          className="relative flex flex-col justify-between border-b border-black/8 px-6 py-8 md:col-span-2 md:border-b-0 md:border-r md:border-black/8 md:px-8 md:py-10 xl:px-10 xl:py-12"
          initial={leftInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition}
        >
          <div className="max-w-xl space-y-7">
            <motion.p
              className="text-[0.72rem] uppercase tracking-[0.34em] text-[#6a645e]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={itemTransition}
            >
              {studyLabel}
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={itemTransition}
            >
              <h2 className="max-w-[7ch] text-[clamp(3.25rem,7vw,6.4rem)] leading-[0.84] tracking-[0.02em] text-[#1f1d1b]">
                {title}
              </h2>
              <p className="text-lg font-medium tracking-[0.08em] text-[#4f4a45] md:text-xl">
                {subtitle}
              </p>
            </motion.div>

            <motion.p
              className="text-sm uppercase tracking-[0.24em] text-[#6a645e]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.05 }}
            >
              {meta}
            </motion.p>

            <motion.div
              className="space-y-6 text-sm leading-8 text-[#3f3a35] md:text-[0.98rem]"
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

          <motion.div
            className="pointer-events-none absolute bottom-4 left-6 select-none text-[clamp(6rem,18vw,15rem)] font-medium leading-none text-black/[0.05] md:bottom-6 md:left-8 xl:left-10"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.15 }}
          >
            {watermark}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex min-h-[28rem] flex-col bg-[#f2efe9] md:col-span-3 md:min-h-full"
          initial={rightInitial}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={itemTransition}
        >
          <motion.div
            className="border-b border-black/10 px-6 py-5 md:px-8 xl:px-10"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.06 }}
          >
            <div className="grid gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-[#5d5751] md:grid-cols-3">
              {tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative flex-1 overflow-hidden"
            initial={imageInitial}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ ...itemTransition, delay: prefersReducedMotion ? 0 : 0.12 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={imagePriority}
              sizes="(max-width: 767px) 100vw, 60vw"
              className="object-contain object-center transition duration-700 motion-safe:group-hover:scale-[1.02]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
