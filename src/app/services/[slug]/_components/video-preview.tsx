import React from "react";
import { VideoPlayButton } from "@/components/video-play-button";
import Image from "next/image";
import { getVideoIdFromYoutubeUrl } from "@/lib/utils";

export default function VideoPreviewSection() {
  const videoUrl = "https://www.youtube.com/watch?v=VxPRR8SyeUQ";
  const videoId = getVideoIdFromYoutubeUrl(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="mt-20">
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
        Tellus cras adipiscing
      </h2>
      <div className="grid lg:grid-cols-2 gap-6 items-center justify-center text-sm">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu scelerisque
            ut, vehicula a erat. Phasellus ac sem sed erat posuere semper sed ac
            nunc. Vestibulum tempus neque sit amet sapien sod ales, et
            pulvinarquam dignissim. Mauris feugiat, nisi nec dapibus dictum,
            ligula nulla gravida ante, non aliquet odio elit ac orci. Curabitur
            tincidunt convallis magna, sit amet porttitor libero feugiat
            sagittis. Sed eu nibh arcu.Nunc eu rhoncus justo,.
          </p>
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
                <VideoPlayButton
                  videoUrl={videoUrl}
                  size="sm"
                  // onPlay={() => console.log("Video started playing")}
                  // onClose={() => console.log("Video modal closed")}
                />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-neutral-300 max-w-md">
            &quot;Aliquam libero sem, rutrum eu scelerisque ut, vehicula a erat.
            Phasellus ac sem sed erat posuere semper sed ac nunc. Vestibulum in
            ipsum velit.&quot;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
