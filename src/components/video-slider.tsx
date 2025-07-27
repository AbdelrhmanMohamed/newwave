"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, getVideoIdFromYoutubeUrl } from "@/lib/utils";
import YouTubePlayer from "./youtube-player";

export interface VideosSliderProps {
  links: string[];
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  imageClassName?: string;
  indicatorType?: "dots" | "strips";
  onImageChange?: (index: number) => void;
}

export default function VideoSlider({
  links,
  showArrows = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  className,
  indicatorType = "strips",
  onImageChange,
}: VideosSliderProps) {
  const [curVideoIndex, setCurVideoIndex] = useState(0);

  const nextVideo = useCallback(() => {
    setCurVideoIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % links.length;
      onImageChange?.(newIndex);
      return newIndex;
    });
  }, [links.length, onImageChange]);

  const prevImage = () => {
    const newIndex = (curVideoIndex - 1 + links.length) % links.length;
    setCurVideoIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const goToImage = (index: number) => {
    setCurVideoIndex(index);
    onImageChange?.(index);
  };

  useEffect(() => {
    if (autoPlay && links.length > 1) {
      const interval = setInterval(nextVideo, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, links.length, autoPlayInterval, curVideoIndex, nextVideo]);

  if (!links.length) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-200 rounded-lg h-64",
          className
        )}
      >
        <p className="text-neutral-300">No Video available</p>
      </div>
    );
  }

  return (
    <Card className={cn("bg-transparent border-0", className)}>
      <div className="relative w-full flex justify-center">
        <YouTubePlayer
          videoId={getVideoIdFromYoutubeUrl(links[curVideoIndex])}
          title={"description"}
        />

        {showArrows && links.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute cursor-pointer hover:border border-primary/60 left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute cursor-pointer border-primary/60  right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white hover:border "
              onClick={nextVideo}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>

      {showIndicators && links.length > 1 && (
        <div className="flex justify-center space-x-3 mt-6">
          {links.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "transition-all duration-300 cursor-pointer",
                indicatorType === "dots"
                  ? "w-3 h-3 rounded-full"
                  : "w-14 h-[2px]",
                index === curVideoIndex
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
