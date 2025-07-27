import React from "react";
import MarketingSection from "../about-us/_components/marketing";
import * as motion from "motion/react-client";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Homepage } from "@/types/homepage";

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        achievements: {
          populate: "*",
        },
        marketing: {
          populate: "*",
        },
      },
    });

    return res?.data as Homepage | null;
  } catch (error) {
    console.error("Error fetching marketing data:", error);
    return null;
  }
}

export default async function MarketingSectionHome() {
  const homeData = await getHomeData();
  const marketing = homeData?.marketing;
  if (!marketing) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className=""
    >
      <MarketingSection
        bgUrl=""
        title="Our Marketing Approach"
        className="bg-[#14171b] py-0 mt-8"
        highlights={homeData?.achievements || []}
        marketing={marketing}
      />
    </motion.section>
  );
}
