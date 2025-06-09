import React from "react";
import { VideoPlayButton } from "@/components/video-play-button";
import Image from "next/image";
import { getVideoIdFromYoutubeUrl } from "@/lib/utils";

type Props = {
  videoUrl: string;
  title: string;
  description1?: string;
  description2?: string;
};

export default function VideoPreviewSection({
  videoUrl,
  title,
  description1 = "",
  description2 = "",
}: Props) {
  const videoId = getVideoIdFromYoutubeUrl(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="mt-20">
      <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-4 max-w-5xl">
        {title}
      </h2>
      <div className="grid lg:grid-cols-2 gap-6 items-center justify-center text-sm">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">{description1}</p>
        </div>

        {/* Right Content - Video Preview */}
        <div className="flex items-center gap-8 justify-center ">
          <div className="relative">
            <div className="relative w-64 h-26">
              {/* Background Image */}
              <Image
                src={thumbnailUrl}
                alt="Service background"
                className="w-full h-full object-cover"
                style={{
                  borderRadius: "120px",
                }}
                fill
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <VideoPlayButton videoUrl={videoUrl} size="sm" />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-neutral-300 max-w-md">
            &quot;{description2}&quot;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
