import {
  Facebook,
  Instagram,
  Twitter,
  PinIcon as Pinterest,
} from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-12">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook className="size-7 stroke-[1.5px]" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Instagram className="size-7 stroke-[1.5px]" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter className="size-7 stroke-[1.5px]" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Pinterest className="size-7 stroke-[1.5px]" />
      </a>
    </div>
  );
}
