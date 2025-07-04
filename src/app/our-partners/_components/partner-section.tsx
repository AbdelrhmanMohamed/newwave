import ImageSwap from "@/components/effects/image-swap";
import { getImageUrl } from "@/lib/utils";
import { Partner } from "@/types/paterner";
import * as motion from "motion/react-client";

type Props = {
  partners: Partner[];
};
export function PartnerSection({ partners }: Props) {
  return (
    <div className="mb-16 mt-8">
      <div className="grid grid-cols-5 gap-5 space-y-5">
        {partners.map((img, index) => (
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
              firstImage={getImageUrl(img.gray_logo?.url)}
              secondImage={getImageUrl(img.base_logo?.url)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
