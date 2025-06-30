import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden mb-10", className)}>
      <div className="flex animate-marquee">
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
}
