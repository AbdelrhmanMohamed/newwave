"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon, TelegramIcon } from "./icons";
import { motion } from "motion/react";
import { GlobalData } from "@/types/global";
import { usePathname } from "next/navigation";

type SocialIcon = {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
};

// Simple Tooltip component
function Tooltip({
  children,
  content,
  show,
}: {
  children: React.ReactNode;
  content: string;
  show: boolean;
}) {
  return (
    <div className="relative group">
      {children}
      <div
        className={cn(
          "absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-white text-white text-sm rounded whitespace-nowrap pointer-events-none transition-all duration-200 z-10",
          show ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <span className="text-black">{content}</span>
        {/* Arrow pointing left */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-white" />
      </div>
    </div>
  );
}

type FloatingActionButtonProps = {
  data: GlobalData;
};

export default function FloatingActionButton({
  data,
}: FloatingActionButtonProps) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const socialIcons: SocialIcon[] = [
    {
      icon: <WhatsAppIcon className="w-10 h-10" />,
      color: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
      href: `https://wa.me/${data.whatsapp}?text=Hello%20NewWave!`,
    },
    {
      icon: <Mail size={30} />,
      color: "bg-rose-500/90 hover:bg-rose-500",
      label: "Email",
      href: `mailto:${data.email1}`,
    },
    {
      icon: <TelegramIcon className="w-12 h-12" />,
      color: "bg-[#2481cc] hover:bg-[#1a8ad5]",
      label: "Telegram",
      href: `https://t.me/${data.email2}`,
    },
  ];
  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // const scrollTop = window.scrollY;
      // const windowHeight = window.innerHeight;
      // const fullHeight = document.body.scrollHeight;
      // Show only when near the bottom of the page
      // if (scrollTop) {
      //   setIsVisible(true);
      // } else {
      //   setIsVisible(false);
      // }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const notAllowedPaths = useRef(["/blog", "/blog/[slug]"]);
  useEffect(() => {
    if (notAllowedPaths.current.includes(pathName)) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [pathName]);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Social Icons */}
      <div className="flex flex-col-reverse gap-3 mb-3">
        {socialIcons.reverse().map((item, index) => (
          <Tooltip
            key={item.label}
            content={item.label}
            show={hoveredIcon === item.label && isOpen}
          >
            <a
              href={item.href}
              aria-label={item.label}
              className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300",
                item.color,
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0 pointer-events-none"
              )}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredIcon(item.label)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {item.icon}
            </a>
          </Tooltip>
        ))}
      </div>

      {/* Main FAB Button */}
      <Tooltip
        content={isOpen ? "Close menu" : "Contact Us"}
        show={isMainHovered}
      >
        <button
          onClick={toggleFAB}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary text-white flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50 cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Contact Us"}
          onMouseEnter={() => setIsMainHovered(true)}
          onMouseLeave={() => setIsMainHovered(false)}
        >
          <div
            className={cn(
              "transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          >
            {isOpen ? <X size={36} /> : <MessageSquare size={36} />}
          </div>
        </button>
      </Tooltip>
    </motion.div>
  );
}
