"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Asterisk } from "lucide-react";

export default function CircleScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to rotation (0 to 360 degrees)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center"
    >
      <div className="relative">
        {/* Rotating outer circle */}
        <motion.div style={{ rotate }} className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/images/faq-Rotate-Widget-Large-Img.png"
              alt="Gaaga FAQ rotating widget"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Fixed center image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Asterisk className="w-14 h-14 text-primary" />
        </div>
      </div>
    </div>
  );
}
