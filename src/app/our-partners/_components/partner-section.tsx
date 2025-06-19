import ImageSwap from "@/components/effects/image-swap";
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
    img1: "Gaaga-Slider-Brand-Logo-6-1.png",
    img2: "Gaaga-Slider-Brand-Logo-6-2.png",
  },
  {
    img1: "Gaaga-Brand-Logo-4-1.png",
    img2: "Gaaga-Brand-Logo-4-2.png",
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
  {
    img1: "Gaaga-Slider-Brand-Logo-3-1.png",
    img2: "Gaaga-Slider-Brand-Logo-3-2.png",
  },
];

export function PartnerSection() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-5 gap-5 space-y-5">
        {images.map((img, index) => (
          <motion.div
            key={index}
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
