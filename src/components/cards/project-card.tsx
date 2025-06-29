import React from "react";
import Image from "next/image";
// import { getImageUrl } from "@/lib/utils";
import ButtonLine from "../headings/button-line";
import Link from "next/link";

type serviceCardProps = {
  title: string;
  imageUrl: string;
  href?: string;
  description: string;
  className?: string;
};

export default function ProjectCard({
  title,
  imageUrl,
  description,
  href,
  className,
}: serviceCardProps) {
  return (
    <div
      className={`w-full h-full relative group/item overflow-hidden min-w-40 min-h-96 ${className}`}
    >
      <Image src={imageUrl} alt={title} fill className="object-cover" />
      <div className="bg-black/60 backdrop-blur-sm translate-y-12/12 text-white group-hover/item:block absolute inset-0 p-4 text-left z-10 top-1/2 h-[50%] group-hover/item:translate-y-0 transition-all duration-500">
        <Link href={href || "#"}>
          <h2 className="text-2xl font-semibold mb-4 translate-y-12/12 group-hover/item:translate-y-0 transition-all duration-500 delay-100 hover:text-primary">
            {title}
          </h2>
        </Link>
        <p className="text-sm mb-6 text-neutral-300 line-clamp-2 translate-y-12/12 group-hover/item:translate-y-0 transition-all duration-500 delay-200">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="translate-y-12/12 group-hover/item:translate-y-0 transition-all duration-500 delay-300"
        >
          <ButtonLine title="Read More" />
        </Link>
      </div>
    </div>
  );
}
