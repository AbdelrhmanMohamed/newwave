import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
  isBlack?: boolean;
};

export default function ButtonLine({ title, className, onClick, isBlack }: Props) {
  return (
    <button className={cn("cursor-pointer flex items-center gap-3 group text-white hover:text-primary transition-all", className)} onClick={onClick}>
      <div className="flex items-center gap-1">
        <div className={cn("bg-neutral-500 w-10 h-[0.8px] group-hover:w-0 transition-all duration-300 ease-linear", isBlack && "bg-black h-[1.6px]")} />
        <div
          className={cn(
            "size-2 bg-primary rounded-full group-hover:bg-white transition", isBlack && "bg-white group-hover:bg-white"
          )}
        />
      </div>
      {title}
      <div className={cn("bg-neutral-500 w-0 h-[0.8px] group-hover:w-10 transition-all duration-300 ease-linear", isBlack && "bg-black h-[1.6px]")} />
    </button>
  );
}
