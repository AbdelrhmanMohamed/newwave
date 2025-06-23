import React from "react";
import Image from "next/image";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { getImageUrl } from "@/lib/utils";
import BlockRendererClient from "@/components/block-render";
import ButtonLine from "@/components/headings/button-line";
import Link from "next/link";

type GlobalPresenceProps = {
  title: string;
  description: BlocksContent;
  imageUrl?: string;
};

export default function GlobalPresence({
  title,
  description,
  imageUrl,
}: GlobalPresenceProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-start items-center h-full relative w-full">
      {/** image */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[55%] h-[550px] lg:h-[650px] xl:h-[610px] relative">
        <Image
          fill
          src={getImageUrl(imageUrl) || "/images/about-us/global-presence.webp"}
          alt="Global Presence"
          className="object-cover object-center"
        />
      </div>
      {/**content */}
      <div className="relative lg:absolute w-full lg:w-[58%] xl:w-[55%] right-0 h-fit z-20 shadow p-6 sm:p-8 lg:p-12 lg:pb-8 sm:pb-4 pb-1 bg-background border border-primary">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="text-[15px] leading-6 mb-4 text-neutral-300">
          <BlockRendererClient content={description || []} />
        </div>
        <Link href="/our-partners" className="mt-4">
          <ButtonLine title="Read More" />
        </Link>
      </div>
    </div>
  );
}
