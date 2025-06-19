import React from "react";
import { getImageUrl } from "@/lib/utils";
import * as motion from "motion/react-client";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "../block-render";
import Image from "next/image";

type BorderCardProps = {
  iconUrl: string;
  title: string;
  description: string | BlocksContent;
  href?: string;
};

export default function BorderCard({
  iconUrl,
  title,
  description,
}: BorderCardProps) {
  return (
    <div className="relative group p-4 border-[1px] border-transparent hover:border-primary transition duration-700 group hover:bg-primary/5">
      {/* Content */}
      <div className="relative z-10 flex h-full text-lg  text-neutral-700 flex-col">
        <div className="flex items-center mb-2 gap-2">
          <Image
            src={getImageUrl(iconUrl)}
            className="size-[2rem] mr-2"
            alt="Icon"
            width={32}
            height={32}
            loading="lazy"
          />
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <div className="text-sm text-neutral-400 px-1.5">
          {/* Render description as text or blocks */}
          {/* If description is a string, render it directly */}
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            // If description is BlocksContent, render it using BlockRendererClient
            <BlockRendererClient content={description} />
          )}
        </div>
      </div>

      {/* Top Border */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-neutral-600/60"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      {/* Right Border */}
      <motion.div
        className="absolute top-0 right-0 w-[1px] bg-neutral-600/60"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Bottom Border */}
      <motion.div
        className="absolute bottom-0 right-0 h-[1px] bg-neutral-600/60"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      />
      {/* Left Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-[1px] bg-neutral-600/60"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}
