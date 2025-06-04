import React from "react";
import InlineSvg from "./inline-svg";
import { getImageUrl } from "@/lib/utils";

type ProcedureCardProps = {
  IconUrl?: string;
  title: string;
  href?: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
};

export default function ProcedureCard({
  IconUrl,
  title,
  description,
  icon,
}: ProcedureCardProps) {
  return (
    <div className="p-8">
      <div className="bordered bg-transparent hover:bg-primary transition duration-500  py-12 px-2 flex flex-col items-center justify-center group text-primary h-full hover:!text-white">
        {IconUrl && (
          <InlineSvg className="size-[4rem]" url={getImageUrl(IconUrl)} />
        )}
        {icon && icon}
        <h1 className="text-2xl font-medium text-left mt-6 mb-4 text-white">
          {title}
        </h1>
        <div className="text-left text-[15px] text-gray-300 px-4 leading-7 group-hover:text-white ">
          {description}
        </div>
      </div>
    </div>
  );
}
