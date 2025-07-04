import React from "react";
import * as motion from "motion/react-client";
import InstagramCard from "./cards/instagram-card";
import { Media } from "@/types/common";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getImageUrl } from "@/lib/utils";
import { ImageSlider } from "./effects/slider-images";

type MediaGallery = {
  id: number;
  url: string;
  image: Media;
};

async function getMediaGallery(): Promise<MediaGallery[] | null> {
  try {
    const res = await fetchContentType("galleries", {
      populate: {
        image: {
          fields: ["id", "url", "alternativeText", "caption"],
        },
      },
    });

    return res?.data as MediaGallery[] | null;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}

export default async function GalleryMedia() {
  const mediaGallery = await getMediaGallery();
  if (!mediaGallery || mediaGallery.length === 0) {
    return <div>No media gallery data available</div>;
  }
  return (
    <motion.section
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      className="px-4 py-20"
    >
      <ImageSlider
        items={mediaGallery.map((media) => (
          <InstagramCard
            key={media.id}
            bgUrl={getImageUrl(media.image?.url)}
            className="block aspect-4/4 "
          />
        ))}
        carouselItemClassName="basis-full sm:basis-1/2 lg:basis-1/4 max-h-[350px]"
        slidesToScroll={1}
      />
    </motion.section>
  );
}

//
