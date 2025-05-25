"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

const AnimatedText = ({ text, className = "" }: Props) => {
  const words = text.split(" ");
  const [startFadeOut, setStartFadeOut] = useState(false);

  const child = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.06,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  useEffect(() => {
    const totalLetters = text.replace(/\s/g, "").length;
    const totalDuration = 0.5 + totalLetters * 0.06 + 0.5;

    const timeout = setTimeout(() => {
      setStartFadeOut(true);
    }, totalDuration * 1000);

    return () => clearTimeout(timeout);
  }, [text]);

  let letterIndex = 0;

  return (
    <h1 className={cn("flex flex-wrap text-white", className)}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-flex mr-2 whitespace-nowrap"
        >
          {Array.from(word).map((letter) => {
            const index = letterIndex++;
            return (
              <motion.span
                key={index}
                className="relative inline-block"
                custom={index}
                variants={child}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* الظل */}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={startFadeOut ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={cn("absolute left-0 top-0", "text-primary")}
                  style={{ transform: "translate(3px, 3px)", zIndex: 0 }}
                >
                  {letter}
                </motion.span>

                {/* النص */}
                <span className="relative z-10">{letter}</span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
