import React from "react";
import Image from "next/image";
import { Asterisk, TargetIcon } from "lucide-react";
import { Topic } from "@/types/service";
import BlockRendererClient from "@/components/block-render";
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
      <div className="relative px-10 pl-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="md:col-span-1 flex items-center md:items-start gap-12">
            <Image
              src={image1Url}
              alt="Image 1"
              width={300}
              height={400}
              className="object-contain relative top-5"
            />
            <Image
              src={image2Url}
              alt="Image 2"
              width={300}
              height={400}
              className="object-contain relative top-20"
            />
          </div>
          <div className="md:col-span-1 space-y-8">
            {topics.map((topic) => (
              <div key={topic.id} className="flex items-start gap-3 pt-20">
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
      <div className="grid mt-16 justify-center items-center grid-cols-3 gap-4 px-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" text-neutral-400 flex justify-center gap-2 border-r border-neutral-600 last:border-r-0 px-10"
          >
            <Asterisk className="w-9 h-9 min-w-9 min-h-9 text-primary" />
            <p className="text-neutral-400 ">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
