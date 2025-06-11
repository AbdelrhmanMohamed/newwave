import BlockRendererClient from "@/components/block-render";
import AnimatedText from "@/components/effects/animate-text";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import React from "react";

type MarketProps = {
  title: string;
  description: BlocksContent;
};

export default function Market({ title, description }: MarketProps) {
  return (
    <div className="border border-primary p-6 md:p-8 bg-background/90 relative z-20 shadow">
      <AnimatedText
        text={title}
        className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap justify-center"
        once={false}
      />
      <div className="leading-6 text-neutral-300 mt-4 [& >*]:mb-2">
        <BlockRendererClient content={description || []} />
      </div>
    </div>
  );
}
