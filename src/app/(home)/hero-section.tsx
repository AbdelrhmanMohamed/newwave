"use client";
import SocialSidebar from "@/components/social-sidebar";
import React from "react";
// import { Play } from "lucide-react";
// import { motion } from "motion/react";
import SectionHead from "@/components/headings/section-head";
import ButtonLine from "@/components/headings/button-line";
import ImageSwap from "@/components/effects/image-swap";

export default function HeroSection() {
  return (
    <main className="relative">
      {/* Background Image with Framer Motion */}
      {/* <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.4 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/images/slider-Image-1.jpg')] bg-cover bg-center h-screen"
      /> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 z-10 h-screen" /> */}
      <div className="flex flex-row ">
        {/* Social Media Sidebar */}
        <div className="flex flex-col items-center space-y-8 px-12 md:px-14 lg:px-20">
          <SocialSidebar />
        </div>

        {/* Content */}
        <div className="lg:w-6/12 w-full mt-12 md:mt-20 z-30">
          <SectionHead
            title="New Waves"
            animate
            show={{
              start: true,
            }}
          />
          <h2 className="text-3xl md:text-[2.8rem] font-bold leading-16 mb-8 mt-4">
            Ridding the{" "}
            <span className="whitespace-nowrap text-primary">
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

        {/* Image */}
        {/* <motion.div
          animate={{ scale: [1.1, 1.26] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-1/1 xl:w-7/12 hidden xl:flex bottom-20"
        >
          <Image
            src="/images/slider-Image-1.jpg"
            alt="Person using VR headset"
            className="object-contain"
            width={900}
            height={900}
          />
        </motion.div> */}
      </div>
      {/* Example 1 - Default */}
      <div className="p-6 border rounded-lg shadow-sm mt-16">
        <h2 className="mb-4 font-medium">Default</h2>
        <ImageSwap
          firstImage="https://newwav.net/wp-content/uploads/2023/06/Gaaga-Slider-Brand-Logo-1-1.png"
          secondImage="https://newwav.net/wp-content/uploads/2023/06/Gaaga-Slider-Brand-Logo-1-2.png"
          width={144}
          height={40}
        />
      </div>
    </main>
  );
}
