"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageSliderProps {
  images: string[];
  aspectRatio?: string;
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  imageClassName?: string;
  indicatorType?: "dots" | "strips";
  onImageChange?: (index: number) => void;
}

export default function ImageSlider({
  images,
  aspectRatio = "aspect-[4/3]",
  showArrows = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 3000, // Default to 3 seconds
  className,
  imageClassName,
  indicatorType = "strips",
  onImageChange,
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      onImageChange?.(newIndex);
      return newIndex;
    });
  }, [images.length, onImageChange]);

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    onImageChange?.(index);
  };

  // Auto-play functionality - Fixed to use useEffect
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const interval = setInterval(nextImage, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, images.length, autoPlayInterval, currentImageIndex, nextImage]);

  if (!images.length) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-200 rounded-lg",
          aspectRatio,
          className
        )}
      >
        <p className="text-neutral-300">No images available</p>
      </div>
    );
  }

  return (
    <Card className={cn("bg-transparent border-0 overflow-hidden", className)}>
      <div className={cn("relative overflow-hidden ", aspectRatio)}>
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`Slide ${currentImageIndex + 1}`}
          fill
          className={cn(
            "object-cover transition-all duration-500",
            imageClassName
          )}
        />

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="flex justify-center space-x-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "transition-all duration-300 cursor-pointer",
                indicatorType === "dots"
                  ? "w-3 h-3 rounded-full"
                  : "w-14 h-[2px]",
                index === currentImageIndex
                  ? "bg-primary"
                  : "bg-neutral-600 hover:bg-neutral-500"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Card>
  );
}
