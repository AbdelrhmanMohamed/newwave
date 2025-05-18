"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StrokeNumberProps {
  number: number;
  className?: string;
}

const colorVariants = {
  primary: {
    bg: "bg-primary/10 dark:bg-primary/20",
    text: "text-primary",
    stroke: "2px hsl(var(--primary))",
  },
  secondary: {
    bg: "bg-secondary/10 dark:bg-secondary/20",
    text: "text-secondary",
    stroke: "2px hsl(var(--secondary))",
  },
  destructive: {
    bg: "bg-destructive/10 dark:bg-destructive/20",
    text: "text-destructive",
    stroke: "2px hsl(var(--destructive))",
  },
  muted: {
    bg: "bg-muted/50 dark:bg-muted/30",
    text: "text-muted-foreground",
    stroke: "2px hsl(var(--muted-foreground))",
  },
  accent: {
    bg: "bg-accent/50 dark:bg-accent/30",
    text: "text-accent-foreground",
    stroke: "2px hsl(var(--accent-foreground))",
  },
};

export const StrokeNumber: React.FC<StrokeNumberProps> = ({
  number,
  className,
}) => {
  // Get color variant based on number
  const colorKeys = Object.keys(colorVariants);
  const colorKey = colorKeys[
    number % colorKeys.length
  ] as keyof typeof colorVariants;
  const colorVariant = colorVariants[colorKey];

  return (
    <div className={cn("flex justify-center", className)}>
      <motion.div
        className="relative flex items-center justify-center w-24 h-24 rounded-xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Background shape */}
        <motion.div
          className={cn("absolute inset-0 rounded-xl", colorVariant.bg)}
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Number with stroke */}
        <motion.div
          className="relative text-6xl font-bold"
          style={{
            WebkitTextStroke: colorVariant.stroke,
            color: "transparent",
          }}
          initial={{ color: "transparent" }}
          whileHover={{
            color: `hsl(var(--${colorKey}))`,
            transition: { duration: 0.4 },
          }}
        >
          {number}
        </motion.div>
      </motion.div>
    </div>
  );
};
