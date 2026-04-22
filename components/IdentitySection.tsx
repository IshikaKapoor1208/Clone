"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/identity-1.jpg", alt: "Visionary architecture" },
  { src: "/identity-2.jpg", alt: "Minimalist interiors" },
  { src: "/identity-3.jpg", alt: "Thoughtful planning" },
  { src: "/identity-4.jpg", alt: "Final precision" },
];

export default function IdentitySection() {
  return (
    <section className="bg-white px-6 py-12 md:px-52 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">

        {/* Headline */}
        <div className="mb-10 text-center md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[2.2rem] font-medium leading-[1.1] tracking-tight text-ink md:text-[4rem] lg:text-[4.5rem]"
          >
            <span className="text-rustic-red">This isn&apos;t just </span>
            <span className="text-[#A34E24]">about real estate.</span>
          </motion.h2>
        </div>

        {/* Slanted Image Grid */}
        <div className="mb-10 flex h-[200px] items-center justify-center gap-1 overflow-hidden md:h-[300px] lg:h-[360px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] flex-1 overflow-hidden"
              style={{
                clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%)",
                marginLeft: idx === 0 ? "0" : "-4%",
              }}
            >
              <div className="relative h-full w-full scale-125">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2 text-lg font-medium leading-relaxed md:text-2xl lg:text-[1.75rem]"
          >
            <p className="text-ink">
              It’s about identity. Progress. Getting unstuck.
            </p>
            <p className="text-ink">
              You’re not just looking for a place. <span className="text-ink/30">You’re looking</span>
            </p>
            <p className="text-ink/30">
              for alignment. That’s what we help you find.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
