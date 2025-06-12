"use client";

import React from "react";
import { Link2, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { LinkedinIcon, FacebookIcon, TwitterIcon } from "./icons";

interface ShareSectionProps {
  url: string;
  title: string;
  className?: string;
  shareTitle?: string;
}

const ShareSection = ({
  url,
  title,
  className,
  shareTitle = "Share our blog",
}: ShareSectionProps) => {
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

  return (
    <div className={cn("border-t border-border pt-8", className)}>
      <div className="text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-6">
          <Share2Icon className="inline-block mr-2 h-4 w-4" />
          {shareTitle}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 px-10">
          {shareButtons.map((button) => {
            const ButtonComponent = button.onClick ? "button" : "a";

            return (
              <ButtonComponent
                key={button.name}
                href={button.url}
                onClick={button.onClick}
                target={button.url ? "_blank" : undefined}
                rel={button.url ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex  items-center cursor-pointer gap-3 min-w-36 px-6 py-3 shadow-sm transition-all duration-200 transform  hover:border-primary/50 border border-neutral-700/50"
                )}
              >
                <button.icon className={cn("h-4 w-4 text-neutral-200")} />
                <span className="text-neutral-100 text-sm">{button.name}</span>
              </ButtonComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
