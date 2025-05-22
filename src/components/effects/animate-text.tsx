"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className: string;
};

const AnimatedText = ({ text, className }: Props) => {
  const letters = Array.from(text);
  const [startFadeOut, setStartFadeOut] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    // الوقت اللي تاخده الحركة بالكامل (delay + stagger + زيادة بسيطة)
    const totalDuration = 0.5 + letters.length * 0.05 + 0.5;

    const timeout = setTimeout(() => {
      setStartFadeOut(true);
    }, totalDuration * 1000);

    return () => clearTimeout(timeout);
  }, [letters.length]);

  return (
    <motion.div
      className={cn("relative flex text-white", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="relative inline-block"
        >
          {/* الظل مع fade out */}
          <motion.span
            initial={{ opacity: 1 }}
            animate={startFadeOut ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn("absolute left-0 top-0", "text-primary")}
            style={{ transform: "translate(3px, 3px)", zIndex: 0 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>

          {/* النص */}
          <span className={cn("relative z-10")}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
