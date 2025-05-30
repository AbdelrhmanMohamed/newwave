"use client";

import { Globe } from "lucide-react";
import {
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "./icons";
import { cn } from "@/lib/utils";

export enum SocialPlatform {
  Linkedin = "linkedin",
  Twitter = "twitter",
  Facebook = "facebook",
  Instagram = "instagram",
  // Github = "github",
  // Youtube = "youtube",
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
  // [SocialPlatform.Github]: GithubIcon,
  // [SocialPlatform.Youtube]: YoutubeIcon,
};

export const SocialIcon = ({ name, className }: SocialIconProps) => {
  const Icon = iconMap[name] ?? Globe;
  return <Icon className={cn("size-7", className)} />;
};
