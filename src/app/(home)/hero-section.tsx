import SocialSidebar from "@/components/social-sidebar";
import React from "react";
import SectionHead from "@/components/headings/section-head";
import ButtonLine from "@/components/headings/button-line";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-[#3D3D3D] opacity-70 z-20 h-screen block xl:hidden " />
      <div className="flex flex-row">
        <div className="absolute w-full top-1/5 md:top-1/4 z-20 flex flex-row gap-3 px-3 lg:gap-10 lg:px-12">
          <SocialSidebar />
          {/* Content */}
          <div className="">
            <SectionHead
              title="New Waves"
              animate
              show={{
                start: true,
              }}
            />
            <h2 className="text-3xl md:text-[2.8rem] font-bold leading-snug mb-4 mt-4 w-11/12">
              Ridding the{" "}
              <span className="md:whitespace-nowrap text-primary">
                Crest of Innovation
              </span>{" "}
              <br className="hidden md:block" />
              <span className="block md:inline"> in Events & PR</span>
            </h2>

            <p className="text-neutral-400 max-w-xl ">
              Pioneering unforgettable experiences in Saudi Arabia and beyond,
              powered by technology and visionary expertise.
            </p>

            <div className="flex items-center space-x-6 mt-10">
              <ButtonLine title="Discover Our World" />
            </div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          animate={{ scale: [1, 1.26] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-full h-[650px] xl:h-[700px] bg-gradient md:w-10/12 lg:w-8/12 xl:w-6/12 ml-auto"
          layout
        >
          <Image
            src="/images/slider-Image-1.jpg"
            alt="Person using VR headset"
            className="object-contain"
            fill
          />
        </motion.div>
      </div>
    </main>
  );
}
