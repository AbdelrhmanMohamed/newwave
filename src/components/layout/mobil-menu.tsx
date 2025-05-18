"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "./navbar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NestedMobileMenu } from "./nested-menu";

export function MobileMenu() {
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
      >
        <SheetTrigger asChild>
          <button className="flex items-center text-l gap-2 xl:hidden cursor-pointer group">
            {/* <MenuIcon /> */}
            <div className="w-5 space-y-1 ">
              <span className="w-full block h-0.5  bg-white" />
              <span
                className={`w-full block relative h-[2.2px] bg-white transition-transform duration-300 ${
                  open && "translate-x-1"
                } `}
              />
              <span className="w-full block h-0.5  bg-white" />
            </div>
            <p className="hidden md:block text-lg">Menu</p>
          </button>
        </SheetTrigger>
        <SheetContent className="bg-black shadow-2xl w-68 xl:hidden">
          <nav className="flex flex-col mt-12">
            {menuItems.map((item) =>
              item.links && item.links.length > 0 ? (
                <NestedMobileMenu key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`capitalize border-b border-neutral-800 pl-4 pr-2 py-3 text-base font-medium hover:bg-primary transition-colors duration-700 flex justify-between items-center group ${isActive(
                    item.href
                  )}`}
                >
                  {item.name.toLowerCase()}
                </Link>
              )
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
