import React from "react";
import { getVideoIdFromYoutubeUrl } from "@/lib/utils";
import YouTubePlayer from "@/components/youtube-player";

type Props = {
  videoUrl: string;
  description: string;
};

export default function VideoPreviewSection({
  videoUrl,
  description = "",
}: Props) {
  const videoId = getVideoIdFromYoutubeUrl(videoUrl);

  return (
    <div className="">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image */}
        <YouTubePlayer videoId={videoId} title={description} />
      </div>
      <p className="text-neutral-300 leading-relaxed text-center px-4 mt-8">
        {description}
      </p>
    </div>
  );
}
