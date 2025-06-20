import React from "react";
import InlineSvg from "../inline-svg";
import { getImageUrl } from "@/lib/utils";

type BaseCardProps = {
  iconUrl: string;
  title: string;
  description: string;
};

export default function BaseCard({
  iconUrl,
  title,
  description,
}: BaseCardProps) {
  console.log("BaseCard rendered with iconUrl:", iconUrl);
  return (
    <div className="p-8 border border-primary bg-black group flex flex-col items-center text-center gap-4 h-full">
      <div className="flex items-center justify-center p-4 border border-primary mb-2 rounded-full fill-primary group-hover:fill-white text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 size-24">
        {iconUrl && (
          <InlineSvg
            className="size-[4rem] stroke-6 "
            url={getImageUrl(iconUrl)}
          />
        )}
      </div>
      {<h3 className="text-2xl font-semibold">{title}</h3>}
      {<p className="text-sm text-neutral-300 leading-6">{description}</p>}
    </div>
  );
}
