import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  animate?: boolean;
  show?: {
    start?: boolean;
    end?: boolean;
  };
};

export default function SectionHead({ title, animate, show }: Props) {
  return (
    <div className="flex items-center gap-5">
      {/** start line */}
      {show?.start && (
        <div className="flex items-center gap-3">
          <div className="bg-neutral-500 w-8.5 h-[1.7px]" />
          <div
            className={cn(
              "size-2.5 bg-primary rounded-full",
              animate && "animate-zoom"
            )}
          />
        </div>
      )}
      <h5 className="text-xl text-neutral-500">{title}</h5>
      {/** end line */}
      {show?.end && (
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "size-2.5 bg-primary rounded-full",
              animate && "animate-zoom"
            )}
          />
          <div className="bg-neutral-500 w-8.5 h-[1.7px]" />
        </div>
      )}
    </div>
  );
}
