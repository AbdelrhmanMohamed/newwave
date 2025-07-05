import SocialSidebar from "@/components/social-sidebar";
import React from "react";
import SectionHead from "@/components/headings/section-head";
import ButtonLine from "@/components/headings/button-line";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Homepage } from "@/types/homepage";
import { getImageUrl } from "@/lib/utils";
import { VideoPlayButton } from "@/components/video-play-button";
import { Play } from "lucide-react";

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        hero: {
          populate: {
            cover: {
              fields: ["url"],
            },
          },
        },
      },
    });
    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}

export default async function HeroSection() {
  const homeData = await getHomeData();
  const hero = homeData?.hero;
  if (!hero) {
    return <div>No hero data available</div>;
  }
  const parts = (hero?.title || "").split(hero?.highlight_text || "");

  return (
    <main className="relative  overflow-hidden min-h-screen max-h-screen">
      <div className="absolute inset-0 bg-[#3D3D3D] opacity-70 z-20 h-screen block xl:hidden " />
      <div className="flex flex-row">
        <div className="absolute w-full top-1/5 md:top-1/4 z-20 flex flex-row gap-3 px-3 lg:gap-10 lg:px-12">
          <SocialSidebar />
          {/* Content */}
          <div className="">
            <SectionHead
              title={hero?.headline || "Welcome to Our World"}
              animate
              show={{
                start: true,
              }}
            />
            <h2 className="text-3xl md:text-[2.8rem] font-bold leading-snug mb-4 mt-4 w-11/12">
              {parts[0]}{" "}
              <span className="md:whitespace-nowrap text-primary">
                {hero?.highlight_text}
              </span>{" "}
              <br className="hidden md:block" />
              <span className="block md:inline">{parts[0]}</span>
              <span className="text-2xl size-3 bg-primary inline-block rounded-full" />
            </h2>

            <p className="text-neutral-400 max-w-xl ">{hero?.description}</p>

            <div className="flex items-center gap-1 mt-10">
              <Link href={hero?.button_link || "/"}>
                <ButtonLine title={hero?.button_text || "Discover Our World"} />
              </Link>
              <VideoPlayButton videoUrl={hero?.youtube_link || ""} size="sm">
                <button className="size-11 cursor-pointer mx-4 relative  rounded-full inline-flex justify-center text-white p-1 bg-primary hover:scale-105 transition-all duration-300">
                  <span className="border border-white rounded-full w-full h-full flex items-center justify-center">
                    <span className="bg-white rounded-full p-1">
                      <Play className="w-4 h-4 text-primary fill-primary " />
                    </span>
                  </span>
                </button>
              </VideoPlayButton>
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
            src={getImageUrl(hero?.cover?.url) || "/images/hero-bg.webp"}
            alt="Person using VR headset"
            className="object-contain"
            fill
          />
        </motion.div>
      </div>
    </main>
  );
}
