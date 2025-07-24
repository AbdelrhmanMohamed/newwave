import ImageSwap from "@/components/effects/image-swap";
import { getImageUrl } from "@/lib/utils";
import { Partner } from "@/types/paterner";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/kibo-ui/marquee";

type Props = {
  partners: Partner[];
};
export function PartnerSection({ partners }: Props) {
  return (
    <div className="mb-16 mt-8">
      <div className="flex w-full size-full items-center justify-center">
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
