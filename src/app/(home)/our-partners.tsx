import ImageSwap from "@/components/effects/image-swap";
import SectionHead from "@/components/headings/section-head";
import React from "react";
import * as motion from "motion/react-client";

const images = [
  {
    img1: "Gaaga-Slider-Brand-Logo-1-1.png",
    img2: "Gaaga-Slider-Brand-Logo-1-2.png",
  },
  {
    img1: "Gaaga-Slider-Brand-Logo-2-1.png",
    img2: "Gaaga-Slider-Brand-Logo-2-2.png",
  },
  {
    img1: "Gaaga-Slider-Brand-Logo-3-1.png",
    img2: "Gaaga-Slider-Brand-Logo-3-2.png",
  },
  {
    img1: "Gaaga-Slider-Brand-Logo-4-1.png",
    img2: "Gaaga-Slider-Brand-Logo-4-2.png",
  },
  {
    img1: "Gaaga-Slider-Brand-Logo-5-1.png",
    img2: "Gaaga-Slider-Brand-Logo-5-2.png",
  },
  {
    img1: "Gaaga-Slider-Brand-Logo-6-1.png",
    img2: "Gaaga-Slider-Brand-Logo-6-2.png",
  },
];

export default function OurPartners() {
  return (
    <div className="px-40 relative mt-0">
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
      <div className="flex items-center justify-between mt-6 gap-8">
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
              firstImage={`images/${img.img1}`}
              secondImage={`images/${img.img2}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
