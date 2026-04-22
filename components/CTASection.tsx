"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta-section"
      className="relative overflow-hidden bg-white py-16 md:py-18 lg:py-20"
    >
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.01)_0,rgba(33,32,32,0.01)_1px,transparent_1px,transparent_100px)]" />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-ink/50"
          >
            Ready to build?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-signature text-[3.5rem] leading-[1.1] tracking-tight text-ink md:text-[6rem] lg:text-[8rem] xl:text-[8rem] max-w-5xl mb-12"
          >
            <span className="text-rustic-red">Let&apos;s shape your </span>
            <span className="text-[#A34E24] italic font-medium">vision into reality.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 max-w-xl text-base leading-relaxed text-ink/60 md:text-lg"
          >
            Whether it&apos;s a residential retreat or a commercial landmark, we bring precision,
            measured details, and architectural clarity to every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-ink px-8 py-4 text-paper transition-all hover:bg-ink/90 active:scale-95"
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em]">
                Start a Conversation
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Button border hover effect */}
              <div className="absolute -inset-2 border border-ink/5 opacity-0 transition-all duration-300 group-hover:inset-0 group-hover:opacity-100" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fcfbf9] to-transparent" />
    </section>
  );
}
