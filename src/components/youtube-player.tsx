"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayClick = () => {
    setIsVideoLoaded(true);
  };
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full mx-auto overflow-hidden shadow-lg">
      {/* Video Player Area */}
      <div className="relative aspect-video bg-black">
        {!isVideoLoaded ? (
          // Thumbnail with play button overlay
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={handlePlayClick}
          >
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black hover:bg-primary text-white shadow-lg transform group-hover:scale-110 transition-all duration-500 cursor-pointer"
                onClick={handlePlayClick}
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 fill-white" />
              </Button>
            </div>
          </div>
        ) : (
          // YouTube iframe
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
