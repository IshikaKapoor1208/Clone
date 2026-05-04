"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/identity-1.jpg", alt: "Visionary architecture" },
  { src: "/identity-2.jpg", alt: "Minimalist interiors" },
  { src: "/identity-3.jpg", alt: "Thoughtful planning" },
  { src: "/identity-4.jpg", alt: "Fin al precision" },
];

export default function IdentitySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1400px]">

        {/* Headline */}
        <section className="bg-white py-16 md:py-24 xl:px-0">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 text-center md:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-2xl xl:text-3xl font-body font-light leading-relaxed tracking-normal"
              >
                <span className="text-rustic-red">This isn&apos;t just </span>
                <span className="text-[#A34E24]">about buildings.</span>
              </motion.h2>
            </div>

            <div
              className="mb-10 flex h-[150px] items-center justify-center gap-1 overflow-hidden md:h-[2500px] lg:h-[360px] lg:px-16 xl:px-20"
            >
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] flex-1 overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    clipPath:
                      "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%)",
                    marginLeft: idx === 0 ? "0" : "-4%",
                  }}
                >
                  <div className="relative h-full w-full scale-125">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover transition-all duration-700`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-lg md:text-xl font-light leading-relaxed text-ink">
                  It&apos;s about proportion, material, and the way a space is lived.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-ink">
                  Every project begins with listening. <span className="text-ink/30">Then we shape</span>
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed text-ink/30">
                  clarity, calm, and a built form that feels distinctly yours.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
