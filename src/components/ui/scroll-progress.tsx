"use client";
import { motion, useScroll } from "motion/react";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="z-40 bg-zinc-500 h-1 fixed top-0 w-full">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          originX: 0,
        }}
        className="bg-primary h-1"
      />
    </div>
  );
}
