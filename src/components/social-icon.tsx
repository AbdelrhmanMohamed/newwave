"use client";

import { Globe } from "lucide-react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  XIcon,
} from "./icons";
import { cn } from "@/lib/utils";

export enum SocialPlatform {
  Linkedin = "linkedin",
  Twitter = "twitter",
  Facebook = "facebook",
  Instagram = "instagram",
  Youtube = "youtube",
  X = "x", // X is the new name for Twitter
}

type SocialIconProps = {
  name: `${SocialPlatform}`; // Or: name: SocialPlatform;
  className?: string;
};

const iconMap: Record<SocialPlatform, React.ElementType> = {
  [SocialPlatform.Linkedin]: LinkedinIcon,
  [SocialPlatform.Twitter]: TwitterIcon,
  [SocialPlatform.Facebook]: FacebookIcon,
  [SocialPlatform.Instagram]: InstagramIcon,
  [SocialPlatform.Youtube]: YoutubeIcon,
  [SocialPlatform.X]: XIcon,
  // [SocialPlatform.Github]: GithubIcon,
};

export const SocialIcon = ({ name, className }: SocialIconProps) => {
  const Icon = iconMap[name] ?? Globe;
  return <Icon className={cn("size-7", className)} />;
};
