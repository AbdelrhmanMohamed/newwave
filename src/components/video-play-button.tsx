"use client";

import type React from "react";

import { useState } from "react";
import { Play, XIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getVideoIdFromYoutubeUrl } from "@/lib/utils";

interface VideoPlayButtonProps {
  /** YouTube video ID or full YouTube URL */
  videoUrl: string;
  /** Size of the play button - default is 'lg' */
  size?: "sm" | "md" | "lg" | "xl";
  /** Custom className for the play button */
  className?: string;
  /** Whether to autoplay the video when modal opens */
  autoplay?: boolean;
  /** Custom button content - if not provided, uses default Play icon */
  children?: React.ReactNode;
  /** Callback when video modal opens */
  onPlay?: () => void;
  /** Callback when video modal closes */
  onClose?: () => void;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export function VideoPlayButton({
  videoUrl,
  size = "md",
  className = "",
  autoplay = true,
  children,
  onPlay,
  onClose,
}: VideoPlayButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoId = getVideoIdFromYoutubeUrl(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}${
    autoplay ? "?autoplay=1" : ""
  }`;

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (open) {
      onPlay?.();
    } else {
      onClose?.();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <button
            className={`
            ${sizeClasses[size]} 
            rounded-full 
            bg-black 
            hover:bg-primary
            shadow-2xl 
            transition-all 
            duration-500
            flex
            items-center
            justify-center
            cursor-pointer 
            ${className}
          `}
          >
            <Play
              className={`${iconSizes[size]} text-white ml-1 rounded-2xl`}
              fill="currentColor"
            />
          </button>
        )}
      </DialogTrigger>
      <DialogContent
        closeIcon={false}
        className="w-full h-full !max-w-full p-0 border-0 bg-black/20"
      >
        <DialogTitle className="sr-only">Watch Video</DialogTitle>
        <span
          className="ring-offset-background text-primary hover:text-white transition-all duration-500 focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs  focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-10 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <XIcon className="stroke-1" />
        </span>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden">
            <iframe
              src={embedUrl}
              title="YouTube video player"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
