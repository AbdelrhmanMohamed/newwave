import Link from "next/link";
import React from "react";
import { ChevronLeftIcon } from "../icons";
import ButtonLine from "../headings/button-line";

type CareerCardProps = {
  jobTitle: string;
  jobDescription: string;
  href: string;
};

export default function CareerCard({
  jobTitle,
  jobDescription,
  href,
}: CareerCardProps) {
  return (
    <div className="group/edit relative  w-full bg-black border border-primary text-neutral-400 py-4 md:py-8 px-8 lg:px-16 hover:bg-primary hover:text-white transition-all duration-500 flex justify-between items-start sm:items-center mb-4 flex-col sm:flex-row gap-4">
      <div>
        <Link href={href}>
          <h3 className="text-[1.8rem] font-semibold">{jobTitle}</h3>
        </Link>
        <p className="mt-1 text-sm">{jobDescription}</p>
      </div>
      <div className="flex items-center gap-4  flex-row-reverse sm:flex-row">
        <Link
          href={href}
          className="invisible opacity-0 group-hover/edit:opacity-100 transition-all duration-500 group-hover/edit:block group-hover/edit:visible sm:translate-x-20 -translate-x-16"
        >
          <ButtonLine title="View more" className="hover:text-black" isBlack />
        </Link>
        <ChevronLeftIcon className="text-primary visible group-hover/edit:opacity-0 transition-all duration-500 relative group-hover/edit:translate-x-8 group-hover/edit:invisible" />
      </div>
    </div>
  );
}
