import React from "react";
import InlineSvg from "@/components/inline-svg";
import { getImageUrl } from "@/lib/utils";
import * as motion from "motion/react-client";

type BorderCardProps = {
  icon: string | React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  href?: string;
};

export default function BorderCard({
  icon,
  title,
  description,
}: BorderCardProps) {
  return (
    <div className="relative group p-4 border-[1px] border-transparent hover:border-primary transition duration-700 group hover:bg-primary/5">
      {/* Content */}
      <div className="relative z-10 flex h-full text-lg  text-neutral-700 flex-col">
        <div className="flex items-center mb-2 gap-2">
          {typeof icon === "string" ? (
            <InlineSvg className="size-[2rem] mr-2" url={getImageUrl(icon)} />
          ) : (
            icon
          )}
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-neutral-400 px-1.5">{description}</p>
      </div>

      {/* Top Border */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-neutral-600/60"
        initial={{ width: 0 }}
        whileInView ={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Right Border */}
      <motion.div
        className="absolute top-0 right-0 w-[1px] bg-neutral-600/60"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Bottom Border */}
      <motion.div
        className="absolute bottom-0 right-0 h-[1px] bg-neutral-600/60"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
      />
      {/* Left Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-[1px] bg-neutral-600/60"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}
