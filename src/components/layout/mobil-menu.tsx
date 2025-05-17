"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { menuItems } from "./navbar";
import Link from "next/link";

export function MobileMenu() {
  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center text-l gap-1 xl:hidden cursor-pointer">
            <MenuIcon />
            <p className="hidden md:block">Menu</p>
          </button>
        </SheetTrigger>
        <SheetContent className="bg-black shadow-2xl w-68">
          <nav className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`uppercase my-4 tracking-[2.5px] text-sm font-medium hover:text-primary transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
