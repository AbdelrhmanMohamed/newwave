import AnimatedText from "@/components/effects/animate-text";
import FAQAccordion from "@/components/faq";
import SectionHead from "@/components/headings/section-head";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { FAQGroup } from "@/types/faq";
import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import CircleScroll from "@/components/effects/circel-scroll";

async function getFAQGroup(): Promise<FAQGroup[] | null> {
  try {
    const res = await fetchContentType("faq-groups", {
      populate: "*",
      limit: 1,
    });

    return res?.data as FAQGroup[] | null;
  } catch (error) {
    console.error("Error fetching base FAQ group data:", error);
    return null;
  }
}

export default async function FaqSection() {
  const faqGroups = await getFAQGroup();
  if (!faqGroups || faqGroups.length === 0) {
    return <div>No FAQ data available</div>;
  }
  return (
    <div className="flex flex-nowrap items-center py-20 px-6 relative">
      <div
        className={`min-w-full max-w-full lg:min-w-[55%] lg:max-w-[55%] relative left-5 z-10 bg-background border border-primary p-8 h-fit`}
      >
        <SectionHead
          title="Popular Questions"
          show={{
            start: true,
          }}
          animate
        />
        <AnimatedText
          text="FAQ"
          className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-10"
        />
        <FAQAccordion faqs={faqGroups[0].faqs} defaultOpenItem="item-1" />
      </div>
      <div className="absolute z-40 top-0 left-0 w-full h-full pointer-events-none">
        <CircleScroll />
      </div>
      <div className="h-[900px] max-w-4xl relative lg:min-w-[50%] lg:max-w-[50%]">
        <Image
          src={getImageUrl(faqGroups[0]?.image?.url)}
          alt="FAQ Image"
          fill
          className="object-cover bg-center "
        />
      </div>
    </div>
  );
}
