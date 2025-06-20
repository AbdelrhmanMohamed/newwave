import React from "react";
import { Asterisk, CalendarDays, Presentation } from "lucide-react";
import Image from "next/image";
import { DataWithMedia } from "@/types/common";
// import * as motion from "motion/react-client";

type GlobalCollaborationProps = {
  title: string;
  description: string;
  topics: DataWithMedia[];
  imageUrl: string;
  features: string[];
  benefitsTitle: string;
};

export default function GlobalCollaboration({
  title,
  description,
  topics,
  imageUrl,
  features,
  benefitsTitle,
}: GlobalCollaborationProps) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-6 leading-14 ">
        {title}
      </h1>
      <p className="text-neutral-300 max-w-5xl mx-auto mt-2">{description}</p>
      <div className="relative mt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start text-sm">
          <div className="col-span-12 lg:col-span-5 ">
            <Image
              src={imageUrl}
              alt="Image 1"
              width={620}
              height={500}
              className="w-full h-[400px] md:h-[500px] lg:h-[500px] object-cover"
            />
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-4">
            {topics.map((topic, index) => (
              <div key={topic.id} className="flex items-start gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    {index === 0 ? (
                      <CalendarDays className="w-6 h-6 min-w-6 min-h-6 text-primary" />
                    ) : (
                      <Presentation className="w-6 h-6 min-w-6 min-h-6 text-primary" />
                    )}
                    <h5 className="text-white font-medium text-2xl">
                      {topic.title}
                    </h5>
                  </div>
                  <div className="text-neutral-300 leading-relaxed text-sm text-left max-w-4xl px-8">
                    {topic.description}
                  </div>
                </div>
              </div>
            ))}
            {/* Bottom Features */}
            <p className="text-white text-base font-medium mt-16 text-left px-2">
              {benefitsTitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-start  items-center gap-4 px-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" text-neutral-400 flex justify-start gap-2"
                >
                  <Asterisk className="w-6 h-6 min-w-6 min-h-6 text-primary" />
                  <p className="text-neutral-400 text-left">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
