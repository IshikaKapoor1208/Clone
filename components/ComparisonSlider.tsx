"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Sketch",
  afterLabel = "Reality",
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent | React.PointerEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[16/9] max-h-[500px] w-full overflow-hidden border border-black/10 transition-shadow hover:shadow-2xl cursor-none"
      onPointerMove={handleMove}
      data-cursor="view"
    >
      {/* After Image (Full background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover grayscale"
        />
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover grayscale opacity-80"
        />
        <div className="absolute bottom-6 left-6 bg-ink text-white px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 z-20 w-px bg-white/50"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/50 bg-white/10 backdrop-blur-md flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* Title / Info */}
      <div className="absolute top-6 left-6 z-30 pointer-events-none">
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60 mb-2">Process Study</p>
        <h3 className="font-signature text-3xl text-white">Vision to Reality</h3>
      </div>
    </div>
  );
}
