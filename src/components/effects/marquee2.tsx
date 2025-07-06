"use client";

import { cn } from "@/lib/utils";
import type React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  repeat?: number;
  vertical?: boolean;
}

export function Marquee2({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
  repeat = 2,
  vertical = false,
  ...props
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "group/item2 flex overflow-hidden p-2 [--duration:25s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={
        {
          "--duration": speedMap[speed],
        } as React.CSSProperties
      }
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex  shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee2 ": !vertical,
            "animate-marquee2-vertical flex-col": vertical,
            "group-hover/item2:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
          style={{
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
