import React from "react";
import Button from "@/components/ui/nw-button";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";
import InlineSvg from "../inline-svg";

type ProcedureCardProps = {
  IconUrl: string;
  title: string;
  href?: string;
};

export default function ProcedureCard({
  IconUrl,
  title,
  href,
}: ProcedureCardProps) {
  return (
    <div className="p-8">
      <div className="bordered bg-transparent hover:bg-primary transition duration-500  py-12 px-2 flex flex-col items-center justify-center group/item text-primary hover:text-white">
        <InlineSvg className="size-24" url={getImageUrl(IconUrl)} />
        <h1 className="text-2xl font-medium text-center mt-6 mb-12 text-white">
          {title}
        </h1>
        <Link href={href || "#"} className="w-fit">
          <Button
            className="w-full hover:!text-white hover:!border-white"
            label="Read More"
            dotClassName="group-hover/item:bg-black transition duration-500 group-hover:!bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
