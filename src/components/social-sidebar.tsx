import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import ScrollIndicator from "./scroll-indicator";

export default function SocialSidebar() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Youtube className="size-7 stroke-[1px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Twitter className="size-7 stroke-[1px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Facebook className="size-7 stroke-[1px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Linkedin className="size-7 stroke-[1px]" />
      </a>
      <ScrollIndicator />
    </div>
  );
}
