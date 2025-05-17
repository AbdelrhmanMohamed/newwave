"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LeftIconWitArrow, RightIconWitArrow } from "../icons";
import { Link_Item } from "@/types/link";

type Props = {
  item: Link_Item;
};

export function NestedMobileMenu({ item }: Props) {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName.includes(path)
      ? "bg-primary text-white hover:text-white"
      : "text-white";
  };

  return (
    <div className="xl:hidden">
      <Sheet
        onOpenChange={(val) => {
          setOpen(val);
        }}
        open={open}
      >
        <SheetTrigger asChild>
          <button className="capitalize border-b border-zinc-800 pl-4 pr-2 py-3 text-base font-medium hover:bg-primary transition-colors duration-700 flex justify-between items-center group w-full text-white cursor-pointer">
            {item.name.toLowerCase()}
            <RightIconWitArrow />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-black shadow-2xl w-68 xl:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-[11px] left-2 cursor-pointer"
          >
            <span className="group">
              <LeftIconWitArrow className="text-zinc-500 before:bg-zinc-500" />
            </span>
          </button>
          <nav className="flex flex-col mt-12">
            <div className="px-4 capitalize bg-zinc-800 py-2.5 text-zinc-400 border border-zinc-700">
              {item.name.toLowerCase()}
            </div>
            {(item?.links || []).map((item) => (
              <>
                <Link
                  key={item.name}
                  href={item.href}
                  className={`capitalize border-b border-zinc-800 pl-4 pr-2 py-3 text-base font-medium hover:bg-primary transition-colors duration-700 flex justify-between items-center group ${isActive(
                    item.href
                  )}`}
                >
                  {item.name.toLowerCase()}
                </Link>
              </>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
