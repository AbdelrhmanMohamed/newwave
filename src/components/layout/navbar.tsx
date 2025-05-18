"use client";
// import { useEffect, useState } from "react";
import { Link_Item } from "@/types/link";
import LinkItem from "./link-item";
import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { MobileMenu } from "./mobil-menu";
import { useEffect, useState } from "react";

export const menuItems: Link_Item[] = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT",
    href: "/about",
    links: [
      { name: "ABOUT US", href: "/about-us" },
      { name: "OUR PARTNERS", href: "/our-partners" },
      { name: "FAQ", href: "/faq" },
      { name: "OUR TEAM", href: "/team" },
      { name: "CAREERS", href: "/careers" },
    ],
  },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
];

export default function NavBar() {
  const { scrollY } = useScroll();

  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // تابع يرصد تغير scrollY ويحدد اتجاه التمرير
    return scrollY.on("change", (currentY) => {
      if (currentY <= 10) {
        setVisible(true);
      } else if (currentY > lastScrollY) {
        // Scroll Down → نعرض navbar
        setVisible(true);
      } else if (currentY < lastScrollY) {
        // Scroll Up → نخفي navbar
        setVisible(false);
      }
      setLastScrollY(currentY);
    });
  }, [scrollY, lastScrollY]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`z-30 px-8 md:px-[4.5rem] py-6 flex justify-between items-center text-white fixed top-0 w-full bg-background/5 backdrop-blur-3xl xl:backdrop-blur-lg`}
    >
      <Image src="/images/logo.svg" alt="logo-svg" width={180} height={200} />
      <nav className="hidden xl:flex items-center space-x-10">
        {menuItems.map((item) => (
          <LinkItem
            key={item.name}
            href={item.href}
            name={item.name}
            links={item?.links || []}
          />
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <MobileMenu />
        <button className="border hidden sm:flex border-neutral-600 px-8 py-3.5 font-bold  items-center cursor-pointer text-base hover:border-primary hover:text-primary transition duration-500 group">
          <span className="bg-primary mr-2 rounded-full size-2 group-hover:bg-white transition duration-500" />
          Lets start
        </button>
      </div>
    </motion.header>
  );
}
