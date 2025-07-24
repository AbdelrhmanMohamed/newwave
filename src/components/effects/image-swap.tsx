"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ImageSwapProps {
  firstImage: string;
  secondImage: string;
  firstAlt?: string;
  secondAlt?: string;
  width?: number;
  height?: number;
  className?: string;
  animationDuration?: number;
  href: string;
}

export default function ImageSwap({
  firstImage,
  secondImage,
  firstAlt = "First image",
  secondAlt = "Second image",
  width = 300, // Default width (36 * 4 for better quality)
  height = 80, // Default height (10 * 4 for better quality)
  className = "",
  animationDuration = 400,
  href,
}: ImageSwapProps) {
  return (
    <Link href={href} target="_blank">
      <div className={cn("relative overflow-hidden group", className)}>
        {/* First image (visible by default, slides up and fades out on hover) */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full"
          style={{ transitionDuration: `${animationDuration}ms` }}
        >
          <Image
            src={firstImage || "/placeholder.svg"}
            alt={firstAlt}
            width={width}
            height={height}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Second image (starts below, slides up on hover) */}
        <div
          className="absolute inset-0 translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
          style={{ transitionDuration: `${animationDuration}ms` }}
        >
          <Image
            src={secondImage || "/placeholder.svg"}
            alt={secondAlt}
            width={width}
            height={height}
            className="object-contain w-full h-full "
          />
        </div>

        {/* Invisible spacer to maintain dimensions */}
        <div style={{ width, height }} aria-hidden="true" />
      </div>
    </Link>
  );
}
