"use client";

import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  Youtube,
  Globe,
} from "lucide-react";

import { cn } from "@/lib/utils";

export enum SocialPlatform {
  Linkedin = "linkedin",
  Twitter = "twitter",
  Facebook = "facebook",
  Instagram = "instagram",
  Github = "github",
  Youtube = "youtube",
}

type SocialIconProps = {
  name: `${SocialPlatform}`; // Or: name: SocialPlatform;
  className?: string;
};

const iconMap: Record<SocialPlatform, React.ElementType> = {
  [SocialPlatform.Linkedin]: Linkedin,
  [SocialPlatform.Twitter]: Twitter,
  [SocialPlatform.Facebook]: Facebook,
  [SocialPlatform.Instagram]: Instagram,
  [SocialPlatform.Github]: Github,
  [SocialPlatform.Youtube]: Youtube,
};

export const SocialIcon = ({ name, className }: SocialIconProps) => {
  const Icon = iconMap[name] ?? Globe;
  return <Icon className={cn("size-7 stroke-[1px]", className)} />;
};
