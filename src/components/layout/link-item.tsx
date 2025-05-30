"use client";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import Link from "next/link";
import { Link_Item } from "@/types/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { motion } from "motion/react";

function LinkItem({ name, href, links }: Link_Item) {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path
      ? "text-primary"
      : "text-white";
  };
  if (links && links.length > 0) {
    return (
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button className="font-medium text-[13px] cursor-pointer hover:text-primary transition duration-500">
            {name}
          </button>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-60  bg-background backdrop-blur-lg border border-neutral-700 rounded-none p-1 py-4 pb-0"
          sideOffset={16}
        >
          <div className="flex flex-col w-full">
            {links.map((link) => (
              <Link
                key={link.name}
                href={`${link.href}`}
                className={`uppercase mb-4 tracking-[2.5px] text-[13px] hover:text-primary flex gap-2 items-center group hover:pl-4  font-medium duration-500 transition-all ${isActive(
                  link.href
                )}`}
              >
                <motion.span
                  className="bg-white size-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeIn" }}
                />
                <span className="transition duration-700">{link.name}</span>
              </Link>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }
  return (
    <Link
      href={href}
      className={`uppercase my-4 tracking-[2.5px] text-[13px] font-medium hover:text-primary transition-colors duration-300 ${isActive(
        href
      )}`}
    >
      {name}
    </Link>
  );
}

export default memo(LinkItem);
LinkItem.displayName = "LinkItem";
