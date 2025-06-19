// import SectionHead from "@/components/headings/section-head";
import React from "react";
// import * as motion from "motion/react-client";
// import AnimatedText from "@/components/effects/animate-text";
import AnimatedText from "@/components/effects/animate-text";
import BaseCard from "@/components/cards/base-card";
import { TechnologyPartner } from "@/types/partenars";
import { Circle } from "lucide-react";

type ProcedureProps = {
  bgUrl?: string;
  title: string;
  description?: string;
  technologies: TechnologyPartner[];
};

export default function TechnologySection({
  bgUrl,
  technologies,
  title,
  description,
}: ProcedureProps) {
  return (
    <div className="relative bg-background">
      <div className="py-24 px-0 md:px-2 lg:px-8 z-10 relative">
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
        <div className="grid mt-20 gap-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-start">
          {technologies.map((item) => (
            <BaseCard
              key={item.id}
              iconUrl={item.iconUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        {/* Benefits for Clients */}
        <div className="">
          <h3 className="mt-8 text-xl"> Benefits for Our Clients</h3>
          <p className="text-neutral-300 text-sm max-w-3xl mt-1">
            These technology partnerships provide our clients with direct access
            to:
          </p>
          <div className="px-2 py-5">
            <ul className="list-disc grid grid-cols-2 space-y-2 text-neutral-300">
              <li className="flex items-start space-x-2">
                <Circle className="w-2.5 h-2.5 mt-2  fill-primary stroke-none inline-block mr-1 mb-1" />
                <span>
                  The latest global innovations and emerging event technologies.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Circle className="w-2.5 h-2.5 mt-2 fill-primary stroke-none inline-block mr-1 mb-1" />
                <span>
                  Specialized expertise that complements our in-house
                  capabilities.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Circle className="w-2.5 h-2.5 mt-2  fill-primary stroke-none inline-block mr-1 mb-1" />
                <span>
                  Scalable and reliable technology solutions for complex
                  requirements.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Circle className="w-2.5 h-2.5 mt-2  fill-primary stroke-none inline-block mr-1 mb-1" />
                <span>
                  A competitive edge by incorporating truly novel and impactful
                  experiences into their events.
                </span>
              </li>
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
