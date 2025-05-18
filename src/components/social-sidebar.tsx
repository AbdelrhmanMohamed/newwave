import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="absolute  top-5/12 transform -translate-y-1/2 flex flex-col items-center space-y-12">
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Youtube className="size-8 stroke-[1.5px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Twitter className="size-8 stroke-[1.5px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Facebook className="size-8 stroke-[1.5px]" />
      </a>
      <a
        href="#"
        className="text-neutral-400 py-1 hover:text-white transition-colors"
      >
        <Linkedin className="size-8 stroke-[1.5px]" />
      </a>
    </div>
  );
}
