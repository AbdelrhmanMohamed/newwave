import React from "react";
import Image from "next/image";
import SectionHead from "@/components/headings/section-head";
// import ButtonLine from "@/components/headings/button-line";
import AnimatedText from "@/components/effects/animate-text";
import * as motion from "motion/react-client";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/components/block-render";

type CardProps = {
  title: string;
  description: BlocksContent;
  imageUrl: string;
  section: string;
};

export default function Card({
  title,
  description,
  section,
  imageUrl,
}: CardProps) {
  return (
    <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-0 items-center justify-center">
      {/** left content */}
      <div className="col-span-7 flex-1 space-y-2 border border-primary lg:border-r-0 xl:p-12 lg:p-12 md:p-12 sm:p-10 p-8">
        <motion.div
          initial={{ x: 20 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <SectionHead
            title={section}
            show={{
              start: true,
            }}
            animate
          />
        </motion.div>
        <div className="break-words">
          <AnimatedText
            text={title}
            once={true}
            className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white md:my-6 my-4 xl:my-8 md:leading-12 leading-10 xl:leading-14 flex flex-wrap "
          />
        </div>
        <div className="text-[15px] text-neutral-400 [&>*]:mb-2">
          <BlockRendererClient content={description} />
        </div>

        {/* <ButtonLine title="Read More" /> */}
      </div>
      {/** right Image */}
      <div className="flex-none col-span-5 justify-self-end relative w-full h-[450px] lg:h-[700px] order-first lg:order-last">
        <Image src={imageUrl} alt="Card Image" fill className="object-cover" />
      </div>
    </div>
  );
}
