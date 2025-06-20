// import SectionHead from "@/components/headings/section-head";
import React from "react";
// import * as motion from "motion/react-client";
// import AnimatedText from "@/components/effects/animate-text";
import AnimatedText from "@/components/effects/animate-text";
import BaseCard from "@/components/cards/base-card";
import { Asterisk } from "lucide-react";
import { DataWithMedia } from "@/types/common";

type ProcedureProps = {
  bgUrl?: string;
  title: string;
  description?: string;
  technologies: DataWithMedia[];
  tp_benefits_title?: string;
  tp_benefits_description?: string;
  tp_benefits_points: string[];
};

export default function TechnologySection({
  bgUrl,
  technologies,
  title,
  description,
  tp_benefits_title,
  tp_benefits_description,
  tp_benefits_points = [],
}: ProcedureProps) {
  return (
    <div className="relative bg-background">
      <div className="py-24 px-4 md:px-6 lg:px-10 xl:px-20 z-10 relative">
        {/* <div className="text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <SectionHead
              title="Purpose Driven"
              show={{
                start: true,
                end: true,
              }}
              animate
            />
          </motion.div>
        </div> */}
        <div className="break-words w-full text-center flex items-center justify-center ">
          <AnimatedText
            text={title}
            className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-6 leading-14 flex flex-wrap "
            once={false}
          />
        </div>
        <p className="text-lg text-neutral-300 text-center max-w-5xl mx-auto">
          {description}
        </p>
        <div className="grid mt-20 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start">
          {technologies.map((item) => (
            <BaseCard
              key={item.id}
              iconUrl={item?.icon?.url || ""}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
        {/* Benefits for Clients */}
        <div className="">
          <h3 className="mt-8 text-xl"> {tp_benefits_title}</h3>
          <p className="text-neutral-300 text-sm max-w-3xl mt-1">
            {tp_benefits_description}
          </p>
          <div className="px-2 py-5">
            <ul className="list-disc grid grid-cols-1 md:grid-cols-2 space-y-2 text-neutral-300">
              {tp_benefits_points.map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Asterisk className="w-5 h-5 mt-[2px] text-primary inline-block mr-1 mb-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="bg-cover pointer-events-none bg-black absolute top-0 bg-center mix-blend-luminosity opacity-10 w-full h-full"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      />
    </div>
  );
}
