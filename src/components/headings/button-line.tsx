import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
};

export default function ButtonLine({ title }: Props) {
  return (
    <button className="cursor-pointer flex items-center gap-3 group text-white hover:text-primary transition-all">
      <div className="flex items-center gap-1">
        <div className="bg-neutral-500 w-10 h-[0.8px] group-hover:w-0 transition-all duration-300 ease-linear" />
        <div
          className={cn(
            "size-2 bg-primary rounded-full group-hover:bg-white transition"
          )}
        />
      </div>
      {title}
      <div className="bg-neutral-500 w-0 h-[0.8px] group-hover:w-10 transition-all duration-300 ease-linear" />
    </button>
  );
}
