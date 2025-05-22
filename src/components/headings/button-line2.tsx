import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  reverse?: boolean;
};

export default function ButtonLine2({
  title,
  onClick,
  disabled,
  className,
  reverse,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center text-sm md:text-base gap-3 group text-white hover:text-primary transition-all  cursor-pointer",
        className
      )}
    >
      {reverse ? (
        <>
          {title}
          <span className="size-2 bg-primary rounded-full group-hover:bg-white transition relative">
            <div className="absolute bg-neutral-500 left-4 top-5/12 w-10 h-[0.8px] group-hover:w-0 transition-all duration-300 ease-linear pointer-events-none" />
          </span>
        </>
      ) : (
        <>
          <span className="size-2 bg-primary rounded-full group-hover:bg-white transition relative">
            <div className="absolute bg-neutral-500 right-4 top-5/12 w-10 h-[0.8px] group-hover:w-0 transition-all duration-300 ease-linear pointer-events-none" />
          </span>
          {title}
        </>
      )}
    </button>
  );
}
