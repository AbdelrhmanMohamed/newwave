import { Facebook, Youtube, Linkedin } from "lucide-react";
import ScrollIndicator from "./scroll-indicator";
import { getGlobalData } from "@/lib/shared/globalData";
import { SocialIcon } from "./social-icon";

export default async function SocialSidebar() {
  const globalData = await getGlobalData();
  return (
    <div className="flex flex-col items-center space-y-10">
      <a
        href={globalData?.youtube_link || "#"}
        className="text-neutral-400 py-1 hover:text-primary transition-colors"
        target="_blank"
      >
        <Youtube />
      </a>
      <a
        href={globalData?.twitter_link || "#"}
        className="text-neutral-400 py-1 hover:text-primary transition-colors"
        target="_blank"
      >
        <SocialIcon name="x" className="size-9 stroke-[1px]" />
      </a>
      <a
        href={globalData?.facebook_link || "#"}
        className="text-neutral-400 py-1 hover:text-primary transition-colors"
        target="_blank"
      >
        <Facebook className="size-7 stroke-[1px]" />
      </a>
      <a
        href={globalData?.linkedin_link || "#"}
        className="text-neutral-400 py-1 hover:text-primary transition-colors"
        target="_blank"
      >
        <Linkedin className="size-7 stroke-[1px]" />
      </a>
      <ScrollIndicator />
    </div>
  );
}
