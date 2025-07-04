import ImageSwap from "@/components/effects/image-swap";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import * as motion from "motion/react-client";
import { ImageSlider } from "@/components/effects/slider-images";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { Partner } from "@/types/paterner";
import { getImageUrl } from "@/lib/utils";

async function getPartners(): Promise<Partner[] | null> {
  try {
    const res = await fetchContentType("partners", {
      populate: "*",
    });

    return res?.data as Partner[] | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}
export default async function OurPartners() {
  const partners = await getPartners();
  if (!partners || partners.length === 0) {
    return <div>No partners data available</div>;
  }
  return (
    <div className="px-6 md:px-12 xl:px-40  relative mt-20 ">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 1, opacity: 100 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <SectionHead
          title="Associated Partners"
          animate
          show={{
            start: true,
          }}
        />
      </motion.div>
      <div className="w-full mt-6">
        <ImageSlider
          items={partners.map((partner) => (
            <ImageSwap
              firstImage={getImageUrl(partner?.gray_logo?.url)}
              secondImage={getImageUrl(partner?.base_logo?.url)}
              key={partner.id}
            />
          ))}
        />
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center mt-6 gap-8 flex-wrap">
        {images.map((img, index) => (
          <motion.div
            key={img.img1}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <ImageSwap
              firstImage={`logos/${img.img1}`}
              secondImage={`logos/${img.img2}`}
            />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
