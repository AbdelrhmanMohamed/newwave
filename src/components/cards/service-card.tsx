import React from "react";
import Image from "next/image";
// import { getImageUrl } from '@/lib/utils';
import ButtonLine from "../headings/button-line";
import Link from "next/link";

type serviceCardProps = {
  title: string;
  imageUrl: string;
  href?: string;
};

export default function ServiceCard({
  title,
  imageUrl,
  href,
}: serviceCardProps) {
  return (
    <div className="group/item flex flex-col items-center justify-start h-full w-full ">
      <Link href={href || "#"} className="relative overflow-hidden h-62 w-full">
        <div className="h-full w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover/item:scale-110 transition-transform duration-500"
          />
          <div className="bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover/item:opacity-100 absolute inset-0 p-4 text-center z-10 mt-auto transition-all duration-500 h-20 flex flex-col items-center justify-center">
            <ButtonLine title="Read More" />
          </div>
        </div>
      </Link>
      <Link href={href || "#"}>
        <h3 className="text-[1.4rem] font-semibold text-center mt-8 mb-auto group-hover/item:text-primary transition-colors duration-300">
          {title}
        </h3>
      </Link>
    </div>
  );
}
