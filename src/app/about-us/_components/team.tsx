import MotionClient from "@/app/faq/_components/motion-client";
import AnimatedText from "@/components/effects/animate-text";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import Image from "next/image";
import { Dots } from "@/components/icons";
// import ButtonLine from "@/components/headings/button-line";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/components/block-render";
import { getImageUrl } from "@/lib/utils";

type OurTeamProps = {
  title: string;
  description: BlocksContent;
  imageUrl?: string;
};

export default function OurTeam({
  title,
  description,
  imageUrl,
}: OurTeamProps) {
  return (
    <div
      className={`flex flex-wrap items-start flex-col-reverse lg:flex-row lg:flex-nowrap gap-16 lg:gap-26 xl:gap-40 overflow-y-hidden`}
    >
      <div
        className={`min-w-full max-w-full lg:min-w-[50%] lg:max-w-[50%] xl:min-w-[50%] xl:max-w-[50%]`}
      >
        <SectionHead
          title="Our Team"
          show={{
            start: true,
          }}
          animate
        />
        <AnimatedText
          text={title}
          className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-8"
        />
        <div className="text-gray-300 text-[15px] leading-7">
          <BlockRendererClient content={description || []} />
          {/* <div className="mt-8">
            <ButtonLine title="Read More" />
          </div> */}
        </div>
      </div>
      <div
        className={`w-full xl:w-11/12 border border-primary py-10 pl-0 flex flex-col justify-end relative`}
      >
        <MotionClient
          initial={{ y: -44 }}
          animate={{ y: 44 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`relative h-[420px] sm:h-[450px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center right-12 lg:right-24 `}
        >
          <Image
            src={getImageUrl(imageUrl) || "/images/about-us/team.webp"}
            alt="New Wave Team"
            fill
            className="object-cover"
          />
        </MotionClient>
        <MotionClient
          initial={{ y: -44 }}
          animate={{ y: 40 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute hidden sm:block right-0 bottom-0 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]`}
        >
          <Dots />
        </MotionClient>
      </div>
    </div>
  );
}
