/* eslint-disable @next/next/no-img-element */
import StrokeNumber from "@/components/stroke-number";
import { Play } from "lucide-react";
import React from "react";
import * as motion from "motion/react-client";
import { ImpactHighlight } from "@/types/about-us";
import { VideoPlayButton } from "@/components/video-play-button";

type ProcedureProps = {
  bgUrl?: string;
  title?: string;
  highlights: ImpactHighlight[];
};

export default function MarketingSection({
  bgUrl,
  highlights,
}: ProcedureProps) {
  return (
    <div className="relative bg-background">
      {/* Content container */}
      <div className="z-10 pt-32 pb-20 px-4 md:px-8 lg:px-12 xl:px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-center text-center container mx-auto max-w-5xl"
        >
          {/* Main heading */}
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-center md:text-left lg:text-center">
            It&apos;s Time To Take Your Digital Marketing
            <img
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/content-image-small-size-4.png"
              alt="Marketing visual"
              className="overflow-hidden rounded-4xl inline-block md:relative top-[-0.5rem] md:top-0 md:left-[-1.5rem] mx-2 md:mx-4 h-full"
            />
            To The Next Level
            <span className="inline-flex -space-x-2 relative">
              <img
                src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team1"
                alt="Team member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team2"
                alt="Team member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team3"
                alt="Team member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </span>
            We Are Always Here To Help You Grow Your Business
            <VideoPlayButton
              videoUrl="https://www.youtube.com/watch?v=CfQXgDYzYZI"
              size="sm"
            >
              <button className="size-11 cursor-pointer mx-4 relative top-0.5 rounded-full inline-flex justify-center text-white p-1 bg-primary">
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
                number={highlight?.count}
                className="lg:text-[7rem] md:text-[6rem] text-[5rem]"
              />
              <span className="text-2xl text-neutral-300 leading-10">
                {highlight?.title}
              </span>
            </div>
          ))}
          {/* <div className="flex items-center text-left gap-6 lg:gap-12">
                        <StrokeNumber animate number={10} className='lg:text-[7rem] md:text-[6rem] text-[5rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Years Experience</span>
                    </div>
                    <div className="flex items-center text-left gap-6 lg:gap-12">
                        <StrokeNumber animate number={12} className='lg:text-[7rem] md:text-[6rem] text-[5rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Professional Peoples</span>
                    </div>
                    <div className="flex items-center text-left gap-6 lg:gap-12">
                        <StrokeNumber animate number={50} className='lg:text-[7rem] md:text-[6rem] text-[5rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Clients Statisfied</span>

                    </div>
                    <div className="flex items-center text-left gap-6 lg:gap-12">
                        <StrokeNumber animate number={90} className='lg:text-[7rem] md:text-[6rem] text-[5rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Projects Compeleted</span>
                    </div> */}
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
