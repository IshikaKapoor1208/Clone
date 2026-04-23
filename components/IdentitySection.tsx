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
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

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
                className="text-h2-section font-medium"
              >
                <span className="text-rustic-red">This isn&apos;t just </span>
                <span className="text-[#A34E24]">about buildings.</span>
              </motion.h2>
            </div>

            <div
              className="mb-10 flex h-[200px] items-center justify-center gap-1 overflow-hidden md:h-[300px] lg:h-[360px]"
              onMouseEnter={() => setIsGalleryHovered(true)}
              onMouseLeave={() => setIsGalleryHovered(false)}
            >
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] flex-1 overflow-hidden"
                  onMouseEnter={() => setIsGalleryHovered(true)}
                  onMouseLeave={() => setIsGalleryHovered(false)}
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
                      className={`object-cover transition-all duration-700 ${
                        isGalleryHovered ? "grayscale-0" : "grayscale"
                      }`}
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
                className="space-y-2 text-h3-title font-medium leading-relaxed"
              >
                <p className="text-ink">
                  It&apos;s about proportion, material, and the way a space is lived.
                </p>
                <p className="text-ink">
                  Every project begins with listening. <span className="text-ink/30">Then we shape</span>
                </p>
                <p className="text-ink/30">
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
