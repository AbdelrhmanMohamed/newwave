import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";

type IconProps = {
  className?: string;
};

export function RightIconWitArrow() {
  return (
    <span className="relative inline-block before:content-[''] before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:w-3.5 before:h-0.5 before:bg-white before:opacity-0 group-hover:before:opacity-100 transition-all duration-500 group-hover:translate-x-1.5 before:transition-all before:duration-500">
      <ChevronRight className="text-white" />
    </span>
  );
}

export function LeftIconWitArrow({ className }: IconProps) {
  return (
    <span
      className={cn(
        "relative inline-block before:content-[''] before:absolute before:top-1/2 before:right-0 before:translate-y-[-50%] before:w-3.5 before:h-0.5 before:bg-white before:opacity-0 group-hover:before:opacity-100 transition-all duration-500 group-hover:-translate-x-1.5 before:transition-all before:duration-500 text-white",
        className
      )}
    >
      <ChevronLeft className="text-inherit" />
    </span>
  );
}
