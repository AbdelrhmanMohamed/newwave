import React from "react";
import Image from "next/image";
import { Asterisk, TargetIcon } from "lucide-react";
import { Topic } from "@/types/service";
import BlockRendererClient from "@/components/block-render";
import * as motion from "motion/react-client";
// import { getImageUrl } from "@/lib/utils";

type TopicsSectionProps = {
  topics: Topic[];
  image1Url: string;
  image2Url: string;
  bgUrl: string;
  features: string[];
};

export default function TopicsSection({
  topics,
  image1Url,
  image2Url,
  bgUrl,
  features,
}: TopicsSectionProps) {
  return (
    <div className="pt-16 pb-10 relative mt-40">
      <div className="absolute inset-0 h-[55%] w-full">
        <Image
          src={bgUrl}
          alt="Background Image"
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
        />
      </div>
      <div className="relative px-0 sm:px-4 md:px-8 lg:px-10 lg:pl-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="md:col-span-1 flex items-center md:items-start gap-4 md:gap-8 lg:gap-12">
            <motion.div
              initial={{ translateY: 0 }}
              animate={{ translateY: 50 }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              exit={{ translateY: 0 }}
            >
              <Image
                src={image1Url}
                alt="Image 1"
                width={300}
                height={400}
                className="object-contain relative top-5 lg:w-[300px] md:w-[400px]"
              />
            </motion.div>
            <motion.div
              initial={{ translateY: 0 }}
              animate={{ translateY: -50 }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              exit={{ translateY: 0 }}
            >
              <Image
                src={image2Url}
                alt="Image 2"
                width={300}
                height={400}
                className="object-contain relative top-20 lg:w-[300px] md:w-[400px]"
              />
            </motion.div>
          </div>
          <div className="md:col-span-1 space-y-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="flex items-start gap-3 xl:pt-12 lg:pt-4 pt-16"
              >
                {/* <Image
                  src={
                    getImageUrl(topic?.icon?.url) || "/images/default-icon.png"
                  }
                  alt={topic.title}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                /> */}

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <TargetIcon className="w-4 h-4 text-primary" />
                    <h5 className="text-white font-medium text-2xl">
                      {topic.title}
                    </h5>
                  </div>
                  <div className="text-neutral-400 leading-relaxed text-sm">
                    <BlockRendererClient content={topic.content} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 justify-center items-center gap-4 lg:px-24 md:px-0 px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" text-neutral-400 flex justify-start lg:justify-center gap-2 md:border-r border-neutral-600 last:border-r-0 px-0 lg:px-10"
          >
            <Asterisk className="w-9 h-9 min-w-9 min-h-9 text-primary" />
            <p className="text-neutral-400 ">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
