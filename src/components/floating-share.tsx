"use client";
import React, { useState } from "react";
import { Share2, Link2 } from "lucide-react";
import { LinkedinIcon, FacebookIcon, TwitterIcon } from "./icons";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface FloatingShareProps {
  url: string;
  title: string;
}

const FloatingShare = ({ url, title }: FloatingShareProps) => {
  const [isVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.pageYOffset > 300) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //       setIsExpanded(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-medium">Link copied!</span>
        </div>,
        {
          duration: 2000,
        }
      );
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bgColor: "text-[#1877F2] hover:text-[#166FE5]",
      textColor: "text-white",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bgColor: "text-[#1DA1F2] hover:text-[#1A91DA]",
      textColor: "text-white",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: "text-[#0A66C2] hover:text-[#095BA8]",
      textColor: "text-white",
    },
    // {
    //   name: "WhatsApp",
    //   icon: MessageCircle,
    //   url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    //   bgColor: "bg-[#25D366] hover:bg-[#22C55E]",
    //   textColor: "text-white",
    // },
    {
      name: "Copy Link",
      icon: Link2,
      onClick: copyToClipboard,
      bgColor: "bg-muted hover:bg-muted/80",
      textColor: "text-muted-foreground hover:text-foreground",
    },
  ];

  if (!isVisible) return null;

  return (
    <Popover>
      <PopoverTrigger
        title="Share"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex cursor-pointer text-neutral-200 items-center gap-2 hover:text-neutral-300 transition-colors duration-200"
      >
        <Share2 size={16} />
        Share
      </PopoverTrigger>
      <PopoverContent className="w-fit p-3 rounded-none bg-background border-neutral-700/50">
        <div className="relative w-fit">
          <div
            className={cn(
              "flex flex-col gap-3 transition-all duration-300 ease-in-out overflow-hidden"
            )}
          >
            <div className="text-xs font-medium text-muted-foreground text-center mb-1">
              Share
            </div>
            {shareButtons.map((button) => {
              const ButtonComponent = button.onClick ? "button" : "a";

              return (
                <ButtonComponent
                  key={button.name}
                  href={button.url}
                  onClick={button.onClick}
                  target={button.url ? "_blank" : undefined}
                  rel={button.url ? "noopener noreferrer" : undefined}
                  className="flex cursor-pointer items-center justify-center w-10 h-10 border border-neutral-700/50 hover:border-primary/50 transition-all "
                  title={button.name}
                >
                  <button.icon className="h-5 w-5 text-neutral-400" />
                </ButtonComponent>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingShare;
