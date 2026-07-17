"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 600,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 600,
    damping: 35,
    mass: 0.2,
  });

  const ringX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
    mass: 0.8,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
    mass: 0.8,
  });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visible) setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const updateHover = () => {
      const el = document.elementFromPoint(
        mouseX.get(),
        mouseY.get()
      ) as HTMLElement | null;

      if (!el) return;

      const interactive = el.closest(
        'a,button,[role="button"],input,textarea,select,.cursor-hover'
      );

      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);

    const interval = setInterval(updateHover, 40);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);

      clearInterval(interval);
    };
  }, [mouseX, mouseY, visible]);

  if (typeof window !== "undefined") {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return null;
    }
  }

  return (
    <>
      {/* Ring */}
      <motion.div
        style={{
          left: ringX,
          top: ringY,
        }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.18,
        }}
        className="pointer-events-none fixed z-[9998] rounded-full border border-violet-400/70 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Dot */}
      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
        }}
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}