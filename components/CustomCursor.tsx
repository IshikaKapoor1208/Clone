"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cursorTypeRef = useRef<string | null>(null);
  const isVisibleRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer cursor
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Check for hover types
      const target = e.target as HTMLElement;
      const cursorData = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const nextType = cursorData || null;

      if (cursorTypeRef.current !== nextType) {
        cursorTypeRef.current = nextType;
        setCursorType(nextType);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="custom-cursor-container pointer-events-none fixed inset-0 z-[999] mix-blend-difference hidden md:block">
      {/* Outer Cursor / Crosshair */}
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center border border-white"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" ? 80 : 40,
          height: cursorType === "view" ? 80 : 40,
          borderRadius: cursorType === "view" ? "50%" : "50%",
          opacity: isVisible ? 1 : 0,
          scale: cursorType ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        {cursorType === "view" && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-widest text-white"
          >
            View
          </motion.span>
        )}
        
        {/* Drafting Crosshairs Hooks */}
        {!cursorType && (
          <>
            <div className="absolute h-2 w-px bg-white/40 top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute h-2 w-px bg-white/40 bottom-0 left-1/2 -translate-x-1/2" />
            <div className="absolute w-2 h-px bg-white/40 left-0 top-1/2 -translate-y-1/2" />
            <div className="absolute w-2 h-px bg-white/40 right-0 top-1/2 -translate-y-1/2" />
          </>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed left-0 top-0 h-1 w-1 rounded-full bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: cursorType ? 0 : 1,
        }}
      />
    </div>
  );
}
