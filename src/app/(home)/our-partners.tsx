import ImageSwap from "@/components/effects/image-swap";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import * as motion from "motion/react-client";
import { ImageSlider } from "@/components/effects/slider-images";

const images = [
  {
    img1: "raketamedia-logo.png",
    img2: "raketamedia-logo.png",
  },
  {
    img1: "botai-logo.png",
    img2: "botai-logo.png",
  },
  {
    img1: "vin-logo.png",
    img2: "vin-logo.png",
  },
  {
    img1: "air-logo.png",
    img2: "air-logo.png",
  },
  {
    img1: "vr-logo.png",
    img2: "vr-logo.png",
  },
  {
    img1: "sk-logo.png",
    img2: "sk-logo.png",
  },
  {
    img1: "icon-logo.png",
    img2: "icon-logo.png",
  },
  {
    img1: "key-films-logo.png",
    img2: "key-films-logo.png",
  },
  {
    img1: "be-logo.png",
    img2: "be-logo.png",
  },
  {
    img1: "veo-logo.png",
    img2: "veo-logo.png",
  },
];

export default function OurPartners() {
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
          items={images.map((img) => (
            <ImageSwap
              firstImage={`logos/${img.img1}`}
              secondImage={`logos/${img.img2}`}
              key={img.img1}
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
