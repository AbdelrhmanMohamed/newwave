import ImageSwap from "@/components/effects/image-swap";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import * as motion from "motion/react-client";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { Homepage } from "@/types/homepage";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";

async function getHomeData(): Promise<Homepage | null> {
  try {
    const res = await fetchContentType("home-page", {
      populate: {
        partners: {
          populate: {
            gray_logo: {
              fields: ["url"],
            },
            base_logo: {
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

export default async function OurPartners() {
  const homeData = await getHomeData();
  const partners = homeData?.partners || [];

  if (!partners || partners.length === 0) {
    return <div>No partners data available</div>;
  }
  return (
    <div className="px-6 md:px-12 xl:px-40 relative mt-20">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 1, opacity: 100 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <SectionHead
          title={homeData?.partners_title || "Associated Partners2"}
          animate
          show={{
            start: true,
          }}
        />
      </motion.div>
      <div className="flex w-full mt-6 size-full items-center justify-center">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent autoFill pauseOnHover={false} direction="right">
            {partners.map((partner) => (
              <MarqueeItem className="h-32 w-32 mr-8" key={partner.id}>
                <ImageSwap
                  firstImage={getImageUrl(partner?.gray_logo?.url)}
                  secondImage={getImageUrl(partner?.base_logo?.url)}
                  key={partner.id}
                  firstAlt={partner.name}
                  secondAlt={partner.name}
                  href={partner.website}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
}
