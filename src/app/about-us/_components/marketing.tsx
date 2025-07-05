import StrokeNumber from "@/components/stroke-number";
import { Play } from "lucide-react";
import React from "react";
import * as motion from "motion/react-client";
import { VideoPlayButton } from "@/components/video-play-button";
import { Achievements, Marketing } from "@/types/common";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

type ProcedureProps = {
  bgUrl?: string;
  title?: string;
  highlights: Achievements[];
  className?: string;
  marketing: Marketing;
};

export default function MarketingSection({
  bgUrl,
  highlights,
  className,
  marketing,
}: ProcedureProps) {
  return (
    <div className={`relative bg-background ${className}`}>
      {/* Content container */}
      <div className="z-10 pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-center justify-center text-center container mx-auto max-w-5xl"
        >
          {/* Main heading */}
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-center md:text-left lg:text-center">
            {marketing?.titleLine1 || "Our Marketing Approach"}
            <Image
              src={getImageUrl(marketing?.image?.url)}
              alt="Marketing visual"
              width={150}
              height={30}
              className="overflow-hidden rounded-4xl inline-block md:relative top-[-0.5rem] md:top-0  mx-2 md:mx-4 object-cover w-36 h-16"
            />
            {marketing?.titleLine2}
            <span className="inline-flex -space-x-2 relative">
              {marketing?.avatars?.map((avatar, index) => (
                <Image
                  key={index}
                  src={getImageUrl(avatar?.url)}
                  alt={`Team member ${index + 1}`}
                  width={32}
                  height={32}
                  className="w-12 h-12 rounded-full border-4 border-background object-cover"
                />
              ))}
            </span>
            {marketing?.titleLine3}
            <VideoPlayButton videoUrl={marketing?.youtube_link || ""} size="sm">
              <button className="size-11 cursor-pointer mx-4 relative top-0.5 rounded-full inline-flex justify-center text-white p-1 bg-primary hover:scale-105 transition-all duration-300">
                <span className="border border-white rounded-full w-full h-full flex items-center justify-center">
                  <span className="bg-white rounded-full p-1">
                    <Play className="w-4 h-4 text-primary fill-primary " />
                  </span>
                </span>
              </button>
            </VideoPlayButton>
          </h1>
        </motion.div>
        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-16 mt-12  justify-center items-center mx-auto w-7/12 sm:6/12 md:w-full">
          {(highlights || []).map((highlight) => (
            <div
              key={highlight?.id}
              className="flex items-center text-left gap-6 lg:gap-12"
            >
              <StrokeNumber
                animate
                number={highlight?.value}
                className="lg:text-[7rem] md:text-[6rem] text-[5rem]"
              />
              <span className="text-2xl text-neutral-300 leading-10">
                {highlight?.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-cover pointer-events-none absolute top-0 bg-center mix-blend-luminosity opacity-15 w-full h-full"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
    </div>
  );
}
