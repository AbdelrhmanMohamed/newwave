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

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 320 512"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        stroke="currentColor"
        strokeWidth="0px"
      ></path>
    </svg>
  );
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={22.7}
      style={{
        strokeWidth: 1,
      }}
      className={`newwave-icon ${className}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M.5 11h23M.3 11.5 11.2.7M0 10.4l11.2 11.2"
      />
    </svg>
  );
}
export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={22.7}
      style={{
        strokeWidth: 1,
      }}
      className={`newwave-icon ${className}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M0 11h23M11.2.7l11.2 11.2M11.2 21.9l11.2-11.2"
      />
    </svg>
  );
}