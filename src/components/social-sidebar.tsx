import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import ScrollIndicator from "./scroll-indicator";
import { getGlobalData } from "@/lib/shared/globalData";

export default async function SocialSidebar() {
  const globalData = await getGlobalData();
  return (
    <div className="flex flex-col items-center space-y-10">
      <a
        href={globalData?.youtube_link || "#"}
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Youtube className="size-7 stroke-[1px]" />
      </a>
      <a
        href={globalData?.twitter_link || "#"}
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Twitter className="size-7 stroke-[1px]" />
      </a>
      <a
        href={globalData?.facebook_link || "#"}
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Facebook className="size-7 stroke-[1px]" />
      </a>
      <a
        href={globalData?.linkedin_link || "#"}
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Linkedin className="size-7 stroke-[1px]" />
      </a>
      <ScrollIndicator />
    </div>
  );
}
