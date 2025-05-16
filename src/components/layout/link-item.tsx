"use client";
import { usePathname } from "next/navigation";
import React, { memo } from "react";
import Link from "next/link";
import { Link_Item } from "@/types/link";

function LinkItem({ name, href }: Link_Item) {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName.startsWith(path)
      ? "text-primary font-semibold"
      : "text-black";
  };
  return (
    <Link
      href={href}
      className={`uppercase text-white tracking-wider text-sm font-medium hover:text-red-600 transition-colors ${isActive(
        href
      )}`}
    >
      {name}
    </Link>
  );
}

export default memo(LinkItem);
LinkItem.displayName = "LinkItem";
