import { Marquee } from "@/components/effects/marquee";
import ButtonLine from "@/components/headings/button-line";
import Link from "next/link";
import React from "react";

type ContactUsProps = {
  bgUrl?: string;
};

export default function ContactUsSection({
  bgUrl = "/images/home-bg-section-1.webp",
}: ContactUsProps) {
  return (
    <div
      className="bg-cover relative h-[700px] my-10 w-full flex items-end py-24"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className="w-full">
        <Marquee>
          <h1 className="text-white/20 text-7xl font-bold">OUR PORTFOLIO</h1>
        </Marquee>
        <p className="text-white text-5xl font-semibold mb-8 px-8 md:px-16 max-w-7xl leading-14">
          Creative Solutions. Tangible Results.
        </p>
        <Link href="/contact-us" className="text-white px-8 md:px-16 block">
          <ButtonLine title="Let's Talk" />
        </Link>
      </div>
    </div>
  );
}
